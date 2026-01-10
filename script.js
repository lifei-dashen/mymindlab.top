// script.js
// 核心逻辑：依赖 lang.js 进行全球化，动态加载测试

// 1. 全局变量
let currentLang = localStorage.getItem('site-lang') || 'en';
let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuizData = null; 

// --- 首页测试列表数据 (11个测试 x 13种语言) ---
// 【关键修复】将测试编号属性改为 "quizId"，防止与印尼语 "id" 属性冲突
const quizListMeta = [
    {
        quizId: 'test1', // 对应 data/test1.js
        icon: '😫',
        en: { title: "Fatigue Assessment", desc: "Feeling burned out? Check your fatigue level quickly." },
        zh: { title: "深度疲劳综合评估", desc: "身体被掏空？测测你的疲劳指数。" },
        de: { title: "Müdigkeitstest", desc: "Fühlen Sie sich ausgebrannt? Testen Sie Ihre Müdigkeit." },
        ja: { title: "疲労度チェック", desc: "最近、疲れていませんか？疲労レベルを診断します。" },
        fr: { title: "Évaluation de la Fatigue", desc: "Vous sentez-vous épuisé ? Vérifiez votre niveau de fatigue." },
        es: { title: "Evaluación de Fatiga", desc: "¿Te sientes agotado? Comprueba tu nivel de fatiga." },
        pt: { title: "Avaliação de Fadiga", desc: "Sente-se esgotado? Verifique seu nível de fadiga." },
        ru: { title: "Оценка усталости", desc: "Чувствуете выгорание? Проверьте уровень усталости." },
        ko: { title: "피로도 자가진단", desc: "번아웃을 느끼시나요? 피로도를 확인해보세요." },
        ar: { title: "تقييم التعب", desc: "هل تشعر بالإرهاق؟ تحقق من مستوى تعبك بسرعة." },
        vi: { title: "Đánh giá sự mệt mỏi", desc: "Bạn có thấy kiệt sức? Kiểm tra mức độ mệt mỏi ngay." },
        th: { title: "แบบประเมินความเหนื่อยล้า", desc: "รู้สึกหมดไฟไหม? เช็คระดับความเหนื่อยล้าของคุณ" },
        id: { title: "Tes Kelelahan", desc: "Merasa lelah mental? Cek tingkat kelelahan Anda." }
    },
    {
        quizId: 'test2',
        icon: '❤️',
        en: { title: "Love Style Test", desc: "Discover your attachment style and love patterns." },
        zh: { title: "恋爱人格测试", desc: "深度解析你的依恋模式和恋爱雷点。" },
        de: { title: "Liebesstil-Test", desc: "Entdecken Sie Ihren Bindungsstil und Liebesmuster." },
        ja: { title: "恋愛スタイル診断", desc: "あなたの愛着スタイルと恋愛パターンを発見します。" },
        fr: { title: "Test de Style Amoureux", desc: "Découvrez votre style d'attachement et vos schémas amoureux." },
        es: { title: "Test de Estilo Amoroso", desc: "Descubre tu estilo de apego y patrones amorosos." },
        pt: { title: "Estilo de Amor", desc: "Descubra seu estilo de apego e padrões amorosos." },
        ru: { title: "Тест на стиль любви", desc: "Узнайте свой тип привязанности и любовные паттерны." },
        ko: { title: "연애 스타일 테스트", desc: "당신의 애착 유형과 연애 패턴을 알아보세요." },
        ar: { title: "اختبار أسلوب الحب", desc: "اكتشف أسلوب تعلقك وأنماط الحب لديك." },
        vi: { title: "Trắc nghiệm phong cách yêu", desc: "Khám phá kiểu gắn bó và xu hướng tình yêu của bạn." },
        th: { title: "แบบทดสอบรูปแบบความรัก", desc: "ค้นพบรูปแบบความผูกพันและความรักของคุณ" },
        id: { title: "Tes Gaya Cinta", desc: "Temukan gaya keterikatan dan pola cinta Anda." }
    },
    {
        quizId: 'test3',
        icon: '👶',
        en: { title: "Mental Age Test", desc: "Are you a child or an old soul at heart?" },
        zh: { title: "心理年龄测试", desc: "你的外表和灵魂一样大吗？测测你的真实心理年龄。" },
        de: { title: "Geistiges Alter Test", desc: "Sind Sie im Herzen ein Kind oder eine alte Seele?" },
        ja: { title: "精神年齢診断", desc: "あなたの心は子供？それとも成熟した大人？" },
        fr: { title: "Test d'Âge Mental", desc: "Êtes-vous un enfant ou une vieille âme dans l'âme ?" },
        es: { title: "Test de Edad Mental", desc: "¿Eres un niño o un alma vieja en el fondo?" },
        pt: { title: "Teste de Idade Mental", desc: "Você é uma criança ou uma alma velha no coração?" },
        ru: { title: "Психологический возраст", desc: "Ребенок ли вы в душе или мудрый старец?" },
        ko: { title: "정신 연령 테스트", desc: "당신의 마음은 어린아이인가요, 아니면 성숙한가요?" },
        ar: { title: "اختبار العمر العقلي", desc: "هل أنت طفل أم روح عجوز في القلب؟" },
        vi: { title: "Kiểm tra tuổi tâm hồn", desc: "Tâm hồn bạn là một đứa trẻ hay một người từng trải?" },
        th: { title: "แบบทดสอบอายุทางจิต", desc: "ลึกๆ แล้วคุณเป็นเด็กหรือผู้ใหญ่?" },
        id: { title: "Tes Usia Mental", desc: "Apakah hati Anda seperti anak kecil atau jiwa tua?" }
    },
    {
        quizId: 'test4',
        icon: '🤝',
        en: { title: "EQ Test (International)", desc: "Are you a social genius or socially awkward?" },
        zh: { title: "国际标准EQ情商测试", desc: "测测你是社交天才还是冷场王！" },
        de: { title: "EQ-Test (International)", desc: "Sind Sie ein soziales Genie oder eher zurückhaltend?" },
        ja: { title: "EQ（心の知能指数）診断", desc: "あなたは社交の天才？それとも不器用？" },
        fr: { title: "Test de QE (International)", desc: "Êtes-vous un génie social ou socialement maladroit ?" },
        es: { title: "Test de IE (Internacional)", desc: "¿Eres un genio social o socialmente torpe?" },
        pt: { title: "Teste de QE (Internacional)", desc: "Você é um gênio social ou socialmente desajeitado?" },
        ru: { title: "Тест на Эмоциональный Интеллект", desc: "Вы социальный гений или испытываете неловкость?" },
        ko: { title: "EQ 감성 지수 테스트", desc: "당신은 사교의 천재인가요, 아니면 어색한가요?" },
        ar: { title: "اختبار الذكاء العاطفي", desc: "هل أنت عبقري اجتماعي أم محرج اجتماعياً؟" },
        vi: { title: "Trắc nghiệm EQ Quốc tế", desc: "Bạn là thiên tài xã giao hay người hay ngại ngùng?" },
        th: { title: "แบบทดสอบ EQ สากล", desc: "คุณเป็นอัจฉริยะทางสังคมหรือเข้าสังคมไม่เก่ง?" },
        id: { title: "Tes EQ (Internasional)", desc: "Apakah Anda jenius sosial atau canggung secara sosial?" }
    },
    {
        quizId: 'test5',
        icon: '💎',
        en: { title: "Hidden Talent Test", desc: "Logic or Art? Find your brain's factory settings." },
        zh: { title: "隐藏天赋潜能测试", desc: "挖掘你潜意识里被忽略的顶级天赋，逻辑还是艺术？" },
        de: { title: "Versteckte Talente Test", desc: "Logik oder Kunst? Finden Sie Ihre Werkseinstellungen." },
        ja: { title: "隠れた才能診断", desc: "論理派？芸術派？あなたの脳の初期設定を探ります。" },
        fr: { title: "Test des Talents Cachés", desc: "Logique ou Art ? Trouvez les réglages d'usine de votre cerveau." },
        es: { title: "Test de Talentos Ocultos", desc: "¿Lógica o Arte? Encuentra la configuración de fábrica de tu cerebro." },
        pt: { title: "Teste de Talentos Ocultos", desc: "Lógica ou Arte? Encontre as configurações de fábrica do seu cérebro." },
        ru: { title: "Тест на скрытые таланты", desc: "Логика или искусство? Узнайте настройки своего мозга." },
        ko: { title: "숨겨진 재능 테스트", desc: "논리인가 예술인가? 당신 뇌의 잠재력을 확인하세요." },
        ar: { title: "اختبار المواهب الخفية", desc: "منطق أم فن؟ اكتشف إعدادات دماغك الافتراضية." },
        vi: { title: "Trắc nghiệm tài năng ẩn giấu", desc: "Logic hay Nghệ thuật? Tìm ra thế mạnh bẩm sinh của bạn." },
        th: { title: "แบบทดสอบพรสวรรค์ที่ซ่อนอยู่", desc: "ตรรกะหรือศิลปะ? ค้นหาการตั้งค่าดั้งเดิมของสมองคุณ" },
        id: { title: "Tes Bakat Tersembunyi", desc: "Logika atau Seni? Temukan pengaturan pabrik otak Anda." }
    },
    {
        quizId: 'test6',
        icon: '🏯',
        en: { title: "Ancient Role Test", desc: "Who would you be in ancient times? A warrior or a sage?" },
        zh: { title: "穿越古代角色测试", desc: "回到古代，你是宰相、侠客还是隐士？" },
        de: { title: "Antike Rolle Test", desc: "Wer wären Sie in alten Zeiten? Ein Krieger oder ein Weiser?" },
        ja: { title: "前世・古代役職診断", desc: "古代ならあなたは誰？戦士？それとも賢者？" },
        fr: { title: "Test du Rôle Ancien", desc: "Qui seriez-vous dans les temps anciens ? Un guerrier ou un sage ?" },
        es: { title: "Test de Rol Antiguo", desc: "¿Quién serías en la antigüedad? ¿Un guerrero o un sabio?" },
        pt: { title: "Teste de Papel Antigo", desc: "Quem você seria nos tempos antigos? Um guerreiro ou um sábio?" },
        ru: { title: "Тест: Роль в древности", desc: "Кем бы вы были в древности? Воином или мудрецом?" },
        ko: { title: "고대 역할 테스트", desc: "고대에 태어났다면 당신은 전사일까요, 현자일까요?" },
        ar: { title: "اختبار الدور القديم", desc: "من كنت لتكون في العصور القديمة؟ محارب أم حكيم؟" },
        vi: { title: "Trắc nghiệm vai trò cổ đại", desc: "Bạn sẽ là ai trong thời cổ đại? Chiến binh hay hiền triết?" },
        th: { title: "แบบทดสอบบทบาทในอดีต", desc: "คุณจะเป็นใครในยุคโบราณ? นักรบหรือปราชญ์?" },
        id: { title: "Tes Peran Kuno", desc: "Siapa Anda di zaman kuno? Seorang pejuang atau orang bijak?" }
    },
    {
        quizId: 'test7',
        icon: '🦌',
        en: { title: "Spirit Animal Test", desc: "Deer, Wolf, or Eagle? Find your soul totem." },
        zh: { title: "灵魂动物测试", desc: "温温柔的灵鹿，还是孤傲的雄鹰？寻找你的灵魂图腾。" },
        de: { title: "Seelentier-Test", desc: "Hirsch, Wolf oder Adler? Finden Sie Ihr Totem." },
        ja: { title: "守護動物診断", desc: "鹿、狼、それとも鷲？あなたの魂のトーテムを見つけます。" },
        fr: { title: "Test de l'Animal Totem", desc: "Cerf, Loup ou Aigle ? Trouvez votre totem spirituel." },
        es: { title: "Test de Animal Espiritual", desc: "¿Ciervo, Lobo o Águila? Encuentra tu tótem del alma." },
        pt: { title: "Teste de Animal Espiritual", desc: "Cervo, Lobo ou Águia? Encontre seu totem da alma." },
        ru: { title: "Тотемное животное", desc: "Олень, Волк или Орел? Найдите свой тотем." },
        ko: { title: "영혼의 동물 테스트", desc: "사슴, 늑대, 독수리? 당신의 영혼을 상징하는 동물을 찾으세요." },
        ar: { title: "اختبار الحيوان الروحي", desc: "غزال، ذئب، أم نسر؟ اعثر على طوطم روحك." },
        vi: { title: "Trắc nghiệm linh vật", desc: "Hươu, Sói hay Đại bàng? Tìm linh vật tâm hồn của bạn." },
        th: { title: "แบบทดสอบสัตว์วิญญาณ", desc: "กวาง หมาป่า หรืออินทรี? ค้นหาโทเท็มวิญญาณของคุณ" },
        id: { title: "Tes Hewan Rohani", desc: "Rusa, Serigala, atau Elang? Temukan totem jiwa Anda." }
    },
    {
        quizId: 'test8',
        icon: '💰',
        en: { title: "Wealth Potential Test", desc: "Predict your chance of becoming rich in 5 years." },
        zh: { title: "未来5年暴富指数", desc: "测测你离财富自由还有多远，预测你的暴富概率。" },
        de: { title: "Reichtumspotenzial-Test", desc: "Wie hoch ist Ihre Chance, in 5 Jahren reich zu sein?" },
        ja: { title: "金運・富豪ポテンシャル診断", desc: "5年後にお金持ちになる確率は？" },
        fr: { title: "Potentiel de Richesse", desc: "Prédisez vos chances de devenir riche dans 5 ans." },
        es: { title: "Potencial de Riqueza", desc: "Predice tus posibilidades de ser rico en 5 años." },
        pt: { title: "Potencial de Riqueza", desc: "Preveja sua chance de ficar rico em 5 anos." },
        ru: { title: "Потенциал богатства", desc: "Каковы ваши шансы разбогатеть через 5 лет?" },
        ko: { title: "부자 될 확률 테스트", desc: "5년 후 당신이 부자가 될 확률을 예측해드립니다." },
        ar: { title: "اختبار إمكانات الثروة", desc: "توقع فرصتك في أن تصبح غنياً خلال 5 سنوات." },
        vi: { title: "Tiềm năng giàu có", desc: "Dự đoán cơ hội trở nên giàu có của bạn trong 5 năm tới." },
        th: { title: "แบบทดสอบศักยภาพความมั่งคั่ง", desc: "ทำนายโอกาสรวยของคุณในอีก 5 ปีข้างหน้า" },
        id: { title: "Tes Potensi Kekayaan", desc: "Prediksi peluang Anda menjadi kaya dalam 5 tahun." }
    },
    {
        quizId: 'test9',
        icon: '🧠',
        en: { title: "Brain Gender Test", desc: "Is your brain Male or Female type? Based on BSRI." },
        zh: { title: "BSRI专业心理性别测试", desc: "你的大脑偏男性还是女性？基于共情与系统化理论的深层评估。" },
        de: { title: "Gehirngeschlecht-Test", desc: "Ist Ihr Gehirn männlich oder weiblich? Basierend auf BSRI." },
        ja: { title: "脳の性別診断", desc: "あなたの脳は男性型？女性型？BSRI理論に基づき診断します。" },
        fr: { title: "Genre du Cerveau", desc: "Votre cerveau est-il de type masculin ou féminin ? Basé sur le BSRI." },
        es: { title: "Test de Género Cerebral", desc: "¿Tu cerebro es masculino o femenino? Basado en BSRI." },
        pt: { title: "Gênero Cerebral", desc: "Seu cérebro é do tipo masculino ou feminino? Baseado no BSRI." },
        ru: { title: "Тест на пол мозга", desc: "Ваш мозг мужского или женского типа? На основе BSRI." },
        ko: { title: "뇌 성별 테스트", desc: "당신의 뇌는 남성형인가요, 여성형인가요? BSRI 기반." },
        ar: { title: "اختبار جنس الدماغ", desc: "هل دماغك من النوع الذكري أم الأنثوي؟ بناءً على BSRI." },
        vi: { title: "Trắc nghiệm giới tính não bộ", desc: "Não bộ của bạn thiên về Nam hay Nữ? Dựa trên BSRI." },
        th: { title: "แบบทดสอบเพศสมอง", desc: "สมองของคุณเป็นแบบชายหรือหญิง? อิงตาม BSRI" },
        id: { title: "Tes Gender Otak", desc: "Apakah otak Anda tipe Pria atau Wanita? Berdasarkan BSRI." }
    },
    {
        quizId: 'test10',
        icon: '💀',
        en: { title: "Seven Deadly Sins", desc: "Which sin dominates your soul? Pride, Envy, or Greed?" },
        zh: { title: "七宗罪灵魂原罪测试", desc: "傲慢、嫉妒、贪婪...谁是你灵魂的主宰？" },
        de: { title: "Die 7 Todsünden", desc: "Welche Sünde dominiert Ihre Seele? Stolz, Neid oder Gier?" },
        ja: { title: "7つの大罪診断", desc: "あなたの魂を支配する罪は？傲慢、嫉妬、それとも強欲？" },
        fr: { title: "Les 7 Péchés Capitaux", desc: "Quel péché domine votre âme ? Orgueil, Envie ou Avarice ?" },
        es: { title: "Los 7 Pecados Capitales", desc: "¿Qué pecado domina tu alma? ¿Soberbia, Envidia o Avaricia?" },
        pt: { title: "Os 7 Pecados Capitais", desc: "Qual pecado domina sua alma? Orgulho, Inveja ou Ganância?" },
        ru: { title: "7 смертных грехов", desc: "Какой грех доминирует в вашей душе? Гордыня, Зависть или Алчность?" },
        ko: { title: "7대 죄악 테스트", desc: "당신의 영혼을 지배하는 죄는 무엇입니까? 교만, 시기, 탐욕?" },
        ar: { title: "الخطايا السبع المميتة", desc: "أي خطيئة تسيطر على روحك؟ الكبرياء، الحسد، أم الجشع؟" },
        vi: { title: "7 Tội lỗi chết người", desc: "Tội lỗi nào chi phối linh hồn bạn? Kiêu ngạo, Đố kỵ hay Tham lam?" },
        th: { title: "แบบทดสอบบาป 7 ประการ", desc: "บาปไหนที่ครอบงำจิตวิญญาณคุณ? อัตตา ริษยา หรือโลภะ?" },
        id: { title: "7 Dosa Mematikan", desc: "Dosa apa yang mendominasi jiwa Anda? Kesombongan, Iri Hati, atau Keserakahan?" }
    },
    {
        quizId: 'test11',
        icon: '🏳️‍🌈',
        en: { title: "Psychosexual Orientation", desc: "Explore your true attraction patterns on the spectrum." },
        zh: { title: "心理性取向谱系评估", desc: "基于金赛量表，定位你的真实性取向坐标。" },
        de: { title: "Psychosexuelle Orientierung", desc: "Entdecken Sie Ihre wahren Anziehungsmuster." },
        ja: { title: "心理的性的指向診断", desc: "あなたの本当の魅力のパターンを探ります。" },
        fr: { title: "Orientation Psychosexuelle", desc: "Explorez vos véritables modèles d'attraction." },
        es: { title: "Orientación Psicosexual", desc: "Explora tus verdaderos patrones de atracción." },
        pt: { title: "Orientação Psicossexual", desc: "Explore seus verdadeiros padrões de atração." },
        ru: { title: "Психосексуальная ориентация", desc: "Исследуйте свои истинные модели влечения." },
        ko: { title: "심리성적 지향 테스트", desc: "당신의 진정한 끌림 패턴을 탐색하세요." },
        ar: { title: "التوجه النفسي الجنسي", desc: "اكتشف أنماط الانجذاب الحقيقية لديك." },
        vi: { title: "Khuynh hướng Tâm lý Tình dục", desc: "Khám phá các mô hình hấp dẫn thực sự của bạn." },
        th: { title: "รสนิยมทางเพศเชิงจิตวิทยา", desc: "สำรวจรูปแบบความดึงดูดที่แท้จริงของคุณ" },
        id: { title: "Orientasi Psikoseksual", desc: "Jelajahi pola ketertarikan Anda yang sebenarnya." }
    },
{
        quizId: 'test12',
        icon: '🌌',
        en: { title: "Life Frequency Test", desc: "Based on Hawkins Scale (0-1000 Hz). What is your vibration level?" },
        zh: { title: "生命频率与内在状态测试", desc: "基于霍金斯能量层级 (0-1000 Hz)。万物皆有频率，测测你的生命振动赫兹。" },
        de: { title: "Lebensfrequenz-Test", desc: "Basierend auf der Hawkins-Skala (0-1000 Hz). Wie hoch ist Ihre Schwingung?" },
        ja: { title: "生命周波数テスト", desc: "ホーキンズ博士の意識レベル (0-1000 Hz)。あなたの魂の振動数は？" },
        fr: { title: "Test de Fréquence de Vie", desc: "Basé sur l'échelle de Hawkins (0-1000 Hz). Quelle est votre vibration ?" },
        es: { title: "Test de Frecuencia Vital", desc: "Basado en la Escala Hawkins (0-1000 Hz). ¿Cuál es tu vibración?" },
        pt: { title: "Teste de Frequência de Vida", desc: "Baseado na Escala Hawkins (0-1000 Hz). Qual é a sua vibração?" },
        ru: { title: "Тест жизненной частоты", desc: "Шкала Хокинса (0-1000 Гц). Какова ваша вибрация?" },
        ko: { title: "생명 주파수 테스트", desc: "호킨스 척도 (0-1000 Hz). 당신의 진동 수준은?" },
        ar: { title: "اختبار تردد الحياة", desc: "مقياس هوكينز (0-1000 هرتز). ما هو مستوى اهتزازك؟" },
        vi: { title: "Kiểm tra Tần số Cuộc sống", desc: "Thang đo Hawkins (0-1000 Hz). Mức rung động của bạn là bao nhiêu?" },
        th: { title: "แบบทดสอบคลื่นความถี่ชีวิต", desc: "ระดับฮอว์กินส์ (0-1000 Hz). ระดับการสั่นสะเทือนของคุณคือเท่าไร?" },
        id: { title: "Tes Frekuensi Kehidupan", desc: "Berdasarkan Skala Hawkins (0-1000 Hz). Berapa level getaran Anda?" }
    },
{
        quizId: 'test13',
        icon: '🏥',
        en: { title: "SCL-90 Symptom Checklist", desc: "Professional mental health assessment (90 questions)." },
        zh: { title: "SCL-90 心理健康症状自评", desc: "国际通用心理健康检测，90道题深度评估。" },
        de: { title: "SCL-90 Symptom-Checkliste", desc: "Professionelle Bewertung der psychischen Gesundheit." },
        ja: { title: "SCL-90 症状チェックリスト", desc: "専門的なメンタルヘルス評価。" },
        fr: { title: "Liste de contrôle SCL-90", desc: "Évaluation professionnelle de la santé mentale." },
        es: { title: "Lista de verificación SCL-90", desc: "Evaluación profesional de salud mental." },
        pt: { title: "Lista de verificação SCL-90", desc: "Avaliação profissional da saúde mental." },
        ru: { title: "Опросник SCL-90", desc: "Профессиональная оценка психического здоровья." },
        ko: { title: "SCL-90 증상 체크리스트", desc: "전문적인 정신 건강 평가." },
        ar: { title: "قائمة أعراض SCL-90", desc: "تقييم الصحة النفسية المهنية." },
        vi: { title: "Bảng kiểm triệu chứng SCL-90", desc: "Đánh giá sức khỏe tâm thần chuyên nghiệp." },
        th: { title: "แบบประเมินอาการ SCL-90", desc: "การประเมินสุขภาพจิตระดับมืออาชีพ" },
        id: { title: "Daftar Periksa Gejala SCL-90", desc: "Penilaian kesehatan mental profesional." }
    }
];

