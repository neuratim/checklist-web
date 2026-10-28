import type { LocaleDictionary } from "../../types/dictionary";

const fr: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Éléments conditionnels",
        heading: "Certaines choses ne sont indispensables que parfois.",
        intro: "Vous emportez votre ordinateur portable ? Pensez au chargeur. Vous le laissez à la maison ? Le chargeur peut y rester aussi. Définissez un élément comme conditionnel : il ne devient obligatoire que lorsque vos règles sont remplies. Un seul modèle pour différents projets.",
        points: [
            {
                title: "Des règles en toutes lettres",
                body: "Choisissez un élément et indiquez s'il doit être coché ou non. L'application affiche la condition complète sous forme de phrase pour que vous sachiez exactement quand elle s'applique.",
            },
            {
                title: "ET, OU et parenthèses",
                body: "Combinez les règles avec ET ou OU et regroupez-les avec des parenthèses. Par exemple : le chargeur est obligatoire si l'élément « Ordinateur portable » est coché ET si au moins l'un des éléments « Nuit sur place » ou « Déplacement professionnel » est coché.",
            },
            {
                title: "Des conditions mises à jour en temps réel",
                body: "Dès qu'une condition est remplie, son élément devient obligatoire et compte pour terminer la liste. Si la condition ne s'applique plus, l'élément cesse d'être obligatoire. Vous ne pouvez terminer qu'après avoir coché tous les éléments actuellement obligatoires.",
            },
        ],
    },
    features: {
        eyebrow: "Fonctionnalités",
        heading: "Tout pour vos listes. Rien pour vous compliquer la vie.",
        items: [
            {
                title: "Des modèles réutilisables",
                body: "Ajoutez des photos, des notes, des étiquettes et des éléments obligatoires, facultatifs ou conditionnels. Créez un modèle une fois, puis démarrez une nouvelle liste chaque fois que nécessaire.",
            },
            {
                title: "Listes en cours et historique",
                body: "Laissez une liste inachevée et reprenez-la plus tard. Elle reste en cours jusqu'à ce que vous la terminiez ou la supprimiez. Les listes terminées rejoignent l'historique.",
            },
            {
                title: "Des rappels à votre rythme",
                body: "Recevez un rappel pour commencer une liste ou en terminer une en cours. Une seule fois, chaque jour, semaine ou mois, du lundi au vendredi, certains jours ou à intervalles de plusieurs jours ou semaines.",
            },
            {
                title: "Fonctionne hors connexion",
                body: "Créez et utilisez vos listes sans connexion internet. Modèles, listes et rappels sont enregistrés sur votre appareil, sans compte ni synchronisation dans le cloud.",
            },
            {
                title: "Recherche et étiquettes",
                body: "Filtrez les modèles par étiquette et retrouvez les listes par leur nom. Moins de défilement, même quand votre collection s'agrandit.",
            },
            {
                title: "iOS · Android · Web",
                body: "Une interface claire et familière sur votre téléphone, votre tablette ou dans votre navigateur. Certaines fonctionnalités peuvent varier selon la plateforme.",
            },
            {
                title: "Éléments conditionnels",
                body: "Un élément ne devient obligatoire que lorsqu'il est utile : le chargeur, par exemple, si vous emportez l'ordinateur. Combinez les règles avec ET et OU : elles sont réévaluées quand vous cochez ou décochez un élément.",
            },
            {
                title: "De la place pour les détails",
                body: "Ajoutez à chaque élément plusieurs photos, une description et une quantité avec l'unité de votre choix, comme 2 kg ou 3 paquets. Organisez vos éléments en sections et faites-les glisser pour les réordonner, seuls ou par sections entières.",
            },
            {
                title: "Des listes longues, mais lisibles",
                body: "Regroupez les éléments cochés sous Fait ou masquez-les complètement. Les filtres Restants et Facultatifs vous aident à vous concentrer sur la suite.",
            },
            {
                title: "Modifiez plusieurs éléments à la fois",
                body: "Sélectionnez plusieurs éléments pour les déplacer dans une autre section, les rendre obligatoires ou facultatifs, ou les supprimer ensemble.",
            },
            {
                title: "Votre progression en un coup d'œil",
                body: "Sur les appareils compatibles, une notification persistante et un widget sur l'écran d'accueil peuvent afficher votre progression. Les raccourcis de l'application donnent accès aux quatre derniers modèles utilisés.",
            },
            {
                title: "Partagez à votre façon",
                body: "Envoyez un code QR ou un fichier .ntchk à une personne qui possède l'application, ou du texte brut aux autres. Les listes et modèles partagés ne contiennent pas de photos.",
            },
            {
                title: "Des sauvegardes chiffrées",
                body: "Sauvegardez vos données, photos comprises, dans un fichier protégé par la phrase secrète de votre choix. Le chiffrement utilise Argon2id et AES-GCM sur votre appareil.",
            },
            {
                title: "Verrouillage de l'application",
                body: "Déverrouillez l'application avec votre empreinte digitale, la reconnaissance faciale ou le code de verrouillage de votre appareil. La vérification est assurée par le système d'exploitation.",
            },
            {
                title: "Votre historique, vos règles",
                body: "Conservez les listes terminées sans limite, pendant un mois, trois mois ou un an. Les plus anciennes sont supprimées à la prochaine ouverture de l'application.",
            },
        ],
    },
    footer: {
        contact: "Contact",
        mainSite: "NeuraTiM",
        privacyPolicy: "Politique de confidentialité",
        tagline: "Un projet indépendant. {year} · Sans compte dans l'application, sans suivi.",
    },
    freeSupport: {
        eyebrow: "Gratuite, avec votre soutien",
        githubSponsorsNote: "Nécessite un compte GitHub",
        heading: "100 % gratuite. Sans mauvaise surprise.",
        intro: "Toutes les fonctionnalités sont gratuites. Votre soutien est apprécié, jamais obligatoire.",
        notHere: ["Sans publicité", "Sans abonnement", "Sans achats intégrés", "Sans version premium"],
        pledge: {
            body: "Si ces applications vous sont utiles, envisagez un don. Si chaque personne qui les utilise envoyait un euro par mois, le projet survivrait sans peine — et vous pourriez continuer à utiliser toutes les applications NeuraTiM gratuitement et la conscience tranquille, en sachant que votre part paie leur mise à jour et finance la suite.",
            heading: "Un euro par mois suffit",
        },
        quickTip: {
            amountLabel: "Choisir un montant",
            backButton: "Retour",
            cancelNote:
                "Annulable à tout moment : un e-mail suffit, et le don s'arrête avant le prélèvement du mois suivant.",
            customAmountLabel: "Autre montant (EUR)",
            emailLabel: "E-mail pour le reçu",
            errorAmount: "Saisissez un montant compris entre 1 et 500 EUR.",
            errorEmail: "Saisissez une adresse e-mail valide.",
            errorGeneric: "Un problème est survenu. Veuillez réessayer.",
            heading: "Soutenir le projet",
            monthlyPayButton: "Donner {amount} par mois",
            monthlySuccessBody:
                "Votre don mensuel est en place et le premier prélèvement est passé. Merci de garder ces applications gratuites.",
            payButton: "Payer {amount}",
            poweredBy:
                "Les paiements sont traités par Stripe. Payez par carte ou, lorsque ces services sont disponibles, avec Apple Pay ou Google Pay. Aucun compte NeuraTiM n'est nécessaire.",
            processingButton: "Traitement en cours…",
            successBody:
                "Votre contribution est bien arrivée. Merci d'aider l'application à rester gratuite !",
            successHeading: "Merci !",
            tabMonthly: "Mensuel",
            tabOneOff: "Une fois",
        },
        supportBody:
            "L'application est gratuite, mais son entretien a un coût. Je prends en charge le développement et l'hébergement. La distribution sur l'App Store nécessite une adhésion à l'Apple Developer Program, généralement à 99 USD par an. Une petite contribution aide ce projet indépendant : elle n'est jamais obligatoire, mais toujours appréciée.",
        tipCta: "Envoyer une contribution",
        tipEmailLead: "Une question sur le soutien à l'application ? Écrivez-moi par e-mail.",
        tipEmailSubject: "Pourboire",
        waysToTip: "D'autres façons de soutenir le projet :",
    },
    getApp: {
        eyebrow: "Obtenir l'application",
        heading: "Vos listes, sur votre plateforme.",
        intro: "Choisissez la version web, Android ou iOS. Les fichiers de chaque version sont générés à partir du code source.",
        platforms: {
            android: {
                detail: "Obtenez la version gratuite pour Android. Suivez les instructions de téléchargement ou d'accès aux tests de la version actuelle.",
                cta: "Obtenir la version Android",
            },
            ios: {
                detail: "Disponible gratuitement pour iPhone et iPad sur l'App Store.",
                cta: "Obtenir la version iOS",
            },
            web: {
                detail: "Ouvrez l'application dans un navigateur récent. Rien à installer.",
                cta: "Essayer l'application",
            },
        },
    },
    hero: {
        badges: ["Sans publicité", "Sans compte", "Sans suivi", "iOS · Android · Web"],
        ctaPrimary: "Essayer l'application",
        ctaSecondary: "Découvrir le fonctionnement",
        headingHighlight: "tout le nécessaire.",
        headingLead: "Partez avec",
        subhead:
            "Préparez une liste pour vos bagages, les tâches ménagères ou un prochain voyage, puis réutilisez-la à volonté. C'est gratuit, vos listes fonctionnent hors connexion et vous n'avez aucun compte à créer.",
    },
    howItWorks: {
        eyebrow: "Comment ça marche",
        heading: "Trois étapes simples. À vous de jouer.",
        intro: "Créez un modèle, parcourez votre liste et ajoutez un rappel quand il vous est utile. Pas de configuration compliquée pour passer à l'action.",
        steps: [
            {
                eyebrow: "Étape 1",
                title: "Créez un modèle",
                body: "Ajoutez les noms des éléments et, au besoin, des photos. Indiquez ce qui est obligatoire, facultatif ou conditionnel. Réutilisez le modèle, changez l'ordre, faites une copie ou archivez-le quand vous n'en avez plus besoin.",
            },
            {
                eyebrow: "Étape 2",
                title: "Vérifiez avant de partir",
                body: "Chaque élément présente son nom, sa photo et une case à cocher. Vous pouvez terminer une fois tous les éléments obligatoires cochés. Les éléments facultatifs n'empêchent jamais de terminer la liste ; les éléments conditionnels ne l'empêchent que lorsque leurs règles sont remplies.",
            },
            {
                eyebrow: "Étape 3",
                title: "Laissez l'application vous le rappeler",
                body: "Programmez un rappel pour commencer une liste ou en terminer une en cours. Une seule fois ou à répétition : chaque jour, semaine ou mois, du lundi au vendredi, certains jours ou à intervalles de plusieurs jours ou semaines.",
            },
        ],
    },
    languageSwitcher: {
        label: "Langue",
    },
    nav: {
        closeMenu: "Fermer le menu",
        features: "Fonctionnalités",
        free: "Gratuite, avec votre soutien",
        getApp: "Obtenir l'application",
        howItWorks: "Comment ça marche",
        label: "Sur cette page",
        more: "Autres sections",
        openMenu: "Ouvrir le menu",
        privacy: "Confidentialité",
        privacyPolicy: "Politique de confidentialité",
        tryIt: "Essayer l'application",
        security: "Sécurité",
    },
    privacy: {
        badgeBody:
            "Vos listes sont enregistrées sur l'appareil ou dans le navigateur où vous les créez. Vous décidez de les exporter ou de les partager.",
        badgeTitle: "Enregistré sur votre appareil",
        eyebrow: "Confidentialité",
        heading: "Vos listes vous appartiennent.",
        intro: "Sans compte dans l'application, sans synchronisation cloud et sans suivi. Vos modèles, listes et rappels sont enregistrés localement, pas sur les serveurs du développeur.",
        points: [
            "Aucun compte à créer, aucune identification",
            "Aucun outil d'analyse, traceur ou SDK publicitaire dans l'application",
            "Vos listes ne sont pas stockées sur les serveurs du développeur",
            "Les photos sont stockées localement et exclues des partages ; les sauvegardes les incluent",
            "Les sauvegardes sont chiffrées par défaut avec une phrase secrète que vous choisissez",
            "Les statistiques sont calculées sur votre appareil à partir de vos listes",
        ],
        policyLink: "Lire la politique de confidentialité complète",
    },
    privacyPolicy: {
        back: "Retour à la présentation",
        contactHeading: "Contact",
        contactIntro:
            "Pour toute question sur cette politique ou la confidentialité dans NeuraTiM Checklist, écrivez à :",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist stocke les données de vos listes sur votre appareil. L'application ne propose ni compte, ni synchronisation cloud, ni service d'analyse. Cette politique explique le stockage local, les partages et exports que vous lancez, les services facultatifs de l'appareil et le traitement distinct des données sur ce site web.",
        title: "Politique de confidentialité",
        sections: [
            {
                heading: "1. Champ d'application",
                paragraphs: [
                    "Cette politique couvre NeuraTiM Checklist sur Android, iOS et le web, ainsi que ce site. NeuraTiM est le développeur indépendant et le responsable du traitement des données personnelles liées à ce site ou aux échanges directs.",
                    "L'application est gratuite, sans publicité et sans version payante.",
                ],
            },
            {
                heading: "2. Données des listes et commentaires facultatifs",
                paragraphs: [
                    "Les listes fonctionnent hors ligne, sans compte ni analyse. Les commentaires facultatifs nécessitent Internet ; la dictée peut traiter la voix en ligne.",
                ],
                points: [
                    "Noms, adresses e-mail, numéros de téléphone ou informations de compte pour une inscription : aucune connexion à un compte n'est nécessaire",
                    "Identifiants publicitaires, d'appareil ou d'utilisateur à des fins de suivi",
                    "Votre position précise ou approximative",
                    "Contacts, calendriers, journaux d'appels, SMS ou listes d'applications installées",
                    "Analyses d'utilisation, diagnostics ou rapports de plantage envoyés au développeur ; les statistiques des listes sont calculées localement",
                    "Informations financières ou de paiement dans l'application ; les contributions facultatives sur le site sont traitées séparément ci-dessous",
                ],
            },
            {
                heading: "3. Données stockées sur votre appareil",
                paragraphs: [
                    "Pour vous permettre d'utiliser vos listes hors connexion, l'application stocke localement :",
                ],
                points: [
                    "Les modèles, sections, étiquettes et éléments, avec leurs noms, quantités, descriptions, statut obligatoire ou facultatif et règles conditionnelles",
                    "Les listes en cours et les listes terminées de l'historique, y compris les éléments cochés et les notes",
                    "Les photos jointes aux éléments",
                    "Vos rappels programmés et leur texte",
                    "Les réglages, comme la langue et le thème clair ou sombre",
                    "Les codes-barres scannés et les noms que vous leur attribuez ; l'application ne les recherche pas dans une base de produits en ligne",
                    "Les réglages de conservation de l'historique et de verrouillage de l'application",
                ],
            },
            {
                heading: "4. Où vos données sont conservées",
                paragraphs: [
                    "Sur Android et iOS, les données sont enregistrées dans l'espace privé de l'application, protégé par l'isolation des applications assurée par le système d'exploitation.",
                    "Dans la version web, les données sont stockées dans votre navigateur pour le site de l'application. Effacer les données de ce site supprime la copie locale.",
                    "L'application ne propose ni sauvegarde cloud ni synchronisation. Les copies exportées ou partagées et les sauvegardes gérées par votre appareil ou navigateur se trouvent en dehors de ce stockage local.",
                ],
            },
            {
                heading: "5. Autorisations et services de l'appareil",
                paragraphs: [
                    "Les autorisations servent aux fonctions qui en ont besoin. Vous pouvez gérer les autorisations disponibles dans les réglages de votre appareil ; en refuser une peut empêcher la fonction correspondante de fonctionner.",
                ],
                points: [
                    "Appareil photo : pour scanner un code QR ou un code-barres, ou photographier un élément. Le scan est traité sur l'appareil sans conserver les images de la caméra. Les photos prises pour les éléments sont enregistrées dans le stockage local de l'application.",
                    "Photos ou photothèque : pour joindre une image que vous sélectionnez. Cette image est copiée dans le stockage de l'application, qui ne téléverse ni n'indexe votre photothèque.",
                    "Notifications : pour vos rappels programmés et, sur les appareils compatibles, le suivi de progression. Elles sont créées localement, sans service distant de notifications push.",
                    "Alarmes exactes (Android) : pour programmer les rappels à l'heure choisie. Leur déclenchement peut néanmoins dépendre des réglages et restrictions du système.",
                    "Exécution au démarrage (Android) : pour reprogrammer les rappels après le redémarrage de l'appareil.",
                    "Fichiers : pour enregistrer les exports et ouvrir les fichiers de sauvegarde ou de partage que vous sélectionnez.",
                    "Microphone : lorsque vous dictez le nom d'un élément. Le service vocal de l'appareil renvoie du texte à l'application, qui ne conserve aucun enregistrement audio. Selon l'appareil et ses réglages, ce service peut traiter l'audio en ligne selon ses propres conditions de confidentialité.",
                    "Biométrie ou code de l'appareil : lorsque vous activez le verrouillage de l'application. Le système d'exploitation effectue la vérification ; l'application reçoit le résultat, pas vos données d'empreinte ou de visage.",
                ],
            },
            {
                heading: "6. Partages, exports et traitement externe",
                paragraphs: [
                    "L'application ne téléverse pas automatiquement vos listes vers le développeur. Vous choisissez de les partager ou de les exporter. La dictée facultative utilise le service vocal de votre appareil décrit plus haut.",
                ],
                points: [
                    "Le partage produit un code QR, un fichier .ntchk ou du texte brut que vous transmettez par le moyen de votre choix. Les modèles et listes partagés ne contiennent pas de photos et ne sont pas chiffrés par l'application.",
                    "L'export d'une sauvegarde enregistre un fichier à l'emplacement choisi ou ouvre le menu de partage de l'appareil. Les sauvegardes contiennent les photos. La protection de la destination dépend du service choisi.",
                    "L'import lit un fichier ou un code que vous fournissez ; il ne recherche pas de contenu de listes en ligne. Le service de fichiers que vous utilisez peut télécharger le fichier sélectionné.",
                    "Votre message, votre e-mail facultatif, la version de l’app, la plateforme et la langue sont envoyés au développeur. Les listes et les photos ne sont pas envoyées.",
                ],
            },
            {
                heading: "7. Conservation et suppression des données",
                paragraphs: [
                    "Le développeur ne possède pas de copie sur serveur de vos listes stockées localement. Vous gérez ces données dans l'application. Les copies déjà exportées, partagées ou sauvegardées doivent être supprimées séparément :",
                ],
                points: [
                    "Supprimez individuellement des éléments, listes ou modèles dans l'application",
                    "Utilisez Effacer l'historique pour supprimer les listes terminées",
                    "Effacez le stockage local de l'application dans les réglages de l'appareil, lorsque c'est possible, ou supprimez l'application et ses données ; cela ne supprime pas les sauvegardes externes ni les fichiers exportés",
                    "Dans la version web, effacez les données du site de l'application dans votre navigateur",
                    "Conservez les listes terminées un mois, trois mois ou un an ; les plus anciennes seront supprimées à la prochaine ouverture de l'application",
                ],
            },
            {
                heading: "8. Sécurité",
                paragraphs: [
                    "Les données locales bénéficient des protections du système d'exploitation. Le verrouillage de l'écran et le chiffrement du stockage apportent une protection supplémentaire lorsqu'ils sont activés.",
                    "Aucune base centrale de listes n'est hébergée sur les serveurs du développeur. Cela réduit l'exposition, sans mettre votre appareil ou vos fichiers exportés à l'abri de tout accès non autorisé.",
                    "Les sauvegardes sont chiffrées par défaut sur votre appareil avec une phrase secrète de votre choix, la dérivation de clé Argon2id et le chiffrement AES-GCM. L'application ne chiffre pas elle-même les données enregistrées sur votre appareil ; elle s'appuie sur les protections du système d'exploitation décrites ci-dessus. Vous pouvez aussi activer un verrouillage de l'application, qui contrôle qui peut l'ouvrir mais ne chiffre pas les données enregistrées.",
                    "L'export non chiffré est une action distincte, clairement indiquée et soumise à confirmation. Toute personne ayant accès au fichier peut le lire. Les fichiers partagés, codes QR et textes bruts ne sont pas non plus chiffrés par l'application et ne contiennent pas de photos. Ne les transmettez que par des moyens de confiance.",
                ],
            },
            {
                heading: "9. Enfants",
                paragraphs: [
                    "L'application n'est pas destinée aux enfants de moins de 13 ans, ou de l'âge minimum applicable dans leur pays. Le développeur ne collecte pas les données de listes des enfants via l'application.",
                ],
            },
            {
                heading: "10. Composants et services tiers",
                paragraphs: [
                    "L'application utilise des composants open source pour les notifications, le scan, la sélection de photos et de fichiers et le partage. Ces fonctions reposent sur un traitement local et des services système, pas sur un serveur exploité par le développeur.",
                    "L'application ne contient aucun SDK publicitaire, d'attribution, d'analyse ou de rapports de plantage.",
                    "D'autres composants assurent le chiffrement des sauvegardes, le déverrouillage biométrique, la dictée et les widgets. La dictée utilise le service vocal de votre appareil, qui peut traiter les données en ligne comme expliqué à la section 5.",
                ],
            },
            {
                heading: "11. Ce site web",
                paragraphs: [
                    "Ce site présente l'application et donne accès à sa version web. Les requêtes au site, paiements facultatifs et messages que vous envoyez sont distincts des données de listes stockées localement.",
                ],
                points: [
                    "Hébergement : le site utilise Cloudflare, qui peut traiter les adresses IP, informations de navigateur et URL demandées pour fournir le contenu et assurer la sécurité. Cela est distinct des données de l'application et ne signifie pas que vos listes sont téléversées.",
                    "Préférence linguistique : la langue choisie est enregistrée dans le navigateur et reflétée dans l'adresse de la page. Cette adresse peut être visible par l'hébergeur lorsque vous demandez une page.",
                    "Contributions : le soutien est facultatif. Les paiements passent par Stripe, Ko-fi, PayPal ou GitHub Sponsors selon leurs propres conditions de confidentialité. Le développeur peut recevoir des informations de transaction et les coordonnées du contributeur rendues disponibles par le prestataire, mais pas le numéro complet de votre carte via le formulaire de paiement.",
                    "Essai de l'application : l'application web intégrée stocke vos listes dans le navigateur comme décrit plus haut. Son chargement nécessite une requête à son service d'hébergement.",
                    "Liens externes et e-mail : les autres sites ont leurs propres politiques de confidentialité. Si vous écrivez au développeur, il reçoit votre adresse et votre message afin de pouvoir répondre.",
                ],
            },
            {
                heading: "12. Vos droits",
                paragraphs: [
                    "Selon la législation applicable, vous pouvez disposer de droits d'accès, de rectification, d'effacement ou d'obtention d'une copie de vos données personnelles, de limitation ou d'opposition au traitement et de réclamation auprès d'une autorité de protection des données. Ces droits peuvent aussi concerner les données du site, des paiements ou des e-mails, pas uniquement le contenu de l'application.",
                    "Le développeur ne vend pas les données de vos listes et ne les utilise pas à des fins publicitaires. Il ne peut ni accéder aux listes stockées uniquement sur votre appareil ni les supprimer.",
                    "Pour toute question de confidentialité ou demande relative à des données effectivement détenues par le développeur, utilisez l'adresse de contact ci-dessous.",
                ],
            },
            {
                heading: "13. Modifications de cette politique",
                paragraphs: [
                    "Les mises à jour seront publiées sur cette page avec une nouvelle date. Toute modification du traitement des données par l'application sera aussi expliquée dans les notes de version concernées. Une politique révisée n'autorise pas rétroactivement une collecte antérieure.",
                ],
            },
        ],
        lastUpdated: "Dernière mise à jour : 28 octobre 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Terminée vendredi dernier",
            finishedTuesday: "Terminée mardi",
            history: "Historique",
            inProgress: "En cours",
            startedToday: "Commencée aujourd'hui",
            startSubtitle: "Choisissez un modèle et cochez les éléments au fur et à mesure.",
            startTitle: "Commencer une liste",
        },
        common: {
            navChecklists: "Listes",
            navSchedule: "Planning",
            navTemplates: "Modèles",
            templateCarryOn: "Bagage cabine",
            templateGrocery: "Courses de la semaine",
            templateHiking: "Randonnée du week-end",
            templatePreFlight: "Vérifier la maison avant le vol",
        },
        condition: {
            addRule: "Ajouter une règle",
            and: "ET",
            headerItem: "Double-toit de la tente",
            intro: "Cet élément est obligatoire uniquement si :",
            isChecked: "case cochée",
            isNotChecked: "case non cochée",
            requiredWhen: "Obligatoire si",
            ruleLaptop: "Tente",
            ruleTrip: "Nuit sur place",
            save: "Enregistrer",
            summary: "La case « Tente » est cochée ET la case « Nuit sur place » est cochée",
            title: "Condition",
        },
        run: {
            conditional: "Conditionnel",
            essentials: "Indispensables",
            finish: "Terminer",
            firstAidKit: "Trousse de secours",
            headlamp: "Lampe frontale",
            optional: "Facultatif",
            rainCover: "Double-toit de la tente",
            requiredLeftTwo: "Encore 2 éléments obligatoires",
            requiredNow: "Obligatoire maintenant",
            subtitle: "3 éléments obligatoires cochés sur 5",
            tent: "Tente",
            trailMap: "Carte de randonnée",
            trekkingPoles: "Bâtons de randonnée",
            waterBottle: "Gourde ×2",
            doneHeading: "Fait (3)",
            filterAll: "Tous",
            filterOptional: "Facultatifs",
            filterRemaining: "Restants",
        },
        schedule: {
            doesNotRepeat: "Sans répétition",
            entry1Title: "Commencer : Randonnée du week-end",
            entry1When: "Sam., 7 h 00",
            entry2Title: "Terminer : Courses de la semaine",
            entry2When: "Aujourd'hui, 18 h 00",
            entry3Title: "Commencer : Vérifier la maison avant le vol",
            entry3When: "28 juil., 5 h 30",
            finishReminderLabel: "Rappel pour terminer",
            newReminder: "Nouveau rappel",
            repeatsWeekly: "Chaque semaine",
            startReminderLabel: "Rappel pour commencer",
            repeatsWeekdays: "Du lundi au vendredi (lun.–ven.)",
        },
        templates: {
            allChip: "Tous",
            carryOnSummary: "15 éléments · 10 obligatoires",
            grocerySummary: "9 éléments · 9 obligatoires",
            hikingSummary: "12 éléments · 8 obligatoires",
            newTemplate: "Nouveau modèle",
            preFlightSummary: "6 éléments · 6 obligatoires",
            tagHome: "Maison",
            tagOutdoors: "Plein air",
            tagTravel: "Voyage",
        },
        backup: {
            badgeBody:
                "Une sauvegarde chiffrée inclut les modèles, listes, notes, rappels et photos, protégés par votre phrase secrète. L'export sans chiffrement est une option distincte.",
            badgeNote:
                "Sans compte ni synchronisation cloud. Vous choisissez où enregistrer ou partager la sauvegarde.",
            badgeTitle: "Contenu de la sauvegarde",
            exportEncrypted: "Exporter une sauvegarde chiffrée",
            exportPlain: "Exporter sans chiffrement",
            intro: "Vos données sont enregistrées ici, sur cet appareil. Exportez une sauvegarde pour garder une autre copie, ou restaurez-en une enregistrée auparavant.",
            restore: "Restaurer une sauvegarde",
            title: "Sauvegarde et restauration",
        },
        start: {
            quickBody: "Sans modèle. Ajoutez des éléments et cochez-les au fur et à mesure.",
            quickTitle: "Liste rapide",
            title: "Commencer une liste",
            writeBody: "Saisissez ou collez toute la liste, puis commencez à cocher les éléments.",
            writeTitle: "Écrire une liste",
        },
        stats: {
            finishedRuns: "Listes terminées",
            inProgress: "En cours",
            itemsChecked: "Éléments cochés",
            missedHeading: "Le plus souvent laissés décochés",
            missedHelp: "Éléments restés décochés lorsqu'une liste a été terminée.",
            missedItem1: "Bâtons de randonnée",
            missedItem1Count: "9 fois",
            missedItem2: "Lampe frontale",
            missedItem2Count: "6 fois",
            missedItem3: "Double-toit de la tente",
            missedItem3Count: "2 fois",
            subtitle: "Calculé sur cet appareil à partir de vos listes enregistrées.",
            templates: "Modèles",
            title: "Statistiques",
        },
    },
    siteShare: {
        copied: "Lien copié",
        copyLink: "Copier le lien",
        error: "Le partage n’a pas pu démarrer. Réessayez ou copiez le lien.",
        heading: "Partagez ce site",
        manualCopy: "Copiez ce lien manuellement",
        nativeShare: "Partager avec votre appareil",
        selectLabel: "Réseau social ou option de partage",
        share: "Partager",
    },
    siteShareRoller: {
        hint: "Faites glisser ou utilisez les touches ← → pour faire tourner. Cliquez sur une icône pour partager.",
    },
    tryApp: {
        back: "Retour à la présentation",
        dismissNotice: "Fermer",
        iframeTitle: "NeuraTiM Checklist — essayez l'application",
        intro: "C'est la véritable application web, pas une image de démonstration. Essayez-la : vos listes sont enregistrées dans ce navigateur.",
        loading: "Chargement de l'application…",
    },
    insights: {
        eyebrow: "Statistiques",
        heading: "Votre progression ne regarde que vous.",
        intro: "Les statistiques sont calculées sur votre appareil à partir de vos listes enregistrées, sans suivre votre activité. Supprimez une liste et ses données ne sont plus comptées. Aucun relevé analytique distinct n'est conservé.",
        points: [
            {
                title: "Repérez ce que vous laissez de côté",
                body: "Voyez quels éléments restent le plus souvent décochés lorsque vous terminez. Un élément facultatif que vous ignorez toujours n'a peut-être plus sa place dans votre liste. Les éléments actuellement obligatoires doivent être cochés pour pouvoir terminer.",
            },
            {
                title: "Une vue d'ensemble",
                body: "Consultez le nombre de modèles, de listes terminées ou encore en cours, et le total des éléments cochés.",
            },
            {
                title: "Des chiffres sans suivi",
                body: "Aucun SDK d'analyse, service de rapports de plantage ou rapport d'utilisation envoyé au développeur. Les statistiques de vos listes restent sur votre appareil.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Pour commencer",
        heading: "Moins de saisie. Plus de tâches accomplies.",
        intro: "Partez d'un modèle prêt à l'emploi, collez une liste ou créez une liste rapide. Choisissez ce qui vous convient : inutile de tout saisir élément par élément.",
        points: [
            {
                title: "Personnalisez un modèle prêt à l'emploi",
                body: "Choisissez Randonnée, Week-end ailleurs, Courses, Sac de sport ou Quitter la maison. Une copie est ajoutée à vos modèles : renommez-la et retirez ce dont vous n'avez pas besoin.",
            },
            {
                title: "Écrivez toute la liste d'un coup",
                body: "La première ligne est le nom de la liste ; chaque ligne suivante est un élément. Ajoutez la marque exacte [optional] en fin de ligne pour rendre l'élément facultatif. Collez une liste existante et commencez.",
            },
            {
                title: "Collez dans une liste existante",
                body: "Les puces et numéros sont supprimés automatiquement. Commencez une ligne par 2x pour fixer la quantité à deux. Transformez une page de notes en éléments distincts en une seule fois.",
            },
            {
                title: "Ou commencez par une liste rapide",
                body: "Pas besoin de modèle. Ajoutez les éléments au fur et à mesure, dictez les noms sur les appareils compatibles ou utilisez des codes-barres associés à des noms enregistrés. Les suggestions viennent des noms d'éléments déjà présents sur votre appareil.",
            },
        ],
    },
    security: {
        eyebrow: "Sécurité",
        heading: "Sachez ce que vous partagez. Choisissez comment le protéger.",
        intro: "Avant tout export ou partage, l'application indique ce qui est inclus et si les données sont chiffrées. Les sauvegardes peuvent contenir des photos ; les modèles et listes partagés, non.",
        note: "Le verrouillage contrôle qui peut ouvrir l'application. Il ne chiffre pas vos données : les données enregistrées sont protégées par la sécurité de votre appareil, comme le verrouillage de l'écran.",
        points: [
            {
                title: "Des sauvegardes protégées par votre phrase secrète",
                body: "Argon2id dérive la clé et AES-GCM chiffre la sauvegarde, entièrement sur votre appareil. Choisissez une phrase secrète solide et gardez-la en lieu sûr : le développeur ne peut pas la récupérer pour vous.",
            },
            {
                title: "Un export non chiffré, seulement si vous le choisissez",
                body: "Besoin d'un fichier non chiffré ? Utilisez l'option d'export distincte et clairement indiquée, puis confirmez avant l'enregistrement. Toute personne ayant accès au fichier peut en lire le contenu.",
            },
            {
                title: "Déverrouillez avec votre appareil",
                body: "Ouvrez l'application avec votre empreinte digitale, la reconnaissance faciale ou le code de verrouillage de votre appareil. Le système d'exploitation gère l'authentification ; l'application ne reçoit jamais vos données d'empreinte ou de visage.",
            },
            {
                title: "Protégé par votre appareil",
                body: "Sur Android et iOS, les listes, notes et photos restent dans le stockage privé de l'application, protégées par l'isolation des applications du système d'exploitation et le verrouillage de votre écran. L'application n'ajoute pas de chiffrement propre.",
            },
        ],
    },
};

export default fr;
