import type { LocaleDictionary } from "../../types/dictionary";

const es: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Elementos condicionales",
        heading: "Hay cosas que solo hacen falta a veces.",
        intro: "¿Te llevas el portátil? Necesitarás el cargador. ¿Lo dejas en casa? El cargador también puede quedarse. Configura un elemento como condicional y solo será obligatorio cuando se cumplan tus reglas. Una plantilla para distintos planes.",
        points: [
            {
                title: "Reglas que se entienden",
                body: "Elige un elemento e indica si debe estar marcado o sin marcar. La aplicación muestra la condición completa como una frase para que sepas exactamente cuándo se aplica.",
            },
            {
                title: "Y, O y paréntesis",
                body: "Combina reglas con Y u O y agrúpalas con paréntesis. Por ejemplo: el cargador es obligatorio cuando está marcado el elemento «Portátil» Y está marcado al menos uno de los elementos «Viaje con pernocta» o «Viaje de trabajo».",
            },
            {
                title: "Se adapta mientras marcas elementos",
                body: "Cuando se cumple una condición, su elemento pasa a ser obligatorio y cuenta para completar la lista. Cuando deja de cumplirse, ya no es obligatorio. Solo puedes finalizar cuando todos los elementos obligatorios en ese momento estén marcados.",
            },
        ],
    },
    features: {
        eyebrow: "Funciones",
        heading: "Todo lo que necesitas en una lista. Nada que estorbe.",
        items: [
            {
                title: "Plantillas reutilizables",
                body: "Añade fotos, notas, etiquetas y elementos obligatorios, opcionales o condicionales. Crea una plantilla una vez y empieza una lista nueva cuando la necesites.",
            },
            {
                title: "En curso e historial",
                body: "Deja una lista a medias y retómala más tarde. Seguirá en curso hasta que la finalices o la elimines. Las listas finalizadas pasan al historial.",
            },
            {
                title: "Recordatorios a tu medida",
                body: "Recibe un recordatorio para empezar una lista o terminar una que tengas en curso. Una sola vez, a diario, cada semana o mes, de lunes a viernes, en días concretos o cada cierto número de días o semanas.",
            },
            {
                title: "Funciona sin conexión",
                body: "Crea y utiliza listas sin conexión a internet. Las plantillas, listas y recordatorios se guardan en tu dispositivo, sin cuentas ni sincronización en la nube.",
            },
            {
                title: "Búsqueda y etiquetas",
                body: "Filtra plantillas por etiqueta y encuentra listas por su nombre. Menos desplazamientos, aunque tu colección siga creciendo.",
            },
            {
                title: "iOS · Android · Web",
                body: "Una experiencia clara y familiar en tu teléfono, tableta o navegador. Algunas funciones pueden variar según la plataforma.",
            },
            {
                title: "Elementos condicionales",
                body: "Haz que un elemento sea obligatorio solo cuando haga falta: el cargador, por ejemplo, si te llevas el portátil. Combina reglas con Y y O; se actualizan a medida que marcas elementos.",
            },
            {
                title: "Espacio para los detalles",
                body: "Añade a cada elemento varias fotos, una descripción y una cantidad con la unidad que prefieras, como 2 kg o 3 paquetes. Organiza los elementos en secciones y arrastra para reordenarlos, individualmente o por secciones completas.",
            },
            {
                title: "Listas largas, sin agobios",
                body: "Agrupa los elementos marcados en Hecho u ocúltalos por completo. Filtra por Pendientes u Opcionales para centrarte en lo que necesitas ahora.",
            },
            {
                title: "Edita varios elementos a la vez",
                body: "Selecciona varios elementos para moverlos a otra sección, hacerlos obligatorios u opcionales o eliminarlos juntos.",
            },
            {
                title: "Tu progreso de un vistazo",
                body: "En dispositivos compatibles, una notificación permanente y un widget en la pantalla de inicio pueden mostrar tu progreso. Los accesos directos de la aplicación te llevan a las cuatro plantillas que has usado más recientemente.",
            },
            {
                title: "Comparte a tu manera",
                body: "Envía un código QR o un archivo .ntchk a quien tenga la aplicación, o texto sin formato a cualquier otra persona. Las listas y plantillas compartidas no incluyen fotos.",
            },
            {
                title: "Copias de seguridad cifradas",
                body: "Guarda tus datos, incluidas las fotos, en un único archivo protegido con la frase de contraseña que elijas. El cifrado utiliza Argon2id y AES-GCM en tu dispositivo.",
            },
            {
                title: "Bloqueo y cifrado de la aplicación",
                body: "Desbloquea la aplicación con tu huella, el reconocimiento facial o el código de bloqueo de tu dispositivo. En Android e iOS también puedes cifrar los datos guardados.",
            },
            {
                title: "El historial, como tú decidas",
                body: "Conserva las listas finalizadas indefinidamente, un mes, tres meses o un año. Las más antiguas se eliminan la próxima vez que abras la aplicación.",
            },
        ],
    },
    footer: {
        contact: "Contacto",
        mainSite: "NeuraTiM",
        privacyPolicy: "Política de privacidad",
        tagline: "Desarrollo independiente. {year} · Sin cuenta en la aplicación ni seguimiento.",
    },
    freeSupport: {
        eyebrow: "Gratis, con tu apoyo",
        githubSponsorsNote: "Requiere una cuenta de GitHub",
        heading: "100 % gratis. Sin letra pequeña.",
        intro: "Todas las funciones son gratuitas. Las aportaciones se agradecen, pero nunca son obligatorias.",
        notHere: ["Sin anuncios", "Sin suscripción", "Sin compras en la aplicación", "Sin versión prémium"],
        pledge: {
            body: "Si estas aplicaciones te resultan útiles, plantéate hacer una donación. Si todo el que las usa enviara un euro al mes, el proyecto sobreviviría sin problemas: podrías seguir usando cualquier aplicación de NeuraTiM gratis y con la conciencia tranquila, sabiendo que tu parte paga que se mantengan al día y financia lo que venga después.",
            heading: "Con un euro al mes basta",
        },
        quickTip: {
            amountLabel: "Elige un importe",
            backButton: "Atrás",
            cancelNote:
                "Puedes cancelar cuando quieras: basta un correo y la donación se detiene antes del siguiente cobro.",
            customAmountLabel: "Otro monto (EUR)",
            emailLabel: "Correo para el recibo",
            errorAmount: "Ingresa un monto de entre 1 y 500 EUR.",
            errorEmail: "Introduce una dirección de correo válida.",
            errorGeneric: "Algo ha fallado. Inténtalo de nuevo.",
            heading: "Apoya el proyecto",
            monthlyPayButton: "Donar {amount} al mes",
            monthlySuccessBody:
                "Tu donación mensual está activa y el primer cobro se ha realizado. Gracias por mantener estas aplicaciones gratis.",
            payButton: "Pagar {amount}",
            poweredBy:
                "Stripe procesa los pagos. Paga con tarjeta o, cuando estén disponibles, con Apple Pay o Google Pay. No necesitas una cuenta de NeuraTiM.",
            processingButton: "Procesando…",
            successBody:
                "Tu aportación ha llegado. ¡Gracias por ayudar a que la aplicación siga siendo gratuita!",
            successHeading: "¡Gracias!",
            tabMonthly: "Mensual",
            tabOneOff: "Una vez",
        },
        supportBody:
            "Usarla es gratis; mantenerla tiene un coste. Yo me encargo del desarrollo y el alojamiento, y distribuirla en el App Store requiere una membresía del Apple Developer Program, normalmente de 99 USD al año. Una pequeña aportación ayuda a mantener este proyecto independiente: nunca es obligatoria y siempre se agradece.",
        tipCta: "Enviar una aportación",
        tipEmailLead: "¿Tienes dudas sobre cómo apoyar la aplicación? Escríbeme por correo.",
        tipEmailSubject: "Propina",
        waysToTip: "Otras formas de apoyar el proyecto:",
    },
    getApp: {
        eyebrow: "Consigue la aplicación",
        heading: "Tus listas, en tu plataforma.",
        intro: "Elige la versión web, Android o iOS. Los paquetes de cada versión se generan a partir del código fuente.",
        platforms: {
            android: {
                detail: "Consigue la versión gratuita para Android. Sigue las instrucciones de descarga o de acceso a las pruebas de la versión actual.",
                cta: "Obtener la versión para Android",
            },
            ios: {
                detail: "Disponible gratis para iPhone y iPad en el App Store.",
                cta: "Obtener la versión para iOS",
            },
            web: {
                detail: "Abre la aplicación en un navegador moderno. No hace falta instalar nada.",
                cta: "Prueba la aplicación",
            },
        },
    },
    hero: {
        badges: ["Sin anuncios", "Sin cuenta", "Sin seguimiento", "iOS · Android · Web"],
        ctaPrimary: "Prueba la aplicación",
        ctaSecondary: "Descubre cómo funciona",
        headingHighlight: "todo lo que necesitas.",
        headingLead: "Sal de casa con",
        subhead:
            "Prepara una lista para hacer la maleta, las tareas de casa o tu próximo viaje y úsala de nuevo cuando la necesites. Gratis, con listas disponibles sin conexión y sin crear una cuenta.",
    },
    howItWorks: {
        eyebrow: "Cómo funciona",
        heading: "Tres pasos sencillos. Y a lo tuyo.",
        intro: "Crea una plantilla, repasa tu lista y añade un recordatorio cuando te venga bien. Sin configuraciones complicadas que te impidan avanzar.",
        steps: [
            {
                eyebrow: "Paso 1",
                title: "Crea una plantilla",
                body: "Añade nombres y, si lo necesitas, fotos. Decide qué elementos son obligatorios, opcionales o condicionales. Reutiliza la plantilla, cambia el orden, haz una copia o archívala cuando deje de hacerte falta.",
            },
            {
                eyebrow: "Paso 2",
                title: "Repasa la lista antes de salir",
                body: "Cada elemento muestra su nombre, foto y casilla. Puedes finalizar cuando todos los elementos obligatorios estén marcados. Los opcionales nunca bloquean el cierre; los condicionales solo lo hacen cuando se cumplen sus reglas.",
            },
            {
                eyebrow: "Paso 3",
                title: "Deja que la aplicación te lo recuerde",
                body: "Configura un recordatorio para empezar una lista o terminar una en curso. Una sola vez o de forma recurrente: a diario, cada semana o mes, de lunes a viernes, en días concretos o cada varios días o semanas.",
            },
        ],
    },
    languageSwitcher: {
        label: "Idioma",
    },
    nav: {
        closeMenu: "Cerrar menú",
        features: "Funciones",
        free: "Gratis, con tu apoyo",
        getApp: "Consigue la aplicación",
        howItWorks: "Cómo funciona",
        label: "En esta página",
        more: "Más secciones",
        openMenu: "Abrir menú",
        privacy: "Privacidad",
        privacyPolicy: "Política de privacidad",
        tryIt: "Prueba la aplicación",
        security: "Seguridad",
    },
    privacy: {
        badgeBody:
            "Tus listas se guardan en el dispositivo o navegador donde las creas. Tú decides si las exportas o las compartes.",
        badgeTitle: "Guardado en tu dispositivo",
        eyebrow: "Privacidad",
        heading: "Tus listas siguen siendo tuyas.",
        intro: "Sin cuenta en la aplicación, sin sincronización en la nube y sin seguimiento. Tus plantillas, listas y recordatorios se guardan localmente, no en servidores del desarrollador.",
        points: [
            "Sin cuenta ni inicio de sesión",
            "Sin analítica, rastreadores ni SDK publicitarios en la aplicación",
            "Tus listas no se guardan en los servidores del desarrollador",
            "Las fotos se guardan localmente y se excluyen al compartir; las copias de seguridad sí las incluyen",
            "Las copias de seguridad se cifran por defecto con una frase de contraseña que tú eliges",
            "Las estadísticas se calculan en tu dispositivo a partir de tus listas",
        ],
        policyLink: "Leer la política de privacidad completa",
    },
    privacyPolicy: {
        back: "Volver al resumen",
        contactHeading: "Contacto",
        contactIntro: "Para consultas sobre esta política o la privacidad en NeuraTiM Checklist, escribe a:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist guarda los datos de tus listas en tu dispositivo. No hay cuentas, sincronización en la nube ni servicios de analítica en la aplicación. Esta política explica el almacenamiento local, las exportaciones y acciones de compartir que tú inicias, los servicios opcionales del dispositivo y el tratamiento independiente de datos en este sitio web.",
        title: "Política de privacidad",
        sections: [
            {
                heading: "1. Alcance de esta política",
                paragraphs: [
                    "Esta política se aplica a NeuraTiM Checklist en Android, iOS y la web, y a este sitio web. NeuraTiM es el desarrollador independiente y el responsable de los datos personales tratados en relación con este sitio o con comunicaciones directas.",
                    "La aplicación es gratuita, no contiene anuncios y no tiene una versión de pago.",
                ],
            },
            {
                heading: "2. Datos de las listas y comentarios opcionales",
                paragraphs: [
                    "Las listas funcionan sin conexión, sin cuenta ni análisis. Los comentarios opcionales necesitan internet; el dictado puede procesar la voz en línea.",
                ],
                points: [
                    "Nombres, direcciones de correo, teléfonos o datos de cuenta para registrarte: no hay inicio de sesión",
                    "Identificadores publicitarios, de dispositivo o de usuario para seguimiento",
                    "Tu ubicación precisa o aproximada",
                    "Contactos, calendarios, registros de llamadas, mensajes de texto o listas de aplicaciones instaladas",
                    "Analítica de uso, diagnósticos o informes de fallos enviados al desarrollador; las estadísticas de listas se calculan localmente",
                    "Información financiera o de pago dentro de la aplicación; las aportaciones opcionales del sitio web se explican por separado más abajo",
                ],
            },
            {
                heading: "3. Datos guardados en tu dispositivo",
                paragraphs: [
                    "Para que puedas usar tus listas sin conexión, la aplicación guarda localmente:",
                ],
                points: [
                    "Plantillas, secciones, etiquetas y elementos, incluidos nombres, cantidades, descripciones, carácter obligatorio u opcional y reglas condicionales",
                    "Listas en curso y listas finalizadas del historial, incluidos los elementos marcados y las notas",
                    "Fotos que adjuntas a los elementos",
                    "Recordatorios programados y sus textos",
                    "Ajustes como el idioma y el tema claro u oscuro",
                    "Códigos de barras escaneados y los nombres que les asignas; la aplicación no los consulta en una base de datos de productos en línea",
                    "Ajustes de conservación del historial, bloqueo de la aplicación y cifrado en el dispositivo",
                ],
            },
            {
                heading: "4. Dónde se guardan tus datos",
                paragraphs: [
                    "En Android e iOS, los datos se guardan en el almacenamiento privado de la aplicación, protegido por el aislamiento entre aplicaciones del sistema operativo.",
                    "En la versión web, los datos se guardan en el navegador para el sitio de la aplicación. Al borrar los datos de ese sitio, se elimina la copia local.",
                    "La aplicación no ofrece copias de seguridad ni sincronización en la nube. Las copias que exportes o compartas y las copias de seguridad gestionadas por tu dispositivo o navegador quedan fuera de este almacenamiento local.",
                ],
            },
            {
                heading: "5. Permisos y servicios del dispositivo",
                paragraphs: [
                    "Los permisos se utilizan para las funciones que los necesitan. Puedes gestionar los permisos disponibles en los ajustes del dispositivo; denegar uno puede impedir que funcione la característica correspondiente.",
                ],
                points: [
                    "Cámara: para escanear códigos QR o de barras y fotografiar elementos. El escaneo se procesa en el dispositivo sin conservar los fotogramas. Las fotos de los elementos se guardan en el almacenamiento local de la aplicación.",
                    "Fotos o fototeca: para adjuntar una imagen que selecciones. La imagen se copia al almacenamiento de la aplicación, que no sube ni indexa tu fototeca.",
                    "Notificaciones: para recordatorios programados y, donde se admita, el progreso en curso. Se generan localmente, sin un servicio remoto de notificaciones push.",
                    "Alarmas exactas (Android): para programar recordatorios a la hora elegida. Su entrega puede seguir dependiendo de los ajustes y restricciones del sistema.",
                    "Ejecución al iniciar (Android): para volver a programar los recordatorios tras reiniciar el dispositivo.",
                    "Archivos: para guardar exportaciones y abrir copias de seguridad o archivos compartidos que selecciones.",
                    "Micrófono: cuando dictas el nombre de un elemento. El servicio de voz del dispositivo devuelve texto a la aplicación, que no conserva grabaciones de audio. Según el dispositivo y sus ajustes, el servicio de voz puede procesar audio en línea conforme a sus propias condiciones de privacidad.",
                    "Biometría o código del dispositivo: al activar el bloqueo de la aplicación. El sistema operativo realiza la comprobación; la aplicación recibe el resultado, no tus datos de huella o rostro.",
                ],
            },
            {
                heading: "6. Compartir, exportar y procesar externamente",
                paragraphs: [
                    "La aplicación no envía automáticamente tus listas al desarrollador. Tú decides si las compartes o exportas. El dictado opcional utiliza el servicio de voz del dispositivo descrito anteriormente.",
                ],
                points: [
                    "Al compartir se genera un código QR, un archivo .ntchk o texto sin formato para enviarlo por el medio que elijas. Las plantillas y listas compartidas no incluyen fotos ni están cifradas por la aplicación.",
                    "Al exportar una copia de seguridad se guarda un archivo en la ubicación elegida o se abre el menú para compartir del dispositivo. Las copias de seguridad incluyen fotos. La protección del destino depende del servicio que elijas.",
                    "La importación lee un archivo o código que proporciones; no busca contenido de listas en internet. El proveedor de archivos que utilices puede descargar el archivo seleccionado.",
                    "Se envían al desarrollador tu mensaje, correo opcional, versión de la app, plataforma e idioma. No se envían listas ni fotos.",
                ],
            },
            {
                heading: "7. Conservación y eliminación de datos",
                paragraphs: [
                    "El desarrollador no tiene una copia en sus servidores de las listas guardadas localmente. Puedes gestionar esos datos en la aplicación. Las copias que hayas exportado, compartido o guardado como respaldo deben eliminarse por separado:",
                ],
                points: [
                    "Elimina elementos, listas o plantillas individuales en la aplicación",
                    "Usa Borrar historial para eliminar las listas finalizadas",
                    "Borra el almacenamiento local de la aplicación desde los ajustes del dispositivo, cuando sea posible, o elimina la aplicación y sus datos; esto no elimina copias de seguridad externas ni archivos exportados",
                    "En la versión web, borra los datos del sitio de la aplicación en el navegador",
                    "Conserva las listas finalizadas un mes, tres meses o un año; las más antiguas se eliminarán la próxima vez que abras la aplicación",
                ],
            },
            {
                heading: "8. Seguridad",
                paragraphs: [
                    "Los datos locales se benefician de las medidas de seguridad del sistema operativo. El bloqueo de pantalla y el cifrado del almacenamiento ofrecen protección adicional cuando están activados.",
                    "No hay una base de datos central de listas en los servidores del desarrollador. Esto reduce la exposición, pero no hace que tu dispositivo ni tus archivos exportados sean inmunes al acceso no autorizado.",
                    "Las copias de seguridad se cifran por defecto en tu dispositivo con una frase de contraseña que eliges, derivación de claves Argon2id y cifrado AES-GCM. También puedes activar el bloqueo de la aplicación. En Android e iOS, el cifrado opcional del almacenamiento protege los datos locales con material de claves protegido mediante Android Keystore o iOS Keychain.",
                    "La exportación sin cifrar es una acción independiente, identificada y sujeta a confirmación. Cualquier persona con acceso al archivo puede leerlo. Los archivos compartidos, códigos QR y textos sin formato tampoco están cifrados por la aplicación y no contienen fotos. Compártelos solo por medios de confianza.",
                ],
            },
            {
                heading: "9. Menores",
                paragraphs: [
                    "La aplicación no está dirigida a menores de 13 años, o de la edad mínima aplicable en su país. El desarrollador no recopila datos de listas de menores a través de la aplicación.",
                ],
            },
            {
                heading: "10. Componentes y servicios de terceros",
                paragraphs: [
                    "La aplicación usa componentes de código abierto para notificaciones, escaneo, selección de fotos y archivos y funciones de compartir. Estas funciones utilizan procesamiento local y servicios del sistema, no un servidor gestionado por el desarrollador.",
                    "La aplicación no incluye SDK de publicidad, atribución, analítica ni informes de fallos.",
                    "Otros componentes permiten el cifrado, el almacenamiento seguro de claves, el desbloqueo biométrico, el dictado y los widgets. El dictado depende del servicio de voz del dispositivo, que puede procesar datos en línea, como se explica en la sección 5.",
                ],
            },
            {
                heading: "11. Este sitio web",
                paragraphs: [
                    "Este sitio presenta la aplicación y da acceso a la versión web. Las solicitudes al sitio, los pagos opcionales y los mensajes que envías son independientes de los datos de listas almacenados localmente.",
                ],
                points: [
                    "Alojamiento: el sitio usa Cloudflare, que puede procesar direcciones IP, información del navegador y URL solicitadas para entregar contenido y mantener la seguridad. Esto es independiente de los datos de la aplicación y no implica que se suban tus listas.",
                    "Preferencia de idioma: el idioma elegido se guarda en el navegador y se refleja en la dirección de la página. Esa dirección puede ser visible para el proveedor de alojamiento al solicitar una página.",
                    "Aportaciones: el apoyo es opcional. Los pagos se realizan mediante Stripe, Ko-fi, PayPal o GitHub Sponsors conforme a sus propias condiciones de privacidad. El desarrollador puede recibir información de la transacción y los datos de la persona que contribuye que facilite el proveedor, pero no el número completo de tu tarjeta a través del formulario de pago.",
                    "Prueba de la aplicación: la aplicación web integrada guarda los datos de tus listas en el navegador, tal como se ha descrito. Cargar la aplicación requiere una solicitud a su servicio de alojamiento.",
                    "Enlaces externos y correo: otros sitios tienen sus propias políticas de privacidad. Si escribes al desarrollador, este recibe tu dirección y tu mensaje para poder responder.",
                ],
            },
            {
                heading: "12. Tus derechos",
                paragraphs: [
                    "Según la legislación aplicable, puedes tener derecho a acceder a tus datos personales, corregirlos, eliminarlos u obtener una copia, limitar el tratamiento u oponerte a él y presentar una reclamación ante una autoridad de protección de datos. Estos derechos también pueden aplicarse a datos del sitio web, de pagos o de correos, no solo al contenido de la aplicación.",
                    "El desarrollador no vende los datos de tus listas ni los usa para publicidad. No puede acceder a las listas guardadas únicamente en tu dispositivo ni eliminarlas.",
                    "Para consultas de privacidad o solicitudes sobre datos que el desarrollador sí conserve, utiliza la dirección de contacto que aparece a continuación.",
                ],
            },
            {
                heading: "13. Cambios en esta política",
                paragraphs: [
                    "Las actualizaciones se publicarán en esta página con una nueva fecha. Los cambios en el tratamiento de datos de la aplicación también se explicarán en las notas de la versión correspondiente. Una política revisada no autoriza retroactivamente una recopilación de datos anterior.",
                ],
            },
        ],
        lastUpdated: "Última actualización: 10 de octubre de 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Finalizada el viernes pasado",
            finishedTuesday: "Finalizada el martes",
            history: "Historial",
            inProgress: "En curso",
            startedToday: "Iniciada hoy",
            startSubtitle: "Elige una plantilla y marca los elementos a medida que avanzas.",
            startTitle: "Empezar una lista",
        },
        common: {
            navChecklists: "Listas",
            navSchedule: "Programación",
            navTemplates: "Plantillas",
            templateCarryOn: "Equipaje de mano",
            templateGrocery: "Compra semanal",
            templateHiking: "Ruta de fin de semana",
            templatePreFlight: "Revisión de casa antes de volar",
        },
        condition: {
            addRule: "Añadir regla",
            and: "Y",
            headerItem: "Doble techo de la tienda",
            intro: "Este elemento solo es obligatorio cuando:",
            isChecked: "casilla marcada",
            isNotChecked: "casilla sin marcar",
            requiredWhen: "Obligatorio cuando",
            ruleLaptop: "Tienda de campaña",
            ruleTrip: "Viaje con pernocta",
            save: "Guardar",
            summary:
                "El elemento «Tienda de campaña» está marcado Y el elemento «Viaje con pernocta» está marcado",
            title: "Condición",
        },
        run: {
            conditional: "Condicional",
            essentials: "Imprescindibles",
            finish: "Finalizar",
            firstAidKit: "Botiquín",
            headlamp: "Linterna frontal",
            optional: "Opcional",
            rainCover: "Doble techo de la tienda",
            requiredLeftTwo: "Quedan 2 elementos obligatorios",
            requiredNow: "Obligatorio ahora",
            subtitle: "3 de 5 elementos obligatorios marcados",
            tent: "Tienda de campaña",
            trailMap: "Mapa de senderos",
            trekkingPoles: "Bastones de senderismo",
            waterBottle: "Botella de agua ×2",
            doneHeading: "Hecho (3)",
            filterAll: "Todos",
            filterOptional: "Opcionales",
            filterRemaining: "Pendientes",
        },
        schedule: {
            doesNotRepeat: "No se repite",
            entry1Title: "Empezar: Ruta de fin de semana",
            entry1When: "Sáb., 7:00",
            entry2Title: "Finalizar: Compra semanal",
            entry2When: "Hoy, 18:00",
            entry3Title: "Empezar: Revisión de casa antes de volar",
            entry3When: "28 de jul., 5:30",
            finishReminderLabel: "Recordatorio para finalizar",
            newReminder: "Nuevo recordatorio",
            repeatsWeekly: "Se repite cada semana",
            startReminderLabel: "Recordatorio para empezar",
            repeatsWeekdays: "De lunes a viernes (lun.–vie.)",
        },
        templates: {
            allChip: "Todas",
            carryOnSummary: "15 elementos · 10 obligatorios",
            grocerySummary: "9 elementos · 9 obligatorios",
            hikingSummary: "12 elementos · 8 obligatorios",
            newTemplate: "Nueva plantilla",
            preFlightSummary: "6 elementos · 6 obligatorios",
            tagHome: "Hogar",
            tagOutdoors: "Aire libre",
            tagTravel: "Viajes",
        },
        backup: {
            badgeBody:
                "Una copia de seguridad cifrada protege con tu frase de contraseña las plantillas, listas, notas, recordatorios y fotos. Exportar sin cifrar es una opción independiente.",
            badgeNote:
                "Sin cuenta ni sincronización en la nube. Tú eliges dónde guardar o compartir la copia de seguridad.",
            badgeTitle: "Qué incluye la copia de seguridad",
            exportEncrypted: "Exportar copia cifrada",
            exportPlain: "Exportar sin cifrar",
            intro: "Tus datos se guardan aquí, en este dispositivo. Exporta una copia de seguridad para conservar otra copia o restaura una que hayas guardado antes.",
            restore: "Restaurar copia de seguridad",
            title: "Copias de seguridad y restauración",
        },
        start: {
            quickBody: "Sin plantilla. Añade elementos y márcalos sobre la marcha.",
            quickTitle: "Lista rápida",
            title: "Empezar una lista",
            writeBody: "Escribe o pega toda la lista y empieza a marcar elementos.",
            writeTitle: "Escribir una lista",
        },
        stats: {
            finishedRuns: "Listas finalizadas",
            inProgress: "En curso",
            itemsChecked: "Elementos marcados",
            missedHeading: "Los que más quedan sin marcar",
            missedHelp: "Elementos que quedaron sin marcar al finalizar una lista.",
            missedItem1: "Bastones de senderismo",
            missedItem1Count: "9 veces",
            missedItem2: "Linterna frontal",
            missedItem2Count: "6 veces",
            missedItem3: "Doble techo de la tienda",
            missedItem3Count: "2 veces",
            subtitle: "Calculado en este dispositivo a partir de tus listas guardadas.",
            templates: "Plantillas",
            title: "Estadísticas",
        },
    },
    siteShare: {
        copied: "Enlace copiado",
        copyLink: "Copiar enlace",
        error: "No se pudo iniciar el proceso para compartir. Inténtalo de nuevo o copia el enlace.",
        heading: "Comparte este sitio",
        manualCopy: "Copia este enlace manualmente",
        nativeShare: "Compartir con tu dispositivo",
        selectLabel: "Red social u opción para compartir",
        share: "Compartir",
    },
    siteShareRoller: {
        hint: "Arrastra, desplázate o usa ← → para girar. Haz clic en un icono para compartir.",
    },
    tryApp: {
        back: "Volver al resumen",
        dismissNotice: "Cerrar",
        iframeTitle: "NeuraTiM Checklist: aplicación en funcionamiento",
        intro: "Esta es la aplicación web de verdad, no una imagen de demostración. Pruébala; tus listas se guardan en este navegador.",
        loading: "Cargando la aplicación…",
    },
    insights: {
        eyebrow: "Estadísticas",
        heading: "Tu progreso, solo para ti.",
        intro: "Las estadísticas se calculan en tu dispositivo a partir de tus listas guardadas, no mediante el seguimiento de tu actividad. Al eliminar una lista, sus datos dejan de contarse. No se conserva ningún registro analítico aparte.",
        points: [
            {
                title: "Descubre qué sueles dejar pendiente",
                body: "Consulta qué elementos quedan sin marcar con más frecuencia al finalizar. Un elemento opcional que siempre omites quizá no tenga sitio en tu lista. Los elementos obligatorios en ese momento deben estar marcados para poder finalizar.",
            },
            {
                title: "La visión de conjunto",
                body: "Consulta cuántas plantillas tienes, cuántas listas están finalizadas o siguen en curso y cuántos elementos has marcado en total.",
            },
            {
                title: "Cifras sin seguimiento",
                body: "Sin SDK de analítica, servicios de informes de fallos ni informes de uso enviados al desarrollador. Las estadísticas de tus listas permanecen en tu dispositivo.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Primeros pasos",
        heading: "Menos escribir. Más hacer.",
        intro: "Empieza con una plantilla preparada, pega una lista o crea una lista rápida. Elige lo que mejor te venga: no hace falta introducirlo todo elemento por elemento.",
        points: [
            {
                title: "Haz tuya una plantilla preparada",
                body: "Elige entre Senderismo, Fin de semana fuera, Compra de alimentos, Bolsa del gimnasio o Salir de casa. Se añadirá una copia a tus plantillas para que puedas cambiarle el nombre y quitar lo que no necesites.",
            },
            {
                title: "Escribe toda la lista de una vez",
                body: "La primera línea es el nombre de la lista; cada línea siguiente, un elemento. Añade la marca literal [optional] al final de una línea para que ese elemento sea opcional. Pega una lista que ya tengas y empieza.",
            },
            {
                title: "Pega en una lista existente",
                body: "Las viñetas y la numeración se eliminan automáticamente. Empieza una línea con 2x para indicar una cantidad de dos. Convierte una página de notas en elementos individuales de una sola vez.",
            },
            {
                title: "O empieza con una lista rápida",
                body: "No necesitas plantilla. Añade elementos sobre la marcha, dicta nombres en dispositivos compatibles o utiliza códigos de barras con nombres que hayas guardado. Las sugerencias proceden de nombres de elementos ya almacenados en tu dispositivo.",
            },
        ],
    },
    security: {
        eyebrow: "Seguridad",
        heading: "Ten claro qué compartes. Decide cómo protegerlo.",
        intro: "Antes de exportar o compartir, la aplicación explica qué se incluye y si está cifrado. Las copias de seguridad pueden contener fotos; las plantillas y listas compartidas, no.",
        note: "El bloqueo controla el acceso a la aplicación. El cifrado del almacenamiento protege los archivos guardados. Son ajustes independientes con objetivos distintos.",
        points: [
            {
                title: "Copias protegidas por tu frase de contraseña",
                body: "Argon2id deriva la clave y AES-GCM cifra la copia de seguridad, todo en tu dispositivo. Elige una frase de contraseña robusta y guárdala bien: el desarrollador no puede recuperarla por ti.",
            },
            {
                title: "Exportación sin cifrar, solo si la eliges",
                body: "¿Necesitas un archivo sin cifrar? Usa la opción independiente, claramente identificada, y confirma antes de guardar. Cualquiera con acceso al archivo puede leer su contenido.",
            },
            {
                title: "Desbloquea con tu dispositivo",
                body: "Abre la aplicación con tu huella, el reconocimiento facial o el código de bloqueo de tu dispositivo. El sistema operativo gestiona la autenticación; la aplicación nunca recibe tus datos de huella o rostro.",
            },
            {
                title: "Almacenamiento cifrado en Android e iOS",
                body: "Puedes cifrar las listas, notas y fotos guardadas. El material de claves se protege mediante Android Keystore o iOS Keychain.",
            },
        ],
    },
};

export default es;
