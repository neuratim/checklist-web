import type { LocaleDictionary } from "../../types/dictionary";

const tr: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Koşullu öğeler",
        heading: "Bazı şeyler her zaman değil, gerektiğinde şarttır.",
        intro: "Dizüstü bilgisayarınızı mı alıyorsunuz? Şarj cihazı da gerek. Bilgisayar evde kalacaksa şarj cihazı da kalabilir. Bir öğeyi Koşullu olarak ayarlayın; yalnızca belirlediğiniz kurallar sağlandığında zorunlu olsun. Farklı planlar için tek bir şablon yeter.",
        points: [
            {
                title: "Anlaşılır kurallar",
                body: "Bir öğe seçin ve işaretli mi, işaretsiz mi olması gerektiğini belirleyin. Uygulama, koşulun ne zaman geçerli olduğunu açıkça görebilmeniz için tamamını bir cümle olarak gösterir.",
            },
            {
                title: "VE, VEYA ve parantezler",
                body: "Kuralları VE ya da VEYA ile birleştirin, parantezlerle gruplayın. Örneğin şarj cihazı, Dizüstü bilgisayar işaretliyse VE Konaklamalı gezi veya İş seyahati öğelerinden en az biri işaretliyse zorunlu olsun.",
            },
            {
                title: "İşaretledikçe güncellenir",
                body: "Koşul sağlandığında ilgili öğe zorunlu hale gelir ve tamamlanma hesabına katılır. Koşul artık geçerli değilse öğe zorunlu olmaktan çıkar. Bitir seçeneği, o anda zorunlu olan tüm öğeler işaretlendiğinde kullanılabilir.",
            },
        ],
    },
    features: {
        eyebrow: "Özellikler",
        heading: "Bir kontrol listesinden beklediğiniz her şey. Gereksiz hiçbir şey yok.",
        items: [
            {
                title: "Tekrar kullanılabilen şablonlar",
                body: "Fotoğraflar, notlar, etiketler ve zorunlu, isteğe bağlı ya da koşullu öğeler ekleyin. Şablonu bir kez oluşturun; her ihtiyaç duyduğunuzda yeni bir kontrol listesi başlatın.",
            },
            {
                title: "Devam edenler ve geçmiş",
                body: "Bir listeyi yarım bırakıp daha sonra kaldığınız yerden devam edebilirsiniz. Liste, siz bitirene veya silene kadar devam edenler arasında kalır. Bitirilen listeler geçmişe taşınır.",
            },
            {
                title: "Esnek hatırlatıcılar",
                body: "Bir listeye başlamak veya devam eden bir listeyi bitirmek için hatırlatıcı kurun. Her gün, hafta ya da ay; hafta içi, seçtiğiniz günlerde veya belirlediğiniz gün ya da hafta aralıklarıyla tekrarlansın. Dilerseniz yalnızca bir kez hatırlatsın.",
            },
            {
                title: "Çevrimdışı çalışır",
                body: "İnternet bağlantısı olmadan kontrol listeleri oluşturun ve kullanın. Şablonlarınız, listeleriniz ve hatırlatıcılarınız cihazınızda saklanır; hesap veya bulut eşitlemesi gerekmez.",
            },
            {
                title: "Arama ve etiketler",
                body: "Şablonları etikete göre süzün, listeleri adlarıyla bulun. Koleksiyonunuz büyüse de aradığınıza ulaşmak için daha az kaydırın.",
            },
            {
                title: "iOS · Android · Web",
                body: "Telefonunuzda, tabletinizde veya tarayıcınızda aynı anlaşılır kontrol listesi deneyimi. Kullanılabilen özellikler platforma göre değişebilir.",
            },
            {
                title: "Koşullu öğeler",
                body: "Bir öğe yalnızca gerektiğinde zorunlu olsun. Örneğin şarj cihazı, dizüstü bilgisayarı alıyorsanız gerekli olabilir. Kuralları VE ve VEYA ile birleştirin; öğeleri işaretledikçe koşullar güncellensin.",
            },
            {
                title: "Ayrıntılara yer var",
                body: "Her öğeye birden fazla fotoğraf, açıklama, miktar ve kendi ölçü biriminizi ekleyin; örneğin 2 kg veya 3 paket. Öğeleri bölümlere ayırın, öğelerin ya da tüm bölümlerin sırasını sürükleyerek değiştirin.",
            },
            {
                title: "Uzun listeler, daha az kalabalık",
                body: "İşaretli öğeleri Tamamlananlar altında toplayın veya tamamen gizleyin. Sıradaki işe odaklanmak için Kalanlar ya da İsteğe bağlı filtresini kullanın.",
            },
            {
                title: "Birden fazla öğeyi birlikte düzenleyin",
                body: "Birkaç öğeyi seçip başka bir bölüme taşıyın, zorunlu ya da isteğe bağlı olarak ayarlayın veya birlikte silin.",
            },
            {
                title: "İlerlemeniz bir bakışta",
                body: "Desteklenen cihazlarda kalıcı bir bildirim ve ana ekran widget'ı ilerlemenizi gösterebilir. Uygulama kısayollarıyla en son kullandığınız dört şablona hızla ulaşabilirsiniz.",
            },
            {
                title: "Size uygun şekilde paylaşın",
                body: "Uygulamayı kullanan birine QR kodu veya .ntchk dosyası, diğer kişilere ise düz metin gönderin. Paylaşılan kontrol listelerine ve şablonlara fotoğraflar dahil edilmez.",
            },
            {
                title: "Şifreli yedekler",
                body: "Fotoğraflar dahil verilerinizi, belirlediğiniz parolayla korunan tek bir dosyada yedekleyin. Şifreleme cihazınızda Argon2id ve AES-GCM kullanılarak yapılır.",
            },
            {
                title: "Uygulama kilidi ve şifreleme",
                body: "Uygulamayı parmak iziniz, yüz tanıma veya cihazınızın kilit koduyla açın. Android ve iOS'ta uygulamanın sakladığı verileri de şifreleyebilirsiniz.",
            },
            {
                title: "Geçmişiniz, sizin kararınız",
                body: "Bitirdiğiniz listeleri süresiz, bir ay, üç ay veya bir yıl saklayın. Süresi dolan listeler, uygulamayı bir sonraki açışınızda silinir.",
            },
        ],
    },
    footer: {
        contact: "İletişim",
        mainSite: "NeuraTiM",
        privacyPolicy: "Gizlilik politikası",
        tagline: "Bağımsız geliştirildi. {year} · Uygulama hesabı yok, takip yok.",
    },
    freeSupport: {
        eyebrow: "Desteğinizle ücretsiz",
        githubSponsorsNote: "GitHub hesabı gerekir",
        heading: "%100 ücretsiz. Gizli koşul yok.",
        intro: "Tüm özellikler ücretsizdir. Destek ödemeleri memnuniyetle karşılanır, hiçbir zaman zorunlu değildir.",
        notHere: ["Reklam yok", "Abonelik yok", "Uygulama içi satın alma yok", "Ücretli paket yok"],
        pledge: {
            body: "Bu uygulamalar işinize yarıyorsa, bağış yapmayı düşünün. Kullanan herkes ayda bir dolar gönderse proje rahatlıkla ayakta kalır — ve her NeuraTiM uygulamasını ücretsiz, vicdanınız rahat kullanmaya devam edebilirsiniz; payınızın onları güncel tuttuğunu ve sıradakini finanse ettiğini bilerek.",
            heading: "Ayda bir dolar yeter",
        },
        quickTip: {
            amountLabel: "Tutar seçin",
            backButton: "Geri",
            cancelNote:
                "İstediğiniz zaman durdurabilirsiniz — tek bir e-posta yeterli, bağış bir sonraki ay çekilmeden durur.",
            customAmountLabel: "Farklı bir tutar (USD)",
            emailLabel: "Makbuz için e-posta",
            errorAmount: "1 ile 500 USD arasında bir tutar girin.",
            errorEmail: "Geçerli bir e-posta adresi girin.",
            errorGeneric: "Bir sorun oluştu. Lütfen tekrar deneyin.",
            heading: "Destek olun",
            monthlyPayButton: "Ayda {amount} bağışla",
            monthlySuccessBody:
                "Aylık bağışınız kuruldu ve ilk ödeme alındı. Bu uygulamaları ücretsiz tuttuğunuz için teşekkürler.",
            payButton: "{amount} öde",
            poweredBy:
                "Ödemeler Stripe üzerinden işlenir. Kartla veya kullanılabildiği yerlerde Apple Pay ya da Google Pay ile ödeme yapabilirsiniz. NeuraTiM hesabı gerekmez.",
            processingButton: "İşleniyor…",
            successBody:
                "Desteğiniz ulaştı. Uygulamanın ücretsiz kalmasına katkıda bulunduğunuz için teşekkürler!",
            successHeading: "Teşekkürler!",
            tabMonthly: "Aylık",
            tabOneOff: "Tek seferlik",
        },
        supportBody:
            "Kullanımı ücretsiz olsa da uygulamayı sürdürmenin bir maliyeti var. Geliştirme ve barındırma giderlerini ben karşılıyorum. App Store'da dağıtım için de normalde yıllık 99 USD olan Apple Developer Program üyeliği gerekiyor. Küçük bir destek ödemesi bu bağımsız projeye katkı sağlar. Hiçbir zaman zorunlu değil; her zaman çok değerli.",
        tipCta: "Destek gönderin",
        tipEmailLead: "Uygulamaya destek olmakla ilgili sorularınız mı var? Bana e-posta gönderin.",
        tipEmailSubject: "Bahşiş",
        waysToTip: "Projeyi desteklemenin diğer yolları:",
    },
    getApp: {
        eyebrow: "Uygulamayı edinin",
        heading: "Kontrol listeleriniz, seçtiğiniz platformda.",
        intro: "Web, Android veya iOS sürümünü seçin. Yayınlanan derlemeler kaynak koddan oluşturulur.",
        platforms: {
            android: {
                detail: "Ücretsiz Android sürümünü edinin. Güncel sürümün indirme veya teste katılma yönergelerini izleyin.",
                cta: "Android sürümünü edin",
            },
            ios: {
                detail: "iPhone ve iPad için App Store üzerinden ücretsiz olarak sunulur.",
                cta: "iOS sürümünü edin",
            },
            web: {
                detail: "Uygulamayı güncel bir tarayıcıda açın. Kurulum gerekmez.",
                cta: "Uygulamayı deneyin",
            },
        },
    },
    hero: {
        badges: ["Reklam yok", "Hesap yok", "Takip yok", "iOS · Android · Web"],
        ctaPrimary: "Uygulamayı deneyin",
        ctaSecondary: "Nasıl çalıştığını görün",
        headingHighlight: "ihtiyacınız olan her şeyi alın.",
        headingLead: "Yola çıkarken",
        subhead:
            "Valiz hazırlığı, ev işleri veya yaklaşan seyahatiniz için bir kontrol listesi oluşturun, ihtiyaç duydukça tekrar kullanın. Kullanımı ücretsizdir; listeleriniz çevrimdışı çalışır ve hesap açmanız gerekmez.",
    },
    howItWorks: {
        eyebrow: "Nasıl çalışır?",
        heading: "Üç basit adım. Hazır olduğunuzda başlayın.",
        intro: "Bir şablon oluşturun, listenizi adım adım tamamlayın ve gerektiğinde hatırlatıcı ekleyin. İşlerinizi halletmek için karmaşık ayarlarla uğraşmayın.",
        steps: [
            {
                eyebrow: "1. adım",
                title: "Şablon oluşturun",
                body: "Öğelere ad verin, isterseniz fotoğraf ekleyin ve her birini zorunlu, isteğe bağlı veya koşullu olarak ayarlayın. Şablonunuzu tekrar kullanın, sırasını değiştirin, kopyalayın ya da artık gerekmiyorsa arşivleyin.",
            },
            {
                eyebrow: "2. adım",
                title: "Çıkmadan önce kontrol edin",
                body: "Her öğenin adını, fotoğrafını ve onay kutusunu görün. Zorunlu öğelerin tamamı işaretlendiğinde listeyi bitirebilirsiniz. İsteğe bağlı öğeler bitirmeyi engellemez; koşullu öğeler yalnızca kuralları sağlandığında zorunlu olur.",
            },
            {
                eyebrow: "3. adım",
                title: "Hatırlatmayı uygulamaya bırakın",
                body: "Bir listeye başlamak veya devam eden bir listeyi bitirmek için hatırlatıcı ayarlayın. Bir kez hatırlatsın ya da her gün, hafta veya ay; hafta içi, seçtiğiniz günlerde veya birkaç günde ya da haftada bir tekrarlansın.",
            },
        ],
    },
    languageSwitcher: {
        label: "Dil",
    },
    nav: {
        closeMenu: "Menüyü kapat",
        features: "Özellikler",
        free: "Desteğinizle ücretsiz",
        getApp: "Uygulamayı edinin",
        howItWorks: "Nasıl çalışır?",
        label: "Bu sayfada",
        more: "Diğer bölümler",
        openMenu: "Menüyü aç",
        privacy: "Gizlilik",
        privacyPolicy: "Gizlilik politikası",
        tryIt: "Uygulamayı deneyin",
        security: "Güvenlik",
    },
    privacy: {
        badgeBody:
            "Kontrol listeleriniz, onları oluşturduğunuz cihazda veya tarayıcıda saklanır. Dışa aktarmaya ya da paylaşmaya siz karar verirsiniz.",
        badgeTitle: "Cihazınızda saklanır",
        eyebrow: "Gizlilik",
        heading: "Kontrol listeleriniz size ait kalır.",
        intro: "Uygulama hesabı, bulut eşitlemesi veya takip yoktur. Şablonlarınız, kontrol listeleriniz ve hatırlatıcılarınız geliştiricinin sunucularında değil, yerel olarak saklanır.",
        points: [
            "Hesap açmak veya giriş yapmak gerekmez",
            "Uygulamada analiz, takip aracı veya reklam SDK'sı yoktur",
            "Kontrol listeleriniz geliştiricinin sunucularında saklanmaz",
            "Fotoğraflar yerel olarak saklanır ve paylaşımlara dahil edilmez; yedeklere dahil edilir",
            "Yedekler varsayılan olarak belirlediğiniz parolayla şifrelenir",
            "İstatistikler kontrol listelerinizden cihazınızda hesaplanır",
        ],
        chips: ["Hesap yok", "İzleme yok", "Bulut eşitleme yok", "Şifreli yedekler"],
        policyLink: "Gizlilik politikasının tamamını okuyun",
    },
    privacyPolicy: {
        back: "Genel bakışa dön",
        contactHeading: "İletişim",
        contactIntro:
            "Bu politika veya NeuraTiM Checklist'te gizlilik hakkında sorularınız için şu adrese yazabilirsiniz:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist, kontrol listesi verilerinizi cihazınızda saklar. Uygulama hesabı, bulut eşitlemesi veya analiz hizmeti yoktur. Bu politika; yerel depolamayı, sizin başlattığınız paylaşımları ve dışa aktarmaları, isteğe bağlı cihaz hizmetlerini ve bu web sitesindeki verilerin ayrı olarak nasıl işlendiğini açıklar.",
        title: "Gizlilik politikası",
        sections: [
            {
                heading: "1. Bu politikanın kapsamı",
                paragraphs: [
                    "Bu politika, Android, iOS ve web üzerindeki NeuraTiM Checklist'i ve bu web sitesini kapsar. NeuraTiM, bağımsız geliştiricidir ve bu web sitesiyle veya doğrudan iletişimle bağlantılı olarak işlenen kişisel verilerden sorumlu veri sorumlusudur.",
                    "Uygulama ücretsizdir, reklam içermez ve ücretli paketi yoktur.",
                ],
            },
            {
                heading: "2. Kontrol listesi verileri ve isteğe bağlı geri bildirim",
                paragraphs: [
                    "Temel listeler hesap veya analiz olmadan çevrimdışı çalışır. İsteğe bağlı geri bildirim için internet gerekir; dikte sesi çevrimiçi işleyebilir.",
                ],
                points: [
                    "Kayıt için ad, e-posta adresi, telefon numarası veya hesap bilgileri; giriş sistemi yoktur",
                    "Takip amacıyla reklam kimlikleri, cihaz kimlikleri veya kullanıcı kimlikleri",
                    "Kesin veya yaklaşık konumunuz",
                    "Kişiler, takvimler, arama kayıtları, kısa mesajlar veya yüklü uygulamaların listesi",
                    "Geliştiriciye gönderilen kullanım analizleri, tanılama verileri veya çökme raporları; kontrol listesi istatistikleri yerel olarak hesaplanır",
                    "Uygulama içinde ödeme veya finans bilgileri; web sitesindeki isteğe bağlı destek ödemeleri aşağıda ayrıca açıklanır",
                ],
            },
            {
                heading: "3. Cihazınızda saklanan veriler",
                paragraphs: [
                    "Kontrol listelerinizi çevrimdışı kullanabilmeniz için uygulama aşağıdaki verileri yerel olarak saklar:",
                ],
                points: [
                    "Şablonlar, bölümler, etiketler ve öğeler; bunların adları, miktarları, açıklamaları, zorunlu veya isteğe bağlı durumları ve koşul kuralları",
                    "Devam eden listeler ve geçmişteki bitirilmiş listeler; işaretli öğeler ve notlar dahil",
                    "Öğelere eklediğiniz fotoğraflar",
                    "Planladığınız hatırlatıcılar ve metinleri",
                    "Dil ve açık ya da koyu tema gibi ayarlar",
                    "Taradığınız barkodlar ve onlara verdiğiniz adlar; uygulama bunları çevrimiçi bir ürün veritabanında aramaz",
                    "Geçmişi saklama, uygulama kilidi ve cihaz üzerinde şifreleme ayarları",
                ],
            },
            {
                heading: "4. Verilerinizin saklandığı yer",
                paragraphs: [
                    "Android ve iOS'ta veriler, işletim sisteminin uygulama yalıtımıyla korunan, uygulamaya özel depolama alanında saklanır.",
                    "Web sürümünde veriler, uygulamanın sitesi için tarayıcınızda saklanır. Bu sitenin verilerini temizlemek yerel kopyayı siler.",
                    "Uygulama bulut yedeklemesi veya eşitlemesi sunmaz. Dışa aktardığınız ya da paylaştığınız kopyalar ile cihazınızın veya tarayıcınızın yönettiği yedekler bu yerel depolamanın dışındadır.",
                ],
            },
            {
                heading: "5. İzinler ve cihaz hizmetleri",
                paragraphs: [
                    "İzinler, ihtiyaç duyan özellikler için kullanılır. Kullanılabilir izinleri cihaz ayarlarından yönetebilirsiniz; bir izni reddetmek ilgili özelliğin çalışmasını engelleyebilir.",
                ],
                points: [
                    "Kamera: QR kodu veya barkod tararken ya da bir öğenin fotoğrafını çekerken kullanılır. Tarama cihazda yapılır ve kamera kareleri saklanmaz. Öğeler için çektiğiniz fotoğraflar uygulamanın yerel depolamasına kaydedilir.",
                    "Fotoğraflar veya fotoğraf arşivi: Seçtiğiniz bir fotoğrafı eklemek için kullanılır. Seçilen fotoğraf uygulamanın depolamasına kopyalanır; uygulama fotoğraf arşivinizi yüklemez veya dizine eklemez.",
                    "Bildirimler: Planladığınız hatırlatıcılar ve desteklenen cihazlarda devam eden ilerlemeyi göstermek için kullanılır. Bu bildirimler, uzaktan anlık bildirim hizmeti kullanılmadan yerel olarak oluşturulur.",
                    "Kesin zamanlı alarmlar (Android): Hatırlatıcıları seçtiğiniz saate ayarlamak için kullanılır. Bildirimin ulaşması yine de sistem ayarlarına ve kısıtlamalarına bağlı olabilir.",
                    "Başlangıçta çalıştırma (Android): Cihazınız yeniden başladıktan sonra hatırlatıcıları yeniden planlamak için kullanılır.",
                    "Dosyalar: Dışa aktarılan dosyaları kaydetmek ve seçtiğiniz yedek ya da paylaşım dosyalarını açmak için kullanılır.",
                    "Mikrofon: Bir öğenin adını dikte ederken kullanılır. Cihazın konuşma hizmeti uygulamaya metin döndürür; uygulama ses kaydı saklamaz. Cihazınıza ve ayarlarınıza bağlı olarak konuşma hizmeti, kendi gizlilik koşulları kapsamında sesi çevrimiçi işleyebilir.",
                    "Biyometri veya cihaz kilit kodu: Uygulama kilidini açtığınızda kullanılır. Kontrolü işletim sistemi yapar; uygulama parmak izinizi veya yüz verilerinizi değil, yalnızca sonucu alır.",
                ],
            },
            {
                heading: "6. Paylaşım, dışa aktarma ve harici işleme",
                paragraphs: [
                    "Uygulama kontrol listelerinizi geliştiriciye otomatik olarak yüklemez. Paylaşmaya veya dışa aktarmaya siz karar verirsiniz. İsteğe bağlı dikte özelliği, yukarıda açıklandığı gibi cihazınızın konuşma hizmetini kullanır.",
                ],
                points: [
                    "Paylaşım, seçtiğiniz bir kanaldan gönderebilmeniz için QR kodu, .ntchk dosyası veya düz metin oluşturur. Paylaşılan şablon ve kontrol listelerine fotoğraflar dahil edilmez ve bunlar uygulama tarafından şifrelenmez.",
                    "Yedek dışa aktarıldığında dosya seçtiğiniz konuma kaydedilir veya cihazınızın paylaşım menüsü açılır. Yedekler fotoğrafları içerir. Hedef konumun korunması, seçtiğiniz hizmete bağlıdır.",
                    "İçe aktarma, sizin sağladığınız dosyayı veya kodu okur; kontrol listesi içeriği için internette arama yapmaz. Kullandığınız dosya sağlayıcısı, seçilen dosyayı indirebilir.",
                    "Mesajınız, isteğe bağlı e-posta adresiniz, uygulama sürümü, platform ve dil geliştiriciye gönderilir. Listeler ve fotoğraflar gönderilmez.",
                ],
            },
            {
                heading: "7. Verilerinizi saklama ve silme",
                paragraphs: [
                    "Geliştiricinin sunucularında, yerel olarak saklanan kontrol listelerinizin bir kopyası yoktur. Bu verileri uygulamadan yönetebilirsiniz. Daha önce dışa aktardığınız, paylaştığınız veya yedeklediğiniz kopyaları ayrıca silmeniz gerekir:",
                ],
                points: [
                    "Uygulamadan tek tek öğeleri, kontrol listelerini veya şablonları silin",
                    "Bitirilmiş listeleri kaldırmak için Geçmişi temizle seçeneğini kullanın",
                    "Mümkünse cihaz ayarlarından uygulamanın yerel depolamasını temizleyin veya uygulamayı verileriyle birlikte kaldırın; bu işlem harici yedekleri veya dışa aktarılmış dosyaları silmez",
                    "Web sürümünde, tarayıcınızdan uygulamanın site verilerini temizleyin",
                    "Bitirilmiş listeleri bir ay, üç ay veya bir yıl saklayın; daha eski listeler uygulamayı bir sonraki açışınızda silinir",
                ],
            },
            {
                heading: "8. Güvenlik",
                paragraphs: [
                    "Yerel veriler, işletim sisteminizin güvenlik önlemlerinden yararlanır. Etkinleştirildiğinde cihaz ekran kilidi ve depolama şifrelemesi ek koruma sağlar.",
                    "Geliştiricinin sunucularında merkezi bir kontrol listesi veritabanı yoktur. Bu, riski azaltır; ancak cihazınızı veya dışa aktardığınız dosyaları yetkisiz erişime karşı tamamen korumaz.",
                    "Yedekler varsayılan olarak seçtiğiniz parolayla, cihazınızda Argon2id anahtar türetme ve AES-GCM şifreleme kullanılarak şifrelenir. Uygulama kilidini de etkinleştirebilirsiniz. Android ve iOS'ta isteğe bağlı depolama şifrelemesi, Android Keystore veya iOS Keychain aracılığıyla güvenceye alınan anahtar malzemesiyle yerel verileri korur.",
                    "Şifrelenmemiş dışa aktarma, açıkça etiketlenmiş ve onay gerektiren ayrı bir işlemdir. Dosyaya erişen herkes içeriğini okuyabilir. Paylaşılan dosyalar, QR kodları ve düz metin de uygulama tarafından şifrelenmez ve fotoğraf içermez. Bunları yalnızca güvendiğiniz kanallardan paylaşın.",
                ],
            },
            {
                heading: "9. Çocuklar",
                paragraphs: [
                    "Uygulama, 13 yaşından veya bulundukları ülkede geçerli asgari yaştan küçük çocuklar için tasarlanmamıştır. Geliştirici, uygulama üzerinden çocukların kontrol listesi verilerini toplamaz.",
                ],
            },
            {
                heading: "10. Üçüncü taraf bileşenler ve hizmetler",
                paragraphs: [
                    "Uygulama; bildirim, tarama, fotoğraf ve dosya seçimi ile paylaşım için açık kaynaklı bileşenler kullanır. Bu özellikler, geliştiricinin işlettiği bir sunucu altyapısı yerine yerel işlemeyi ve sistem hizmetlerini kullanır.",
                    "Uygulama reklam, ilişkilendirme, analiz veya çökme raporlama SDK'sı içermez.",
                    "Diğer bileşenler şifreleme, güvenli anahtar depolama, biyometrik kilit açma, dikte ve widget'ları destekler. Dikte, 5. bölümde açıklandığı gibi çevrimiçi işlem yapabilen cihaz konuşma hizmetine dayanır.",
                ],
            },
            {
                heading: "11. Bu web sitesi",
                paragraphs: [
                    "Bu web sitesi uygulamayı tanıtır ve web sürümüne erişim sağlar. Web sitesi istekleri, isteğe bağlı ödemeler ve gönderdiğiniz mesajlar, yerel olarak saklanan kontrol listesi verilerinizden ayrıdır.",
                ],
                points: [
                    "Barındırma: Site Cloudflare kullanır. Bu hizmet, içerik sunumu ve güvenlik için IP adreslerini, tarayıcı bilgilerini ve istenen URL'leri işleyebilir. Bu işlem uygulama verilerinden ayrıdır ve kontrol listelerinizin yüklendiği anlamına gelmez.",
                    "Dil tercihi: Seçtiğiniz dil tarayıcı depolamasına kaydedilir ve sayfanın adresine yansır. Bir sayfa istediğinizde adres, barındırma sağlayıcısı tarafından görülebilir.",
                    "Destek ödemeleri: Destek tamamen isteğe bağlıdır. Ödemeler, kendi gizlilik koşulları kapsamında Stripe, Ko-fi, PayPal veya GitHub Sponsors üzerinden yapılır. Geliştirici, işlem bilgilerini ve sağlayıcının paylaştığı destekçi bilgilerini alabilir; ancak ödeme formundan kart numaranızın tamamını almaz.",
                    "Uygulamayı deneyin: Gömülü web uygulaması, yukarıda açıklandığı gibi kontrol listesi verilerini tarayıcınızda saklar. Uygulamanın yüklenmesi, barındırma hizmetine bir istek gönderilmesini gerektirir.",
                    "Harici bağlantılar ve e-posta: Diğer sitelerin kendi gizlilik politikaları vardır. Geliştiriciye e-posta gönderirseniz sorunuzun yanıtlanabilmesi için adresiniz ve mesajınız alınır.",
                ],
            },
            {
                heading: "12. Haklarınız",
                paragraphs: [
                    "Geçerli mevzuata bağlı olarak kişisel verilerinize erişme, bunları düzeltme veya silme, bir kopyasını alma, işlemeyi kısıtlama veya işlemeye itiraz etme ve veri koruma makamına şikâyette bulunma haklarınız olabilir. Bu haklar yalnızca uygulama içeriğine değil; web sitesi, ödeme veya e-posta verilerine de uygulanabilir.",
                    "Geliştirici kontrol listesi verilerinizi satmaz veya reklam için kullanmaz. Yalnızca cihazınızda saklanan listelere erişemez ve bunları silemez.",
                    "Gizlilik soruları veya geliştiricinin elinde bulunan verilerle ilgili talepler için aşağıdaki iletişim adresini kullanın.",
                ],
            },
            {
                heading: "13. Bu politikadaki değişiklikler",
                paragraphs: [
                    "Güncellemeler bu sayfada yeni bir tarihle yayımlanacaktır. Uygulamanın veri işleme biçimindeki değişiklikler ilgili sürüm notlarında da açıklanacaktır. Güncellenmiş bir politika, önceki veri toplamayı geriye dönük olarak yetkilendirmez.",
                ],
            },
        ],
        lastUpdated: "Son güncelleme: 10 Ekim 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Geçen cuma bitirildi",
            finishedTuesday: "Salı günü bitirildi",
            history: "Geçmiş",
            inProgress: "Devam edenler",
            startedToday: "Bugün başlatıldı",
            startSubtitle: "Bir şablon seçin, ilerledikçe öğeleri işaretleyin.",
            startTitle: "Kontrol listesi başlat",
        },
        common: {
            navChecklists: "Kontrol listeleri",
            navSchedule: "Zamanlama",
            navTemplates: "Şablonlar",
            templateCarryOn: "Kabin bagajı hazırlığı",
            templateGrocery: "Haftalık market alışverişi",
            templateHiking: "Hafta sonu doğa yürüyüşü",
            templatePreFlight: "Uçuş öncesi ev kontrolü",
        },
        condition: {
            addRule: "Kural ekle",
            and: "VE",
            headerItem: "Çadır dış tentesi",
            intro: "Bu öğe yalnızca şu durumda zorunludur:",
            isChecked: "işaretli",
            isNotChecked: "işaretli değil",
            requiredWhen: "Zorunlu olma koşulu",
            ruleLaptop: "Çadır",
            ruleTrip: "Konaklamalı gezi",
            save: "Kaydet",
            summary: "Çadır işaretli VE Konaklamalı gezi işaretli",
            title: "Koşul",
        },
        run: {
            conditional: "Koşullu",
            essentials: "Temel ihtiyaçlar",
            finish: "Bitir",
            firstAidKit: "İlk yardım çantası",
            headlamp: "Kafa feneri",
            optional: "İsteğe bağlı",
            rainCover: "Çadır dış tentesi",
            requiredLeftTwo: "2 zorunlu öğe kaldı",
            requiredNow: "Şu anda zorunlu",
            subtitle: "5 zorunlu öğeden 3'ü işaretli",
            tent: "Çadır",
            trailMap: "Parkur haritası",
            trekkingPoles: "Yürüyüş batonları",
            waterBottle: "Su şişesi ×2",
            doneHeading: "Tamamlananlar (3)",
            filterAll: "Tümü",
            filterOptional: "İsteğe bağlı",
            filterRemaining: "Kalanlar",
        },
        schedule: {
            doesNotRepeat: "Tekrarlanmaz",
            entry1Title: "Başlat: Hafta sonu doğa yürüyüşü",
            entry1When: "Cmt, 07.00",
            entry2Title: "Bitir: Haftalık market alışverişi",
            entry2When: "Bugün, 18.00",
            entry3Title: "Başlat: Uçuş öncesi ev kontrolü",
            entry3When: "28 Tem, 05.30",
            finishReminderLabel: "Bitirme hatırlatıcısı",
            newReminder: "Yeni hatırlatıcı",
            repeatsWeekly: "Her hafta tekrarlanır",
            startReminderLabel: "Başlatma hatırlatıcısı",
            repeatsWeekdays: "Hafta içi her gün (Pzt–Cum)",
        },
        templates: {
            allChip: "Tümü",
            carryOnSummary: "15 öğe · 10 zorunlu",
            grocerySummary: "9 öğe · 9 zorunlu",
            hikingSummary: "12 öğe · 8 zorunlu",
            newTemplate: "Yeni şablon",
            preFlightSummary: "6 öğe · 6 zorunlu",
            tagHome: "Ev",
            tagOutdoors: "Açık hava",
            tagTravel: "Seyahat",
        },
        backup: {
            badgeBody:
                "Şifreli yedek; şablonları, kontrol listelerini, notları, hatırlatıcıları ve fotoğrafları içerir ve parolanızla korunur. Şifrelenmemiş dışa aktarma ayrı bir seçenektir.",
            badgeNote:
                "Hesap yok, bulut eşitlemesi yok. Yedeği nereye kaydedeceğinize veya nerede paylaşacağınıza siz karar verirsiniz.",
            badgeTitle: "Yedeğin içeriği",
            exportEncrypted: "Şifreli yedeği dışa aktar",
            exportPlain: "Şifrelemeden dışa aktar",
            intro: "Verileriniz bu cihazda saklanır. Ayrı bir kopya tutmak için yedek dışa aktarın veya daha önce kaydettiğiniz bir yedeği geri yükleyin.",
            restore: "Yedekten geri yükle",
            title: "Yedekleme ve geri yükleme",
        },
        start: {
            quickBody: "Şablon gerekmez. Öğeleri ekleyin, ilerledikçe işaretleyin.",
            quickTitle: "Hızlı kontrol listesi",
            title: "Kontrol listesi başlat",
            writeBody: "Tüm listeyi yazın veya yapıştırın, ardından öğeleri işaretlemeye başlayın.",
            writeTitle: "Kontrol listesi yaz",
        },
        stats: {
            finishedRuns: "Bitirilmiş listeler",
            inProgress: "Devam edenler",
            itemsChecked: "İşaretlenen öğeler",
            missedHeading: "En sık işaretsiz bırakılanlar",
            missedHelp: "Kontrol listesi bitirildiğinde işaretsiz kalan öğeler.",
            missedItem1: "Yürüyüş batonları",
            missedItem1Count: "9 kez",
            missedItem2: "Kafa feneri",
            missedItem2Count: "6 kez",
            missedItem3: "Çadır dış tentesi",
            missedItem3Count: "2 kez",
            subtitle: "Kaydettiğiniz kontrol listelerinden bu cihazda hesaplanır.",
            templates: "Şablonlar",
            title: "İstatistikler",
        },
    },
    siteShareRoller: {
        hint: "Döndürmek için sürükleyin veya ← → tuşlarını kullanın. Paylaşmak için bir simgeye tıklayın.",
    },
    siteShare: {
        copied: "Bağlantı kopyalandı",
        copyLink: "Bağlantıyı kopyala",
        error: "Paylaşım başlatılamadı. Yeniden deneyin veya bağlantıyı kopyalayın.",
        heading: "Bu siteyi paylaşın",
        manualCopy: "Bu bağlantıyı elle kopyalayın",
        nativeShare: "Cihazınızla paylaşın",
        selectLabel: "Sosyal ağ veya paylaşım seçeneği",
        share: "Paylaş",
    },
    tryApp: {
        back: "Genel bakışa dön",
        dismissNotice: "Kapat",
        iframeTitle: "NeuraTiM Checklist — çalışan uygulama",
        intro: "Bu bir tanıtım görseli değil, çalışan web uygulamasıdır. Deneyin; kontrol listeleriniz bu tarayıcıda saklanır.",
        loading: "Uygulama yükleniyor…",
    },
    insights: {
        eyebrow: "İstatistikler",
        heading: "İlerlemeniz yalnızca size özel.",
        intro: "İstatistikler, etkinliğiniz izlenerek değil, kaydedilmiş listelerinizden cihazınızda hesaplanır. Bir listeyi sildiğinizde verileri de hesaplamadan çıkar. Ayrı bir analiz kaydı tutulmaz.",
        points: [
            {
                title: "Neleri atladığınızı görün",
                body: "Listeleri bitirdiğinizde en sık hangi öğelerin işaretsiz kaldığını görün. Sürekli atladığınız isteğe bağlı bir öğeye listenizde gerek olmayabilir. O anda zorunlu olan öğeler ise listeyi bitirmeden önce işaretlenmelidir.",
            },
            {
                title: "Genel tablo",
                body: "Kaç şablonunuz olduğunu, kaç listenin bittiğini veya devam ettiğini ve toplam kaç öğe işaretlediğinizi görün.",
            },
            {
                title: "Sayıların arkasında takip yok",
                body: "Analiz SDK'sı veya çökme raporlama hizmeti yoktur; geliştiriciye kullanım raporu gönderilmez. Kontrol listesi istatistikleriniz cihazınızda kalır.",
            },
        ],
    },
    quickStart: {
        eyebrow: "İlk adımlar",
        heading: "Daha az yazın. Daha çok iş halledin.",
        intro: "Hazır bir şablonla başlayın, bir liste yapıştırın veya hızlı bir kontrol listesi oluşturun. Size uyan yöntemi seçin; her şeyi tek tek eklemeniz gerekmez.",
        points: [
            {
                title: "Hazır şablonu kendinize uyarlayın",
                body: "Doğa yürüyüşü, Hafta sonu kaçamağı, Market alışverişi, Spor çantası veya Evden çıkarken şablonlarından birini seçin. Şablonlarınıza bir kopyası eklenir; adını değiştirip gereksiz öğeleri çıkarabilirsiniz.",
            },
            {
                title: "Tüm listeyi tek seferde yazın",
                body: "İlk satıra kontrol listesinin adını, sonraki her satıra bir öğe yazın. Bir öğeyi isteğe bağlı yapmak için satırın sonuna [optional] işaretini aynen ekleyin. Mevcut bir listeyi yapıştırıp hemen başlayabilirsiniz.",
            },
            {
                title: "Mevcut listeye yapıştırın",
                body: "Madde işaretleri ve numaralandırma otomatik olarak kaldırılır. Miktarı iki yapmak için satıra 2x ile başlayın. Bir sayfalık notu tek seferde ayrı öğelere dönüştürün.",
            },
            {
                title: "Ya da hızlı bir kontrol listesiyle başlayın",
                body: "Şablon gerekmez. Öğeleri ihtiyaç duydukça ekleyin, desteklenen cihazlarda adlarını dikte edin veya kaydettiğiniz adlarla barkodları kullanın. Öneriler, cihazınızda zaten kayıtlı olan öğe adlarından gelir.",
            },
        ],
    },
    security: {
        eyebrow: "Güvenlik",
        heading: "Ne paylaştığınızı bilin. Nasıl korunacağını seçin.",
        intro: "Dışa aktarmadan veya paylaşmadan önce uygulama, nelerin dahil olduğunu ve şifreleme uygulanıp uygulanmadığını açıklar. Yedekler fotoğraf içerebilir; paylaşılan şablon ve kontrol listeleri içermez.",
        note: "Uygulama kilidi, uygulamaya erişimi denetler. Depolama şifrelemesi, kayıtlı dosyaları korur. Bunlar farklı amaçlara hizmet eden ayrı ayarlardır.",
        points: [
            {
                title: "Parolanızla korunan yedekler",
                body: "Argon2id anahtarı türetir, AES-GCM yedeği şifreler; tüm işlem cihazınızda gerçekleşir. Güçlü bir parola seçin ve güvenli bir yerde saklayın. Geliştirici parolanızı kurtaramaz.",
            },
            {
                title: "Yalnızca siz seçerseniz şifrelenmemiş dışa aktarma",
                body: "Şifrelenmemiş bir dosya mı gerekiyor? Ayrı ve açıkça etiketlenmiş dışa aktarma seçeneğini kullanın, kaydetmeden önce onaylayın. Dosyaya erişen herkes içeriğini okuyabilir.",
            },
            {
                title: "Cihazınızın doğrulamasıyla açın",
                body: "Uygulamayı parmak iziniz, yüz tanıma veya cihazınızın kilit koduyla açın. Kimlik doğrulamayı işletim sistemi yapar; uygulama parmak izinizi veya yüz verilerinizi hiçbir zaman almaz.",
            },
            {
                title: "Android ve iOS'ta şifreli depolama",
                body: "Kaydedilmiş kontrol listelerini, notları ve fotoğrafları isteğe bağlı olarak şifreleyin. Anahtar malzemesi Android Keystore veya iOS Keychain kullanılarak korunur.",
            },
        ],
    },
};

export default tr;