// 2. 页面初始化
window.onload = function() {
    initLangSelector();
    applyLanguage(currentLang);
    bindFooterLinks();
    
    // 判断是首页还是答题页
    if (document.getElementById('quiz-list-container')) {
        renderHomeList();
    } else {
        loadQuizData();
    }
};

// --- 语言核心功能 (直接调用 lang.js 中的变量) ---

function initLangSelector() {
    const selector = document.getElementById('lang-selector');
    if(!selector) return;

    // 检测 lang.js 是否加载
    if (typeof languageNames === 'undefined') {
        console.error("lang.js not loaded. Make sure <script src='lang.js'></script> is in HTML.");
        return;
    }

    selector.innerHTML = "";
    for (const [code, name] of Object.entries(languageNames)) {
        const option = document.createElement('option');
        option.value = code;
        option.innerText = name;
        if (code === currentLang) option.selected = true;
        selector.appendChild(option);
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site-lang', lang);
    location.reload(); 
}

function applyLanguage(lang) {
    // 设置文字方向
    if (lang === 'ar') document.body.dir = "rtl";
    else document.body.dir = "ltr";

    const elements = document.querySelectorAll('[data-i18n]');
    
    // 检测 uiTranslations
    if (typeof uiTranslations === 'undefined') return;

    const t = uiTranslations[lang] || uiTranslations['en'];

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t && t[key]) el.innerText = t[key];
    });
}

