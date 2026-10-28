import type { LocaleDictionary } from "../../types/dictionary";

const pl: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Pozycje warunkowe",
        heading: "Niektóre rzeczy są potrzebne tylko czasami.",
        intro: "Zabierasz laptop? Przyda się ładowarka. Zostawiasz go w domu? Ładowarkę też możesz zostawić. Ustaw pozycję jako warunkową, a będzie wymagana tylko wtedy, gdy spełnią się Twoje reguły. Jeden szablon na różne plany.",
        points: [
            {
                title: "Reguły prostym językiem",
                body: "Wybierz pozycję i określ, czy ma być zaznaczona, czy nie. Aplikacja wyświetli cały warunek jako zdanie, żeby było jasne, kiedy obowiązuje.",
            },
            {
                title: "I, LUB oraz nawiasy",
                body: "Łącz reguły za pomocą I oraz LUB i grupuj je nawiasami. Na przykład: ładowarka jest wymagana, gdy zaznaczona jest pozycja Laptop I co najmniej jedna z pozycji Wyjazd z noclegiem LUB Podróż służbowa.",
            },
            {
                title: "Zmiany przy każdym zaznaczeniu",
                body: "Gdy warunek jest spełniony, pozycja staje się wymagana i liczy się do ukończenia listy. Gdy przestaje obowiązywać, pozycja nie jest już wymagana. Listę można ukończyć dopiero po zaznaczeniu wszystkich aktualnie wymaganych pozycji.",
            },
        ],
    },
    features: {
        eyebrow: "Funkcje",
        heading: "Wszystko, czego potrzebujesz na liście. Nic, co przeszkadza.",
        items: [
            {
                title: "Szablony wielokrotnego użytku",
                body: "Dodaj zdjęcia, notatki, tagi oraz pozycje wymagane, opcjonalne lub warunkowe. Utwórz szablon raz, a nową listę rozpoczynaj z niego zawsze, gdy potrzebujesz.",
            },
            {
                title: "Listy w toku i historia",
                body: "Zostaw niedokończoną listę i wróć do niej później. Pozostanie w toku, aż ją ukończysz lub usuniesz. Ukończone listy trafiają do historii.",
            },
            {
                title: "Przypomnienia po Twojemu",
                body: "Ustaw przypomnienie o rozpoczęciu listy lub dokończeniu trwającej. Jednorazowo, codziennie, co tydzień lub miesiąc, od poniedziałku do piątku, w wybrane dni albo co określoną liczbę dni lub tygodni.",
            },
            {
                title: "Działa bez internetu",
                body: "Twórz listy i korzystaj z nich bez połączenia z internetem. Szablony, listy i przypomnienia są zapisane na Twoim urządzeniu, bez konta i synchronizacji z chmurą.",
            },
            {
                title: "Wyszukiwanie i tagi",
                body: "Filtruj szablony według tagów i znajduj listy po nazwie. Mniej przewijania, nawet gdy kolekcja rośnie.",
            },
            {
                title: "iOS · Android · Web",
                body: "Przejrzysty, znajomy sposób korzystania z list na telefonie, tablecie i w przeglądarce. Dostępność niektórych funkcji może zależeć od platformy.",
            },
            {
                title: "Pozycje warunkowe",
                body: "Pozycja jest wymagana tylko wtedy, gdy ma to sens: na przykład ładowarka, gdy zabierasz laptop. Łącz reguły za pomocą I oraz LUB; są sprawdzane na bieżąco podczas zaznaczania pozycji.",
            },
            {
                title: "Miejsce na szczegóły",
                body: "Do każdej pozycji dodaj kilka zdjęć, opis oraz ilość z własną jednostką, np. 2 kg lub 3 opakowania. Podziel listę na sekcje i przeciągaj pojedyncze pozycje lub całe sekcje, aby zmienić ich kolejność.",
            },
            {
                title: "Długie listy bez bałaganu",
                body: "Zaznaczone pozycje zbierz w części Gotowe lub całkiem je ukryj. Filtry Pozostałe i Opcjonalne pomogą skupić się na tym, czego teraz potrzebujesz.",
            },
            {
                title: "Edytuj kilka pozycji naraz",
                body: "Wybierz kilka pozycji, by razem przenieść je do innej sekcji, ustawić jako wymagane lub opcjonalne albo usunąć.",
            },
            {
                title: "Postęp na pierwszy rzut oka",
                body: "Na obsługiwanych urządzeniach stałe powiadomienie i widżet na ekranie głównym mogą pokazywać postęp. Skróty aplikacji dają szybki dostęp do czterech ostatnio używanych szablonów.",
            },
            {
                title: "Udostępniaj tak, jak lubisz",
                body: "Wyślij kod QR lub plik .ntchk osobie z aplikacją, a pozostałym — zwykły tekst. Udostępniane listy i szablony nie zawierają zdjęć.",
            },
            {
                title: "Szyfrowane kopie zapasowe",
                body: "Zapisz dane, w tym zdjęcia, w jednym pliku chronionym wybraną przez Ciebie frazą hasłową. Szyfrowanie z użyciem Argon2id i AES-GCM odbywa się na Twoim urządzeniu.",
            },
            {
                title: "Blokada aplikacji",
                body: "Odblokowuj aplikację odciskiem palca, rozpoznawaniem twarzy lub kodem urządzenia. Weryfikację przeprowadza system operacyjny.",
            },
            {
                title: "Historia na Twoich zasadach",
                body: "Przechowuj ukończone listy bezterminowo, przez miesiąc, trzy miesiące lub rok. Starsze listy zostaną usunięte przy następnym otwarciu aplikacji.",
            },
        ],
    },
    footer: {
        contact: "Kontakt",
        mainSite: "NeuraTiM",
        privacyPolicy: "Polityka prywatności",
        tagline: "Niezależny projekt. {year} · Bez konta w aplikacji, bez śledzenia.",
    },
    freeSupport: {
        eyebrow: "Za darmo, z Twoim wsparciem",
        githubSponsorsNote: "Wymaga konta GitHub",
        heading: "W 100% za darmo. Bez haczyków.",
        intro: "Wszystkie funkcje są bezpłatne. Wsparcie jest mile widziane, nigdy obowiązkowe.",
        notHere: ["Bez reklam", "Bez abonamentu", "Bez zakupów w aplikacji", "Bez wersji premium"],
        pledge: {
            body: "Jeśli te aplikacje są dla Ciebie przydatne, rozważ wsparcie. Gdyby każdy, kto z nich korzysta, wysyłał jedno euro miesięcznie, projekt spokojnie by przetrwał — a z każdej aplikacji NeuraTiM można by dalej korzystać za darmo i z czystym sumieniem, ze świadomością, że Twój udział opłaca ich aktualizowanie i finansuje to, co dopiero powstanie.",
            heading: "Wystarczy euro miesięcznie",
        },
        quickTip: {
            amountLabel: "Wybierz kwotę",
            backButton: "Wstecz",
            cancelNote:
                "Możesz zrezygnować w każdej chwili – wystarczy jeden e-mail, a wsparcie zatrzyma się przed kolejnym miesiącem.",
            customAmountLabel: "Inna kwota (EUR)",
            emailLabel: "E-mail do potwierdzenia",
            errorAmount: "Wpisz kwotę od 1 do 500 EUR.",
            errorEmail: "Podaj poprawny adres e-mail.",
            errorGeneric: "Coś poszło nie tak. Spróbuj ponownie.",
            heading: "Wesprzyj projekt",
            monthlyPayButton: "Wspieraj kwotą {amount} miesięcznie",
            monthlySuccessBody:
                "Miesięczne wsparcie jest ustawione, a pierwsza płatność przeszła. Dzięki, że te aplikacje zostają darmowe.",
            payButton: "Zapłać {amount}",
            poweredBy:
                "Płatności obsługuje Stripe. Zapłać kartą lub, jeśli są dostępne, przez Apple Pay albo Google Pay. Konto NeuraTiM nie jest potrzebne.",
            processingButton: "Przetwarzanie…",
            successBody: "Wpłata dotarła. Dziękuję za pomoc w utrzymaniu bezpłatnej aplikacji!",
            successHeading: "Dziękuję!",
            tabMonthly: "Miesięcznie",
            tabOneOff: "Jednorazowo",
        },
        supportBody:
            "Korzystanie jest bezpłatne, ale utrzymanie ma swój koszt. Pokrywam wydatki na rozwój i hosting, a dystrybucja w App Store wymaga członkostwa w Apple Developer Program, zwykle za 99 USD rocznie. Nawet niewielka wpłata pomaga temu niezależnemu projektowi — nigdy nie jest obowiązkowa, zawsze cieszy.",
        tipCta: "Przekaż wsparcie",
        tipEmailLead: "Masz pytanie o wsparcie aplikacji? Napisz do mnie e-mail.",
        tipEmailSubject: "Napiwek",
        waysToTip: "Inne sposoby wsparcia projektu:",
    },
    getApp: {
        eyebrow: "Pobierz aplikację",
        heading: "Twoje listy na Twojej platformie.",
        intro: "Wybierz wersję webową, na Androida lub iOS. Pakiety kolejnych wydań powstają z kodu źródłowego.",
        platforms: {
            android: {
                detail: "Pobierz bezpłatną wersję na Androida. Postępuj zgodnie z instrukcjami pobierania lub udziału w testach bieżącego wydania.",
                cta: "Pobierz wersję na Androida",
            },
            ios: {
                detail: "Bezpłatnie na iPhone i iPad w App Store.",
                cta: "Pobierz wersję na iOS",
            },
            web: {
                detail: "Otwórz aplikację w nowoczesnej przeglądarce. Bez instalacji.",
                cta: "Wypróbuj aplikację",
            },
        },
    },
    hero: {
        badges: ["Bez reklam", "Bez konta", "Bez śledzenia", "iOS · Android · Web"],
        ctaPrimary: "Wypróbuj aplikację",
        ctaSecondary: "Zobacz, jak to działa",
        headingHighlight: "wszystko, czego potrzebujesz.",
        headingLead: "Zabierz ze sobą",
        subhead:
            "Przygotuj listę do pakowania, prac domowych lub kolejnej podróży i korzystaj z niej ponownie, kiedy chcesz. Bezpłatnie, z listami dostępnymi offline i bez zakładania konta.",
    },
    howItWorks: {
        eyebrow: "Jak to działa",
        heading: "Trzy proste kroki. Możesz zaczynać.",
        intro: "Utwórz szablon, przejdź przez listę i dodaj przypomnienie, gdy się przyda. Bez skomplikowanej konfiguracji, która odciąga od działania.",
        steps: [
            {
                eyebrow: "Krok 1",
                title: "Utwórz szablon",
                body: "Dodaj nazwy pozycji i opcjonalnie zdjęcia. Ustal, które pozycje są wymagane, opcjonalne lub warunkowe. Korzystaj z szablonu wielokrotnie, zmieniaj kolejność, twórz kopie albo przenieś go do archiwum, gdy przestanie być potrzebny.",
            },
            {
                eyebrow: "Krok 2",
                title: "Sprawdź przed wyjściem",
                body: "Każda pozycja ma nazwę, zdjęcie i pole do zaznaczenia. Listę można ukończyć po zaznaczeniu wszystkich wymaganych pozycji. Opcjonalne nigdy nie blokują ukończenia; warunkowe — tylko wtedy, gdy obowiązują ich reguły.",
            },
            {
                eyebrow: "Krok 3",
                title: "Pozwól aplikacji przypomnieć",
                body: "Ustaw przypomnienie o rozpoczęciu listy lub dokończeniu trwającej. Jednorazowo albo codziennie, co tydzień lub miesiąc, od poniedziałku do piątku, w wybrane dni lub co kilka dni czy tygodni.",
            },
        ],
    },
    languageSwitcher: {
        label: "Język",
    },
    nav: {
        closeMenu: "Zamknij menu",
        features: "Funkcje",
        free: "Za darmo, z Twoim wsparciem",
        getApp: "Pobierz aplikację",
        howItWorks: "Jak to działa",
        label: "Na tej stronie",
        more: "Więcej sekcji",
        openMenu: "Otwórz menu",
        privacy: "Prywatność",
        privacyPolicy: "Polityka prywatności",
        tryIt: "Wypróbuj aplikację",
        security: "Bezpieczeństwo",
    },
    privacy: {
        badgeBody:
            "Listy są zapisywane na urządzeniu lub w przeglądarce, w której je tworzysz. Ty decydujesz, czy je wyeksportować lub udostępnić.",
        badgeTitle: "Zapisane na Twoim urządzeniu",
        eyebrow: "Prywatność",
        heading: "Twoje listy pozostają Twoje.",
        intro: "Bez konta w aplikacji, synchronizacji z chmurą i śledzenia. Szablony, listy i przypomnienia są przechowywane lokalnie, nie na serwerach twórcy.",
        points: [
            "Bez konta i logowania",
            "Bez analityki, narzędzi śledzących i reklamowych SDK w aplikacji",
            "Twoje listy nie są przechowywane na serwerach twórcy",
            "Zdjęcia są przechowywane lokalnie i pomijane przy udostępnianiu; kopie zapasowe je zawierają",
            "Kopie zapasowe są domyślnie szyfrowane wybraną przez Ciebie frazą hasłową",
            "Statystyki są obliczane na Twoim urządzeniu na podstawie Twoich list",
        ],
        policyLink: "Przeczytaj pełną politykę prywatności",
    },
    privacyPolicy: {
        back: "Wróć do przeglądu",
        contactHeading: "Kontakt",
        contactIntro: "Pytania o tę politykę lub prywatność w NeuraTiM Checklist kieruj na adres:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist przechowuje dane list na Twoim urządzeniu. Nie ma konta w aplikacji, synchronizacji z chmurą ani usługi analitycznej. Ta polityka opisuje lokalne przechowywanie, udostępnianie i eksport na Twoje polecenie, opcjonalne usługi urządzenia oraz osobne przetwarzanie danych na tej stronie internetowej.",
        title: "Polityka prywatności",
        sections: [
            {
                heading: "1. Zakres tej polityki",
                paragraphs: [
                    "Ta polityka obejmuje NeuraTiM Checklist na Androidzie, iOS i w przeglądarce oraz tę stronę internetową. NeuraTiM jest niezależnym twórcą i administratorem danych osobowych przetwarzanych w związku ze stroną lub bezpośrednim kontaktem.",
                    "Aplikacja jest bezpłatna, nie zawiera reklam i nie ma płatnej wersji.",
                ],
            },
            {
                heading: "2. Dane list i dobrowolne opinie",
                paragraphs: [
                    "Listy działają offline, bez konta i analityki. Dobrowolne opinie wymagają internetu; dyktowanie może przetwarzać mowę online.",
                ],
                points: [
                    "Imię i nazwisko, adres e-mail, numer telefonu ani dane konta do rejestracji — logowanie nie jest potrzebne",
                    "Identyfikatory reklamowe, urządzenia ani użytkownika do śledzenia",
                    "Twoja dokładna ani przybliżona lokalizacja",
                    "Kontakty, kalendarze, historia połączeń, SMS-y ani listy zainstalowanych aplikacji",
                    "Analityka użycia, diagnostyka ani raporty awarii wysyłane twórcy; statystyki list są obliczane lokalnie",
                    "Dane płatnicze ani finansowe w aplikacji; dobrowolne wpłaty na stronie opisano osobno poniżej",
                ],
            },
            {
                heading: "3. Dane przechowywane na urządzeniu",
                paragraphs: ["Aby listy działały offline, aplikacja zapisuje lokalnie:"],
                points: [
                    "Szablony, sekcje, tagi i pozycje, w tym nazwy, ilości, opisy, ustawienie wymaganych lub opcjonalnych pozycji oraz reguły warunkowe",
                    "Listy w toku i ukończone listy w historii, w tym zaznaczone pozycje i notatki",
                    "Zdjęcia dołączone do pozycji",
                    "Zaplanowane przypomnienia i ich treść",
                    "Ustawienia, takie jak język i jasny lub ciemny motyw",
                    "Zeskanowane kody kreskowe i przypisane im nazwy; aplikacja nie wyszukuje ich w internetowej bazie produktów",
                    "Ustawienia przechowywania historii i blokady aplikacji",
                ],
            },
            {
                heading: "4. Gdzie są przechowywane dane",
                paragraphs: [
                    "Na Androidzie i iOS dane znajdują się w prywatnej pamięci aplikacji, chronionej przez izolację aplikacji zapewnianą przez system operacyjny.",
                    "W wersji webowej dane są przechowywane w przeglądarce dla witryny aplikacji. Wyczyszczenie danych tej witryny usuwa lokalną kopię.",
                    "Aplikacja nie zapewnia kopii zapasowych w chmurze ani synchronizacji. Wyeksportowane i udostępnione kopie oraz kopie zapasowe zarządzane przez urządzenie lub przeglądarkę znajdują się poza tą lokalną pamięcią.",
                ],
            },
            {
                heading: "5. Uprawnienia i usługi urządzenia",
                paragraphs: [
                    "Uprawnienia służą funkcjom, które ich potrzebują. Dostępnymi uprawnieniami zarządzasz w ustawieniach urządzenia; odmowa może uniemożliwić działanie powiązanej funkcji.",
                ],
                points: [
                    "Aparat — do skanowania kodów QR i kreskowych oraz fotografowania pozycji. Skanowanie jest przetwarzane na urządzeniu bez zachowywania klatek z aparatu. Zdjęcia pozycji są zapisywane w lokalnej pamięci aplikacji.",
                    "Zdjęcia lub biblioteka zdjęć — do dołączenia wybranego obrazu. Obraz jest kopiowany do pamięci aplikacji; aplikacja nie przesyła ani nie indeksuje biblioteki zdjęć.",
                    "Powiadomienia — dla zaplanowanych przypomnień i, na obsługiwanych urządzeniach, bieżącego postępu. Powstają lokalnie, bez zdalnej usługi powiadomień push.",
                    "Dokładne alarmy (Android) — do planowania przypomnień na wybraną godzinę. Ich wyświetlenie nadal może zależeć od ustawień i ograniczeń systemu.",
                    "Uruchamianie przy starcie (Android) — do ponownego zaplanowania przypomnień po restarcie urządzenia.",
                    "Pliki — do zapisywania eksportów i otwierania wybranych kopii zapasowych lub plików udostępnionych.",
                    "Mikrofon — podczas dyktowania nazwy pozycji. Usługa rozpoznawania mowy urządzenia przekazuje aplikacji tekst; aplikacja nie zachowuje nagrania audio. Zależnie od urządzenia i ustawień usługa może przetwarzać dźwięk online zgodnie z własnymi zasadami prywatności.",
                    "Biometria lub kod urządzenia — po włączeniu blokady aplikacji. Weryfikację przeprowadza system operacyjny; aplikacja otrzymuje wynik, a nie dane odcisku palca czy twarzy.",
                ],
            },
            {
                heading: "6. Udostępnianie, eksport i przetwarzanie zewnętrzne",
                paragraphs: [
                    "Aplikacja nie przesyła automatycznie Twoich list twórcy. Ty decydujesz o udostępnianiu i eksporcie. Opcjonalne dyktowanie korzysta z opisanej wyżej usługi rozpoznawania mowy urządzenia.",
                ],
                points: [
                    "Udostępnianie tworzy kod QR, plik .ntchk lub zwykły tekst, które przekazujesz wybranym kanałem. Udostępniane szablony i listy nie zawierają zdjęć i nie są szyfrowane przez aplikację.",
                    "Eksport kopii zapasowej zapisuje plik we wskazanym miejscu lub otwiera systemowe menu udostępniania. Kopie zapasowe zawierają zdjęcia. Ochrona miejsca docelowego zależy od wybranej usługi.",
                    "Import odczytuje wskazany plik lub kod; nie szuka treści list w internecie. Używany dostawca plików może pobrać wybrany plik.",
                    "Do dewelopera wysyłane są wiadomość, opcjonalny e-mail, wersja aplikacji, platforma i język. Listy i zdjęcia nie są wysyłane.",
                ],
            },
            {
                heading: "7. Przechowywanie i usuwanie danych",
                paragraphs: [
                    "Twórca nie ma na serwerze kopii Twoich lokalnie zapisanych list. Zarządzasz nimi w aplikacji. Kopie wcześniej wyeksportowane, udostępnione lub zachowane jako zapasowe trzeba usuwać oddzielnie:",
                ],
                points: [
                    "Usuwaj pojedyncze pozycje, listy i szablony w aplikacji",
                    "Użyj funkcji Wyczyść historię, aby usunąć ukończone listy",
                    "Wyczyść lokalną pamięć aplikacji w ustawieniach urządzenia, jeśli jest to dostępne, lub usuń aplikację wraz z danymi; nie usuwa to zewnętrznych kopii zapasowych ani wyeksportowanych plików",
                    "W wersji webowej wyczyść w przeglądarce dane witryny aplikacji",
                    "Przechowuj ukończone listy przez miesiąc, trzy miesiące lub rok; starsze zostaną usunięte przy następnym otwarciu aplikacji",
                ],
            },
            {
                heading: "8. Bezpieczeństwo",
                paragraphs: [
                    "Lokalne dane korzystają z zabezpieczeń systemu operacyjnego. Blokada ekranu i szyfrowanie pamięci urządzenia zapewniają dodatkową ochronę, gdy są włączone.",
                    "Na serwerach twórcy nie ma centralnej bazy list. Ogranicza to ryzyko, ale nie zapewnia odporności urządzenia i wyeksportowanych plików na nieuprawniony dostęp.",
                    "Kopie zapasowe są domyślnie szyfrowane na urządzeniu przy użyciu wybranej frazy hasłowej, wyprowadzania klucza Argon2id i szyfrowania AES-GCM. Danych zapisanych na urządzeniu aplikacja sama nie szyfruje; polega na opisanych wyżej zabezpieczeniach systemu operacyjnego. Możesz też włączyć blokadę aplikacji, która decyduje, kto może ją otworzyć, ale nie szyfruje zapisanych danych.",
                    "Eksport bez szyfrowania jest osobną, oznaczoną czynnością wymagającą potwierdzenia. Każdy, kto uzyska dostęp do pliku, może go odczytać. Udostępniane pliki, kody QR i zwykły tekst również nie są szyfrowane przez aplikację i nie zawierają zdjęć. Przekazuj je tylko zaufanymi kanałami.",
                ],
            },
            {
                heading: "9. Dzieci",
                paragraphs: [
                    "Aplikacja nie jest przeznaczona dla dzieci poniżej 13 lat lub odpowiedniego wieku minimalnego w ich kraju. Twórca nie zbiera za pośrednictwem aplikacji danych z list utworzonych przez dzieci.",
                ],
            },
            {
                heading: "10. Komponenty i usługi podmiotów trzecich",
                paragraphs: [
                    "Aplikacja używa komponentów open source do powiadomień, skanowania, wyboru zdjęć i plików oraz udostępniania. Funkcje te korzystają z przetwarzania lokalnego i usług systemowych zamiast zaplecza serwerowego twórcy.",
                    "Aplikacja nie zawiera SDK do reklam, atrybucji, analityki ani raportowania awarii.",
                    "Inne komponenty obsługują szyfrowanie kopii zapasowych, odblokowanie biometryczne, dyktowanie i widżety. Dyktowanie korzysta z usługi rozpoznawania mowy urządzenia, która może przetwarzać dane online, jak wyjaśniono w sekcji 5.",
                ],
            },
            {
                heading: "11. Ta strona internetowa",
                paragraphs: [
                    "Strona przedstawia aplikację i udostępnia jej wersję webową. Żądania do strony, dobrowolne płatności i wysyłane wiadomości są niezależne od lokalnie zapisanych danych list.",
                ],
                points: [
                    "Hosting — strona korzysta z Cloudflare, który może przetwarzać adresy IP, informacje o przeglądarce i żądane adresy URL w celu dostarczania treści i zapewniania bezpieczeństwa. Jest to oddzielone od danych aplikacji i nie oznacza przesyłania Twoich list.",
                    "Wybór języka — wybrany język jest zapisywany w przeglądarce i uwzględniany w adresie strony. Podczas żądania strony adres może być widoczny dla dostawcy hostingu.",
                    "Wpłaty — wsparcie jest dobrowolne. Płatności obsługują Stripe, Ko-fi, PayPal lub GitHub Sponsors zgodnie z własnymi zasadami prywatności. Twórca może otrzymać informacje o transakcji i dane wspierającej osoby udostępnione przez usługodawcę, ale nie pełny numer karty z formularza płatności.",
                    "Wypróbowanie aplikacji — osadzona aplikacja webowa zapisuje dane list w przeglądarce zgodnie z opisem powyżej. Załadowanie aplikacji wymaga żądania do jej usługi hostingowej.",
                    "Linki zewnętrzne i e-mail — inne strony mają własne polityki prywatności. Jeśli napiszesz do twórcy, otrzyma Twój adres i wiadomość, aby móc odpowiedzieć.",
                ],
            },
            {
                heading: "12. Twoje prawa",
                paragraphs: [
                    "Zależnie od właściwego prawa możesz mieć prawo dostępu do danych osobowych, ich poprawienia, usunięcia lub otrzymania kopii, ograniczenia przetwarzania, wniesienia sprzeciwu i złożenia skargi do organu ochrony danych. Prawa te mogą dotyczyć również danych ze strony, płatności i wiadomości e-mail, nie tylko treści aplikacji.",
                    "Twórca nie sprzedaje danych Twoich list ani nie wykorzystuje ich do reklam. Nie może uzyskać dostępu do list przechowywanych wyłącznie na Twoim urządzeniu ani ich usunąć.",
                    "Pytania o prywatność i żądania dotyczące danych, które twórca rzeczywiście posiada, kieruj na podany niżej adres kontaktowy.",
                ],
            },
            {
                heading: "13. Zmiany tej polityki",
                paragraphs: [
                    "Aktualizacje będą publikowane na tej stronie z nową datą. Zmiany sposobu przetwarzania danych przez aplikację zostaną też wyjaśnione w informacjach o odpowiednim wydaniu. Nowa polityka nie uprawnia wstecznie do wcześniejszego zbierania danych.",
                ],
            },
        ],
        lastUpdated: "Ostatnia aktualizacja: 28 października 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Ukończono w zeszły piątek",
            finishedTuesday: "Ukończono we wtorek",
            history: "Historia",
            inProgress: "W toku",
            startedToday: "Rozpoczęto dzisiaj",
            startSubtitle: "Wybierz szablon i zaznaczaj pozycje po kolei.",
            startTitle: "Rozpocznij listę",
        },
        common: {
            navChecklists: "Listy",
            navSchedule: "Harmonogram",
            navTemplates: "Szablony",
            templateCarryOn: "Pakowanie bagażu podręcznego",
            templateGrocery: "Cotygodniowe zakupy",
            templateHiking: "Weekendowa wędrówka",
            templatePreFlight: "Sprawdzenie domu przed lotem",
        },
        condition: {
            addRule: "Dodaj regułę",
            and: "I",
            headerItem: "Tropik do namiotu",
            intro: "Ta pozycja jest wymagana tylko wtedy, gdy:",
            isChecked: "pole zaznaczone",
            isNotChecked: "pole niezaznaczone",
            requiredWhen: "Wymagana, gdy",
            ruleLaptop: "Namiot",
            ruleTrip: "Wyjazd z noclegiem",
            save: "Zapisz",
            summary: "Pozycja „Namiot” jest zaznaczona I pozycja „Wyjazd z noclegiem” jest zaznaczona",
            title: "Warunek",
        },
        run: {
            conditional: "Warunkowa",
            essentials: "Niezbędne",
            finish: "Ukończ",
            firstAidKit: "Apteczka",
            headlamp: "Czołówka",
            optional: "Opcjonalna",
            rainCover: "Tropik do namiotu",
            requiredLeftTwo: "Pozostały 2 wymagane pozycje",
            requiredNow: "Teraz wymagana",
            subtitle: "Zaznaczono 3 z 5 wymaganych pozycji",
            tent: "Namiot",
            trailMap: "Mapa szlaków",
            trekkingPoles: "Kijki trekkingowe",
            waterBottle: "Butelka na wodę ×2",
            doneHeading: "Gotowe (3)",
            filterAll: "Wszystkie",
            filterOptional: "Opcjonalne",
            filterRemaining: "Pozostałe",
        },
        schedule: {
            doesNotRepeat: "Bez powtarzania",
            entry1Title: "Rozpocznij: Weekendowa wędrówka",
            entry1When: "Sob., 7:00",
            entry2Title: "Ukończ: Cotygodniowe zakupy",
            entry2When: "Dzisiaj, 18:00",
            entry3Title: "Rozpocznij: Sprawdzenie domu przed lotem",
            entry3When: "28 lipca, 5:30",
            finishReminderLabel: "Przypomnienie o ukończeniu",
            newReminder: "Nowe przypomnienie",
            repeatsWeekly: "Powtarza się co tydzień",
            startReminderLabel: "Przypomnienie o rozpoczęciu",
            repeatsWeekdays: "Od poniedziałku do piątku (pon.–pt.)",
        },
        templates: {
            allChip: "Wszystkie",
            carryOnSummary: "15 pozycji · 10 wymaganych",
            grocerySummary: "9 pozycji · 9 wymaganych",
            hikingSummary: "12 pozycji · 8 wymaganych",
            newTemplate: "Nowy szablon",
            preFlightSummary: "6 pozycji · 6 wymaganych",
            tagHome: "Dom",
            tagOutdoors: "Na zewnątrz",
            tagTravel: "Podróże",
        },
        backup: {
            badgeBody:
                "Szyfrowana kopia zapasowa zawiera szablony, listy, notatki, przypomnienia i zdjęcia chronione Twoją frazą hasłową. Eksport bez szyfrowania jest osobną opcją.",
            badgeNote:
                "Bez konta i synchronizacji z chmurą. Ty wybierasz, gdzie zapisać lub udostępnić kopię zapasową.",
            badgeTitle: "Co zawiera kopia zapasowa",
            exportEncrypted: "Eksportuj szyfrowaną kopię",
            exportPlain: "Eksportuj bez szyfrowania",
            intro: "Twoje dane są zapisane tutaj, na tym urządzeniu. Wyeksportuj kopię zapasową, aby zachować dodatkową kopię, lub przywróć wcześniej zapisaną kopię.",
            restore: "Przywróć z kopii zapasowej",
            title: "Kopie zapasowe i przywracanie",
        },
        start: {
            quickBody: "Bez szablonu. Dodawaj pozycje i od razu je zaznaczaj.",
            quickTitle: "Szybka lista",
            title: "Rozpocznij listę",
            writeBody: "Wpisz lub wklej całą listę, a potem zacznij zaznaczać pozycje.",
            writeTitle: "Napisz listę",
        },
        stats: {
            finishedRuns: "Ukończone listy",
            inProgress: "W toku",
            itemsChecked: "Zaznaczone pozycje",
            missedHeading: "Najczęściej niezaznaczone",
            missedHelp: "Pozycje, które pozostały niezaznaczone przy ukończeniu listy.",
            missedItem1: "Kijki trekkingowe",
            missedItem1Count: "9 razy",
            missedItem2: "Czołówka",
            missedItem2Count: "6 razy",
            missedItem3: "Tropik do namiotu",
            missedItem3Count: "2 razy",
            subtitle: "Obliczone na tym urządzeniu na podstawie zapisanych list.",
            templates: "Szablony",
            title: "Statystyki",
        },
    },
    siteShareRoller: {
        hint: "Przeciągnij lub użyj klawiszy ← →, aby obracać. Kliknij ikonę, aby udostępnić.",
    },
    siteShare: {
        copied: "Link skopiowany",
        copyLink: "Kopiuj link",
        error: "Nie udało się rozpocząć udostępniania. Spróbuj ponownie lub skopiuj link.",
        heading: "Udostępnij tę stronę",
        manualCopy: "Skopiuj ten link ręcznie",
        nativeShare: "Udostępnij przez urządzenie",
        selectLabel: "Serwis społecznościowy lub sposób udostępniania",
        share: "Udostępnij",
    },
    tryApp: {
        back: "Wróć do przeglądu",
        dismissNotice: "Zamknij",
        iframeTitle: "NeuraTiM Checklist — działająca aplikacja",
        intro: "To działająca aplikacja webowa, nie obrazek demonstracyjny. Wypróbuj ją — Twoje listy zapisują się w tej przeglądarce.",
        loading: "Ładowanie aplikacji…",
    },
    insights: {
        eyebrow: "Statystyki",
        heading: "Twoje postępy. Tylko dla Ciebie.",
        intro: "Statystyki powstają na Twoim urządzeniu na podstawie zapisanych list, a nie śledzenia aktywności. Po usunięciu listy jej dane przestają być uwzględniane. Nie jest przechowywany osobny rejestr analityczny.",
        points: [
            {
                title: "Zobacz, co zwykle pomijasz",
                body: "Sprawdź, które pozycje najczęściej pozostają niezaznaczone przy ukończeniu listy. Opcjonalna pozycja, którą zawsze pomijasz, może już nie być potrzebna. Aktualnie wymagane pozycje trzeba zaznaczyć przed ukończeniem.",
            },
            {
                title: "Pełniejszy obraz",
                body: "Zobacz, ile masz szablonów, ile list jest ukończonych lub w toku i ile pozycji zaznaczono łącznie.",
            },
            {
                title: "Liczby bez śledzenia",
                body: "Bez SDK analitycznego, usługi raportowania awarii ani raportów użycia wysyłanych twórcy. Statystyki list zostają na Twoim urządzeniu.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Pierwsze kroki",
        heading: "Mniej pisania. Więcej zrobionych rzeczy.",
        intro: "Zacznij od gotowego szablonu, wklej listę albo utwórz szybką listę. Wybierz wygodny sposób — nie musisz wpisywać wszystkiego po jednej pozycji.",
        points: [
            {
                title: "Dostosuj gotowy szablon",
                body: "Wybierz Wędrówkę, Weekendowy wyjazd, Zakupy spożywcze, Torbę na siłownię lub Wyjście z domu. Kopia trafi do Twoich szablonów: zmień nazwę i usuń to, czego nie potrzebujesz.",
            },
            {
                title: "Napisz całą listę naraz",
                body: "W pierwszym wierszu wpisz nazwę listy, a w każdym kolejnym jedną pozycję. Dopisz dokładny znacznik [optional] na końcu wiersza, by pozycja była opcjonalna. Wklej gotową listę i zaczynaj.",
            },
            {
                title: "Wklej do istniejącej listy",
                body: "Wypunktowanie i numeracja znikną automatycznie. Rozpocznij wiersz od 2x, aby ustawić ilość na dwa. Zamień całą stronę notatek w osobne pozycje za jednym razem.",
            },
            {
                title: "Albo zacznij od szybkiej listy",
                body: "Szablon nie jest potrzebny. Dodawaj pozycje na bieżąco, dyktuj nazwy na obsługiwanych urządzeniach lub używaj kodów kreskowych z zapisanymi nazwami. Podpowiedzi pochodzą z nazw pozycji już zapisanych na urządzeniu.",
            },
        ],
    },
    security: {
        eyebrow: "Bezpieczeństwo",
        heading: "Wiesz, co udostępniasz. Wybierasz, jak to chronić.",
        intro: "Przed eksportem lub udostępnieniem aplikacja wyjaśnia, co zostanie dołączone i czy będzie zaszyfrowane. Kopie zapasowe mogą zawierać zdjęcia; udostępniane szablony i listy ich nie zawierają.",
        note: "Blokada decyduje, kto może otworzyć aplikację. Nie szyfruje danych: zapisane dane chronią zabezpieczenia Twojego urządzenia, np. blokada ekranu.",
        points: [
            {
                title: "Kopie chronione Twoją frazą hasłową",
                body: "Argon2id wyprowadza klucz, a AES-GCM szyfruje kopię — wszystko na Twoim urządzeniu. Wybierz silną frazę hasłową i przechowuj ją bezpiecznie: twórca nie może jej za Ciebie odzyskać.",
            },
            {
                title: "Eksport bez szyfrowania tylko z Twojego wyboru",
                body: "Potrzebujesz nieszyfrowanego pliku? Użyj osobnej, wyraźnie oznaczonej opcji eksportu i potwierdź przed zapisem. Każdy, kto ma dostęp do pliku, może odczytać jego treść.",
            },
            {
                title: "Odblokuj za pomocą urządzenia",
                body: "Otwieraj aplikację odciskiem palca, rozpoznawaniem twarzy lub kodem urządzenia. Uwierzytelnianiem zajmuje się system operacyjny; aplikacja nigdy nie otrzymuje danych odcisku palca ani twarzy.",
            },
            {
                title: "Chronione przez Twoje urządzenie",
                body: "Na Androidzie i iOS listy, notatki i zdjęcia pozostają w prywatnej pamięci aplikacji, chronione przez izolację aplikacji w systemie operacyjnym i blokadę ekranu. Aplikacja nie dodaje własnego szyfrowania.",
            },
        ],
    },
};

export default pl;
