import type { LocaleDictionary } from "../../types/dictionary";

const pt: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Itens condicionais",
        heading: "Algumas coisas só fazem falta às vezes.",
        intro: "Vai levar o notebook? Então precisa do carregador. Vai deixá-lo em casa? O carregador também pode ficar. Defina um item como condicional e ele só será obrigatório quando suas regras forem atendidas. Um modelo para planos diferentes.",
        points: [
            {
                title: "Regras em linguagem simples",
                body: "Escolha um item e defina se ele precisa estar marcado ou desmarcado. O app mostra a condição completa em uma frase, para ficar claro quando ela se aplica.",
            },
            {
                title: "E, OU e parênteses",
                body: "Combine regras com E ou OU e use parênteses para agrupá-las. Por exemplo: o carregador é obrigatório quando Notebook está marcado E pelo menos um dos itens Viagem com pernoite OU Viagem a trabalho está marcado.",
            },
            {
                title: "Acompanha cada marcação",
                body: "Quando uma condição é atendida, o item se torna obrigatório e passa a contar para concluir a lista. Quando ela deixa de se aplicar, ele deixa de ser obrigatório. Você só pode concluir depois de marcar todos os itens obrigatórios naquele momento.",
            },
        ],
    },
    features: {
        eyebrow: "Recursos",
        heading: "Tudo o que uma lista precisa. Nada para atrapalhar.",
        items: [
            {
                title: "Modelos reutilizáveis",
                body: "Adicione fotos, notas, etiquetas e itens obrigatórios, opcionais ou condicionais. Crie um modelo uma vez e comece uma nova lista sempre que precisar.",
            },
            {
                title: "Em andamento e histórico",
                body: "Deixe uma lista pela metade e retome depois. Ela fica em andamento até você concluir ou excluir. As listas concluídas vão para o histórico.",
            },
            {
                title: "Lembretes do seu jeito",
                body: "Receba um lembrete para começar uma lista ou terminar uma em andamento. Uma única vez, todos os dias, semanas ou meses, de segunda a sexta, em dias escolhidos ou a cada certo número de dias ou semanas.",
            },
            {
                title: "Funciona offline",
                body: "Crie e use listas sem conexão com a internet. Modelos, listas e lembretes ficam salvos no seu dispositivo, sem conta e sem sincronização com a nuvem.",
            },
            {
                title: "Busca e etiquetas",
                body: "Filtre modelos por etiqueta e encontre listas pelo nome. Menos rolagem, mesmo quando sua coleção cresce.",
            },
            {
                title: "iOS · Android · Web",
                body: "Uma experiência clara e familiar no celular, no tablet ou no navegador. A disponibilidade de alguns recursos pode variar conforme a plataforma.",
            },
            {
                title: "Itens condicionais",
                body: "Torne um item obrigatório só quando fizer sentido: o carregador, por exemplo, quando você leva o notebook. Combine regras com E e OU; elas são atualizadas conforme você marca os itens.",
            },
            {
                title: "Espaço para os detalhes",
                body: "Adicione a cada item várias fotos, uma descrição e uma quantidade com a unidade que preferir, como 2 kg ou 3 pacotes. Organize os itens em seções e arraste para reordenar itens ou seções inteiras.",
            },
            {
                title: "Listas longas, sem bagunça",
                body: "Agrupe os itens marcados em Feito ou oculte todos eles. Use os filtros Pendentes e Opcionais para focar no que precisa agora.",
            },
            {
                title: "Edite vários itens de uma vez",
                body: "Selecione vários itens para movê-los para outra seção, defini-los como obrigatórios ou opcionais ou excluí-los juntos.",
            },
            {
                title: "Seu progresso de relance",
                body: "Em dispositivos compatíveis, uma notificação persistente e um widget na tela inicial podem mostrar seu progresso. Os atalhos do app dão acesso rápido aos quatro modelos usados mais recentemente.",
            },
            {
                title: "Compartilhe como preferir",
                body: "Envie um código QR ou arquivo .ntchk para quem tem o app, ou texto simples para qualquer outra pessoa. Listas e modelos compartilhados não incluem fotos.",
            },
            {
                title: "Backups criptografados",
                body: "Salve seus dados, incluindo fotos, em um único arquivo protegido por uma frase-senha que você escolhe. A criptografia usa Argon2id e AES-GCM no seu dispositivo.",
            },
            {
                title: "Bloqueio do app e criptografia",
                body: "Desbloqueie o app com sua impressão digital, o reconhecimento facial ou o código do dispositivo. No Android e no iOS, você também pode criptografar os dados salvos.",
            },
            {
                title: "Seu histórico, suas regras",
                body: "Guarde listas concluídas por tempo indeterminado, por um mês, três meses ou um ano. As mais antigas são removidas na próxima vez que você abrir o app.",
            },
        ],
    },
    footer: {
        contact: "Contato",
        mainSite: "NeuraTiM",
        privacyPolicy: "Política de privacidade",
        tagline: "Um projeto independente. {year} · Sem conta no app, sem rastreamento.",
    },
    freeSupport: {
        eyebrow: "Grátis, com o seu apoio",
        githubSponsorsNote: "Exige uma conta no GitHub",
        heading: "100% grátis. Sem pegadinhas.",
        intro: "Todos os recursos são gratuitos. Contribuições são bem-vindas, nunca obrigatórias.",
        notHere: ["Sem anúncios", "Sem assinatura", "Sem compras no app", "Sem versão premium"],
        pledge: {
            body: "Se estes aplicativos são úteis para você, considere fazer uma doação. Se cada pessoa que os usa enviasse um euro por mês, o projeto sobreviveria tranquilamente — e você poderia continuar usando qualquer aplicativo da NeuraTiM de graça e com a consciência limpa, sabendo que a sua parte paga para mantê-los atualizados e financia o que vem a seguir.",
            heading: "Um euro por mês é suficiente",
        },
        quickTip: {
            amountLabel: "Escolha um valor",
            backButton: "Voltar",
            cancelNote:
                "Você pode cancelar quando quiser: basta um e-mail e a doação para antes da cobrança seguinte.",
            customAmountLabel: "Outro valor (EUR)",
            emailLabel: "E-mail para o recibo",
            errorAmount: "Informe um valor entre 1 e 500 EUR.",
            errorEmail: "Informe um endereço de e-mail válido.",
            errorGeneric: "Algo deu errado. Tente novamente.",
            heading: "Apoie o projeto",
            monthlyPayButton: "Doar {amount} por mês",
            monthlySuccessBody:
                "Sua doação mensal está ativa e a primeira cobrança foi feita. Obrigado por manter estes aplicativos gratuitos.",
            payButton: "Pagar {amount}",
            poweredBy:
                "Os pagamentos são processados pelo Stripe. Pague com cartão ou, quando disponíveis, com Apple Pay ou Google Pay. Não precisa de conta NeuraTiM.",
            processingButton: "Processando…",
            successBody: "Sua contribuição chegou. Valeu por ajudar a manter o app gratuito!",
            successHeading: "Valeu pelo apoio!",
            tabMonthly: "Mensal",
            tabOneOff: "Uma vez",
        },
        supportBody:
            "Usar é grátis, mas manter tem um custo. Eu cubro o desenvolvimento e a hospedagem, e a distribuição pela App Store exige uma assinatura do Apple Developer Program, normalmente de 99 USD por ano. Uma pequena contribuição ajuda este projeto independente: nunca é obrigatória, sempre faz diferença.",
        tipCta: "Enviar uma contribuição",
        tipEmailLead: "Tem alguma dúvida sobre como apoiar o app? Me envie um e-mail.",
        tipEmailSubject: "Gorjeta",
        waysToTip: "Outras formas de apoiar o projeto:",
    },
    getApp: {
        eyebrow: "Baixe o app",
        heading: "Suas listas, na sua plataforma.",
        intro: "Escolha a versão web, Android ou iOS. Os pacotes de cada versão são gerados a partir do código-fonte.",
        platforms: {
            android: {
                detail: "Obtenha a versão gratuita para Android. Siga as instruções de download ou de acesso aos testes da versão atual.",
                cta: "Obter a versão para Android",
            },
            ios: {
                detail: "Disponível gratuitamente para iPhone e iPad na App Store.",
                cta: "Obter a versão para iOS",
            },
            web: {
                detail: "Abra o app em um navegador moderno. Sem instalar nada.",
                cta: "Experimente o app",
            },
        },
    },
    hero: {
        badges: ["Sem anúncios", "Sem conta", "Sem rastreamento", "iOS · Android · Web"],
        ctaPrimary: "Experimente o app",
        ctaSecondary: "Veja como funciona",
        headingHighlight: "tudo o que precisa.",
        headingLead: "Saia de casa com",
        subhead:
            "Monte uma lista para fazer as malas, cuidar da casa ou preparar a próxima viagem e reutilize quando precisar. Grátis, com listas disponíveis offline e sem criar uma conta.",
    },
    howItWorks: {
        eyebrow: "Como funciona",
        heading: "Três passos simples. E você já pode começar.",
        intro: "Crie um modelo, siga sua lista e adicione um lembrete quando for útil. Sem configurações complicadas no caminho do que você quer fazer.",
        steps: [
            {
                eyebrow: "Passo 1",
                title: "Crie um modelo",
                body: "Adicione nomes e, se precisar, fotos. Defina quais itens são obrigatórios, opcionais ou condicionais. Reutilize o modelo, mude a ordem, faça uma cópia ou arquive quando não precisar mais dele.",
            },
            {
                eyebrow: "Passo 2",
                title: "Confira antes de sair",
                body: "Veja o nome, a foto e a caixa de seleção de cada item. Você pode concluir quando todos os itens obrigatórios estiverem marcados. Os opcionais nunca impedem a conclusão; os condicionais só impedem quando suas regras se aplicam.",
            },
            {
                eyebrow: "Passo 3",
                title: "Deixe o app lembrar você",
                body: "Defina um lembrete para começar uma lista ou terminar uma em andamento. Uma única vez ou com repetição: diariamente, semanalmente, mensalmente, de segunda a sexta, em dias escolhidos ou a cada alguns dias ou semanas.",
            },
        ],
    },
    languageSwitcher: {
        label: "Idioma",
    },
    nav: {
        closeMenu: "Fechar menu",
        features: "Recursos",
        free: "Grátis, com o seu apoio",
        getApp: "Baixe o app",
        howItWorks: "Como funciona",
        label: "Nesta página",
        more: "Mais seções",
        openMenu: "Abrir menu",
        privacy: "Privacidade",
        privacyPolicy: "Política de privacidade",
        tryIt: "Experimente o app",
        security: "Segurança",
    },
    privacy: {
        badgeBody:
            "Suas listas ficam salvas no dispositivo ou navegador em que você as cria. Você decide se quer exportar ou compartilhar.",
        badgeTitle: "Salvo no seu dispositivo",
        eyebrow: "Privacidade",
        heading: "Suas listas continuam sendo suas.",
        intro: "Sem conta no app, sem sincronização com a nuvem e sem rastreamento. Seus modelos, listas e lembretes são salvos localmente, não nos servidores do desenvolvedor.",
        points: [
            "Sem conta nem login",
            "Sem análise de uso, rastreadores ou SDKs de publicidade no app",
            "Suas listas não são armazenadas nos servidores do desenvolvedor",
            "Fotos são salvas localmente e excluídas dos compartilhamentos; os backups as incluem",
            "Backups são criptografados por padrão com uma frase-senha que você escolhe",
            "Estatísticas são calculadas no dispositivo a partir das suas listas",
        ],
        policyLink: "Leia a política de privacidade completa",
    },
    privacyPolicy: {
        back: "Voltar à apresentação",
        contactHeading: "Contato",
        contactIntro:
            "Para dúvidas sobre esta política ou a privacidade no NeuraTiM Checklist, escreva para:",
        eyebrow: "NeuraTiM Checklist",
        intro: "O NeuraTiM Checklist armazena os dados das listas no seu dispositivo. Não há conta no app, sincronização com a nuvem nem serviço de análise. Esta política explica o armazenamento local, os compartilhamentos e as exportações que você inicia, os serviços opcionais do dispositivo e o tratamento separado de dados neste site.",
        title: "Política de privacidade",
        sections: [
            {
                heading: "1. A que esta política se aplica",
                paragraphs: [
                    "Esta política abrange o NeuraTiM Checklist no Android, no iOS e na web, além deste site. NeuraTiM é o desenvolvedor independente e o controlador responsável pelos dados pessoais tratados em conexão com este site ou com contatos diretos.",
                    "O app é gratuito, não contém anúncios e não tem versão paga.",
                ],
            },
            {
                heading: "2. Dados das listas e comentários opcionais",
                paragraphs: [
                    "As listas funcionam offline, sem conta ou análise. O envio opcional de sugestões precisa de internet; o ditado pode processar a voz online.",
                ],
                points: [
                    "Nomes, endereços de e-mail, telefones ou dados de conta para cadastro: não há login",
                    "Identificadores de publicidade, de dispositivo ou de usuário para rastreamento",
                    "Sua localização precisa ou aproximada",
                    "Contatos, calendários, registros de chamadas, mensagens de texto ou listas de apps instalados",
                    "Análises de uso, diagnósticos ou relatórios de falhas enviados ao desenvolvedor; as estatísticas das listas são calculadas localmente",
                    "Informações financeiras ou de pagamento dentro do app; as contribuições opcionais no site são explicadas separadamente abaixo",
                ],
            },
            {
                heading: "3. Dados salvos no dispositivo",
                paragraphs: ["Para que você possa usar as listas offline, o app armazena localmente:"],
                points: [
                    "Modelos, seções, etiquetas e itens, incluindo nomes, quantidades, descrições, condição obrigatória ou opcional e regras condicionais",
                    "Listas em andamento e listas concluídas no histórico, incluindo itens marcados e notas",
                    "Fotos anexadas aos itens",
                    "Lembretes agendados e seus textos",
                    "Configurações como idioma e tema claro ou escuro",
                    "Códigos de barras escaneados e os nomes que você atribui a eles; o app não os consulta em uma base de produtos online",
                    "Configurações de retenção do histórico, bloqueio do app e criptografia no dispositivo",
                ],
            },
            {
                heading: "4. Onde os dados são armazenados",
                paragraphs: [
                    "No Android e no iOS, os dados ficam no armazenamento privado do app, protegido pelo isolamento entre aplicativos do sistema operacional.",
                    "Na versão web, os dados são salvos no navegador para o site do app. Limpar os dados desse site remove a cópia local.",
                    "O app não oferece backup na nuvem nem sincronização. Cópias exportadas ou compartilhadas e backups gerenciados pelo dispositivo ou navegador ficam fora desse armazenamento local.",
                ],
            },
            {
                heading: "5. Permissões e serviços do dispositivo",
                paragraphs: [
                    "As permissões são usadas pelos recursos que precisam delas. Você pode gerenciar as permissões disponíveis nas configurações do dispositivo; negar uma pode impedir o funcionamento do recurso correspondente.",
                ],
                points: [
                    "Câmera: para escanear códigos QR ou de barras e fotografar itens. O escaneamento é processado no dispositivo sem guardar os quadros da câmera. Fotos tiradas para os itens são salvas no armazenamento local do app.",
                    "Fotos ou biblioteca de fotos: para anexar uma imagem que você selecionar. A imagem é copiada para o armazenamento do app, que não envia nem indexa sua biblioteca de fotos.",
                    "Notificações: para os lembretes agendados e, quando houver suporte, o progresso em andamento. São criadas localmente, sem serviço remoto de notificações push.",
                    "Alarmes exatos (Android): para agendar lembretes no horário escolhido. A entrega ainda pode depender de configurações e restrições do sistema.",
                    "Execução na inicialização (Android): para reagendar lembretes após reiniciar o dispositivo.",
                    "Arquivos: para salvar exportações e abrir arquivos de backup ou compartilhamento que você selecionar.",
                    "Microfone: quando você dita o nome de um item. O serviço de voz do dispositivo devolve o texto ao app, que não guarda gravações de áudio. Dependendo do dispositivo e das configurações, o serviço pode processar o áudio online conforme suas próprias regras de privacidade.",
                    "Biometria ou código do dispositivo: ao ativar o bloqueio do app. O sistema operacional faz a verificação; o app recebe o resultado, não os dados da sua impressão digital ou do seu rosto.",
                ],
            },
            {
                heading: "6. Compartilhamento, exportação e processamento externo",
                paragraphs: [
                    "O app não envia automaticamente suas listas ao desenvolvedor. Você decide se quer compartilhar ou exportar. O ditado opcional usa o serviço de voz do dispositivo descrito acima.",
                ],
                points: [
                    "O compartilhamento cria um código QR, arquivo .ntchk ou texto simples para você enviar pelo canal que escolher. Modelos e listas compartilhados não incluem fotos e não são criptografados pelo app.",
                    "A exportação de um backup salva um arquivo no local escolhido ou abre o menu de compartilhamento do dispositivo. Backups incluem fotos. A proteção do destino depende do serviço escolhido.",
                    "A importação lê um arquivo ou código fornecido por você; não busca conteúdo de listas na internet. O provedor de arquivos que você usar pode baixar o arquivo selecionado.",
                    "Sua mensagem, e-mail opcional, versão do app, plataforma e idioma são enviados ao desenvolvedor. Listas e fotos não são enviadas.",
                ],
            },
            {
                heading: "7. Retenção e exclusão de dados",
                paragraphs: [
                    "O desenvolvedor não mantém nos próprios servidores nenhuma cópia das suas listas salvas localmente. Você pode gerenciar esses dados no app. Cópias exportadas, compartilhadas ou salvas em backup anteriormente precisam ser excluídas separadamente:",
                ],
                points: [
                    "Exclua itens, listas ou modelos individuais no app",
                    "Use Limpar histórico para remover listas concluídas",
                    "Limpe o armazenamento local do app nas configurações do dispositivo, quando disponível, ou remova o app e seus dados; isso não exclui backups externos nem arquivos exportados",
                    "Na versão web, limpe os dados do site do app no navegador",
                    "Guarde listas concluídas por um mês, três meses ou um ano; as mais antigas serão excluídas na próxima abertura do app",
                ],
            },
            {
                heading: "8. Segurança",
                paragraphs: [
                    "Os dados locais se beneficiam das proteções de segurança do sistema operacional. O bloqueio de tela e a criptografia do armazenamento oferecem proteção adicional quando ativados.",
                    "Não há uma base central de listas nos servidores do desenvolvedor. Isso reduz a exposição, mas não torna seu dispositivo ou arquivos exportados imunes a acessos não autorizados.",
                    "Os backups são criptografados por padrão no dispositivo com uma frase-senha à sua escolha, derivação de chave Argon2id e criptografia AES-GCM. Você também pode ativar o bloqueio do app. No Android e no iOS, a criptografia opcional do armazenamento protege os dados locais, com o material de chave protegido por Android Keystore ou iOS Keychain.",
                    "A exportação sem criptografia é uma ação separada, identificada e sujeita a confirmação. Qualquer pessoa com acesso ao arquivo pode lê-lo. Arquivos compartilhados, códigos QR e texto simples também não são criptografados pelo app e não incluem fotos. Compartilhe apenas por canais de confiança.",
                ],
            },
            {
                heading: "9. Crianças",
                paragraphs: [
                    "O app não é destinado a crianças menores de 13 anos ou da idade mínima aplicável no país delas. O desenvolvedor não coleta dados de listas de crianças por meio do app.",
                ],
            },
            {
                heading: "10. Componentes e serviços de terceiros",
                paragraphs: [
                    "O app usa componentes de código aberto para notificações, escaneamento, seleção de fotos e arquivos e compartilhamento. Esses recursos usam processamento local e serviços do sistema, não um servidor operado pelo desenvolvedor.",
                    "O app não inclui SDKs de publicidade, atribuição, análise ou relatórios de falhas.",
                    "Outros componentes oferecem criptografia, armazenamento seguro de chaves, desbloqueio biométrico, ditado e widgets. O ditado depende do serviço de voz do dispositivo, que pode processar dados online, como explicado na seção 5.",
                ],
            },
            {
                heading: "11. Este site",
                paragraphs: [
                    "Este site apresenta o app e dá acesso à versão web. As solicitações ao site, os pagamentos opcionais e as mensagens enviadas são separados dos dados das listas salvos localmente.",
                ],
                points: [
                    "Hospedagem: o site usa Cloudflare, que pode processar endereços IP, informações do navegador e URLs solicitadas para entrega de conteúdo e segurança. Isso é separado dos dados do app e não significa que suas listas sejam enviadas.",
                    "Preferência de idioma: o idioma escolhido é salvo no navegador e aparece no endereço da página. Esse endereço pode ser visível para o provedor de hospedagem quando você solicita uma página.",
                    "Contribuições: o apoio é opcional. Os pagamentos usam Stripe, Ko-fi, PayPal ou GitHub Sponsors conforme suas próprias regras de privacidade. O desenvolvedor pode receber informações da transação e dados de quem contribui disponibilizados pelo provedor, mas não o número completo do cartão pelo formulário de pagamento.",
                    "Experimente o app: o app web incorporado armazena as listas no navegador conforme descrito acima. Carregar o app exige uma solicitação ao serviço de hospedagem.",
                    "Links externos e e-mail: outros sites têm suas próprias políticas de privacidade. Se você enviar um e-mail ao desenvolvedor, ele receberá seu endereço e sua mensagem para poder responder.",
                ],
            },
            {
                heading: "12. Seus direitos",
                paragraphs: [
                    "Dependendo da legislação aplicável, você pode ter direitos de acesso, correção, exclusão ou obtenção de uma cópia de dados pessoais, restrição ou oposição ao tratamento e reclamação a uma autoridade de proteção de dados. Esses direitos também podem abranger dados do site, pagamentos ou e-mails, não apenas o conteúdo do app.",
                    "O desenvolvedor não vende os dados das suas listas nem os usa para publicidade. Ele não pode acessar ou excluir listas armazenadas apenas no seu dispositivo.",
                    "Para dúvidas sobre privacidade ou solicitações referentes a dados que o desenvolvedor efetivamente possui, use o endereço de contato abaixo.",
                ],
            },
            {
                heading: "13. Alterações nesta política",
                paragraphs: [
                    "As atualizações serão publicadas nesta página com uma nova data. Mudanças no tratamento de dados pelo app também serão explicadas nas notas da versão correspondente. Uma política revisada não autoriza retroativamente uma coleta anterior de dados.",
                ],
            },
        ],
        lastUpdated: "Última atualização: 10 de outubro de 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Concluída na sexta passada",
            finishedTuesday: "Concluída na terça",
            history: "Histórico",
            inProgress: "Em andamento",
            startedToday: "Iniciada hoje",
            startSubtitle: "Escolha um modelo e marque os itens conforme avança.",
            startTitle: "Começar uma lista",
        },
        common: {
            navChecklists: "Listas",
            navSchedule: "Agenda",
            navTemplates: "Modelos",
            templateCarryOn: "Bagagem de mão",
            templateGrocery: "Compras da semana",
            templateHiking: "Trilha de fim de semana",
            templatePreFlight: "Revisão da casa antes do voo",
        },
        condition: {
            addRule: "Adicionar regra",
            and: "E",
            headerItem: "Sobreteto da barraca",
            intro: "Este item só é obrigatório quando:",
            isChecked: "está marcado",
            isNotChecked: "não está marcado",
            requiredWhen: "Obrigatório quando",
            ruleLaptop: "Barraca",
            ruleTrip: "Viagem com pernoite",
            save: "Salvar",
            summary: "O item “Barraca” está marcado E o item “Viagem com pernoite” está marcado",
            title: "Condição",
        },
        run: {
            conditional: "Condicional",
            essentials: "Essenciais",
            finish: "Concluir",
            firstAidKit: "Kit de primeiros socorros",
            headlamp: "Lanterna de cabeça",
            optional: "Opcional",
            rainCover: "Sobreteto da barraca",
            requiredLeftTwo: "Faltam 2 itens obrigatórios",
            requiredNow: "Obrigatório agora",
            subtitle: "3 de 5 itens obrigatórios marcados",
            tent: "Barraca",
            trailMap: "Mapa da trilha",
            trekkingPoles: "Bastões de caminhada",
            waterBottle: "Garrafa de água ×2",
            doneHeading: "Feito (3)",
            filterAll: "Todos",
            filterOptional: "Opcionais",
            filterRemaining: "Pendentes",
        },
        schedule: {
            doesNotRepeat: "Não se repete",
            entry1Title: "Começar: Trilha de fim de semana",
            entry1When: "Sáb., 7h",
            entry2Title: "Concluir: Compras da semana",
            entry2When: "Hoje, 18h",
            entry3Title: "Começar: Revisão da casa antes do voo",
            entry3When: "28 de jul., 5h30",
            finishReminderLabel: "Lembrete para concluir",
            newReminder: "Novo lembrete",
            repeatsWeekly: "Repete toda semana",
            startReminderLabel: "Lembrete para começar",
            repeatsWeekdays: "De segunda a sexta (seg.–sex.)",
        },
        templates: {
            allChip: "Todos",
            carryOnSummary: "15 itens · 10 obrigatórios",
            grocerySummary: "9 itens · 9 obrigatórios",
            hikingSummary: "12 itens · 8 obrigatórios",
            newTemplate: "Novo modelo",
            preFlightSummary: "6 itens · 6 obrigatórios",
            tagHome: "Casa",
            tagOutdoors: "Ao ar livre",
            tagTravel: "Viagem",
        },
        backup: {
            badgeBody:
                "Um backup criptografado inclui modelos, listas, notas, lembretes e fotos, protegidos pela sua frase-senha. Exportar sem criptografia é uma opção separada.",
            badgeNote:
                "Sem conta e sem sincronização com a nuvem. Você escolhe onde salvar ou compartilhar o backup.",
            badgeTitle: "O que vai no backup",
            exportEncrypted: "Exportar backup criptografado",
            exportPlain: "Exportar sem criptografia",
            intro: "Seus dados estão salvos aqui, neste dispositivo. Exporte um backup para manter outra cópia ou restaure um que salvou antes.",
            restore: "Restaurar backup",
            title: "Backup e restauração",
        },
        start: {
            quickBody: "Sem modelo. Adicione itens e marque conforme avança.",
            quickTitle: "Lista rápida",
            title: "Começar uma lista",
            writeBody: "Digite ou cole a lista inteira e comece a marcar os itens.",
            writeTitle: "Escrever uma lista",
        },
        stats: {
            finishedRuns: "Listas concluídas",
            inProgress: "Em andamento",
            itemsChecked: "Itens marcados",
            missedHeading: "Itens que mais ficam desmarcados",
            missedHelp: "Itens que ficaram desmarcados quando uma lista foi concluída.",
            missedItem1: "Bastões de caminhada",
            missedItem1Count: "9 vezes",
            missedItem2: "Lanterna de cabeça",
            missedItem2Count: "6 vezes",
            missedItem3: "Sobreteto da barraca",
            missedItem3Count: "2 vezes",
            subtitle: "Calculado neste dispositivo a partir das suas listas salvas.",
            templates: "Modelos",
            title: "Estatísticas",
        },
    },
    siteShareRoller: { hint: "Arraste ou use as teclas ← → para rodar. Clique num ícone para partilhar." },
    siteShare: {
        copied: "Link copiado",
        copyLink: "Copiar link",
        error: "Não foi possível iniciar o compartilhamento. Tente novamente ou copie o link.",
        heading: "Compartilhe este site",
        manualCopy: "Copie este link manualmente",
        nativeShare: "Compartilhar pelo seu dispositivo",
        selectLabel: "Rede social ou opção de compartilhamento",
        share: "Compartilhar",
    },
    tryApp: {
        back: "Voltar à apresentação",
        dismissNotice: "Fechar",
        iframeTitle: "NeuraTiM Checklist — app em funcionamento",
        intro: "Este é o app web funcionando de verdade, não uma imagem de demonstração. Experimente: suas listas são salvas neste navegador.",
        loading: "Carregando o app…",
    },
    insights: {
        eyebrow: "Estatísticas",
        heading: "Seu progresso, só para você.",
        intro: "As estatísticas são calculadas no seu dispositivo a partir das listas salvas, sem rastrear sua atividade. Ao excluir uma lista, seus dados deixam de entrar na conta. Nenhum registro analítico separado é mantido.",
        points: [
            {
                title: "Veja o que costuma ficar de fora",
                body: "Descubra quais itens ficam desmarcados com mais frequência quando você conclui uma lista. Um item opcional que você sempre pula talvez não precise estar ali. Os itens obrigatórios naquele momento precisam estar marcados para concluir.",
            },
            {
                title: "Uma visão geral",
                body: "Veja quantos modelos você tem, quantas listas estão concluídas ou em andamento e quantos itens marcou no total.",
            },
            {
                title: "Números sem rastreamento",
                body: "Sem SDK de análise, serviço de relatórios de falhas ou relatórios de uso enviados ao desenvolvedor. As estatísticas das listas ficam no seu dispositivo.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Primeiros passos",
        heading: "Menos digitação. Mais coisas feitas.",
        intro: "Comece com um modelo pronto, cole uma lista ou crie uma lista rápida. Escolha o jeito que funciona para você: não é preciso montar tudo item por item.",
        points: [
            {
                title: "Deixe um modelo pronto com a sua cara",
                body: "Escolha entre Trilha, Fim de semana fora, Compras de mercado, Bolsa da academia ou Sair de casa. Uma cópia entra nos seus modelos para você renomear e tirar o que não precisa.",
            },
            {
                title: "Escreva a lista inteira de uma vez",
                body: "Use a primeira linha para o nome da lista e cada linha seguinte para um item. Acrescente o marcador literal [optional] ao fim da linha para tornar o item opcional. Cole uma lista que já tem e comece.",
            },
            {
                title: "Cole em uma lista existente",
                body: "Marcadores e numeração são removidos automaticamente. Comece uma linha com 2x para definir a quantidade como dois. Transforme uma página de anotações em itens separados de uma só vez.",
            },
            {
                title: "Ou comece com uma lista rápida",
                body: "Não precisa de modelo. Adicione itens conforme precisar, dite nomes em dispositivos compatíveis ou use códigos de barras com nomes já salvos. As sugestões vêm dos nomes de itens que já estão no seu dispositivo.",
            },
        ],
    },
    security: {
        eyebrow: "Segurança",
        heading: "Saiba o que está compartilhando. Escolha como proteger.",
        intro: "Antes de exportar ou compartilhar, o app explica o que está incluído e se está criptografado. Backups podem incluir fotos; modelos e listas compartilhados não.",
        note: "O bloqueio controla o acesso ao app. A criptografia do armazenamento protege os arquivos salvos. São configurações separadas, com funções diferentes.",
        points: [
            {
                title: "Backups protegidos pela sua frase-senha",
                body: "Argon2id deriva a chave e AES-GCM criptografa o backup, tudo no seu dispositivo. Escolha uma frase-senha forte e guarde com segurança: o desenvolvedor não pode recuperá-la para você.",
            },
            {
                title: "Exportação sem criptografia, só por escolha",
                body: "Precisa de um arquivo sem criptografia? Use a opção separada e claramente identificada e confirme antes de salvar. Qualquer pessoa com acesso ao arquivo pode ler o conteúdo.",
            },
            {
                title: "Desbloqueie com seu dispositivo",
                body: "Abra o app com sua impressão digital, o reconhecimento facial ou o código do dispositivo. O sistema operacional cuida da autenticação; o app nunca recebe dados da sua impressão digital ou do seu rosto.",
            },
            {
                title: "Armazenamento criptografado no Android e no iOS",
                body: "Você pode criptografar listas, notas e fotos salvas. O material de chave é protegido usando Android Keystore ou iOS Keychain.",
            },
        ],
    },
};

export default pt;