function bindFooterLinks() {
    const actions = {
        'link-privacy': 'alert_privacy',
        'link-terms': 'alert_terms',
        'link-contact': 'alert_contact'
    };

    for (const [id, key] of Object.entries(actions)) {
        const el = document.getElementById(id);
        if (el) {
            el.onclick = function() {
                if (typeof uiTranslations !== 'undefined') {
                    const t = uiTranslations[currentLang] || uiTranslations['en'];
                    const msg = t[key] || "Content coming soon";
                    alert(msg);
                }
            };
        }
    }
}

// --- 首页逻辑 (关键修复：使用 quizId) ---

function renderHomeList() {
    const container = document.getElementById('quiz-list-container');
    if (!container) return;

    container.innerHTML = ""; 

    quizListMeta.forEach(quiz => {
        let info = quiz[currentLang] || quiz['en'] || { title: "Quiz", desc: "..." };
        
        const li = document.createElement('li');
        // 【核心修复】使用 quiz.quizId 生成链接
        // 之前使用 quiz.id 会被印尼语 (id) 属性覆盖，导致 [object Object] 错误
        li.innerHTML = `
            <a href="quiz.html?id=${quiz.quizId}" class="quiz-link">
                <h3>${quiz.icon} ${info.title}</h3>
                <p>${info.desc}</p>
            </a>
        `;
        container.appendChild(li);
    });
}

