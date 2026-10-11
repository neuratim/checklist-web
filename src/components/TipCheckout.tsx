import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { useCallback, useMemo, useState, type ChangeEvent, type FormEvent, type MouseEvent } from "react";
import { STRIPE_API_BASE_URL } from "../../site.config";
import {
    DEFAULT_TIP_MODE,
    ELEMENTS_APPEARANCE,
    EMAIL_PATTERN,
    MINOR_UNITS_PER_MAJOR,
    TIP_ENDPOINTS,
    TIP_MAX_AMOUNT,
    TIP_MIN_AMOUNT,
    TIP_PRESETS,
} from "../constants/tip";
import { currencyForLanguage } from "../i18n/languages";
import { useLanguage } from "../i18n/useLanguage";
import type {
    CreatePaymentIntentResponse,
    PaymentFormProps,
    TipCheckoutProps,
    TipCheckoutStep,
    TipMode,
} from "../types/tip";
import "./TipCheckout.css";

let stripePromise: Promise<Stripe | null> | undefined;

function getStripePromise(publishableKey: string): Promise<Stripe | null> {
    stripePromise ??= loadStripe(publishableKey);
    return stripePromise;
}

function PaymentForm({ amountLabel, mode, onBack, onSuccess }: PaymentFormProps) {
    const { dictionary } = useLanguage();
    const { quickTip } = dictionary.freeSupport;
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(
        async (event: FormEvent) => {
            event.preventDefault();
            if (!stripe || !elements) {
                return;
            }

            setIsProcessing(true);
            setError(null);

            const { error: confirmError } = await stripe.confirmPayment({
                elements,
                redirect: "if_required",
            });

            if (confirmError) {
                setError(confirmError.message ?? quickTip.errorGeneric);
                setIsProcessing(false);
                return;
            }

            onSuccess();
        },
        [elements, onSuccess, quickTip.errorGeneric, stripe],
    );

    const submitLabel = mode === "monthly" ? quickTip.monthlyPayButton : quickTip.payButton;

    return (
        <form className="tip-checkout-form" onSubmit={handleSubmit}>
            <PaymentElement />
            {error && (
                <p className="tip-checkout-error" role="alert">
                    {error}
                </p>
            )}
            <div className="tip-checkout-actions">
                <button className="btn btn-ghost" disabled={isProcessing} onClick={onBack} type="button">
                    {quickTip.backButton}
                </button>
                <button
                    className="btn btn-primary"
                    disabled={isProcessing || !stripe || !elements}
                    type="submit"
                >
                    {isProcessing ? quickTip.processingButton : submitLabel.replace("{amount}", amountLabel)}
                </button>
            </div>
        </form>
    );
}

