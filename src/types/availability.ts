/**
 * The strings the "get the app" section needs in order to say where each build
 * actually is: in Google Play's closed test, on the App Store, or not released yet.
 *
 * They live here rather than in `locales/` on purpose. The wording describes
 * NeuraTiM's release process rather than this product, so it is word-for-word
 * the same on every site — putting it in the dictionaries would add the same
 * keys to eighteen locale files per site, with nothing to translate differently
 * and eighteen more chances for `npm run i18n:check` to find a gap. One table,
 * all eighteen languages, one place to correct a phrasing.
 */
export interface PlatformAvailabilityCopy {
    /** The action on the Android card, which opens the closed test on Google Play. */
    androidCta: string;
    /** What the Android card says while the build is testers-only. */
    androidDetail: string;
    /** The action a platform gets while its build is not out yet. */
    inPreparation: string;
    /** Status pill on the Android card. */
    inTesting: string;
    /** The action on the iOS card, which opens the App Store listing. */
    iosCta: string;
    /** Link to the tester sign-up page. */
    joinTesting: string;
}
