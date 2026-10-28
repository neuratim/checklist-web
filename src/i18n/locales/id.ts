import type { LocaleDictionary } from "../../types/dictionary";

const id: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Item bersyarat",
        heading: "Ada yang wajib hanya saat dibutuhkan.",
        intro: "Membawa laptop? Pengisi dayanya juga perlu. Laptop ditinggal di rumah? Pengisi dayanya tak perlu dibawa. Atur item sebagai Bersyarat agar hanya menjadi wajib saat aturan yang kamu tentukan terpenuhi. Satu templat untuk berbagai rencana.",
        points: [
            {
                title: "Aturan yang mudah dipahami",
                body: "Pilih sebuah item, lalu tentukan apakah item itu harus dicentang atau tidak dicentang. Aplikasi menampilkan seluruh syarat sebagai kalimat agar jelas kapan aturan tersebut berlaku.",
            },
            {
                title: "DAN, ATAU, dan tanda kurung",
                body: "Gabungkan aturan dengan DAN atau ATAU, lalu kelompokkan dengan tanda kurung. Misalnya, pengisi daya menjadi wajib jika item “Laptop” dicentang DAN setidaknya salah satu item “Perjalanan dengan menginap” atau “Perjalanan dinas” dicentang.",
            },
            {
                title: "Langsung berubah saat kamu mencentang",
                body: "Saat syarat terpenuhi, item menjadi wajib dan diperhitungkan dalam penyelesaian. Jika syaratnya tak lagi berlaku, item tak lagi wajib. Tombol Selesai hanya tersedia setelah semua item yang saat itu wajib sudah dicentang.",
            },
        ],
    },
    features: {
        eyebrow: "Fitur",
        heading: "Semua yang kamu butuhkan dari daftar periksa. Tanpa yang mengganggu.",
        items: [
            {
                title: "Templat yang bisa dipakai ulang",
                body: "Tambahkan foto, catatan, tag, serta item wajib, opsional, atau bersyarat. Buat templat sekali, lalu mulai daftar periksa baru kapan pun diperlukan.",
            },
            {
                title: "Daftar berjalan dan riwayat",
                body: "Tinggalkan daftar yang belum selesai dan lanjutkan nanti. Daftar tetap berstatus Berjalan sampai kamu menyelesaikan atau menghapusnya. Daftar yang selesai masuk ke riwayat.",
            },
            {
                title: "Pengingat yang fleksibel",
                body: "Pasang pengingat untuk memulai daftar atau menyelesaikan daftar yang masih berjalan. Ulangi setiap hari, minggu, bulan, pada hari kerja, hari pilihan, atau tiap beberapa hari atau minggu. Pengingat sekali saja juga bisa.",
            },
            {
                title: "Bisa dipakai tanpa internet",
                body: "Buat dan gunakan daftar periksa tanpa koneksi internet. Templat, daftar, dan pengingat disimpan di perangkatmu, tanpa akun atau sinkronisasi cloud.",
            },
            {
                title: "Pencarian dan tag",
                body: "Saring templat berdasarkan tag dan cari daftar berdasarkan nama. Koleksi boleh bertambah, tapi kamu tak perlu terus menggulir untuk menemukan yang dicari.",
            },
            {
                title: "iOS · Android · Web",
                body: "Daftar periksa yang jelas dan mudah digunakan, baik di ponsel, tablet, maupun browser. Ketersediaan fitur dapat berbeda menurut platform.",
            },
            {
                title: "Item bersyarat",
                body: "Jadikan item wajib hanya saat dibutuhkan, misalnya pengisi daya saat kamu membawa laptop. Gabungkan aturan dengan DAN dan ATAU; aturan diperbarui saat kamu mencentang item.",
            },
            {
                title: "Detail juga kebagian tempat",
                body: "Tambahkan beberapa foto, deskripsi, jumlah, dan satuan pilihanmu pada setiap item, seperti 2 kg atau 3 bungkus. Kelompokkan item ke dalam bagian, lalu seret untuk mengurutkan item atau seluruh bagian.",
            },
            {
                title: "Daftar panjang tetap rapi",
                body: "Kelompokkan item yang sudah dicentang di bagian Sudah dicentang atau sembunyikan semuanya. Gunakan filter Tersisa atau Opsional untuk fokus pada yang perlu dilakukan berikutnya.",
            },
            {
                title: "Edit beberapa item sekaligus",
                body: "Pilih beberapa item untuk dipindahkan ke bagian lain, dijadikan wajib atau opsional, atau dihapus sekaligus.",
            },
            {
                title: "Lihat progres sekilas",
                body: "Pada perangkat yang mendukungnya, notifikasi tetap dan widget layar utama dapat menampilkan progresmu. Pintasan aplikasi memudahkan akses ke empat templat yang terakhir digunakan.",
            },
            {
                title: "Bagikan dengan caramu",
                body: "Kirim kode QR atau file .ntchk kepada pengguna aplikasi, atau teks biasa kepada siapa saja. Daftar periksa dan templat yang dibagikan tidak menyertakan foto.",
            },
            {
                title: "Cadangan terenkripsi",
                body: "Cadangkan data, termasuk foto, dalam satu file yang dilindungi frasa sandi pilihanmu. Enkripsi dilakukan di perangkatmu dengan Argon2id dan AES-GCM.",
            },
            {
                title: "Kunci aplikasi",
                body: "Buka aplikasi dengan sidik jari, pengenalan wajah, atau kode sandi perangkatmu. Pemeriksaan dilakukan oleh sistem operasi.",
            },
            {
                title: "Atur sendiri riwayatmu",
                body: "Simpan daftar yang sudah selesai selamanya, atau selama satu bulan, tiga bulan, atau satu tahun. Daftar yang melewati batas waktu akan dihapus saat kamu membuka aplikasi berikutnya.",
            },
        ],
    },
    footer: {
        contact: "Kontak",
        mainSite: "NeuraTiM",
        privacyPolicy: "Kebijakan privasi",
        tagline: "Dikembangkan secara independen. {year} · Tanpa akun aplikasi, tanpa pelacakan.",
    },
    freeSupport: {
        eyebrow: "Gratis, dengan dukunganmu",
        githubSponsorsNote: "Memerlukan akun GitHub",
        heading: "100% gratis. Tanpa syarat tersembunyi.",
        intro: "Semua fitur gratis. Dukungan dana sangat dihargai, tetapi tidak pernah diwajibkan.",
        notHere: ["Tanpa iklan", "Tidak perlu berlangganan", "Tanpa pelacakan", "Tanpa paket premium"],
        pledge: {
            body: "Kalau aplikasi-aplikasi ini berguna bagi Anda, pertimbangkan untuk berdonasi. Andai setiap orang yang memakainya mengirim satu dolar sebulan, proyek ini akan bertahan dengan nyaman — dan Anda bisa terus memakai setiap aplikasi NeuraTiM secara gratis dengan hati nurani yang tenang, tahu bahwa bagian Anda membayar biaya menjaganya tetap mutakhir dan mendanai apa pun yang menyusul.",
            heading: "Satu dolar sebulan sudah cukup",
        },
        quickTip: {
            amountLabel: "Pilih jumlah",
            backButton: "Kembali",
            cancelNote:
                "Bisa dibatalkan kapan saja — cukup satu email, dan donasi berhenti sebelum bulan berikutnya ditagih.",
            customAmountLabel: "Jumlah lain (USD)",
            emailLabel: "Email untuk tanda terima",
            errorAmount: "Masukkan jumlah antara 1 dan 500 USD.",
            errorEmail: "Masukkan alamat email yang valid.",
            errorGeneric: "Terjadi kesalahan. Silakan coba lagi.",
            heading: "Beri dukungan",
            monthlyPayButton: "Donasi {amount} per bulan",
            monthlySuccessBody:
                "Donasi bulanan Anda sudah aktif dan penagihan pertama berhasil. Terima kasih telah menjaga aplikasi-aplikasi ini tetap gratis.",
            payButton: "Bayar {amount}",
            poweredBy:
                "Pembayaran diproses oleh Stripe. Bayar dengan kartu, atau dengan Apple Pay atau Google Pay jika tersedia. Tidak perlu akun NeuraTiM.",
            processingButton: "Memproses…",
            successBody:
                "Dukunganmu sudah diterima. Terima kasih sudah membantu menjaga aplikasi ini tetap gratis!",
            successHeading: "Terima kasih!",
            tabMonthly: "Bulanan",
            tabOneOff: "Sekali",
        },
        supportBody:
            "Gratis digunakan bukan berarti tanpa biaya perawatan. Saya menanggung biaya pengembangan dan hosting, sementara distribusi di App Store memerlukan keanggotaan Apple Developer Program, biasanya 99 USD per tahun. Dukungan kecil sekalipun membantu proyek independen ini. Tidak pernah wajib, selalu berarti.",
        tipCta: "Kirim dukungan",
        tipEmailLead: "Ada pertanyaan tentang mendukung aplikasi ini? Kirim email kepada saya.",
        tipEmailSubject: "Tip",
        waysToTip: "Cara lain untuk mendukung proyek:",
    },
    getApp: {
        eyebrow: "Dapatkan aplikasi",
        heading: "Daftar periksamu, di platform pilihanmu.",
        intro: "Pilih versi web, Android, atau iOS. Build rilis dibuat dari kode sumber.",
        platforms: {
            android: {
                detail: "Dapatkan versi Android gratis. Ikuti petunjuk unduhan atau keikutsertaan dalam pengujian untuk rilis saat ini.",
                cta: "Dapatkan versi Android",
            },
            ios: {
                detail: "Tersedia gratis untuk iPhone dan iPad di App Store.",
                cta: "Dapatkan versi iOS",
            },
            web: {
                detail: "Buka aplikasi di browser modern. Tidak perlu memasang apa pun.",
                cta: "Coba aplikasi",
            },
        },
    },
    hero: {
        badges: ["Tanpa iklan", "Tanpa akun", "Tanpa pelacakan", "iOS · Android · Web"],
        ctaPrimary: "Coba aplikasi",
        ctaSecondary: "Lihat cara kerjanya",
        headingHighlight: "semua yang kamu butuhkan.",
        headingLead: "Berangkat dengan",
        subhead:
            "Buat daftar periksa untuk berkemas, pekerjaan rumah, atau perjalanan berikutnya, lalu gunakan kembali kapan pun perlu. Gratis digunakan, daftar bisa diakses tanpa internet, dan tak perlu membuat akun.",
    },
    howItWorks: {
        eyebrow: "Cara kerja",
        heading: "Tiga langkah mudah. Mulai kapan saja.",
        intro: "Buat templat, kerjakan daftar periksamu, dan tambahkan pengingat bila perlu. Tak ada pengaturan rumit yang menghalangi pekerjaanmu.",
        steps: [
            {
                eyebrow: "Langkah 1",
                title: "Buat templat",
                body: "Beri nama item, tambahkan foto bila perlu, lalu atur setiap item sebagai wajib, opsional, atau bersyarat. Gunakan kembali templatmu, ubah urutannya, buat salinan, atau arsipkan saat tak lagi diperlukan.",
            },
            {
                eyebrow: "Langkah 2",
                title: "Periksa sebelum berangkat",
                body: "Lihat nama, foto, dan kotak centang setiap item. Daftar dapat diselesaikan setelah semua item wajib dicentang. Item opsional tidak pernah menghalangi penyelesaian; item bersyarat hanya wajib saat aturannya terpenuhi.",
            },
            {
                eyebrow: "Langkah 3",
                title: "Biar aplikasi yang mengingatkan",
                body: "Atur pengingat untuk memulai daftar atau menyelesaikan daftar yang masih berjalan. Pilih pengingat sekali saja, atau ulangi setiap hari, minggu, bulan, pada hari kerja, hari pilihan, atau tiap beberapa hari atau minggu.",
            },
        ],
    },
    languageSwitcher: {
        label: "Bahasa",
    },
    nav: {
        closeMenu: "Tutup menu",
        features: "Fitur",
        free: "Gratis, dengan dukunganmu",
        getApp: "Dapatkan aplikasi",
        howItWorks: "Cara kerja",
        label: "Di halaman ini",
        more: "Bagian lainnya",
        openMenu: "Buka menu",
        privacy: "Privasi",
        privacyPolicy: "Kebijakan privasi",
        tryIt: "Coba aplikasi",
        security: "Keamanan",
    },
    privacy: {
        badgeBody:
            "Daftar periksamu disimpan di perangkat atau browser tempat kamu membuatnya. Kamu yang memutuskan apakah akan mengekspor atau membagikannya.",
        badgeTitle: "Disimpan di perangkatmu",
        eyebrow: "Privasi",
        heading: "Daftar periksamu tetap milikmu.",
        intro: "Tanpa akun aplikasi, sinkronisasi cloud, atau pelacakan. Templat, daftar periksa, dan pengingat disimpan secara lokal, bukan di server pengembang.",
        points: [
            "Tak perlu akun atau login",
            "Tanpa analitik, pelacak, atau SDK iklan di dalam aplikasi",
            "Daftar periksamu tidak disimpan di server pengembang",
            "Foto disimpan secara lokal dan tidak ikut dibagikan; cadangan menyertakannya",
            "Secara default, cadangan dienkripsi dengan frasa sandi pilihanmu",
            "Statistik dihitung dari daftar periksa di perangkatmu",
        ],
        policyLink: "Baca kebijakan privasi lengkap",
    },
    privacyPolicy: {
        back: "Kembali ke ringkasan",
        contactHeading: "Kontak",
        contactIntro: "Untuk pertanyaan tentang kebijakan ini atau privasi di NeuraTiM Checklist, hubungi:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist menyimpan data daftar periksamu di perangkatmu. Tidak ada akun aplikasi, sinkronisasi cloud, atau layanan analitik. Kebijakan ini menjelaskan penyimpanan lokal, pembagian dan ekspor yang kamu lakukan, layanan perangkat opsional, serta penanganan data di situs ini yang dilakukan secara terpisah.",
        title: "Kebijakan privasi",
        sections: [
            {
                heading: "1. Cakupan kebijakan ini",
                paragraphs: [
                    "Kebijakan ini berlaku untuk NeuraTiM Checklist di Android, iOS, dan web, serta situs ini. NeuraTiM adalah pengembang independen dan pengendali yang bertanggung jawab atas data pribadi yang diproses terkait situs ini atau komunikasi langsung.",
                    "Aplikasi ini gratis, tidak memuat iklan, dan tidak memiliki paket berbayar. Dukungan opsional dalam aplikasi, yang dijelaskan di bagian 6, tidak membuka fitur apa pun.",
                ],
            },
            {
                heading: "2. Data daftar periksa dan masukan opsional",
                paragraphs: [
                    "Daftar periksa utama bekerja luring tanpa akun atau analitik. Masukan opsional memerlukan internet; dikte dapat memproses suara secara daring.",
                ],
                points: [
                    "Nama, alamat email, nomor telepon, atau detail akun untuk pendaftaran; tidak ada proses login",
                    "ID iklan, ID perangkat, atau ID pengguna untuk pelacakan",
                    "Lokasi tepat atau perkiraan lokasimu",
                    "Kontak, kalender, riwayat panggilan, SMS, atau daftar aplikasi yang terpasang",
                    "Analitik penggunaan, diagnostik, atau laporan crash yang dikirim kepada pengembang; statistik daftar periksa dihitung secara lokal",
                    "Informasi pembayaran atau keuangan; dukungan opsional dalam aplikasi dibayar melalui App Store atau Google Play, dan dukungan dana opsional melalui situs dijelaskan secara terpisah di bawah",
                ],
            },
            {
                heading: "3. Data yang disimpan di perangkatmu",
                paragraphs: [
                    "Aplikasi menyimpan data berikut secara lokal agar daftar periksa bisa digunakan tanpa internet:",
                ],
                points: [
                    "Templat, bagian, tag, dan item, termasuk nama, jumlah, deskripsi, status wajib atau opsional, serta aturan bersyarat",
                    "Daftar periksa yang masih berjalan dan daftar selesai di riwayat, termasuk item yang dicentang dan catatan",
                    "Foto yang kamu lampirkan pada item",
                    "Pengingat yang kamu jadwalkan beserta teksnya",
                    "Pengaturan seperti bahasa dan tema terang atau gelap",
                    "Kode batang yang dipindai dan nama yang kamu berikan; aplikasi tidak mencarinya di basis data produk online",
                    "Pengaturan lama penyimpanan riwayat dan kunci aplikasi",
                ],
            },
            {
                heading: "4. Tempat penyimpanan data",
                paragraphs: [
                    "Di Android dan iOS, data disimpan di ruang penyimpanan pribadi aplikasi yang dilindungi oleh isolasi aplikasi pada sistem operasi.",
                    "Pada versi web, data disimpan di browsermu untuk situs aplikasi. Menghapus data situs tersebut akan menghapus salinan lokalnya.",
                    "Aplikasi tidak menyediakan pencadangan atau sinkronisasi cloud. Salinan yang kamu ekspor atau bagikan, serta cadangan yang dikelola perangkat atau browsermu, berada di luar penyimpanan lokal ini.",
                ],
            },
            {
                heading: "5. Izin dan layanan perangkat",
                paragraphs: [
                    "Izin digunakan untuk fitur yang memerlukannya. Kamu dapat mengelola izin yang tersedia di pengaturan perangkat; menolak suatu izin dapat membuat fitur terkait tidak berfungsi.",
                ],
                points: [
                    "Kamera—digunakan saat memindai kode QR atau kode batang, atau mengambil foto item. Pemindaian diproses di perangkat tanpa menyimpan bingkai kamera. Foto yang diambil untuk item disimpan di penyimpanan lokal aplikasi.",
                    "Foto atau galeri foto—digunakan untuk melampirkan gambar yang kamu pilih. Gambar tersebut disalin ke penyimpanan aplikasi; aplikasi tidak mengunggah atau mengindeks galeri fotomu.",
                    "Notifikasi—digunakan untuk pengingat terjadwal dan, jika didukung, progres yang sedang berjalan. Notifikasi dibuat secara lokal, tanpa layanan push jarak jauh.",
                    "Alarm tepat waktu (Android)—digunakan untuk menjadwalkan pengingat pada waktu yang kamu pilih. Penyampaiannya tetap dapat dipengaruhi pengaturan dan pembatasan sistem.",
                    "Jalankan saat startup (Android)—digunakan untuk menjadwalkan ulang pengingat setelah perangkat dinyalakan ulang.",
                    "File—digunakan untuk menyimpan hasil ekspor dan membuka file cadangan atau file berbagi yang kamu pilih.",
                    "Mikrofon—digunakan saat mendiktekan nama item. Layanan pengenalan suara perangkat mengirimkan teks ke aplikasi, dan aplikasi tidak menyimpan rekaman audio. Bergantung pada perangkat dan pengaturannya, layanan pengenalan suara dapat memproses audio secara online berdasarkan ketentuan privasinya sendiri.",
                    "Biometrik atau kode sandi perangkat—digunakan saat kamu mengaktifkan kunci aplikasi. Sistem operasi melakukan pemeriksaan; aplikasi menerima hasilnya, bukan data sidik jari atau wajahmu.",
                ],
            },
            {
                heading: "6. Berbagi, ekspor, dan pemrosesan eksternal",
                paragraphs: [
                    "Aplikasi tidak otomatis mengunggah daftar periksamu kepada pengembang. Kamu yang memutuskan untuk membagikan atau mengekspornya. Fitur dikte opsional menggunakan layanan pengenalan suara perangkat seperti dijelaskan di atas.",
                ],
                points: [
                    "Berbagi menghasilkan kode QR, file .ntchk, atau teks biasa untuk dikirim melalui saluran pilihanmu. Templat dan daftar periksa yang dibagikan tidak menyertakan foto dan tidak dienkripsi oleh aplikasi.",
                    "Ekspor cadangan menyimpan file ke lokasi pilihanmu atau membuka menu berbagi perangkat. Cadangan menyertakan foto. Perlindungan di tempat tujuan bergantung pada layanan yang kamu pilih.",
                    "Impor membaca file atau kode yang kamu berikan; tidak mencari isi daftar periksa di internet. Penyedia file yang kamu gunakan dapat mengunduh file yang dipilih.",
                    "Pesan, email opsional, versi aplikasi, platform, dan bahasa dikirim ke pengembang. Daftar periksa dan foto tidak dikirim.",
                    "Dukungan dalam aplikasi: dukungan dana sekali bayar yang opsional dan dukungan bulanan dibeli melalui App Store atau Google Play, yang memproses pembayaran sesuai kebijakan privasi mereka sendiri. Aplikasi hanya mengetahui produk dukungan yang kamu miliki dan mencatatnya di perangkat, agar aplikasi NeuraTiM lain di perangkat yang sama dapat menunjukkan bahwa kamu sudah mendukung proyek ini. Catatan ini tidak pernah meninggalkan perangkat.",
                ],
            },
            {
                heading: "7. Menyimpan dan menghapus data",
                paragraphs: [
                    "Pengembang tidak memiliki salinan daftar periksa lokalmu di server. Kamu dapat mengelola data tersebut di aplikasi. Salinan yang sebelumnya diekspor, dibagikan, atau dicadangkan harus dihapus secara terpisah:",
                ],
                points: [
                    "Hapus item, daftar periksa, atau templat satu per satu di aplikasi",
                    "Gunakan Hapus riwayat untuk menghapus daftar periksa yang sudah selesai",
                    "Hapus penyimpanan lokal aplikasi melalui pengaturan perangkat jika tersedia, atau hapus aplikasi beserta datanya; tindakan ini tidak menghapus cadangan eksternal atau file yang sudah diekspor",
                    "Pada versi web, hapus data situs aplikasi di browsermu",
                    "Simpan daftar selesai selama satu bulan, tiga bulan, atau satu tahun; daftar yang lebih lama dihapus saat kamu membuka aplikasi berikutnya",
                ],
            },
            {
                heading: "8. Keamanan",
                paragraphs: [
                    "Data lokal mendapat perlindungan keamanan dari sistem operasi. Kunci layar dan enkripsi penyimpanan perangkat memberikan perlindungan tambahan saat diaktifkan.",
                    "Tidak ada basis data daftar periksa terpusat di server pengembang. Ini mengurangi risiko, tetapi tidak membuat perangkat atau file hasil ekspormu kebal terhadap akses tanpa izin.",
                    "Secara default, cadangan dienkripsi di perangkatmu menggunakan frasa sandi pilihanmu, derivasi kunci Argon2id, dan enkripsi AES-GCM. Aplikasi tidak mengenkripsi sendiri data yang tersimpan di perangkatmu; aplikasi mengandalkan perlindungan sistem operasi yang dijelaskan di atas. Kamu juga dapat mengaktifkan kunci aplikasi, yang mengatur siapa yang dapat membuka aplikasi tetapi tidak mengenkripsi data yang tersimpan.",
                    "Ekspor tanpa enkripsi adalah tindakan terpisah dengan label yang jelas dan memerlukan konfirmasi. Siapa pun yang dapat mengakses file itu dapat membacanya. File berbagi, kode QR, dan teks biasa juga tidak dienkripsi oleh aplikasi serta tidak menyertakan foto. Bagikan hanya melalui saluran yang kamu percayai.",
                ],
            },
            {
                heading: "9. Anak-anak",
                paragraphs: [
                    "Aplikasi ini tidak ditujukan untuk anak di bawah 13 tahun, atau usia minimum yang berlaku di negaranya. Pengembang tidak mengumpulkan data daftar periksa anak melalui aplikasi.",
                ],
            },
            {
                heading: "10. Komponen dan layanan pihak ketiga",
                paragraphs: [
                    "Aplikasi menggunakan komponen sumber terbuka untuk notifikasi, pemindaian, pemilihan foto dan file, berbagi, serta pembelian dalam aplikasi. Fitur ini memakai pemrosesan lokal dan layanan sistem, bukan backend yang dikelola pengembang; pembelian dalam aplikasi diproses oleh App Store atau Google Play.",
                    "Aplikasi tidak menyertakan SDK iklan, atribusi, analitik, atau pelaporan crash.",
                    "Komponen lain mendukung enkripsi cadangan, pembukaan kunci biometrik, dikte, dan widget. Dikte bergantung pada layanan pengenalan suara perangkat, yang mungkin menggunakan pemrosesan online seperti dijelaskan pada bagian 5.",
                ],
            },
            {
                heading: "11. Situs ini",
                paragraphs: [
                    "Situs ini memperkenalkan aplikasi dan menyediakan akses ke versi web. Permintaan ke situs, pembayaran opsional, dan pesan yang kamu kirim terpisah dari data daftar periksa yang tersimpan secara lokal.",
                ],
                points: [
                    "Hosting—situs ini menggunakan Cloudflare, yang dapat memproses alamat IP, informasi browser, dan URL yang diminta untuk penyajian konten dan keamanan. Ini terpisah dari data aplikasi dan tidak berarti daftar periksamu diunggah.",
                    "Pilihan bahasa—bahasa pilihanmu disimpan di penyimpanan browser dan tercantum dalam alamat halaman. Alamat tersebut dapat terlihat oleh penyedia hosting saat kamu meminta halaman.",
                    "Dukungan dana—dukungan bersifat opsional. Pembayaran menggunakan Stripe, Ko-fi, PayPal, atau GitHub Sponsors dengan ketentuan privasi masing-masing. Pengembang dapat menerima informasi transaksi dan detail pendukung yang diberikan penyedia, tetapi tidak menerima nomor kartu lengkapmu melalui formulir pembayaran.",
                    "Coba aplikasi—aplikasi web yang disematkan menyimpan data daftar periksa di browser seperti dijelaskan di atas. Memuat aplikasi memerlukan permintaan ke layanan hostingnya.",
                    "Tautan eksternal dan email—situs lain memiliki kebijakan privasi sendiri. Jika kamu mengirim email kepada pengembang, alamat dan pesanmu diterima agar pertanyaanmu dapat dijawab.",
                ],
            },
            {
                heading: "12. Hakmu",
                paragraphs: [
                    "Bergantung pada hukum yang berlaku, kamu mungkin berhak mengakses, memperbaiki, menghapus, atau menerima salinan data pribadi, membatasi atau menolak pemrosesan, dan mengajukan pengaduan kepada otoritas perlindungan data. Hak ini juga dapat berlaku atas data situs, pembayaran, atau email, bukan hanya konten aplikasi.",
                    "Pengembang tidak menjual data daftar periksamu atau menggunakannya untuk iklan. Pengembang tidak dapat mengakses atau menghapus daftar yang hanya disimpan di perangkatmu.",
                    "Untuk pertanyaan privasi atau permintaan terkait data yang memang disimpan pengembang, gunakan alamat kontak di bawah.",
                ],
            },
            {
                heading: "13. Perubahan kebijakan ini",
                paragraphs: [
                    "Pembaruan akan dipublikasikan di halaman ini dengan tanggal yang diperbarui. Perubahan cara aplikasi menangani data juga akan dijelaskan dalam catatan rilis terkait. Revisi kebijakan tidak mengesahkan pengumpulan data sebelumnya secara retroaktif.",
                ],
            },
        ],
        lastUpdated: "Terakhir diperbarui: 28 Oktober 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Selesai Jumat lalu",
            finishedTuesday: "Selesai hari Selasa",
            history: "Riwayat",
            inProgress: "Berjalan",
            startedToday: "Dimulai hari ini",
            startSubtitle: "Pilih templat, lalu centang item satu per satu.",
            startTitle: "Mulai daftar periksa",
        },
        common: {
            navChecklists: "Daftar periksa",
            navSchedule: "Jadwal",
            navTemplates: "Templat",
            templateCarryOn: "Berkemas untuk bagasi kabin",
            templateGrocery: "Belanja mingguan",
            templateHiking: "Mendaki akhir pekan",
            templatePreFlight: "Periksa rumah sebelum terbang",
        },
        condition: {
            addRule: "Tambah aturan",
            and: "DAN",
            headerItem: "Lapisan luar tenda",
            intro: "Item ini wajib hanya jika:",
            isChecked: "dicentang",
            isNotChecked: "tidak dicentang",
            requiredWhen: "Wajib jika",
            ruleLaptop: "Tenda",
            ruleTrip: "Perjalanan dengan menginap",
            save: "Simpan",
            summary: "“Tenda” dicentang DAN “Perjalanan dengan menginap” dicentang",
            title: "Syarat",
        },
        run: {
            conditional: "Bersyarat",
            essentials: "Perlengkapan utama",
            finish: "Selesai",
            firstAidKit: "Kotak P3K",
            headlamp: "Lampu kepala",
            optional: "Opsional",
            rainCover: "Lapisan luar tenda",
            requiredLeftTwo: "2 item wajib tersisa",
            requiredNow: "Wajib sekarang",
            subtitle: "3 dari 5 item wajib sudah dicentang",
            tent: "Tenda",
            trailMap: "Peta jalur",
            trekkingPoles: "Tongkat trekking",
            waterBottle: "Botol air ×2",
            doneHeading: "Sudah dicentang (3)",
            filterAll: "Semua",
            filterOptional: "Opsional",
            filterRemaining: "Tersisa",
        },
        schedule: {
            doesNotRepeat: "Tidak berulang",
            entry1Title: "Mulai: Mendaki akhir pekan",
            entry1When: "Sab, 07.00",
            entry2Title: "Selesaikan: Belanja mingguan",
            entry2When: "Hari ini, 18.00",
            entry3Title: "Mulai: Periksa rumah sebelum terbang",
            entry3When: "28 Jul, 05.30",
            finishReminderLabel: "Pengingat untuk menyelesaikan",
            newReminder: "Pengingat baru",
            repeatsWeekly: "Berulang setiap minggu",
            startReminderLabel: "Pengingat untuk memulai",
            repeatsWeekdays: "Setiap hari kerja (Sen–Jum)",
        },
        templates: {
            allChip: "Semua",
            carryOnSummary: "15 item · 10 wajib",
            grocerySummary: "9 item · 9 wajib",
            hikingSummary: "12 item · 8 wajib",
            newTemplate: "Templat baru",
            preFlightSummary: "6 item · 6 wajib",
            tagHome: "Rumah",
            tagOutdoors: "Alam terbuka",
            tagTravel: "Perjalanan",
        },
        backup: {
            badgeBody:
                "Cadangan terenkripsi mencakup templat, daftar periksa, catatan, pengingat, dan foto, yang dilindungi frasa sandimu. Ekspor tanpa enkripsi tersedia sebagai pilihan terpisah.",
            badgeNote:
                "Tanpa akun, tanpa sinkronisasi cloud. Kamu memilih tempat menyimpan atau membagikan cadangan.",
            badgeTitle: "Isi cadangan",
            exportEncrypted: "Ekspor cadangan terenkripsi",
            exportPlain: "Ekspor tanpa enkripsi",
            intro: "Datamu disimpan di perangkat ini. Ekspor cadangan untuk menyimpan salinan terpisah, atau pulihkan cadangan yang sebelumnya kamu simpan.",
            restore: "Pulihkan dari cadangan",
            title: "Cadangkan dan pulihkan",
        },
        start: {
            quickBody: "Tidak perlu templat. Tambahkan item, lalu centang sambil mengerjakannya.",
            quickTitle: "Daftar periksa cepat",
            title: "Mulai daftar periksa",
            writeBody: "Ketik atau tempel seluruh daftar, lalu mulai mencentang item.",
            writeTitle: "Tulis daftar periksa",
        },
        stats: {
            finishedRuns: "Daftar selesai",
            inProgress: "Berjalan",
            itemsChecked: "Item yang sudah dicentang",
            missedHeading: "Paling sering belum dicentang",
            missedHelp: "Item yang belum dicentang saat daftar periksa diselesaikan.",
            missedItem1: "Tongkat trekking",
            missedItem1Count: "9 kali",
            missedItem2: "Lampu kepala",
            missedItem2Count: "6 kali",
            missedItem3: "Lapisan luar tenda",
            missedItem3Count: "2 kali",
            subtitle: "Dihitung di perangkat ini dari daftar periksa yang tersimpan.",
            templates: "Templat",
            title: "Statistik",
        },
    },
    siteShare: {
        copied: "Tautan disalin",
        copyLink: "Salin tautan",
        error: "Proses berbagi tidak dapat dimulai. Coba lagi atau salin tautan.",
        heading: "Bagikan situs ini",
        manualCopy: "Salin tautan ini secara manual",
        nativeShare: "Bagikan melalui perangkat Anda",
        selectLabel: "Jejaring sosial atau opsi berbagi",
        share: "Bagikan",
    },
    siteShareRoller: { hint: "Seret atau gunakan ← → untuk memutar. Klik ikon untuk berbagi." },
    tryApp: {
        back: "Kembali ke ringkasan",
        dismissNotice: "Tutup",
        iframeTitle: "NeuraTiM Checklist — coba aplikasinya",
        intro: "Ini aplikasi web yang berfungsi, bukan gambar demo. Cobalah; daftar periksamu disimpan di browser ini.",
        loading: "Memuat aplikasi…",
    },
    insights: {
        eyebrow: "Statistik",
        heading: "Progresmu, hanya untukmu.",
        intro: "Statistik dihitung di perangkatmu dari daftar periksa yang tersimpan, bukan dengan melacak aktivitasmu. Jika sebuah daftar dihapus, datanya tidak lagi disertakan. Tidak ada catatan analitik terpisah yang disimpan.",
        points: [
            {
                title: "Lihat yang sering kamu lewatkan",
                body: "Lihat item yang paling sering belum dicentang saat daftar diselesaikan. Item opsional yang selalu dilewatkan mungkin memang tidak perlu ada di daftar. Item yang saat itu wajib harus dicentang sebelum daftar bisa diselesaikan.",
            },
            {
                title: "Lihat gambaran keseluruhan",
                body: "Lihat jumlah templat, daftar yang sudah selesai atau masih berjalan, serta total item yang sudah kamu centang.",
            },
            {
                title: "Angka tanpa pelacakan",
                body: "Tidak ada SDK analitik, layanan pelaporan crash, atau laporan penggunaan yang dikirim kepada pengembang. Statistik daftar periksamu tetap di perangkatmu.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Mulai menggunakan",
        heading: "Kurangi mengetik. Selesaikan lebih banyak.",
        intro: "Mulai dari templat siap pakai, tempel daftar, atau buat daftar periksa cepat. Pilih cara yang cocok untukmu; tak perlu menyusun semuanya item demi item.",
        points: [
            {
                title: "Sesuaikan templat siap pakai",
                body: "Pilih dari Mendaki, Liburan akhir pekan, Belanja kebutuhan, Tas olahraga, atau Sebelum keluar rumah. Salinannya akan ditambahkan ke templatmu agar kamu bisa mengganti nama dan menghapus yang tidak diperlukan.",
            },
            {
                title: "Tulis seluruh daftar sekaligus",
                body: "Gunakan baris pertama untuk nama daftar periksa dan setiap baris berikutnya untuk satu item. Tambahkan penanda [optional] persis seperti itu di akhir baris untuk menjadikan item opsional. Tempel daftar yang sudah ada, lalu mulai.",
            },
            {
                title: "Tempel ke daftar yang sudah ada",
                body: "Tanda poin dan penomoran dihapus otomatis. Awali baris dengan 2x untuk mengatur jumlah menjadi dua. Ubah satu halaman catatan menjadi item-item terpisah sekaligus.",
            },
            {
                title: "Atau mulai dengan daftar periksa cepat",
                body: "Tidak perlu templat. Tambahkan item sesuai kebutuhan, diktekan nama pada perangkat yang mendukung, atau gunakan kode batang dengan nama yang sudah kamu simpan. Saran diambil dari nama item yang sudah tersimpan di perangkatmu.",
            },
        ],
    },
    security: {
        eyebrow: "Keamanan",
        heading: "Ketahui yang kamu bagikan. Pilih cara melindunginya.",
        intro: "Sebelum mengekspor atau berbagi, aplikasi menjelaskan isi yang disertakan dan apakah isinya dienkripsi. Cadangan dapat menyertakan foto; templat dan daftar periksa yang dibagikan tidak.",
        note: "Kunci aplikasi mengatur siapa yang dapat membuka aplikasi. Kunci ini tidak mengenkripsi data; data tersimpan dilindungi oleh keamanan perangkatmu sendiri, seperti kunci layar.",
        points: [
            {
                title: "Cadangan dilindungi frasa sandimu",
                body: "Argon2id menghasilkan kunci dari frasa sandi dan AES-GCM mengenkripsi cadangan, semuanya di perangkatmu. Pilih frasa sandi yang kuat dan simpan dengan aman; pengembang tidak dapat memulihkannya untukmu.",
            },
            {
                title: "Ekspor tanpa enkripsi hanya atas pilihanmu",
                body: "Perlu file tanpa enkripsi? Gunakan pilihan ekspor terpisah yang berlabel jelas dan konfirmasikan sebelum menyimpan. Siapa pun yang dapat mengakses file itu dapat membaca isinya.",
            },
            {
                title: "Buka dengan autentikasi perangkat",
                body: "Gunakan sidik jari, pengenalan wajah, atau kode sandi perangkatmu untuk membuka aplikasi. Sistem operasi menangani autentikasi; aplikasi tidak pernah menerima data sidik jari atau wajahmu.",
            },
            {
                title: "Dilindungi perangkatmu",
                body: "Di Android dan iOS, daftar periksa, catatan, dan foto tetap berada di penyimpanan pribadi aplikasi, dilindungi oleh isolasi aplikasi sistem operasi dan kunci layarmu. Aplikasi tidak menambahkan enkripsinya sendiri.",
            },
        ],
    },
};

export default id;
