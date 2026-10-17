import type { Dictionary } from "../../types/dictionary";

const en: Dictionary = {
    conditionalItems: {
        eyebrow: "Conditional items",
        heading: "Some things are only essential sometimes.",
        intro: "Taking your laptop? You'll need the charger. Leaving it at home? Leave the charger too. Set an item to Conditional and it becomes required only when your rules are met. One template, ready for different plans.",
        points: [
            {
                title: "Rules in plain language",
                body: "Choose an item and whether it must be checked or unchecked. The app displays the full condition as a sentence so you can see exactly when it applies.",
            },
            {
                title: "AND, OR, and brackets",
                body: "Combine rules with AND or OR, and use brackets to group them. For example: require the charger when Laptop is checked AND at least one of Overnight trip or Work trip is checked.",
            },
            {
                title: "Updates as you check things off",
                body: "When a condition is met, its item becomes required and counts toward completion. When the condition no longer applies, the item stops being required. Finish is available only when all currently required items are checked.",
            },
        ],
    },
    features: {
        eyebrow: "Features",
        heading: "Everything you need in a checklist. Nothing in the way.",
        items: [
            {
                title: "Reusable templates",
                body: "Add photos, notes, tags, and required, optional, or conditional items. Create a template once, then start a fresh checklist whenever you need it.",
            },
            {
                title: "In progress and history",
                body: "Leave a checklist unfinished and pick it up later. It stays in progress until you finish or delete it. Finished checklists move to history.",
            },
            {
                title: "Flexible reminders",
                body: "Get a reminder to start a checklist or finish one in progress. Repeat daily, weekly, monthly, on weekdays, on selected days, or at intervals of days or weeks—or set a one-off reminder.",
            },
            {
                title: "Works offline",
                body: "Create and use checklists without an internet connection. Templates, checklists, and reminders are stored on your device, with no account or cloud sync.",
            },
            {
                title: "Search and tags",
                body: "Filter templates by tag and find checklists by name. Less scrolling, even as your collection grows.",
            },
            {
                title: "iOS · Android · Web",
                body: "A clear, familiar checklist experience on your phone, tablet, or in your browser. Feature availability may vary by platform.",
            },
            {
                title: "Conditional items",
                body: "Make an item required only when it matters: the charger, for example, when you're taking the laptop. Combine rules with AND and OR; they update as you check things off.",
            },
            {
                title: "Room for the details",
                body: "Give each item multiple photos, a description, a quantity and your own unit, such as 2 kg or 3 packs. Organize items into sections, and drag to reorder items or whole sections.",
            },
            {
                title: "Long lists, less clutter",
                body: "Group checked items under Done or hide them altogether. Filter by Remaining or Optional to focus on what you need next.",
            },
            {
                title: "Edit several items at once",
                body: "Select multiple items to move them to another section, mark them as required or optional, or delete them together.",
            },
            {
                title: "Progress at a glance",
                body: "On supported devices, a persistent notification and a home-screen widget can show your progress. Launcher shortcuts give you quick access to your four most recently used templates.",
            },
            {
                title: "Share your way",
                body: "Send a QR code or .ntchk file to someone with the app, or plain text to anyone else. Shared checklists and templates do not include photos.",
            },
            {
                title: "Encrypted backups",
                body: "Back up your data, including photos, in one file protected by a passphrase you choose. Encryption uses Argon2id and AES-GCM on your device.",
            },
            {
                title: "App lock and encryption",
                body: "Unlock the app with your fingerprint, face recognition, or your device's passcode. On Android and iOS, you can also encrypt its stored data.",
            },
            {
                title: "History on your terms",
                body: "Keep finished checklists indefinitely, or for one month, three months, or one year. Older checklists are removed the next time you open the app.",
            },
        ],
    },
    footer: {
        contact: "Contact",
        mainSite: "NeuraTiM",
        privacyPolicy: "Privacy policy",
        tagline: "Independently built. {year} · No app account, no tracking.",
    },
    freeSupport: {
        eyebrow: "Free, with your support",
        githubSponsorsNote: "Requires a GitHub account",
        heading: "100% free. No catch.",
        intro: "Every feature is free. Tips are welcome, never required.",
        notHere: ["No ads", "No subscription", "No in-app purchases", "No premium tier"],
        pledge: {
            body: "If these apps are useful to you, please consider donating. One dollar a month from everyone who uses them would be enough to keep the project alive — and you could go on using every NeuraTiM app for free with a clear conscience, knowing that your share pays to keep them up to date and funds what comes next.",
            heading: "One dollar a month is enough",
        },
        quickTip: {
            amountLabel: "Choose an amount",
            backButton: "Back",
            cancelNote:
                "Cancel any time — one email is enough, and it stops before the next month is charged.",
            customAmountLabel: "Custom amount (USD)",
            emailLabel: "Email for the receipt",
            errorAmount: "Enter an amount from 1 to 500 USD.",
            errorEmail: "Enter a valid email address.",
            errorGeneric: "Something went wrong. Please try again.",
            heading: "Leave a tip",
            monthlyPayButton: "Donate {amount} a month",
            monthlySuccessBody:
                "Your monthly donation is set up and the first one has gone through. Thank you for keeping these apps free.",
            payButton: "Pay {amount}",
            poweredBy:
                "Payments are handled by Stripe. Pay by card, or with Apple Pay or Google Pay where available. No NeuraTiM account needed.",
            processingButton: "Processing…",
            successBody: "Your tip has arrived. Thank you for helping keep the app free!",
            successHeading: "Thank you!",
            tabMonthly: "Monthly",
            tabOneOff: "One-off",
        },
        supportBody:
            "Free to use doesn't mean free to maintain. I cover development and hosting, and App Store distribution requires an Apple Developer Program membership, normally 99 USD a year. A small tip helps support this independent project—never required, always appreciated.",
        tipCta: "Send a tip",
        tipEmailLead: "Questions about supporting the app? Email me.",
        tipEmailSubject: "Tip",
        waysToTip: "Other ways to support the project:",
    },
    getApp: {
        eyebrow: "Get the app",
        heading: "Your checklists, on your platform.",
        intro: "Choose the web, Android, or iOS version. Release builds are generated from the source code.",
        platforms: {
            android: {
                detail: "Get the free Android version. Follow the download or testing instructions for the current release.",
                cta: "Get the Android version",
            },
            ios: {
                detail: "Available free for iPhone and iPad on the App Store.",
                cta: "Get the iOS version",
            },
            web: {
                detail: "Open the app in a modern browser. Nothing to install.",
                cta: "Try the app",
            },
        },
    },
    hero: {
        badges: ["No ads", "No account", "No tracking", "iOS · Android · Web"],
        ctaPrimary: "Try the app",
        ctaSecondary: "See how it works",
        headingHighlight: "everything you need.",
        headingLead: "Head out with",
        subhead:
            "Make a checklist for packing, chores, or the trip ahead, then reuse it whenever you need it. Free to use, with offline checklists and no account to create.",
    },
    howItWorks: {
        eyebrow: "How it works",
        heading: "Three simple steps. Ready when you are.",
        intro: "Create a template, work through your checklist, and add a reminder when it's useful. No complicated setup between you and getting things done.",
        steps: [
            {
                eyebrow: "Step 1",
                title: "Create a template",
                body: "Add item names, optional photos, and set each item as required, optional, or conditional. Reuse your template, change the order, make a copy, or archive it when you no longer need it.",
            },
            {
                eyebrow: "Step 2",
                title: "Check before you go",
                body: "See each item's name, photo, and checkbox. You can finish once all required items are checked. Optional items never block completion; conditional items only do when their rules are met.",
            },
            {
                eyebrow: "Step 3",
                title: "Let the app remind you",
                body: "Set a reminder to start a checklist or finish one in progress. Choose a one-off reminder or repeat it daily, weekly, monthly, on weekdays, on selected days, or every few days or weeks.",
            },
        ],
    },
    insights: {
        eyebrow: "Statistics",
        heading: "Your progress, for your eyes.",
        intro: "Statistics are calculated on your device from your saved checklists, not from tracking your activity. Delete a checklist and its data is no longer included. No separate analytics record is kept.",
        points: [
            {
                title: "See what you tend to skip",
                body: "See which items are most often left unchecked when you finish. An optional item you always skip might not belong on your list. Currently required items must be checked before you can finish.",
            },
            {
                title: "The bigger picture",
                body: "See how many templates you have, how many checklists are finished or still in progress, and how many items you've checked off in total.",
            },
            {
                title: "No tracking behind the numbers",
                body: "No analytics SDK, crash-reporting service, or usage reports sent to the developer. Your checklist statistics stay on your device.",
            },
        ],
    },
    languageSwitcher: {
        label: "Language",
    },
    nav: {
        closeMenu: "Close menu",
        features: "Features",
        free: "Free, with your support",
        getApp: "Get the app",
        howItWorks: "How it works",
        label: "On this page",
        more: "More sections",
        openMenu: "Open menu",
        privacy: "Privacy",
        privacyPolicy: "Privacy policy",
        security: "Security",
        tryIt: "Try the app",
    },
    privacy: {
        badgeBody:
            "Your checklists are stored on the device or in the browser where you create them. You choose whether to export or share them.",
        badgeTitle: "Stored on your device",
        eyebrow: "Privacy",
        heading: "Your checklists stay yours.",
        intro: "No app account, no cloud sync, no tracking. Your templates, checklists, and reminders are stored locally, not on the developer's servers.",
        points: [
            "No account or sign-in",
            "No analytics, trackers, or advertising SDKs in the app",
            "Your checklists are not stored on the developer's servers",
            "Photos are stored locally and excluded from shares; backups include them",
            "Backups are encrypted by default with a passphrase you choose",
            "Statistics are calculated on your device from your checklists",
        ],
        policyLink: "Read the full privacy policy",
    },
    privacyPolicy: {
        back: "Back to overview",
        contactHeading: "Contact",
        contactIntro: "For questions about this policy or privacy in NeuraTiM Checklist, write to:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist stores your checklist data on your device. There is no app account, cloud sync, or analytics service. This policy explains local storage, sharing and exports you initiate, optional device services, and the separate handling of data on this website.",
        lastUpdated: "Last updated: October 10, 2026",
        title: "Privacy policy",
        sections: [
            {
                heading: "1. What this policy covers",
                paragraphs: [
                    "This policy covers NeuraTiM Checklist on Android, iOS, and the web, and this website. NeuraTiM is the independent developer and the controller responsible for personal data processed in connection with this website or direct contact.",
                    "The app is free, contains no ads, and has no paid tier.",
                ],
            },
            {
                heading: "2. Checklist data and optional feedback",
                paragraphs: [
                    "Core checklists work offline with no account or analytics. Optional feedback needs internet; dictation may use online speech processing.",
                ],
                points: [
                    "Names, email addresses, phone numbers, or account details for registration—there is no sign-in",
                    "Advertising identifiers, device identifiers, or user IDs for tracking",
                    "Your precise or approximate location",
                    "Contacts, calendars, call logs, text messages, or lists of installed apps",
                    "Usage analytics, diagnostics, or crash reports sent to the developer; checklist statistics are calculated locally",
                    "Payment or financial information in the app; optional website tips are covered separately below",
                ],
            },
            {
                heading: "3. Data stored on your device",
                paragraphs: ["The app stores the following locally so you can use your checklists offline:"],
                points: [
                    "Templates, sections, tags, and items, including names, quantities, descriptions, required or optional status, and conditional rules",
                    "Checklists in progress and finished checklists in history, including checked items and notes",
                    "Photos you attach to items",
                    "Your scheduled reminders and their text",
                    "Settings such as language and light or dark theme",
                    "Scanned barcodes and the names you assign to them; the app does not look them up in an online product database",
                    "History retention settings, app lock settings, and on-device encryption settings",
                ],
            },
            {
                heading: "4. Where your data is stored",
                paragraphs: [
                    "On Android and iOS, data is stored in the app's private storage, protected by the operating system's app isolation.",
                    "In the web version, data is stored in your browser for the app's site. Clearing that site's data removes the local copy.",
                    "The app does not provide cloud backup or sync. Copies you export or share, and any backups managed by your device or browser, are outside this local storage.",
                ],
            },
            {
                heading: "5. Permissions and device services",
                paragraphs: [
                    "Permissions are used for the features that need them. You can manage available permissions in your device settings; declining one may prevent the related feature from working.",
                ],
                points: [
                    "Camera—used when you scan a QR code or barcode, or take an item photo. Scanning is processed on the device without keeping camera frames. Photos you take for items are saved in the app's local storage.",
                    "Photos or photo library—used to attach a picture you select. The selected picture is copied into the app's storage; the app does not upload or index your photo library.",
                    "Notifications—used for your scheduled reminders and, where supported, ongoing progress. These notifications are created locally, without a remote push service.",
                    "Exact alarms (Android)—used to schedule reminders at the time you choose. Delivery can still depend on system settings and restrictions.",
                    "Run at startup (Android)—used to reschedule reminders after your device restarts.",
                    "Files—used to save exports and open backup or share files you select.",
                    "Microphone—used when you dictate an item's name. The device's speech service returns text to the app, which does not keep an audio recording. Depending on your device and settings, the speech service may process audio online under its own privacy terms.",
                    "Biometrics or device passcode—used when you enable the app lock. The operating system performs the check; the app receives the result, not your fingerprint or face data.",
                ],
            },
            {
                heading: "6. Sharing, exports, and external processing",
                paragraphs: [
                    "The app does not automatically upload your checklists to the developer. You decide whether to share or export them. Optional dictation uses your device's speech service as described above.",
                ],
                points: [
                    "Sharing creates a QR code, .ntchk file, or plain text for you to pass on through a channel you choose. Shared templates and checklists exclude photos and are not encrypted by the app.",
                    "Exporting a backup saves a file to your chosen location or opens your device's share menu. Backups include photos. The protection of the destination depends on the service you choose.",
                    "Importing reads a file or code you supply; it does not search online for checklist content. A file provider you use may download the selected file.",
                    "Your message, optional email, app version, platform and language are sent to the developer. Checklists and photos are not sent.",
                ],
            },
            {
                heading: "7. Keeping and deleting your data",
                paragraphs: [
                    "The developer has no server-side copy of your locally stored checklists. You can manage that data in the app. Copies you previously exported, shared, or backed up must be deleted separately:",
                ],
                points: [
                    "Delete individual items, checklists, or templates in the app",
                    "Use Clear history to remove finished checklists",
                    "Clear the app's local storage through your device settings, where available, or remove the app and its data; this does not delete external backups or exported files",
                    "In the web version, clear the app's site data in your browser",
                    "Keep finished checklists for one month, three months, or one year; older checklists are deleted the next time you open the app",
                ],
            },
            {
                heading: "8. Security",
                paragraphs: [
                    "Local data benefits from your operating system's security protections. Your device's screen lock and storage encryption provide additional protection when enabled.",
                    "There is no central checklist database on the developer's servers. This reduces exposure but does not make your device or exported files immune to unauthorized access.",
                    "Backups are encrypted by default using a passphrase you choose, Argon2id key derivation, and AES-GCM encryption on your device. You can also enable an app lock. On Android and iOS, optional storage encryption protects local data with key material secured through Android Keystore or iOS Keychain.",
                    "Unencrypted export is a separate, labelled action that requires confirmation. Anyone with access to that file can read it. Shared files, QR codes, and plain text are also unencrypted by the app and exclude photos. Share them only through channels you trust.",
                ],
            },
            {
                heading: "9. Children",
                paragraphs: [
                    "The app is not intended for children under 13, or the applicable minimum age in their country. The developer does not collect children's checklist data through the app.",
                ],
            },
            {
                heading: "10. Third-party components and services",
                paragraphs: [
                    "The app uses open-source components for notifications, scanning, photo and file selection, and sharing. These features use local processing and system services rather than a developer-operated backend.",
                    "The app includes no advertising, attribution, analytics, or crash-reporting SDKs.",
                    "Other components support encryption, secure key storage, biometric unlocking, dictation, and widgets. Dictation relies on your device's speech service, which may use online processing as explained in section 5.",
                ],
            },
            {
                heading: "11. This website",
                paragraphs: [
                    "This website introduces the app and provides access to the web version. Website requests, optional payments, and messages you send are separate from your locally stored checklist data.",
                ],
                points: [
                    "Hosting—the site uses Cloudflare, which may process IP addresses, browser information, and requested URLs for delivery and security. This is separate from app data and does not mean your checklists are uploaded.",
                    "Language preference—your chosen language is saved in browser storage and reflected in the page address. The address may be visible to the hosting provider when you request a page.",
                    "Tips—support is optional. Payments use Stripe, Ko-fi, PayPal, or GitHub Sponsors under their own privacy terms. The developer may receive transaction information and any donor details the provider makes available, but not your full card number through the payment form.",
                    "Try the app—the embedded web app stores checklist data in your browser as described above. Loading the app requires a request to its hosting service.",
                    "External links and email—other sites have their own privacy policies. If you email the developer, your address and message are received so your enquiry can be answered.",
                ],
            },
            {
                heading: "12. Your rights",
                paragraphs: [
                    "Depending on the law that applies, you may have rights to access, correct, delete, or receive a copy of personal data, restrict or object to processing, and complain to a data protection authority. These rights can also apply to website, payment, or email data—not just app content.",
                    "The developer does not sell your checklist data or use it for advertising. The developer cannot access or delete checklists stored only on your device.",
                    "For privacy questions or requests relating to data the developer does hold, use the contact address below.",
                ],
            },
            {
                heading: "13. Changes to this policy",
                paragraphs: [
                    "Updates will be published on this page with a revised date. Changes to how the app handles data will also be explained in the relevant release notes. A revised policy does not retroactively authorize earlier data collection.",
                ],
            },
        ],
    },
    quickStart: {
        eyebrow: "Getting started",
        heading: "Less typing. More getting things done.",
        intro: "Start with a ready-made template, paste a list, or create a quick checklist. Choose the approach that suits you—there's no need to build everything item by item.",
        points: [
            {
                title: "Make a ready-made template your own",
                body: "Choose from Hiking, Weekend away, Groceries, Gym bag, or Leaving the house. A copy is added to your templates so you can rename it and remove anything you don't need.",
            },
            {
                title: "Write the whole list at once",
                body: "Use the first line for the checklist name and each following line for an item. Add the literal marker [optional] at the end of a line to make that item optional. Paste an existing list and get started.",
            },
            {
                title: "Paste into an existing list",
                body: "Bullets and numbering are removed automatically. Start a line with 2x to set the quantity to two. Turn a page of notes into individual items in one go.",
            },
            {
                title: "Or start with a quick checklist",
                body: "No template needed. Add items as you go, dictate names on supported devices, or use barcodes with names you've saved. Suggestions come from item names already stored on your device.",
            },
        ],
    },
    screens: {
        backup: {
            badgeBody:
                "An encrypted backup includes templates, checklists, notes, reminders, and photos, protected by your passphrase. Unencrypted export is a separate option.",
            badgeNote: "No account, no cloud sync. You choose where to save or share the backup.",
            badgeTitle: "What's in the backup",
            exportEncrypted: "Export encrypted backup",
            exportPlain: "Export without encryption",
            intro: "Your data is stored here on this device. Export a backup to keep a separate copy, or restore one you saved earlier.",
            restore: "Restore from backup",
            title: "Backup and restore",
        },
        checklists: {
            finishedFriday: "Finished last Friday",
            finishedTuesday: "Finished Tuesday",
            history: "History",
            inProgress: "In progress",
            startedToday: "Started today",
            startSubtitle: "Choose a template and check off items as you go.",
            startTitle: "Start a checklist",
        },
        common: {
            navChecklists: "Checklists",
            navSchedule: "Schedule",
            navTemplates: "Templates",
            templateCarryOn: "Carry-on Packing",
            templateGrocery: "Weekly Grocery Run",
            templateHiking: "Weekend Hiking Trip",
            templatePreFlight: "Home Check Before a Flight",
        },
        condition: {
            addRule: "Add rule",
            and: "AND",
            headerItem: "Tent rainfly",
            intro: "This item is required only when:",
            isChecked: "is checked",
            isNotChecked: "is not checked",
            requiredWhen: "Required when",
            ruleLaptop: "Tent",
            ruleTrip: "Overnight trip",
            save: "Save",
            summary: "Tent is checked AND Overnight trip is checked",
            title: "Condition",
        },
        run: {
            conditional: "Conditional",
            doneHeading: "Done (3)",
            essentials: "Essentials",
            filterAll: "All",
            filterOptional: "Optional",
            filterRemaining: "Remaining",
            finish: "Finish",
            firstAidKit: "First-aid kit",
            headlamp: "Headlamp",
            optional: "Optional",
            rainCover: "Tent rainfly",
            requiredLeftTwo: "2 required items left",
            requiredNow: "Required now",
            subtitle: "3 of 5 required items checked",
            tent: "Tent",
            trailMap: "Trail map",
            trekkingPoles: "Trekking poles",
            waterBottle: "Water bottle ×2",
        },
        schedule: {
            doesNotRepeat: "Does not repeat",
            entry1Title: "Start: Weekend Hiking Trip",
            entry1When: "Sat, 7:00 AM",
            entry2Title: "Finish: Weekly Grocery Run",
            entry2When: "Today, 6:00 PM",
            entry3Title: "Start: Home Check Before a Flight",
            entry3When: "Jul 28, 5:30 AM",
            finishReminderLabel: "Reminder to finish",
            newReminder: "New reminder",
            repeatsWeekdays: "Every weekday (Mon–Fri)",
            repeatsWeekly: "Repeats weekly",
            startReminderLabel: "Reminder to start",
        },
        start: {
            quickBody: "No template needed. Add items and check them off as you go.",
            quickTitle: "Quick checklist",
            title: "Start a checklist",
            writeBody: "Type or paste the whole list, then start checking items off.",
            writeTitle: "Write a checklist",
        },
        stats: {
            finishedRuns: "Finished checklists",
            inProgress: "In progress",
            itemsChecked: "Items checked off",
            missedHeading: "Most often left unchecked",
            missedHelp: "Items left unchecked when a checklist was finished.",
            missedItem1: "Trekking poles",
            missedItem1Count: "9 times",
            missedItem2: "Headlamp",
            missedItem2Count: "6 times",
            missedItem3: "Tent rainfly",
            missedItem3Count: "2 times",
            subtitle: "Calculated on this device from your saved checklists.",
            templates: "Templates",
            title: "Statistics",
        },
        templates: {
            allChip: "All",
            carryOnSummary: "15 items · 10 required",
            grocerySummary: "9 items · 9 required",
            hikingSummary: "12 items · 8 required",
            newTemplate: "New template",
            preFlightSummary: "6 items · 6 required",
            tagHome: "Home",
            tagOutdoors: "Outdoors",
            tagTravel: "Travel",
        },
    },
    security: {
        eyebrow: "Security",
        heading: "Know what you're sharing. Choose how it's protected.",
        intro: "Before you export or share, the app explains what's included and whether it's encrypted. Backups can include photos; shared templates and checklists do not.",
        note: "The app lock controls access to the app. Storage encryption protects the saved files. They are separate settings with different purposes.",
        points: [
            {
                title: "Backups protected by your passphrase",
                body: "Argon2id derives the key and AES-GCM encrypts the backup, all on your device. Choose a strong passphrase and keep it safe: the developer cannot recover it for you.",
            },
            {
                title: "Unencrypted export, only by choice",
                body: "Need an unencrypted file? Use the separate, clearly labelled export option and confirm before saving. Anyone with access to that file can read its contents.",
            },
            {
                title: "Unlock with your device",
                body: "Open the app with your fingerprint, face recognition, or your device's passcode. The operating system handles authentication; the app never receives your fingerprint or face data.",
            },
            {
                title: "Encrypted storage on Android and iOS",
                body: "Optionally encrypt saved checklists, notes, and photos. Key material is protected using Android Keystore or iOS Keychain.",
            },
        ],
    },
    siteShare: {
        copied: "Link copied",
        copyLink: "Copy link",
        error: "Sharing could not start. Try again or copy the link.",
        heading: "Share this site",
        manualCopy: "Copy this link manually",
        nativeShare: "Share with your device",
        selectLabel: "Social network or sharing option",
        share: "Share",
    },
    siteShareRoller: { hint: "Drag or use ← → to rotate. Click an icon to share." },
    tryApp: {
        back: "Back to overview",
        dismissNotice: "Dismiss",
        iframeTitle: "NeuraTiM Checklist — live app",
        intro: "This is the working web app, not a demo image. Give it a try; your checklists are saved in this browser.",
        loading: "Loading the app…",
    },
};

export default en;
