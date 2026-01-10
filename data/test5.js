// data/test5.js
// 隐藏天赋与潜能评估 (Hidden Talent & Potential Assessment)
// 基于 Howard Gardner 多元智能理论 & HBDI 全脑优势模型
// 评估维度：认知架构、心流触发机制、抽象思维能力

const quizDataMulti = {
    // 1. 英语 (English) - Expert Level
    "en": {
        title: "Neuro-Cognitive Potential Assessment",
        desc: "Based on the Theory of Multiple Intelligences and HBDI. This 24-question deep dive decodes your brain's 'Factory Settings' to reveal your hidden zone of genius.",
        questions: [
            // --- Context: Problem Solving (Cognitive Style) ---
            { id: 1, text: "When faced with a complex, chaotic problem, your instinct is to:", options: [{ text: "Visualize the final outcome creatively", score: 1 }, { text: "Discuss it with a team to brainstorm", score: 3 }, { text: "Break it down into logical steps", score: 5 }] },
            { id: 2, text: "You need to learn a new difficult skill. You prefer:", options: [{ text: "Experimenting and 'feeling' it out", score: 1 }, { text: "Finding a mentor or teacher", score: 3 }, { text: "Reading the manual and analyzing data", score: 5 }] },
            { id: 3, text: "In a debate, you are most likely to:", options: [{ text: "Use metaphors and emotional appeal", score: 1 }, { text: "Find a middle ground/compromise", score: 3 }, { text: "Use irrefutable facts and logic", score: 5 }] },
            
            // --- Context: Flow State (Energy Source) ---
            { id: 4, text: "You lose track of time most easily when you are:", options: [{ text: "Creating, designing, or imagining", score: 1 }, { text: "Networking, teaching, or counseling", score: 3 }, { text: "Coding, calculating, or strategizing", score: 5 }] },
            { id: 5, text: "Which type of game appeals to you most?", options: [{ text: "Open-world exploration / Roleplay", score: 1 }, { text: "Co-op / Social party games", score: 3 }, { text: "Strategy / Puzzle / Chess", score: 5 }] },
            { id: 6, text: "If you were to write a book, it would likely be:", options: [{ text: "Fantasy, Poetry, or Fiction", score: 1 }, { text: "Biography or Self-Help", score: 3 }, { text: "Non-fiction analysis or Science", score: 5 }] },

            // --- Context: Perception & Processing ---
            { id: 7, text: "When you enter a new room, what do you notice first?", options: [{ text: "The aesthetics, lighting, and vibe", score: 1 }, { text: "The people and the energy", score: 3 }, { text: "The structure, layout, and flaws", score: 5 }] },
            { id: 8, text: "Your memory works best by associating information with:", options: [{ text: "Images, colors, or sounds", score: 1 }, { text: "Conversations or faces", score: 3 }, { text: "Lists, numbers, or categories", score: 5 }] },
            { id: 9, text: "When giving directions, you tend to say:", options: [{ text: "Turn at the big blue house", score: 1 }, { text: "Ask someone at the corner", score: 3 }, { text: "Go North 200 meters, then East", score: 5 }] },

            // --- Context: Social & Emotional Intelligence ---
            { id: 10, text: "In a group project, you naturally gravitate towards:", options: [{ text: "The Visionary (The 'Idea' person)", score: 1 }, { text: "The Diplomat (The 'Glue')", score: 3 }, { text: "The Architect (The 'Planner')", score: 5 }] },
            { id: 11, text: "When a friend is upset, you usually:", options: [{ text: "Try to distract them with fun", score: 1 }, { text: "Empathize and listen", score: 3 }, { text: "Analyze why it happened", score: 5 }] },
            { id: 12, text: "You consider yourself to be more:", options: [{ text: "Intuitive and Spontaneous", score: 1 }, { text: "Sociable and Adaptive", score: 3 }, { text: "Rational and Structured", score: 5 }] },

            // --- Context: Abstract & Strategic ---
            { id: 13, text: "When planning a vacation:", options: [{ text: "No plan, just go with the flow", score: 1 }, { text: "Ask friends for recommendations", score: 3 }, { text: "Detailed itinerary and budget", score: 5 }] },
            { id: 14, text: "You define 'truth' based on:", options: [{ text: "What feels right (Gut instinct)", score: 1 }, { text: "Consensus (What most agree on)", score: 3 }, { text: "Evidence (Provable facts)", score: 5 }] },
            { id: 15, text: "Which concept fascinates you more?", options: [{ text: "Art, Philosophy, Mysticism", score: 1 }, { text: "Psychology, Sociology, Culture", score: 3 }, { text: "Physics, Economics, Systems", score: 5 }] },
            { id: 16, text: "If you could have a superpower:", options: [{ text: "Shapeshifting or Creation", score: 1 }, { text: "Mind Reading", score: 3 }, { text: "Super Intelligence", score: 5 }] },

            // --- Context: Decision Making ---
            { id: 17, text: "When making a life-changing decision:", options: [{ text: "I follow my heart/dream", score: 1 }, { text: "I consult my loved ones", score: 3 }, { text: "I make a Pros/Cons list", score: 5 }] },
            { id: 18, text: "Routine and repetition make you feel:", options: [{ text: "Stifled and bored", score: 1 }, { text: "Comfortable if with good people", score: 3 }, { text: "Secure and efficient", score: 5 }] },
            { id: 19, text: "You deal with chaos by:", options: [{ text: "Embracing it / Improvising", score: 1 }, { text: "Collaborating to fix it", score: 3 }, { text: "Creating order / Systematizing", score: 5 }] },
            { id: 20, text: "Your desk/workspace is usually:", options: [{ text: "Messy but creative", score: 1 }, { text: "Filled with personal mementos", score: 3 }, { text: "Organized and minimalist", score: 5 }] },

            // --- Context: Deep Drives ---
            { id: 21, text: "What drains your energy the most?", options: [{ text: "Rigid rules and monotony", score: 1 }, { text: "Conflict and isolation", score: 3 }, { text: "Incompetence and inefficiency", score: 5 }] },
            { id: 22, text: "What do you value most in a leader?", options: [{ text: "Inspiration and Vision", score: 1 }, { text: "Empathy and Fairness", score: 3 }, { text: "Competence and Strategy", score: 5 }] },
            { id: 23, text: "Your approach to money:", options: [{ text: "It's for experiences/freedom", score: 1 }, { text: "It's for caring for family", score: 3 }, { text: "It's a resource to be managed", score: 5 }] },
            { id: 24, text: "Ideally, your legacy would be:", options: [{ text: "Artistic or Cultural impact", score: 1 }, { text: "Social or Humanitarian impact", score: 3 }, { text: "Technological or Structural impact", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Hidden Talent: The Creative Visionary", 
                desc: "<strong>[Brain Type: Right-Brain Dominant / Intuitive]</strong><br><br>" +
                      "<strong>🧠 Cognitive Profile:</strong><br>Your brain is wired for divergence, synthesis, and imagination. You possess 'Spatial' and 'Existential' intelligence. You don't just see the world as it is; you see what it <em>could</em> be. You excel at connecting unrelated dots and thinking outside the box.<br><br>" +
                      "<strong>🌟 Zone of Genius:</strong><br>Innovation, Art, Storytelling, Entrepreneurship (0 to 1), Design.<br><br>" +
                      "<strong>⚠️ Shadow Side:</strong><br>You may struggle with structure, details, and routine execution. You might start many projects but finish few." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Hidden Talent: The Social Catalyst", 
                desc: "<strong>[Brain Type: Limbic Dominant / Interpersonal]</strong><br><br>" +
                      "<strong>🧠 Cognitive Profile:</strong><br>Your superpower lies in 'Interpersonal' and 'Linguistic' intelligence. Your brain is highly attuned to social dynamics, emotional currents, and human motivation. You are the glue that holds systems together. You have a rare ability to influence, persuade, and heal.<br><br>" +
                      "<strong>🌟 Zone of Genius:</strong><br>Leadership, Diplomacy, Psychology, Sales, Education, Public Relations.<br><br>" +
                      "<strong>⚠️ Shadow Side:</strong><br>You may take things too personally or prioritize harmony over efficiency. You risk emotional burnout by absorbing others' problems." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Hidden Talent: The Strategic Mastermind", 
                desc: "<strong>[Brain Type: Left-Brain Dominant / Analytical]</strong><br><br>" +
                      "<strong>🧠 Cognitive Profile:</strong><br>You possess elite 'Logical-Mathematical' and 'Strategic' intelligence. Your brain operates like a high-precision computer, constantly optimizing, analyzing, and structuring chaos. You cut through emotion to find the most effective solution.<br><br>" +
                      "<strong>🌟 Zone of Genius:</strong><br>Engineering, Data Science, Finance, Surgery, Law, Strategic Planning.<br><br>" +
                      "<strong>⚠️ Shadow Side:</strong><br>You may struggle with empathy or ambiguity. You might dismiss valid emotional data as 'irrational,' leading to friction in relationships." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - 专业版
    "zh": {
        title: "隐藏天赋与潜能评估 (专业版)",
        desc: "基于哈佛大学多元智能理论。通过24道深度认知情境题，解码你的大脑“底层架构”，通过认知偏好反推你尚未被发掘的天赋领域。",
        questions: [
            // 场景：问题解决
            { id: 1, text: "当面对一个复杂混乱的难题时，你的本能反应是：", options: [{ text: "在大脑中构想最终的画面", score: 1 }, { text: "找团队讨论，头脑风暴", score: 3 }, { text: "将其拆解为逻辑步骤", score: 5 }] },
            { id: 2, text: "你需要学习一项很难的新技能，你倾向于：", options: [{ text: "直接上手试错，凭感觉学", score: 1 }, { text: "找个老师或导师教我", score: 3 }, { text: "阅读说明书，分析原理", score: 5 }] },
            { id: 3, text: "在辩论中，你最擅长使用：", options: [{ text: "隐喻、故事和情感渲染", score: 1 }, { text: "寻找折中方案，以理服人", score: 3 }, { text: "无可辩驳的数据和逻辑", score: 5 }] },
            
            // 场景：心流状态
            { id: 4, text: "做哪类事情时，你最容易忘记时间的流逝（进入心流）？", options: [{ text: "创作、设计、幻想", score: 1 }, { text: "社交、教学、咨询", score: 3 }, { text: "编程、计算、推演", score: 5 }] },
            { id: 5, text: "哪种类型的游戏最吸引你？", options: [{ text: "开放世界探索 / 角色扮演", score: 1 }, { text: "合作通关 / 派对游戏", score: 3 }, { text: "策略 / 解谜 / 棋类", score: 5 }] },
            { id: 6, text: "如果你要写一本书，它大概率是：", options: [{ text: "奇幻小说、诗歌或虚构故事", score: 1 }, { text: "传记或人际关系指南", score: 3 }, { text: "非虚构分析、科学或硬核干货", score: 5 }] },

            // 场景：感知模式
            { id: 7, text: "当你进入一个新的房间，你首先注意到的是：", options: [{ text: "美感、光线和整体氛围", score: 1 }, { text: "房间里的人和情绪场", score: 3 }, { text: "结构、布局和缺陷", score: 5 }] },
            { id: 8, text: "你的记忆最容易通过什么方式被唤醒？", options: [{ text: "图像、颜色或声音", score: 1 }, { text: "对话或面孔", score: 3 }, { text: "清单、数字或类别", score: 5 }] },
            { id: 9, text: "当给别人指路时，你倾向于说：", options: [{ text: "在那栋蓝色大房子转弯", score: 1 }, { text: "去那个路口问问人", score: 3 }, { text: "向北走200米，然后向东", score: 5 }] },

            // 场景：社交智能
            { id: 10, text: "在团队项目中，你自然而然会充当：", options: [{ text: "构想者 (提出点子的人)", score: 1 }, { text: "外交官 (凝聚团队的人)", score: 3 }, { text: "架构师 (制定计划的人)", score: 5 }] },
            { id: 11, text: "当朋友难过时，你通常会：", options: [{ text: "带他去玩，转移注意力", score: 1 }, { text: "共情倾听，给他拥抱", score: 3 }, { text: "帮他分析原因，找解决方案", score: 5 }] },
            { id: 12, text: "你认为自己更偏向于：", options: [{ text: "直觉型和随性", score: 1 }, { text: "社交型和适应", score: 3 }, { text: "理性型和结构", score: 5 }] },

            // 场景：抽象思维
            { id: 13, text: "关于旅行计划：", options: [{ text: "不做计划，走到哪算哪", score: 1 }, { text: "问朋友推荐", score: 3 }, { text: "详细的行程表和预算", score: 5 }] },
            { id: 14, text: "你对“真理”的定义倾向于：", options: [{ text: "感觉对的就是对的 (直觉)", score: 1 }, { text: "大家都认可的 (共识)", score: 3 }, { text: "有证据支持的 (事实)", score: 5 }] },
            { id: 15, text: "哪个领域更让你着迷？", options: [{ text: "艺术、哲学、神秘学", score: 1 }, { text: "心理学、社会学、文化", score: 3 }, { text: "物理、经济、系统论", score: 5 }] },
            { id: 16, text: "如果你能拥有一种超能力：", options: [{ text: "变形或凭空创造", score: 1 }, { text: "读心术", score: 3 }, { text: "超级计算/预知未来", score: 5 }] },

            // 场景：决策机制
            { id: 17, text: "面对重大人生抉择时：", options: [{ text: "听从内心的召唤/梦想", score: 1 }, { text: "咨询我信任的人", score: 3 }, { text: "列出利弊清单进行加权分析", score: 5 }] },
            { id: 18, text: "常规和重复性工作让你感觉：", options: [{ text: "窒息且无聊", score: 1 }, { text: "如果有人陪就还好", score: 3 }, { text: "安全且高效", score: 5 }] },
            { id: 19, text: "面对混乱局面，你会：", options: [{ text: "拥抱它，随机应变", score: 1 }, { text: "呼吁大家一起解决", score: 3 }, { text: "建立秩序，系统化", score: 5 }] },
            { id: 20, text: "你的桌面/工作环境通常是：", options: [{ text: "乱但有创造力", score: 1 }, { text: "充满个人纪念品", score: 3 }, { text: "整洁、极简、井井有条", score: 5 }] },

            // 场景：深层驱动
            { id: 21, text: "什么最消耗你的能量？", options: [{ text: "死板的规则和单调", score: 1 }, { text: "冲突和孤独", score: 3 }, { text: "无能和低效", score: 5 }] },
            { id: 22, text: "你最看重领导者的什么品质？", options: [{ text: "灵感与愿景", score: 1 }, { text: "共情与公平", score: 3 }, { text: "能力与策略", score: 5 }] },
            { id: 23, text: "你对金钱的看法：", options: [{ text: "它是体验自由的工具", score: 1 }, { text: "它是照顾家人的保障", score: 3 }, { text: "它是需要管理的资源", score: 5 }] },
            { id: 24, text: "理想情况下，你希望留下的遗产是：", options: [{ text: "艺术或文化影响", score: 1 }, { text: "社会或人道主义影响", score: 3 }, { text: "技术或制度影响", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "天赋原型：创想家 (The Creative Visionary)", 
                desc: "<strong>【大脑模式：右脑优势 / 直觉驱动】</strong><br><br>" +
                      "<strong>🧠 认知解码：</strong><br>你的大脑天生擅长发散思维、联想和图像化。你拥有卓越的“空间智能”和“存在智能”。你看到的不是世界的原貌，而是它“可能”的样子。你擅长从无关的事物中发现联系（Connecting Dots），是天生的“从0到1”创造者。<br><br>" +
                      "<strong>🌟 天才区 (Zone of Genius)：</strong><br>创新研发、艺术创作、品牌故事叙述、创业初期、设计、战略愿景规划。<br><br>" +
                      "<strong>⚠️ 潜在短板：</strong><br>你可能在结构化、细节执行和常规事务上感到极其痛苦。你容易“点子多但落地少”，需要搭配执行力强的伙伴。" 
            },
            { 
                min: 49, 
                max: 88, 
                title: "天赋原型：连结者 (The Social Catalyst)", 
                desc: "<strong>【大脑模式：边缘系统优势 / 情感驱动】</strong><br><br>" +
                      "<strong>🧠 认知解码：</strong><br>你的超能力在于“人际智能”和“内省智能”。你的大脑对社会动力学、情绪流动和人类动机有着惊人的敏锐度。你是团队的粘合剂。你不需要依赖逻辑就能理解他人的意图。你拥有影响、说服和治愈他人的天赋。<br><br>" +
                      "<strong>🌟 天才区 (Zone of Genius)：</strong><br>团队领导、外交与谈判、心理咨询、市场营销、教育、公共关系。<br><br>" +
                      "<strong>⚠️ 潜在短板：</strong><br>你可能容易感情用事，或者因为过度在意和谐而牺牲效率。你需要注意设立“情绪边界”，防止共情疲劳。" 
            },
            { 
                min: 89, 
                max: 120, 
                title: "天赋原型：战略家 (The Strategic Mastermind)", 
                desc: "<strong>【大脑模式：左脑优势 / 逻辑驱动】</strong><br><br>" +
                      "<strong>🧠 认知解码：</strong><br>你拥有顶级的“逻辑-数学智能”。你的大脑像一台精密的超级计算机，时刻在进行优化、分析和结构化。你能一眼看穿复杂系统中的漏洞。你追求客观真理和效率，能剥离情绪干扰，找到最优解。<br><br>" +
                      "<strong>🌟 天才区 (Zone of Genius)：</strong><br>工程技术、数据科学、金融投资、外科手术、法律、系统架构设计。<br><br>" +
                      "<strong>⚠️ 潜在短板：</strong><br>你可能在处理模糊性（Ambiguity）和情感问题时感到困难。你容易将合理的情绪视为“非理性”而加以排斥，从而导致人际摩擦。" 
            }
        ]
    },

// 3. 德语 (German) - Professional
    "de": {
        title: "Neuro-Kognitive Potenzialanalyse",
        desc: "Basierend auf Howard Gardners Theorie der multiplen Intelligenzen. 24 Fragen entschlüsseln die 'Werkseinstellungen' Ihres Gehirns und enthüllen Ihre verborgene Genie-Zone.",
        questions: [
            // Problemlösung
            { id: 1, text: "Bei einem komplexen, chaotischen Problem ist Ihr Instinkt:", options: [{ text: "Das Endergebnis visualisieren", score: 1 }, { text: "Im Team diskutieren", score: 3 }, { text: "In logische Schritte zerlegen", score: 5 }] },
            { id: 2, text: "Eine schwere neue Fähigkeit lernen. Sie bevorzugen:", options: [{ text: "Experimentieren & Fühlen", score: 1 }, { text: "Einen Mentor finden", score: 3 }, { text: "Handbuch lesen & analysieren", score: 5 }] },
            { id: 3, text: "In einer Debatte nutzen Sie am ehesten:", options: [{ text: "Metaphern & Emotionen", score: 1 }, { text: "Kompromisse", score: 3 }, { text: "Unwiderlegbare Fakten", score: 5 }] },
            
            // Flow-Zustand
            { id: 4, text: "Sie vergessen die Zeit am ehesten beim:", options: [{ text: "Erschaffen/Designen", score: 1 }, { text: "Lehren/Netzwerken", score: 3 }, { text: "Programmieren/Kalkulieren", score: 5 }] },
            { id: 5, text: "Welches Spiel reizt Sie am meisten?", options: [{ text: "Rollenspiel/Open World", score: 1 }, { text: "Social/Party-Spiele", score: 3 }, { text: "Strategie/Schach", score: 5 }] },
            { id: 6, text: "Wenn Sie ein Buch schreiben würden:", options: [{ text: "Fantasy/Poesie", score: 1 }, { text: "Biografie", score: 3 }, { text: "Sachbuch/Wissenschaft", score: 5 }] },

            // Wahrnehmung
            { id: 7, text: "Was bemerken Sie in einem neuen Raum zuerst?", options: [{ text: "Ästhetik & Atmosphäre", score: 1 }, { text: "Menschen & Energie", score: 3 }, { text: "Struktur & Layout", score: 5 }] },
            { id: 8, text: "Ihr Gedächtnis funktioniert am besten durch:", options: [{ text: "Bilder & Farben", score: 1 }, { text: "Gespräche & Gesichter", score: 3 }, { text: "Listen & Zahlen", score: 5 }] },
            { id: 9, text: "Wegbeschreibung geben:", options: [{ text: "Beim großen blauen Haus", score: 1 }, { text: "Frag jemanden an der Ecke", score: 3 }, { text: "200m Nord, dann Ost", score: 5 }] },

            // Soziale Intelligenz
            { id: 10, text: "Ihre Rolle im Team:", options: [{ text: "Der Visionär (Ideen)", score: 1 }, { text: "Der Diplomat (Klebstoff)", score: 3 }, { text: "Der Architekt (Planer)", score: 5 }] },
            { id: 11, text: "Ein Freund ist traurig. Sie:", options: [{ text: "Lenken ihn ab (Spaß)", score: 1 }, { text: "Hören empathisch zu", score: 3 }, { text: "Analysieren das Problem", score: 5 }] },
            { id: 12, text: "Sie halten sich eher für:", options: [{ text: "Intuitiv & Spontan", score: 1 }, { text: "Sozial & Anpassungsfähig", score: 3 }, { text: "Rational & Strukturiert", score: 5 }] },

            // Abstraktes Denken
            { id: 13, text: "Urlaubsplanung:", options: [{ text: "Kein Plan, einfach los", score: 1 }, { text: "Freunde fragen", score: 3 }, { text: "Detaillierter Plan", score: 5 }] },
            { id: 14, text: "Wahrheit basiert auf:", options: [{ text: "Bauchgefühl", score: 1 }, { text: "Konsens", score: 3 }, { text: "Beweisen", score: 5 }] },
            { id: 15, text: "Was fasziniert Sie mehr?", options: [{ text: "Kunst & Mystik", score: 1 }, { text: "Psychologie & Kultur", score: 3 }, { text: "Physik & Systeme", score: 5 }] },
            { id: 16, text: "Superkraft Ihrer Wahl:", options: [{ text: "Erschaffung/Verwandlung", score: 1 }, { text: "Gedankenlesen", score: 3 }, { text: "Super-Intelligenz", score: 5 }] },

            // Entscheidung
            { id: 17, text: "Lebensverändernde Entscheidung:", options: [{ text: "Folge dem Herzen", score: 1 }, { text: "Frage Vertraute", score: 3 }, { text: "Pro-Contra-Liste", score: 5 }] },
            { id: 18, text: "Routine fühlt sich an wie:", options: [{ text: "Erstickend", score: 1 }, { text: "Okay mit den richtigen Leuten", score: 3 }, { text: "Sicher & Effizient", score: 5 }] },
            { id: 19, text: "Umgang mit Chaos:", options: [{ text: "Improvisieren", score: 1 }, { text: "Gemeinsam lösen", score: 3 }, { text: "Ordnung schaffen", score: 5 }] },
            { id: 20, text: "Ihr Arbeitsplatz:", options: [{ text: "Chaotisch kreativ", score: 1 }, { text: "Persönliche Erinnerungen", score: 3 }, { text: "Minimalistisch", score: 5 }] },

            // Antriebe
            { id: 21, text: "Was raubt am meisten Energie?", options: [{ text: "Starre Regeln", score: 1 }, { text: "Konflikte/Isolation", score: 3 }, { text: "Inkompetenz", score: 5 }] },
            { id: 22, text: "Wichtigste Eigenschaft eines Anführers:", options: [{ text: "Inspiration", score: 1 }, { text: "Empathie", score: 3 }, { text: "Kompetenz", score: 5 }] },
            { id: 23, text: "Geld ist:", options: [{ text: "Freiheit für Erlebnisse", score: 1 }, { text: "Fürsorge für Familie", score: 3 }, { text: "Ressource zum Managen", score: 5 }] },
            { id: 24, text: "Ihr Vermächtnis:", options: [{ text: "Künstlerisch/Kulturell", score: 1 }, { text: "Sozial/Humanitär", score: 3 }, { text: "Technologisch/Strukturell", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Talent-Archetyp: Der kreative Visionär", 
                desc: "<strong>[Gehirntyp: Rechtshemisphärisch / Intuitiv]</strong><br><br>" +
                      "<strong>🧠 Kognitives Profil:</strong><br>Ihr Gehirn ist auf divergentes Denken und Imagination programmiert. Sie sehen nicht, was ist, sondern was <em>sein könnte</em>. Sie sind ein Meister darin, Verbindungen zwischen scheinbar unzusammenhängenden Dingen herzustellen.<br><br>" +
                      "<strong>🌟 Genie-Zone:</strong><br>Innovation, Kunst, Storytelling, Design, Entrepreneurship.<br><br>" +
                      "<strong>⚠️ Schattenseite:</strong><br>Struktur und Details können Sie quälen. Sie starten viele Projekte, beenden aber wenige." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Talent-Archetyp: Der soziale Katalysator", 
                desc: "<strong>[Gehirntyp: Limbisches System / Interpersonell]</strong><br><br>" +
                      "<strong>🧠 Kognitives Profil:</strong><br>Ihre Superkraft ist die 'Interpersonelle Intelligenz'. Ihr Gehirn reagiert hochsensibel auf soziale Dynamiken und menschliche Motivation. Sie sind der Klebstoff, der Systeme zusammenhält.<br><br>" +
                      "<strong>🌟 Genie-Zone:</strong><br>Führung, Diplomatie, Psychologie, Vertrieb, Bildung.<br><br>" +
                      "<strong>⚠️ Schattenseite:</strong><br>Sie nehmen Dinge oft zu persönlich oder opfern Effizienz für Harmonie. Gefahr von emotionalem Burnout." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Talent-Archetyp: Der strategische Mastermind", 
                desc: "<strong>[Gehirntyp: Linkshemisphärisch / Analytisch]</strong><br><br>" +
                      "<strong>🧠 Kognitives Profil:</strong><br>Sie besitzen elitäre 'Logisch-Mathematische' Intelligenz. Ihr Gehirn arbeitet wie ein Hochleistungscomputer, der ständig optimiert und strukturiert. Sie durchschneiden Emotionen, um die effektivste Lösung zu finden.<br><br>" +
                      "<strong>🌟 Genie-Zone:</strong><br>Ingenieurwesen, Data Science, Finanzen, Chirurgie, Strategieplanung.<br><br>" +
                      "<strong>⚠️ Schattenseite:</strong><br>Sie könnten Schwierigkeiten mit Ambiguität und Empathie haben. Emotionen erscheinen Ihnen oft als 'irrational'." 
            }
        ]
    },

    // 4. 日语 (Japanese) - Professional
    "ja": {
        title: "潜在能力・才能診断 (プロフェッショナル版)",
        desc: "ハーバード大の多重知能理論に基づく。24の深層認知質問で、あなたの脳の「初期設定」を解読し、隠れた才能の領域を特定します。",
        questions: [
            // 問題解決
            { id: 1, text: "複雑で混沌とした問題に直面した時、まずどうする？", options: [{ text: "最終的な結果をイメージする", score: 1 }, { text: "チームとブレストする", score: 3 }, { text: "論理的な手順に分解する", score: 5 }] },
            { id: 2, text: "難しいスキルを学ぶ必要がある時：", options: [{ text: "実験して感覚で掴む", score: 1 }, { text: "メンターを見つける", score: 3 }, { text: "マニュアルを読み分析する", score: 5 }] },
            { id: 3, text: "議論において、あなたがよく使う手法は：", options: [{ text: "比喩や感情への訴え", score: 1 }, { text: "妥協点を探る", score: 3 }, { text: "反論できない事実と論理", score: 5 }] },
            
            // フロー状態
            { id: 4, text: "時間を忘れて没頭できるのは：", options: [{ text: "創作・デザイン・空想", score: 1 }, { text: "交流・教育・相談", score: 3 }, { text: "プログラミング・計算", score: 5 }] },
            { id: 5, text: "最も魅力的なゲームは：", options: [{ text: "オープンワールド/RPG", score: 1 }, { text: "協力/パーティーゲーム", score: 3 }, { text: "戦略/パズル/チェス", score: 5 }] },
            { id: 6, text: "本を書くなら：", options: [{ text: "ファンタジー/詩", score: 1 }, { text: "伝記/自己啓発", score: 3 }, { text: "専門書/科学分析", score: 5 }] },

            // 知覚
            { id: 7, text: "新しい部屋に入った時、最初に気づくのは：", options: [{ text: "美学・照明・雰囲気", score: 1 }, { text: "人々・エネルギー", score: 3 }, { text: "構造・配置・欠陥", score: 5 }] },
            { id: 8, text: "記憶を呼び起こすのに最適なのは：", options: [{ text: "画像・色・音", score: 1 }, { text: "会話・顔", score: 3 }, { text: "リスト・数字・カテゴリ", score: 5 }] },
            { id: 9, text: "道案内をする時：", options: [{ text: "あの青い家のところで…", score: 1 }, { text: "あの角の人に聞いて…", score: 3 }, { text: "北へ200m、次に東へ", score: 5 }] },

            // 社会的知能
            { id: 10, text: "チーム内での自然な役割は：", options: [{ text: "ビジョナリー（発想）", score: 1 }, { text: "外交官（調整）", score: 3 }, { text: "建築家（計画）", score: 5 }] },
            { id: 11, text: "友人が落ち込んでいる時：", options: [{ text: "気晴らしに連れ出す", score: 1 }, { text: "共感して話を聞く", score: 3 }, { text: "原因を分析する", score: 5 }] },
            { id: 12, text: "自分自身をどう思う？", options: [{ text: "直感的・気まま", score: 1 }, { text: "社交的・順応性が高い", score: 3 }, { text: "合理的・几帳面", score: 5 }] },

            // 抽象思考
            { id: 13, text: "旅行の計画：", options: [{ text: "ノープランで流れに任せる", score: 1 }, { text: "友人にオススメを聞く", score: 3 }, { text: "詳細な日程と予算", score: 5 }] },
            { id: 14, text: "「真実」の定義は：", options: [{ text: "直感的に正しいと感じるもの", score: 1 }, { text: "みんなが同意するもの", score: 3 }, { text: "証拠があるもの", score: 5 }] },
            { id: 15, text: "最も興味がある分野は：", options: [{ text: "芸術・哲学・神秘", score: 1 }, { text: "心理学・社会学", score: 3 }, { text: "物理・経済・システム", score: 5 }] },
            { id: 16, text: "欲しい超能力：", options: [{ text: "創造・変身", score: 1 }, { text: "読心術", score: 3 }, { text: "超知能・予知", score: 5 }] },

            // 意思決定
            { id: 17, text: "人生の重要な決断をする時：", options: [{ text: "心・夢に従う", score: 1 }, { text: "信頼できる人に相談", score: 3 }, { text: "メリット・デメリット分析", score: 5 }] },
            { id: 18, text: "ルーチンワークへの反応：", options: [{ text: "窒息しそうで退屈", score: 1 }, { text: "良い人と一緒なら平気", score: 3 }, { text: "安心で効率的", score: 5 }] },
            { id: 19, text: "カオス（混乱）への対処法：", options: [{ text: "即興で乗り切る", score: 1 }, { text: "協力して解決する", score: 3 }, { text: "秩序を作り体系化する", score: 5 }] },
            { id: 20, text: "デスクの状態：", options: [{ text: "散らかっているが創造的", score: 1 }, { text: "思い出の品が多い", score: 3 }, { text: "整理整頓・ミニマリスト", score: 5 }] },

            // 深層心理
            { id: 21, text: "最もエネルギーを奪うもの：", options: [{ text: "厳格なルール・単調さ", score: 1 }, { text: "対立・孤独", score: 3 }, { text: "無能・非効率", score: 5 }] },
            { id: 22, text: "リーダーに求めるもの：", options: [{ text: "インスピレーション", score: 1 }, { text: "共感・公平さ", score: 3 }, { text: "能力・戦略", score: 5 }] },
            { id: 23, text: "お金に対する考え方：", options: [{ text: "自由を体験するツール", score: 1 }, { text: "家族を守るもの", score: 3 }, { text: "管理すべきリソース", score: 5 }] },
            { id: 24, text: "残したい遺産（レガシー）：", options: [{ text: "芸術的・文化的影響", score: 1 }, { text: "社会的・人道的影響", score: 3 }, { text: "技術的・構造的影響", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "才能の原型：創造的ビジョナリー", 
                desc: "<strong>【脳タイプ：右脳優位 / 直感駆動】</strong><br><br>" +
                      "<strong>🧠 認知プロファイル：</strong><br>あなたの脳は発散的思考とイメージ化に特化しています。「空間的知能」と「実存的知能」に優れ、世界を「あるがまま」ではなく「ありうる姿」として見ます。無関係な点と点を繋げる（Connecting Dots）天才です。<br><br>" +
                      "<strong>🌟 天才領域 (Zone of Genius)：</strong><br>イノベーション、芸術、ブランド構築、起業（0→1）、デザイン。<br><br>" +
                      "<strong>⚠️ 注意点：</strong><br>構造化や詳細なルーチンワークに苦痛を感じやすいです。アイデアは多いが実行に移せない傾向があります。" 
            },
            { 
                min: 49, 
                max: 88, 
                title: "才能の原型：社会的触媒 (Catalyst)", 
                desc: "<strong>【脳タイプ：大脳辺縁系優位 / 感情駆動】</strong><br><br>" +
                      "<strong>🧠 認知プロファイル：</strong><br>あなたの超能力は「対人知能」です。社会的な力学、感情の流れ、人の動機を驚くほど敏感に察知します。あなたは組織の接着剤であり、論理に頼らずとも人の意図を理解できます。<br><br>" +
                      "<strong>🌟 天才領域 (Zone of Genius)：</strong><br>リーダーシップ、外交、心理カウンセリング、広報、教育。<br><br>" +
                      "<strong>⚠️ 注意点：</strong><br>物事を個人的に受け止めすぎたり、調和のために効率を犠牲にすることがあります。感情的な燃え尽きに注意してください。" 
            },
            { 
                min: 89, 
                max: 120, 
                title: "才能の原型：戦略的策士 (Mastermind)", 
                desc: "<strong>【脳タイプ：左脳優位 / 論理駆動】</strong><br><br>" +
                      "<strong>🧠 認知プロファイル：</strong><br>あなたはエリート級の「論理・数学的知能」を持っています。脳は高性能コンピュータのように常に最適化、分析、構造化を行っています。感情を排して最も効果的な解決策を見つけ出すことができます。<br><br>" +
                      "<strong>🌟 天才領域 (Zone of Genius)：</strong><br>エンジニアリング、データ科学、金融、外科医、法律、システム設計。<br><br>" +
                      "<strong>⚠️ 注意点：</strong><br>曖昧さや感情的な問題に対処するのが苦手かもしれません。正当な感情を「非合理的」として切り捨ててしまい、人間関係の摩擦を生むことがあります。" 
            }
        ]
    },

    // 5. 法语 (French) - Professional
    "fr": {
        title: "Évaluation du Potentiel Neuro-Cognitif",
        desc: "Basé sur les intelligences multiples. 24 questions pour décoder votre cerveau et révéler vos talents cachés.",
        questions: [
            // Résolution de problèmes
            { id: 1, text: "Face à un problème complexe, votre instinct est de :", options: [{ text: "Visualiser le résultat", score: 1 }, { text: "Discuter en équipe", score: 3 }, { text: "Découper en étapes logiques", score: 5 }] },
            { id: 2, text: "Pour apprendre une compétence difficile :", options: [{ text: "Expérimenter", score: 1 }, { text: "Trouver un mentor", score: 3 }, { text: "Lire le manuel", score: 5 }] },
            { id: 3, text: "Dans un débat, vous utilisez :", options: [{ text: "Métaphores/Émotions", score: 1 }, { text: "Compromis", score: 3 }, { text: "Faits irréfutables", score: 5 }] },
            
            // État de Flow
            { id: 4, text: "Vous perdez la notion du temps en :", options: [{ text: "Créant/Imaginant", score: 1 }, { text: "Enseignant/Discutant", score: 3 }, { text: "Calculant/Programmant", score: 5 }] },
            { id: 5, text: "Votre type de jeu préféré :", options: [{ text: "Jeu de rôle/Exploration", score: 1 }, { text: "Jeu social/Coop", score: 3 }, { text: "Stratégie/Puzzle", score: 5 }] },
            { id: 6, text: "Si vous écriviez un livre :", options: [{ text: "Fantaisie/Poésie", score: 1 }, { text: "Biographie", score: 3 }, { text: "Science/Analyse", score: 5 }] },

            // Perception
            { id: 7, text: "En entrant dans une pièce, vous remarquez :", options: [{ text: "L'esthétique/Ambiance", score: 1 }, { text: "Les gens/L'énergie", score: 3 }, { text: "La structure/Défauts", score: 5 }] },
            { id: 8, text: "Votre mémoire fonctionne mieux avec :", options: [{ text: "Images/Couleurs", score: 1 }, { text: "Conversations", score: 3 }, { text: "Listes/Chiffres", score: 5 }] },
            { id: 9, text: "Pour donner une direction :", options: [{ text: "À la maison bleue", score: 1 }, { text: "Demandez à quelqu'un", score: 3 }, { text: "200m Nord, puis Est", score: 5 }] },

            // Intelligence Sociale
            { id: 10, text: "Votre rôle dans un groupe :", options: [{ text: "Le Visionnaire", score: 1 }, { text: "Le Diplomate", score: 3 }, { text: "L'Architecte", score: 5 }] },
            { id: 11, text: "Un ami est triste, vous :", options: [{ text: "Le distrayez", score: 1 }, { text: "Écoutez", score: 3 }, { text: "Analysez le problème", score: 5 }] },
            { id: 12, text: "Vous êtes plutôt :", options: [{ text: "Intuitif", score: 1 }, { text: "Sociable", score: 3 }, { text: "Rationnel", score: 5 }] },

            // Abstrait
            { id: 13, text: "Planifier des vacances :", options: [{ text: "Aucun plan", score: 1 }, { text: "Recommandations amis", score: 3 }, { text: "Itinéraire détaillé", score: 5 }] },
            { id: 14, text: "La vérité est basée sur :", options: [{ text: "L'instinct", score: 1 }, { text: "Le consensus", score: 3 }, { text: "Les preuves", score: 5 }] },
            { id: 15, text: "Sujet fascinant :", options: [{ text: "Art/Mysticisme", score: 1 }, { text: "Psychologie/Culture", score: 3 }, { text: "Physique/Économie", score: 5 }] },
            { id: 16, text: "Super-pouvoir :", options: [{ text: "Création", score: 1 }, { text: "Télépathie", score: 3 }, { text: "Super-intelligence", score: 5 }] },

            // Décision
            { id: 17, text: "Décision importante :", options: [{ text: "Suivre mon cœur", score: 1 }, { text: "Consulter des proches", score: 3 }, { text: "Liste Pour/Contre", score: 5 }] },
            { id: 18, text: "La routine :", options: [{ text: "Étouffante", score: 1 }, { text: "Confortable", score: 3 }, { text: "Sécurisante", score: 5 }] },
            { id: 19, text: "Face au chaos :", options: [{ text: "Improviser", score: 1 }, { text: "Collaborer", score: 3 }, { text: "Organiser", score: 5 }] },
            { id: 20, text: "Votre bureau :", options: [{ text: "Désordonné créatif", score: 1 }, { text: "Souvenirs personnels", score: 3 }, { text: "Minimaliste", score: 5 }] },

            // Moteurs
            { id: 21, text: "Ce qui vous épuise :", options: [{ text: "Règles rigides", score: 1 }, { text: "Conflit/Solitude", score: 3 }, { text: "Incompétence", score: 5 }] },
            { id: 22, text: "Qualité d'un leader :", options: [{ text: "Inspiration", score: 1 }, { text: "Empathie", score: 3 }, { text: "Compétence", score: 5 }] },
            { id: 23, text: "L'argent est :", options: [{ text: "Liberté", score: 1 }, { text: "Soin des autres", score: 3 }, { text: "Ressource à gérer", score: 5 }] },
            { id: 24, text: "Votre héritage :", options: [{ text: "Artistique", score: 1 }, { text: "Social", score: 3 }, { text: "Technologique", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Talent : Le Visionnaire Créatif", 
                desc: "<strong>[Cerveau Droit / Intuitif]</strong><br><br><strong>Profil :</strong> Votre cerveau est câblé pour l'imagination et la synthèse. Vous voyez ce qui <em>pourrait</em> être.<br><strong>Génie :</strong> Innovation, Art, Design, Entrepreneuriat.<br><strong>Attention :</strong> Difficulté avec la structure et les détails." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Talent : Le Catalyseur Social", 
                desc: "<strong>[Système Limbique / Relationnel]</strong><br><br><strong>Profil :</strong> Votre super-pouvoir est l'intelligence interpersonnelle. Vous êtes le lien qui unit les systèmes.<br><strong>Génie :</strong> Leadership, Diplomatie, Psychologie, Vente.<br><strong>Attention :</strong> Risque d'épuisement émotionnel." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Talent : Le Stratège Maître", 
                desc: "<strong>[Cerveau Gauche / Analytique]</strong><br><br><strong>Profil :</strong> Vous possédez une intelligence logico-mathématique d'élite. Vous optimisez et structurez le chaos.<br><strong>Génie :</strong> Ingénierie, Finance, Sciences, Stratégie.<br><strong>Attention :</strong> Peut manquer d'empathie face à l'illogisme." 
            }
        ]
    },

    // 6. 西班牙语 (Spanish) - Professional
    "es": {
        title: "Evaluación de Potencial Neurocognitivo",
        desc: "Basado en inteligencias múltiples. 24 preguntas para decodificar tu cerebro y revelar tus talentos ocultos.",
        questions: [
            // Resolución de problemas
            { id: 1, text: "Ante un problema complejo, tu instinto es:", options: [{ text: "Visualizar el resultado", score: 1 }, { text: "Discutir en equipo", score: 3 }, { text: "Desglosar en pasos lógicos", score: 5 }] },
            { id: 2, text: "Para aprender una habilidad difícil:", options: [{ text: "Experimentar", score: 1 }, { text: "Buscar un mentor", score: 3 }, { text: "Leer el manual", score: 5 }] },
            { id: 3, text: "En un debate usas:", options: [{ text: "Metáforas/Emociones", score: 1 }, { text: "Compromiso", score: 3 }, { text: "Hechos irrefutables", score: 5 }] },
            
            // Estado de Flow
            { id: 4, text: "Pierdes la noción del tiempo al:", options: [{ text: "Crear/Imaginar", score: 1 }, { text: "Enseñar/Socializar", score: 3 }, { text: "Calcular/Programar", score: 5 }] },
            { id: 5, text: "Juego favorito:", options: [{ text: "Rol/Exploración", score: 1 }, { text: "Social/Fiesta", score: 3 }, { text: "Estrategia/Puzzle", score: 5 }] },
            { id: 6, text: "Si escribieras un libro:", options: [{ text: "Fantasía/Poesía", score: 1 }, { text: "Biografía", score: 3 }, { text: "Ciencia/Análisis", score: 5 }] },

            // Percepción
            { id: 7, text: "Al entrar en una sala notas:", options: [{ text: "Estética/Vibra", score: 1 }, { text: "Gente/Energía", score: 3 }, { text: "Estructura/Fallos", score: 5 }] },
            { id: 8, text: "Tu memoria funciona mejor con:", options: [{ text: "Imágenes/Colores", score: 1 }, { text: "Caras/Charlas", score: 3 }, { text: "Listas/Números", score: 5 }] },
            { id: 9, text: "Para dar direcciones:", options: [{ text: "En la casa azul", score: 1 }, { text: "Pregunta a alguien", score: 3 }, { text: "200m Norte, luego Este", score: 5 }] },

            // Inteligencia Social
            { id: 10, text: "Tu rol en un grupo:", options: [{ text: "El Visionario", score: 1 }, { text: "El Diplomático", score: 3 }, { text: "El Arquitecto", score: 5 }] },
            { id: 11, text: "Un amigo está triste, tú:", options: [{ text: "Lo distraes", score: 1 }, { text: "Escuchas", score: 3 }, { text: "Analizas el problema", score: 5 }] },
            { id: 12, text: "Te consideras más:", options: [{ text: "Intuitivo", score: 1 }, { text: "Sociable", score: 3 }, { text: "Racional", score: 5 }] },

            // Abstracto
            { id: 13, text: "Planear vacaciones:", options: [{ text: "Sin plan", score: 1 }, { text: "Recomendaciones", score: 3 }, { text: "Itinerario detallado", score: 5 }] },
            { id: 14, text: "La verdad se basa en:", options: [{ text: "Instinto", score: 1 }, { text: "Consenso", score: 3 }, { text: "Evidencia", score: 5 }] },
            { id: 15, text: "Te fascina más:", options: [{ text: "Arte/Mística", score: 1 }, { text: "Psicología/Cultura", score: 3 }, { text: "Física/Sistemas", score: 5 }] },
            { id: 16, text: "Superpoder deseado:", options: [{ text: "Creación", score: 1 }, { text: "Leer mentes", score: 3 }, { text: "Superinteligencia", score: 5 }] },

            // Decisión
            { id: 17, text: "Decisión vital:", options: [{ text: "Sigo mi corazón", score: 1 }, { text: "Consulto a otros", score: 3 }, { text: "Lista Pros/Contras", score: 5 }] },
            { id: 18, text: "La rutina es:", options: [{ text: "Asfixiante", score: 1 }, { text: "Cómoda", score: 3 }, { text: "Segura", score: 5 }] },
            { id: 19, text: "Ante el caos:", options: [{ text: "Improvisar", score: 1 }, { text: "Colaborar", score: 3 }, { text: "Organizar", score: 5 }] },
            { id: 20, text: "Tu escritorio:", options: [{ text: "Desorden creativo", score: 1 }, { text: "Recuerdos personales", score: 3 }, { text: "Minimalista", score: 5 }] },

            // Impulsos
            { id: 21, text: "Lo que más te agota:", options: [{ text: "Reglas rígidas", score: 1 }, { text: "Conflicto/Soledad", score: 3 }, { text: "Incompetencia", score: 5 }] },
            { id: 22, text: "Cualidad de líder:", options: [{ text: "Inspiración", score: 1 }, { text: "Empatía", score: 3 }, { text: "Competencia", score: 5 }] },
            { id: 23, text: "El dinero es:", options: [{ text: "Libertad", score: 1 }, { text: "Cuidado familiar", score: 3 }, { text: "Recurso a gestionar", score: 5 }] },
            { id: 24, text: "Tu legado:", options: [{ text: "Artístico", score: 1 }, { text: "Social", score: 3 }, { text: "Tecnológico", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Talento: El Visionario Creativo", 
                desc: "<strong>[Cerebro Derecho / Intuitivo]</strong><br><br><strong>Perfil:</strong> Tu cerebro está hecho para la imaginación y la síntesis. Ves lo que <em>podría</em> ser.<br><strong>Genio:</strong> Innovación, Arte, Diseño, Emprendimiento.<br><strong>Cuidado:</strong> Dificultad con la estructura y los detalles." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Talento: El Catalizador Social", 
                desc: "<strong>[Sistema Límbico / Relacional]</strong><br><br><strong>Perfil:</strong> Tu superpoder es la inteligencia interpersonal. Eres el pegamento que une los sistemas.<br><strong>Genio:</strong> Liderazgo, Diplomacia, Psicología, Ventas.<br><strong>Cuidado:</strong> Riesgo de agotamiento emocional." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Talento: El Maestro Estratega", 
                desc: "<strong>[Cerebro Izquierdo / Analítico]</strong><br><br><strong>Perfil:</strong> Posees una inteligencia lógico-matemática de élite. Optimizas y estructuras el caos.<br><strong>Genio:</strong> Ingeniería, Finanzas, Ciencia, Estrategia.<br><strong>Cuidado:</strong> Puede faltar empatía ante lo ilógico." 
            }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Professional
    "pt": {
        title: "Avaliação de Potencial Neurocognitivo",
        desc: "Baseado nas inteligências múltiplas. 24 perguntas para decodificar as configurações de fábrica do seu cérebro e revelar seus talentos ocultos.",
        questions: [
            // Resolução de problemas
            { id: 1, text: "Diante de um problema complexo, seu instinto é:", options: [{ text: "Visualizar o resultado final", score: 1 }, { text: "Discutir em equipe", score: 3 }, { text: "Dividir em etapas lógicas", score: 5 }] },
            { id: 2, text: "Para aprender uma habilidade difícil:", options: [{ text: "Experimentar/Sentir", score: 1 }, { text: "Encontrar um mentor", score: 3 }, { text: "Ler o manual", score: 5 }] },
            { id: 3, text: "Em um debate, você usa:", options: [{ text: "Metáforas/Emoções", score: 1 }, { text: "Compromisso", score: 3 }, { text: "Fatos irrefutáveis", score: 5 }] },
            
            // Estado de Flow
            { id: 4, text: "Você perde a noção do tempo ao:", options: [{ text: "Criar/Imaginar", score: 1 }, { text: "Ensinar/Socializar", score: 3 }, { text: "Calcular/Programar", score: 5 }] },
            { id: 5, text: "Jogo favorito:", options: [{ text: "RPG/Exploração", score: 1 }, { text: "Social/Festa", score: 3 }, { text: "Estratégia/Xadrez", score: 5 }] },
            { id: 6, text: "Se escrevesse um livro:", options: [{ text: "Fantasia/Poesia", score: 1 }, { text: "Biografia", score: 3 }, { text: "Ciência/Análise", score: 5 }] },

            // Percepção
            { id: 7, text: "Ao entrar em uma sala, nota:", options: [{ text: "Estética/Vibe", score: 1 }, { text: "Pessoas/Energia", score: 3 }, { text: "Estrutura/Falhas", score: 5 }] },
            { id: 8, text: "Sua memória funciona melhor com:", options: [{ text: "Imagens/Cores", score: 1 }, { text: "Conversas/Rostos", score: 3 }, { text: "Listas/Números", score: 5 }] },
            { id: 9, text: "Para dar direções:", options: [{ text: "Na casa azul", score: 1 }, { text: "Pergunte a alguém", score: 3 }, { text: "200m Norte, depois Leste", score: 5 }] },

            // Inteligência Social
            { id: 10, text: "Seu papel em um grupo:", options: [{ text: "O Visionário", score: 1 }, { text: "O Diplomata", score: 3 }, { text: "O Arquiteto", score: 5 }] },
            { id: 11, text: "Um amigo está triste, você:", options: [{ text: "O distrai", score: 1 }, { text: "Ouve", score: 3 }, { text: "Analisa o problema", score: 5 }] },
            { id: 12, text: "Você se considera mais:", options: [{ text: "Intuitivo", score: 1 }, { text: "Sociável", score: 3 }, { text: "Racional", score: 5 }] },

            // Abstrato
            { id: 13, text: "Planejar férias:", options: [{ text: "Sem plano", score: 1 }, { text: "Recomendações", score: 3 }, { text: "Itinerário detalhado", score: 5 }] },
            { id: 14, text: "A verdade baseia-se em:", options: [{ text: "Instinto", score: 1 }, { text: "Consenso", score: 3 }, { text: "Evidência", score: 5 }] },
            { id: 15, text: "Assunto fascinante:", options: [{ text: "Arte/Mística", score: 1 }, { text: "Psicologia/Cultura", score: 3 }, { text: "Física/Sistemas", score: 5 }] },
            { id: 16, text: "Superpoder:", options: [{ text: "Criação", score: 1 }, { text: "Ler mentes", score: 3 }, { text: "Superinteligência", score: 5 }] },

            // Decisão
            { id: 17, text: "Decisão vital:", options: [{ text: "Sigo meu coração", score: 1 }, { text: "Consulto outros", score: 3 }, { text: "Lista Prós/Contras", score: 5 }] },
            { id: 18, text: "Rotina é:", options: [{ text: "Sufocante", score: 1 }, { text: "Confortável", score: 3 }, { text: "Segura", score: 5 }] },
            { id: 19, text: "Diante do caos:", options: [{ text: "Improvisar", score: 1 }, { text: "Colaborar", score: 3 }, { text: "Organizar", score: 5 }] },
            { id: 20, text: "Sua mesa:", options: [{ text: "Bagunça criativa", score: 1 }, { text: "Lembranças pessoais", score: 3 }, { text: "Minimalista", score: 5 }] },

            // Impulsos
            { id: 21, text: "O que mais te esgota:", options: [{ text: "Regras rígidas", score: 1 }, { text: "Conflito/Solidão", score: 3 }, { text: "Incompetência", score: 5 }] },
            { id: 22, text: "Qualidade de líder:", options: [{ text: "Inspiração", score: 1 }, { text: "Empatia", score: 3 }, { text: "Competência", score: 5 }] },
            { id: 23, text: "Dinheiro é:", options: [{ text: "Liberdade", score: 1 }, { text: "Cuidado familiar", score: 3 }, { text: "Recurso a gerir", score: 5 }] },
            { id: 24, text: "Seu legado:", options: [{ text: "Artístico", score: 1 }, { text: "Social", score: 3 }, { text: "Tecnológico", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Talento: O Visionário Criativo", 
                desc: "<strong>[Cérebro Direito / Intuitivo]</strong><br><br><strong>Perfil:</strong> Seu cérebro é feito para imaginação e síntese. Você vê o que <em>poderia</em> ser.<br><strong>Gênio:</strong> Inovação, Arte, Design, Empreendedorismo.<br><strong>Cuidado:</strong> Dificuldade com estrutura e detalhes." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Talento: O Catalisador Social", 
                desc: "<strong>[Sistema Límbico / Relacional]</strong><br><br><strong>Perfil:</strong> Seu superpoder é a inteligência interpessoal. Você é a cola que une sistemas.<br><strong>Gênio:</strong> Liderança, Diplomacia, Psicologia, Vendas.<br><strong>Cuidado:</strong> Risco de esgotamento emocional." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Talento: O Mestre Estrategista", 
                desc: "<strong>[Cérebro Esquerdo / Analítico]</strong><br><br><strong>Perfil:</strong> Você possui inteligência lógico-matemática de elite. Otimiza e estrutura o caos.<br><strong>Gênio:</strong> Engenharia, Finanças, Ciência, Estratégia.<br><strong>Cuidado:</strong> Pode faltar empatia diante do ilógico." 
            }
        ]
    },

    // 8. 俄语 (Russian) - Professional
    "ru": {
        title: "Оценка нейрокогнитивного потенциала",
        desc: "На основе множественного интеллекта. 24 вопроса для расшифровки талантов мозга.",
        questions: [
            { id: 1, text: "Сложная проблема:", options: [{ text: "Визуализирую итог", score: 1 }, { text: "Обсуждаю", score: 3 }, { text: "Делю на этапы", score: 5 }] },
            { id: 2, text: "Учить новое:", options: [{ text: "Эксперимент", score: 1 }, { text: "Наставник", score: 3 }, { text: "Инструкция", score: 5 }] },
            { id: 3, text: "В споре использую:", options: [{ text: "Метафоры", score: 1 }, { text: "Компромисс", score: 3 }, { text: "Факты", score: 5 }] },
            { id: 4, text: "Теряю счет времени:", options: [{ text: "Творчество", score: 1 }, { text: "Общение", score: 3 }, { text: "Анализ", score: 5 }] },
            { id: 5, text: "Игры:", options: [{ text: "Ролевые", score: 1 }, { text: "Социальные", score: 3 }, { text: "Стратегии", score: 5 }] },
            { id: 6, text: "Книга:", options: [{ text: "Фантастика", score: 1 }, { text: "Биография", score: 3 }, { text: "Наука", score: 5 }] },
            { id: 7, text: "В комнате замечаю:", options: [{ text: "Эстетику", score: 1 }, { text: "Людей", score: 3 }, { text: "Структуру", score: 5 }] },
            { id: 8, text: "Память:", options: [{ text: "Образы", score: 1 }, { text: "Лица", score: 3 }, { text: "Цифры", score: 5 }] },
            { id: 9, text: "Маршрут:", options: [{ text: "У синего дома", score: 1 }, { text: "Спроси", score: 3 }, { text: "200м на Север", score: 5 }] },
            { id: 10, text: "Роль в группе:", options: [{ text: "Визионер", score: 1 }, { text: "Дипломат", score: 3 }, { text: "Архитектор", score: 5 }] },
            { id: 11, text: "Друг грустит:", options: [{ text: "Отвлекаю", score: 1 }, { text: "Слушаю", score: 3 }, { text: "Анализирую", score: 5 }] },
            { id: 12, text: "Я скорее:", options: [{ text: "Интуитивный", score: 1 }, { text: "Общительный", score: 3 }, { text: "Рациональный", score: 5 }] },
            { id: 13, text: "Отпуск:", options: [{ text: "Без плана", score: 1 }, { text: "Советы", score: 3 }, { text: "График", score: 5 }] },
            { id: 14, text: "Истина:", options: [{ text: "Чутье", score: 1 }, { text: "Мнение большинства", score: 3 }, { text: "Доказательства", score: 5 }] },
            { id: 15, text: "Интерес:", options: [{ text: "Искусство", score: 1 }, { text: "Люди", score: 3 }, { text: "Физика", score: 5 }] },
            { id: 16, text: "Суперсила:", options: [{ text: "Создание", score: 1 }, { text: "Чтение мыслей", score: 3 }, { text: "Супер-мозг", score: 5 }] },
            { id: 17, text: "Решение:", options: [{ text: "Сердце", score: 1 }, { text: "Совет", score: 3 }, { text: "Логика", score: 5 }] },
            { id: 18, text: "Рутина:", options: [{ text: "Душит", score: 1 }, { text: "Нормально", score: 3 }, { text: "Безопасно", score: 5 }] },
            { id: 19, text: "Хаос:", options: [{ text: "Импровизация", score: 1 }, { text: "Сотрудничество", score: 3 }, { text: "Порядок", score: 5 }] },
            { id: 20, text: "Стол:", options: [{ text: "Творческий хаос", score: 1 }, { text: "Фотографии", score: 3 }, { text: "Минимализм", score: 5 }] },
            { id: 21, text: "Утомляет:", options: [{ text: "Скука", score: 1 }, { text: "Конфликт", score: 3 }, { text: "Некомпетентность", score: 5 }] },
            { id: 22, text: "Лидер:", options: [{ text: "Вдохновение", score: 1 }, { text: "Эмпатия", score: 3 }, { text: "Компетентность", score: 5 }] },
            { id: 23, text: "Деньги:", options: [{ text: "Свобода", score: 1 }, { text: "Забота", score: 3 }, { text: "Ресурс", score: 5 }] },
            { id: 24, text: "Наследие:", options: [{ text: "Искусство", score: 1 }, { text: "Социум", score: 3 }, { text: "Технологии", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Талант: Творческий визионер", 
                desc: "<strong>[Правое полушарие / Интуиция]</strong><br><br><strong>Профиль:</strong> Воображение и синтез. Вы видите, что <em>могло бы</em> быть.<br><strong>Гений:</strong> Инновации, Искусство, Дизайн, Стартапы.<br><strong>Риск:</strong> Проблемы с деталями." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Талант: Социальный катализатор", 
                desc: "<strong>[Лимбическая система / Отношения]</strong><br><br><strong>Профиль:</strong> Межличностный интеллект. Вы клей, соединяющий системы.<br><strong>Гений:</strong> Лидерство, Дипломатия, Психология, Продажи.<br><strong>Риск:</strong> Эмоциональное выгорание." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Талант: Стратегический мыслитель", 
                desc: "<strong>[Левое полушарие / Аналитика]</strong><br><br><strong>Профиль:</strong> Логико-математический интеллект. Оптимизация и структура.<br><strong>Гений:</strong> Инженерия, Финансы, Наука, Стратегия.<br><strong>Риск:</strong> Недостаток эмпатии." 
            }
        ]
    },

    // 9. 韩语 (Korean) - Professional
    "ko": {
        title: "신경인지 잠재력 평가",
        desc: "다중지능이론 기반. 24개 문항으로 뇌의 '공장 설정'을 해독하여 숨겨진 재능을 찾습니다.",
        questions: [
            { id: 1, text: "복잡한 문제:", options: [{ text: "결과 상상", score: 1 }, { text: "팀 논의", score: 3 }, { text: "논리적 분해", score: 5 }] },
            { id: 2, text: "어려운 기술 학습:", options: [{ text: "실험/감각", score: 1 }, { text: "멘토", score: 3 }, { text: "매뉴얼 분석", score: 5 }] },
            { id: 3, text: "토론 스타일:", options: [{ text: "은유/감정", score: 1 }, { text: "타협", score: 3 }, { text: "팩트/논리", score: 5 }] },
            { id: 4, text: "시간 가는 줄 모를 때:", options: [{ text: "창작/상상", score: 1 }, { text: "교육/상담", score: 3 }, { text: "코딩/계산", score: 5 }] },
            { id: 5, text: "게임 취향:", options: [{ text: "오픈월드", score: 1 }, { text: "파티/협동", score: 3 }, { text: "전략/퍼즐", score: 5 }] },
            { id: 6, text: "책을 쓴다면:", options: [{ text: "판타지", score: 1 }, { text: "자서전", score: 3 }, { text: "과학/분석", score: 5 }] },
            { id: 7, text: "방에 들어갈 때:", options: [{ text: "미학/분위기", score: 1 }, { text: "사람/에너지", score: 3 }, { text: "구조/배치", score: 5 }] },
            { id: 8, text: "기억 방식:", options: [{ text: "이미지", score: 1 }, { text: "대화", score: 3 }, { text: "숫자/목록", score: 5 }] },
            { id: 9, text: "길 안내:", options: [{ text: "파란 집에서", score: 1 }, { text: "물어보세요", score: 3 }, { text: "북쪽 200m", score: 5 }] },
            { id: 10, text: "팀 내 역할:", options: [{ text: "비전가", score: 1 }, { text: "외교관", score: 3 }, { text: "설계자", score: 5 }] },
            { id: 11, text: "친구가 슬플 때:", options: [{ text: "기분 전환", score: 1 }, { text: "경청", score: 3 }, { text: "원인 분석", score: 5 }] },
            { id: 12, text: "나는:", options: [{ text: "직관적", score: 1 }, { text: "사교적", score: 3 }, { text: "이성적", score: 5 }] },
            { id: 13, text: "여행 계획:", options: [{ text: "무계획", score: 1 }, { text: "추천받기", score: 3 }, { text: "상세 일정", score: 5 }] },
            { id: 14, text: "진실:", options: [{ text: "직감", score: 1 }, { text: "합의", score: 3 }, { text: "증거", score: 5 }] },
            { id: 15, text: "흥미 분야:", options: [{ text: "예술/철학", score: 1 }, { text: "심리/문화", score: 3 }, { text: "물리/경제", score: 5 }] },
            { id: 16, text: "초능력:", options: [{ text: "창조", score: 1 }, { text: "독심술", score: 3 }, { text: "초지능", score: 5 }] },
            { id: 17, text: "중대 결정:", options: [{ text: "마음", score: 1 }, { text: "조언", score: 3 }, { text: "분석", score: 5 }] },
            { id: 18, text: "반복 업무:", options: [{ text: "질식", score: 1 }, { text: "편안함", score: 3 }, { text: "안전", score: 5 }] },
            { id: 19, text: "혼돈 대처:", options: [{ text: "즉흥", score: 1 }, { text: "협력", score: 3 }, { text: "정리", score: 5 }] },
            { id: 20, text: "책상:", options: [{ text: "창의적 혼란", score: 1 }, { text: "추억", score: 3 }, { text: "깔끔함", score: 5 }] },
            { id: 21, text: "에너지 고갈:", options: [{ text: "규칙", score: 1 }, { text: "고립", score: 3 }, { text: "무능", score: 5 }] },
            { id: 22, text: "리더 자질:", options: [{ text: "영감", score: 1 }, { text: "공감", score: 3 }, { text: "능력", score: 5 }] },
            { id: 23, text: "돈:", options: [{ text: "자유", score: 1 }, { text: "가족", score: 3 }, { text: "자원", score: 5 }] },
            { id: 24, text: "유산:", options: [{ text: "예술", score: 1 }, { text: "사회", score: 3 }, { text: "기술", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "재능: 창의적 비전가", 
                desc: "<strong>[우뇌 / 직관형]</strong><br><br><strong>프로필:</strong> 상상력과 종합 능력이 뛰어납니다. 가능성을 봅니다.<br><strong>천재성:</strong> 혁신, 예술, 디자인, 창업.<br><strong>주의:</strong> 세부 사항과 구조화에 약함." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "재능: 사회적 촉매자", 
                desc: "<strong>[변연계 / 관계형]</strong><br><br><strong>프로필:</strong> 대인 관계 지능이 탁월합니다. 조직의 접착제입니다.<br><strong>천재성:</strong> 리더십, 외교, 심리, 영업.<br><strong>주의:</strong> 감정 소모 위험." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "재능: 전략적 마스터마인드", 
                desc: "<strong>[좌뇌 / 분석형]</strong><br><br><strong>프로필:</strong> 논리-수학적 지능이 뛰어납니다. 혼돈을 최적화합니다.<br><strong>천재성:</strong> 공학, 금융, 과학, 전략.<br><strong>주의:</strong> 공감 능력 부족 가능성." 
            }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Professional
    "ar": {
        title: "تقييم الإمكانات العصبية المعرفية",
        desc: "بناءً على الذكاءات المتعددة. 24 سؤالاً لفك شفرة دماغك واكتشاف مواهبك الخفية.",
        questions: [
            { id: 1, text: "مشكلة معقدة:", options: [{ text: "تخيل النتيجة", score: 1 }, { text: "نقاش جماعي", score: 3 }, { text: "تحليل منطقي", score: 5 }] },
            { id: 2, text: "تعلم مهارة:", options: [{ text: "تجربة", score: 1 }, { text: "موجه", score: 3 }, { text: "دليل", score: 5 }] },
            { id: 3, text: "في النقاش:", options: [{ text: "عاطفة", score: 1 }, { text: "حل وسط", score: 3 }, { text: "حقائق", score: 5 }] },
            { id: 4, text: "تنسى الوقت في:", options: [{ text: "الإبداع", score: 1 }, { text: "التواصل", score: 3 }, { text: "الحساب", score: 5 }] },
            { id: 5, text: "لعبة:", options: [{ text: "عالم مفتوح", score: 1 }, { text: "جماعية", score: 3 }, { text: "استراتيجية", score: 5 }] },
            { id: 6, text: "كتاب:", options: [{ text: "خيال", score: 1 }, { text: "سيرة", score: 3 }, { text: "علمي", score: 5 }] },
            { id: 7, text: "في الغرفة:", options: [{ text: "الجماليات", score: 1 }, { text: "الناس", score: 3 }, { text: "الهيكل", score: 5 }] },
            { id: 8, text: "الذاكرة:", options: [{ text: "صور", score: 1 }, { text: "وجوه", score: 3 }, { text: "أرقام", score: 5 }] },
            { id: 9, text: "الاتجاهات:", options: [{ text: "عند البيت الأزرق", score: 1 }, { text: "اسأل شخصاً", score: 3 }, { text: "شمالاً ثم شرقاً", score: 5 }] },
            { id: 10, text: "دورك:", options: [{ text: "صاحب رؤية", score: 1 }, { text: "دبلوماسي", score: 3 }, { text: "مهندس", score: 5 }] },
            { id: 11, text: "صديق حزين:", options: [{ text: "تشتيت", score: 1 }, { text: "استماع", score: 3 }, { text: "تحليل", score: 5 }] },
            { id: 12, text: "أنت:", options: [{ text: "حدسي", score: 1 }, { text: "اجتماعي", score: 3 }, { text: "عقلاني", score: 5 }] },
            { id: 13, text: "سفر:", options: [{ text: "بدون خطة", score: 1 }, { text: "توصيات", score: 3 }, { text: "جدول دقيق", score: 5 }] },
            { id: 14, text: "الحقيقة:", options: [{ text: "حدس", score: 1 }, { text: "إجماع", score: 3 }, { text: "دليل", score: 5 }] },
            { id: 15, text: "اهتمام:", options: [{ text: "فنون", score: 1 }, { text: "ثقافة", score: 3 }, { text: "فيزياء", score: 5 }] },
            { id: 16, text: "قوة خارقة:", options: [{ text: "خلق", score: 1 }, { text: "قراءة أفكار", score: 3 }, { text: "ذكاء خارق", score: 5 }] },
            { id: 17, text: "قرار:", options: [{ text: "قلب", score: 1 }, { text: "استشارة", score: 3 }, { text: "تحليل", score: 5 }] },
            { id: 18, text: "روتين:", options: [{ text: "خانق", score: 1 }, { text: "مريح", score: 3 }, { text: "آمن", score: 5 }] },
            { id: 19, text: "فوضى:", options: [{ text: "ارتجال", score: 1 }, { text: "تعاون", score: 3 }, { text: "نظام", score: 5 }] },
            { id: 20, text: "مكتب:", options: [{ text: "فوضى مبدعة", score: 1 }, { text: "ذكريات", score: 3 }, { text: "منظم", score: 5 }] },
            { id: 21, text: "يستنزفك:", options: [{ text: "القيود", score: 1 }, { text: "العزلة", score: 3 }, { text: "عدم الكفاءة", score: 5 }] },
            { id: 22, text: "القائد:", options: [{ text: "إلهام", score: 1 }, { text: "تعاطف", score: 3 }, { text: "كفاءة", score: 5 }] },
            { id: 23, text: "المال:", options: [{ text: "حرية", score: 1 }, { text: "رعاية", score: 3 }, { text: "مورد", score: 5 }] },
            { id: 24, text: "الإرث:", options: [{ text: "فني", score: 1 }, { text: "اجتماعي", score: 3 }, { text: "تقني", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "الموهبة: صاحب الرؤية المبدع", 
                desc: "<strong>[الدماغ الأيمن / حدسي]</strong><br><br><strong>الملف:</strong> خيال وتركيب. ترى ما <em>يمكن</em> أن يكون.<br><strong>العبقرية:</strong> ابتكار، فن، تصميم، ريادة أعمال.<br><strong>تحذير:</strong> صعوبة في التفاصيل." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "الموهبة: المحفز الاجتماعي", 
                desc: "<strong>[الجهاز الحوفي / علاقات]</strong><br><br><strong>الملف:</strong> ذكاء اجتماعي. أنت الرابط بين الأنظمة.<br><strong>العبقرية:</strong> قيادة، دبلوماسية، علم نفس، مبيعات.<br><strong>تحذير:</strong> إرهاق عاطفي." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "الموهبة: العقل المدبر الاستراتيجي", 
                desc: "<strong>[الدماغ الأيسر / تحليلي]</strong><br><br><strong>الملف:</strong> ذكاء منطقي رياضي. تحلل وتنظم الفوضى.<br><strong>العبقرية:</strong> هندسة، تمويل، علوم، استراتيجية.<br><strong>تحذير:</strong> نقص التعاطف." 
            }
        ]
    },

    // 11. 越南语 (Vietnamese) - Professional
    "vi": {
        title: "Đánh giá Tiềm năng Thần kinh Nhận thức",
        desc: "Dựa trên đa trí tuệ. 24 câu hỏi giải mã bộ não và tài năng ẩn giấu của bạn.",
        questions: [
            { id: 1, text: "Vấn đề phức tạp:", options: [{ text: "Hình dung kết quả", score: 1 }, { text: "Thảo luận nhóm", score: 3 }, { text: "Chia nhỏ logic", score: 5 }] },
            { id: 2, text: "Học kỹ năng khó:", options: [{ text: "Thử nghiệm", score: 1 }, { text: "Tìm thầy", score: 3 }, { text: "Đọc tài liệu", score: 5 }] },
            { id: 3, text: "Tranh luận:", options: [{ text: "Ẩn dụ/Cảm xúc", score: 1 }, { text: "Thỏa hiệp", score: 3 }, { text: "Sự thật/Logic", score: 5 }] },
            { id: 4, text: "Quên thời gian khi:", options: [{ text: "Sáng tạo", score: 1 }, { text: "Giao tiếp", score: 3 }, { text: "Tính toán", score: 5 }] },
            { id: 5, text: "Trò chơi:", options: [{ text: "Nhập vai", score: 1 }, { text: "Xã hội", score: 3 }, { text: "Chiến thuật", score: 5 }] },
            { id: 6, text: "Viết sách:", options: [{ text: "Giả tưởng", score: 1 }, { text: "Tiểu sử", score: 3 }, { text: "Khoa học", score: 5 }] },
            { id: 7, text: "Vào phòng mới:", options: [{ text: "Thẩm mỹ", score: 1 }, { text: "Con người", score: 3 }, { text: "Cấu trúc", score: 5 }] },
            { id: 8, text: "Trí nhớ:", options: [{ text: "Hình ảnh", score: 1 }, { text: "Khuôn mặt", score: 3 }, { text: "Số liệu", score: 5 }] },
            { id: 9, text: "Chỉ đường:", options: [{ text: "Nhà xanh", score: 1 }, { text: "Hỏi người", score: 3 }, { text: "200m Bắc", score: 5 }] },
            { id: 10, text: "Vai trò nhóm:", options: [{ text: "Tầm nhìn", score: 1 }, { text: "Ngoại giao", score: 3 }, { text: "Kiến trúc sư", score: 5 }] },
            { id: 11, text: "Bạn buồn:", options: [{ text: "Làm xao nhãng", score: 1 }, { text: "Lắng nghe", score: 3 }, { text: "Phân tích", score: 5 }] },
            { id: 12, text: "Bạn là người:", options: [{ text: "Trực giác", score: 1 }, { text: "Xã hội", score: 3 }, { text: "Lý trí", score: 5 }] },
            { id: 13, text: "Du lịch:", options: [{ text: "Ngẫu hứng", score: 1 }, { text: "Hỏi bạn", score: 3 }, { text: "Chi tiết", score: 5 }] },
            { id: 14, text: "Sự thật:", options: [{ text: "Trực giác", score: 1 }, { text: "Đồng thuận", score: 3 }, { text: "Bằng chứng", score: 5 }] },
            { id: 15, text: "Hứng thú:", options: [{ text: "Nghệ thuật", score: 1 }, { text: "Văn hóa", score: 3 }, { text: "Vật lý", score: 5 }] },
            { id: 16, text: "Siêu năng lực:", options: [{ text: "Sáng tạo", score: 1 }, { text: "Đọc suy nghĩ", score: 3 }, { text: "Siêu trí tuệ", score: 5 }] },
            { id: 17, text: "Quyết định:", options: [{ text: "Trái tim", score: 1 }, { text: "Tư vấn", score: 3 }, { text: "Phân tích", score: 5 }] },
            { id: 18, text: "Thói quen:", options: [{ text: "Ngột ngạt", score: 1 }, { text: "Thoải mái", score: 3 }, { text: "An toàn", score: 5 }] },
            { id: 19, text: "Hỗn loạn:", options: [{ text: "Tùy biến", score: 1 }, { text: "Hợp tác", score: 3 }, { text: "Sắp xếp", score: 5 }] },
            { id: 20, text: "Bàn làm việc:", options: [{ text: "Bừa bộn sáng tạo", score: 1 }, { text: "Kỷ niệm", score: 3 }, { text: "Gọn gàng", score: 5 }] },
            { id: 21, text: "Mất năng lượng:", options: [{ text: "Quy tắc", score: 1 }, { text: "Cô đơn", score: 3 }, { text: "Kém cỏi", score: 5 }] },
            { id: 22, text: "Lãnh đạo:", options: [{ text: "Cảm hứng", score: 1 }, { text: "Thấu cảm", score: 3 }, { text: "Năng lực", score: 5 }] },
            { id: 23, text: "Tiền:", options: [{ text: "Tự do", score: 1 }, { text: "Chăm sóc", score: 3 }, { text: "Tài nguyên", score: 5 }] },
            { id: 24, text: "Di sản:", options: [{ text: "Nghệ thuật", score: 1 }, { text: "Xã hội", score: 3 }, { text: "Công nghệ", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Tài năng: Người Tầm Nhìn Sáng Tạo", 
                desc: "<strong>[Não Phải / Trực giác]</strong><br><br><strong>Hồ sơ:</strong> Tưởng tượng và tổng hợp. Thấy điều <em>có thể</em> xảy ra.<br><strong>Thiên tài:</strong> Đổi mới, Nghệ thuật, Thiết kế, Khởi nghiệp.<br><strong>Lưu ý:</strong> Khó khăn với chi tiết." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Tài năng: Chất Xúc Tác Xã Hội", 
                desc: "<strong>[Hệ Viền / Quan hệ]</strong><br><br><strong>Hồ sơ:</strong> Trí tuệ tương tác. Chất keo gắn kết hệ thống.<br><strong>Thiên tài:</strong> Lãnh đạo, Ngoại giao, Tâm lý, Bán hàng.<br><strong>Lưu ý:</strong> Kiệt sức cảm xúc." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Tài năng: Bậc Thầy Chiến Lược", 
                desc: "<strong>[Não Trái / Phân tích]</strong><br><br><strong>Hồ sơ:</strong> Trí tuệ logic-toán học. Tối ưu hóa và cấu trúc.<br><strong>Thiên tài:</strong> Kỹ thuật, Tài chính, Khoa học, Chiến lược.<br><strong>Lưu ý:</strong> Thiếu thấu cảm." 
            }
        ]
    },

    // 12. 泰语 (Thai) - Professional
    "th": {
        title: "แบบประเมินศักยภาพทางระบบประสาทและพุทธิปัญญา",
        desc: "อิงตามพหุปัญญา 24 คำถามเพื่อถอดรหัสสมองและพรสวรรค์ที่ซ่อนอยู่",
        questions: [
            { id: 1, text: "ปัญหาซับซ้อน:", options: [{ text: "จินตนาการผลลัพธ์", score: 1 }, { text: "ระดมสมอง", score: 3 }, { text: "แยกแยะขั้นตอน", score: 5 }] },
            { id: 2, text: "เรียนทักษะยาก:", options: [{ text: "ลองผิดลองถูก", score: 1 }, { text: "หาครู", score: 3 }, { text: "อ่านคู่มือ", score: 5 }] },
            { id: 3, text: "การโต้เถียง:", options: [{ text: "อุปมา/อารมณ์", score: 1 }, { text: "ประนีประนอม", score: 3 }, { text: "ข้อเท็จจริง", score: 5 }] },
            { id: 4, text: "ลืมเวลาเมื่อ:", options: [{ text: "สร้างสรรค์", score: 1 }, { text: "เข้าสังคม", score: 3 }, { text: "คำนวณ", score: 5 }] },
            { id: 5, text: "เกม:", options: [{ text: "สวมบทบาท", score: 1 }, { text: "ปาร์ตี้", score: 3 }, { text: "กลยุทธ์", score: 5 }] },
            { id: 6, text: "เขียนหนังสือ:", options: [{ text: "แฟนตาซี", score: 1 }, { text: "ชีวประวัติ", score: 3 }, { text: "วิทยาศาสตร์", score: 5 }] },
            { id: 7, text: "ในห้อง:", options: [{ text: "ความงาม", score: 1 }, { text: "ผู้คน", score: 3 }, { text: "โครงสร้าง", score: 5 }] },
            { id: 8, text: "ความจำ:", options: [{ text: "ภาพ", score: 1 }, { text: "หน้าคน", score: 3 }, { text: "ตัวเลข", score: 5 }] },
            { id: 9, text: "บอกทาง:", options: [{ text: "บ้านสีฟ้า", score: 1 }, { text: "ถามคน", score: 3 }, { text: "ทิศเหนือ", score: 5 }] },
            { id: 10, text: "บทบาท:", options: [{ text: "นักคิด", score: 1 }, { text: "ทูต", score: 3 }, { text: "สถาปนิก", score: 5 }] },
            { id: 11, text: "เพื่อนเศร้า:", options: [{ text: "พาเที่ยว", score: 1 }, { text: "รับฟัง", score: 3 }, { text: "วิเคราะห์", score: 5 }] },
            { id: 12, text: "ตัวคุณ:", options: [{ text: "สัญชาตญาณ", score: 1 }, { text: "สังคม", score: 3 }, { text: "เหตุผล", score: 5 }] },
            { id: 13, text: "เที่ยว:", options: [{ text: "ไม่มีแผน", score: 1 }, { text: "ถามเพื่อน", score: 3 }, { text: "ละเอียด", score: 5 }] },
            { id: 14, text: "ความจริง:", options: [{ text: "ความรู้สึก", score: 1 }, { text: "มติมหาชน", score: 3 }, { text: "หลักฐาน", score: 5 }] },
            { id: 15, text: "สนใจ:", options: [{ text: "ศิลปะ", score: 1 }, { text: "วัฒนธรรม", score: 3 }, { text: "ฟิสิกส์", score: 5 }] },
            { id: 16, text: "พลังพิเศษ:", options: [{ text: "สร้างสรรค์", score: 1 }, { text: "อ่านใจ", score: 3 }, { text: "อัจฉริยะ", score: 5 }] },
            { id: 17, text: "ตัดสินใจ:", options: [{ text: "หัวใจ", score: 1 }, { text: "ปรึกษา", score: 3 }, { text: "วิเคราะห์", score: 5 }] },
            { id: 18, text: "กิจวัตร:", options: [{ text: "น่าเบื่อ", score: 1 }, { text: "สบายใจ", score: 3 }, { text: "ปลอดภัย", score: 5 }] },
            { id: 19, text: "ความวุ่นวาย:", options: [{ text: "ด้นสด", score: 1 }, { text: "ร่วมมือ", score: 3 }, { text: "จัดระเบียบ", score: 5 }] },
            { id: 20, text: "โต๊ะทำงาน:", options: [{ text: "รกแบบอาร์ต", score: 1 }, { text: "ของที่ระลึก", score: 3 }, { text: "มินิมอล", score: 5 }] },
            { id: 21, text: "หมดแรง:", options: [{ text: "กฎเกณฑ์", score: 1 }, { text: "ความโดดเดี่ยว", score: 3 }, { text: "ไร้ประสิทธิภาพ", score: 5 }] },
            { id: 22, text: "ผู้นำ:", options: [{ text: "แรงบันดาลใจ", score: 1 }, { text: "ความเห็นใจ", score: 3 }, { text: "ความสามารถ", score: 5 }] },
            { id: 23, text: "เงิน:", options: [{ text: "อิสระ", score: 1 }, { text: "ดูแล", score: 3 }, { text: "ทรัพยากร", score: 5 }] },
            { id: 24, text: "มรดก:", options: [{ text: "ศิลปะ", score: 1 }, { text: "สังคม", score: 3 }, { text: "เทคโนโลยี", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "พรสวรรค์: ผู้มีวิสัยทัศน์สร้างสรรค์", 
                desc: "<strong>[สมองซีกขวา / สัญชาตญาณ]</strong><br><br><strong>โปรไฟล์:</strong> จินตนาการและสังเคราะห์ เห็นความเป็นไปได้<br><strong>อัจฉริยะ:</strong> นวัตกรรม, ศิลปะ, ออกแบบ, ธุรกิจ<br><strong>ระวัง:</strong> รายละเอียด" 
            },
            { 
                min: 49, 
                max: 88, 
                title: "พรสวรรค์: ตัวเร่งปฏิกิริยาทางสังคม", 
                desc: "<strong>[ลิมบิก / ความสัมพันธ์]</strong><br><br><strong>โปรไฟล์:</strong> ฉลาดเรื่องคน เป็นกาวใจ<br><strong>อัจฉริยะ:</strong> ผู้นำ, การทูต, จิตวิทยา, การขาย<br><strong>ระวัง:</strong> หมดไฟทางอารมณ์" 
            },
            { 
                min: 89, 
                max: 120, 
                title: "พรสวรรค์: จอมวางแผนเชิงกลยุทธ์", 
                desc: "<strong>[สมองซีกซ้าย / วิเคราะห์]</strong><br><br><strong>โปรไฟล์:</strong> ตรรกะและคณิตศาสตร์ จัดระเบียบ<br><strong>อัจฉริยะ:</strong> วิศวะ, การเงิน, วิทย์, กลยุทธ์<br><strong>ระวัง:</strong> ขาดความเห็นใจ" 
            }
        ]
    },

    // 13. 印尼语 (Indonesian) - Professional
    "id": {
        title: "Penilaian Potensi Neuro-Kognitif",
        desc: "Berdasarkan kecerdasan majemuk. 24 pertanyaan untuk memecahkan kode otak dan bakat tersembunyi Anda.",
        questions: [
            { id: 1, text: "Masalah rumit:", options: [{ text: "Visualisasi hasil", score: 1 }, { text: "Diskusi tim", score: 3 }, { text: "Logika bertahap", score: 5 }] },
            { id: 2, text: "Belajar skill:", options: [{ text: "Eksperimen", score: 1 }, { text: "Mentor", score: 3 }, { text: "Manual", score: 5 }] },
            { id: 3, text: "Debat:", options: [{ text: "Metafora", score: 1 }, { text: "Kompromi", score: 3 }, { text: "Fakta", score: 5 }] },
            { id: 4, text: "Lupa waktu:", options: [{ text: "Berkreasi", score: 1 }, { text: "Bersosialisasi", score: 3 }, { text: "Menghitung", score: 5 }] },
            { id: 5, text: "Game:", options: [{ text: "Roleplay", score: 1 }, { text: "Pesta", score: 3 }, { text: "Strategi", score: 5 }] },
            { id: 6, text: "Buku:", options: [{ text: "Fantasi", score: 1 }, { text: "Biografi", score: 3 }, { text: "Sains", score: 5 }] },
            { id: 7, text: "Di ruangan:", options: [{ text: "Estetika", score: 1 }, { text: "Orang", score: 3 }, { text: "Struktur", score: 5 }] },
            { id: 8, text: "Memori:", options: [{ text: "Gambar", score: 1 }, { text: "Wajah", score: 3 }, { text: "Angka", score: 5 }] },
            { id: 9, text: "Arah:", options: [{ text: "Rumah biru", score: 1 }, { text: "Tanya orang", score: 3 }, { text: "Utara 200m", score: 5 }] },
            { id: 10, text: "Peran tim:", options: [{ text: "Visioner", score: 1 }, { text: "Diplomat", score: 3 }, { text: "Arsitek", score: 5 }] },
            { id: 11, text: "Teman sedih:", options: [{ text: "Hibur", score: 1 }, { text: "Dengar", score: 3 }, { text: "Analisis", score: 5 }] },
            { id: 12, text: "Anda:", options: [{ text: "Intuitif", score: 1 }, { text: "Sosial", score: 3 }, { text: "Rasional", score: 5 }] },
            { id: 13, text: "Liburan:", options: [{ text: "Spontan", score: 1 }, { text: "Rekomendasi", score: 3 }, { text: "Detail", score: 5 }] },
            { id: 14, text: "Kebenaran:", options: [{ text: "Insting", score: 1 }, { text: "Konsensus", score: 3 }, { text: "Bukti", score: 5 }] },
            { id: 15, text: "Minat:", options: [{ text: "Seni", score: 1 }, { text: "Budaya", score: 3 }, { text: "Fisika", score: 5 }] },
            { id: 16, text: "Kekuatan super:", options: [{ text: "Kreasi", score: 1 }, { text: "Baca pikiran", score: 3 }, { text: "Kecerdasan super", score: 5 }] },
            { id: 17, text: "Keputusan:", options: [{ text: "Hati", score: 1 }, { text: "Saran", score: 3 }, { text: "Analisis", score: 5 }] },
            { id: 18, text: "Rutinitas:", options: [{ text: "Mencekik", score: 1 }, { text: "Nyaman", score: 3 }, { text: "Aman", score: 5 }] },
            { id: 19, text: "Kekacauan:", options: [{ text: "Improvisasi", score: 1 }, { text: "Kolaborasi", score: 3 }, { text: "Atur", score: 5 }] },
            { id: 20, text: "Meja:", options: [{ text: "Berantakan kreatif", score: 1 }, { text: "Memori", score: 3 }, { text: "Rapi", score: 5 }] },
            { id: 21, text: "Lelah karena:", options: [{ text: "Aturan", score: 1 }, { text: "Konflik", score: 3 }, { text: "Ketidakmampuan", score: 5 }] },
            { id: 22, text: "Pemimpin:", options: [{ text: "Inspirasi", score: 1 }, { text: "Empati", score: 3 }, { text: "Kompetensi", score: 5 }] },
            { id: 23, text: "Uang:", options: [{ text: "Kebebasan", score: 1 }, { text: "Kepedulian", score: 3 }, { text: "Sumber daya", score: 5 }] },
            { id: 24, text: "Warisan:", options: [{ text: "Seni", score: 1 }, { text: "Sosial", score: 3 }, { text: "Teknologi", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 48, 
                title: "Bakat: Visioner Kreatif", 
                desc: "<strong>[Otak Kanan / Intuitif]</strong><br><br><strong>Profil:</strong> Imajinasi dan sintesis. Melihat apa yang <em>bisa</em> terjadi.<br><strong>Genius:</strong> Inovasi, Seni, Desain, Bisnis.<br><strong>Awas:</strong> Detail dan struktur." 
            },
            { 
                min: 49, 
                max: 88, 
                title: "Bakat: Katalisator Sosial", 
                desc: "<strong>[Limbik / Relasional]</strong><br><br><strong>Profil:</strong> Kecerdasan interpersonal. Perekat sistem.<br><strong>Genius:</strong> Kepemimpinan, Diplomasi, Psikologi, Penjualan.<br><strong>Awas:</strong> Kelelahan emosional." 
            },
            { 
                min: 89, 
                max: 120, 
                title: "Bakat: Dalang Strategis", 
                desc: "<strong>[Otak Kiri / Analitis]</strong><br><br><strong>Profil:</strong> Logika-matematika elit. Mengoptimalkan kekacauan.<br><strong>Genius:</strong> Teknik, Keuangan, Sains, Strategi.<br><strong>Awas:</strong> Kurang empati." 
            }
        ]
    }
};