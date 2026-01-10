// lang.js
// 全球化语言包 (13种语言支持)

// 1. 语言名称定义 (显示在下拉菜单中)
const languageNames = {
    "en": "English",             // 英语
    "zh": "简体中文",             // 中文
    "de": "Deutsch",             // 德语
    "ja": "日本語",               // 日语
    "fr": "Français",            // 法语
    "es": "Español",             // 西班牙语
    "pt": "Português",           // 葡萄牙语
    "ru": "Русский",             // 俄语
    "ko": "한국어",               // 韩语
    "ar": "العربية",             // 阿拉伯语 (从右向左)
    "vi": "Tiếng Việt",          // 越南语
    "th": "ไทย",                 // 泰语
    "id": "Bahasa Indonesia"     // 印尼语
};

// 2. 界面词汇翻译字典
const uiTranslations = {
    // --- 英语 (English) ---
    "en": {
        "site_title": "💡Mind Lab",
        "home_nav": "Home",
        "exit_nav": "Exit Quiz",
        "list_title": "✨Hot Quizzes✨",
        "start_btn": "Start Quiz",
        "back_home": "← Back to Home",
        "prev_btn": "Previous",
        "result_title": "Test Result",
        "restart_btn": "Retake Quiz",
        "share_label": "Share to:",
        "footer_slogan": "Explore your unknown self",
        "privacy": "Privacy Policy",
        "terms": "Disclaimer",
        "contact": "Contact Us",
        "loading": "Loading...",
        "copy_btn": "📋 Copy Link",
 	"rights_reserved": "All Rights Reserved",
       "alert_copy": "Link copied to clipboard!",
        // 弹窗内容
        "alert_privacy": "Privacy Policy: All data is stored locally in your browser and is not uploaded to any server.",
        "alert_terms": "Disclaimer: These results are for reference only and do not constitute professional medical advice.",
        "alert_contact": "Contact Us: Please email lifei444208421@gmail.com"
    },

    // --- 简体中文 ---
    "zh": {
        "site_title": "💡心灵实验室 Global",
        "home_nav": "首页",
        "exit_nav": "退出测试",
        "list_title": "✨热门测试列表✨",
        "start_btn": "开始测试",
        "back_home": "← 返回首页",
        "prev_btn": "上一题",
        "result_title": "测试结果",
        "restart_btn": "再测一次",
        "share_label": "分享结果：",
        "footer_slogan": "用心探索未知的自己",
        "privacy": "隐私政策",
        "terms": "免责声明",
        "contact": "联系我们",
        "loading": "加载中...",
        "copy_btn": "📋 复制链接",
	"rights_reserved": "版权所有",   
   	  "alert_copy": "链接已复制！",
        "alert_privacy": "隐私声明：您的所有测试数据仅保存在本地浏览器中，不会上传到任何服务器。",
        "alert_terms": "免责声明：本测试结果仅供参考，不能替代专业医疗诊断。",
        "alert_contact": "联系我们：如有问题或建议，请发送邮件至 lifei444208421@gmail.com"
    },

    // --- 德语 (Deutsch) ---
    "de": {
        "site_title": "💡Mind Lab Global",
        "home_nav": "Startseite",
        "exit_nav": "Beenden",
        "list_title": "✨Beliebte Tests✨",
        "start_btn": "Test starten",
        "back_home": "← Zurück",
        "prev_btn": "Zurück",
        "result_title": "Ergebnis",
        "restart_btn": "Wiederholen",
        "share_label": "Teilen:",
        "footer_slogan": "Erforsche dein unbekanntes Selbst",
        "privacy": "Datenschutz",
        "terms": "Haftungsausschluss",
        "contact": "Kontakt",
        "loading": "Laden...",
        "copy_btn": "📋 Link kopieren",
	"rights_reserved": "Alle Rechte vorbehalten", 
       "alert_copy": "Link kopiert!",
        "alert_privacy": "Datenschutz: Alle Daten werden lokal gespeichert.",
        "alert_terms": "Haftungsausschluss: Nur zu Referenzzwecken.",
        "alert_contact": "Kontakt: E-Mail an lifei444208421@gmail.com"
    },

    // --- 日语 (Japanese) ---
    "ja": {
        "site_title": "💡マインドラボ Global",
        "home_nav": "ホーム",
        "exit_nav": "終了",
        "list_title": "✨人気診断✨",
        "start_btn": "診断開始",
        "back_home": "← ホームに戻る",
        "prev_btn": "戻る",
        "result_title": "診断結果",
        "restart_btn": "もう一度",
        "share_label": "シェア:",
        "footer_slogan": "未知の自分を探求する",
        "privacy": "プライバシー",
        "terms": "免責事項",
        "contact": "お問い合わせ",
        "loading": "読み込み中...",
        "copy_btn": "📋 コピー",
	"rights_reserved": "全著作権所有",
        "alert_copy": "コピーしました！",
        "alert_privacy": "プライバシー: データはローカルにのみ保存されます。",
        "alert_terms": "免責事項: 結果は参考用です。",
        "alert_contact": "お問い合わせ: lifei444208421@gmail.com までメールしてください"
    },

    // --- 法语 (French) ---
    "fr": {
        "site_title": "💡Labo Esprit Global",
        "home_nav": "Accueil",
        "exit_nav": "Quitter",
        "list_title": "✨Tests Populaires✨",
        "start_btn": "Commencer",
        "back_home": "← Retour",
        "prev_btn": "Précédent",
        "result_title": "Résultat",
        "restart_btn": "Refaire",
        "share_label": "Partager:",
        "footer_slogan": "Explorez votre moi inconnu",
        "privacy": "Confidentialité",
        "terms": "Avis de non-responsabilité",
        "contact": "Contact",
        "loading": "Chargement...",
        "copy_btn": "📋 Copier",
	"rights_reserved": "Tous droits réservés",
        "alert_copy": "Lien copié !",
        "alert_privacy": "Confidentialité: Les données sont stockées localement.",
        "alert_terms": "Avis: Résultats à titre indicatif seulement.",
        "alert_contact": "Contact: lifei444208421@gmail.com"
    },

    // --- 西班牙语 (Spanish) ---
    "es": {
        "site_title": "💡Lab Mental Global",
        "home_nav": "Inicio",
        "exit_nav": "Salir",
        "list_title": "✨Tests Populares✨",
        "start_btn": "Empezar",
        "back_home": "← Volver",
        "prev_btn": "Anterior",
        "result_title": "Resultado",
        "restart_btn": "Repetir",
        "share_label": "Compartir:",
        "footer_slogan": "Explora tu yo desconocido",
        "privacy": "Privacidad",
        "terms": "Descargo",
        "contact": "Contacto",
        "loading": "Cargando...",
        "copy_btn": "📋 Copiar",
	"rights_reserved": "Todos los derechos reservados",
        "alert_copy": "¡Enlace copiado!",
        "alert_privacy": "Privacidad: Los datos se guardan localmente.",
        "alert_terms": "Descargo: Resultados solo como referencia.",
        "alert_contact": "Contacto: lifei444208421@gmail.com"
    },

    // --- 葡萄牙语 (Portuguese) ---
    "pt": {
        "site_title": "💡Lab da Mente Global",
        "home_nav": "Início",
        "exit_nav": "Sair",
        "list_title": "✨Testes Populares✨",
        "start_btn": "Começar",
        "back_home": "← Voltar",
        "prev_btn": "Anterior",
        "result_title": "Resultado",
        "restart_btn": "Refazer",
        "share_label": "Partilhar:",
        "footer_slogan": "Explore o seu eu desconhecido",
        "privacy": "Privacidade",
        "terms": "Isenção",
        "contact": "Contato",
        "loading": "Carregando...",
        "copy_btn": "📋 Copiar",
	"rights_reserved": "Todos os direitos reservados",   
     "alert_copy": "Link copiado!",
        "alert_privacy": "Privacidade: Dados armazenados localmente.",
        "alert_terms": "Isenção: Resultados apenas para referência.",
        "alert_contact": "Contato: lifei444208421@gmail.com"
    },

    // --- 俄语 (Russian) ---
    "ru": {
        "site_title": "💡Mind Lab Global",
        "home_nav": "Главная",
        "exit_nav": "Выход",
        "list_title": "✨Популярные тесты✨",
        "start_btn": "Начать тест",
        "back_home": "← На главную",
        "prev_btn": "Назад",
        "result_title": "Результат",
        "restart_btn": "Заново",
        "share_label": "Поделиться:",
        "footer_slogan": "Исследуйте свое неизвестное Я",
        "privacy": "Конфиденциальность",
        "terms": "Отказ от ответственности",
        "contact": "Контакты",
        "loading": "Загрузка...",
        "copy_btn": "📋 Копировать",
	"rights_reserved": "Все права защищены",  
      "alert_copy": "Ссылка скопирована!",
        "alert_privacy": "Данные хранятся локально.",
        "alert_terms": "Результаты только для справки.",
        "alert_contact": "Email: lifei444208421@gmail.com"
    },

    // --- 韩语 (Korean) ---
    "ko": {
        "site_title": "💡마인드 랩 Global",
        "home_nav": "홈",
        "exit_nav": "나가기",
        "list_title": "✨인기 테스트✨",
        "start_btn": "테스트 시작",
        "back_home": "← 홈으로",
        "prev_btn": "이전",
        "result_title": "결과",
        "restart_btn": "다시하기",
        "share_label": "공유하기:",
        "footer_slogan": "미지의 자신을 탐험하세요",
        "privacy": "개인정보",
        "terms": "면책 조항",
        "contact": "문의하기",
        "loading": "로딩 중...",
        "copy_btn": "📋 복사",
	"rights_reserved": "판권 소유",
        "alert_copy": "링크 복사됨!",
        "alert_privacy": "데이터는 로컬에만 저장됩니다.",
        "alert_terms": "결과는 참고용입니다.",
        "alert_contact": "문의: lifei444208421@gmail.com"
    },

    // --- 阿拉伯语 (Arabic) ---
    "ar": {
        "site_title": "💡مختبر العقل",
        "home_nav": "الرئيسية",
        "exit_nav": "خروج",
        "list_title": "✨الاختبارات الشائعة✨",
        "start_btn": "ابدأ الاختبار",
        "back_home": "← العودة",
        "prev_btn": "سابق",
        "result_title": "النتيجة",
        "restart_btn": "إعادة",
        "share_label": "مشاركة:",
        "footer_slogan": "اكتشف ذاتك المجهولة",
        "privacy": "الخصوصية",
        "terms": "إخلاء المسؤولية",
        "contact": "اتصل بنا",
        "loading": "جار التحميل...",
        "copy_btn": "📋 نسخ",
	"rights_reserved": "جميع الحقوق محفوظة",
        "alert_copy": "تم نسخ الرابط!",
        "alert_privacy": "يتم تخزين البيانات محليًا فقط.",
        "alert_terms": "النتائج للأغراض المرجعية فقط.",
        "alert_contact": "راسلنا: lifei444208421@gmail.com"
    },

    // --- 越南语 (Vietnamese) ---
    "vi": {
        "site_title": "💡Mind Lab Global",
        "home_nav": "Trang chủ",
        "exit_nav": "Thoát",
        "list_title": "✨Bài kiểm tra phổ biến✨",
        "start_btn": "Bắt đầu",
        "back_home": "← Quay lại",
        "prev_btn": "Trước",
        "result_title": "Kết quả",
        "restart_btn": "Làm lại",
        "share_label": "Chia sẻ:",
        "footer_slogan": "Khám phá bản thân",
        "privacy": "Riêng tư",
        "terms": "Miễn trừ",
        "contact": "Liên hệ",
        "loading": "Đang tải...",
        "copy_btn": "📋 Sao chép",
	"rights_reserved": "Đã đăng ký bản quyền",
        "alert_copy": "Đã sao chép!",
        "alert_privacy": "Dữ liệu được lưu cục bộ.",
        "alert_terms": "Kết quả chỉ mang tính tham khảo.",
        "alert_contact": "Email: lifei444208421@gmail.com"
    },

    // --- 泰语 (Thai) ---
    "th": {
        "site_title": "💡Mind Lab Global",
        "home_nav": "หน้าแรก",
        "exit_nav": "ออก",
        "list_title": "✨แบบทดสอบยอดนิยม✨",
        "start_btn": "เริ่มเลย",
        "back_home": "← กลับ",
        "prev_btn": "ก่อนหน้า",
        "result_title": "ผลลัพธ์",
        "restart_btn": "ทำอีกครั้ง",
        "share_label": "แชร์:",
        "footer_slogan": "ค้นพบตัวตนของคุณ",
        "privacy": "ความเป็นส่วนตัว",
        "terms": "ข้อจำกัดความรับผิดชอบ",
        "contact": "ติดต่อเรา",
        "loading": "กำลังโหลด...",
        "copy_btn": "📋 คัดลอก",
	"rights_reserved": "สงวนลิขสิทธิ์",
        "alert_copy": "คัดลอกแล้ว!",
        "alert_privacy": "ข้อมูลถูกเก็บไว้ในเครื่องเท่านั้น",
        "alert_terms": "ผลลัพธ์สำหรับการอ้างอิงเท่านั้น",
        "alert_contact": "อีเมล: lifei444208421@gmail.com"
    },

    // --- 印尼语 (Indonesian) ---
    "id": {
        "site_title": "💡Mind Lab Global",
        "home_nav": "Beranda",
        "exit_nav": "Keluar",
        "list_title": "✨Kuis Populer✨",
        "start_btn": "Mulai",
        "back_home": "← Kembali",
        "prev_btn": "Sebelumnya",
        "result_title": "Hasil",
        "restart_btn": "Ulangi",
        "share_label": "Bagikan:",
        "footer_slogan": "Jelajahi diri Anda",
        "privacy": "Privasi",
        "terms": "Penafian",
        "contact": "Kontak",
        "loading": "Memuat...",
        "copy_btn": "📋 Salin",
	"rights_reserved": "Hak cipta dilindungi",
        "alert_copy": "Tautan disalin!",
        "alert_privacy": "Data disimpan secara lokal.",
        "alert_terms": "Hasil hanya untuk referensi.",
        "alert_contact": "Email: lifei444208421@gmail.com"
    }
};