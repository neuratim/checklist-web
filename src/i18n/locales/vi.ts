import type { LocaleDictionary } from "../../types/dictionary";

const vi: LocaleDictionary = {
    conditionalItems: {
        eyebrow: "Mục có điều kiện",
        heading: "Có những thứ chỉ cần trong vài trường hợp.",
        intro: "Mang theo máy tính xách tay? Bạn sẽ cần cả bộ sạc. Để máy ở nhà? Bộ sạc cũng có thể ở lại. Đặt một mục thành Có điều kiện để mục đó chỉ bắt buộc khi thỏa mãn quy tắc bạn đã chọn. Một mẫu, dùng được cho nhiều kế hoạch.",
        points: [
            {
                title: "Quy tắc dễ hiểu",
                body: "Chọn một mục và xác định mục đó cần được đánh dấu hay chưa đánh dấu. Ứng dụng hiển thị toàn bộ điều kiện thành câu để bạn biết rõ khi nào quy tắc có hiệu lực.",
            },
            {
                title: "VÀ, HOẶC và dấu ngoặc",
                body: "Kết hợp quy tắc bằng VÀ hoặc HOẶC, rồi dùng dấu ngoặc để nhóm chúng. Ví dụ: bộ sạc là bắt buộc khi đã đánh dấu Máy tính xách tay VÀ đã đánh dấu ít nhất một trong hai mục Chuyến đi qua đêm HOẶC Chuyến công tác.",
            },
            {
                title: "Cập nhật ngay khi bạn đánh dấu",
                body: "Khi điều kiện được đáp ứng, mục tương ứng trở thành bắt buộc và được tính vào tiến độ hoàn thành. Khi điều kiện không còn đúng, mục đó không còn bắt buộc. Chỉ có thể chọn Hoàn tất khi tất cả các mục hiện đang bắt buộc đã được đánh dấu.",
            },
        ],
    },
    features: {
        eyebrow: "Tính năng",
        heading: "Đủ những gì bạn cần ở một danh sách kiểm tra. Không thêm rườm rà.",
        items: [
            {
                title: "Mẫu dùng lại nhiều lần",
                body: "Thêm ảnh, ghi chú, thẻ và các mục bắt buộc, tùy chọn hoặc có điều kiện. Tạo mẫu một lần, rồi bắt đầu danh sách kiểm tra mới bất cứ khi nào cần.",
            },
            {
                title: "Đang thực hiện và lịch sử",
                body: "Bạn có thể để danh sách chưa xong rồi quay lại tiếp tục sau. Danh sách vẫn ở trạng thái Đang thực hiện cho đến khi bạn hoàn tất hoặc xóa. Danh sách đã hoàn tất được chuyển vào lịch sử.",
            },
            {
                title: "Lời nhắc linh hoạt",
                body: "Đặt lời nhắc để bắt đầu danh sách hoặc hoàn tất danh sách đang thực hiện. Lặp hằng ngày, hằng tuần, hằng tháng, vào các ngày trong tuần từ thứ Hai đến thứ Sáu, những ngày bạn chọn hoặc theo khoảng cách vài ngày hay vài tuần. Bạn cũng có thể chỉ nhắc một lần.",
            },
            {
                title: "Dùng được khi ngoại tuyến",
                body: "Tạo và dùng danh sách kiểm tra mà không cần kết nối internet. Mẫu, danh sách và lời nhắc được lưu trên thiết bị của bạn, không cần tài khoản hay đồng bộ đám mây.",
            },
            {
                title: "Tìm kiếm và thẻ",
                body: "Lọc mẫu theo thẻ, tìm danh sách theo tên. Dù bộ sưu tập ngày càng nhiều, bạn vẫn đỡ phải cuộn để tìm.",
            },
            {
                title: "iOS · Android · Web",
                body: "Trải nghiệm danh sách kiểm tra rõ ràng, quen thuộc trên điện thoại, máy tính bảng hoặc trình duyệt. Các tính năng được hỗ trợ có thể khác nhau tùy nền tảng.",
            },
            {
                title: "Mục có điều kiện",
                body: "Chỉ đặt một mục là bắt buộc khi thực sự cần, chẳng hạn bộ sạc khi bạn mang theo máy tính xách tay. Kết hợp quy tắc bằng VÀ và HOẶC; chúng được cập nhật khi bạn đánh dấu các mục.",
            },
            {
                title: "Có chỗ cho từng chi tiết",
                body: "Thêm nhiều ảnh, mô tả, số lượng và đơn vị riêng cho mỗi mục, chẳng hạn 2 kg hoặc 3 gói. Chia các mục thành nhóm, rồi kéo để đổi thứ tự từng mục hoặc cả nhóm.",
            },
            {
                title: "Danh sách dài vẫn gọn gàng",
                body: "Gom các mục đã đánh dấu vào phần Đã xong hoặc ẩn hẳn chúng. Lọc theo Còn lại hoặc Tùy chọn để tập trung vào việc tiếp theo.",
            },
            {
                title: "Sửa nhiều mục cùng lúc",
                body: "Chọn nhiều mục để chuyển sang nhóm khác, đặt thành bắt buộc hoặc tùy chọn, hay xóa cùng lúc.",
            },
            {
                title: "Xem nhanh tiến độ",
                body: "Trên thiết bị được hỗ trợ, thông báo thường trực và tiện ích màn hình chính có thể hiển thị tiến độ. Lối tắt ứng dụng giúp bạn mở nhanh bốn mẫu dùng gần đây nhất.",
            },
            {
                title: "Chia sẻ theo cách của bạn",
                body: "Gửi mã QR hoặc tệp .ntchk cho người có ứng dụng, hoặc văn bản thuần túy cho bất kỳ ai. Danh sách kiểm tra và mẫu được chia sẻ không kèm ảnh.",
            },
            {
                title: "Bản sao lưu được mã hóa",
                body: "Sao lưu dữ liệu, kể cả ảnh, vào một tệp được bảo vệ bằng cụm mật khẩu do bạn chọn. Việc mã hóa dùng Argon2id và AES-GCM, diễn ra ngay trên thiết bị.",
            },
            {
                title: "Khóa ứng dụng và mã hóa",
                body: "Mở khóa ứng dụng bằng vân tay, nhận diện khuôn mặt hoặc mã khóa thiết bị. Trên Android và iOS, bạn còn có thể mã hóa dữ liệu ứng dụng đã lưu.",
            },
            {
                title: "Lưu lịch sử theo ý bạn",
                body: "Giữ danh sách đã hoàn tất vô thời hạn, hoặc trong một tháng, ba tháng hay một năm. Danh sách quá hạn sẽ được xóa vào lần tiếp theo bạn mở ứng dụng.",
            },
        ],
    },
    footer: {
        contact: "Liên hệ",
        mainSite: "NeuraTiM",
        privacyPolicy: "Chính sách quyền riêng tư",
        tagline: "Được phát triển độc lập. {year} · Không cần tài khoản ứng dụng, không theo dõi.",
    },
    freeSupport: {
        eyebrow: "Miễn phí, nhờ sự ủng hộ của bạn",
        githubSponsorsNote: "Cần có tài khoản GitHub",
        heading: "Miễn phí 100%. Không điều kiện ẩn.",
        intro: "Mọi tính năng đều miễn phí. Sự ủng hộ luôn đáng quý, nhưng không bao giờ là bắt buộc.",
        notHere: [
            "Không quảng cáo",
            "Không phí thuê bao",
            "Không mua hàng trong ứng dụng",
            "Không gói cao cấp trả phí",
        ],
        pledge: {
            body: "Nếu những ứng dụng này có ích cho bạn, hãy cân nhắc quyên góp. Nếu mọi người dùng đều gửi một đô la mỗi tháng, dự án sẽ tồn tại thoải mái — và bạn có thể tiếp tục dùng mọi ứng dụng của NeuraTiM miễn phí với lương tâm thanh thản, biết rằng phần đóng góp của mình trả cho việc giữ chúng luôn được cập nhật và tài trợ cho những gì sắp tới.",
            heading: "Một đô la mỗi tháng là đủ",
        },
        quickTip: {
            amountLabel: "Chọn số tiền",
            backButton: "Quay lại",
            cancelNote:
                "Có thể hủy bất cứ lúc nào — chỉ cần một email, khoản đóng góp sẽ dừng trước kỳ thu tháng sau.",
            customAmountLabel: "Số tiền khác (USD)",
            emailLabel: "Email nhận biên lai",
            errorAmount: "Nhập số tiền từ 1 đến 500 USD.",
            errorEmail: "Hãy nhập một địa chỉ email hợp lệ.",
            errorGeneric: "Đã xảy ra lỗi. Vui lòng thử lại.",
            heading: "Ủng hộ dự án",
            monthlyPayButton: "Góp {amount} mỗi tháng",
            monthlySuccessBody:
                "Khoản đóng góp hằng tháng của bạn đã được thiết lập và lần đầu đã thanh toán xong. Cảm ơn bạn đã giữ cho các ứng dụng này miễn phí.",
            payButton: "Thanh toán {amount}",
            poweredBy:
                "Thanh toán được xử lý qua Stripe. Bạn có thể dùng thẻ, hoặc Apple Pay hay Google Pay nếu được hỗ trợ. Không cần tài khoản NeuraTiM.",
            processingButton: "Đang xử lý…",
            successBody: "Khoản ủng hộ của bạn đã được nhận. Cảm ơn bạn đã góp phần giữ ứng dụng miễn phí!",
            successHeading: "Cảm ơn bạn!",
            tabMonthly: "Hằng tháng",
            tabOneOff: "Một lần",
        },
        supportBody:
            "Miễn phí sử dụng không có nghĩa là không tốn chi phí duy trì. Tôi chi trả cho việc phát triển và lưu trữ, còn phát hành trên App Store cần tư cách thành viên Apple Developer Program, thường là 99 USD mỗi năm. Một khoản ủng hộ nhỏ cũng giúp ích cho dự án độc lập này. Không bao giờ bắt buộc, luôn được trân trọng.",
        tipCta: "Gửi khoản ủng hộ",
        tipEmailLead: "Bạn có câu hỏi về việc ủng hộ ứng dụng? Hãy gửi email cho tôi.",
        tipEmailSubject: "Tiền típ",
        waysToTip: "Các cách khác để ủng hộ dự án:",
    },
    getApp: {
        eyebrow: "Tải ứng dụng",
        heading: "Danh sách của bạn, trên nền tảng bạn chọn.",
        intro: "Chọn phiên bản web, Android hoặc iOS. Các bản phát hành được biên dịch từ mã nguồn.",
        platforms: {
            android: {
                detail: "Tải phiên bản Android miễn phí. Làm theo hướng dẫn tải xuống hoặc tham gia thử nghiệm dành cho bản phát hành hiện tại.",
                cta: "Tải phiên bản Android",
            },
            ios: {
                detail: "Có sẵn miễn phí cho iPhone và iPad trên App Store.",
                cta: "Tải phiên bản iOS",
            },
            web: {
                detail: "Mở ứng dụng bằng trình duyệt hiện đại. Không cần cài đặt.",
                cta: "Thử ứng dụng",
            },
        },
    },
    hero: {
        badges: ["Không quảng cáo", "Không cần tài khoản", "Không theo dõi", "iOS · Android · Web"],
        ctaPrimary: "Thử ứng dụng",
        ctaSecondary: "Xem cách hoạt động",
        headingHighlight: "mang đủ mọi thứ bạn cần.",
        headingLead: "Trước khi lên đường,",
        subhead:
            "Tạo danh sách kiểm tra để sắp hành lý, làm việc nhà hoặc chuẩn bị cho chuyến đi, rồi dùng lại bất cứ khi nào cần. Miễn phí sử dụng, có danh sách ngoại tuyến và không cần tạo tài khoản.",
    },
    howItWorks: {
        eyebrow: "Cách hoạt động",
        heading: "Ba bước đơn giản. Bắt đầu khi bạn sẵn sàng.",
        intro: "Tạo mẫu, làm theo danh sách kiểm tra và thêm lời nhắc khi cần. Không phải loay hoay với thiết lập phức tạp trước khi bắt tay vào việc.",
        steps: [
            {
                eyebrow: "Bước 1",
                title: "Tạo mẫu",
                body: "Đặt tên mục, thêm ảnh nếu cần và đặt từng mục thành bắt buộc, tùy chọn hoặc có điều kiện. Dùng lại mẫu, đổi thứ tự, tạo bản sao hoặc lưu trữ khi không còn cần đến.",
            },
            {
                eyebrow: "Bước 2",
                title: "Kiểm tra trước khi đi",
                body: "Xem tên, ảnh và ô đánh dấu của từng mục. Bạn có thể hoàn tất khi mọi mục bắt buộc đều đã được đánh dấu. Mục tùy chọn không cản việc hoàn tất; mục có điều kiện chỉ bắt buộc khi thỏa mãn quy tắc của nó.",
            },
            {
                eyebrow: "Bước 3",
                title: "Để ứng dụng nhắc bạn",
                body: "Đặt lời nhắc để bắt đầu danh sách hoặc hoàn tất danh sách đang thực hiện. Chọn nhắc một lần hoặc lặp hằng ngày, hằng tuần, hằng tháng, từ thứ Hai đến thứ Sáu, vào những ngày bạn chọn hoặc cách vài ngày hay vài tuần.",
            },
        ],
    },
    languageSwitcher: {
        label: "Ngôn ngữ",
    },
    nav: {
        closeMenu: "Đóng trình đơn",
        features: "Tính năng",
        free: "Miễn phí, nhờ sự ủng hộ của bạn",
        getApp: "Tải ứng dụng",
        howItWorks: "Cách hoạt động",
        label: "Trên trang này",
        more: "Các phần khác",
        openMenu: "Mở trình đơn",
        privacy: "Quyền riêng tư",
        privacyPolicy: "Chính sách quyền riêng tư",
        tryIt: "Thử ứng dụng",
        security: "Bảo mật",
    },
    privacy: {
        badgeBody:
            "Danh sách kiểm tra được lưu trên thiết bị hoặc trong trình duyệt nơi bạn tạo chúng. Bạn quyết định có xuất hay chia sẻ hay không.",
        badgeTitle: "Lưu trên thiết bị của bạn",
        eyebrow: "Quyền riêng tư",
        heading: "Danh sách của bạn vẫn là của bạn.",
        intro: "Không cần tài khoản ứng dụng, không đồng bộ đám mây, không theo dõi. Mẫu, danh sách kiểm tra và lời nhắc được lưu cục bộ, không nằm trên máy chủ của nhà phát triển.",
        points: [
            "Không cần tài khoản hay đăng nhập",
            "Không có công cụ phân tích, trình theo dõi hoặc SDK quảng cáo trong ứng dụng",
            "Danh sách kiểm tra của bạn không được lưu trên máy chủ của nhà phát triển",
            "Ảnh được lưu cục bộ và không đi kèm khi chia sẻ; bản sao lưu có chứa ảnh",
            "Bản sao lưu được mã hóa mặc định bằng cụm mật khẩu do bạn chọn",
            "Thống kê được tính trên thiết bị từ các danh sách của bạn",
        ],
        chips: ["Không cần tài khoản", "Không theo dõi", "Không đồng bộ đám mây", "Sao lưu được mã hóa"],
        policyLink: "Đọc toàn bộ chính sách quyền riêng tư",
    },
    privacyPolicy: {
        back: "Quay lại tổng quan",
        contactHeading: "Liên hệ",
        contactIntro:
            "Nếu có câu hỏi về chính sách này hoặc quyền riêng tư trong NeuraTiM Checklist, vui lòng liên hệ:",
        eyebrow: "NeuraTiM Checklist",
        intro: "NeuraTiM Checklist lưu dữ liệu danh sách kiểm tra trên thiết bị của bạn. Không có tài khoản ứng dụng, đồng bộ đám mây hay dịch vụ phân tích. Chính sách này giải thích việc lưu trữ cục bộ, chia sẻ và xuất dữ liệu do bạn chủ động thực hiện, các dịch vụ thiết bị tùy chọn và cách dữ liệu trên trang web này được xử lý riêng.",
        title: "Chính sách quyền riêng tư",
        sections: [
            {
                heading: "1. Phạm vi của chính sách",
                paragraphs: [
                    "Chính sách này áp dụng cho NeuraTiM Checklist trên Android, iOS và web, cũng như trang web này. NeuraTiM là nhà phát triển độc lập và bên kiểm soát chịu trách nhiệm về dữ liệu cá nhân được xử lý liên quan đến trang web hoặc liên hệ trực tiếp.",
                    "Ứng dụng miễn phí, không có quảng cáo và không có gói trả phí.",
                ],
            },
            {
                heading: "2. Dữ liệu danh sách và phản hồi tùy chọn",
                paragraphs: [
                    "Danh sách chính hoạt động ngoại tuyến, không cần tài khoản hay phân tích. Góp ý tùy chọn cần internet; đọc chính tả có thể xử lý giọng nói trực tuyến.",
                ],
                points: [
                    "Tên, địa chỉ email, số điện thoại hoặc thông tin tài khoản để đăng ký; ứng dụng không có đăng nhập",
                    "Mã định danh quảng cáo, thiết bị hoặc người dùng để theo dõi",
                    "Vị trí chính xác hoặc gần đúng của bạn",
                    "Danh bạ, lịch, nhật ký cuộc gọi, tin nhắn văn bản hoặc danh sách ứng dụng đã cài",
                    "Dữ liệu phân tích sử dụng, chẩn đoán hoặc báo cáo sự cố gửi cho nhà phát triển; thống kê danh sách được tính cục bộ",
                    "Thông tin thanh toán hoặc tài chính trong ứng dụng; các khoản ủng hộ tự nguyện trên trang web được trình bày riêng bên dưới",
                ],
            },
            {
                heading: "3. Dữ liệu được lưu trên thiết bị",
                paragraphs: [
                    "Ứng dụng lưu cục bộ các dữ liệu sau để bạn dùng danh sách kiểm tra khi ngoại tuyến:",
                ],
                points: [
                    "Mẫu, nhóm, thẻ và các mục, gồm tên, số lượng, mô tả, trạng thái bắt buộc hoặc tùy chọn và quy tắc điều kiện",
                    "Danh sách đang thực hiện và danh sách đã hoàn tất trong lịch sử, gồm các mục đã đánh dấu và ghi chú",
                    "Ảnh bạn đính kèm vào các mục",
                    "Lời nhắc đã lên lịch và nội dung của chúng",
                    "Các thiết lập như ngôn ngữ và giao diện sáng hoặc tối",
                    "Mã vạch đã quét và tên bạn gán cho chúng; ứng dụng không tra cứu chúng trong cơ sở dữ liệu sản phẩm trực tuyến",
                    "Thiết lập thời gian lưu lịch sử, khóa ứng dụng và mã hóa trên thiết bị",
                ],
            },
            {
                heading: "4. Nơi lưu dữ liệu",
                paragraphs: [
                    "Trên Android và iOS, dữ liệu được lưu trong vùng lưu trữ riêng của ứng dụng, được cơ chế cách ly ứng dụng của hệ điều hành bảo vệ.",
                    "Ở phiên bản web, dữ liệu được lưu trong trình duyệt cho trang của ứng dụng. Xóa dữ liệu của trang đó sẽ xóa bản sao cục bộ.",
                    "Ứng dụng không cung cấp sao lưu hay đồng bộ đám mây. Các bản sao bạn xuất hoặc chia sẻ, cùng các bản sao lưu do thiết bị hoặc trình duyệt quản lý, nằm ngoài vùng lưu trữ cục bộ này.",
                ],
            },
            {
                heading: "5. Quyền truy cập và dịch vụ thiết bị",
                paragraphs: [
                    "Quyền truy cập được dùng cho các tính năng cần đến chúng. Bạn có thể quản lý những quyền có sẵn trong phần cài đặt thiết bị; từ chối một quyền có thể khiến tính năng liên quan không hoạt động.",
                ],
                points: [
                    "Máy ảnh — dùng khi quét mã QR, mã vạch hoặc chụp ảnh cho một mục. Việc quét được xử lý trên thiết bị mà không giữ lại các khung hình máy ảnh. Ảnh bạn chụp cho các mục được lưu trong bộ nhớ cục bộ của ứng dụng.",
                    "Ảnh hoặc thư viện ảnh — dùng để đính kèm ảnh bạn chọn. Ảnh được chọn sẽ được sao chép vào bộ nhớ ứng dụng; ứng dụng không tải thư viện ảnh lên hoặc lập chỉ mục thư viện.",
                    "Thông báo — dùng cho lời nhắc đã lên lịch và, nếu được hỗ trợ, tiến độ đang thực hiện. Các thông báo này được tạo cục bộ, không dùng dịch vụ thông báo đẩy từ xa.",
                    "Báo thức chính xác (Android) — dùng để lên lịch lời nhắc vào thời điểm bạn chọn. Việc gửi lời nhắc vẫn có thể phụ thuộc vào thiết lập và giới hạn của hệ thống.",
                    "Chạy khi khởi động (Android) — dùng để lên lịch lại lời nhắc sau khi thiết bị khởi động lại.",
                    "Tệp — dùng để lưu tệp xuất và mở tệp sao lưu hoặc tệp chia sẻ mà bạn chọn.",
                    "Micrô — dùng khi bạn đọc tên mục để nhập bằng giọng nói. Dịch vụ nhận dạng giọng nói của thiết bị trả văn bản cho ứng dụng; ứng dụng không giữ bản ghi âm. Tùy thiết bị và thiết lập, dịch vụ này có thể xử lý âm thanh trực tuyến theo điều khoản quyền riêng tư riêng.",
                    "Sinh trắc học hoặc mã khóa thiết bị — dùng khi bạn bật khóa ứng dụng. Hệ điều hành thực hiện xác minh; ứng dụng nhận kết quả, không nhận dữ liệu vân tay hay khuôn mặt.",
                ],
            },
            {
                heading: "6. Chia sẻ, xuất dữ liệu và xử lý bên ngoài",
                paragraphs: [
                    "Ứng dụng không tự động tải danh sách kiểm tra lên cho nhà phát triển. Bạn quyết định có chia sẻ hoặc xuất hay không. Tính năng nhập bằng giọng nói tùy chọn dùng dịch vụ giọng nói của thiết bị như mô tả ở trên.",
                ],
                points: [
                    "Chia sẻ sẽ tạo mã QR, tệp .ntchk hoặc văn bản thuần túy để bạn gửi qua kênh tự chọn. Mẫu và danh sách kiểm tra được chia sẻ không chứa ảnh và không được ứng dụng mã hóa.",
                    "Xuất bản sao lưu sẽ lưu tệp vào nơi bạn chọn hoặc mở trình đơn chia sẻ của thiết bị. Bản sao lưu có chứa ảnh. Mức độ bảo vệ ở nơi nhận phụ thuộc vào dịch vụ bạn chọn.",
                    "Nhập dữ liệu chỉ đọc tệp hoặc mã do bạn cung cấp, không tìm nội dung danh sách kiểm tra trên mạng. Nhà cung cấp tệp bạn dùng có thể tải tệp đã chọn xuống.",
                    "Tin nhắn, email tùy chọn, phiên bản ứng dụng, nền tảng và ngôn ngữ được gửi cho nhà phát triển. Danh sách và ảnh không được gửi.",
                ],
            },
            {
                heading: "7. Giữ và xóa dữ liệu",
                paragraphs: [
                    "Nhà phát triển không có bản sao danh sách kiểm tra cục bộ của bạn trên máy chủ. Bạn có thể quản lý dữ liệu đó trong ứng dụng. Các bản sao từng xuất, chia sẻ hoặc sao lưu phải được xóa riêng:",
                ],
                points: [
                    "Xóa từng mục, danh sách kiểm tra hoặc mẫu trong ứng dụng",
                    "Dùng Xóa lịch sử để xóa các danh sách đã hoàn tất",
                    "Xóa bộ nhớ cục bộ của ứng dụng trong cài đặt thiết bị nếu có, hoặc gỡ ứng dụng cùng dữ liệu; thao tác này không xóa bản sao lưu bên ngoài hay tệp đã xuất",
                    "Ở phiên bản web, xóa dữ liệu trang của ứng dụng trong trình duyệt",
                    "Giữ danh sách đã hoàn tất trong một tháng, ba tháng hoặc một năm; danh sách cũ hơn sẽ bị xóa vào lần mở ứng dụng tiếp theo",
                ],
            },
            {
                heading: "8. Bảo mật",
                paragraphs: [
                    "Dữ liệu cục bộ được hưởng các cơ chế bảo vệ của hệ điều hành. Khóa màn hình và mã hóa bộ nhớ thiết bị tăng thêm khả năng bảo vệ khi được bật.",
                    "Không có cơ sở dữ liệu danh sách kiểm tra tập trung trên máy chủ của nhà phát triển. Điều này giúp giảm rủi ro nhưng không khiến thiết bị hoặc tệp đã xuất hoàn toàn tránh được truy cập trái phép.",
                    "Bản sao lưu được mã hóa mặc định trên thiết bị bằng cụm mật khẩu bạn chọn, cơ chế dẫn xuất khóa Argon2id và mã hóa AES-GCM. Bạn cũng có thể bật khóa ứng dụng. Trên Android và iOS, mã hóa bộ nhớ tùy chọn bảo vệ dữ liệu cục bộ bằng dữ liệu khóa được bảo vệ qua Android Keystore hoặc iOS Keychain.",
                    "Xuất không mã hóa là một thao tác riêng, được ghi nhãn rõ và cần xác nhận. Bất kỳ ai truy cập được tệp đều có thể đọc tệp đó. Tệp chia sẻ, mã QR và văn bản thuần túy cũng không được ứng dụng mã hóa và không chứa ảnh. Chỉ chia sẻ chúng qua kênh bạn tin cậy.",
                ],
            },
            {
                heading: "9. Trẻ em",
                paragraphs: [
                    "Ứng dụng không dành cho trẻ dưới 13 tuổi hoặc dưới độ tuổi tối thiểu áp dụng tại quốc gia của trẻ. Nhà phát triển không thu thập dữ liệu danh sách kiểm tra của trẻ qua ứng dụng.",
                ],
            },
            {
                heading: "10. Thành phần và dịch vụ bên thứ ba",
                paragraphs: [
                    "Ứng dụng dùng các thành phần mã nguồn mở cho thông báo, quét mã, chọn ảnh và tệp, cũng như chia sẻ. Các tính năng này dùng xử lý cục bộ và dịch vụ hệ thống thay vì máy chủ do nhà phát triển vận hành.",
                    "Ứng dụng không chứa SDK quảng cáo, phân bổ nguồn người dùng, phân tích hoặc báo cáo sự cố.",
                    "Các thành phần khác hỗ trợ mã hóa, lưu khóa an toàn, mở khóa sinh trắc học, nhập bằng giọng nói và tiện ích. Nhập bằng giọng nói dựa vào dịch vụ giọng nói của thiết bị, có thể xử lý trực tuyến như giải thích ở phần 5.",
                ],
            },
            {
                heading: "11. Trang web này",
                paragraphs: [
                    "Trang web giới thiệu ứng dụng và cho phép truy cập phiên bản web. Yêu cầu gửi đến trang web, khoản thanh toán tự nguyện và tin nhắn bạn gửi tách biệt với dữ liệu danh sách kiểm tra được lưu cục bộ.",
                ],
                points: [
                    "Lưu trữ web — trang web dùng Cloudflare, có thể xử lý địa chỉ IP, thông tin trình duyệt và URL được yêu cầu để cung cấp nội dung và bảo đảm an toàn. Việc này tách biệt với dữ liệu ứng dụng và không có nghĩa là danh sách của bạn được tải lên.",
                    "Lựa chọn ngôn ngữ — ngôn ngữ bạn chọn được lưu trong trình duyệt và thể hiện trong địa chỉ trang. Nhà cung cấp lưu trữ có thể thấy địa chỉ đó khi bạn yêu cầu mở trang.",
                    "Ủng hộ — việc ủng hộ hoàn toàn tự nguyện. Thanh toán dùng Stripe, Ko-fi, PayPal hoặc GitHub Sponsors theo điều khoản quyền riêng tư của từng dịch vụ. Nhà phát triển có thể nhận thông tin giao dịch và thông tin người ủng hộ mà nhà cung cấp cho phép truy cập, nhưng không nhận toàn bộ số thẻ của bạn qua biểu mẫu thanh toán.",
                    "Thử ứng dụng — ứng dụng web được nhúng lưu dữ liệu danh sách kiểm tra trong trình duyệt như mô tả ở trên. Việc tải ứng dụng cần gửi yêu cầu đến dịch vụ lưu trữ của ứng dụng.",
                    "Liên kết ngoài và email — các trang khác có chính sách quyền riêng tư riêng. Khi bạn gửi email cho nhà phát triển, địa chỉ và nội dung thư được nhận để có thể trả lời câu hỏi của bạn.",
                ],
            },
            {
                heading: "12. Quyền của bạn",
                paragraphs: [
                    "Tùy luật áp dụng, bạn có thể có quyền truy cập, sửa, xóa hoặc nhận bản sao dữ liệu cá nhân, hạn chế hay phản đối việc xử lý và khiếu nại với cơ quan bảo vệ dữ liệu. Các quyền này cũng có thể áp dụng cho dữ liệu trang web, thanh toán hoặc email, không chỉ nội dung ứng dụng.",
                    "Nhà phát triển không bán dữ liệu danh sách kiểm tra hoặc dùng dữ liệu đó cho quảng cáo. Nhà phát triển không thể truy cập hay xóa danh sách chỉ được lưu trên thiết bị của bạn.",
                    "Nếu có câu hỏi về quyền riêng tư hoặc yêu cầu liên quan đến dữ liệu mà nhà phát triển thực sự nắm giữ, hãy dùng địa chỉ liên hệ bên dưới.",
                ],
            },
            {
                heading: "13. Thay đổi chính sách",
                paragraphs: [
                    "Các bản cập nhật sẽ được công bố trên trang này kèm ngày mới. Thay đổi cách ứng dụng xử lý dữ liệu cũng sẽ được giải thích trong ghi chú phát hành tương ứng. Chính sách sửa đổi không hợp thức hóa việc thu thập dữ liệu trước đó theo cách hồi tố.",
                ],
            },
        ],
        lastUpdated: "Cập nhật lần cuối: 10 tháng 10, 2026",
    },
    screens: {
        checklists: {
            finishedFriday: "Hoàn tất thứ Sáu tuần trước",
            finishedTuesday: "Hoàn tất vào thứ Ba",
            history: "Lịch sử",
            inProgress: "Đang thực hiện",
            startedToday: "Bắt đầu hôm nay",
            startSubtitle: "Chọn mẫu và đánh dấu các mục trong quá trình thực hiện.",
            startTitle: "Bắt đầu danh sách kiểm tra",
        },
        common: {
            navChecklists: "Danh sách kiểm tra",
            navSchedule: "Lịch",
            navTemplates: "Mẫu",
            templateCarryOn: "Soạn hành lý xách tay",
            templateGrocery: "Đi chợ hằng tuần",
            templateHiking: "Đi bộ đường dài cuối tuần",
            templatePreFlight: "Kiểm tra nhà trước chuyến bay",
        },
        condition: {
            addRule: "Thêm quy tắc",
            and: "VÀ",
            headerItem: "Tấm phủ chống mưa cho lều",
            intro: "Mục này chỉ bắt buộc khi:",
            isChecked: "đã đánh dấu",
            isNotChecked: "chưa đánh dấu",
            requiredWhen: "Bắt buộc khi",
            ruleLaptop: "Lều",
            ruleTrip: "Chuyến đi qua đêm",
            save: "Lưu",
            summary: "Lều đã được đánh dấu VÀ Chuyến đi qua đêm đã được đánh dấu",
            title: "Điều kiện",
        },
        run: {
            conditional: "Có điều kiện",
            essentials: "Đồ thiết yếu",
            finish: "Hoàn tất",
            firstAidKit: "Bộ sơ cứu",
            headlamp: "Đèn đội đầu",
            optional: "Tùy chọn",
            rainCover: "Tấm phủ chống mưa cho lều",
            requiredLeftTwo: "Còn 2 mục bắt buộc",
            requiredNow: "Hiện đang bắt buộc",
            subtitle: "Đã đánh dấu 3/5 mục bắt buộc",
            tent: "Lều",
            trailMap: "Bản đồ đường mòn",
            trekkingPoles: "Gậy đi bộ đường dài",
            waterBottle: "Bình nước ×2",
            doneHeading: "Đã xong (3)",
            filterAll: "Tất cả",
            filterOptional: "Tùy chọn",
            filterRemaining: "Còn lại",
        },
        schedule: {
            doesNotRepeat: "Không lặp lại",
            entry1Title: "Bắt đầu: Đi bộ đường dài cuối tuần",
            entry1When: "Thứ Bảy, 07:00",
            entry2Title: "Hoàn tất: Đi chợ hằng tuần",
            entry2When: "Hôm nay, 18:00",
            entry3Title: "Bắt đầu: Kiểm tra nhà trước chuyến bay",
            entry3When: "28 thg 7, 05:30",
            finishReminderLabel: "Lời nhắc hoàn tất",
            newReminder: "Lời nhắc mới",
            repeatsWeekly: "Lặp hằng tuần",
            startReminderLabel: "Lời nhắc bắt đầu",
            repeatsWeekdays: "Mỗi ngày từ thứ Hai đến thứ Sáu",
        },
        templates: {
            allChip: "Tất cả",
            carryOnSummary: "15 mục · 10 bắt buộc",
            grocerySummary: "9 mục · 9 bắt buộc",
            hikingSummary: "12 mục · 8 bắt buộc",
            newTemplate: "Mẫu mới",
            preFlightSummary: "6 mục · 6 bắt buộc",
            tagHome: "Nhà cửa",
            tagOutdoors: "Ngoài trời",
            tagTravel: "Du lịch",
        },
        backup: {
            badgeBody:
                "Bản sao lưu được mã hóa gồm mẫu, danh sách kiểm tra, ghi chú, lời nhắc và ảnh, được bảo vệ bằng cụm mật khẩu của bạn. Xuất không mã hóa là một lựa chọn riêng.",
            badgeNote:
                "Không cần tài khoản, không đồng bộ đám mây. Bạn chọn nơi lưu hoặc chia sẻ bản sao lưu.",
            badgeTitle: "Nội dung bản sao lưu",
            exportEncrypted: "Xuất bản sao lưu được mã hóa",
            exportPlain: "Xuất không mã hóa",
            intro: "Dữ liệu được lưu ngay trên thiết bị này. Xuất bản sao lưu để giữ một bản riêng hoặc khôi phục bản bạn đã lưu trước đó.",
            restore: "Khôi phục từ bản sao lưu",
            title: "Sao lưu và khôi phục",
        },
        start: {
            quickBody: "Không cần mẫu. Thêm mục và đánh dấu trong quá trình thực hiện.",
            quickTitle: "Danh sách kiểm tra nhanh",
            title: "Bắt đầu danh sách kiểm tra",
            writeBody: "Nhập hoặc dán toàn bộ danh sách, rồi bắt đầu đánh dấu các mục.",
            writeTitle: "Viết danh sách kiểm tra",
        },
        stats: {
            finishedRuns: "Danh sách đã hoàn tất",
            inProgress: "Đang thực hiện",
            itemsChecked: "Mục đã đánh dấu",
            missedHeading: "Hay bị bỏ trống nhất",
            missedHelp: "Các mục chưa được đánh dấu khi hoàn tất danh sách kiểm tra.",
            missedItem1: "Gậy đi bộ đường dài",
            missedItem1Count: "9 lần",
            missedItem2: "Đèn đội đầu",
            missedItem2Count: "6 lần",
            missedItem3: "Tấm phủ chống mưa cho lều",
            missedItem3Count: "2 lần",
            subtitle: "Được tính trên thiết bị này từ các danh sách đã lưu.",
            templates: "Mẫu",
            title: "Thống kê",
        },
    },
    siteShareRoller: { hint: "Kéo hoặc dùng phím ← → để xoay. Nhấp vào biểu tượng để chia sẻ." },
    siteShare: {
        copied: "Đã sao chép liên kết",
        copyLink: "Sao chép liên kết",
        error: "Không thể bắt đầu chia sẻ. Hãy thử lại hoặc sao chép liên kết.",
        heading: "Chia sẻ trang web này",
        manualCopy: "Sao chép liên kết này thủ công",
        nativeShare: "Chia sẻ bằng thiết bị của bạn",
        selectLabel: "Mạng xã hội hoặc cách chia sẻ",
        share: "Chia sẻ",
    },
    tryApp: {
        back: "Quay lại tổng quan",
        dismissNotice: "Đóng",
        iframeTitle: "NeuraTiM Checklist — ứng dụng tương tác",
        intro: "Đây là ứng dụng web hoạt động thực sự, không phải ảnh minh họa. Hãy dùng thử; danh sách kiểm tra của bạn được lưu trong trình duyệt này.",
        loading: "Đang tải ứng dụng…",
    },
    insights: {
        eyebrow: "Thống kê",
        heading: "Tiến độ của bạn, chỉ bạn xem.",
        intro: "Thống kê được tính ngay trên thiết bị từ các danh sách đã lưu, không phải bằng cách theo dõi hoạt động của bạn. Khi bạn xóa một danh sách, dữ liệu của danh sách đó không còn được tính. Không có bản ghi phân tích riêng nào được lưu.",
        points: [
            {
                title: "Biết bạn thường bỏ qua gì",
                body: "Xem những mục hay bị để trống nhất khi hoàn tất danh sách. Một mục tùy chọn mà bạn luôn bỏ qua có thể không cần nằm trong danh sách. Các mục hiện đang bắt buộc phải được đánh dấu trước khi hoàn tất.",
            },
            {
                title: "Nhìn toàn cảnh",
                body: "Xem bạn có bao nhiêu mẫu, bao nhiêu danh sách đã hoàn tất hoặc đang thực hiện và tổng số mục đã đánh dấu.",
            },
            {
                title: "Có số liệu, không có theo dõi",
                body: "Không có SDK phân tích, dịch vụ báo cáo sự cố hay báo cáo sử dụng gửi cho nhà phát triển. Thống kê danh sách kiểm tra chỉ nằm trên thiết bị của bạn.",
            },
        ],
    },
    quickStart: {
        eyebrow: "Bắt đầu sử dụng",
        heading: "Bớt gõ. Xong nhiều việc hơn.",
        intro: "Bắt đầu từ mẫu có sẵn, dán một danh sách hoặc tạo danh sách kiểm tra nhanh. Chọn cách phù hợp với bạn, không cần thêm từng mục từ đầu.",
        points: [
            {
                title: "Biến mẫu có sẵn thành mẫu của bạn",
                body: "Chọn Đi bộ đường dài, Đi chơi cuối tuần, Đi chợ, Túi đồ tập hoặc Trước khi ra khỏi nhà. Một bản sao sẽ được thêm vào bộ mẫu để bạn đổi tên và bỏ những mục không cần.",
            },
            {
                title: "Viết cả danh sách một lượt",
                body: "Dùng dòng đầu làm tên danh sách kiểm tra, mỗi dòng tiếp theo là một mục. Thêm đúng ký hiệu [optional] vào cuối dòng để mục đó là tùy chọn. Dán danh sách có sẵn và bắt đầu ngay.",
            },
            {
                title: "Dán vào danh sách hiện có",
                body: "Dấu đầu dòng và số thứ tự được tự động bỏ đi. Bắt đầu một dòng bằng 2x để đặt số lượng là hai. Biến cả trang ghi chú thành các mục riêng chỉ trong một lần.",
            },
            {
                title: "Hoặc bắt đầu bằng danh sách kiểm tra nhanh",
                body: "Không cần mẫu. Thêm mục khi cần, đọc tên mục trên thiết bị hỗ trợ nhập bằng giọng nói hoặc dùng mã vạch với tên đã lưu. Gợi ý được lấy từ tên các mục đã có trên thiết bị.",
            },
        ],
    },
    security: {
        eyebrow: "Bảo mật",
        heading: "Biết mình chia sẻ gì. Chọn cách bảo vệ dữ liệu.",
        intro: "Trước khi xuất hoặc chia sẻ, ứng dụng giải thích dữ liệu được bao gồm và có được mã hóa hay không. Bản sao lưu có thể chứa ảnh; mẫu và danh sách kiểm tra được chia sẻ thì không.",
        note: "Khóa ứng dụng kiểm soát quyền mở ứng dụng. Mã hóa bộ nhớ bảo vệ các tệp đã lưu. Đây là hai thiết lập riêng với mục đích khác nhau.",
        points: [
            {
                title: "Bản sao lưu được bảo vệ bằng cụm mật khẩu",
                body: "Argon2id dẫn xuất khóa và AES-GCM mã hóa bản sao lưu, tất cả ngay trên thiết bị. Hãy chọn cụm mật khẩu mạnh và cất giữ an toàn: nhà phát triển không thể khôi phục giúp bạn.",
            },
            {
                title: "Chỉ xuất không mã hóa khi bạn chủ động chọn",
                body: "Cần một tệp không mã hóa? Dùng lựa chọn xuất riêng có nhãn rõ ràng và xác nhận trước khi lưu. Bất kỳ ai truy cập được tệp đều có thể đọc nội dung.",
            },
            {
                title: "Mở khóa bằng xác thực của thiết bị",
                body: "Dùng vân tay, nhận diện khuôn mặt hoặc mã khóa thiết bị để mở ứng dụng. Hệ điều hành xử lý xác thực; ứng dụng không bao giờ nhận dữ liệu vân tay hay khuôn mặt của bạn.",
            },
            {
                title: "Bộ nhớ được mã hóa trên Android và iOS",
                body: "Bạn có thể chọn mã hóa danh sách kiểm tra, ghi chú và ảnh đã lưu. Dữ liệu khóa được bảo vệ bằng Android Keystore hoặc iOS Keychain.",
            },
        ],
    },
};

export default vi;