// --- 答题页逻辑 ---

function loadQuizData() {
    const urlParams = new URLSearchParams(window.location.search);
    let testId = urlParams.get('id');

    // 容错处理
    if (!testId || testId === '[object Object]') {
        testId = 'test1'; 
    }

    const script = document.createElement('script');
    script.src = `data/${testId}.js`;
    
    script.onload = function() {
        if (typeof quizDataMulti !== 'undefined') {
            currentQuizData = quizDataMulti[currentLang] || quizDataMulti['en'];
        } 
        else if (typeof currentQuizData !== 'undefined') {
            // 旧版兼容
        } 
        else {
             alert("Data file loaded but no data found.");
             return;
        }

        if (currentQuizData) {
            const tEl = document.getElementById("quiz-title");
            const dEl = document.getElementById("quiz-desc");
            if (tEl) tEl.innerText = currentQuizData.title;
            if (dEl) dEl.innerHTML = currentQuizData.desc;
            
            const startScreen = document.getElementById("start-screen");
            if (startScreen) startScreen.style.display = "block";
        }
    };
    
    script.onerror = function() {
        const t = document.getElementById("quiz-title");
        if(t) t.innerText = "Error 404";
        alert("Failed to load: " + testId + ".js");
    };

    document.head.appendChild(script);
}

