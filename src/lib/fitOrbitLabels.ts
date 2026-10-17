/** Reflow at full size; fit only an unbreakable word wider than its complete slot. */
export function fitOrbitLabels(stage: HTMLDivElement, cardWidth: number, fontSize: number) {
    const context = document.createElement("canvas").getContext("2d");
    if (!context) return;
    context.font = `500 ${fontSize}px ${getComputedStyle(stage).fontFamily}`;
    const available = cardWidth - 8;
    const fits = [...stage.querySelectorAll<HTMLElement>(".site-share-planet-word")].map((word) => {
        const text = word.textContent ?? "";
        const tokens = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(text)
            ? [...text]
            : [text];
        const widest = Math.max(...tokens.map((token) => context.measureText(token).width), 1);
        return { fit: Math.min(1, (available - 1) / widest), word };
    });
    for (const { fit, word } of fits) word.style.setProperty("--planet-word-fit", String(fit));
    const height = Math.max(
        ...[...stage.querySelectorAll<HTMLElement>(".site-share-planet-label")].map(
            (label) => label.scrollHeight,
        ),
    );
    stage.style.setProperty("--planet-label-height", `${height}px`);
}
