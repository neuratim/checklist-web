import type { LocaleDictionary } from "../../types/dictionary";

const cs: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Podmíněné položky",
        heading: "Některé věci potřebujete jen někdy.",
        intro: "Berete si notebook? Pak potřebujete i nabíječku. Necháváte ho doma? Nabíječku můžete nechat také. Nastavte položku jako podmíněnou a povinná bude jen tehdy, když platí vaše pravidla. Jedna šablona tak poslouží pro různé plány.",
        points: [
            {
                title: "Pravidla v běžné řeči",
                body: "Vyberte položku a určete, zda má být zaškrtnutá, nebo nezaškrtnutá. Aplikace celou podmínku zobrazí jako větu, abyste přesně věděli, kdy platí.",
            },
            {
                title: "A, NEBO a závorky",
                body: "Propojte pravidla pomocí A či NEBO a seskupte je závorkami. Nabíječka například bude povinná, když je zaškrtnutá položka „Notebook“ A zároveň alespoň jedna z položek „Výlet s přenocováním“ nebo „Pracovní cesta“.",
            },
            {
                title: "Reaguje na každé zaškrtnutí",
                body: "Jakmile podmínka platí, položka se stane povinnou a započítá se do průběhu kontroly. Když podmínka přestane platit, položka už povinná není. Seznam lze dokončit až po zaškrtnutí všech aktuálně povinných položek.",
            },
        ],
    },
    features: {
        eyebrow: "Funkce",
        heading: "Vše, co od seznamu potřebujete. Nic, co by překáželo.",
        items: [
            {
                title: "Šablony pro opakované použití",
                body: "Přidejte fotky, poznámky, štítky a povinné, volitelné či podmíněné položky. Šablonu vytvoříte jednou a nový seznam z ní otevřete, kdykoli potřebujete.",
            },
            {
                title: "Rozpracované seznamy a historie",
                body: "Nedokončený seznam na vás počká. Zůstane mezi rozpracovanými, dokud ho nedokončíte nebo nesmažete. Dokončené seznamy se přesunou do historie.",
            },
            {
                title: "Připomenutí podle vás",
                body: "Nechte si připomenout začátek kontroly nebo dokončení rozpracovaného seznamu. Jednorázově, denně, týdně, měsíčně, v pracovní dny, ve vybrané dny nebo po zvoleném počtu dnů či týdnů.",
            },
            {
                title: "Funguje i bez internetu",
                body: "Vytvářejte a používejte seznamy bez připojení k internetu. Šablony, seznamy i připomenutí se ukládají do vašeho zařízení, bez účtu a synchronizace s cloudem.",
            },
            {
                title: "Vyhledávání a štítky",
                body: "Filtrujte šablony podle štítků a hledejte seznamy podle názvu. Méně procházení, i když seznamů přibývá.",
            },
            {
                title: "iOS · Android · Web",
                body: "Přehledné a známé prostředí v telefonu, tabletu i prohlížeči. Dostupnost některých funkcí se může lišit podle platformy.",
            },
            {
                title: "Podmíněné položky",
                body: "Položka bude povinná, jen když dává smysl: třeba nabíječka, když si berete notebook. Pravidla propojená pomocí A a NEBO se průběžně vyhodnocují při zaškrtávání.",
            },
            {
                title: "Prostor pro podrobnosti",
                body: "Ke každé položce přidejte více fotek, popis, množství a vlastní jednotku, třeba 2 kg nebo 3 balení. Rozdělte položky do sekcí a přetažením měňte pořadí položek i celých sekcí.",
            },
            {
                title: "I dlouhé seznamy zůstanou přehledné",
                body: "Zaškrtnuté položky seskupte v části Hotovo nebo je úplně skryjte. Filtry Zbývající a Volitelné vám pomohou soustředit se na to, co právě potřebujete.",
            },
            {
                title: "Úpravy více položek najednou",
                body: "Vyberte několik položek a společně je přesuňte do jiné sekce, nastavte jako povinné či volitelné nebo smažte.",
            },
            {
                title: "Průběh kontroly na očích",
                body: "Na podporovaných zařízeních můžete sledovat průběh v trvalém oznámení a widgetu na domovské obrazovce. Zkratky u ikony aplikace zpřístupní čtyři naposledy použité šablony.",
            },
            {
                title: "Sdílejte po svém",
                body: "Lidem s aplikací pošlete QR kód nebo soubor .ntchk, ostatním prostý text. Sdílené seznamy ani šablony neobsahují fotky.",
            },
            {
                title: "Šifrované zálohy",
                body: "Zálohujte data včetně fotek do jediného souboru chráněného heslovou frází, kterou si zvolíte. Šifrování pomocí Argon2id a AES-GCM probíhá ve vašem zařízení.",
            },
            {
                title: "Zámek aplikace",
                body: "Aplikaci odemykejte otiskem prstu, rozpoznáním obličeje nebo přístupovým kódem zařízení. Ověření provádí operační systém.",
            },
            {
                title: "Historie podle vašich pravidel",
                body: "Dokončené seznamy uchovávejte bez omezení, jeden měsíc, tři měsíce nebo jeden rok. Starší seznamy se odstraní při příštím otevření aplikace.",
            },
        ],
    },
    footer: {
        contact: "Kontakt",
        mainSite: "NeuraTiM",
        privacyPolicy: "Zásady ochrany soukromí",
        tagline: "Nezávislý vývoj. {year} · Bez účtu v aplikaci, bez sledování.",
    },
    freeSupport: {
        eyebrow: "Zdarma, i díky vaší podpoře",
        githubSponsorsNote: "Vyžaduje účet na GitHubu",
        heading: "100% zdarma. Bez háčků.",
        intro: "Všechny funkce jsou zdarma. Příspěvek potěší, ale nikdy není podmínkou.",
        notHere: ["Bez reklam", "Bez povinného předplatného", "Bez sledování", "Bez prémiové verze"],
        pledge: {
            body: "Pokud jsou pro vás tyto aplikace užitečné, zvažte prosím příspěvek. Kdyby každý, kdo je používá, poslal jedno euro měsíčně, projekt by v klidu přežil – a vy byste mohli dál používat každou aplikaci NeuraTiM zdarma a s čistým svědomím, s vědomím, že váš díl platí jejich udržování v aktuální podobě a financuje i to, co teprve vznikne.",
            heading: "Jedno euro měsíčně stačí",
        },
        quickTip: {
            amountLabel: "Vyberte částku",
            backButton: "Zpět",
            cancelNote:
                "Zrušit můžete kdykoli – stačí jeden e-mail a příspěvek se zastaví dřív, než se strhne další měsíc.",
            customAmountLabel: "Jiná částka (EUR)",
            emailLabel: "E-mail pro potvrzení",
            errorAmount: "Zadejte částku od 1 do 500 EUR.",
            errorEmail: "Zadejte platnou e-mailovou adresu.",
            errorGeneric: "Něco se nepovedlo. Zkuste to prosím znovu.",
            heading: "Přispět na vývoj",
            monthlyPayButton: "Přispívat {amount} měsíčně",
            monthlySuccessBody:
                "Měsíční příspěvek je nastavený a první platba proběhla. Díky, že díky vám tyhle aplikace zůstávají zdarma.",
            payButton: "Zaplatit {amount}",
            poweredBy:
                "Platby zpracovává Stripe. Zaplatíte kartou nebo prostřednictvím Apple Pay či Google Pay, jsou-li dostupné. Účet NeuraTiM nepotřebujete.",
            processingButton: "Zpracovává se…",
            successBody: "Příspěvek dorazil. Děkuji, že pomáháte udržet aplikaci zdarma!",
            successHeading: "Děkuji!",
            tabMonthly: "Měsíčně",
            tabOneOff: "Jednorázově",
        },
        supportBody:
            "Používání je zdarma, údržba ale něco stojí. Vývoj i hosting hradím ze svého a distribuce přes App Store vyžaduje členství v Apple Developer Programu, obvykle za 99 USD ročně. I malý příspěvek tomuto nezávislému projektu pomůže. Není povinný, ale vždy potěší.",
        tipCta: "Poslat příspěvek",
        tipEmailLead: "Máte dotaz k podpoře aplikace? Napište mi e-mail.",
        tipEmailSubject: "Spropitné",
        waysToTip: "Další možnosti podpory projektu:",
    },
    getApp: {
        eyebrow: "Získat aplikaci",
        heading: "Vaše seznamy na vaší platformě.",
        intro: "Vyberte si webovou verzi nebo aplikaci pro Android či iOS. Instalační balíčky jednotlivých vydání se sestavují ze zdrojového kódu.",
        platforms: {
            android: {
                detail: "Získejte bezplatnou verzi pro Android. Postupujte podle pokynů ke stažení nebo testování aktuálního vydání.",
                cta: "Získat verzi pro Android",
            },
            ios: {
                detail: "Zdarma pro iPhone a iPad v App Store.",
                cta: "Získat verzi pro iOS",
            },
            web: {
                detail: "Otevřete aplikaci v moderním prohlížeči. Bez instalace.",
                cta: "Vyzkoušet aplikaci",
            },
        },
    },
    hero: {
        badges: ["Bez reklam", "Bez účtu", "Bez sledování", "iOS · Android · Web"],
        ctaPrimary: "Vyzkoušet aplikaci",
        ctaSecondary: "Jak to funguje",
        headingHighlight: "se vším, co potřebujete.",
        headingLead: "Vyrazte ven",
        subhead:
            "Připravte si seznam na balení, domácí práce nebo cestu a používejte ho znovu, kdykoli se hodí. Zdarma, bez zakládání účtu a se seznamy dostupnými i bez internetu.",
    },
    howItWorks: {
        eyebrow: "Jak to funguje",
        heading: "Tři jednoduché kroky. A můžete začít.",
        intro: "Vytvořte šablonu, projděte seznam a podle potřeby přidejte připomenutí. Žádné složité nastavování, které by vás zdržovalo.",
        steps: [
            {
                eyebrow: "Krok 1",
                title: "Vytvořte šablonu",
                body: "Přidejte názvy položek, případně fotky, a určete, které položky jsou povinné, volitelné nebo podmíněné. Šablonu používejte opakovaně, upravujte pořadí, vytvořte kopii nebo ji archivujte, až ji nebudete potřebovat.",
            },
            {
                eyebrow: "Krok 2",
                title: "Než vyrazíte, projděte seznam",
                body: "U každé položky vidíte název, fotku a zaškrtávací políčko. Seznam dokončíte po zaškrtnutí všech povinných položek. Volitelné položky dokončení nebrání; podmíněné jen tehdy, když platí jejich pravidla.",
            },
            {
                eyebrow: "Krok 3",
                title: "Nechte aplikaci, ať vám to připomene",
                body: "Nastavte připomenutí začátku kontroly nebo dokončení rozpracovaného seznamu. Jednorázově, denně, týdně, měsíčně, v pracovní dny, ve vybrané dny nebo každých několik dnů či týdnů.",
            },
        ],
    },
    languageSwitcher: {
        label: "Jazyk",
    },
    nav: {
        closeMenu: "Zavřít nabídku",
        features: "Funkce",
        free: "Zdarma, i díky vaší podpoře",
        getApp: "Získat aplikaci",
        howItWorks: "Jak to funguje",
        label: "Na této stránce",
        more: "Další sekce",
        openMenu: "Otevřít nabídku",
        privacy: "Soukromí",
        tryIt: "Vyzkoušet aplikaci",
        security: "Zabezpečení",
    },
    privacy: {
        badgeBody:
            "Seznamy se ukládají do zařízení nebo prohlížeče, ve kterém je vytvoříte. O jejich exportu a sdílení rozhodujete vy.",
        badgeTitle: "Uloženo ve vašem zařízení",
        eyebrow: "Soukromí",
        heading: "Vaše seznamy zůstávají vaše.",
        intro: "Bez účtu v aplikaci, synchronizace s cloudem a sledování. Šablony, seznamy i připomenutí se ukládají místně, ne na servery vývojáře.",
        points: [
            "Bez účtu a přihlašování",
            "Žádná analytika, sledování ani reklamní SDK v aplikaci",
            "Vaše seznamy se neukládají na servery vývojáře",
            "Fotky se ukládají místně; sdílení je nezahrnuje, zálohy ano",
            "Zálohy jsou ve výchozím nastavení šifrované vámi zvolenou heslovou frází",
            "Statistiky se počítají z vašich seznamů ve vašem zařízení",
        ],
        policyLink: "Přečíst celé zásady ochrany soukromí",
    },
    privacyPolicy: {
        back: "Zpět na přehled",
        contactHeading: "Kontakt",
        contactIntro: "S dotazy k těmto zásadám nebo soukromí v aplikaci NeuraTiM Checklist pište na:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist ukládá data seznamů do vašeho zařízení. Nemá uživatelské účty, synchronizaci s cloudem ani analytickou službu. Tyto zásady vysvětlují místní ukládání, sdílení a export na váš pokyn, volitelné služby zařízení a samostatné zpracování údajů na tomto webu.",
        title: "Zásady ochrany soukromí",
        sections: [
            {
                heading: "1. Na co se tyto zásady vztahují",
                paragraphs: [
                    "Tyto zásady se vztahují na NeuraTiM Checklist pro Android, iOS a web i na tyto webové stránky. NeuraTiM je nezávislý vývojář a správce osobních údajů zpracovávaných v souvislosti s tímto webem nebo přímou komunikací.",
                    "Aplikace je zdarma, neobsahuje reklamy a nemá placenou verzi. Dobrovolná podpora v aplikaci, popsaná v části 6, neodemyká žádné funkce.",
                ],
            },
            {
                heading: "2. Data seznamů a dobrovolná zpětná vazba",
                paragraphs: [
                    "Základní seznamy fungují offline bez účtu a analytiky. Dobrovolná zpětná vazba potřebuje internet; diktování může zpracovávat řeč online.",
                ],
                points: [
                    "Jméno, e-mailová adresa, telefonní číslo ani údaje k registračnímu účtu — přihlašování není potřeba",
                    "Reklamní identifikátory, identifikátory zařízení ani uživatelské identifikátory pro sledování",
                    "Vaše přesná ani přibližná poloha",
                    "Kontakty, kalendáře, historie hovorů, SMS ani seznamy nainstalovaných aplikací",
                    "Analytika používání, diagnostika ani hlášení pádů odesílané vývojáři; statistiky seznamů se počítají místně",
                    "Platební ani finanční údaje; dobrovolná podpora v aplikaci se platí přes App Store nebo Google Play a dobrovolné příspěvky na webu jsou popsány samostatně níže",
                ],
            },
            {
                heading: "3. Data uložená ve vašem zařízení",
                paragraphs: ["Aby seznamy fungovaly i bez internetu, aplikace místně ukládá:"],
                points: [
                    "Šablony, sekce, štítky a položky včetně názvů, množství, popisů, nastavení povinných a volitelných položek a podmínkových pravidel",
                    "Rozpracované seznamy a dokončené seznamy v historii včetně zaškrtnutých položek a poznámek",
                    "Fotky připojené k položkám",
                    "Naplánovaná připomenutí a jejich text",
                    "Nastavení, například jazyk a světlý či tmavý vzhled",
                    "Naskenované čárové kódy a názvy, které jim přiřadíte; aplikace je nevyhledává v internetové databázi produktů",
                    "Nastavení uchovávání historie a zámku aplikace",
                ],
            },
            {
                heading: "4. Kde jsou vaše data uložena",
                paragraphs: [
                    "Na Androidu a iOS se data ukládají do soukromého úložiště aplikace, které chrání oddělení aplikací zajišťované operačním systémem.",
                    "Ve webové verzi se data ukládají v prohlížeči pro webovou adresu aplikace. Vymazáním dat tohoto webu odstraníte místní kopii.",
                    "Aplikace neposkytuje cloudové zálohování ani synchronizaci. Exportované a sdílené kopie i zálohy spravované zařízením nebo prohlížečem jsou mimo toto místní úložiště.",
                ],
            },
            {
                heading: "5. Oprávnění a služby zařízení",
                paragraphs: [
                    "Oprávnění slouží funkcím, které je potřebují. Dostupná oprávnění spravujete v nastavení zařízení; zamítnutí může znemožnit související funkci.",
                ],
                points: [
                    "Fotoaparát — pro skenování QR a čárových kódů nebo pořízení fotky položky. Skenování se zpracovává v zařízení bez uchovávání snímků z kamery. Fotky pořízené k položkám se ukládají do místního úložiště aplikace.",
                    "Fotky nebo knihovna fotek — pro připojení obrázku, který vyberete. Obrázek se zkopíruje do úložiště aplikace; aplikace knihovnu fotek nenahrává na server ani neindexuje.",
                    "Oznámení — pro naplánovaná připomenutí a na podporovaných zařízeních také průběh kontroly. Vytvářejí se místně, bez vzdálené služby push oznámení.",
                    "Přesné budíky (Android) — pro naplánování připomenutí na zvolený čas. Jejich doručení může i tak záviset na nastavení a omezeních systému.",
                    "Spuštění po startu (Android) — pro opětovné naplánování připomenutí po restartu zařízení.",
                    "Soubory — pro ukládání exportů a otevírání souborů záloh či sdílených souborů, které vyberete.",
                    "Mikrofon — při diktování názvu položky. Služba rozpoznávání řeči v zařízení předá aplikaci text; aplikace zvukový záznam neuchovává. Podle zařízení a nastavení může tato služba zpracovávat zvuk online podle vlastních zásad ochrany soukromí.",
                    "Biometrie nebo přístupový kód zařízení — po zapnutí zámku aplikace. Ověření provádí operační systém; aplikace dostane výsledek, nikoli údaje o otisku prstu či obličeji.",
                ],
            },
            {
                heading: "6. Sdílení, export a externí zpracování",
                paragraphs: [
                    "Aplikace vaše seznamy automaticky neodesílá vývojáři. O sdílení a exportu rozhodujete vy. Volitelné diktování využívá službu rozpoznávání řeči v zařízení popsanou výše.",
                ],
                points: [
                    "Při sdílení vznikne QR kód, soubor .ntchk nebo prostý text, který předáte zvoleným způsobem. Sdílené šablony a seznamy neobsahují fotky a aplikace je nešifruje.",
                    "Export zálohy uloží soubor do zvoleného umístění nebo otevře systémovou nabídku sdílení. Zálohy obsahují fotky. Ochrana cílového umístění závisí na vybrané službě.",
                    "Import načte vámi vybraný soubor nebo kód; obsah seznamů nevyhledává na internetu. Poskytovatel souborů, kterého používáte, může vybraný soubor stáhnout.",
                    "Vývojáři se odešle vaše zpráva, volitelný e-mail, verze aplikace, platforma a jazyk. Seznamy ani fotografie se neodesílají.",
                    "Podpora v aplikaci: dobrovolné jednorázové příspěvky a měsíční podpora se kupují přes App Store nebo Google Play, které platbu zpracují podle svých vlastních zásad ochrany soukromí. Aplikace se dozví jen to, jaký produkt podpory máte, a uloží si to v zařízení, aby ostatní aplikace NeuraTiM ve stejném zařízení mohly ukázat, že projekt už podporujete. Tento záznam zařízení nikdy neopouští.",
                ],
            },
            {
                heading: "7. Uchovávání a mazání dat",
                paragraphs: [
                    "Vývojář nemá na serveru kopii vašich místně uložených seznamů. Data spravujete v aplikaci. Dříve exportované, sdílené nebo zálohované kopie je nutné odstranit zvlášť:",
                ],
                points: [
                    "Jednotlivé položky, seznamy či šablony smažte v aplikaci",
                    "Dokončené seznamy odstraňte pomocí funkce Vymazat historii",
                    "Vymažte místní úložiště aplikace v nastavení zařízení, pokud to umožňuje, nebo odstraňte aplikaci včetně jejích dat; externí zálohy ani exportované soubory se tím nesmažou",
                    "Ve webové verzi vymažte v prohlížeči data webu aplikace",
                    "Nastavte uchovávání dokončených seznamů na jeden měsíc, tři měsíce nebo jeden rok; starší seznamy se smažou při příštím otevření aplikace",
                ],
            },
            {
                heading: "8. Zabezpečení",
                paragraphs: [
                    "Místní data chrání bezpečnostní mechanismy operačního systému. Další ochranu poskytují zámek obrazovky a šifrování úložiště zařízení, pokud jsou zapnuté.",
                    "Na serverech vývojáře není centrální databáze seznamů. Tím se snižuje riziko, nikoli však vylučuje neoprávněný přístup k vašemu zařízení nebo exportovaným souborům.",
                    "Zálohy jsou ve výchozím nastavení šifrované ve vašem zařízení pomocí zvolené heslové fráze, odvození klíče Argon2id a šifrování AES-GCM. Data uložená v zařízení aplikace sama nešifruje; spoléhá na výše popsané ochranné mechanismy operačního systému. Můžete také zapnout zámek aplikace, který určuje, kdo aplikaci otevře, ale uložená data nešifruje.",
                    "Nešifrovaný export je samostatná, označená akce vyžadující potvrzení. Kdokoli má k souboru přístup, může ho přečíst. Aplikace nešifruje ani sdílené soubory, QR kódy a prostý text; tyto způsoby sdílení neobsahují fotky. Používejte k jejich předávání pouze důvěryhodné kanály.",
                ],
            },
            {
                heading: "9. Děti",
                paragraphs: [
                    "Aplikace není určena dětem mladším 13 let nebo příslušného minimálního věku v jejich zemi. Vývojář prostřednictvím aplikace neshromažďuje údaje ze seznamů vytvořených dětmi.",
                ],
            },
            {
                heading: "10. Komponenty a služby třetích stran",
                paragraphs: [
                    "Aplikace využívá open-source komponenty pro oznámení, skenování, výběr fotek a souborů, sdílení a nákupy v aplikaci. Tyto funkce používají místní zpracování a systémové služby, nikoli serverovou část provozovanou vývojářem; nákupy v aplikaci zpracovává App Store nebo Google Play.",
                    "Aplikace neobsahuje SDK pro reklamu, atribuci, analytiku ani hlášení pádů.",
                    "Další komponenty zajišťují šifrování záloh, biometrické odemykání, diktování a widgety. Diktování využívá službu rozpoznávání řeči v zařízení, která může zpracovávat data online, jak je uvedeno v části 5.",
                ],
            },
            {
                heading: "11. Tento web",
                paragraphs: [
                    "Tento web představuje aplikaci a zpřístupňuje její webovou verzi. Požadavky na web, dobrovolné platby a zprávy, které posíláte, jsou oddělené od místně uložených dat seznamů.",
                ],
                points: [
                    "Hosting — web využívá Cloudflare, který může pro poskytování obsahu a zabezpečení zpracovávat IP adresy, údaje o prohlížeči a požadované URL. To je oddělené od dat aplikace a neznamená to, že se odesílají vaše seznamy.",
                    "Volba jazyka — vybraný jazyk se ukládá v prohlížeči a promítá se do adresy stránky. Při načítání stránky může být tato adresa viditelná poskytovateli hostingu.",
                    "Příspěvky — podpora je dobrovolná. Platby zajišťují Stripe, Ko-fi, PayPal nebo GitHub Sponsors podle vlastních zásad ochrany soukromí. Vývojář může obdržet údaje o transakci a přispěvateli, které poskytovatel zpřístupní, nikoli však celé číslo vaší karty z platebního formuláře.",
                    "Vyzkoušení aplikace — vložená webová aplikace ukládá seznamy v prohlížeči výše popsaným způsobem. Její načtení vyžaduje požadavek na poskytovatele hostingu.",
                    "Externí odkazy a e-mail — jiné weby mají vlastní zásady ochrany soukromí. Napíšete-li vývojáři e-mail, obdrží vaši adresu a zprávu, aby mohl odpovědět.",
                ],
            },
            {
                heading: "12. Vaše práva",
                paragraphs: [
                    "Podle příslušných právních předpisů můžete mít právo na přístup k osobním údajům, jejich opravu, výmaz či získání kopie, omezení zpracování, vznesení námitky a podání stížnosti u dozorového úřadu. Tato práva se mohou vztahovat i na údaje z webu, plateb či e-mailů, nejen na obsah aplikace.",
                    "Vývojář vaše data seznamů neprodává ani nepoužívá k reklamě. K seznamům uloženým pouze ve vašem zařízení nemá přístup a nemůže je smazat.",
                    "S dotazy ohledně soukromí nebo žádostmi týkajícími se údajů, které vývojář skutečně má, se obraťte na níže uvedenou adresu.",
                ],
            },
            {
                heading: "13. Změny těchto zásad",
                paragraphs: [
                    "Aktualizace budou zveřejněny na této stránce s novým datem. Změny nakládání s daty v aplikaci budou vysvětleny i v poznámkách k příslušnému vydání. Nové znění zásad zpětně neopravňuje dřívější shromažďování údajů.",
                ],
            },
        ],
        lastUpdated: "Poslední aktualizace: 28. října 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Dokončeno minulý pátek",
            finishedTuesday: "Dokončeno v úterý",
            history: "Historie",
            inProgress: "Rozpracované",
            startedToday: "Zahájeno dnes",
            startSubtitle: "Vyberte šablonu a postupně zaškrtávejte položky.",
            startTitle: "Začít nový seznam",
        },
        common: {
            navChecklists: "Seznamy",
            navSchedule: "Plán",
            navTemplates: "Šablony",
            templateCarryOn: "Balení příručního zavazadla",
            templateGrocery: "Týdenní nákup potravin",
            templateHiking: "Víkendová túra",
            templatePreFlight: "Kontrola domova před odletem",
        },
        condition: {
            addRule: "Přidat pravidlo",
            and: "A",
            headerItem: "Tropiko ke stanu",
            intro: "Položka je povinná, jen když:",
            isChecked: "zaškrtnuto",
            isNotChecked: "nezaškrtnuto",
            requiredWhen: "Kdy je položka povinná",
            ruleLaptop: "Stan",
            ruleTrip: "Výlet s přenocováním",
            save: "Uložit",
            summary: "Položka „Stan“ je zaškrtnutá A položka „Výlet s přenocováním“ je zaškrtnutá",
            title: "Podmínka",
        },
        run: {
            conditional: "Podmíněná položka",
            essentials: "Nezbytnosti",
            finish: "Dokončit",
            firstAidKit: "Lékárnička",
            headlamp: "Čelovka",
            optional: "Volitelná položka",
            rainCover: "Tropiko ke stanu",
            requiredLeftTwo: "Zbývají 2 povinné položky",
            requiredNow: "Nyní povinná položka",
            subtitle: "Zaškrtnuto 3 z 5 povinných položek",
            tent: "Stan",
            trailMap: "Turistická mapa",
            trekkingPoles: "Trekingové hole",
            waterBottle: "Láhev na vodu ×2",
            doneHeading: "Hotovo (3)",
            filterAll: "Vše",
            filterOptional: "Volitelné",
            filterRemaining: "Zbývající",
        },
        schedule: {
            doesNotRepeat: "Neopakuje se",
            entry1Title: "Začít: Víkendová túra",
            entry1When: "So, 7:00",
            entry2Title: "Dokončit: Týdenní nákup potravin",
            entry2When: "Dnes, 18:00",
            entry3Title: "Začít: Kontrola domova před odletem",
            entry3When: "28. července, 5:30",
            finishReminderLabel: "Připomenutí dokončení",
            newReminder: "Nové připomenutí",
            repeatsWeekly: "Opakuje se týdně",
            startReminderLabel: "Připomenutí začátku",
            repeatsWeekdays: "Každý pracovní den (po–pá)",
        },
        templates: {
            allChip: "Vše",
            carryOnSummary: "15 položek · 10 povinných",
            grocerySummary: "9 položek · 9 povinných",
            hikingSummary: "12 položek · 8 povinných",
            newTemplate: "Nová šablona",
            preFlightSummary: "6 položek · 6 povinných",
            tagHome: "Domov",
            tagOutdoors: "Příroda",
            tagTravel: "Cestování",
        },
        backup: {
            badgeBody:
                "Šifrovaná záloha obsahuje šablony, seznamy, poznámky, připomenutí i fotky a chrání ji vaše heslová fráze. Nešifrovaný export je samostatná možnost.",
            badgeNote: "Bez účtu a synchronizace s cloudem. Kam zálohu uložíte nebo pošlete, rozhodujete vy.",
            badgeTitle: "Co záloha obsahuje",
            exportEncrypted: "Exportovat šifrovanou zálohu",
            exportPlain: "Exportovat bez šifrování",
            intro: "Vaše data jsou uložená zde v zařízení. Exportujte zálohu pro uchování další kopie nebo obnovte dříve uloženou zálohu.",
            restore: "Obnovit ze zálohy",
            title: "Zálohování a obnova",
        },
        start: {
            quickBody: "Bez šablony. Přidávejte položky a průběžně je zaškrtávejte.",
            quickTitle: "Rychlý seznam",
            title: "Začít nový seznam",
            writeBody: "Napište nebo vložte celý seznam a začněte zaškrtávat položky.",
            writeTitle: "Napsat seznam",
        },
        stats: {
            finishedRuns: "Dokončené seznamy",
            inProgress: "Rozpracované",
            itemsChecked: "Zaškrtnuté položky",
            missedHeading: "Nejčastěji nezaškrtnuté",
            missedHelp: "Položky, které při dokončení seznamu zůstaly nezaškrtnuté.",
            missedItem1: "Trekingové hole",
            missedItem1Count: "9krát",
            missedItem2: "Čelovka",
            missedItem2Count: "6krát",
            missedItem3: "Tropiko ke stanu",
            missedItem3Count: "2krát",
            subtitle: "Spočítáno v tomto zařízení z uložených seznamů.",
            templates: "Šablony",
            title: "Statistiky",
        },
    },
    siteShare: {
        copied: "Odkaz zkopírován",
        copyLink: "Zkopírovat odkaz",
        error: "Sdílení se nepodařilo spustit. Zkuste to znovu nebo zkopírujte odkaz.",
        heading: "Sdílejte tento web",
        manualCopy: "Zkopírujte tento odkaz ručně",
        nativeShare: "Sdílet pomocí zařízení",
        selectLabel: "Sociální síť nebo způsob sdílení",
        share: "Sdílet",
    },
    siteShareRoller: { hint: "Otáčejte tažením nebo klávesami ← →. Kliknutím na ikonu zahájíte sdílení." },
    tryApp: {
        back: "Zpět na přehled",
        dismissNotice: "Zavřít",
        iframeTitle: "NeuraTiM Checklist — webová aplikace",
        intro: "Toto je funkční webová aplikace, nikoli jen ilustrační obrázek. Vyzkoušejte ji; vaše seznamy se uloží v tomto prohlížeči.",
        loading: "Načítání aplikace…",
    },
    insights: {
        eyebrow: "Statistiky",
        heading: "Váš pokrok. Jen pro vás.",
        intro: "Statistiky se počítají ve vašem zařízení z uložených seznamů, nikoli ze sledování vaší aktivity. Po smazání seznamu se jeho údaje přestanou započítávat. Žádný samostatný analytický záznam se neuchovává.",
        points: [
            {
                title: "Zjistěte, co obvykle vynecháváte",
                body: "Podívejte se, které položky při dokončení nejčastěji zůstávají nezaškrtnuté. Volitelná položka, kterou pokaždé vynecháte, možná do seznamu nepatří. Aktuálně povinné položky je před dokončením nutné zaškrtnout.",
            },
            {
                title: "Celkový přehled",
                body: "Zjistěte, kolik máte šablon, kolik seznamů je dokončených či rozpracovaných a kolik položek jste celkem zaškrtli.",
            },
            {
                title: "Čísla bez sledování",
                body: "Žádné analytické SDK, služba hlášení pádů ani odesílání údajů o používání vývojáři. Statistiky seznamů zůstávají ve vašem zařízení.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Začínáme",
        heading: "Méně psaní. Více hotových věcí.",
        intro: "Začněte hotovou šablonou, vložte vlastní text nebo si založte rychlý seznam. Vyberte si, co vám vyhovuje — vše nemusíte zadávat položku po položce.",
        points: [
            {
                title: "Upravte si hotovou šablonu",
                body: "Vyberte si ze šablon Turistika, Víkend pryč, Nákup potravin, Taška do fitka nebo Odchod z domu. Do vašich šablon se přidá kopie, kterou můžete přejmenovat a zbavit všeho nepotřebného.",
            },
            {
                title: "Napište celý seznam najednou",
                body: "Na první řádek napište název seznamu, na každý další jednu položku. Volitelnou položku označte doslovnou značkou [optional] na konci řádku. Vložte seznam, který už máte, a můžete začít.",
            },
            {
                title: "Vložte položky do stávajícího seznamu",
                body: "Odrážky a číslování se odstraní automaticky. Začněte řádek zápisem 2x a množství se nastaví na dvě. Celou stránku poznámek tak převedete na jednotlivé položky najednou.",
            },
            {
                title: "Nebo začněte rychlým seznamem",
                body: "Šablonu nepotřebujete. Přidávejte položky průběžně, na podporovaných zařízeních diktujte názvy nebo využijte čárové kódy s uloženými názvy. Návrhy vycházejí z názvů položek, které už máte v zařízení.",
            },
        ],
    },
    security: {
        eyebrow: "Zabezpečení",
        heading: "Mějte přehled, co sdílíte. O ochraně rozhodujete vy.",
        intro: "Před exportem či sdílením aplikace vysvětlí, co bude součástí a zda jsou data šifrovaná. Zálohy mohou obsahovat fotky, sdílené šablony a seznamy nikoli.",
        note: "Zámek řídí, kdo aplikaci otevře. Data nešifruje; uložená data chrání zabezpečení vašeho zařízení, například zámek obrazovky.",
        points: [
            {
                title: "Zálohy chráněné vaší heslovou frází",
                body: "Argon2id odvodí klíč a AES-GCM zašifruje zálohu, vše přímo v zařízení. Zvolte silnou heslovou frázi a bezpečně si ji uchovejte: vývojář vám ji nedokáže obnovit.",
            },
            {
                title: "Nešifrovaný export jen na váš pokyn",
                body: "Potřebujete nešifrovaný soubor? Použijte samostatnou, jasně označenou možnost exportu a před uložením ji potvrďte. Obsah přečte kdokoli, kdo k souboru získá přístup.",
            },
            {
                title: "Odemykání pomocí zařízení",
                body: "Aplikaci otevírejte otiskem prstu, rozpoznáním obličeje nebo přístupovým kódem zařízení. Ověření zajišťuje operační systém; aplikace nikdy nedostane údaje o otisku prstu ani obličeji.",
            },
            {
                title: "Chráněno vaším zařízením",
                body: "Na Androidu a iOS zůstávají seznamy, poznámky a fotky v soukromém úložišti aplikace, které chrání izolace aplikací v operačním systému a zámek obrazovky. Aplikace nepřidává vlastní šifrování.",
            },
        ],
    },
};

export default cs;
