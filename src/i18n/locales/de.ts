import type { LocaleDictionary } from "../../types/dictionary";

const de: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Bedingte Einträge",
        heading: "Manches brauchst du nur manchmal.",
        intro: "Nimmst du den Laptop mit? Dann gehört das Ladegerät dazu. Bleibt er zu Hause, kann auch das Ladegerät bleiben. Lege einen Eintrag als bedingt fest: Er wird nur dann erforderlich, wenn deine Regeln erfüllt sind. Eine Vorlage für unterschiedliche Pläne.",
        points: [
            {
                title: "Regeln in klaren Worten",
                body: "Wähle einen Eintrag und lege fest, ob er abgehakt sein muss oder nicht. Die App zeigt die gesamte Bedingung als Satz an, damit du genau siehst, wann sie gilt.",
            },
            {
                title: "UND, ODER und Klammern",
                body: "Verknüpfe Regeln mit UND oder ODER und fasse sie mit Klammern zusammen. Zum Beispiel: Das Ladegerät ist erforderlich, wenn der Eintrag „Laptop“ abgehakt ist UND mindestens einer der Einträge „Übernachtung“ oder „Geschäftsreise“ abgehakt ist.",
            },
            {
                title: "Passt sich beim Abhaken an",
                body: "Sobald eine Bedingung erfüllt ist, wird der Eintrag erforderlich und zählt für den Abschluss. Gilt die Bedingung nicht mehr, entfällt diese Pflicht. Abschließen kannst du erst, wenn alle aktuell erforderlichen Einträge abgehakt sind.",
            },
        ],
    },
    features: {
        eyebrow: "Funktionen",
        heading: "Alles für deine Checkliste. Nichts, was im Weg steht.",
        items: [
            {
                title: "Wiederverwendbare Vorlagen",
                body: "Ergänze Fotos, Notizen, Tags sowie erforderliche, optionale oder bedingte Einträge. Erstelle eine Vorlage einmal und starte daraus bei Bedarf eine neue Checkliste.",
            },
            {
                title: "In Bearbeitung und Verlauf",
                body: "Lass eine Checkliste offen und mach später weiter. Sie bleibt in Bearbeitung, bis du sie abschließt oder löschst. Abgeschlossene Checklisten wandern in den Verlauf.",
            },
            {
                title: "Erinnerungen nach deinem Plan",
                body: "Lass dich an den Start oder den Abschluss einer Checkliste erinnern. Einmalig, täglich, wöchentlich, monatlich, montags bis freitags, an ausgewählten Tagen oder in Abständen von Tagen oder Wochen.",
            },
            {
                title: "Funktioniert offline",
                body: "Erstelle und nutze Checklisten ohne Internetverbindung. Vorlagen, Checklisten und Erinnerungen werden auf deinem Gerät gespeichert – ohne Konto und ohne Cloud-Synchronisierung.",
            },
            {
                title: "Suche und Tags",
                body: "Filtere Vorlagen nach Tags und finde Checklisten anhand ihres Namens. Weniger scrollen, auch wenn deine Sammlung wächst.",
            },
            {
                title: "iOS · Android · Web",
                body: "Deine Checklisten in einer übersichtlichen, vertrauten Umgebung – auf dem Smartphone, Tablet oder im Browser. Welche Funktionen verfügbar sind, kann je nach Plattform variieren.",
            },
            {
                title: "Bedingte Einträge",
                body: "Ein Eintrag wird nur erforderlich, wenn du ihn wirklich brauchst: etwa das Ladegerät, wenn der Laptop mitkommt. Verknüpfe Regeln mit UND und ODER; sie werden beim Abhaken neu ausgewertet.",
            },
            {
                title: "Platz für Details",
                body: "Ergänze zu jedem Eintrag mehrere Fotos, eine Beschreibung und eine Menge mit eigener Einheit, etwa 2 kg oder 3 Packungen. Ordne Einträge in Abschnitte ein und verschiebe einzelne Einträge oder ganze Abschnitte per Ziehen.",
            },
            {
                title: "Lange Listen, mehr Übersicht",
                body: "Fasse abgehakte Einträge unter Erledigt zusammen oder blende sie ganz aus. Mit den Filtern Offen und Optional siehst du nur, was gerade wichtig ist.",
            },
            {
                title: "Mehrere Einträge gemeinsam bearbeiten",
                body: "Wähle mehrere Einträge aus, um sie zusammen in einen anderen Abschnitt zu verschieben, als erforderlich oder optional zu markieren oder zu löschen.",
            },
            {
                title: "Fortschritt auf einen Blick",
                body: "Auf unterstützten Geräten zeigen eine dauerhafte Benachrichtigung und ein Widget auf dem Startbildschirm deinen Fortschritt. App-Verknüpfungen führen direkt zu deinen vier zuletzt verwendeten Vorlagen.",
            },
            {
                title: "Teilen, wie es dir passt",
                body: "Schicke einen QR-Code oder eine .ntchk-Datei an jemanden mit der App – oder einfachen Text an alle anderen. Geteilte Checklisten und Vorlagen enthalten keine Fotos.",
            },
            {
                title: "Verschlüsselte Backups",
                body: "Sichere deine Daten samt Fotos in einer einzigen Datei, geschützt durch eine selbst gewählte Passphrase. Die Verschlüsselung mit Argon2id und AES-GCM erfolgt auf deinem Gerät.",
            },
            {
                title: "App-Sperre und Verschlüsselung",
                body: "Entsperre die App mit deinem Fingerabdruck, per Gesichtserkennung oder mit deinem Gerätecode. Auf Android und iOS kannst du auch die gespeicherten Daten verschlüsseln.",
            },
            {
                title: "Dein Verlauf, deine Entscheidung",
                body: "Bewahre abgeschlossene Checklisten unbegrenzt, einen Monat, drei Monate oder ein Jahr auf. Ältere Checklisten werden beim nächsten Öffnen der App entfernt.",
            },
        ],
    },
    footer: {
        contact: "Kontakt",
        mainSite: "NeuraTiM",
        privacyPolicy: "Datenschutzerklärung",
        tagline: "Unabhängig entwickelt. {year} · Kein App-Konto, kein Tracking.",
    },
    freeSupport: {
        eyebrow: "Kostenlos, mit deiner Unterstützung",
        githubSponsorsNote: "Erfordert ein GitHub-Konto",
        heading: "100 % kostenlos. Ohne Haken.",
        intro: "Alle Funktionen sind kostenlos. Unterstützung ist willkommen, aber niemals Voraussetzung.",
        notHere: ["Keine Werbung", "Kein Abo", "Keine In-App-Käufe", "Keine Premiumversion"],
        pledge: {
            body: "Wenn dir diese Apps nützlich sind, denk bitte über eine Spende nach. Würde jeder, der sie nutzt, einen Euro im Monat schicken, käme das Projekt bequem über die Runden — und du könntest jede NeuraTiM-App weiterhin kostenlos und mit gutem Gewissen nutzen, im Wissen, dass dein Anteil sie aktuell hält und finanziert, was als Nächstes kommt.",
            heading: "Ein Euro im Monat genügt",
        },
        quickTip: {
            amountLabel: "Betrag auswählen",
            backButton: "Zurück",
            cancelNote:
                "Jederzeit kündbar – eine E-Mail genügt, und die Spende endet, bevor der nächste Monat abgebucht wird.",
            customAmountLabel: "Anderer Betrag (EUR)",
            emailLabel: "E-Mail für den Beleg",
            errorAmount: "Gib einen Betrag zwischen 1 und 500 EUR ein.",
            errorEmail: "Gib eine gültige E-Mail-Adresse ein.",
            errorGeneric: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
            heading: "Das Projekt unterstützen",
            monthlyPayButton: "{amount} im Monat spenden",
            monthlySuccessBody:
                "Deine monatliche Spende steht, die erste ist durch. Danke, dass du diese Apps kostenlos hältst.",
            payButton: "{amount} bezahlen",
            poweredBy:
                "Stripe wickelt die Zahlung ab. Bezahle per Karte oder, sofern verfügbar, mit Apple Pay oder Google Pay. Ein NeuraTiM-Konto brauchst du nicht.",
            processingButton: "Wird verarbeitet …",
            successBody: "Dein Beitrag ist angekommen. Danke, dass du hilfst, die App kostenlos zu halten!",
            successHeading: "Vielen Dank!",
            tabMonthly: "Monatlich",
            tabOneOff: "Einmalig",
        },
        supportBody:
            "Die Nutzung ist kostenlos, die Pflege kostet trotzdem etwas. Die Kosten für Entwicklung und Hosting trage ich selbst. Für den Vertrieb im App Store ist eine Mitgliedschaft im Apple Developer Program nötig, normalerweise für 99 USD im Jahr. Ein kleiner Beitrag hilft diesem unabhängigen Projekt – freiwillig und immer willkommen.",
        tipCta: "Einen Beitrag senden",
        tipEmailLead: "Fragen zur Unterstützung der App? Schreib mir eine E-Mail.",
        tipEmailSubject: "Trinkgeld",
        waysToTip: "Weitere Möglichkeiten, das Projekt zu unterstützen:",
    },
    getApp: {
        eyebrow: "App holen",
        heading: "Deine Checklisten auf deiner Plattform.",
        intro: "Wähle die Web-, Android- oder iOS-Version. Die Installationspakete jeder Veröffentlichung werden aus dem Quellcode erstellt.",
        platforms: {
            android: {
                detail: "Hol dir die kostenlose Android-Version. Folge den Download- oder Testanweisungen für die aktuelle Version.",
                cta: "Android-Version holen",
            },
            ios: {
                detail: "Kostenlos für iPhone und iPad im App Store erhältlich.",
                cta: "iOS-Version holen",
            },
            web: {
                detail: "Öffne die App in einem modernen Browser. Ohne Installation.",
                cta: "App ausprobieren",
            },
        },
    },
    hero: {
        badges: ["Keine Werbung", "Kein Konto", "Kein Tracking", "iOS · Android · Web"],
        ctaPrimary: "App ausprobieren",
        ctaSecondary: "So funktioniert's",
        headingHighlight: "alles dabei.",
        headingLead: "Los geht's –",
        subhead:
            "Erstelle eine Checkliste fürs Packen, den Haushalt oder die nächste Reise und verwende sie immer wieder. Kostenlos, mit offline verfügbaren Checklisten und ohne Registrierung.",
    },
    howItWorks: {
        eyebrow: "So funktioniert's",
        heading: "Drei einfache Schritte. Und du kannst loslegen.",
        intro: "Erstelle eine Vorlage, gehe deine Checkliste durch und füge bei Bedarf eine Erinnerung hinzu. Ohne aufwendige Einrichtung zwischen dir und deinen Vorhaben.",
        steps: [
            {
                eyebrow: "Schritt 1",
                title: "Eine Vorlage erstellen",
                body: "Ergänze Eintragsnamen und bei Bedarf Fotos. Lege fest, welche Einträge erforderlich, optional oder bedingt sind. Nutze die Vorlage immer wieder, ändere die Reihenfolge, erstelle eine Kopie oder archiviere sie, wenn du sie nicht mehr brauchst.",
            },
            {
                eyebrow: "Schritt 2",
                title: "Vor dem Losgehen abhaken",
                body: "Zu jedem Eintrag siehst du Name, Foto und Kontrollkästchen. Sind alle erforderlichen Einträge abgehakt, kannst du abschließen. Optionale Einträge verhindern den Abschluss nicht; bedingte nur dann, wenn ihre Regeln erfüllt sind.",
            },
            {
                eyebrow: "Schritt 3",
                title: "Die App erinnert dich",
                body: "Stelle eine Erinnerung für den Start oder den Abschluss einer Checkliste ein. Einmalig oder wiederkehrend: täglich, wöchentlich, monatlich, montags bis freitags, an ausgewählten Tagen oder alle paar Tage oder Wochen.",
            },
        ],
    },
    languageSwitcher: {
        label: "Sprache",
    },
    nav: {
        closeMenu: "Menü schließen",
        features: "Funktionen",
        free: "Kostenlos, mit deiner Unterstützung",
        getApp: "App holen",
        howItWorks: "So funktioniert's",
        label: "Auf dieser Seite",
        more: "Weitere Abschnitte",
        openMenu: "Menü öffnen",
        privacy: "Datenschutz",
        privacyPolicy: "Datenschutzerklärung",
        tryIt: "App ausprobieren",
        security: "Sicherheit",
    },
    privacy: {
        badgeBody:
            "Deine Checklisten werden auf dem Gerät oder im Browser gespeichert, in dem du sie erstellst. Ob du sie exportierst oder teilst, entscheidest du.",
        badgeTitle: "Auf deinem Gerät gespeichert",
        eyebrow: "Datenschutz",
        heading: "Deine Checklisten bleiben deine Sache.",
        intro: "Kein App-Konto, keine Cloud-Synchronisierung, kein Tracking. Vorlagen, Checklisten und Erinnerungen werden lokal gespeichert, nicht auf Servern des Entwicklers.",
        points: [
            "Kein Konto und keine Anmeldung",
            "Keine Analyse-, Tracking- oder Werbe-SDKs in der App",
            "Deine Checklisten werden nicht auf den Servern des Entwicklers gespeichert",
            "Fotos werden lokal gespeichert und beim Teilen nicht mitgesendet; Backups enthalten sie",
            "Backups werden standardmäßig mit einer selbst gewählten Passphrase verschlüsselt",
            "Die Statistik wird auf deinem Gerät aus deinen Checklisten berechnet",
        ],
        chips: ["Kein Konto", "Kein Tracking", "Keine Cloud-Synchronisierung", "Verschlüsselte Backups"],
        policyLink: "Die vollständige Datenschutzerklärung lesen",
    },
    privacyPolicy: {
        back: "Zurück zur Übersicht",
        contactHeading: "Kontakt",
        contactIntro: "Bei Fragen zu dieser Erklärung oder zum Datenschutz in NeuraTiM Checklist schreib an:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist speichert deine Checklistendaten auf deinem Gerät. Es gibt weder App-Konten noch Cloud-Synchronisierung oder einen Analysedienst. Diese Erklärung beschreibt die lokale Speicherung, von dir veranlasstes Teilen und Exportieren, optionale Gerätedienste und die gesonderte Datenverarbeitung auf dieser Website.",
        title: "Datenschutzerklärung",
        sections: [
            {
                heading: "1. Geltungsbereich",
                paragraphs: [
                    "Diese Erklärung gilt für NeuraTiM Checklist auf Android, iOS und im Web sowie für diese Website. NeuraTiM ist der unabhängige Entwickler und der Verantwortliche für personenbezogene Daten, die im Zusammenhang mit dieser Website oder einer direkten Kontaktaufnahme verarbeitet werden.",
                    "Die App ist kostenlos, enthält keine Werbung und hat keine kostenpflichtige Version.",
                ],
            },
            {
                heading: "2. Checklistendaten und freiwilliges Feedback",
                paragraphs: [
                    "Die Checklisten funktionieren offline, ohne Konto oder Analysen. Freiwilliges Feedback braucht Internet; Spracheingabe kann online verarbeitet werden.",
                ],
                points: [
                    "Namen, E-Mail-Adressen, Telefonnummern oder Kontodaten zur Registrierung – es gibt keine Anmeldung",
                    "Werbekennungen, Gerätekennungen oder Nutzer-IDs für Tracking",
                    "Dein genauer oder ungefährer Standort",
                    "Kontakte, Kalender, Anruflisten, SMS oder Listen installierter Apps",
                    "Nutzungsanalysen, Diagnosedaten oder Absturzberichte an den Entwickler; die Checklistenstatistik wird lokal berechnet",
                    "Zahlungs- oder Finanzinformationen innerhalb der App; freiwillige Beiträge auf der Website werden weiter unten gesondert behandelt",
                ],
            },
            {
                heading: "3. Auf deinem Gerät gespeicherte Daten",
                paragraphs: [
                    "Damit du Checklisten offline nutzen kannst, speichert die App Folgendes lokal:",
                ],
                points: [
                    "Vorlagen, Abschnitte, Tags und Einträge einschließlich Namen, Mengen, Beschreibungen, Kennzeichnung als erforderlich oder optional und Bedingungsregeln",
                    "Laufende Checklisten und abgeschlossene Checklisten im Verlauf samt abgehakten Einträgen und Notizen",
                    "Fotos, die du Einträgen hinzufügst",
                    "Geplante Erinnerungen und deren Text",
                    "Einstellungen wie Sprache und helles oder dunkles Design",
                    "Gescannte Barcodes und die von dir vergebenen Namen; die App schlägt sie nicht in einer Online-Produktdatenbank nach",
                    "Einstellungen zur Aufbewahrungsdauer des Verlaufs, zur App-Sperre und zur Verschlüsselung auf dem Gerät",
                ],
            },
            {
                heading: "4. Speicherort deiner Daten",
                paragraphs: [
                    "Auf Android und iOS liegen die Daten im privaten Speicher der App. Die App-Isolation des Betriebssystems schützt diesen Bereich.",
                    "In der Webversion speichert dein Browser die Daten für die Website der App. Wenn du deren Websitedaten löschst, wird die lokale Kopie entfernt.",
                    "Die App bietet weder Cloud-Backups noch Synchronisierung an. Exportierte oder geteilte Kopien und vom Gerät oder Browser verwaltete Backups liegen außerhalb dieses lokalen Speichers.",
                ],
            },
            {
                heading: "5. Berechtigungen und Gerätedienste",
                paragraphs: [
                    "Berechtigungen werden für die Funktionen verwendet, die sie benötigen. Verfügbare Berechtigungen verwaltest du in den Geräteeinstellungen. Eine verweigerte Berechtigung kann die zugehörige Funktion verhindern.",
                ],
                points: [
                    "Kamera – zum Scannen von QR-Codes oder Barcodes und zum Fotografieren von Einträgen. Scans werden auf dem Gerät verarbeitet, ohne Kamerabilder aufzubewahren. Eintragsfotos werden lokal im App-Speicher gespeichert.",
                    "Fotos oder Fotomediathek – zum Hinzufügen eines von dir ausgewählten Bildes. Das Bild wird in den App-Speicher kopiert; die App lädt deine Fotomediathek weder hoch noch indexiert sie diese.",
                    "Benachrichtigungen – für geplante Erinnerungen und, soweit unterstützt, laufende Fortschrittsanzeigen. Sie werden lokal erstellt, ohne entfernten Push-Dienst.",
                    "Exakte Alarme (Android) – zur Planung von Erinnerungen zur gewählten Zeit. Die Zustellung kann dennoch von Systemeinstellungen und Einschränkungen abhängen.",
                    "Beim Start ausführen (Android) – um Erinnerungen nach einem Neustart des Geräts erneut einzuplanen.",
                    "Dateien – zum Speichern von Exporten und Öffnen ausgewählter Backup- oder Freigabedateien.",
                    "Mikrofon – wenn du einen Eintragsnamen diktierst. Der Sprachdienst des Geräts liefert Text an die App, die keine Audioaufnahme aufbewahrt. Je nach Gerät und Einstellungen kann der Sprachdienst Audio online gemäß seinen eigenen Datenschutzbedingungen verarbeiten.",
                    "Biometrie oder Gerätecode – wenn du die App-Sperre aktivierst. Das Betriebssystem übernimmt die Prüfung; die App erhält das Ergebnis, nicht deine Fingerabdruck- oder Gesichtsdaten.",
                ],
            },
            {
                heading: "6. Teilen, Exportieren und externe Verarbeitung",
                paragraphs: [
                    "Die App lädt deine Checklisten nicht automatisch zum Entwickler hoch. Du entscheidest, ob du sie teilst oder exportierst. Die optionale Diktierfunktion nutzt den oben beschriebenen Sprachdienst deines Geräts.",
                ],
                points: [
                    "Beim Teilen entsteht ein QR-Code, eine .ntchk-Datei oder einfacher Text, den du über einen selbst gewählten Weg weitergibst. Geteilte Vorlagen und Checklisten enthalten keine Fotos und werden von der App nicht verschlüsselt.",
                    "Ein Backup-Export speichert eine Datei am gewählten Ort oder öffnet das Teilen-Menü deines Geräts. Backups enthalten Fotos. Wie der Zielort geschützt ist, hängt vom gewählten Dienst ab.",
                    "Der Import liest eine von dir bereitgestellte Datei oder einen Code; er sucht nicht online nach Checklisteninhalten. Ein von dir verwendeter Dateidienst kann die ausgewählte Datei herunterladen.",
                    "Deine Nachricht, optionale E-Mail-Adresse, App-Version, Plattform und Sprache werden an den Entwickler gesendet. Checklisten und Fotos werden nicht gesendet.",
                ],
            },
            {
                heading: "7. Daten aufbewahren und löschen",
                paragraphs: [
                    "Der Entwickler hat keine serverseitige Kopie deiner lokal gespeicherten Checklisten. Du verwaltest diese Daten in der App. Bereits exportierte, geteilte oder gesicherte Kopien musst du separat löschen:",
                ],
                points: [
                    "Lösche einzelne Einträge, Checklisten oder Vorlagen in der App",
                    "Entferne abgeschlossene Checklisten mit Verlauf löschen",
                    "Lösche den lokalen App-Speicher in den Geräteeinstellungen, sofern möglich, oder entferne die App samt Daten; externe Backups und exportierte Dateien bleiben davon unberührt",
                    "Lösche in der Webversion die Websitedaten der App im Browser",
                    "Bewahre abgeschlossene Checklisten einen Monat, drei Monate oder ein Jahr auf; ältere werden beim nächsten Öffnen der App gelöscht",
                ],
            },
            {
                heading: "8. Sicherheit",
                paragraphs: [
                    "Lokale Daten profitieren von den Sicherheitsmechanismen deines Betriebssystems. Die Bildschirmsperre und Speicherverschlüsselung des Geräts bieten zusätzlichen Schutz, wenn sie aktiviert sind.",
                    "Auf den Servern des Entwicklers gibt es keine zentrale Checklistendatenbank. Das verringert Risiken, macht dein Gerät oder exportierte Dateien aber nicht unangreifbar.",
                    "Backups werden standardmäßig auf deinem Gerät verschlüsselt: mit einer selbst gewählten Passphrase, Argon2id zur Schlüsselableitung und AES-GCM zur Verschlüsselung. Zusätzlich kannst du eine App-Sperre aktivieren. Auf Android und iOS schützt eine optionale Speicherverschlüsselung lokale Daten; das Schlüsselmaterial wird über Android Keystore oder iOS Keychain gesichert.",
                    "Der unverschlüsselte Export ist eine separate, gekennzeichnete Aktion mit Bestätigung. Wer Zugriff auf die Datei hat, kann sie lesen. Auch geteilte Dateien, QR-Codes und einfacher Text werden von der App nicht verschlüsselt und enthalten keine Fotos. Gib sie nur über vertrauenswürdige Wege weiter.",
                ],
            },
            {
                heading: "9. Kinder",
                paragraphs: [
                    "Die App richtet sich nicht an Kinder unter 13 Jahren beziehungsweise unter dem geltenden Mindestalter ihres Landes. Der Entwickler erhebt über die App keine Checklistendaten von Kindern.",
                ],
            },
            {
                heading: "10. Komponenten und Dienste Dritter",
                paragraphs: [
                    "Die App nutzt Open-Source-Komponenten für Benachrichtigungen, Scannen, Foto- und Dateiauswahl sowie Teilen. Diese Funktionen verwenden lokale Verarbeitung und Systemdienste statt eines vom Entwickler betriebenen Backends.",
                    "Die App enthält keine SDKs für Werbung, Attribution, Analysen oder Absturzberichte.",
                    "Weitere Komponenten unterstützen Verschlüsselung, sichere Schlüsselspeicherung, biometrisches Entsperren, Diktieren und Widgets. Die Diktierfunktion nutzt den Sprachdienst deines Geräts, der wie in Abschnitt 5 beschrieben auch online verarbeiten kann.",
                ],
            },
            {
                heading: "11. Diese Website",
                paragraphs: [
                    "Diese Website stellt die App vor und bietet Zugang zur Webversion. Websiteaufrufe, freiwillige Zahlungen und gesendete Nachrichten sind von deinen lokal gespeicherten Checklistendaten getrennt.",
                ],
                points: [
                    "Hosting – die Website nutzt Cloudflare. Für Auslieferung und Sicherheit können IP-Adressen, Browserinformationen und angeforderte URLs verarbeitet werden. Das ist von App-Daten getrennt und bedeutet nicht, dass deine Checklisten hochgeladen werden.",
                    "Spracheinstellung – deine gewählte Sprache wird im Browser gespeichert und in der Seitenadresse berücksichtigt. Beim Seitenaufruf kann diese Adresse für den Hostinganbieter sichtbar sein.",
                    "Freiwillige Beiträge – Unterstützung ist optional. Zahlungen erfolgen über Stripe, Ko-fi, PayPal oder GitHub Sponsors nach deren eigenen Datenschutzbedingungen. Der Entwickler kann Transaktionsinformationen und vom Anbieter bereitgestellte Angaben zur unterstützenden Person erhalten, nicht aber deine vollständige Kartennummer aus dem Zahlungsformular.",
                    "App ausprobieren – die eingebettete Web-App speichert Checklistendaten wie oben beschrieben im Browser. Zum Laden der App ist eine Anfrage an ihren Hostingdienst nötig.",
                    "Externe Links und E-Mail – andere Websites haben eigene Datenschutzerklärungen. Wenn du dem Entwickler eine E-Mail sendest, erhält er deine Adresse und Nachricht, um deine Anfrage beantworten zu können.",
                ],
            },
            {
                heading: "12. Deine Rechte",
                paragraphs: [
                    "Je nach geltendem Recht kannst du Auskunft, Berichtigung, Löschung oder eine Kopie personenbezogener Daten verlangen, die Verarbeitung einschränken lassen, ihr widersprechen und dich bei einer Datenschutzbehörde beschweren. Diese Rechte können auch Website-, Zahlungs- oder E-Mail-Daten betreffen, nicht nur App-Inhalte.",
                    "Der Entwickler verkauft deine Checklistendaten nicht und verwendet sie nicht für Werbung. Auf Checklisten, die nur auf deinem Gerät liegen, kann er weder zugreifen noch sie löschen.",
                    "Für Datenschutzfragen oder Anfragen zu Daten, die dem Entwickler tatsächlich vorliegen, nutze die unten angegebene Kontaktadresse.",
                ],
            },
            {
                heading: "13. Änderungen dieser Erklärung",
                paragraphs: [
                    "Aktualisierungen werden auf dieser Seite mit einem neuen Datum veröffentlicht. Änderungen am Umgang der App mit Daten werden auch in den jeweiligen Versionshinweisen erläutert. Eine neue Fassung legitimiert keine frühere Datenerhebung rückwirkend.",
                ],
            },
        ],
        lastUpdated: "Zuletzt aktualisiert: 10. Oktober 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Letzten Freitag abgeschlossen",
            finishedTuesday: "Am Dienstag abgeschlossen",
            history: "Verlauf",
            inProgress: "In Bearbeitung",
            startedToday: "Heute gestartet",
            startSubtitle: "Wähle eine Vorlage und hake die Einträge nach und nach ab.",
            startTitle: "Checkliste starten",
        },
        common: {
            navChecklists: "Checklisten",
            navSchedule: "Zeitplan",
            navTemplates: "Vorlagen",
            templateCarryOn: "Handgepäck packen",
            templateGrocery: "Wocheneinkauf",
            templateHiking: "Wochenendwanderung",
            templatePreFlight: "Hauscheck vor dem Flug",
        },
        condition: {
            addRule: "Regel hinzufügen",
            and: "UND",
            headerItem: "Außenzelt",
            intro: "Dieser Eintrag ist nur erforderlich, wenn:",
            isChecked: "ist abgehakt",
            isNotChecked: "ist nicht abgehakt",
            requiredWhen: "Erforderlich, wenn",
            ruleLaptop: "Zelt",
            ruleTrip: "Übernachtung",
            save: "Speichern",
            summary: "Zelt ist abgehakt UND Übernachtung ist abgehakt",
            title: "Bedingung",
        },
        run: {
            conditional: "Bedingt",
            essentials: "Das Wichtigste",
            finish: "Abschließen",
            firstAidKit: "Erste-Hilfe-Set",
            headlamp: "Stirnlampe",
            optional: "Optional",
            rainCover: "Außenzelt",
            requiredLeftTwo: "Noch 2 erforderliche Einträge",
            requiredNow: "Jetzt erforderlich",
            subtitle: "3 von 5 erforderlichen Einträgen abgehakt",
            tent: "Zelt",
            trailMap: "Wanderkarte",
            trekkingPoles: "Wanderstöcke",
            waterBottle: "Trinkflasche ×2",
            doneHeading: "Erledigt (3)",
            filterAll: "Alle",
            filterOptional: "Optional",
            filterRemaining: "Offen",
        },
        schedule: {
            doesNotRepeat: "Keine Wiederholung",
            entry1Title: "Starten: Wochenendwanderung",
            entry1When: "Sa., 07:00 Uhr",
            entry2Title: "Abschließen: Wocheneinkauf",
            entry2When: "Heute, 18:00 Uhr",
            entry3Title: "Starten: Hauscheck vor dem Flug",
            entry3When: "28. Juli, 05:30 Uhr",
            finishReminderLabel: "Erinnerung zum Abschließen",
            newReminder: "Neue Erinnerung",
            repeatsWeekly: "Wöchentliche Wiederholung",
            startReminderLabel: "Erinnerung zum Starten",
            repeatsWeekdays: "Montag bis Freitag (Mo–Fr)",
        },
        templates: {
            allChip: "Alle",
            carryOnSummary: "15 Einträge · 10 erforderlich",
            grocerySummary: "9 Einträge · 9 erforderlich",
            hikingSummary: "12 Einträge · 8 erforderlich",
            newTemplate: "Neue Vorlage",
            preFlightSummary: "6 Einträge · 6 erforderlich",
            tagHome: "Zuhause",
            tagOutdoors: "Draußen",
            tagTravel: "Reisen",
        },
        backup: {
            badgeBody:
                "Ein verschlüsseltes Backup enthält Vorlagen, Checklisten, Notizen, Erinnerungen und Fotos, geschützt durch deine Passphrase. Der unverschlüsselte Export ist eine eigene Option.",
            badgeNote:
                "Kein Konto, keine Cloud-Synchronisierung. Du entscheidest, wo du das Backup speicherst oder teilst.",
            badgeTitle: "Das steckt im Backup",
            exportEncrypted: "Verschlüsseltes Backup exportieren",
            exportPlain: "Ohne Verschlüsselung exportieren",
            intro: "Deine Daten liegen hier auf diesem Gerät. Exportiere ein Backup als zusätzliche Kopie oder stelle ein zuvor gespeichertes Backup wieder her.",
            restore: "Aus Backup wiederherstellen",
            title: "Sichern und wiederherstellen",
        },
        start: {
            quickBody: "Ohne Vorlage. Ergänze Einträge und hake sie nach und nach ab.",
            quickTitle: "Schnelle Checkliste",
            title: "Checkliste starten",
            writeBody: "Schreibe oder füge die ganze Liste ein und beginne mit dem Abhaken.",
            writeTitle: "Checkliste schreiben",
        },
        stats: {
            finishedRuns: "Abgeschlossene Checklisten",
            inProgress: "In Bearbeitung",
            itemsChecked: "Abgehakte Einträge",
            missedHeading: "Am häufigsten nicht abgehakt",
            missedHelp: "Einträge, die beim Abschluss einer Checkliste nicht abgehakt waren.",
            missedItem1: "Wanderstöcke",
            missedItem1Count: "9-mal",
            missedItem2: "Stirnlampe",
            missedItem2Count: "6-mal",
            missedItem3: "Außenzelt",
            missedItem3Count: "2-mal",
            subtitle: "Auf diesem Gerät aus deinen gespeicherten Checklisten berechnet.",
            templates: "Vorlagen",
            title: "Statistik",
        },
    },
    siteShare: {
        copied: "Link kopiert",
        copyLink: "Link kopieren",
        error: "Das Teilen konnte nicht gestartet werden. Versuche es erneut oder kopiere den Link.",
        heading: "Diese Website teilen",
        manualCopy: "Diesen Link manuell kopieren",
        nativeShare: "Mit deinem Gerät teilen",
        selectLabel: "Soziales Netzwerk oder Freigabeoption",
        share: "Teilen",
    },
    siteShareRoller: { hint: "Zum Drehen ziehen oder ← → drücken. Zum Teilen auf ein Symbol klicken." },
    tryApp: {
        back: "Zurück zur Übersicht",
        dismissNotice: "Schließen",
        iframeTitle: "NeuraTiM Checklist – App zum Ausprobieren",
        intro: "Das ist die funktionsfähige Web-App, kein Vorschaubild. Probiere sie aus; deine Checklisten werden in diesem Browser gespeichert.",
        loading: "App wird geladen …",
    },
    insights: {
        eyebrow: "Statistik",
        heading: "Dein Fortschritt. Nur für dich.",
        intro: "Die Statistik wird auf deinem Gerät aus gespeicherten Checklisten berechnet, nicht durch die Aufzeichnung deiner Aktivitäten. Löschst du eine Checkliste, werden ihre Daten nicht mehr berücksichtigt. Es bleibt kein separater Analysedatensatz zurück.",
        points: [
            {
                title: "Was bleibt bei dir oft offen?",
                body: "Sieh dir an, welche Einträge beim Abschluss am häufigsten nicht abgehakt sind. Ein optionaler Eintrag, den du immer überspringst, gehört vielleicht gar nicht auf die Liste. Aktuell erforderliche Einträge musst du vor dem Abschluss abhaken.",
            },
            {
                title: "Der Gesamtüberblick",
                body: "Sieh, wie viele Vorlagen du hast, wie viele Checklisten abgeschlossen oder noch in Bearbeitung sind und wie viele Einträge du insgesamt abgehakt hast.",
            },
            {
                title: "Zahlen ohne Tracking",
                body: "Kein Analyse-SDK, kein Dienst für Absturzberichte und keine Nutzungsberichte an den Entwickler. Deine Checklistenstatistik bleibt auf deinem Gerät.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Erste Schritte",
        heading: "Weniger tippen. Mehr erledigen.",
        intro: "Starte mit einer fertigen Vorlage, füge eine Liste ein oder erstelle eine schnelle Checkliste. Wähle, was zu dir passt – du musst nicht alles Eintrag für Eintrag aufbauen.",
        points: [
            {
                title: "Mach eine fertige Vorlage zu deiner",
                body: "Wähle aus Wandern, Wochenendausflug, Lebensmitteleinkauf, Sporttasche oder Das Haus verlassen. Eine Kopie landet in deinen Vorlagen. Benenne sie um und entferne, was du nicht brauchst.",
            },
            {
                title: "Die ganze Liste auf einmal schreiben",
                body: "Die erste Zeile ist der Name der Checkliste, jede weitere ein Eintrag. Hänge die unveränderte Markierung [optional] an eine Zeile an, um den Eintrag optional zu machen. Füge eine vorhandene Liste ein und leg los.",
            },
            {
                title: "In eine bestehende Liste einfügen",
                body: "Aufzählungszeichen und Nummerierungen werden automatisch entfernt. Beginnt eine Zeile mit 2x, wird die Menge auf zwei gesetzt. So wird aus einer Seite Notizen in einem Schritt eine Liste einzelner Einträge.",
            },
            {
                title: "Oder mit einer schnellen Checkliste starten",
                body: "Keine Vorlage nötig. Ergänze Einträge nach und nach, diktiere Namen auf unterstützten Geräten oder verwende Barcodes mit gespeicherten Namen. Vorschläge stammen aus Eintragsnamen, die bereits auf deinem Gerät liegen.",
            },
        ],
    },
    security: {
        eyebrow: "Sicherheit",
        heading: "Behalte im Blick, was du teilst. Entscheide, wie es geschützt wird.",
        intro: "Vor dem Exportieren oder Teilen erklärt die App, was enthalten ist und ob es verschlüsselt wird. Backups können Fotos enthalten, geteilte Vorlagen und Checklisten nicht.",
        note: "Die App-Sperre kontrolliert den Zugang zur App. Die Speicherverschlüsselung schützt gespeicherte Dateien. Das sind getrennte Einstellungen für unterschiedliche Zwecke.",
        points: [
            {
                title: "Backups mit deiner Passphrase schützen",
                body: "Argon2id leitet den Schlüssel ab, AES-GCM verschlüsselt das Backup – alles auf deinem Gerät. Wähle eine starke Passphrase und bewahre sie sicher auf: Der Entwickler kann sie nicht für dich wiederherstellen.",
            },
            {
                title: "Unverschlüsselter Export nur auf Wunsch",
                body: "Du brauchst eine unverschlüsselte Datei? Nutze die separate, klar gekennzeichnete Exportoption und bestätige sie vor dem Speichern. Wer Zugriff auf die Datei hat, kann ihren Inhalt lesen.",
            },
            {
                title: "Mit deinem Gerät entsperren",
                body: "Öffne die App mit deinem Fingerabdruck, per Gesichtserkennung oder mit deinem Gerätecode. Das Betriebssystem übernimmt die Authentifizierung; die App erhält niemals deine Fingerabdruck- oder Gesichtsdaten.",
            },
            {
                title: "Verschlüsselter Speicher auf Android und iOS",
                body: "Verschlüssele gespeicherte Checklisten, Notizen und Fotos bei Bedarf. Das Schlüsselmaterial wird mit Android Keystore oder iOS Keychain geschützt.",
            },
        ],
    },
};

export default de;
