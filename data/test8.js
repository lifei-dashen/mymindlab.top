// data/test8.js
// 未来5年暴富潜力指数评估 (Future 5-Year Wealth Potential Index)
// 基于行为经济学、财富心理学及风险决策理论
// 评估维度：风险商数 (Risk Q)、执行力、信息敏锐度、延迟满足

const quizDataMulti = {
    // 1. 英语 (English) - Expert Level
    "en": {
        title: "5-Year Wealth Potential Index",
        desc: "Based on Behavioral Economics. This assessment analyzes your decision-making patterns, risk tolerance, and execution speed to predict your probability of exponential financial growth in the next 5 years.",
        questions: [
            // --- Dimension 1: Capital & Risk Allocation ---
            { id: 1, text: "If you received an unexpected $50,000 today, your immediate instinct is:", options: [{ text: "Pay off debt or put it in a savings account", score: 1 }, { text: "Buy something I've wanted (Car, Trip)", score: 0 }, { text: "Invest in an asset (Stocks, Business, Real Estate)", score: 5 }] },
            { id: 2, text: "How do you view 'Debt'?", options: [{ text: "It is evil and must be avoided", score: 1 }, { text: "It is a tool for leverage (Good Debt vs Bad Debt)", score: 5 }, { text: "I use credit cards to survive", score: 0 }] },
            { id: 3, text: "The stock market crashes by 30%. You:", options: [{ text: "Panic and sell to prevent further loss", score: 0 }, { text: "Do nothing and wait", score: 3 }, { text: "Get excited and buy more (Discount time)", score: 5 }] },

            // --- Dimension 2: Execution & Opportunity ---
            { id: 4, text: "You have a brilliant business idea. What happens next?", options: [{ text: "I think about it for months but fear failure", score: 1 }, { text: "I keep it secret so no one steals it", score: 0 }, { text: "I launch a rough version (MVP) within 2 weeks", score: 5 }] },
            { id: 5, text: "How do you spend your weekends?", options: [{ text: "Pure relaxation and entertainment", score: 1 }, { text: "Socializing with the same friends", score: 2 }, { text: "Learning new skills or networking with higher-ups", score: 5 }] },
            { id: 6, text: "When you see a problem in society (e.g., bad service), you think:", options: [{ text: "Why is the world so annoying?", score: 0 }, { text: "Someone should fix this", score: 2 }, { text: "There is money to be made solving this", score: 5 }] },

            // --- Dimension 3: Mindset & Resilience ---
            { id: 7, text: "Your relationship with 'Failure':", options: [{ text: "It proves I am not good enough", score: 0 }, { text: "It is embarrassing", score: 1 }, { text: "It is data. I pivot and try again", score: 5 }] },
            { id: 8, text: "Do you believe you can become wealthy?", options: [{ text: "No, the system is rigged", score: 0 }, { text: "Maybe, if I get lucky", score: 2 }, { text: "Yes, it is a learnable skill", score: 5 }] },
            { id: 9, text: "When facing a difficult task, you prefer:", options: [{ text: "Doing it all myself (Perfectionism)", score: 2 }, { text: "Procrastinating", score: 0 }, { text: "Delegating or using tools to scale", score: 5 }] },

            // --- Dimension 4: Social Capital & Information ---
            { id: 10, text: "Your closest 5 friends are:", options: [{ text: "Fun but unambitious", score: 1 }, { text: "Complainers and pessimists", score: 0 }, { text: "Smarter or wealthier than me", score: 5 }] },
            { id: 11, text: "You consume content primarily to:", options: [{ text: "Be entertained (Netflix, Games)", score: 0 }, { text: "Stay informed (News)", score: 2 }, { text: "Spot trends and learn leverage", score: 5 }] },
            { id: 12, text: "Delayed Gratification: You are offered $1000 now or $5000 in a year.", options: [{ text: "$1000 now", score: 0 }, { text: "I'd struggle to decide", score: 2 }, { text: "$5000 later (Investment Mindset)", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Wealth Potential: Low (The Consumer)", 
                desc: "<strong>[Financial Trajectory: Stagnation]</strong><br><br>" +
                      "<strong>⚠️ Risk Analysis:</strong><br>Your mindset is currently trapped in the 'Scarcity Trap.' You prioritize immediate comfort over future freedom. You likely trade time for money and fear risk too much to see opportunity.<br><br>" +
                      "<strong>🚀 Expert Advice:</strong><br>Stop saving just to spend. Start saving to invest. Read 'Rich Dad Poor Dad' immediately. Your first step is to change your relationship with debt and risk." 
            },
            { 
                min: 21, 
                max: 40, 
                title: "Wealth Potential: Moderate (The Employee)", 
                desc: "<strong>[Financial Trajectory: Linear Growth]</strong><br><br>" +
                      "<strong>📊 Risk Analysis:</strong><br>You are responsible and hardworking, but you are playing it too safe. You are on the 'Slow Lane.' You will likely have a comfortable retirement, but 'getting rich' in 5 years is unlikely with your current strategy.<br><br>" +
                      "<strong>🚀 Expert Advice:</strong><br>You need to scale. Hard work alone doesn't create wealth; leverage does. Start a side hustle or invest in assets that grow while you sleep." 
            },
            { 
                min: 41, 
                max: 50, 
                title: "Wealth Potential: High (The Investor)", 
                desc: "<strong>[Financial Trajectory: Compound Growth]</strong><br><br>" +
                      "<strong>📈 Risk Analysis:</strong><br>You have a strong financial IQ. You understand the difference between assets and liabilities. You are building wealth steadily. The next 5 years will likely see your net worth double or triple if you stay consistent.<br><br>" +
                      "<strong>🚀 Expert Advice:</strong><br>Optimize your network. You are the average of the 5 people you spend time with. Find mentors who are 10x ahead of you to accelerate your growth." 
            },
            { 
                min: 51, 
                max: 60, 
                title: "Wealth Potential: Extreme (The Unicorn)", 
                desc: "<strong>[Financial Trajectory: Exponential Explosion]</strong><br><br>" +
                      "<strong>💎 Risk Analysis:</strong><br>Your psychology is identical to self-made millionaires. You embrace asymmetrical risk (low downside, infinite upside). You see problems as gold mines. You execute fast and fail forward.<br><br>" +
                      "<strong>🚀 Expert Advice:</strong><br>Go all in. The next 5 years are your golden window. Focus on 'Leverage' (Code, Media, Capital, or People). You are ready to build an empire." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - Expert Level
    "zh": {
        title: "未来5年暴富潜力指数评估",
        desc: "基于行为经济学与富人思维模型。本测试通过分析你的风险决策、执行力颗粒度及对‘杠杆’的理解，预测你在未来5年实现财富指数级增长的概率。",
        questions: [
            // 资本与风险配置
            { id: 1, text: "如果今天意外获得5万元，你的第一直觉是：", options: [{ text: "存进银行或还房贷", score: 1 }, { text: "买个喜欢的包/车/旅行", score: 0 }, { text: "买入资产（股票/基金/生意）", score: 5 }] },
            { id: 2, text: "你如何看待“负债”？", options: [{ text: "洪水猛兽，绝不能欠钱", score: 1 }, { text: "杠杆工具（区分良性/恶性债务）", score: 5 }, { text: "用来维持高消费的手段", score: 0 }] },
            { id: 3, text: "股市/市场暴跌30%，你会：", options: [{ text: "恐慌抛售，及时止损", score: 0 }, { text: "躺平不动，听天由命", score: 3 }, { text: "兴奋，这是抄底打折的好机会", score: 5 }] },

            // 执行力与机会敏锐度
            { id: 4, text: "你有了一个绝佳的赚钱点子，接下来：", options: [{ text: "反复论证，担心失败，最后不了了之", score: 1 }, { text: "保密，怕别人偷走", score: 0 }, { text: "2周内推出最小可行性产品(MVP)试水", score: 5 }] },
            { id: 5, text: "你的周末通常怎么过？", options: [{ text: "纯粹的休息、刷剧、娱乐", score: 1 }, { text: "和固定的酒肉朋友聚会", score: 2 }, { text: "学习新技能 / 向上社交", score: 5 }] },
            { id: 6, text: "当你看到社会上的某个痛点（如服务很差），你会想：", options: [{ text: "这世界真糟糕，只会抱怨", score: 0 }, { text: "希望能有人来管管", score: 2 }, { text: "这是商机！解决它就能赚钱", score: 5 }] },

            // 心智模式与韧性
            { id: 7, text: "你与“失败”的关系：", options: [{ text: "证明了我能力不行", score: 0 }, { text: "很丢脸，不想提", score: 1 }, { text: "这只是数据。复盘，优化，重来", score: 5 }] },
            { id: 8, text: "你相信自己能跨越阶层暴富吗？", options: [{ text: "不信，阶层固化了", score: 0 }, { text: "看运气吧，买彩票", score: 2 }, { text: "信，这是一种可习得的技能", score: 5 }] },
            { id: 9, text: "面对一项繁重任务，你倾向于：", options: [{ text: "亲力亲为，追求完美", score: 2 }, { text: "拖延，不想做", score: 0 }, { text: "外包/授权/使用工具来提升效率", score: 5 }] },

            // 社交资本与信息差
            { id: 10, text: "你最亲密的5个朋友是：", options: [{ text: "安于现状的打工人", score: 1 }, { text: "充满负能量的抱怨者", score: 0 }, { text: "比我更有钱、更聪明、更有野心", score: 5 }] },
            { id: 11, text: "你获取信息的主要目的是：", options: [{ text: "娱乐杀时间 (短视频/游戏)", score: 0 }, { text: "获取谈资 (新闻)", score: 2 }, { text: "寻找趋势与认知差 (研报/深度文)", score: 5 }] },
            { id: 12, text: "延迟满足：给你1万现在拿走，或5万一年后拿走。", options: [{ text: "落袋为安，选1万", score: 0 }, { text: "很纠结", score: 2 }, { text: "投资思维，选5万", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "暴富潜力：低 (消费者思维)", 
                desc: "<strong>【财富轨迹】：停滞 / 缩水</strong><br><br>" +
                      "<strong>⚠️ 深度诊断：</strong><br>你目前陷入了“稀缺心态”陷阱。你用时间换钱，然后用钱换取即时快乐。你对风险的极度厌恶反而成为了你最大的风险。在你的认知系统里，钱是“省”出来的，而不是“赚”出来的。<br><br>" +
                      "<strong>🚀 逆袭处方：</strong><br>停止无效社交和报复性消费。你需要进行“多巴胺断舍离”。去读《富爸爸穷爸爸》，先改变对负债和资产的定义。" 
            },
            { 
                min: 21, 
                max: 40, 
                title: "暴富潜力：中 (打工者思维)", 
                desc: "<strong>【财富轨迹】：线性增长</strong><br><br>" +
                      "<strong>📊 深度诊断：</strong><br>你是社会的稳定基石，勤奋、负责，但这也限制了你。你走在“慢车道”上，试图通过更努力的工作来致富，但这在数学上很难实现。你缺乏“睡后收入”的布局。<br><br>" +
                      "<strong>🚀 逆袭处方：</strong><br>你需要“杠杆”。努力工作只能让你温饱，利用杠杆（资金、技术、人力）才能让你暴富。尝试开启一个低成本的副业。" 
            },
            { 
                min: 41, 
                max: 50, 
                title: "暴富潜力：高 (投资者思维)", 
                desc: "<strong>【财富轨迹】：复利增长</strong><br><br>" +
                      "<strong>📈 深度诊断：</strong><br>你已经具备了前20%人的财商。你明白资产与负债的区别，懂得延迟满足。你的财富正在通过复利效应稳步积累。未来5年，只要不犯大错，你的资产翻倍是大概率事件。<br><br>" +
                      "<strong>🚀 逆袭处方：</strong><br>优化你的圈子。你是你最常接触的5个人的平均值。去结交那些已经拿到结果的人，打破信息茧房，寻找“非对称机会”。" 
            },
            { 
                min: 51, 
                max: 60, 
                title: "暴富潜力：极高 (破局者/独角兽)", 
                desc: "<strong>【财富轨迹】：指数级爆发</strong><br><br>" +
                      "<strong>💎 深度诊断：</strong><br>你的思维模式与白手起家的亿万富翁高度重合。你拥有极强的执行力，视问题为商机，视失败为数据。你敢于利用杠杆，且拥有极高的信息敏锐度。你就是那只在大风来临时能起飞的雄鹰。<br><br>" +
                      "<strong>🚀 逆袭处方：</strong><br>All in。未来5年是你的黄金窗口期。专注于可复制、边际成本为零的领域（代码、媒体、资本）。你只需要做对一次，就能改变阶层。" 
            }
        ]
    },

// 3. 德语 (German) - Professional
    "de": {
        title: "5-Jahres-Reichtumspotenzial-Index",
        desc: "Basierend auf Verhaltensökonomie. Dieser Test analysiert Ihre Risikotoleranz und Entscheidungsfindung, um Ihre Wahrscheinlichkeit für exponentielles Vermögenswachstum vorherzusagen.",
        questions: [
            // Kapital & Risiko
            { id: 1, text: "Unerwartete 50.000 € erhalten. Ihr Instinkt:", options: [{ text: "Schulden tilgen/Sparen", score: 1 }, { text: "Konsum (Auto/Reise)", score: 0 }, { text: "Investieren (Aktien/Business)", score: 5 }] },
            { id: 2, text: "Ansicht zu 'Schulden':", options: [{ text: "Böse, vermeiden", score: 1 }, { text: "Hebelwerkzeug (Gute vs. Schlechte)", score: 5 }, { text: "Konsumkredite nutzen", score: 0 }] },
            { id: 3, text: "Börsencrash (-30%). Sie:", options: [{ text: "Panikverkauf", score: 0 }, { text: "Abwarten", score: 3 }, { text: "Nachkaufen (Rabatt)", score: 5 }] },
            
            // Exekution
            { id: 4, text: "Geniale Geschäftsidee. Nächster Schritt:", options: [{ text: "Toddenken/Angst", score: 1 }, { text: "Geheimhalten", score: 0 }, { text: "MVP in 2 Wochen launchen", score: 5 }] },
            { id: 5, text: "Wochenendgestaltung:", options: [{ text: "Entspannung/Netflix", score: 1 }, { text: "Freunde treffen", score: 2 }, { text: "Lernen/Networking", score: 5 }] },
            { id: 6, text: "Gesellschaftliches Problem gesehen:", options: [{ text: "Beschweren", score: 0 }, { text: "Jemand sollte es lösen", score: 2 }, { text: "Geschäftschance!", score: 5 }] },

            // Mindset
            { id: 7, text: "Beziehung zu 'Scheitern':", options: [{ text: "Beweis meiner Unfähigkeit", score: 0 }, { text: "Peinlich", score: 1 }, { text: "Datenpunkt zum Lernen", score: 5 }] },
            { id: 8, text: "Können Sie reich werden?", options: [{ text: "System ist manipuliert", score: 0 }, { text: "Mit Glück", score: 2 }, { text: "Ja, ist lernbar", score: 5 }] },
            { id: 9, text: "Schwierige Aufgabe:", options: [{ text: "Alles selbst machen", score: 2 }, { text: "Aufschieben", score: 0 }, { text: "Delegieren/Automatisieren", score: 5 }] },

            // Information
            { id: 10, text: "Ihre 5 engsten Freunde:", options: [{ text: "Spaßig aber unambitioniert", score: 1 }, { text: "Pessimisten", score: 0 }, { text: "Kluger/Reicher als ich", score: 5 }] },
            { id: 11, text: "Medienkonsum:", options: [{ text: "Unterhaltung", score: 0 }, { text: "Nachrichten", score: 2 }, { text: "Trends & Bildung", score: 5 }] },
            { id: 12, text: "1.000€ sofort oder 5.000€ in einem Jahr?", options: [{ text: "Sofort", score: 0 }, { text: "Unsicher", score: 2 }, { text: "Warten (Investoren-Denke)", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Potenzial: Niedrig (Der Konsument)", 
                desc: "<strong>[Trajektorie: Stagnation]</strong><br>Sie stecken in der 'Knappheitsfalle'. Sie tauschen Zeit gegen Geld und scheuen Risiken.<br><strong>Rat:</strong> Lesen Sie 'Rich Dad Poor Dad'. Ändern Sie Ihre Sicht auf Schulden." 
            },
            { 
                min: 21, 
                max: 40, 
                title: "Potenzial: Moderat (Der Angestellte)", 
                desc: "<strong>[Trajektorie: Lineares Wachstum]</strong><br>Sie sind fleißig, spielen aber zu sicher. Reichtum durch Arbeit allein ist schwer.<br><strong>Rat:</strong> Sie brauchen Hebelwirkung (Leverage). Starten Sie ein Nebengewerbe." 
            },
            { 
                min: 41, 
                max: 50, 
                title: "Potenzial: Hoch (Der Investor)", 
                desc: "<strong>[Trajektorie: Zinseszins]</strong><br>Hoher finanzieller IQ. Sie verstehen Assets vs. Verbindlichkeiten. Ihr Vermögen wächst stetig.<br><strong>Rat:</strong> Optimieren Sie Ihr Netzwerk. Suchen Sie Mentoren, die 10x weiter sind." 
            },
            { 
                min: 51, 
                max: 60, 
                title: "Potenzial: Extrem (Das Einhorn)", 
                desc: "<strong>[Trajektorie: Exponentiell]</strong><br>Ihr Mindset gleicht dem von Selfmade-Millionären. Sie nutzen asymmetrische Risiken.<br><strong>Rat:</strong> Gehen Sie 'All in'. Die nächsten 5 Jahre sind Ihr goldenes Fenster." 
            }
        ]
    },

    // 4. 日语 (Japanese) - Professional
    "ja": {
        title: "今後5年間の富裕化ポテンシャル指数",
        desc: "行動経済学に基づく診断。あなたのリスク許容度、実行力、レバレッジへの理解度から、5年以内に資産が爆発的に増加する確率を予測します。",
        questions: [
            // 資本とリスク
            { id: 1, text: "今日突然500万円手に入ったら：", options: [{ text: "貯金/借金返済", score: 1 }, { text: "消費（車/旅行）", score: 0 }, { text: "投資（株/事業）", score: 5 }] },
            { id: 2, text: "「借金」についての考え：", options: [{ text: "悪、避けるべき", score: 1 }, { text: "レバレッジの道具", score: 5 }, { text: "生活費の補填", score: 0 }] },
            { id: 3, text: "株価が30%暴落した：", options: [{ text: "パニック売り", score: 0 }, { text: "静観する", score: 3 }, { text: "喜んで買い増す", score: 5 }] },
            
            // 実行力
            { id: 4, text: "素晴らしいビジネスアイデアを思いついた：", options: [{ text: "失敗を恐れて考え込む", score: 1 }, { text: "盗まれるので秘密にする", score: 0 }, { text: "2週間で試作版を出す", score: 5 }] },
            { id: 5, text: "週末の過ごし方：", options: [{ text: "完全な休息/娯楽", score: 1 }, { text: "いつもの友人と遊ぶ", score: 2 }, { text: "学習/上位層との交流", score: 5 }] },
            { id: 6, text: "社会的不満（悪いサービス等）を見た時：", options: [{ text: "文句を言う", score: 0 }, { text: "誰か直してほしい", score: 2 }, { text: "これは商機だ！", score: 5 }] },

            // マインドセット
            { id: 7, text: "「失敗」とは：", options: [{ text: "能力不足の証明", score: 0 }, { text: "恥ずかしいこと", score: 1 }, { text: "データであり学習材料", score: 5 }] },
            { id: 8, text: "金持ちになれると思う？", options: [{ text: "無理、社会が不公平", score: 0 }, { text: "運が良ければ", score: 2 }, { text: "はい、習得可能なスキルだ", score: 5 }] },
            { id: 9, text: "困難なタスクへの対処：", options: [{ text: "全部自分でやる（完璧主義）", score: 2 }, { text: "先延ばし", score: 0 }, { text: "委任/ツールで効率化", score: 5 }] },

            // 情報と人脈
            { id: 10, text: "親しい5人の友人：", options: [{ text: "楽しいが野心はない", score: 1 }, { text: "愚痴が多い", score: 0 }, { text: "自分より賢い/金持ち", score: 5 }] },
            { id: 11, text: "情報収集の主な目的：", options: [{ text: "娯楽（動画/ゲーム）", score: 0 }, { text: "話題作り", score: 2 }, { text: "トレンドと機会の発見", score: 5 }] },
            { id: 12, text: "今すぐ10万円か、1年後に50万円か：", options: [{ text: "今すぐもらう", score: 0 }, { text: "迷う", score: 2 }, { text: "待つ（投資マインド）", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "ポテンシャル：低 (消費者マインド)", 
                desc: "<strong>[資産軌道：停滞/縮小]</strong><br>「欠乏マインド」に陥っています。時間をお金と交換し、リスクを恐れすぎています。<br><strong>処方箋：</strong>『金持ち父さん 貧乏父さん』を読み、負債と資産の違いを学びましょう。" 
            },
            { 
                min: 21, 
                max: 40, 
                title: "ポテンシャル：中 (労働者マインド)", 
                desc: "<strong>[資産軌道：線形成長]</strong><br>勤勉ですが、安全策を取りすぎています。労働だけでは富は築けません。<br><strong>処方箋：</strong>「レバレッジ（てこ）」が必要です。副業や投資を始めましょう。" 
            },
            { 
                min: 41, 
                max: 50, 
                title: "ポテンシャル：高 (投資家マインド)", 
                desc: "<strong>[資産軌道：複利成長]</strong><br>高い金融IQを持っています。資産を積み上げており、今後5年で純資産は倍増するでしょう。<br><strong>処方箋：</strong>人脈を最適化してください。自分より10倍進んでいるメンターを探しましょう。" 
            },
            { 
                min: 51, 
                max: 60, 
                title: "ポテンシャル：極大 (ユニコーン)", 
                desc: "<strong>[資産軌道：指数関数的爆発]</strong><br>億万長者と同じ思考回路です。非対称なリスク（損失限定・利益無限）を愛しています。<br><strong>処方箋：</strong>全力を尽くしてください（All in）。今後5年が黄金のチャンスです。" 
            }
        ]
    },

    // 5. 法语 (French) - Professional
    "fr": {
        title: "Indice de Potentiel de Richesse sur 5 Ans",
        desc: "Basé sur l'économie comportementale. Ce test analyse votre tolérance au risque et votre capacité d'exécution pour prédire votre croissance financière.",
        questions: [
            // Capital
            { id: 1, text: "Gain inattendu de 50 000 €. Votre réflexe :", options: [{ text: "Payer dettes/Épargne", score: 1 }, { text: "Achat plaisir", score: 0 }, { text: "Investir (Actifs)", score: 5 }] },
            { id: 2, text: "Votre avis sur la 'Dette' :", options: [{ text: "Dangereux, à éviter", score: 1 }, { text: "Outil de levier", score: 5 }, { text: "Pour consommer", score: 0 }] },
            { id: 3, text: "Crash boursier (-30%). Vous :", options: [{ text: "Vendez (Panique)", score: 0 }, { text: "Attendez", score: 3 }, { text: "Achetez (Soldes)", score: 5 }] },
            
            // Exécution
            { id: 4, text: "Une idée de génie. Ensuite :", options: [{ text: "J'y pense trop", score: 1 }, { text: "Secret absolu", score: 0 }, { text: "Lancement rapide (MVP)", score: 5 }] },
            { id: 5, text: "Vos week-ends :", options: [{ text: "Détente pure", score: 1 }, { text: "Amis habituels", score: 2 }, { text: "Apprentissage/Réseau", score: 5 }] },
            { id: 6, text: "Un problème de société :", options: [{ text: "Le monde est nul", score: 0 }, { text: "Quelqu'un devrait agir", score: 2 }, { text: "Opportunité de business", score: 5 }] },

            // Mentalité
            { id: 7, text: "L'échec est :", options: [{ text: "Une preuve d'incompétence", score: 0 }, { text: "Honteux", score: 1 }, { text: "Une donnée pour pivoter", score: 5 }] },
            { id: 8, text: "Devenir riche est :", options: [{ text: "Impossible (système truqué)", score: 0 }, { text: "Question de chance", score: 2 }, { text: "Une compétence qui s'apprend", score: 5 }] },
            { id: 9, text: "Tâche difficile :", options: [{ text: "Je fais tout moi-même", score: 2 }, { text: "Procrastination", score: 0 }, { text: "Délégation/Automatisation", score: 5 }] },

            // Information
            { id: 10, text: "Vos 5 amis proches :", options: [{ text: "Sympas mais sans ambition", score: 1 }, { text: "Pessimistes", score: 0 }, { text: "Plus intelligents/riches que moi", score: 5 }] },
            { id: 11, text: "Consommation média :", options: [{ text: "Divertissement", score: 0 }, { text: "Infos", score: 2 }, { text: "Tendances & leviers", score: 5 }] },
            { id: 12, text: "1000€ maintenant ou 5000€ dans un an ?", options: [{ text: "Maintenant", score: 0 }, { text: "Hésitation", score: 2 }, { text: "Plus tard (Investissement)", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Potentiel : Faible (Le Consommateur)", 
                desc: "<strong>[Trajectoire : Stagnation]</strong><br>Piégé dans la rareté. Vous échangez du temps contre de l'argent.<br><strong>Conseil :</strong> Arrêtez d'épargner pour dépenser. Épargnez pour investir." 
            },
            { 
                min: 21, 
                max: 40, 
                title: "Potentiel : Modéré (L'Employé)", 
                desc: "<strong>[Trajectoire : Linéaire]</strong><br>Travailleur mais trop prudent. Le travail seul ne rend pas riche.<br><strong>Conseil :</strong> Utilisez l'effet de levier. Lancez un projet parallèle." 
            },
            { 
                min: 41, 
                max: 50, 
                title: "Potentiel : Élevé (L'Investisseur)", 
                desc: "<strong>[Trajectoire : Croissance Composée]</strong><br>Haut QI financier. Vous comprenez la différence Actif/Passif.<br><strong>Conseil :</strong> Optimisez votre réseau. Cherchez des mentors." 
            },
            { 
                min: 51, 
                max: 60, 
                title: "Potentiel : Extrême (La Licorne)", 
                desc: "<strong>[Trajectoire : Exponentielle]</strong><br>Mentalité de millionnaire. Vous embrassez le risque asymétrique.<br><strong>Conseil :</strong> Foncez. Les 5 prochaines années sont cruciales." 
            }
        ]
    },

    // 6. 西班牙语 (Spanish) - Professional
    "es": {
        title: "Índice de Potencial de Riqueza a 5 Años",
        desc: "Basado en economía conductual. Analiza tu tolerancia al riesgo y ejecución para predecir tu crecimiento financiero.",
        questions: [
            // Capital
            { id: 1, text: "Recibes 50.000 € inesperados:", options: [{ text: "Pagar deudas/Ahorrar", score: 1 }, { text: "Gastar (Coche/Viaje)", score: 0 }, { text: "Invertir (Activos)", score: 5 }] },
            { id: 2, text: "Visión sobre la 'Deuda':", options: [{ text: "Mala, evitarla", score: 1 }, { text: "Herramienta de apalancamiento", score: 5 }, { text: "Para sobrevivir", score: 0 }] },
            { id: 3, text: "La bolsa cae 30%. Tú:", options: [{ text: "Vendes (Pánico)", score: 0 }, { text: "Esperas", score: 3 }, { text: "Compras más (Rebajas)", score: 5 }] },
            
            // Ejecución
            { id: 4, text: "Gran idea de negocio. Luego:", options: [{ text: "Lo pienso mucho", score: 1 }, { text: "Secreto total", score: 0 }, { text: "Lanzo MVP en 2 semanas", score: 5 }] },
            { id: 5, text: "Tus fines de semana:", options: [{ text: "Relax total", score: 1 }, { text: "Amigos de siempre", score: 2 }, { text: "Aprender/Networking", score: 5 }] },
            { id: 6, text: "Ves un problema social:", options: [{ text: "Quejarse", score: 0 }, { text: "Alguien debería arreglarlo", score: 2 }, { text: "Oportunidad de negocio", score: 5 }] },

            // Mentalidad
            { id: 7, text: "El 'Fracaso' es:", options: [{ text: "Prueba de incompetencia", score: 0 }, { text: "Vergonzoso", score: 1 }, { text: "Datos para mejorar", score: 5 }] },
            { id: 8, text: "¿Puedes ser rico?", options: [{ text: "No, sistema amañado", score: 0 }, { text: "Con suerte", score: 2 }, { text: "Sí, es una habilidad", score: 5 }] },
            { id: 9, text: "Tarea difícil:", options: [{ text: "Hago todo yo", score: 2 }, { text: "Procrastino", score: 0 }, { text: "Delego/Automatizo", score: 5 }] },

            // Información
            { id: 10, text: "Tus 5 amigos cercanos:", options: [{ text: "Divertidos sin ambición", score: 1 }, { text: "Pesimistas", score: 0 }, { text: "Más listos/ricos que yo", score: 5 }] },
            { id: 11, text: "Consumo de medios:", options: [{ text: "Entretenimiento", score: 0 }, { text: "Noticias", score: 2 }, { text: "Tendencias y apalancamiento", score: 5 }] },
            { id: 12, text: "1000€ ahora o 5000€ en un año:", options: [{ text: "Ahora", score: 0 }, { text: "Dudo", score: 2 }, { text: "Luego (Inversión)", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Potencial: Bajo (El Consumidor)", 
                desc: "<strong>[Trayectoria: Estancamiento]</strong><br>Atrapado en la escasez. Cambias tiempo por dinero.<br><strong>Consejo:</strong> Deja de ahorrar para gastar. Ahorra para invertir." 
            },
            { 
                min: 21, 
                max: 40, 
                title: "Potencial: Moderado (El Empleado)", 
                desc: "<strong>[Trayectoria: Lineal]</strong><br>Trabajador pero demasiado seguro. El trabajo duro solo no basta.<br><strong>Consejo:</strong> Necesitas apalancamiento. Inicia un negocio paralelo." 
            },
            { 
                min: 41, 
                max: 50, 
                title: "Potencial: Alto (El Inversor)", 
                desc: "<strong>[Trayectoria: Compuesto]</strong><br>Alto IQ financiero. Entiendes la diferencia Activo/Pasivo.<br><strong>Consejo:</strong> Optimiza tu red. Busca mentores 10x mejores." 
            },
            { 
                min: 51, 
                max: 60, 
                title: "Potencial: Extremo (El Unicornio)", 
                desc: "<strong>[Trayectoria: Exponencial]</strong><br>Mentalidad millonaria. Abrazas el riesgo asimétrico.<br><strong>Consejo:</strong> Ve con todo. Los próximos 5 años son claves." 
            }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Professional
    "pt": {
        title: "Índice de Potencial de Riqueza em 5 Anos",
        desc: "Baseado em economia comportamental. Este teste analisa sua tolerância ao risco e execução para prever seu crescimento financeiro.",
        questions: [
            // Capital
            { id: 1, text: "Recebeu 50.000 € inesperados. Instinto:", options: [{ text: "Pagar dívidas/Poupar", score: 1 }, { text: "Gastar (Carro/Viagem)", score: 0 }, { text: "Investir (Ativos)", score: 5 }] },
            { id: 2, text: "Visão sobre 'Dívida':", options: [{ text: "Ruim, evitar", score: 1 }, { text: "Ferramenta de alavancagem", score: 5 }, { text: "Para sobreviver", score: 0 }] },
            { id: 3, text: "Bolsa cai 30%. Você:", options: [{ text: "Vende (Pânico)", score: 0 }, { text: "Espera", score: 3 }, { text: "Compra mais (Desconto)", score: 5 }] },
            
            // Execução
            { id: 4, text: "Grande ideia de negócio. Depois:", options: [{ text: "Penso muito", score: 1 }, { text: "Segredo total", score: 0 }, { text: "Lanço MVP em 2 semanas", score: 5 }] },
            { id: 5, text: "Fins de semana:", options: [{ text: "Relaxamento total", score: 1 }, { text: "Amigos de sempre", score: 2 }, { text: "Aprender/Networking", score: 5 }] },
            { id: 6, text: "Vê um problema social:", options: [{ text: "Reclamar", score: 0 }, { text: "Alguém devia resolver", score: 2 }, { text: "Oportunidade de lucro", score: 5 }] },

            // Mentalidade
            { id: 7, text: "O 'Fracasso' é:", options: [{ text: "Prova de incompetência", score: 0 }, { text: "Vergonhoso", score: 1 }, { text: "Dados para melhorar", score: 5 }] },
            { id: 8, text: "Pode ficar rico?", options: [{ text: "Não, sistema viciado", score: 0 }, { text: "Com sorte", score: 2 }, { text: "Sim, é uma habilidade", score: 5 }] },
            { id: 9, text: "Tarefa difícil:", options: [{ text: "Faço tudo sozinho", score: 2 }, { text: "Procrastino", score: 0 }, { text: "Delego/Automatizo", score: 5 }] },

            // Informação
            { id: 10, text: "5 amigos próximos:", options: [{ text: "Divertidos sem ambição", score: 1 }, { text: "Pessimistas", score: 0 }, { text: "Mais ricos/inteligentes que eu", score: 5 }] },
            { id: 11, text: "Consumo de mídia:", options: [{ text: "Entretenimento", score: 0 }, { text: "Notícias", score: 2 }, { text: "Tendências e alavancagem", score: 5 }] },
            { id: 12, text: "1000€ agora ou 5000€ em um ano?", options: [{ text: "Agora", score: 0 }, { text: "Dúvida", score: 2 }, { text: "Depois (Investimento)", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Potencial: Baixo (O Consumidor)", 
                desc: "<strong>[Trajetória: Estagnação]</strong><br>Preso na escassez. Troca tempo por dinheiro.<br><strong>Conselho:</strong> Pare de poupar para gastar. Poupe para investir." 
            },
            { 
                min: 21, 
                max: 40, 
                title: "Potencial: Moderado (O Empregado)", 
                desc: "<strong>[Trajetória: Linear]</strong><br>Trabalhador mas muito seguro. Trabalho duro sozinho não enriquece.<br><strong>Conselho:</strong> Use alavancagem. Comece um negócio paralelo." 
            },
            { 
                min: 41, 
                max: 50, 
                title: "Potencial: Alto (O Investidor)", 
                desc: "<strong>[Trajetória: Crescimento Composto]</strong><br>Alto QI financeiro. Entende Ativo vs Passivo.<br><strong>Conselho:</strong> Otimize seu network. Busque mentores." 
            },
            { 
                min: 51, 
                max: 60, 
                title: "Potencial: Extremo (O Unicórnio)", 
                desc: "<strong>[Trajetória: Exponencial]</strong><br>Mentalidade de milionário. Abraça o risco assimétrico.<br><strong>Conselho:</strong> Vá com tudo. Os próximos 5 anos são chave." 
            }
        ]
    },

    // 8. 俄语 (Russian) - Professional
    "ru": {
        title: "Индекс потенциала богатства (5 лет)",
        desc: "На основе поведенческой экономики. Тест анализирует ваше отношение к риску и действиям для прогноза финансового роста.",
        questions: [
            { id: 1, text: "Неожиданные $50,000:", options: [{ text: "Долги/Сбережения", score: 1 }, { text: "Покупки (Авто/Отпуск)", score: 0 }, { text: "Инвестиции (Активы)", score: 5 }] },
            { id: 2, text: "Отношение к долгам:", options: [{ text: "Зло, избегать", score: 1 }, { text: "Инструмент (Рычаг)", score: 5 }, { text: "Для потребления", score: 0 }] },
            { id: 3, text: "Обвал рынка (-30%):", options: [{ text: "Паника/Продажа", score: 0 }, { text: "Ждать", score: 3 }, { text: "Покупать (Скидки)", score: 5 }] },
            { id: 4, text: "Бизнес-идея:", options: [{ text: "Думаю месяцами", score: 1 }, { text: "Секрет", score: 0 }, { text: "Запуск MVP за 2 недели", score: 5 }] },
            { id: 5, text: "Выходные:", options: [{ text: "Отдых/Сериалы", score: 1 }, { text: "Друзья", score: 2 }, { text: "Обучение/Нетворкинг", score: 5 }] },
            { id: 6, text: "Проблема в обществе:", options: [{ text: "Жаловаться", score: 0 }, { text: "Кто-то должен решить", score: 2 }, { text: "Шанс заработать", score: 5 }] },
            { id: 7, text: "Неудача - это:", options: [{ text: "Я неудачник", score: 0 }, { text: "Стыдно", score: 1 }, { text: "Данные для роста", score: 5 }] },
            { id: 8, text: "Стать богатым:", options: [{ text: "Нереально", score: 0 }, { text: "Если повезет", score: 2 }, { text: "Это навык", score: 5 }] },
            { id: 9, text: "Сложная задача:", options: [{ text: "Сделаю сам", score: 2 }, { text: "Отложу", score: 0 }, { text: "Делегирую", score: 5 }] },
            { id: 10, text: "5 близких друзей:", options: [{ text: "Веселые, без амбиций", score: 1 }, { text: "Пессимисты", score: 0 }, { text: "Умнее/Богаче меня", score: 5 }] },
            { id: 11, text: "Контент:", options: [{ text: "Развлечение", score: 0 }, { text: "Новости", score: 2 }, { text: "Тренды и знания", score: 5 }] },
            { id: 12, text: "$1000 сейчас или $5000 через год:", options: [{ text: "Сейчас", score: 0 }, { text: "Сложно", score: 2 }, { text: "Потом (Инвестиция)", score: 5 }] }
        ],
        results: [
            { min: 0, max: 20, title: "Потенциал: Низкий (Потребитель)", desc: "<strong>[Траектория: Застой]</strong><br>Ловушка дефицита. Вы меняете время на деньги.<br><strong>Совет:</strong> Читайте 'Богатый папа, бедный папа'. Инвестируйте." },
            { min: 21, max: 40, title: "Потенциал: Средний (Сотрудник)", desc: "<strong>[Траектория: Линейная]</strong><br>Трудолюбивы, но осторожны. Труд сам по себе не сделает богатым.<br><strong>Совет:</strong> Нужен рычаг. Начните свое дело." },
            { min: 41, max: 50, title: "Потенциал: Высокий (Инвестор)", desc: "<strong>[Траектория: Сложный процент]</strong><br>Высокий фин. IQ. Вы понимаете активы и пассивы.<br><strong>Совет:</strong> Улучшайте окружение. Найдите ментора." },
            { min: 51, max: 60, title: "Потенциал: Экстремальный (Единорог)", desc: "<strong>[Траектория: Взлет]</strong><br>Мышление миллионера. Вы используете асимметричный риск.<br><strong>Совет:</strong> Идите ва-банк. Следующие 5 лет решающие." }
        ]
    },

    // 9. 韩语 (Korean) - Professional
    "ko": {
        title: "향후 5년 부의 잠재력 지수",
        desc: "행동 경제학 기반. 리스크 감수성과 실행력을 분석하여 5년 내 자산 급증 확률을 예측합니다.",
        questions: [
            { id: 1, text: "뜻밖의 5천만원:", options: [{ text: "저축/빚 청산", score: 1 }, { text: "소비 (차/여행)", score: 0 }, { text: "투자 (자산)", score: 5 }] },
            { id: 2, text: "부채란:", options: [{ text: "나쁜 것, 피해야 함", score: 1 }, { text: "레버리지 도구", score: 5 }, { text: "생활비 수단", score: 0 }] },
            { id: 3, text: "주가 30% 폭락:", options: [{ text: "패닉 매도", score: 0 }, { text: "관망", score: 3 }, { text: "매수 기회", score: 5 }] },
            { id: 4, text: "사업 아이디어:", options: [{ text: "고민만 함", score: 1 }, { text: "비밀 유지", score: 0 }, { text: "2주 내 출시 (MVP)", score: 5 }] },
            { id: 5, text: "주말:", options: [{ text: "휴식/넷플릭스", score: 1 }, { text: "친구 모임", score: 2 }, { text: "학습/네트워킹", score: 5 }] },
            { id: 6, text: "사회적 문제 발견:", options: [{ text: "불평", score: 0 }, { text: "누가 해결 좀", score: 2 }, { text: "돈 벌 기회", score: 5 }] },
            { id: 7, text: "실패란:", options: [{ text: "능력 부족 증거", score: 0 }, { text: "창피함", score: 1 }, { text: "데이터/학습", score: 5 }] },
            { id: 8, text: "부자가 될 수 있나:", options: [{ text: "불가능", score: 0 }, { text: "운이 좋다면", score: 2 }, { text: "배울 수 있는 기술", score: 5 }] },
            { id: 9, text: "어려운 일:", options: [{ text: "혼자 다 함", score: 2 }, { text: "미룸", score: 0 }, { text: "위임/자동화", score: 5 }] },
            { id: 10, text: "친한 친구 5명:", options: [{ text: "재밌지만 야망 없음", score: 1 }, { text: "불평꾼", score: 0 }, { text: "나보다 부자/똑똑함", score: 5 }] },
            { id: 11, text: "정보 습득 목적:", options: [{ text: "오락", score: 0 }, { text: "뉴스", score: 2 }, { text: "트렌드/통찰", score: 5 }] },
            { id: 12, text: "지금 100만원 vs 1년 뒤 500만원:", options: [{ text: "지금", score: 0 }, { text: "고민", score: 2 }, { text: "나중 (투자 마인드)", score: 5 }] }
        ],
        results: [
            { min: 0, max: 20, title: "잠재력: 낮음 (소비자)", desc: "<strong>[궤적: 정체]</strong><br>결핍의 덫에 갇혀 있습니다. 시간을 돈과 바꿉니다.<br><strong>조언:</strong> 소비를 위한 저축을 멈추고 투자를 시작하세요." },
            { min: 21, max: 40, title: "잠재력: 보통 (직장인)", desc: "<strong>[궤적: 선형 성장]</strong><br>성실하지만 너무 안전 지향적입니다. 노동만으로는 부자가 될 수 없습니다.<br><strong>조언:</strong> 레버리지가 필요합니다. 부업을 시작하세요." },
            { min: 41, max: 50, title: "잠재력: 높음 (투자자)", desc: "<strong>[궤적: 복리 성장]</strong><br>높은 금융 IQ. 자산과 부채를 이해하고 있습니다.<br><strong>조언:</strong> 인맥을 최적화하세요. 멘토를 찾으세요." },
            { min: 51, max: 60, title: "잠재력: 최상 (유니콘)", desc: "<strong>[궤적: 기하급수적 폭발]</strong><br>백만장자 마인드셋. 비대칭 리스크를 활용합니다.<br><strong>조언:</strong> 올인하세요. 향후 5년이 골든타임입니다." }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Professional
    "ar": {
        title: "مؤشر الثروة المحتملة لـ 5 سنوات",
        desc: "بناءً على الاقتصاد السلوكي. يحلل هذا الاختبار تحملك للمخاطر وتنفيذك للتنبؤ بنموك المالي.",
        questions: [
            { id: 1, text: "حصلت على 50,000 دولار:", options: [{ text: "سداد ديون/ادخار", score: 1 }, { text: "شراء (سيارة/سفر)", score: 0 }, { text: "استثمار (أصول)", score: 5 }] },
            { id: 2, text: "رأيك في 'الديون':", options: [{ text: "شر، تجنبها", score: 1 }, { text: "أداة نفوذ (رافعة)", score: 5 }, { text: "للاستهلاك", score: 0 }] },
            { id: 3, text: "انهيار السوق (-30%):", options: [{ text: "بيع (ذعر)", score: 0 }, { text: "انتظار", score: 3 }, { text: "شراء (فرصة)", score: 5 }] },
            { id: 4, text: "فكرة مشروع:", options: [{ text: "تفكير طويل", score: 1 }, { text: "سرية تامة", score: 0 }, { text: "إطلاق سريع (MVP)", score: 5 }] },
            { id: 5, text: "عطلة نهاية الأسبوع:", options: [{ text: "راحة تامة", score: 1 }, { text: "أصدقاء", score: 2 }, { text: "تعلم/تواصل", score: 5 }] },
            { id: 6, text: "مشكلة مجتمعية:", options: [{ text: "تذمر", score: 0 }, { text: "شخص ما يجب أن يحلها", score: 2 }, { text: "فرصة ربح", score: 5 }] },
            { id: 7, text: "الفشل هو:", options: [{ text: "دليل ضعف", score: 0 }, { text: "محرج", score: 1 }, { text: "بيانات للتعلم", score: 5 }] },
            { id: 8, text: "هل يمكنك أن تصبح غنياً؟", options: [{ text: "مستحيل", score: 0 }, { text: "بالحظ", score: 2 }, { text: "مهارة قابلة للتعلم", score: 5 }] },
            { id: 9, text: "مهمة صعبة:", options: [{ text: "أفعلها بنفسي", score: 2 }, { text: "تأجيل", score: 0 }, { text: "تفويض", score: 5 }] },
            { id: 10, text: "أقرب 5 أصدقاء:", options: [{ text: "مرحون بلا طموح", score: 1 }, { text: "متشائمون", score: 0 }, { text: "أذكى/أغنى مني", score: 5 }] },
            { id: 11, text: "استهلاك المحتوى:", options: [{ text: "ترفيه", score: 0 }, { text: "أخبار", score: 2 }, { text: "اتجاهات وتعلم", score: 5 }] },
            { id: 12, text: "1000$ الآن أم 5000$ بعد عام:", options: [{ text: "الآن", score: 0 }, { text: "متردد", score: 2 }, { text: "لاحقاً (استثمار)", score: 5 }] }
        ],
        results: [
            { min: 0, max: 20, title: "الإمكانية: منخفضة (المستهلك)", desc: "<strong>[المسار: ركود]</strong><br>عالق في الندرة. تستبدل الوقت بالمال.<br><strong>نصيحة:</strong> توقف عن الادخار للإنفاق. ادخر للاستثمار." },
            { min: 21, max: 40, title: "الإمكانية: متوسطة (الموظف)", desc: "<strong>[المسار: نمو خطي]</strong><br>مجتهد لكن حذر جداً. العمل الشاق وحده لا يغني.<br><strong>نصيحة:</strong> استخدم الرافعة المالية. ابدأ عملاً جانبياً." },
            { min: 41, max: 50, title: "الإمكانية: عالية (المستثمر)", desc: "<strong>[المسار: نمو مركب]</strong><br>ذكاء مالي عالٍ. تفهم الأصول والخصوم.<br><strong>نصيحة:</strong> حسن علاقاتك. ابحث عن مرشدين." },
            { min: 51, max: 60, title: "الإمكانية: فائقة (يونيكورن)", desc: "<strong>[المسار: انفجار أسي]</strong><br>عقلية المليونير. تتقبل المخاطرة غير المتكافئة.<br><strong>نصيحة:</strong> انطلق بكل قوتك. السنوات الـ 5 القادمة حاسمة." }
        ]
    },

    // 11. 越南语 (Vietnamese) - Professional
    "vi": {
        title: "Chỉ số Tiềm năng Giàu có 5 Năm",
        desc: "Dựa trên kinh tế học hành vi. Đánh giá này phân tích rủi ro và khả năng thực thi để dự đoán sự tăng trưởng tài chính của bạn.",
        questions: [
            { id: 1, text: "Nhận 50.000 đô la bất ngờ:", options: [{ text: "Trả nợ/Tiết kiệm", score: 1 }, { text: "Mua sắm", score: 0 }, { text: "Đầu tư", score: 5 }] },
            { id: 2, text: "Quan điểm về 'Nợ':", options: [{ text: "Xấu, tránh xa", score: 1 }, { text: "Đòn bẩy", score: 5 }, { text: "Tiêu dùng", score: 0 }] },
            { id: 3, text: "Thị trường giảm 30%:", options: [{ text: "Bán tháo", score: 0 }, { text: "Chờ đợi", score: 3 }, { text: "Mua thêm", score: 5 }] },
            { id: 4, text: "Ý tưởng kinh doanh:", options: [{ text: "Suy nghĩ mãi", score: 1 }, { text: "Giữ bí mật", score: 0 }, { text: "Ra mắt MVP", score: 5 }] },
            { id: 5, text: "Cuối tuần:", options: [{ text: "Nghỉ ngơi", score: 1 }, { text: "Bạn bè", score: 2 }, { text: "Học/Kết nối", score: 5 }] },
            { id: 6, text: "Vấn đề xã hội:", options: [{ text: "Than phiền", score: 0 }, { text: "Cần ai đó sửa", score: 2 }, { text: "Cơ hội kiếm tiền", score: 5 }] },
            { id: 7, text: "Thất bại là:", options: [{ text: "Kém cỏi", score: 0 }, { text: "Xấu hổ", score: 1 }, { text: "Dữ liệu", score: 5 }] },
            { id: 8, text: "Có thể giàu không?", options: [{ text: "Không thể", score: 0 }, { text: "May mắn", score: 2 }, { text: "Kỹ năng học được", score: 5 }] },
            { id: 9, text: "Việc khó:", options: [{ text: "Tự làm hết", score: 2 }, { text: "Trì hoãn", score: 0 }, { text: "Ủy quyền", score: 5 }] },
            { id: 10, text: "5 bạn thân:", options: [{ text: "Vui vẻ, không tham vọng", score: 1 }, { text: "Tiêu cực", score: 0 }, { text: "Giỏi/Giàu hơn tôi", score: 5 }] },
            { id: 11, text: "Nội dung xem:", options: [{ text: "Giải trí", score: 0 }, { text: "Tin tức", score: 2 }, { text: "Xu hướng", score: 5 }] },
            { id: 12, text: "1000$ ngay hay 5000$ sau 1 năm:", options: [{ text: "Ngay", score: 0 }, { text: "Phân vân", score: 2 }, { text: "Sau (Đầu tư)", score: 5 }] }
        ],
        results: [
            { min: 0, max: 20, title: "Tiềm năng: Thấp (Người tiêu dùng)", desc: "<strong>[Quỹ đạo: Trì trệ]</strong><br>Bẫy khan hiếm. Đổi thời gian lấy tiền.<br><strong>Lời khuyên:</strong> Đừng tiết kiệm để tiêu. Hãy đầu tư." },
            { min: 21, max: 40, title: "Tiềm năng: Trung bình (Nhân viên)", desc: "<strong>[Quỹ đạo: Tuyến tính]</strong><br>Chăm chỉ nhưng quá an toàn. Cần đòn bẩy.<br><strong>Lời khuyên:</strong> Bắt đầu kinh doanh phụ." },
            { min: 41, max: 50, title: "Tiềm năng: Cao (Nhà đầu tư)", desc: "<strong>[Quỹ đạo: Lãi kép]</strong><br>IQ tài chính cao. Hiểu Tài sản vs Tiêu sản.<br><strong>Lời khuyên:</strong> Tối ưu hóa quan hệ. Tìm cố vấn." },
            { min: 51, max: 60, title: "Tiềm năng: Cực cao (Kỳ lân)", desc: "<strong>[Quỹ đạo: Bùng nổ]</strong><br>Tư duy triệu phú. Chấp nhận rủi ro phi đối xứng.<br><strong>Lời khuyên:</strong> Tất tay. 5 năm tới là vàng." }
        ]
    },

    // 12. 泰语 (Thai) - Professional
    "th": {
        title: "ดัชนีศักยภาพความมั่งคั่งใน 5 ปี",
        desc: "อิงตามเศรษฐศาสตร์พฤติกรรม วิเคราะห์ความเสี่ยงและการลงมือทำเพื่อทำนายการเติบโตทางการเงินของคุณ",
        questions: [
            { id: 1, text: "ได้เงิน 50,000:", options: [{ text: "ใช้หนี้/ออม", score: 1 }, { text: "ซื้อของ", score: 0 }, { text: "ลงทุน", score: 5 }] },
            { id: 2, text: "หนี้สิน:", options: [{ text: "เลวร้าย", score: 1 }, { text: "เครื่องมือทุ่นแรง", score: 5 }, { text: "เพื่อบริโภค", score: 0 }] },
            { id: 3, text: "หุ้นตก 30%:", options: [{ text: "ขายทิ้ง", score: 0 }, { text: "รอดู", score: 3 }, { text: "ซื้อเพิ่ม", score: 5 }] },
            { id: 4, text: "ไอเดียธุรกิจ:", options: [{ text: "คิดนาน", score: 1 }, { text: "เก็บเป็นความลับ", score: 0 }, { text: "ทำทันที (MVP)", score: 5 }] },
            { id: 5, text: "สุดสัปดาห์:", options: [{ text: "พักผ่อน", score: 1 }, { text: "เพื่อนฝูง", score: 2 }, { text: "เรียนรู้", score: 5 }] },
            { id: 6, text: "ปัญหาสังคม:", options: [{ text: "บ่น", score: 0 }, { text: "ใครสักคนควรแก้", score: 2 }, { text: "โอกาสทำเงิน", score: 5 }] },
            { id: 7, text: "ความล้มเหลว:", options: [{ text: "ไม่เก่งพอ", score: 0 }, { text: "น่าอาย", score: 1 }, { text: "ข้อมูลเพื่อเรียนรู้", score: 5 }] },
            { id: 8, text: "รวยได้ไหม:", options: [{ text: "ไม่ได้", score: 0 }, { text: "ถ้าโชคดี", score: 2 }, { text: "ฝึกฝนได้", score: 5 }] },
            { id: 9, text: "งานยาก:", options: [{ text: "ทำเองหมด", score: 2 }, { text: "ผัดวันประกันพรุ่ง", score: 0 }, { text: "มอบหมาย", score: 5 }] },
            { id: 10, text: "เพื่อนสนิท 5 คน:", options: [{ text: "สนุกแต่ไม่มีเป้าหมาย", score: 1 }, { text: "ขี้บ่น", score: 0 }, { text: "เก่ง/รวยกว่าฉัน", score: 5 }] },
            { id: 11, text: "เสพสื่อ:", options: [{ text: "บันเทิง", score: 0 }, { text: "ข่าว", score: 2 }, { text: "เทรนด์", score: 5 }] },
            { id: 12, text: "1,000 ตอนนี้ หรือ 5,000 ปีหน้า:", options: [{ text: "ตอนนี้", score: 0 }, { text: "ลังเล", score: 2 }, { text: "ปีหน้า (ลงทุน)", score: 5 }] }
        ],
        results: [
            { min: 0, max: 20, title: "ศักยภาพ: ต่ำ (ผู้บริโภค)", desc: "<strong>[แนวโน้ม: หยุดนิ่ง]</strong><br>ติดกับดักความขาดแคลน ใช้เวลาแลกเงิน<br><strong>แนะนำ:</strong> เลิกออมเพื่อใช้จ่าย เริ่มออมเพื่อลงทุน" },
            { min: 21, max: 40, title: "ศักยภาพ: ปานกลาง (ลูกจ้าง)", desc: "<strong>[แนวโน้ม: เติบโตเป็นเส้นตรง]</strong><br>ขยันแต่เพลย์เซฟเกินไป งานหนักไม่ทำให้รวย<br><strong>แนะนำ:</strong> ใช้เครื่องทุ่นแรง เริ่มธุรกิจเสริม" },
            { min: 41, max: 50, title: "ศักยภาพ: สูง (นักลงทุน)", desc: "<strong>[แนวโน้ม: ดอกเบี้ยทบต้น]</strong><br>IQ การเงินสูง เข้าใจทรัพย์สิน vs หนี้สิน<br><strong>แนะนำ:</strong> พัฒนาคอนเนคชั่น หาเมนเทอร์" },
            { min: 51, max: 60, title: "ศักยภาพ: สูงมาก (ยูนิคอร์น)", desc: "<strong>[แนวโน้ม: เติบโตแบบก้าวกระโดด]</strong><br>ความคิดเศรษฐี กล้าเสี่ยง<br><strong>แนะนำ:</strong> ทุ่มสุดตัว 5 ปีนี้คือโอกาสทอง" }
        ]
    },

    // 13. 印尼语 (Indonesian) - Professional
    "id": {
        title: "Indeks Potensi Kekayaan 5 Tahun",
        desc: "Berdasarkan ekonomi perilaku. Menganalisis toleransi risiko dan eksekusi untuk memprediksi pertumbuhan finansial Anda.",
        questions: [
            { id: 1, text: "Dapat 50 juta tak terduga:", options: [{ text: "Bayar utang/Tabung", score: 1 }, { text: "Belanja", score: 0 }, { text: "Investasi", score: 5 }] },
            { id: 2, text: "Pandangan tentang 'Utang':", options: [{ text: "Buruk, hindari", score: 1 }, { text: "Alat leverage", score: 5 }, { text: "Konsumtif", score: 0 }] },
            { id: 3, text: "Pasar saham anjlok 30%:", options: [{ text: "Jual panik", score: 0 }, { text: "Tunggu", score: 3 }, { text: "Beli lagi", score: 5 }] },
            { id: 4, text: "Ide bisnis:", options: [{ text: "Pikir terus", score: 1 }, { text: "Rahasia", score: 0 }, { text: "Luncurkan MVP", score: 5 }] },
            { id: 5, text: "Akhir pekan:", options: [{ text: "Santai", score: 1 }, { text: "Teman biasa", score: 2 }, { text: "Belajar/Networking", score: 5 }] },
            { id: 6, text: "Masalah sosial:", options: [{ text: "Mengeluh", score: 0 }, { text: "Harus ada yang perbaiki", score: 2 }, { text: "Peluang bisnis", score: 5 }] },
            { id: 7, text: "Kegagalan adalah:", options: [{ text: "Bukti tak mampu", score: 0 }, { text: "Memalukan", score: 1 }, { text: "Data untuk belajar", score: 5 }] },
            { id: 8, text: "Bisakah jadi kaya?", options: [{ text: "Tidak mungkin", score: 0 }, { text: "Jika beruntung", score: 2 }, { text: "Skill yang bisa dipelajari", score: 5 }] },
            { id: 9, text: "Tugas sulit:", options: [{ text: "Kerjakan sendiri", score: 2 }, { text: "Tunda", score: 0 }, { text: "Delegasikan", score: 5 }] },
            { id: 10, text: "5 teman dekat:", options: [{ text: "Asik tanpa ambisi", score: 1 }, { text: "Pesimis", score: 0 }, { text: "Lebih kaya/pintar", score: 5 }] },
            { id: 11, text: "Konten:", options: [{ text: "Hiburan", score: 0 }, { text: "Berita", score: 2 }, { text: "Tren & ilmu", score: 5 }] },
            { id: 12, text: "1 juta sekarang atau 5 juta tahun depan:", options: [{ text: "Sekarang", score: 0 }, { text: "Ragu", score: 2 }, { text: "Nanti (Investasi)", score: 5 }] }
        ],
        results: [
            { min: 0, max: 20, title: "Potensi: Rendah (Konsumen)", desc: "<strong>[Arah: Stagnan]</strong><br>Terjebak kelangkaan. Menukar waktu dengan uang.<br><strong>Saran:</strong> Jangan menabung untuk belanja. Investasilah." },
            { min: 21, max: 40, title: "Potensi: Sedang (Karyawan)", desc: "<strong>[Arah: Linear]</strong><br>Kerja keras tapi terlalu aman. Butuh leverage.<br><strong>Saran:</strong> Mulai bisnis sampingan." },
            { min: 41, max: 50, title: "Potensi: Tinggi (Investor)", desc: "<strong>[Arah: Bunga Majemuk]</strong><br>IQ finansial tinggi. Paham Aset vs Liabilitas.<br><strong>Saran:</strong> Optimalkan koneksi. Cari mentor." },
            { min: 51, max: 60, title: "Potensi: Ekstrem (Unicorn)", desc: "<strong>[Arah: Eksponensial]</strong><br>Pola pikir miliarder. Berani ambil risiko.<br><strong>Saran:</strong> Gas pol. 5 tahun ini krusial." }
        ]
    }
};