function startQuiz() {
    if (!currentQuizData) return;
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuizData.questions[currentQuestionIndex];
    document.getElementById("progress-text").innerText = (currentQuestionIndex + 1) + "/" + currentQuizData.questions.length;
    document.getElementById("question-text").innerText = question.text;
    
    const prevBtn = document.getElementById("prev-btn");
    let prevText = "Previous";
    if (typeof uiTranslations !== 'undefined') {
        const t = uiTranslations[currentLang] || uiTranslations['en'];
        if(t && t.prev_btn) prevText = t.prev_btn;
    }
    
    if(prevBtn) {
        prevBtn.innerText = prevText;
        if (currentQuestionIndex === 0) prevBtn.style.display = "none";
        else prevBtn.style.display = "inline-block";
    }

    const optionsBox = document.getElementById("options-box");
    optionsBox.innerHTML = "";

    question.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option.text;
        btn.className = "btn-option";
        btn.onclick = function() { handleAnswer(option.score); };
        optionsBox.appendChild(btn);
    });
}

function handleAnswer(score) {
    userAnswers[currentQuestionIndex] = score;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// 【最终修改】结果显示函数：支持 SCL-90(总分+阈值)、霍金斯(Hz)、普通测试
function showResult() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    
    // 1. 计算总分 (SCL-90 核心指标)
    let sumScore = userAnswers.reduce((sum, score) => sum + score, 0);
    
    // 2. 计算平均分 (用于查表匹配结果)
    let avgScore = 0;
    if (userAnswers.length > 0) {
        // 保留2位小数，避免精度丢失
        avgScore = Math.round((sumScore / userAnswers.length) * 100) / 100;
    }

    // 3. 确定查表用的分数 (普通测试用总分，average模式用平均分)
    let searchScore = sumScore;
    if (currentQuizData.calcMode === 'average') {
        searchScore = avgScore;
    }
    
    // 4. 查找匹配的结果文案
    const result = currentQuizData.results.find(r => searchScore >= r.min && searchScore <= r.max) 
                   || currentQuizData.results[currentQuizData.results.length - 1];

    if (result) {
        document.getElementById("result-title").innerText = result.title;
        
        let scoreHtml = "";

        // === 核心逻辑分支 ===
        if (currentQuizData.calcMode === 'average') {
            
            // --- 情况 A: 霍金斯测试 (Test 12) ---
            // 特征：分数很大 (>10)，单位是 Hz
            if (avgScore > 10) {
                scoreHtml = `<div style="font-size:40px; color:#007bff; margin-bottom:15px; font-weight:bold; text-align:center;">${Math.round(avgScore)} <span style="font-size:20px;">Hz</span></div>`;
            } 
            
            // --- 情况 B: SCL-90 测试 (Test 13) ---
            // 特征：分数很小 (<=5)，需要显示总分 + 阈值表
            else {
                // 1. 显示大大的总分 + 小小的平均分
                scoreHtml = `
                    <div style="text-align:center; margin-bottom:20px;">
                        <div style="font-size:56px; color:#d9534f; font-weight:bold; line-height:1;">${sumScore}</div>
                        <div style="font-size:14px; color:#666; margin-top:5px;">总分 (Total Score)</div>
                        <div style="margin-top:8px;">
                            <span style="background:#f0f0f0; color:#555; padding:3px 10px; border-radius:12px; font-size:13px;">
                                平均分: ${avgScore}
                            </span>
                        </div>
                    </div>`;

                // 2. 显示 SCL-90 阈值说明卡片
                scoreHtml += `
                    <div style="background-color:#f4f9ff; border-left:4px solid #4a90e2; padding:15px; border-radius:6px; margin-bottom:20px; text-align:left; font-size:14px; color:#333; line-height:1.6;">
                        <div style="font-weight:bold; color:#0056b3; margin-bottom:8px; font-size:15px;">
                            ℹ️ 重要阈值参考
                        </div>
                        <div style="margin-bottom:6px;">
                            🟢 <strong>> 160分</strong>：提示阳性，应作进一步检查。
                        </div>
                        <div style="margin-bottom:6px;">
                            ⚠️ <strong>> 200分</strong>：说明有很明显的心理问题，建议咨询。
                        </div>
                        <div>
                            🏥 <strong>> 250分</strong>：比较严重，建议作详细医学检查。
                        </div>
                    </div>
                `;
            }
        } else {
            // --- 情况 C: 普通测试 (Test 1 - 11) ---
            // 这里不做任何特殊显示，scoreHtml 保持为空。
            // 页面将直接显示结果标题和描述（result.desc）。
            // 以后如果你想给普通测试也加分，可以在这里写代码。
        }

        // 最终拼接：分数/阈值卡片 + 结果描述文本
        document.getElementById("result-desc").innerHTML = scoreHtml + result.desc.replace(/\n/g, "<br>");
    }
}

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        let msg = "Link copied!";
        if (typeof uiTranslations !== 'undefined') {
            const t = uiTranslations[currentLang] || uiTranslations['en'];
            if(t && t.alert_copy) msg = t.alert_copy;
        }
        alert(msg);
    });
}

function shareTo(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    let shareUrl = "";
    if (platform === 'weibo') shareUrl = `http://service.weibo.com/share/share.php?url=${url}&title=${text}`;
    else if (platform === 'x') shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    else if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, '_blank');
}