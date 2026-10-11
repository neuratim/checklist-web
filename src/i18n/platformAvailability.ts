import type { PlatformAvailabilityCopy } from "../types/availability";
import type { LanguageCode } from "../types/language";
import { useLanguage } from "./useLanguage";

export const PLATFORM_AVAILABILITY: Readonly<Record<LanguageCode, PlatformAvailabilityCopy>> = {
    ar: {
        androidCta: "Google Play",
        androidDetail: "قيد اختبار مغلق على Google Play. انضم إلى قائمة المختبرين وسيُثبَّت كأي تطبيق آخر.",
        inPreparation: "قيد التحضير",
        inTesting: "قيد الاختبار",
        iosCta: "App Store",
        joinTesting: "انضم إلى الاختبار",
    },
    bn: {
        androidCta: "Google Play",
        androidDetail:
            "Google Play-তে ক্লোজড টেস্টিং চলছে। টেস্টার তালিকায় যোগ দিন, তারপর অন্য যেকোনো অ্যাপের মতোই ইনস্টল হবে।",
        inPreparation: "প্রস্তুতি চলছে",
        inTesting: "টেস্টিংয়ে",
        iosCta: "App Store",
        joinTesting: "টেস্টিংয়ে যোগ দিন",
    },
    cs: {
        androidCta: "Google Play",
        androidDetail:
            "V uzavřeném testování na Google Play. Přidejte se na seznam testerů a nainstaluje se jako každá jiná aplikace.",
        inPreparation: "V přípravě",
        inTesting: "V testování",
        iosCta: "App Store",
        joinTesting: "Zapojit se do testu",
    },
    de: {
        androidCta: "Google Play",
        androidDetail:
            "Im geschlossenen Test bei Google Play. Trage dich in die Testerliste ein, danach installiert sie sich wie jede andere App.",
        inPreparation: "In Vorbereitung",
        inTesting: "Im Test",
        iosCta: "App Store",
        joinTesting: "Am Test teilnehmen",
    },
    en: {
        androidCta: "Google Play",
        androidDetail:
            "In closed testing on Google Play. Join the tester list and it installs like any other app.",
        inPreparation: "In preparation",
        inTesting: "In testing",
        iosCta: "App Store",
        joinTesting: "Join testing",
    },
    es: {
        androidCta: "Google Play",
        androidDetail:
            "En pruebas cerradas en Google Play. Únete a la lista de probadores y se instala como cualquier otra app.",
        inPreparation: "En preparación",
        inTesting: "En pruebas",
        iosCta: "App Store",
        joinTesting: "Únete a las pruebas",
    },
    fr: {
        androidCta: "Google Play",
        androidDetail:
            "En test fermé sur Google Play. Inscrivez-vous sur la liste des testeurs et l’installation se fait comme pour n’importe quelle app.",
        inPreparation: "En préparation",
        inTesting: "En test",
        iosCta: "App Store",
        joinTesting: "Participer au test",
    },
    hi: {
        androidCta: "Google Play",
        androidDetail:
            "Google Play पर क्लोज़्ड टेस्टिंग में है। टेस्टर सूची में शामिल हों और यह किसी भी अन्य ऐप की तरह इंस्टॉल हो जाएगा।",
        inPreparation: "तैयारी में",
        inTesting: "परीक्षण में",
        iosCta: "App Store",
        joinTesting: "परीक्षण में जुड़ें",
    },
    id: {
        androidCta: "Google Play",
        androidDetail:
            "Sedang dalam pengujian tertutup di Google Play. Ikut daftar penguji, lalu terpasang seperti aplikasi lain.",
        inPreparation: "Dalam persiapan",
        inTesting: "Dalam pengujian",
        iosCta: "App Store",
        joinTesting: "Ikut menguji",
    },
    it: {
        androidCta: "Google Play",
        androidDetail:
            "In test chiuso su Google Play. Iscriviti alla lista dei tester e si installa come qualsiasi altra app.",
        inPreparation: "In preparazione",
        inTesting: "In test",
        iosCta: "App Store",
        joinTesting: "Partecipa al test",
    },
    ja: {
        androidCta: "Google Play",
        androidDetail:
            "Google Play のクローズドテスト中です。テスターリストに登録すれば、ほかのアプリと同じようにインストールできます。",
        inPreparation: "準備中",
        inTesting: "テスト中",
        iosCta: "App Store",
        joinTesting: "テストに参加",
    },
    ko: {
        androidCta: "Google Play",
        androidDetail:
            "Google Play 비공개 테스트 중입니다. 테스터 목록에 등록하면 다른 앱과 똑같이 설치됩니다.",
        inPreparation: "준비 중",
        inTesting: "테스트 중",
        iosCta: "App Store",
        joinTesting: "테스트 참여",
    },
    pl: {
        androidCta: "Google Play",
        androidDetail:
            "W testach zamkniętych w Google Play. Dołącz do listy testerów, a instalacja przebiegnie jak przy każdej innej aplikacji.",
        inPreparation: "W przygotowaniu",
        inTesting: "W testach",
        iosCta: "App Store",
        joinTesting: "Dołącz do testów",
    },
    pt: {
        androidCta: "Google Play",
        androidDetail:
            "Em testes fechados no Google Play. Junte-se à lista de testadores e instala-se como qualquer outra app.",
        inPreparation: "Em preparação",
        inTesting: "Em testes",
        iosCta: "App Store",
        joinTesting: "Aderir ao teste",
    },
    ru: {
        androidCta: "Google Play",
        androidDetail:
            "Закрытое тестирование в Google Play. Присоединитесь к списку тестировщиков — дальше установка как у любого приложения.",
        inPreparation: "В подготовке",
        inTesting: "В тестировании",
        iosCta: "App Store",
        joinTesting: "Участвовать в тесте",
    },
    tr: {
        androidCta: "Google Play",
        androidDetail:
            "Google Play’de kapalı testte. Test listesine katılın, ardından diğer uygulamalar gibi kurulur.",
        inPreparation: "Hazırlanıyor",
        inTesting: "Test aşamasında",
        iosCta: "App Store",
        joinTesting: "Teste katıl",
    },
    vi: {
        androidCta: "Google Play",
        androidDetail:
            "Đang thử nghiệm kín trên Google Play. Tham gia danh sách người thử nghiệm và ứng dụng sẽ cài như mọi ứng dụng khác.",
        inPreparation: "Đang chuẩn bị",
        inTesting: "Đang thử nghiệm",
        iosCta: "App Store",
        joinTesting: "Tham gia thử nghiệm",
    },
    zh: {
        androidCta: "Google Play",
        androidDetail: "正在 Google Play 进行封闭测试。加入测试者名单后，即可像其他应用一样安装。",
        inPreparation: "准备中",
        inTesting: "测试中",
        iosCta: "App Store",
        joinTesting: "加入测试",
    },
};

/** The availability copy in the language the page is currently showing. */
export function usePlatformAvailability(): PlatformAvailabilityCopy {
    const { language } = useLanguage();

    return PLATFORM_AVAILABILITY[language];
}
