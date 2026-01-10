// data/test9.js
// BSRI专业心理性别测试 (BSRI Psychological Gender Inventory)
// 基于 Sandra Bem 性别图式理论 (Gender Schema Theory)
// 评估维度：工具性(Instrumentality) vs 表达性(Expressiveness)

const quizDataMulti = {
    // 1. 英语 (English) - Clinical Standard
    "en": {
        title: "BSRI Psychological Gender Assessment",
        desc: "Based on the Bem Sex-Role Inventory. This clinical test evaluates your 'Instrumentality' (Agency) versus 'Expressiveness' (Communion) to determine your true psychological gender orientation.",
        questions: [
            // --- Scenario: Crisis & Pressure ---
            { id: 1, text: "A crisis erupts at work/home. Your immediate reflex is to:", options: [{ text: "Comfort others and seek harmony", score: 1 }, { text: "Assess the situation calmly", score: 3 }, { text: "Take command and issue orders", score: 5 }] },
            { id: 2, text: "When you face a personal failure, you tend to:", options: [{ text: "Cry or share feelings with friends", score: 1 }, { text: "Reflect internally", score: 3 }, { text: "Analyze the logic and plan a comeback", score: 5 }] },
            
            // --- Scenario: Social Interaction ---
            { id: 3, text: "In a group conversation, you are usually:", options: [{ text: "The listener who nods and supports", score: 1 }, { text: "The mediator connecting topics", score: 3 }, { text: "The dominant speaker directing the topic", score: 5 }] },
            { id: 4, text: "Someone hurts your feelings. You:", options: [{ text: "Feel sad but keep quiet to avoid conflict", score: 1 }, { text: "Express your feelings gently", score: 3 }, { text: "Confront them directly and assertively", score: 5 }] },

            // --- Scenario: Decision Making ---
            { id: 5, text: "When making a tough decision, you rely on:", options: [{ text: "Intuition and how it affects others", score: 1 }, { text: "A mix of gut feeling and facts", score: 3 }, { text: "Pure logic and cost-benefit analysis", score: 5 }] },
            { id: 6, text: "Your approach to leadership is:", options: [{ text: "Nurturing and democratic", score: 1 }, { text: "Leading by example", score: 3 }, { text: "Authoritative and directive", score: 5 }] },

            // --- Scenario: Self-Perception (Trait Identification) ---
            { id: 7, text: "Which word best describes your core strength?", options: [{ text: "Gentleness / Empathy", score: 1 }, { text: "Adaptability", score: 3 }, { text: "Ambition / Force", score: 5 }] },
            { id: 8, text: "You are more likely to be described as:", options: [{ text: "Sweet, shy, or sensitive", score: 1 }, { text: "Reliable and balanced", score: 3 }, { text: "Assertive, risk-taking, or competitive", score: 5 }] },

            // --- Scenario: Emotional Expression ---
            { id: 9, text: "Seeing a touching movie scene:", options: [{ text: "I cry openly", score: 1 }, { text: "I get teary-eyed but control it", score: 3 }, { text: "I feel little or hide it completely", score: 5 }] },
            { id: 10, text: "Expressing love involves:", options: [{ text: "Cuddling and verbal affirmation", score: 1 }, { text: "Quality time", score: 3 }, { text: "Providing solutions and protection", score: 5 }] },

            // --- Scenario: Conflict Style ---
            { id: 11, text: "In an argument, you:", options: [{ text: "Yield to keep the relationship", score: 1 }, { text: "Seek a compromise", score: 3 }, { text: "Argue until I prove I'm right", score: 5 }] },
            { id: 12, text: "Your attitude towards risk:", options: [{ text: "It scares me", score: 1 }, { text: "Calculated risks only", score: 3 }, { text: "I thrive on it", score: 5 }] },

            // --- Scenario: Life Goals ---
            { id: 13, text: "Your ultimate goal is:", options: [{ text: "Deep connection and family", score: 1 }, { text: "Balance and happiness", score: 3 }, { text: "Success and power", score: 5 }] },
            { id: 14, text: "You feel most validated when:", options: [{ text: "Someone tells me I am loved", score: 1 }, { text: "I feel understood", score: 3 }, { text: "I win or achieve a goal", score: 5 }] },

            // --- Scenario: Independence ---
            { id: 15, text: "Doing things alone:", options: [{ text: "Makes me feel lonely/insecure", score: 1 }, { text: "Is fine sometimes", score: 3 }, { text: "Is my preferred state (Self-sufficient)", score: 5 }] },
            { id: 16, text: "If a waiter brings the wrong order:", options: [{ text: "I eat it anyway (Don't want to bother)", score: 1 }, { text: "I politely ask for a change", score: 3 }, { text: "I demand it be fixed immediately", score: 5 }] },

            // --- Scenario: Deep Psychology ---
            { id: 17, text: "Your childhood role was:", options: [{ text: "The peacemaker / caretaker", score: 1 }, { text: "The observer", score: 3 }, { text: "The achiever / rebel", score: 5 }] },
            { id: 18, text: "Sensitivity to criticism:", options: [{ text: "Very high, I take it personally", score: 1 }, { text: "Moderate", score: 3 }, { text: "Low, I don't care what others think", score: 5 }] },
            { id: 19, text: "Your energy is:", options: [{ text: "Soft, flowing, receptive (Yin)", score: 1 }, { text: "Neutral", score: 3 }, { text: "Hard, penetrating, active (Yang)", score: 5 }] },
            { id: 20, text: "Helping others:", options: [{ text: "I sacrifice my needs for them", score: 1 }, { text: "I help if I can", score: 3 }, { text: "I help them help themselves", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 46, 
                title: "Result: High Expressiveness (Feminine Archetype)", 
                desc: "<strong>[Psychological Orientation: Communal]</strong><br><br>" +
                      "<strong>🧠 Analysis:</strong><br>Your psychological gender leans heavily towards the 'Feminine' (Expressive) spectrum. This has nothing to do with biological sex. It means your cognitive style prioritizes connection, empathy, harmony, and emotional depth. You possess high emotional intelligence (EQ) and are sensitive to the needs of others.<br><br>" +
                      "<strong>🌟 Strengths:</strong> Empathy, nurturing, intuition, diplomacy.<br>" +
                      "<strong>⚠️ Growth Area:</strong> You may struggle with assertiveness or setting boundaries. Learn to say 'No' without guilt." 
            },
            { 
                min: 47, 
                max: 73, 
                title: "Result: Androgynous (Psychologically Flexible)", 
                desc: "<strong>[Psychological Orientation: Balanced]</strong><br><br>" +
                      "<strong>🧠 Analysis:</strong><br>According to BSRI standards, you possess the 'Androgynous' personality. This is considered the ideal state of psychological health. You have access to both masculine (instrumental) and feminine (expressive) traits. You can be aggressive when needed and gentle when required. You are not bound by rigid gender roles.<br><br>" +
                      "<strong>🌟 Strengths:</strong> High adaptability, resilience, balanced perspective.<br>" +
                      "<strong>⚠️ Growth Area:</strong> Ensure you don't become a 'Jack of all trades' but master of none. Maintain your unique core identity." 
            },
            { 
                min: 74, 
                max: 100, 
                title: "Result: High Instrumentality (Masculine Archetype)", 
                desc: "<strong>[Psychological Orientation: Agentic]</strong><br><br>" +
                      "<strong>🧠 Analysis:</strong><br>Your psychological gender leans towards the 'Masculine' (Instrumental) spectrum. You prioritize logic, autonomy, achievement, and dominance. You view the world as a place to be navigated and conquered. Your emotions are secondary to your goals. You are independent and self-sufficient.<br><br>" +
                      "<strong>🌟 Strengths:</strong> Leadership, decisiveness, logic, confidence.<br>" +
                      "<strong>⚠️ Growth Area:</strong> You may repress emotions or lack empathy in sensitive situations. Practice 'Active Listening' and vulnerability." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - Professional
    "zh": {
        title: "BSRI专业心理性别测试",
        desc: "基于Sandra Bem性别图式理论。通过20个涉及危机、决策与情感的深度场景，评估你的‘工具性’(阳性)与‘表达性’(阴性)指数，揭示你真实的心理性别。",
        questions: [
            // 场景：危机与压力
            { id: 1, text: "工作/家庭突发危机，你的第一反应是：", options: [{ text: "安抚大家情绪，寻求和谐", score: 1 }, { text: "冷静评估局势", score: 3 }, { text: "立刻掌权，下达指令", score: 5 }] },
            { id: 2, text: "面对个人失败时，你倾向于：", options: [{ text: "哭泣或向朋友倾诉", score: 1 }, { text: "独自反思", score: 3 }, { text: "理性分析原因，计划反击", score: 5 }] },
            
            // 场景：社交互动
            { id: 3, text: "在群体谈话中，你的角色通常是：", options: [{ text: "倾听者，点头支持", score: 1 }, { text: "协调者，串联话题", score: 3 }, { text: "主导者，掌控话题方向", score: 5 }] },
            { id: 4, text: "有人伤害了你的感情。你：", options: [{ text: "感到难过但为了和平而忍耐", score: 1 }, { text: "温和地表达感受", score: 3 }, { text: "直接且坚定地与其对峙", score: 5 }] },

            // 场景：决策机制
            { id: 5, text: "做艰难决定时，你依赖：", options: [{ text: "直觉以及对他人的影响", score: 1 }, { text: "感觉和事实的混合", score: 3 }, { text: "纯粹的逻辑和成本效益分析", score: 5 }] },
            { id: 6, text: "你的领导风格是：", options: [{ text: "关怀型、民主型", score: 1 }, { text: "以身作则型", score: 3 }, { text: "权威型、指令型", score: 5 }] },

            // 场景：自我认知
            { id: 7, text: "哪个词最能描述你的核心优势？", options: [{ text: "温柔 / 共情", score: 1 }, { text: "适应力", score: 3 }, { text: "野心 / 力量", score: 5 }] },
            { id: 8, text: "别人更倾向于评价你为：", options: [{ text: "甜美、害羞或敏感", score: 1 }, { text: "靠谱、平衡", score: 3 }, { text: "强势、敢冒险或好胜", score: 5 }] },

            // 场景：情感表达
            { id: 9, text: "看到感人的电影情节：", options: [{ text: "我会公开哭泣", score: 1 }, { text: "眼眶湿润但会控制", score: 3 }, { text: "没什么感觉或完全隐藏", score: 5 }] },
            { id: 10, text: "表达爱的方式是：", options: [{ text: "拥抱、依偎和言语确认", score: 1 }, { text: "陪伴", score: 3 }, { text: "提供解决方案和保护", score: 5 }] },

            // 场景：冲突风格
            { id: 11, text: "在争吵中，你：", options: [{ text: "妥协以维持关系", score: 1 }, { text: "寻求折中方案", score: 3 }, { text: "争论到底，直到证明我对", score: 5 }] },
            { id: 12, text: "你对风险的态度：", options: [{ text: "它让我害怕", score: 1 }, { text: "只冒计算过的险", score: 3 }, { text: "我因冒险而兴奋", score: 5 }] },

            // 场景：人生目标
            { id: 13, text: "你的终极目标是：", options: [{ text: "深度的连接和家庭", score: 1 }, { text: "平衡与快乐", score: 3 }, { text: "成功与权力", score: 5 }] },
            { id: 14, text: "你感到最有价值的时刻是：", options: [{ text: "有人告诉我他爱我", score: 1 }, { text: "我感到被理解", score: 3 }, { text: "我赢了或达成了目标", score: 5 }] },

            // 场景：独立性
            { id: 15, text: "独自一人做事：", options: [{ text: "让我感到孤独/不安", score: 1 }, { text: "偶尔还可以", score: 3 }, { text: "是我偏好的状态(自给自足)", score: 5 }] },
            { id: 16, text: "如果服务员上错了菜：", options: [{ text: "将就吃(不想麻烦别人)", score: 1 }, { text: "礼貌请求更换", score: 3 }, { text: "要求立刻重做", score: 5 }] },

            // 场景：深层心理
            { id: 17, text: "童年时期你的角色是：", options: [{ text: "和事佬 / 照顾者", score: 1 }, { text: "观察者", score: 3 }, { text: "成就者 / 叛逆者", score: 5 }] },
            { id: 18, text: "对批评的敏感度：", options: [{ text: "非常高，我会往心里去", score: 1 }, { text: "适中", score: 3 }, { text: "低，我不在乎别人怎么看", score: 5 }] },
            { id: 19, text: "你的能量场更偏向：", options: [{ text: "柔软、流动、接纳 (阴)", score: 1 }, { text: "中性", score: 3 }, { text: "坚硬、穿透、主动 (阳)", score: 5 }] },
            { id: 20, text: "帮助他人：", options: [{ text: "我牺牲自己的需求去帮", score: 1 }, { text: "力所能及则帮", score: 3 }, { text: "我授人以渔(助其自立)", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 46, 
                title: "评估结果：高表达性 (女性化原型)", 
                desc: "<strong>【心理倾向】：社群导向 (Communal)</strong><br><br>" +
                      "<strong>🧠 深度解析：</strong><br>你的心理性别强烈偏向“表达性”（阴柔）谱系。这与生理性别无关，而是指你的认知风格优先考虑连接、共情、和谐与情感深度。你拥有极高的情绪智力（EQ），对周围人的需求非常敏感，是天生的疗愈者。<br><br>" +
                      "<strong>🌟 核心优势：</strong>共情力、滋养能力、直觉、外交手腕。<br>" +
                      "<strong>⚠️ 进化建议：</strong>你可能难以设立边界或过于顺从。学习“温柔地坚持”和“拒绝”，不要因为照顾他人而耗尽自己。" 
            },
            { 
                min: 47, 
                max: 73, 
                title: "评估结果：双性化 (心理灵活型)", 
                desc: "<strong>【心理倾向】：平衡整合 (Balanced)</strong><br><br>" +
                      "<strong>🧠 深度解析：</strong><br>根据BSRI标准，你属于“心理双性化”人格。这被心理学界视为最健康的心理状态。你能够自由调用“男性化”（工具性）和“女性化”（表达性）特质。你需要强硬时能强硬，需要温柔时能温柔。你不受刻板印象的束缚，适应力极强。<br><br>" +
                      "<strong>🌟 核心优势：</strong>极高的适应性、韧性、视角全面。<br>" +
                      "<strong>⚠️ 进化建议：</strong>注意不要变成“样样通样样松”。在保持灵活的同时，也要维护自己独特的核心身份认同。" 
            },
            { 
                min: 74, 
                max: 100, 
                title: "评估结果：高工具性 (男性化原型)", 
                desc: "<strong>【心理倾向】：自我主导 (Agentic)</strong><br><br>" +
                      "<strong>🧠 深度解析：</strong><br>你的心理性别偏向“工具性”（阳刚）谱系。你优先考虑逻辑、自主、成就和掌控。你将世界视为一个需要去导航和征服的地方。对你来说，任务和目标往往优先于情绪。你是独立的、自给自足的行动派。<br><br>" +
                      "<strong>🌟 核心优势：</strong>领导力、决断力、逻辑思维、自信。<br>" +
                      "<strong>⚠️ 进化建议：</strong>你可能会压抑情感，或在需要细腻处理的局面上显得缺乏同理心。练习“主动倾听”和展示脆弱，这会让你更强大。" 
            }
        ]
    },

// 3. 德语 (German) - Professional
    "de": {
        title: "BSRI Psychologisches Geschlechtsinventar",
        desc: "Basierend auf Sandra Bem. Dieser klinische Test bewertet Ihre 'Instrumentalität' (maskulin) und 'Expressivität' (feminin), um Ihr wahres psychologisches Geschlecht zu bestimmen.",
        questions: [
            // Krise
            { id: 1, text: "Eine Krise bricht aus. Ihr Reflex:", options: [{ text: "Andere trösten/Harmonie", score: 1 }, { text: "Situation analysieren", score: 3 }, { text: "Kommando übernehmen", score: 5 }] },
            { id: 2, text: "Bei persönlichem Versagen:", options: [{ text: "Gefühle teilen/Weinen", score: 1 }, { text: "Nachdenken", score: 3 }, { text: "Logisch analysieren & Planen", score: 5 }] },
            
            // Sozial
            { id: 3, text: "In einer Gruppe sind Sie:", options: [{ text: "Zuhörer", score: 1 }, { text: "Vermittler", score: 3 }, { text: "Anführer", score: 5 }] },
            { id: 4, text: "Jemand verletzt Sie:", options: [{ text: "Schweigen für Frieden", score: 1 }, { text: "Gefühle sanft äußern", score: 3 }, { text: "Direkte Konfrontation", score: 5 }] },

            // Entscheidung
            { id: 5, text: "Schwere Entscheidungen basieren auf:", options: [{ text: "Intuition & Gefühle anderer", score: 1 }, { text: "Mischung", score: 3 }, { text: "Logik & Kosten-Nutzen", score: 5 }] },
            { id: 6, text: "Führungsstil:", options: [{ text: "Fürsorglich/Demokratisch", score: 1 }, { text: "Vorbildfunktion", score: 3 }, { text: "Autoritär/Weisend", score: 5 }] },

            // Selbstwahrnehmung
            { id: 7, text: "Ihre Kernstärke:", options: [{ text: "Sanftheit / Empathie", score: 1 }, { text: "Anpassungsfähigkeit", score: 3 }, { text: "Ehrgeiz / Kraft", score: 5 }] },
            { id: 8, text: "Beschreibung durch andere:", options: [{ text: "Lieb, sensibel", score: 1 }, { text: "Zuverlässig", score: 3 }, { text: "Durchsetzungsstark", score: 5 }] },

            // Emotion
            { id: 9, text: "Rührende Filmszene:", options: [{ text: "Ich weine offen", score: 1 }, { text: "Unterdrücke Tränen", score: 3 }, { text: "Fühle wenig/verberge es", score: 5 }] },
            { id: 10, text: "Liebe zeigen durch:", options: [{ text: "Kuscheln/Worte", score: 1 }, { text: "Zeit verbringen", score: 3 }, { text: "Lösungen/Schutz", score: 5 }] },

            // Konflikt
            { id: 11, text: "Im Streit:", options: [{ text: "Nachgeben", score: 1 }, { text: "Kompromiss suchen", score: 3 }, { text: "Recht behalten", score: 5 }] },
            { id: 12, text: "Risiko:", options: [{ text: "Macht mir Angst", score: 1 }, { text: "Kalkuliert", score: 3 }, { text: "Ich brauche es", score: 5 }] },

            // Ziele
            { id: 13, text: "Ultimatives Ziel:", options: [{ text: "Tiefe Verbindung/Familie", score: 1 }, { text: "Balance/Glück", score: 3 }, { text: "Erfolg/Macht", score: 5 }] },
            { id: 14, text: "Bestätigung durch:", options: [{ text: "Geliebt werden", score: 1 }, { text: "Verstanden werden", score: 3 }, { text: "Gewinnen/Ziele erreichen", score: 5 }] },

            // Unabhängigkeit
            { id: 15, text: "Alleine Dinge tun:", options: [{ text: "Fühle mich einsam", score: 1 }, { text: "Manchmal okay", score: 3 }, { text: "Bevorzugter Zustand", score: 5 }] },
            { id: 16, text: "Falsches Essen im Restaurant:", options: [{ text: "Trotzdem essen", score: 1 }, { text: "Höflich fragen", score: 3 }, { text: "Sofort zurückgeben", score: 5 }] },

            // Tiefe
            { id: 17, text: "Rolle in der Kindheit:", options: [{ text: "Friedensstifter", score: 1 }, { text: "Beobachter", score: 3 }, { text: "Rebell/Macher", score: 5 }] },
            { id: 18, text: "Kritikempfindlichkeit:", options: [{ text: "Sehr hoch", score: 1 }, { text: "Moderat", score: 3 }, { text: "Niedrig", score: 5 }] },
            { id: 19, text: "Ihre Energie:", options: [{ text: "Weich, fließend (Yin)", score: 1 }, { text: "Neutral", score: 3 }, { text: "Hart, aktiv (Yang)", score: 5 }] },
            { id: 20, text: "Helfen:", options: [{ text: "Opfere mich auf", score: 1 }, { text: "Wenn möglich", score: 3 }, { text: "Hilfe zur Selbsthilfe", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 46, 
                title: "Ergebnis: Hohe Expressivität (Feminin)", 
                desc: "<strong>[Orientierung: Gemeinschaftlich]</strong><br>Ihr psychologisches Geschlecht tendiert stark zur 'Expressivität'. Sie priorisieren Verbindung, Empathie und Harmonie. Sie besitzen eine hohe emotionale Intelligenz.<br><strong>Tipp:</strong> Lernen Sie, Grenzen zu setzen." 
            },
            { 
                min: 47, 
                max: 73, 
                title: "Ergebnis: Androgyn (Psychologisch flexibel)", 
                desc: "<strong>[Orientierung: Ausgeglichen]</strong><br>Nach BSRI-Standards gelten Sie als 'Androgyn'. Dies ist der ideale Zustand psychischer Gesundheit. Sie vereinen Durchsetzungskraft mit Fürsorge.<br><strong>Tipp:</strong> Bewahren Sie Ihre Kernidentität." 
            },
            { 
                min: 74, 
                max: 100, 
                title: "Ergebnis: Hohe Instrumentalität (Maskulin)", 
                desc: "<strong>[Orientierung: Handlungsorientiert]</strong><br>Sie priorisieren Logik, Autonomie und Dominanz. Sie sehen die Welt als Ort, den es zu meistern gilt. Emotionen sind zweitrangig.<br><strong>Tipp:</strong> Üben Sie Verletzlichkeit." 
            }
        ]
    },

    // 4. 日语 (Japanese) - Professional
    "ja": {
        title: "BSRI 心理的ジェンダー診断",
        desc: "サンドラ・ベムの理論に基づく。危機、決断、感情に関する20の質問で、あなたの「道具性（男性的）」と「表現性（女性的）」のバランスを専門的に分析します。",
        questions: [
            // 危機
            { id: 1, text: "危機的状況での反射的な反応：", options: [{ text: "皆を慰め、調和を図る", score: 1 }, { text: "冷静に状況を評価", score: 3 }, { text: "指揮を執り命令する", score: 5 }] },
            { id: 2, text: "個人的な失敗に直面した時：", options: [{ text: "泣く/友人に感情を吐露", score: 1 }, { text: "一人で内省する", score: 3 }, { text: "論理的に分析し反撃を計画", score: 5 }] },
            
            // 社会的
            { id: 3, text: "グループ会話での役割：", options: [{ text: "聞き手、頷き役", score: 1 }, { text: "調整役、話題を繋ぐ", score: 3 }, { text: "主導役、話題を決める", score: 5 }] },
            { id: 4, text: "感情を傷つけられた時：", options: [{ text: "悲しいが波風を立てない", score: 1 }, { text: "優しく気持ちを伝える", score: 3 }, { text: "直接的かつ断固として対峙", score: 5 }] },

            // 決断
            { id: 5, text: "難しい決断の基準：", options: [{ text: "直感と他人への影響", score: 1 }, { text: "感覚と事実の混合", score: 3 }, { text: "純粋な論理と費用対効果", score: 5 }] },
            { id: 6, text: "リーダーシップのスタイル：", options: [{ text: "育成型・民主的", score: 1 }, { text: "模範を示す", score: 3 }, { text: "権威型・指示的", score: 5 }] },

            // 自己認識
            { id: 7, text: "あなたの強み：", options: [{ text: "優しさ・共感", score: 1 }, { text: "適応力", score: 3 }, { text: "野心・力強さ", score: 5 }] },
            { id: 8, text: "周囲からの評価：", options: [{ text: "可愛い、繊細", score: 1 }, { text: "頼れる、安定的", score: 3 }, { text: "断固としている、競争的", score: 5 }] },

            // 感情
            { id: 9, text: "感動的な映画のシーンで：", options: [{ text: "公然と泣く", score: 1 }, { text: "涙ぐむが堪える", score: 3 }, { text: "何も感じない/隠す", score: 5 }] },
            { id: 10, text: "愛の表現方法：", options: [{ text: "ハグと言葉", score: 1 }, { text: "共有する時間", score: 3 }, { text: "解決策の提供と保護", score: 5 }] },

            // 対立
            { id: 11, text: "口論になった時：", options: [{ text: "関係維持のために譲る", score: 1 }, { text: "妥協点を探す", score: 3 }, { text: "正しさを証明するまで議論", score: 5 }] },
            { id: 12, text: "リスクへの態度：", options: [{ text: "怖い", score: 1 }, { text: "計算されたリスクのみ", score: 3 }, { text: "リスクで燃える", score: 5 }] },

            // 目標
            { id: 13, text: "人生の究極の目標：", options: [{ text: "深いつながりと家族", score: 1 }, { text: "バランスと幸福", score: 3 }, { text: "成功と権力", score: 5 }] },
            { id: 14, text: "最も価値を感じる時：", options: [{ text: "愛されていると言われた時", score: 1 }, { text: "理解されたと感じた時", score: 3 }, { text: "勝利/目標達成した時", score: 5 }] },

            // 自立
            { id: 15, text: "一人での行動：", options: [{ text: "寂しい/不安", score: 1 }, { text: "たまにならOK", score: 3 }, { text: "好ましい（自給自足）", score: 5 }] },
            { id: 16, text: "注文と違う料理が来た：", options: [{ text: "我慢して食べる", score: 1 }, { text: "丁寧に交換を頼む", score: 3 }, { text: "即座に作り直しを要求", score: 5 }] },

            // 深層
            { id: 17, text: "子供時代の役割：", options: [{ text: "平和の使者/世話役", score: 1 }, { text: "観察者", score: 3 }, { text: "達成者/反逆児", score: 5 }] },
            { id: 18, text: "批判への敏感さ：", options: [{ text: "非常に高い", score: 1 }, { text: "中程度", score: 3 }, { text: "低い、気にしない", score: 5 }] },
            { id: 19, text: "あなたのエネルギー：", options: [{ text: "柔らかい、受容的（陰）", score: 1 }, { text: "中立", score: 3 }, { text: "硬い、能動的（陽）", score: 5 }] },
            { id: 20, text: "人助け：", options: [{ text: "自己犠牲してでも", score: 1 }, { text: "可能なら", score: 3 }, { text: "自立できるよう助ける", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 46, 
                title: "診断結果：高い表現性 (女性的・陰)", 
                desc: "<strong>【心理傾向】：共同体志向</strong><br>あなたの心理的ジェンダーは「表現性」に強く傾いています。生物学的性別とは関係なく、認知スタイルが共感、調和、感情の深さを優先します。<br><strong>成長の鍵：</strong>罪悪感なしに「No」と言う練習をしましょう。" 
            },
            { 
                min: 47, 
                max: 73, 
                title: "診断結果：アンドロギュノス (両性具有的)", 
                desc: "<strong>【心理傾向】：バランス・統合</strong><br>BSRI基準で最も理想的とされる「心理的両性具有」です。状況に応じて、男性的（道具的）特質と女性的（表現的）特質を使い分ける柔軟性を持っています。<br><strong>成長の鍵：</strong>器用貧乏にならず、コアとなる自分を保ちましょう。" 
            },
            { 
                min: 74, 
                max: 100, 
                title: "診断結果：高い道具性 (男性的・陽)", 
                desc: "<strong>【心理傾向】：自己主導志向</strong><br>論理、自律、達成、支配を優先します。世界を征服すべき場所として捉えています。感情は目標の二の次になりがちです。<br><strong>成長の鍵：</strong>「積極的傾聴」と、弱さを見せる勇気を持ちましょう。" 
            }
        ]
    },

    // 5. 法语 (French) - Professional
    "fr": {
        title: "Inventaire Psychologique de Genre BSRI",
        desc: "Basé sur Sandra Bem. Ce test évalue votre 'Instrumentalité' et votre 'Expressivité' pour déterminer votre orientation psychologique de genre.",
        questions: [
            // Crise
            { id: 1, text: "Crise soudaine. Votre réflexe :", options: [{ text: "Réconforter/Harmonie", score: 1 }, { text: "Évaluer calmement", score: 3 }, { text: "Prendre le commandement", score: 5 }] },
            { id: 2, text: "Face à un échec personnel :", options: [{ text: "Pleurer/Partager", score: 1 }, { text: "Réfléchir", score: 3 }, { text: "Analyser et planifier", score: 5 }] },
            
            // Social
            { id: 3, text: "Dans un groupe, vous êtes :", options: [{ text: "L'écouteur", score: 1 }, { text: "Le médiateur", score: 3 }, { text: "Le leader", score: 5 }] },
            { id: 4, text: "On vous blesse :", options: [{ text: "Silence pour la paix", score: 1 }, { text: "Exprimer doucement", score: 3 }, { text: "Confrontation directe", score: 5 }] },

            // Décision
            { id: 5, text: "Décision difficile basée sur :", options: [{ text: "Intuition & Autres", score: 1 }, { text: "Mixte", score: 3 }, { text: "Logique pure", score: 5 }] },
            { id: 6, text: "Style de leadership :", options: [{ text: "Bienveillant", score: 1 }, { text: "Par l'exemple", score: 3 }, { text: "Autoritaire", score: 5 }] },

            // Soi
            { id: 7, text: "Votre force principale :", options: [{ text: "Douceur / Empathie", score: 1 }, { text: "Adaptabilité", score: 3 }, { text: "Ambition / Force", score: 5 }] },
            { id: 8, text: "On vous décrit comme :", options: [{ text: "Doux, sensible", score: 1 }, { text: "Fiable", score: 3 }, { text: "Assertif, compétitif", score: 5 }] },

            // Émotion
            { id: 9, text: "Scène de film émouvante :", options: [{ text: "Je pleure ouvertement", score: 1 }, { text: "Yeux humides", score: 3 }, { text: "Je cache tout", score: 5 }] },
            { id: 10, text: "Exprimer l'amour :", options: [{ text: "Câlins/Mots", score: 1 }, { text: "Temps partagé", score: 3 }, { text: "Solutions/Protection", score: 5 }] },

            // Conflit
            { id: 11, text: "En dispute :", options: [{ text: "Céder", score: 1 }, { text: "Compromis", score: 3 }, { text: "Prouver que j'ai raison", score: 5 }] },
            { id: 12, text: "Le risque :", options: [{ text: "Me fait peur", score: 1 }, { text: "Calculé", score: 3 }, { text: "J'adore ça", score: 5 }] },

            // Buts
            { id: 13, text: "But ultime :", options: [{ text: "Connexion/Famille", score: 1 }, { text: "Équilibre", score: 3 }, { text: "Succès/Pouvoir", score: 5 }] },
            { id: 14, text: "Validation par :", options: [{ text: "Être aimé", score: 1 }, { text: "Être compris", score: 3 }, { text: "Gagner", score: 5 }] },

            // Indépendance
            { id: 15, text: "Faire les choses seul :", options: [{ text: "Solitude/Insécurité", score: 1 }, { text: "Parfois ok", score: 3 }, { text: "Préféré", score: 5 }] },
            { id: 16, text: "Erreur de commande au resto :", options: [{ text: "Je mange quand même", score: 1 }, { text: "Je demande poliment", score: 3 }, { text: "J'exige le changement", score: 5 }] },

            // Profondeur
            { id: 17, text: "Rôle enfant :", options: [{ text: "Pacificateur", score: 1 }, { text: "Observateur", score: 3 }, { text: "Rebelle/Performant", score: 5 }] },
            { id: 18, text: "Sensibilité critique :", options: [{ text: "Très haute", score: 1 }, { text: "Modérée", score: 3 }, { text: "Basse", score: 5 }] },
            { id: 19, text: "Votre énergie :", options: [{ text: "Douce, fluide (Yin)", score: 1 }, { text: "Neutre", score: 3 }, { text: "Dure, active (Yang)", score: 5 }] },
            { id: 20, text: "Aider :", options: [{ text: "Sacrifice", score: 1 }, { text: "Si possible", score: 3 }, { text: "Autonomiser", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 46, 
                title: "Résultat : Haute Expressivité (Féminin)", 
                desc: "<strong>[Orientation : Communale]</strong><br>Votre genre psychologique penche vers l'expressivité. Vous priorisez la connexion et l'harmonie.<br><strong>Conseil :</strong> Apprenez à dire 'Non'." 
            },
            { 
                min: 47, 
                max: 73, 
                title: "Résultat : Androgyne (Flexible)", 
                desc: "<strong>[Orientation : Équilibrée]</strong><br>L'état idéal selon BSRI. Vous avez accès aux traits masculins et féminins selon la situation.<br><strong>Conseil :</strong> Gardez votre identité propre." 
            },
            { 
                min: 74, 
                max: 100, 
                title: "Résultat : Haute Instrumentalité (Masculin)", 
                desc: "<strong>[Orientation : Agentique]</strong><br>Vous priorisez la logique et l'autonomie. Le monde est à conquérir.<br><strong>Conseil :</strong> Pratiquez la vulnérabilité." 
            }
        ]
    },

    // 6. 西班牙语 (Spanish) - Professional
    "es": {
        title: "Inventario de Género Psicológico BSRI",
        desc: "Basado en Sandra Bem. Evalúa tu 'Instrumentalidad' y 'Expresividad' para determinar tu género psicológico real.",
        questions: [
            // Crisis
            { id: 1, text: "Crisis repentina. Tu reflejo:", options: [{ text: "Consolar/Armonía", score: 1 }, { text: "Evaluar con calma", score: 3 }, { text: "Tomar el mando", score: 5 }] },
            { id: 2, text: "Fallo personal:", options: [{ text: "Llorar/Compartir", score: 1 }, { text: "Reflexionar", score: 3 }, { text: "Analizar y planear", score: 5 }] },
            
            // Social
            { id: 3, text: "En grupo eres:", options: [{ text: "Oyente", score: 1 }, { text: "Mediador", score: 3 }, { text: "Líder", score: 5 }] },
            { id: 4, text: "Te hieren:", options: [{ text: "Silencio por paz", score: 1 }, { text: "Expresar suavemente", score: 3 }, { text: "Confrontación directa", score: 5 }] },

            // Decisión
            { id: 5, text: "Decisión difícil basada en:", options: [{ text: "Intuición/Otros", score: 1 }, { text: "Mezcla", score: 3 }, { text: "Lógica pura", score: 5 }] },
            { id: 6, text: "Estilo de liderazgo:", options: [{ text: "Cuidador", score: 1 }, { text: "Ejemplo", score: 3 }, { text: "Autoritario", score: 5 }] },

            // Yo
            { id: 7, text: "Tu fuerza central:", options: [{ text: "Suavidad/Empatía", score: 1 }, { text: "Adaptabilidad", score: 3 }, { text: "Ambición/Fuerza", score: 5 }] },
            { id: 8, text: "Te describen como:", options: [{ text: "Dulce, sensible", score: 1 }, { text: "Confiable", score: 3 }, { text: "Asertivo, competitivo", score: 5 }] },

            // Emoción
            { id: 9, text: "Escena emotiva:", options: [{ text: "Lloro abiertamente", score: 1 }, { text: "Ojos llorosos", score: 3 }, { text: "Nada/Oculto", score: 5 }] },
            { id: 10, text: "Expresar amor:", options: [{ text: "Mimos/Palabras", score: 1 }, { text: "Tiempo", score: 3 }, { text: "Soluciones/Protección", score: 5 }] },

            // Conflicto
            { id: 11, text: "En discusión:", options: [{ text: "Ceder", score: 1 }, { text: "Compromiso", score: 3 }, { text: "Ganar", score: 5 }] },
            { id: 12, text: "Riesgo:", options: [{ text: "Me asusta", score: 1 }, { text: "Calculado", score: 3 }, { text: "Me encanta", score: 5 }] },

            // Metas
            { id: 13, text: "Meta final:", options: [{ text: "Conexión/Familia", score: 1 }, { text: "Balance", score: 3 }, { text: "Éxito/Poder", score: 5 }] },
            { id: 14, text: "Validación por:", options: [{ text: "Ser amado", score: 1 }, { text: "Ser entendido", score: 3 }, { text: "Ganar", score: 5 }] },

            // Independencia
            { id: 15, text: "Hacer cosas solo:", options: [{ text: "Soledad/Inseguridad", score: 1 }, { text: "A veces bien", score: 3 }, { text: "Preferido", score: 5 }] },
            { id: 16, text: "Error en el restaurante:", options: [{ text: "Comerlo igual", score: 1 }, { text: "Pedir cambio", score: 3 }, { text: "Exigir corrección", score: 5 }] },

            // Profundo
            { id: 17, text: "Rol de niño:", options: [{ text: "Pacificador", score: 1 }, { text: "Observador", score: 3 }, { text: "Rebelde/Logrador", score: 5 }] },
            { id: 18, text: "Sensibilidad a crítica:", options: [{ text: "Muy alta", score: 1 }, { text: "Moderada", score: 3 }, { text: "Baja", score: 5 }] },
            { id: 19, text: "Tu energía:", options: [{ text: "Suave, fluida (Yin)", score: 1 }, { text: "Neutra", score: 3 }, { text: "Dura, activa (Yang)", score: 5 }] },
            { id: 20, text: "Ayudar:", options: [{ text: "Sacrificio", score: 1 }, { text: "Si puedo", score: 3 }, { text: "Empoderar", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 46, 
                title: "Resultado: Alta Expresividad (Femenino)", 
                desc: "<strong>[Orientación: Comunal]</strong><br>Tu género psicológico tiende a la expresividad. Priorizas conexión y empatía.<br><strong>Consejo:</strong> Aprende a poner límites." 
            },
            { 
                min: 47, 
                max: 73, 
                title: "Resultado: Andrógino (Flexible)", 
                desc: "<strong>[Orientación: Equilibrada]</strong><br>El estado ideal según BSRI. Tienes acceso a rasgos masculinos y femeninos.<br><strong>Consejo:</strong> Mantén tu identidad única." 
            },
            { 
                min: 74, 
                max: 100, 
                title: "Resultado: Alta Instrumentalidad (Masculino)", 
                desc: "<strong>[Orientación: Agéntica]</strong><br>Priorizas lógica, autonomía y logro. El mundo es para conquistar.<br><strong>Consejo:</strong> Practica la vulnerabilidad." 
            }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Professional
    "pt": {
        title: "Inventário de Gênero Psicológico BSRI",
        desc: "Baseado em Sandra Bem. Este teste clínico avalia sua 'Instrumentalidade' e 'Expressividade' para determinar sua verdadeira orientação de gênero psicológico.",
        questions: [
            // Crise
            { id: 1, text: "Crise repentina. Seu reflexo:", options: [{ text: "Consolar/Harmonia", score: 1 }, { text: "Avaliar com calma", score: 3 }, { text: "Assumir o comando", score: 5 }] },
            { id: 2, text: "Diante de falha pessoal:", options: [{ text: "Chorar/Desabafar", score: 1 }, { text: "Refletir", score: 3 }, { text: "Analisar e planejar", score: 5 }] },
            
            // Social
            { id: 3, text: "Em grupo, você é:", options: [{ text: "O ouvinte", score: 1 }, { text: "O mediador", score: 3 }, { text: "O líder", score: 5 }] },
            { id: 4, text: "Alguém te magoa:", options: [{ text: "Silêncio pela paz", score: 1 }, { text: "Expressar suavemente", score: 3 }, { text: "Confronto direto", score: 5 }] },

            // Decisão
            { id: 5, text: "Decisão difícil baseada em:", options: [{ text: "Intuição & Outros", score: 1 }, { text: "Mista", score: 3 }, { text: "Lógica pura", score: 5 }] },
            { id: 6, text: "Estilo de liderança:", options: [{ text: "Cuidador/Democrático", score: 1 }, { text: "Pelo exemplo", score: 3 }, { text: "Autoritário", score: 5 }] },

            // Self
            { id: 7, text: "Sua força principal:", options: [{ text: "Gentileza / Empatia", score: 1 }, { text: "Adaptabilidade", score: 3 }, { text: "Ambição / Força", score: 5 }] },
            { id: 8, text: "Descrevem você como:", options: [{ text: "Doce, sensível", score: 1 }, { text: "Confiável", score: 3 }, { text: "Assertivo, competitivo", score: 5 }] },

            // Emoção
            { id: 9, text: "Cena de filme emotiva:", options: [{ text: "Choro abertamente", score: 1 }, { text: "Olhos úmidos", score: 3 }, { text: "Escondo/Nada", score: 5 }] },
            { id: 10, text: "Expressar amor:", options: [{ text: "Carinho/Palavras", score: 1 }, { text: "Tempo juntos", score: 3 }, { text: "Soluções/Proteção", score: 5 }] },

            // Conflito
            { id: 11, text: "Em discussão:", options: [{ text: "Ceder", score: 1 }, { text: "Compromisso", score: 3 }, { text: "Ganhar", score: 5 }] },
            { id: 12, text: "Risco:", options: [{ text: "Me assusta", score: 1 }, { text: "Calculado", score: 3 }, { text: "Adoro", score: 5 }] },

            // Metas
            { id: 13, text: "Objetivo final:", options: [{ text: "Conexão/Família", score: 1 }, { text: "Equilíbrio", score: 3 }, { text: "Sucesso/Poder", score: 5 }] },
            { id: 14, text: "Validação por:", options: [{ text: "Ser amado", score: 1 }, { text: "Ser compreendido", score: 3 }, { text: "Vencer", score: 5 }] },

            // Independência
            { id: 15, text: "Fazer coisas sozinho:", options: [{ text: "Solidão/Insegurança", score: 1 }, { text: "Às vezes ok", score: 3 }, { text: "Preferido", score: 5 }] },
            { id: 16, text: "Erro no pedido (restaurante):", options: [{ text: "Comer mesmo assim", score: 1 }, { text: "Pedir troca educadamente", score: 3 }, { text: "Exigir correção", score: 5 }] },

            // Profundo
            { id: 17, text: "Papel na infância:", options: [{ text: "Pacificador", score: 1 }, { text: "Observador", score: 3 }, { text: "Rebelde/Realizador", score: 5 }] },
            { id: 18, text: "Sensibilidade à crítica:", options: [{ text: "Muito alta", score: 1 }, { text: "Moderada", score: 3 }, { text: "Baixa", score: 5 }] },
            { id: 19, text: "Sua energia:", options: [{ text: "Suave, fluida (Yin)", score: 1 }, { text: "Neutra", score: 3 }, { text: "Dura, ativa (Yang)", score: 5 }] },
            { id: 20, text: "Ajudar:", options: [{ text: "Sacrifício", score: 1 }, { text: "Se possível", score: 3 }, { text: "Capacitar", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 46, 
                title: "Resultado: Alta Expressividade (Feminino)", 
                desc: "<strong>[Orientação: Comunal]</strong><br>Seu gênero psicológico tende à expressividade. Prioriza conexão e empatia.<br><strong>Conselho:</strong> Aprenda a dizer 'Não'." 
            },
            { 
                min: 47, 
                max: 73, 
                title: "Resultado: Andrógino (Flexível)", 
                desc: "<strong>[Orientação: Equilibrada]</strong><br>O estado ideal segundo BSRI. Você acessa traços masculinos e femininos.<br><strong>Conselho:</strong> Mantenha sua identidade." 
            },
            { 
                min: 74, 
                max: 100, 
                title: "Resultado: Alta Instrumentalidade (Masculino)", 
                desc: "<strong>[Orientação: Agêntica]</strong><br>Prioriza lógica, autonomia e conquista. O mundo é para ser navegado.<br><strong>Conselho:</strong> Pratique a vulnerabilidade." 
            }
        ]
    },

    // 8. 俄语 (Russian) - Professional
    "ru": {
        title: "Психологический гендерный тест BSRI",
        desc: "На основе Сандры Бем. Тест оценивает вашу «Инструментальность» и «Экспрессивность» для определения психологического пола.",
        questions: [
            { id: 1, text: "Кризис. Реакция:", options: [{ text: "Утешать/Гармония", score: 1 }, { text: "Оценка", score: 3 }, { text: "Командовать", score: 5 }] },
            { id: 2, text: "Провал:", options: [{ text: "Плакать/Делиться", score: 1 }, { text: "Думать", score: 3 }, { text: "Анализ и план", score: 5 }] },
            { id: 3, text: "В группе:", options: [{ text: "Слушатель", score: 1 }, { text: "Медиатор", score: 3 }, { text: "Лидер", score: 5 }] },
            { id: 4, text: "Обида:", options: [{ text: "Молчать ради мира", score: 1 }, { text: "Сказать мягко", score: 3 }, { text: "Конфронтация", score: 5 }] },
            { id: 5, text: "Решения:", options: [{ text: "Интуиция", score: 1 }, { text: "Смешано", score: 3 }, { text: "Логика", score: 5 }] },
            { id: 6, text: "Лидерство:", options: [{ text: "Заботливое", score: 1 }, { text: "Пример", score: 3 }, { text: "Авторитарное", score: 5 }] },
            { id: 7, text: "Сила:", options: [{ text: "Нежность", score: 1 }, { text: "Гибкость", score: 3 }, { text: "Амбиции", score: 5 }] },
            { id: 8, text: "Описание:", options: [{ text: "Чувствительный", score: 1 }, { text: "Надежный", score: 3 }, { text: "Напористый", score: 5 }] },
            { id: 9, text: "Фильм:", options: [{ text: "Плачу", score: 1 }, { text: "Сдерживаюсь", score: 3 }, { text: "Скрываю", score: 5 }] },
            { id: 10, text: "Любовь:", options: [{ text: "Ласка/Слова", score: 1 }, { text: "Время", score: 3 }, { text: "Защита", score: 5 }] },
            { id: 11, text: "Спор:", options: [{ text: "Уступить", score: 1 }, { text: "Компромисс", score: 3 }, { text: "Победить", score: 5 }] },
            { id: 12, text: "Риск:", options: [{ text: "Страшно", score: 1 }, { text: "Расчет", score: 3 }, { text: "Люблю", score: 5 }] },
            { id: 13, text: "Цель:", options: [{ text: "Семья", score: 1 }, { text: "Баланс", score: 3 }, { text: "Власть", score: 5 }] },
            { id: 14, text: "Признание:", options: [{ text: "Быть любимым", score: 1 }, { text: "Понятым", score: 3 }, { text: "Победа", score: 5 }] },
            { id: 15, text: "Одиночество:", options: [{ text: "Плохо", score: 1 }, { text: "Нормально", score: 3 }, { text: "Хорошо", score: 5 }] },
            { id: 16, text: "Ошибка в заказе:", options: [{ text: "Смолчать", score: 1 }, { text: "Попросить", score: 3 }, { text: "Требовать", score: 5 }] },
            { id: 17, text: "Детство:", options: [{ text: "Миротворец", score: 1 }, { text: "Наблюдатель", score: 3 }, { text: "Бунтарь", score: 5 }] },
            { id: 18, text: "Критика:", options: [{ text: "Ранит", score: 1 }, { text: "Средне", score: 3 }, { text: "Не волнует", score: 5 }] },
            { id: 19, text: "Энергия:", options: [{ text: "Инь (Мягкая)", score: 1 }, { text: "Нейтральная", score: 3 }, { text: "Ян (Жесткая)", score: 5 }] },
            { id: 20, text: "Помощь:", options: [{ text: "Жертва", score: 1 }, { text: "По возможности", score: 3 }, { text: "Научить", score: 5 }] }
        ],
        results: [
            { min: 20, max: 46, title: "Результат: Высокая экспрессивность (Феминность)", desc: "<strong>[Ориентация: Общность]</strong><br>Приоритет связи и эмпатии.<br><strong>Совет:</strong> Учитесь говорить «Нет»." },
            { min: 47, max: 73, title: "Результат: Андрогинность (Гибкость)", desc: "<strong>[Ориентация: Баланс]</strong><br>Идеал по BSRI. Баланс мужского и женского.<br><strong>Совет:</strong> Сохраняйте ядро личности." },
            { min: 74, max: 100, title: "Результат: Высокая инструментальность (Маскулинность)", desc: "<strong>[Ориентация: Действие]</strong><br>Логика и автономия. Мир для завоевания.<br><strong>Совет:</strong> Практикуйте уязвимость." }
        ]
    },

    // 9. 韩语 (Korean) - Professional
    "ko": {
        title: "BSRI 심리적 성별 검사",
        desc: "산드라 벰 이론 기반. '도구성'(남성성)과 '표현성'(여성성)을 평가하여 당신의 심리적 성향을 분석합니다.",
        questions: [
            { id: 1, text: "위기 발생 시:", options: [{ text: "위로/조화", score: 1 }, { text: "상황 평가", score: 3 }, { text: "지휘/명령", score: 5 }] },
            { id: 2, text: "실패했을 때:", options: [{ text: "울기/공유", score: 1 }, { text: "성찰", score: 3 }, { text: "분석 및 계획", score: 5 }] },
            { id: 3, text: "그룹 내 역할:", options: [{ text: "청자", score: 1 }, { text: "중재자", score: 3 }, { text: "리더", score: 5 }] },
            { id: 4, text: "상처받았을 때:", options: [{ text: "침묵", score: 1 }, { text: "표현함", score: 3 }, { text: "직면함", score: 5 }] },
            { id: 5, text: "결정 기준:", options: [{ text: "직관/감정", score: 1 }, { text: "복합", score: 3 }, { text: "논리", score: 5 }] },
            { id: 6, text: "리더십:", options: [{ text: "돌봄/민주적", score: 1 }, { text: "솔선수범", score: 3 }, { text: "권위적", score: 5 }] },
            { id: 7, text: "핵심 강점:", options: [{ text: "부드러움", score: 1 }, { text: "적응력", score: 3 }, { text: "야망", score: 5 }] },
            { id: 8, text: "평판:", options: [{ text: "섬세함", score: 1 }, { text: "신뢰감", score: 3 }, { text: "주도적", score: 5 }] },
            { id: 9, text: "감동적인 영화:", options: [{ text: "운다", score: 1 }, { text: "참는다", score: 3 }, { text: "무감각/숨김", score: 5 }] },
            { id: 10, text: "사랑 표현:", options: [{ text: "스킨십/말", score: 1 }, { text: "시간", score: 3 }, { text: "해결책/보호", score: 5 }] },
            { id: 11, text: "논쟁 시:", options: [{ text: "양보", score: 1 }, { text: "타협", score: 3 }, { text: "승리", score: 5 }] },
            { id: 12, text: "위험:", options: [{ text: "두렵다", score: 1 }, { text: "계산됨", score: 3 }, { text: "즐긴다", score: 5 }] },
            { id: 13, text: "목표:", options: [{ text: "관계/가족", score: 1 }, { text: "균형", score: 3 }, { text: "성공/권력", score: 5 }] },
            { id: 14, text: "인정 욕구:", options: [{ text: "사랑받음", score: 1 }, { text: "이해받음", score: 3 }, { text: "성취", score: 5 }] },
            { id: 15, text: "혼자하기:", options: [{ text: "외로움", score: 1 }, { text: "가끔", score: 3 }, { text: "선호함", score: 5 }] },
            { id: 16, text: "주문 실수:", options: [{ text: "그냥 먹음", score: 1 }, { text: "요청함", score: 3 }, { text: "항의함", score: 5 }] },
            { id: 17, text: "어린 시절:", options: [{ text: "중재자", score: 1 }, { text: "관찰자", score: 3 }, { text: "반항아", score: 5 }] },
            { id: 18, text: "비판 민감도:", options: [{ text: "매우 높음", score: 1 }, { text: "보통", score: 3 }, { text: "낮음", score: 5 }] },
            { id: 19, text: "에너지:", options: [{ text: "음 (부드러움)", score: 1 }, { text: "중립", score: 3 }, { text: "양 (강함)", score: 5 }] },
            { id: 20, text: "도움:", options: [{ text: "희생", score: 1 }, { text: "가능하면", score: 3 }, { text: "자립 도움", score: 5 }] }
        ],
        results: [
            { min: 20, max: 46, title: "결과: 높은 표현성 (여성성)", desc: "<strong>[성향: 관계 지향]</strong><br>공감과 연결을 중시합니다. EQ가 높습니다.<br><strong>조언:</strong> 거절하는 법을 배우세요." },
            { min: 47, max: 73, title: "결과: 양성성 (심리적 유연함)", desc: "<strong>[성향: 균형]</strong><br>가장 이상적인 상태. 상황에 따라 유연하게 대처합니다.<br><strong>조언:</strong> 정체성을 잃지 마세요." },
            { min: 74, max: 100, title: "결과: 높은 도구성 (남성성)", desc: "<strong>[성향: 성취 지향]</strong><br>논리와 자율성을 중시합니다. 세상을 정복의 대상으로 봅니다.<br><strong>조언:</strong> 취약성을 드러내세요." }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Professional
    "ar": {
        title: "مقياس BSRI للجنس النفسي",
        desc: "بناءً على ساندرا بيم. يقيم هذا الاختبار 'الأداتية' و 'التعبيرية' لتحديد توجهك النفسي.",
        questions: [
            { id: 1, text: "في الأزمة:", options: [{ text: "مواساة", score: 1 }, { text: "تقييم", score: 3 }, { text: "قيادة", score: 5 }] },
            { id: 2, text: "عند الفشل:", options: [{ text: "بكاء/مشاركة", score: 1 }, { text: "تفكير", score: 3 }, { text: "تحليل وتخطيط", score: 5 }] },
            { id: 3, text: "في المجموعة:", options: [{ text: "مستمع", score: 1 }, { text: "وسيط", score: 3 }, { text: "قائد", score: 5 }] },
            { id: 4, text: "جرح المشاعر:", options: [{ text: "صمت", score: 1 }, { text: "تعبير لطيف", score: 3 }, { text: "مواجهة", score: 5 }] },
            { id: 5, text: "اتخاذ القرار:", options: [{ text: "حدس", score: 1 }, { text: "مختلط", score: 3 }, { text: "منطق", score: 5 }] },
            { id: 6, text: "القيادة:", options: [{ text: "راعية", score: 1 }, { text: "بالقدوة", score: 3 }, { text: "سلطوية", score: 5 }] },
            { id: 7, text: "القوة:", options: [{ text: "لطف", score: 1 }, { text: "تكيّف", score: 3 }, { text: "طموح", score: 5 }] },
            { id: 8, text: "الوصف:", options: [{ text: "حساس", score: 1 }, { text: "موثوق", score: 3 }, { text: "حازم", score: 5 }] },
            { id: 9, text: "فيلم مؤثر:", options: [{ text: "أبكي", score: 1 }, { text: "أسيطر", score: 3 }, { text: "أخفي", score: 5 }] },
            { id: 10, text: "الحب:", options: [{ text: "عاطفة", score: 1 }, { text: "وقت", score: 3 }, { text: "حماية", score: 5 }] },
            { id: 11, text: "نزاع:", options: [{ text: "خضوع", score: 1 }, { text: "حل وسط", score: 3 }, { text: "فوز", score: 5 }] },
            { id: 12, text: "مخاطرة:", options: [{ text: "خوف", score: 1 }, { text: "محسوبة", score: 3 }, { text: "إثارة", score: 5 }] },
            { id: 13, text: "هدف:", options: [{ text: "عائلة", score: 1 }, { text: "توازن", score: 3 }, { text: "سلطة", score: 5 }] },
            { id: 14, text: "التحقق:", options: [{ text: "حب", score: 1 }, { text: "فهم", score: 3 }, { text: "إنجاز", score: 5 }] },
            { id: 15, text: "الوحدة:", options: [{ text: "خوف", score: 1 }, { text: "مقبولة", score: 3 }, { text: "مفضلة", score: 5 }] },
            { id: 16, text: "خطأ مطعم:", options: [{ text: "قبول", score: 1 }, { text: "طلب تغيير", score: 3 }, { text: "إصرار", score: 5 }] },
            { id: 17, text: "الطفولة:", options: [{ text: "مسالم", score: 1 }, { text: "مراقب", score: 3 }, { text: "متمرد", score: 5 }] },
            { id: 18, text: "النقد:", options: [{ text: "حساس جداً", score: 1 }, { text: "متوسط", score: 3 }, { text: "لا أهتم", score: 5 }] },
            { id: 19, text: "الطاقة:", options: [{ text: "ين (ناعمة)", score: 1 }, { text: "محايدة", score: 3 }, { text: "يانغ (صلبة)", score: 5 }] },
            { id: 20, text: "مساعدة:", options: [{ text: "تضحية", score: 1 }, { text: "إذا أمكن", score: 3 }, { text: "تمكين", score: 5 }] }
        ],
        results: [
            { min: 20, max: 46, title: "النتيجة: تعبيرية عالية (أنثوي)", desc: "<strong>[التوجه: جماعي]</strong><br>أولوية للارتباط والتعاطف.<br><strong>نصيحة:</strong> تعلم قول 'لا'." },
            { min: 47, max: 73, title: "النتيجة: خنثوي (مرن)", desc: "<strong>[التوجه: متوازن]</strong><br>الحالة المثالية. تجمع بين الصفات.<br><strong>نصيحة:</strong> حافظ على هويتك." },
            { min: 74, max: 100, title: "النتيجة: أداتية عالية (ذكري)", desc: "<strong>[التوجه: فاعل]</strong><br>منطق وسيطرة. العالم مكان للغزو.<br><strong>نصيحة:</strong> مارس الضعف." }
        ]
    },

    // 11. 越南语 (Vietnamese) - Professional
    "vi": {
        title: "Đánh giá Giới tính Tâm lý BSRI",
        desc: "Dựa trên Sandra Bem. Đánh giá 'Tính công cụ' và 'Tính biểu cảm' để xác định giới tính tâm lý thực sự của bạn.",
        questions: [
            { id: 1, text: "Khủng hoảng:", options: [{ text: "An ủi", score: 1 }, { text: "Đánh giá", score: 3 }, { text: "Ra lệnh", score: 5 }] },
            { id: 2, text: "Thất bại:", options: [{ text: "Khóc/Chia sẻ", score: 1 }, { text: "Suy ngẫm", score: 3 }, { text: "Phân tích", score: 5 }] },
            { id: 3, text: "Trong nhóm:", options: [{ text: "Người nghe", score: 1 }, { text: "Hòa giải", score: 3 }, { text: "Lãnh đạo", score: 5 }] },
            { id: 4, text: "Bị tổn thương:", options: [{ text: "Im lặng", score: 1 }, { text: "Bày tỏ", score: 3 }, { text: "Đối đầu", score: 5 }] },
            { id: 5, text: "Quyết định:", options: [{ text: "Trực giác", score: 1 }, { text: "Kết hợp", score: 3 }, { text: "Logic", score: 5 }] },
            { id: 6, text: "Lãnh đạo:", options: [{ text: "Nuôi dưỡng", score: 1 }, { text: "Làm gương", score: 3 }, { text: "Quyền uy", score: 5 }] },
            { id: 7, text: "Điểm mạnh:", options: [{ text: "Dịu dàng", score: 1 }, { text: "Thích nghi", score: 3 }, { text: "Tham vọng", score: 5 }] },
            { id: 8, text: "Mô tả:", options: [{ text: "Nhạy cảm", score: 1 }, { text: "Tin cậy", score: 3 }, { text: "Quyết đoán", score: 5 }] },
            { id: 9, text: "Phim cảm động:", options: [{ text: "Khóc", score: 1 }, { text: "Kìm nén", score: 3 }, { text: "Giấu", score: 5 }] },
            { id: 10, text: "Tình yêu:", options: [{ text: "Lời nói", score: 1 }, { text: "Thời gian", score: 3 }, { text: "Bảo vệ", score: 5 }] },
            { id: 11, text: "Tranh luận:", options: [{ text: "Nhường", score: 1 }, { text: "Thỏa hiệp", score: 3 }, { text: "Thắng", score: 5 }] },
            { id: 12, text: "Rủi ro:", options: [{ text: "Sợ", score: 1 }, { text: "Tính toán", score: 3 }, { text: "Thích", score: 5 }] },
            { id: 13, text: "Mục tiêu:", options: [{ text: "Gia đình", score: 1 }, { text: "Cân bằng", score: 3 }, { text: "Quyền lực", score: 5 }] },
            { id: 14, text: "Công nhận:", options: [{ text: "Được yêu", score: 1 }, { text: "Được hiểu", score: 3 }, { text: "Chiến thắng", score: 5 }] },
            { id: 15, text: "Một mình:", options: [{ text: "Cô đơn", score: 1 }, { text: "Ổn", score: 3 }, { text: "Thích", score: 5 }] },
            { id: 16, text: "Sai món:", options: [{ text: "Ăn luôn", score: 1 }, { text: "Nhờ đổi", score: 3 }, { text: "Yêu cầu", score: 5 }] },
            { id: 17, text: "Tuổi thơ:", options: [{ text: "Hòa giải", score: 1 }, { text: "Quan sát", score: 3 }, { text: "Nổi loạn", score: 5 }] },
            { id: 18, text: "Chỉ trích:", options: [{ text: "Tổn thương", score: 1 }, { text: "Bình thường", score: 3 }, { text: "Không quan tâm", score: 5 }] },
            { id: 19, text: "Năng lượng:", options: [{ text: "Âm (Nhu)", score: 1 }, { text: "Trung tính", score: 3 }, { text: "Dương (Cương)", score: 5 }] },
            { id: 20, text: "Giúp đỡ:", options: [{ text: "Hy sinh", score: 1 }, { text: "Nếu có thể", score: 3 }, { text: "Trao quyền", score: 5 }] }
        ],
        results: [
            { min: 20, max: 46, title: "Kết quả: Tính biểu cảm cao (Nữ tính)", desc: "<strong>[Định hướng: Cộng đồng]</strong><br>Ưu tiên kết nối và cảm xúc.<br><strong>Lời khuyên:</strong> Học cách từ chối." },
            { min: 47, max: 73, title: "Kết quả: Lưỡng tính (Linh hoạt)", desc: "<strong>[Định hướng: Cân bằng]</strong><br>Trạng thái lý tưởng. Cân bằng nhu và cương.<br><strong>Lời khuyên:</strong> Giữ bản sắc riêng." },
            { min: 74, max: 100, title: "Kết quả: Tính công cụ cao (Nam tính)", desc: "<strong>[Định hướng: Chủ động]</strong><br>Ưu tiên logic và chinh phục.<br><strong>Lời khuyên:</strong> Thực hành sự tổn thương." }
        ]
    },

    // 12. 泰语 (Thai) - Professional
    "th": {
        title: "แบบทดสอบเพศทางจิตวิทยา BSRI",
        desc: "อิงตาม Sandra Bem ประเมิน 'ความเป็นเครื่องมือ' และ 'การแสดงออก' เพื่อหาเพศทางจิตที่แท้จริงของคุณ",
        questions: [
            { id: 1, text: "วิกฤต:", options: [{ text: "ปลอบโยน", score: 1 }, { text: "ประเมิน", score: 3 }, { text: "สั่งการ", score: 5 }] },
            { id: 2, text: "ล้มเหลว:", options: [{ text: "ร้องไห้", score: 1 }, { text: "ทบทวน", score: 3 }, { text: "วางแผนใหม่", score: 5 }] },
            { id: 3, text: "ในกลุ่ม:", options: [{ text: "ผู้ฟัง", score: 1 }, { text: "คนกลาง", score: 3 }, { text: "ผู้นำ", score: 5 }] },
            { id: 4, text: "ถูกทำร้ายใจ:", options: [{ text: "เงียบ", score: 1 }, { text: "บอกดีๆ", score: 3 }, { text: "เผชิญหน้า", score: 5 }] },
            { id: 5, text: "ตัดสินใจ:", options: [{ text: "สัญชาตญาณ", score: 1 }, { text: "ผสม", score: 3 }, { text: "ตรรกะ", score: 5 }] },
            { id: 6, text: "ผู้นำ:", options: [{ text: "ดูแล", score: 1 }, { text: "ตัวอย่าง", score: 3 }, { text: "อำนาจ", score: 5 }] },
            { id: 7, text: "จุดแข็ง:", options: [{ text: "อ่อนโยน", score: 1 }, { text: "ปรับตัว", score: 3 }, { text: "ทะเยอทะยาน", score: 5 }] },
            { id: 8, text: "คำชม:", options: [{ text: "น่ารัก", score: 1 }, { text: "ไว้ใจได้", score: 3 }, { text: "เก่ง", score: 5 }] },
            { id: 9, text: "หนังซึ้ง:", options: [{ text: "ร้องไห้", score: 1 }, { text: "กลั้น", score: 3 }, { text: "เฉยๆ", score: 5 }] },
            { id: 10, text: "ความรัก:", options: [{ text: "คำพูด", score: 1 }, { text: "เวลา", score: 3 }, { text: "ปกป้อง", score: 5 }] },
            { id: 11, text: "เถียง:", options: [{ text: "ยอม", score: 1 }, { text: "ประนีประนอม", score: 3 }, { text: "ชนะ", score: 5 }] },
            { id: 12, text: "เสี่ยง:", options: [{ text: "กลัว", score: 1 }, { text: "คำนวณ", score: 3 }, { text: "ชอบ", score: 5 }] },
            { id: 13, text: "เป้าหมาย:", options: [{ text: "ครอบครัว", score: 1 }, { text: "สมดุล", score: 3 }, { text: "อำนาจ", score: 5 }] },
            { id: 14, text: "การยอมรับ:", options: [{ text: "ถูกรัก", score: 1 }, { text: "เข้าใจ", score: 3 }, { text: "ชนะ", score: 5 }] },
            { id: 15, text: "อยู่คนเดียว:", options: [{ text: "เหงา", score: 1 }, { text: "ได้อยู่", score: 3 }, { text: "ชอบ", score: 5 }] },
            { id: 16, text: "เสิร์ฟผิด:", options: [{ text: "กินไป", score: 1 }, { text: "ขอเปลี่ยน", score: 3 }, { text: "โวยวาย", score: 5 }] },
            { id: 17, text: "วัยเด็ก:", options: [{ text: "สงบศึก", score: 1 }, { text: "สังเกต", score: 3 }, { text: "กบฏ", score: 5 }] },
            { id: 18, text: "คำวิจารณ์:", options: [{ text: "เจ็บมาก", score: 1 }, { text: "กลางๆ", score: 3 }, { text: "ไม่สน", score: 5 }] },
            { id: 19, text: "พลังงาน:", options: [{ text: "หยิน (อ่อน)", score: 1 }, { text: "กลาง", score: 3 }, { text: "หยาง (แข็ง)", score: 5 }] },
            { id: 20, text: "ช่วยคน:", options: [{ text: "เสียสละ", score: 1 }, { text: "ถ้าทำได้", score: 3 }, { text: "สอน", score: 5 }] }
        ],
        results: [
            { min: 20, max: 46, title: "ผลลัพธ์: การแสดงออกสูง (หญิง)", desc: "<strong>[แนวทาง: ชุมชน]</strong><br>เน้นความสัมพันธ์และอารมณ์.<br><strong>แนะนำ:</strong> หัดปฏิเสธ." },
            { min: 47, max: 73, title: "ผลลัพธ์: ทั้งสองเพศ (ยืดหยุ่น)", desc: "<strong>[แนวทาง: สมดุล]</strong><br>สภาวะในอุดมคติ ปรับตัวได้ดี.<br><strong>แนะนำ:</strong> รักษาตัวตน." },
            { min: 74, max: 100, title: "ผลลัพธ์: ความเป็นเครื่องมือสูง (ชาย)", desc: "<strong>[แนวทาง: กระทำ]</strong><br>เน้นตรรกะและความสำเร็จ.<br><strong>แนะนำ:</strong> ฝึกความอ่อนโยน." }
        ]
    },

    // 13. 印尼语 (Indonesian) - Professional
    "id": {
        title: "Inventaris Gender Psikologis BSRI",
        desc: "Berdasarkan Sandra Bem. Menilai 'Instrumentalitas' dan 'Ekspresivitas' untuk menentukan orientasi gender psikologis Anda.",
        questions: [
            { id: 1, text: "Krisis:", options: [{ text: "Hibur", score: 1 }, { text: "Nilai", score: 3 }, { text: "Perintah", score: 5 }] },
            { id: 2, text: "Gagal:", options: [{ text: "Nangis", score: 1 }, { text: "Renung", score: 3 }, { text: "Analisis", score: 5 }] },
            { id: 3, text: "Di grup:", options: [{ text: "Pendengar", score: 1 }, { text: "Mediator", score: 3 }, { text: "Pemimpin", score: 5 }] },
            { id: 4, text: "Disakiti:", options: [{ text: "Diam", score: 1 }, { text: "Ungkap", score: 3 }, { text: "Lawan", score: 5 }] },
            { id: 5, text: "Keputusan:", options: [{ text: "Intuisi", score: 1 }, { text: "Campur", score: 3 }, { text: "Logika", score: 5 }] },
            { id: 6, text: "Memimpin:", options: [{ text: "Mengasuh", score: 1 }, { text: "Contoh", score: 3 }, { text: "Otoriter", score: 5 }] },
            { id: 7, text: "Kekuatan:", options: [{ text: "Lembut", score: 1 }, { text: "Adaptif", score: 3 }, { text: "Ambisi", score: 5 }] },
            { id: 8, text: "Deskripsi:", options: [{ text: "Sensitif", score: 1 }, { text: "Andal", score: 3 }, { text: "Tegas", score: 5 }] },
            { id: 9, text: "Film sedih:", options: [{ text: "Nangis", score: 1 }, { text: "Tahan", score: 3 }, { text: "Datar", score: 5 }] },
            { id: 10, text: "Cinta:", options: [{ text: "Kata-kata", score: 1 }, { text: "Waktu", score: 3 }, { text: "Lindungi", score: 5 }] },
            { id: 11, text: "Debat:", options: [{ text: "Mengalah", score: 1 }, { text: "Kompromi", score: 3 }, { text: "Menang", score: 5 }] },
            { id: 12, text: "Risiko:", options: [{ text: "Takut", score: 1 }, { text: "Hitung", score: 3 }, { text: "Suka", score: 5 }] },
            { id: 13, text: "Tujuan:", options: [{ text: "Keluarga", score: 1 }, { text: "Seimbang", score: 3 }, { text: "Kuasa", score: 5 }] },
            { id: 14, text: "Validasi:", options: [{ text: "Dicintai", score: 1 }, { text: "Dipahami", score: 3 }, { text: "Menang", score: 5 }] },
            { id: 15, text: "Sendiri:", options: [{ text: "Sepi", score: 1 }, { text: "Oke", score: 3 }, { text: "Suka", score: 5 }] },
            { id: 16, text: "Salah menu:", options: [{ text: "Makan aja", score: 1 }, { text: "Minta ganti", score: 3 }, { text: "Tuntut", score: 5 }] },
            { id: 17, text: "Masa kecil:", options: [{ text: "Pendamai", score: 1 }, { text: "Pengamat", score: 3 }, { text: "Pemberontak", score: 5 }] },
            { id: 18, text: "Kritik:", options: [{ text: "Sakit", score: 1 }, { text: "Sedang", score: 3 }, { text: "Cuek", score: 5 }] },
            { id: 19, text: "Energi:", options: [{ text: "Yin (Lembut)", score: 1 }, { text: "Netral", score: 3 }, { text: "Yang (Keras)", score: 5 }] },
            { id: 20, text: "Bantu:", options: [{ text: "Korban", score: 1 }, { text: "Bisa", score: 3 }, { text: "Ajar", score: 5 }] }
        ],
        results: [
            { min: 20, max: 46, title: "Hasil: Ekspresivitas Tinggi (Feminin)", desc: "<strong>[Orientasi: Komunal]</strong><br>Prioritas hubungan dan empati.<br><strong>Saran:</strong> Belajar bilang 'Tidak'." },
            { min: 47, max: 73, title: "Hasil: Androgini (Fleksibel)", desc: "<strong>[Orientasi: Seimbang]</strong><br>Kondisi ideal. Seimbang antara lembut dan tegas.<br><strong>Saran:</strong> Jaga jati diri." },
            { min: 74, max: 100, title: "Hasil: Instrumentalitas Tinggi (Maskulin)", desc: "<strong>[Orientasi: Agen]</strong><br>Prioritas logika dan otonomi.<br><strong>Saran:</strong> Latih kerentanan." }
        ]
    }
};
