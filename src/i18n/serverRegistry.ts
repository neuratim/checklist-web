import ar from "./locales/ar";
import bn from "./locales/bn";
import cs from "./locales/cs";
import de from "./locales/de";
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import hi from "./locales/hi";
import id from "./locales/id";
import it from "./locales/it";
import ja from "./locales/ja";
import ko from "./locales/ko";
import pl from "./locales/pl";
import pt from "./locales/pt";
import ru from "./locales/ru";
import tr from "./locales/tr";
import vi from "./locales/vi";
import zh from "./locales/zh";
import { withEnglishFallback } from "./mergeDictionary";
import type { Dictionary } from "../types/dictionary";
import type { LanguageCode } from "../types/language";

/**
 * Every locale completed with English, so a translation that has not caught
 * up with new copy yet renders that copy in English rather than blank — see
 * {@link withEnglishFallback}. English itself passes through unchanged.
 */
export const DICTIONARIES: Record<LanguageCode, Dictionary> = {
    ar: withEnglishFallback(ar),
    bn: withEnglishFallback(bn),
    cs: withEnglishFallback(cs),
    de: withEnglishFallback(de),
    en,
    es: withEnglishFallback(es),
    fr: withEnglishFallback(fr),
    hi: withEnglishFallback(hi),
    id: withEnglishFallback(id),
    it: withEnglishFallback(it),
    ja: withEnglishFallback(ja),
    ko: withEnglishFallback(ko),
    pl: withEnglishFallback(pl),
    pt: withEnglishFallback(pt),
    ru: withEnglishFallback(ru),
    tr: withEnglishFallback(tr),
    vi: withEnglishFallback(vi),
    zh: withEnglishFallback(zh),
};