export function TipCheckout({ publishableKey }: TipCheckoutProps) {
    const { dictionary, language } = useLanguage();
    const { quickTip } = dictionary.freeSupport;
    const [mode, setMode] = useState<TipMode>(DEFAULT_TIP_MODE);
    const [step, setStep] = useState<TipCheckoutStep>({ kind: "amount" });
    const [selectedAmount, setSelectedAmount] = useState<number>(TIP_PRESETS[DEFAULT_TIP_MODE][0]);
    const [customAmount, setCustomAmount] = useState("");
    const [email, setEmail] = useState("");
    const [isCreatingIntent, setIsCreatingIntent] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const stripe = useMemo(() => getStripePromise(publishableKey), [publishableKey]);

    // The currency follows the language, so a reader is quoted and charged in the one
    // their copy is written around. Rebuilt only when either changes — a formatter is
    // expensive enough to be worth not making on every keystroke in the amount field.
    const currency = currencyForLanguage(language);
    const formatter = useMemo(
        () => new Intl.NumberFormat(language, { currency, style: "currency" }),
        [currency, language],
    );

    const presets = TIP_PRESETS[mode];
    const resolvedAmount = customAmount.trim() ? Number(customAmount) : selectedAmount;
    const hasValidAmount =
        Number.isFinite(resolvedAmount) &&
        resolvedAmount >= TIP_MIN_AMOUNT &&
        resolvedAmount <= TIP_MAX_AMOUNT;
    const isMonthly = mode === "monthly";

    const handleBackToAmount = useCallback(() => setStep({ kind: "amount" }), []);
    const handlePaymentSuccess = useCallback(() => setStep({ kind: "success" }), []);
    const handleCustomAmountChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(event.target.value);
        setFormError(null);
    }, []);
    const handleEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setFormError(null);
    }, []);
    // The amount rides on the button as a data attribute so every preset can share one
    // handler, instead of each render minting a fresh closure per button.
    const handlePresetClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setSelectedAmount(Number(event.currentTarget.dataset.amount));
        setCustomAmount("");
        setFormError(null);
    }, []);

    // Switching tab abandons whatever was in flight: a client secret belongs to one
    // payment intent or one subscription's first invoice, so it cannot be carried across.
    const handleModeClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        const next = event.currentTarget.dataset.mode as TipMode;
        setMode(next);
        setSelectedAmount(TIP_PRESETS[next][0]);
        setCustomAmount("");
        setFormError(null);
        setStep({ kind: "amount" });
    }, []);

    const elementsOptions = useMemo<StripeElementsOptions | undefined>(
        () =>
            step.kind === "payment"
                ? { appearance: ELEMENTS_APPEARANCE, clientSecret: step.clientSecret }
                : undefined,
        [step],
    );

    const handleContinue = useCallback(async () => {
        if (!hasValidAmount) {
            setFormError(quickTip.errorAmount);
            return;
        }

        // Stripe needs a customer to bill every month, and the donor needs somewhere to
        // receive the receipt that tells them how to stop it — so the monthly tab, and
        // only the monthly tab, asks for an address.
        const trimmedEmail = email.trim();
        if (isMonthly && !EMAIL_PATTERN.test(trimmedEmail)) {
            setFormError(quickTip.errorEmail);
            return;
        }

        setFormError(null);
        setIsCreatingIntent(true);

        const amountCents = Math.round(resolvedAmount * MINOR_UNITS_PER_MAJOR);

        try {
            const response = await fetch(`${STRIPE_API_BASE_URL}${TIP_ENDPOINTS[mode]}`, {
                body: JSON.stringify({
                    amount: amountCents,
                    currency,
                    ...(isMonthly ? { email: trimmedEmail } : {}),
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
            });

            const data = (await response.json()) as CreatePaymentIntentResponse;

            if (!response.ok || !data.clientSecret) {
                setFormError(quickTip.errorGeneric);
                return;
            }

            setStep({ amountCents, clientSecret: data.clientSecret, kind: "payment" });
        } catch {
            setFormError(quickTip.errorGeneric);
        } finally {
            setIsCreatingIntent(false);
        }
    }, [
        currency,
        email,
        hasValidAmount,
        isMonthly,
        mode,
        quickTip.errorAmount,
        quickTip.errorEmail,
        quickTip.errorGeneric,
        resolvedAmount,
    ]);

    const continueLabel = isMonthly ? quickTip.monthlyPayButton : quickTip.payButton;
    const pendingAmountLabel = formatter.format(hasValidAmount ? resolvedAmount : selectedAmount);
    const tabs: readonly { readonly label: string; readonly value: TipMode }[] = [
        { label: quickTip.tabOneOff, value: "oneOff" },
        { label: quickTip.tabMonthly, value: "monthly" },
    ];

    return (
        <div className="tip-checkout card">
            <h3 className="tip-checkout-heading">{quickTip.heading}</h3>

            {/* A grid of equal columns rather than two buttons sized by their own labels:
                the two words differ in length in every language, and tabs that are not the
                same shape read as a mistake. Selecting one changes colour only, never a
                size, so nothing under the pointer moves. */}
            <div aria-label={quickTip.heading} className="tip-checkout-tabs" role="tablist">
                {tabs.map((tab) => (
                    <button
                        aria-controls="tip-checkout-panel"
                        aria-selected={mode === tab.value}
                        className={
                            mode === tab.value
                                ? "tip-checkout-tab tip-checkout-tab-active"
                                : "tip-checkout-tab"
                        }
                        data-mode={tab.value}
                        key={tab.value}
                        onClick={handleModeClick}
                        role="tab"
                        type="button"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tip-checkout-panel" id="tip-checkout-panel" role="tabpanel">
                {step.kind === "amount" && (
                    <>
                        <p className="tip-checkout-amount-label">{quickTip.amountLabel}</p>
                        <div className="tip-checkout-presets">
                            {presets.map((amount) => (
                                <button
                                    className={`tip-checkout-preset${!customAmount && selectedAmount === amount ? " tip-checkout-preset-active" : ""}`}
                                    data-amount={amount}
                                    key={amount}
                                    onClick={handlePresetClick}
                                    type="button"
                                >
                                    {formatter.format(amount)}
                                </button>
                            ))}
                        </div>

                        <label className="tip-checkout-custom-label" htmlFor="tip-custom-amount">
                            {quickTip.customAmountLabel}
                        </label>
                        <input
                            className="tip-checkout-custom-input"
                            id="tip-custom-amount"
                            inputMode="decimal"
                            max={TIP_MAX_AMOUNT}
                            min={TIP_MIN_AMOUNT}
                            onChange={handleCustomAmountChange}
                            placeholder={String(selectedAmount)}
                            type="number"
                            value={customAmount}
                        />

                        {isMonthly && (
                            <>
                                <label className="tip-checkout-custom-label" htmlFor="tip-email">
                                    {quickTip.emailLabel}
                                </label>
                                <input
                                    autoComplete="email"
                                    className="tip-checkout-custom-input"
                                    id="tip-email"
                                    onChange={handleEmailChange}
                                    type="email"
                                    value={email}
                                />
                                <p className="tip-checkout-note">{quickTip.cancelNote}</p>
                            </>
                        )}

                        {formError && (
                            <p className="tip-checkout-error" role="alert">
                                {formError}
                            </p>
                        )}

                        <button
                            className="btn btn-primary tip-checkout-continue"
                            disabled={isCreatingIntent}
                            onClick={handleContinue}
                            type="button"
                        >
                            {isCreatingIntent
                                ? quickTip.processingButton
                                : continueLabel.replace("{amount}", pendingAmountLabel)}
                        </button>
                    </>
                )}

                {step.kind === "payment" && elementsOptions && (
                    <Elements options={elementsOptions} stripe={stripe}>
                        <PaymentForm
                            amountLabel={formatter.format(step.amountCents / MINOR_UNITS_PER_MAJOR)}
                            mode={mode}
                            onBack={handleBackToAmount}
                            onSuccess={handlePaymentSuccess}
                        />
                    </Elements>
                )}

                {step.kind === "success" && (
                    <div className="tip-checkout-success">
                        <p className="tip-checkout-success-heading">{quickTip.successHeading}</p>
                        <p className="tip-checkout-success-body">
                            {isMonthly ? quickTip.monthlySuccessBody : quickTip.successBody}
                        </p>
                        {isMonthly && <p className="tip-checkout-note">{quickTip.cancelNote}</p>}
                    </div>
                )}
            </div>

            <p className="tip-checkout-powered-by">{quickTip.poweredBy}</p>
        </div>
    );
}

export default TipCheckout;
