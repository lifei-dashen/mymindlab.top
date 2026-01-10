// data/test10.js
// 七宗罪灵魂原罪测试 (The Seven Deadly Sins Clinical Assessment)
// 基于心理动力学、客体关系理论及荣格阴影原型
// 结构：21题 (3题/罪) | 结果：7种独立原罪原型

const quizDataMulti = {
    // 1. 英语 (English) - Clinical Standard
    "en": {
        title: "The Seven Deadly Sins: Clinical Soul Analysis",
        desc: "A rigorous 21-question assessment based on psychodynamics. We bypass moral judgment to identify the primal drive, defense mechanism, and specific 'Shadow Archetype' that dominates your subconscious.",
        questions: [
            // --- Group 1: Sloth (Avoidance & Dissociation) ---
            { id: 1, text: "When life becomes overwhelming, your default coping mechanism is:", options: [{ text: "To sleep, zone out, or procrastinate excessively", score: 1 }, { text: "To distract myself with mild pleasures", score: 3 }, { text: "To force a solution immediately", score: 5 }] },
            { id: 2, text: "Your relationship with your own potential:", options: [{ text: "I often feel I am wasting my life but can't move", score: 1 }, { text: "I am progressing slowly", score: 3 }, { text: "I am maximizing it aggressively", score: 5 }] },
            { id: 3, text: "Emotional pain usually makes you feel:", options: [{ text: "Numb and detached (Apathy)", score: 1 }, { text: "Sad or anxious", score: 3 }, { text: "Angry and energized", score: 5 }] },

            // --- Group 2: Envy (Comparison & Melancholy) ---
            { id: 4, text: "When you see someone with what you want:", options: [{ text: "I feel a deep, internal ache of unfairness", score: 2 }, { text: "I wonder how they got it", score: 3 }, { text: "I plan how to surpass them", score: 5 }] },
            { id: 5, text: "You often feel that:", options: [{ text: "Everyone else has the 'secret to happiness' but me", score: 2 }, { text: "Life is generally fair", score: 3 }, { text: "I create my own luck", score: 5 }] },
            { id: 6, text: "Your self-worth is primarily based on:", options: [{ text: "How I compare to others", score: 2 }, { text: "My personal growth", score: 3 }, { text: "My dominance and achievements", score: 5 }] },

            // --- Group 3: Gluttony (Filling the Void) ---
            { id: 7, text: "When you feel empty inside, you reach for:", options: [{ text: "Food, shopping, or binge-watching", score: 3 }, { text: "A conversation with a friend", score: 2 }, { text: "Work or exercise", score: 5 }] },
            { id: 8, text: "Your philosophy on pleasure:", options: [{ text: "More is always better; I hate restriction", score: 3 }, { text: "Moderation is key", score: 2 }, { text: "Pleasure is a distraction", score: 1 }] },
            { id: 9, text: "You struggle with:", options: [{ text: "Impulse control and over-consumption", score: 3 }, { text: "Finding motivation", score: 1 }, { text: "Controlling my temper", score: 5 }] },

            // --- Group 4: Greed (Hoarding & Security) ---
            { id: 10, text: "Your resources (money, time, energy) are:", options: [{ text: "To be guarded fiercely; I fear running out", score: 4 }, { text: "To be shared cautiously", score: 3 }, { text: "To be used to gain power", score: 5 }] },
            { id: 11, text: "Intimacy makes you feel:", options: [{ text: "Drained; people take too much from me", score: 4 }, { text: "Connected and safe", score: 2 }, { text: "Powerful", score: 5 }] },
            { id: 12, text: "Your deepest anxiety is:", options: [{ text: "Being left with nothing (Deprivation)", score: 4 }, { text: "Being ignored", score: 2 }, { text: "Being controlled", score: 5 }] },

            // --- Group 5: Lust (Intensity & Sensation) ---
            { id: 13, text: "You engage with the world through:", options: [{ text: "Intense sensation and conquest", score: 5 }, { text: "Observation and analysis", score: 3 }, { text: "Withdrawal and safety", score: 1 }] },
            { id: 14, text: "In relationships, you need:", options: [{ text: "Raw intensity and passion", score: 5 }, { text: "Stability and trust", score: 3 }, { text: "Space and distance", score: 1 }] },
            { id: 15, text: "Boredom is:", options: [{ text: "Unbearable; I need stimulation now", score: 5 }, { text: "A time to think", score: 3 }, { text: "My natural state", score: 1 }] },

            // --- Group 6: Wrath (Reaction & Justice) ---
            { id: 16, text: "When you witness injustice, you:", options: [{ text: "Explode with righteous fury", score: 6 }, { text: "Feel sad but helpless", score: 2 }, { text: "Calculate a revenge plan", score: 4 }] },
            { id: 17, text: "People describe you as:", options: [{ text: "Intimidating or intense", score: 6 }, { text: "Reserved or quiet", score: 2 }, { text: "Fun or chaotic", score: 4 }] },
            { id: 18, text: "You use anger to:", options: [{ text: "Establish boundaries and control", score: 6 }, { text: "Protect my feelings", score: 3 }, { text: "I rarely get angry", score: 1 }] },

            // --- Group 7: Pride (Ego & Superiority) ---
            { id: 19, text: "When you make a mistake:", options: [{ text: "I deny it; I am rarely wrong", score: 7 }, { text: "I feel ashamed", score: 2 }, { text: "I fix it quietly", score: 4 }] },
            { id: 20, text: "Help is something:", options: [{ text: "I give, but never need", score: 7 }, { text: "I appreciate receiving", score: 3 }, { text: "That costs too much", score: 4 }] },
            { id: 21, text: "Deep down, you believe:", options: [{ text: "I am special and superior to others", score: 7 }, { text: "I am flawed", score: 2 }, { text: "I am invisible", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 35, 
                title: "Dominant Sin: SLOTH (Acedia)", 
                desc: "<strong>[Archetype: The Dissociated Soul]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>Your sin is not mere laziness; it is a spiritual apathy known as 'Acedia'. You have disconnected from your life force to avoid pain. Your defense mechanism is <strong>Narcotization</strong>—numbing yourself to reality. You refuse to fully show up for your own life.<br><br>" +
                      "<strong>⚖️ The Antidote:</strong> <strong>Right Action.</strong> Do one thing today that makes you uncomfortable. Reconnect with your body." 
            },
            { 
                min: 36, 
                max: 55, 
                title: "Dominant Sin: ENVY", 
                desc: "<strong>[Archetype: The Tragic Victim]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>You suffer from a chronic sense of deficiency. You believe everyone else possesses a happiness that you lack. Your defense mechanism is <strong>Introjection</strong>—swallowing negative feelings and turning them against yourself. You romanticize suffering.<br><br>" +
                      "<strong>⚖️ The Antidote:</strong> <strong>Equanimity.</strong> Stop looking at what is missing and look at what is present. Your worth is inherent, not comparative." 
            },
            { 
                min: 56, 
                max: 75, 
                title: "Dominant Sin: GLUTTONY", 
                desc: "<strong>[Archetype: The Bottomless Void]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>You are driven by a fear of emptiness. You try to fill this psychological void with external consumption—food, experiences, distractions, or noise. Your defense mechanism is <strong>Rationalization</strong>—framing your impulsiveness as 'freedom'.<br><br>" +
                      "<strong>⚖️ The Antidote:</strong> <strong>Sobriety.</strong> Learn to sit in silence. The void cannot be filled from the outside; it must be healed from the inside." 
            },
            { 
                min: 76, 
                max: 90, 
                title: "Dominant Sin: GREED (Avarice)", 
                desc: "<strong>[Archetype: The Hoarder]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>Your core fear is depletion. You withhold your emotions, time, and resources because you feel the world will drain you dry. Your defense mechanism is <strong>Isolation</strong>—you detach emotionally to stay safe.<br><br>" +
                      "<strong>⚖️ The Antidote:</strong> <strong>Generosity.</strong> Give something away (time or money) without expecting a return. Trust that you will not be destroyed by connection." 
            },
            { 
                min: 91, 
                max: 105, 
                title: "Dominant Sin: LUST", 
                desc: "<strong>[Archetype: The Conqueror]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>This is not just sexual; it is a lust for intensity. You force your will upon reality. You use intensity to mask a fear of vulnerability. Your defense mechanism is <strong>Denial</strong>—you deny your own weakness and pain.<br><br>" +
                      "<strong>⚖️ The Antidote:</strong> <strong>Tenderness.</strong> Allow yourself to be weak. True strength includes the capacity for gentleness." 
            },
            { 
                min: 106, 
                max: 120, 
                title: "Dominant Sin: WRATH", 
                desc: "<strong>[Archetype: The Punisher]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>You are driven by a need to correct reality. You feel a constant simmering resentment against a world that doesn't meet your standards. Your defense mechanism is <strong>Reaction Formation</strong>—you justify your aggression as 'justice'.<br><br>" +
                      "<strong>⚖️ The Antidote:</strong> <strong>Serenity.</strong> Accept that the world is imperfect and that is okay. Let go of the need to be the judge." 
            },
            { 
                min: 121, 
                max: 150, 
                title: "Dominant Sin: PRIDE", 
                desc: "<strong>[Archetype: The False God]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>The deadliest sin. You refuse to acknowledge your dependency on anyone. You help others to feel superior, but refuse help to avoid feeling weak. Your defense mechanism is <strong>Repression</strong> of your own needs.<br><br>" +
                      "<strong>⚖️ The Antidote:</strong> <strong>Humility.</strong> Admit a need. Ask for help. Realize you are just human, and that is enough." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - Clinical Standard
    "zh": {
        title: "七宗罪灵魂原罪测试",
        desc: "你的灵魂深处烙印着哪一种原罪？\n我们将通过21道直击灵魂的拷问，揭开你人性中最隐秘的“罪之源”。",
        questions: [
            // --- 组 1：懒惰 (逃避与解离) ---
            { id: 1, text: "当生活压力过大时，你的默认应对机制是：", options: [{ text: "睡觉、发呆、过度拖延", score: 1 }, { text: "用温和的娱乐麻痹自己", score: 3 }, { text: "强行寻找解决方案", score: 5 }] },
            { id: 2, text: "你与自身潜力的关系：", options: [{ text: "我觉得我在浪费生命，但动弹不得", score: 1 }, { text: "我在缓慢进步", score: 3 }, { text: "我在极具侵略性地挖掘潜力", score: 5 }] },
            { id: 3, text: "情感上的痛苦通常让你感到：", options: [{ text: "麻木、抽离（冷漠）", score: 1 }, { text: "悲伤或焦虑", score: 3 }, { text: "愤怒并充满能量", score: 5 }] },

            // --- 组 2：嫉妒 (比较与忧郁) ---
            { id: 4, text: "当你看到别人拥有你想要的东西时：", options: [{ text: "我感到内心深处的不公与酸楚", score: 2 }, { text: "我想知道他们是怎么得到的", score: 3 }, { text: "我计划如何超越他们", score: 5 }] },
            { id: 5, text: "你经常觉得：", options: [{ text: "别人都有‘幸福的秘诀’，唯独我没有", score: 2 }, { text: "生活大体是公平的", score: 3 }, { text: "运气是我自己创造的", score: 5 }] },
            { id: 6, text: "你的自我价值主要建立在：", options: [{ text: "我与他人的差距（比较）", score: 2 }, { text: "我的个人成长", score: 3 }, { text: "我的成就与支配力", score: 5 }] },

            // --- 组 3：暴食 (填补空虚) ---
            { id: 7, text: "当你感到内心空虚时，你会：", options: [{ text: "暴饮暴食、疯狂购物或刷剧", score: 3 }, { text: "找朋友聊天", score: 2 }, { text: "工作或健身", score: 5 }] },
            { id: 8, text: "你对享乐的看法：", options: [{ text: "越多越好，我讨厌被限制", score: 3 }, { text: "适度是关键", score: 2 }, { text: "享乐是一种干扰", score: 1 }] },
            { id: 9, text: "你最大的挣扎在于：", options: [{ text: "冲动控制与过度消费", score: 3 }, { text: "寻找动力", score: 1 }, { text: "控制脾气", score: 5 }] },

            // --- 组 4：贪婪 (囤积与安全) ---
            { id: 10, text: "你的资源（金钱、时间、精力）：", options: [{ text: "必须死守，我害怕耗尽", score: 4 }, { text: "谨慎地分享", score: 3 }, { text: "用来获取权力的筹码", score: 5 }] },
            { id: 11, text: "亲密关系让你感到：", options: [{ text: "被耗竭；人们向我索取太多", score: 4 }, { text: "连接与安全", score: 2 }, { text: "强大", score: 5 }] },
            { id: 12, text: "你最深层的焦虑是：", options: [{ text: "一无所有（匮乏感）", score: 4 }, { text: "被忽视", score: 2 }, { text: "被控制", score: 5 }] },

            // --- 组 5：色欲 (强度与感官) ---
            { id: 13, text: "你与世界的互动方式：", options: [{ text: "强烈的感官体验与征服", score: 5 }, { text: "观察与分析", score: 3 }, { text: "退缩与安全", score: 1 }] },
            { id: 14, text: "在关系中，你需要：", options: [{ text: "原始的强度与激情", score: 5 }, { text: "稳定与信任", score: 3 }, { text: "空间与距离", score: 1 }] },
            { id: 15, text: "无聊对你来说是：", options: [{ text: "难以忍受，我需要刺激", score: 5 }, { text: "思考的时间", score: 3 }, { text: "我的自然状态", score: 1 }] },

            // --- 组 6：暴怒 (反应与正义) ---
            { id: 16, text: "目睹不公正时，你会：", options: [{ text: "爆发出正义的怒火", score: 6 }, { text: "感到难过但无助", score: 2 }, { text: "策划复仇", score: 4 }] },
            { id: 17, text: "人们形容你：", options: [{ text: "令人畏惧或气场强大", score: 6 }, { text: "内向安静", score: 2 }, { text: "有趣或混乱", score: 4 }] },
            { id: 18, text: "你使用愤怒来：", options: [{ text: "建立边界和控制权", score: 6 }, { text: "保护我的感受", score: 3 }, { text: "我很少生气", score: 1 }] },

            // --- 组 7：傲慢 (小我与优越) ---
            { id: 19, text: "当你犯错时：", options: [{ text: "我否认，我很少犯错", score: 7 }, { text: "我感到羞耻", score: 2 }, { text: "我悄悄修正", score: 4 }] },
            { id: 20, text: "关于“帮助”：", options: [{ text: "我给予帮助，但我不需要帮助", score: 7 }, { text: "我感激他人的帮助", score: 3 }, { text: "帮助是有代价的", score: 4 }] },
            { id: 21, text: "内心深处，你相信：", options: [{ text: "我比其他人特别且优越", score: 7 }, { text: "我有缺陷", score: 2 }, { text: "我是透明的", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 35, 
                title: "核心原罪：懒惰 (Sloth)", 
                desc: "<strong>【原型：沉睡的灵魂】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你的原罪不是身体的懒，而是精神上的“冷漠”（Acedia）。为了逃避痛苦，你切断了与生命原力的连接。你的防御机制是<strong>麻醉化 (Narcotization)</strong>——通过让自己麻木来逃避现实责任。<br><br>" +
                      "<strong>⚖️ 救赎之道：</strong><br><strong>行动。</strong> 今天就做一件让你感到不适的事。重新连接你的身体。" 
            },
            { 
                min: 36, 
                max: 55, 
                title: "核心原罪：嫉妒 (Envy)", 
                desc: "<strong>【原型：悲剧受害者】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你受困于一种慢性的“匮乏感”。你坚信别人拥有你所缺乏的幸福。你的防御机制是<strong>内摄 (Introjection)</strong>——吞下负面情绪并攻击自己。你倾向于浪漫化你的痛苦。<br><br>" +
                      "<strong>⚖️ 救赎之道：</strong><br><strong>平静。</strong> 停止关注缺失的，开始关注拥有的。你的价值是与生俱来的，无需比较。" 
            },
            { 
                min: 56, 
                max: 75, 
                title: "核心原罪：暴食 (Gluttony)", 
                desc: "<strong>【原型：无底黑洞】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你的驱动力源于对内心空虚的恐惧。你试图通过吞噬外部事物（食物、体验、娱乐）来填补黑洞。你的防御机制是<strong>合理化 (Rationalization)</strong>——将你的冲动包装成“追求自由”。<br><br>" +
                      "<strong>⚖️ 救赎之道：</strong><br><strong>节制。</strong> 学会与其静坐。空虚无法从外部填补，只能从内部治愈。" 
            },
            { 
                min: 76, 
                max: 90, 
                title: "核心原罪：贪婪 (Greed)", 
                desc: "<strong>【原型：囤积者】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你的核心恐惧是“耗尽”。你吝啬情感、时间和资源，因为你觉得世界会把你榨干。你的防御机制是<strong>隔离 (Isolation)</strong>——你在情感上退缩以保持安全。<br><br>" +
                      "<strong>⚖️ 救赎之道：</strong><br><strong>慷慨。</strong> 试着给予（时间或金钱）而不求回报。相信你不会因为连接而毁灭。" 
            },
            { 
                min: 91, 
                max: 105, 
                title: "核心原罪：色欲 (Lust)", 
                desc: "<strong>【原型：征服者】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>这不仅指性，而是对“强度”的渴望。你将意志强加于现实。你用高强度的体验来掩盖对脆弱的恐惧。你的防御机制是<strong>否认 (Denial)</strong>——你否认自己的软弱和痛苦。<br><br>" +
                      "<strong>⚖️ 救赎之道：</strong><br><strong>温柔。</strong> 允许自己软弱。真正的力量包含温柔的能力。" 
            },
            { 
                min: 106, 
                max: 120, 
                title: "核心原罪：暴怒 (Wrath)", 
                desc: "<strong>【原型：惩罚者】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你的驱动力是纠正现实的冲动。你对不符合你标准的世界感到持续的怨恨。你的防御机制是<strong>反向形成 (Reaction Formation)</strong>——将你的攻击性正义化为“公理”。<br><br>" +
                      "<strong>⚖️ 救赎之道：</strong><br><strong>宁静。</strong> 接受世界的不完美。放下成为法官的执念。" 
            },
            { 
                min: 121, 
                max: 150, 
                title: "核心原罪：傲慢 (Pride)", 
                desc: "<strong>【原型：伪神】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>这是最致命的原罪。你拒绝承认自己需要任何人。你通过帮助他人来建立优越感，却拒绝接受帮助以避免示弱。你的防御机制是<strong>压抑 (Repression)</strong>——压抑你自己的需求。<br><br>" +
                      "<strong>⚖️ 救赎之道：</strong><br><strong>谦卑。</strong> 承认你需要帮助。意识到你只是凡人，这就足够了。" 
            }
        ]
    },

// 3. 德语 (German) - Clinical Standard
    "de": {
        title: "Die Sieben Todsünden: Klinische Seelenanalyse",
        desc: "Eine rigorose Bewertung mit 21 Fragen auf Basis der Psychodynamik. Wir umgehen moralische Urteile, um den Urtrieb und den 'Schatten-Archetyp' zu identifizieren, der Ihr Unterbewusstsein dominiert.",
        questions: [
            // --- Sloth (Acedia) ---
            { id: 1, text: "Wenn das Leben überwältigend wird, ist Ihr Mechanismus:", options: [{ text: "Schlafen, abschalten, prokrastinieren", score: 1 }, { text: "Leichte Ablenkung", score: 3 }, { text: "Sofortige Lösung erzwingen", score: 5 }] },
            { id: 2, text: "Beziehung zum eigenen Potenzial:", options: [{ text: "Ich verschwende mein Leben, bin aber gelähmt", score: 1 }, { text: "Langsamer Fortschritt", score: 3 }, { text: "Aggressive Maximierung", score: 5 }] },
            { id: 3, text: "Emotionaler Schmerz führt zu:", options: [{ text: "Taubheit und Distanz", score: 1 }, { text: "Trauer/Angst", score: 3 }, { text: "Wut/Energie", score: 5 }] },

            // --- Envy ---
            { id: 4, text: "Wenn andere haben, was Sie wollen:", options: [{ text: "Tiefer Schmerz der Ungerechtigkeit", score: 2 }, { text: "Neugierde", score: 3 }, { text: "Plan zum Übertreffen", score: 5 }] },
            { id: 5, text: "Sie haben oft das Gefühl:", options: [{ text: "Alle kennen das Glücksgeheimnis, nur ich nicht", score: 2 }, { text: "Das Leben ist fair", score: 3 }, { text: "Ich mache mein Glück selbst", score: 5 }] },
            { id: 6, text: "Selbstwert basiert auf:", options: [{ text: "Vergleich mit anderen", score: 2 }, { text: "Persönlichem Wachstum", score: 3 }, { text: "Dominanz", score: 5 }] },

            // --- Gluttony ---
            { id: 7, text: "Bei innerer Leere greifen Sie zu:", options: [{ text: "Essen, Konsum, Binge-Watching", score: 3 }, { text: "Gesprächen", score: 2 }, { text: "Arbeit", score: 5 }] },
            { id: 8, text: "Philosophie zum Vergnügen:", options: [{ text: "Mehr ist besser; ich hasse Verzicht", score: 3 }, { text: "Mäßigung", score: 2 }, { text: "Ablenkung", score: 1 }] },
            { id: 9, text: "Ihr Kampf:", options: [{ text: "Impulskontrolle & Überkonsum", score: 3 }, { text: "Motivation finden", score: 1 }, { text: "Wut kontrollieren", score: 5 }] },

            // --- Greed ---
            { id: 10, text: "Ressourcen (Geld/Zeit):", options: [{ text: "Müssen bewacht werden (Angst vor Mangel)", score: 4 }, { text: "Vorsichtig teilen", score: 3 }, { text: "Mittel zur Macht", score: 5 }] },
            { id: 11, text: "Intimität fühlt sich an wie:", options: [{ text: "Erschöpfend; man nimmt mir zu viel", score: 4 }, { text: "Sicher", score: 2 }, { text: "Mächtig", score: 5 }] },
            { id: 12, text: "Tiefste Angst:", options: [{ text: "Ausgeraubt/Leer sein", score: 4 }, { text: "Ignoriert werden", score: 2 }, { text: "Kontrolliert werden", score: 5 }] },

            // --- Lust ---
            { id: 13, text: "Interaktion mit der Welt:", options: [{ text: "Intensive Sensation & Eroberung", score: 5 }, { text: "Beobachtung", score: 3 }, { text: "Rückzug", score: 1 }] },
            { id: 14, text: "In Beziehungen brauchen Sie:", options: [{ text: "Rohe Intensität & Leidenschaft", score: 5 }, { text: "Stabilität", score: 3 }, { text: "Distanz", score: 1 }] },
            { id: 15, text: "Langeweile ist:", options: [{ text: "Unerträglich, brauche Stimulanz", score: 5 }, { text: "Zeit zum Denken", score: 3 }, { text: "Normalzustand", score: 1 }] },

            // --- Wrath ---
            { id: 16, text: "Bei Ungerechtigkeit:", options: [{ text: "Explosion gerechten Zorns", score: 6 }, { text: "Traurigkeit", score: 2 }, { text: "Racheplan", score: 4 }] },
            { id: 17, text: "Man beschreibt Sie als:", options: [{ text: "Einschüchternd/Intensiv", score: 6 }, { text: "Ruhig", score: 2 }, { text: "Chaotisch", score: 4 }] },
            { id: 18, text: "Wut dient dazu:", options: [{ text: "Grenzen & Kontrolle zu setzen", score: 6 }, { text: "Gefühle zu schützen", score: 3 }, { text: "Ich werde selten wütend", score: 1 }] },

            // --- Pride ---
            { id: 19, text: "Bei Fehlern:", options: [{ text: "Leugnen; ich irre selten", score: 7 }, { text: "Scham", score: 2 }, { text: "Leise korrigieren", score: 4 }] },
            { id: 20, text: "Hilfe ist:", options: [{ text: "Gebe ich, brauche ich nie", score: 7 }, { text: "Schätze ich", score: 3 }, { text: "Zu teuer", score: 4 }] },
            { id: 21, text: "Tief im Inneren:", options: [{ text: "Bin ich überlegen/besonders", score: 7 }, { text: "Bin ich fehlerhaft", score: 2 }, { text: "Bin ich unsichtbar", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "Dominante Sünde: TRÄGHEIT (Sloth)", desc: "<strong>[Archetyp: Die betäubte Seele]</strong><br>Spirituelle Apathie. Sie vermeiden Schmerz durch Dissoziation.<br><strong>Heilmittel:</strong> Handlung." },
            { min: 36, max: 55, title: "Dominante Sünde: NEID (Envy)", desc: "<strong>[Archetyp: Das Opfer]</strong><br>Chronisches Mangelgefühl. Sie romantisieren das Leiden.<br><strong>Heilmittel:</strong> Gelassenheit." },
            { min: 56, max: 75, title: "Dominante Sünde: VÖLLEREI (Gluttony)", desc: "<strong>[Archetyp: Der Abgrund]</strong><br>Angst vor Leere. Sie füllen das Loch mit Konsum.<br><strong>Heilmittel:</strong> Nüchternheit." },
            { min: 76, max: 90, title: "Dominante Sünde: HABGIER (Greed)", desc: "<strong>[Archetyp: Der Hamsterer]</strong><br>Angst vor Erschöpfung. Sie halten Gefühle und Ressourcen zurück.<br><strong>Heilmittel:</strong> Großzügigkeit." },
            { min: 91, max: 105, title: "Dominante Sünde: WOLLUST (Lust)", desc: "<strong>[Archetyp: Der Eroberer]</strong><br>Gier nach Intensität. Sie erzwingen Ihren Willen.<br><strong>Heilmittel:</strong> Zärtlichkeit." },
            { min: 106, max: 120, title: "Dominante Sünde: ZORN (Wrath)", desc: "<strong>[Archetyp: Der Bestrafer]</strong><br>Bedürfnis, die Realität zu korrigieren. Sie rechtfertigen Aggression als Gerechtigkeit.<br><strong>Heilmittel:</strong> Gelassenheit." },
            { min: 121, max: 150, title: "Dominante Sünde: HOCHMUT (Pride)", desc: "<strong>[Archetyp: Der falsche Gott]</strong><br>Verleugnung von Abhängigkeit. Sie helfen, um sich überlegen zu fühlen.<br><strong>Heilmittel:</strong> Demut." }
        ]
    },

    // 4. 日语 (Japanese) - Clinical Standard
    "ja": {
        title: "七つの大罪：魂の臨床分析",
        desc: "精神力動学に基づく厳密な21問の診断。道徳的判断を排除し、あなたの潜在意識を支配する原動力、防衛機制、そして「影の元型」を特定します。",
        questions: [
            // Sloth
            { id: 1, text: "人生に圧倒された時の対処法：", options: [{ text: "睡眠、呆然、先延ばし", score: 1 }, { text: "軽い娯楽で気を紛らわす", score: 3 }, { text: "無理やり解決策を出す", score: 5 }] },
            { id: 2, text: "自身の可能性との関係：", options: [{ text: "人生を浪費している気がするが動けない", score: 1 }, { text: "ゆっくり進歩している", score: 3 }, { text: "攻撃的に最大化している", score: 5 }] },
            { id: 3, text: "感情的な痛みを感じると：", options: [{ text: "麻痺・解離する（無気力）", score: 1 }, { text: "悲しみや不安", score: 3 }, { text: "怒りとエネルギー", score: 5 }] },

            // Envy
            { id: 4, text: "他人が欲しいものを持っている時：", options: [{ text: "不公平さによる深い心の痛み", score: 2 }, { text: "どう手に入れたか考える", score: 3 }, { text: "超える計画を立てる", score: 5 }] },
            { id: 5, text: "よく感じることは：", options: [{ text: "皆は幸福の秘訣を知っているが私だけ知らない", score: 2 }, { text: "人生は概ね公平だ", score: 3 }, { text: "運は自分で作るもの", score: 5 }] },
            { id: 6, text: "自己価値の基準：", options: [{ text: "他人との比較", score: 2 }, { text: "個人の成長", score: 3 }, { text: "支配と達成", score: 5 }] },

            // Gluttony
            { id: 7, text: "内面の空虚を感じる時：", options: [{ text: "過食、買い物、一気見", score: 3 }, { text: "友人との会話", score: 2 }, { text: "仕事や運動", score: 5 }] },
            { id: 8, text: "快楽に対する哲学：", options: [{ text: "多ければ多いほど良い、制限は嫌い", score: 3 }, { text: "適度が鍵", score: 2 }, { text: "快楽は気晴らしに過ぎない", score: 1 }] },
            { id: 9, text: "あなたの闘い：", options: [{ text: "衝動制御と過剰消費", score: 3 }, { text: "やる気を見つけること", score: 1 }, { text: "短気を抑えること", score: 5 }] },

            // Greed
            { id: 10, text: "リソース（金、時間、労力）：", options: [{ text: "死守すべき、枯渇が怖い", score: 4 }, { text: "慎重に共有する", score: 3 }, { text: "権力を得るために使う", score: 5 }] },
            { id: 11, text: "親密さへの反応：", options: [{ text: "消耗する、搾取されると感じる", score: 4 }, { text: "つながりと安心", score: 2 }, { text: "力強さ", score: 5 }] },
            { id: 12, text: "最も深い不安：", options: [{ text: "何も持たなくなること（欠乏）", score: 4 }, { text: "無視されること", score: 2 }, { text: "支配されること", score: 5 }] },

            // Lust
            { id: 13, text: "世界との関わり方：", options: [{ text: "強烈な感覚と征服", score: 5 }, { text: "観察と分析", score: 3 }, { text: "撤退と安全", score: 1 }] },
            { id: 14, text: "人間関係で必要なもの：", options: [{ text: "生々しい激しさと情熱", score: 5 }, { text: "安定と信頼", score: 3 }, { text: "空間と距離", score: 1 }] },
            { id: 15, text: "退屈とは：", options: [{ text: "耐えられない、刺激が必要", score: 5 }, { text: "考える時間", score: 3 }, { text: "自然な状態", score: 1 }] },

            // Wrath
            { id: 16, text: "不正を目撃した時：", options: [{ text: "正義の怒りが爆発する", score: 6 }, { text: "悲しいが無力", score: 2 }, { text: "復讐を計算する", score: 4 }] },
            { id: 17, text: "周囲からの評価：", options: [{ text: "威圧的、激しい", score: 6 }, { text: "控えめ、静か", score: 2 }, { text: "楽しい、混沌", score: 4 }] },
            { id: 18, text: "怒りの使い道：", options: [{ text: "境界線と支配の確立", score: 6 }, { text: "感情を守るため", score: 3 }, { text: "めったに怒らない", score: 1 }] },

            // Pride
            { id: 19, text: "間違いを犯した時：", options: [{ text: "否定する、私はめったに間違わない", score: 7 }, { text: "恥じる", score: 2 }, { text: "静かに修正する", score: 4 }] },
            { id: 20, text: "助けとは：", options: [{ text: "与えるもの、必要とはしない", score: 7 }, { text: "感謝して受ける", score: 3 }, { text: "代償が高すぎる", score: 4 }] },
            { id: 21, text: "心の奥底での信念：", options: [{ text: "私は特別で他人より優れている", score: 7 }, { text: "私には欠陥がある", score: 2 }, { text: "私は透明人間だ", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "支配的な大罪：怠惰 (Sloth)", desc: "<strong>[元型：解離した魂]</strong><br>霊的な無気力（アケディア）。苦痛を避けるために生命力との接続を切っています。<br><strong>解毒剤：</strong>行動。" },
            { min: 36, max: 55, title: "支配的な大罪：嫉妬 (Envy)", desc: "<strong>[元型：悲劇の被害者]</strong><br>慢性的な欠乏感。苦しみをロマンチック化しています。<br><strong>解毒剤：</strong>平静心。" },
            { min: 56, max: 75, title: "支配的な大罪：暴食 (Gluttony)", desc: "<strong>[元型：底なしの穴]</strong><br>空虚への恐怖。外部からの消費で内面を埋めようとしています。<br><strong>解毒剤：</strong>節制。" },
            { min: 76, max: 90, title: "支配的な大罪：強欲 (Greed)", desc: "<strong>[元型：溜め込む者]</strong><br>枯渇への恐怖。感情や時間を出し惜しみし、孤立することで身を守ります。<br><strong>解毒剤：</strong>寛大さ。" },
            { min: 91, max: 105, title: "支配的な大罪：色欲 (Lust)", desc: "<strong>[元型：征服者]</strong><br>強烈さへの渇望。脆弱性を隠すために現実を力でねじ伏せようとします。<br><strong>解毒剤：</strong>優しさ。" },
            { min: 106, max: 120, title: "支配的な大罪：憤怒 (Wrath)", desc: "<strong>[元型：処罰者]</strong><br>現実を矯正したい衝動。攻撃性を「正義」として正当化します。<br><strong>解毒剤：</strong>受容。" },
            { min: 121, max: 150, title: "支配的な大罪：傲慢 (Pride)", desc: "<strong>[元型：偽りの神]</strong><br>依存の拒絶。弱さを避けるために助けを拒み、優越感を求めます。<br><strong>解毒剤：</strong>謙虚さ。" }
        ]
    },

    // 5. 法语 (French) - Clinical Standard
    "fr": {
        title: "Les Sept Péchés Capitaux : Analyse Clinique",
        desc: "Une évaluation rigoureuse de 21 questions basée sur la psychodynamique. Nous contournons le jugement moral pour identifier la pulsion primitive et l'archétype de l'ombre.",
        questions: [
            // Sloth
            { id: 1, text: "Face à l'accablement, votre mécanisme :", options: [{ text: "Dormir, zoner, procrastiner", score: 1 }, { text: "Distraction légère", score: 3 }, { text: "Forcer une solution", score: 5 }] },
            { id: 2, text: "Rapport à votre potentiel :", options: [{ text: "Je gâche ma vie mais suis bloqué", score: 1 }, { text: "Progrès lent", score: 3 }, { text: "Maximisation agressive", score: 5 }] },
            { id: 3, text: "La douleur émotionnelle crée :", options: [{ text: "Engourdissement (Apathie)", score: 1 }, { text: "Tristesse/Anxiété", score: 3 }, { text: "Colère/Énergie", score: 5 }] },

            // Envy
            { id: 4, text: "Quand quelqu'un a ce que vous voulez :", options: [{ text: "Douleur interne d'injustice", score: 2 }, { text: "Curiosité", score: 3 }, { text: "Plan pour surpasser", score: 5 }] },
            { id: 5, text: "Vous sentez souvent que :", options: [{ text: "Tous ont le secret du bonheur sauf moi", score: 2 }, { text: "La vie est juste", score: 3 }, { text: "Je crée ma chance", score: 5 }] },
            { id: 6, text: "Estime de soi basée sur :", options: [{ text: "Comparaison", score: 2 }, { text: "Croissance personnelle", score: 3 }, { text: "Dominance", score: 5 }] },

            // Gluttony
            { id: 7, text: "Face au vide intérieur :", options: [{ text: "Nourriture, achats, écran", score: 3 }, { text: "Parler à un ami", score: 2 }, { text: "Travail/Sport", score: 5 }] },
            { id: 8, text: "Philosophie du plaisir :", options: [{ text: "Toujours plus, je hais la restriction", score: 3 }, { text: "Modération", score: 2 }, { text: "Distraction", score: 1 }] },
            { id: 9, text: "Votre lutte :", options: [{ text: "Impulsivité et surconsommation", score: 3 }, { text: "Trouver la motivation", score: 1 }, { text: "Contrôler ma colère", score: 5 }] },

            // Greed
            { id: 10, text: "Ressources (Argent/Temps) :", options: [{ text: "À garder (Peur du manque)", score: 4 }, { text: "Partager prudemment", score: 3 }, { text: "Pour le pouvoir", score: 5 }] },
            { id: 11, text: "L'intimité vous fait sentir :", options: [{ text: "Épuisé; on me prend trop", score: 4 }, { text: "Connecté", score: 2 }, { text: "Puissant", score: 5 }] },
            { id: 12, text: "Anxiété profonde :", options: [{ text: "Être vidé/privé", score: 4 }, { text: "Être ignoré", score: 2 }, { text: "Être contrôlé", score: 5 }] },

            // Lust
            { id: 13, text: "Interaction avec le monde :", options: [{ text: "Sensation intense et conquête", score: 5 }, { text: "Observation", score: 3 }, { text: "Retrait", score: 1 }] },
            { id: 14, text: "En relation, besoin de :", options: [{ text: "Intensité brute", score: 5 }, { text: "Stabilité", score: 3 }, { text: "Distance", score: 1 }] },
            { id: 15, text: "L'ennui est :", options: [{ text: "Insupportable", score: 5 }, { text: "Temps de réflexion", score: 3 }, { text: "État naturel", score: 1 }] },

            // Wrath
            { id: 16, text: "Face à l'injustice :", options: [{ text: "Explosion de fureur", score: 6 }, { text: "Tristesse impuissante", score: 2 }, { text: "Plan de vengeance", score: 4 }] },
            { id: 17, text: "On vous décrit comme :", options: [{ text: "Intimidant/Intense", score: 6 }, { text: "Réservé", score: 2 }, { text: "Chaotique", score: 4 }] },
            { id: 18, text: "Utilité de la colère :", options: [{ text: "Limites et contrôle", score: 6 }, { text: "Protection", score: 3 }, { text: "Rarement en colère", score: 1 }] },

            // Pride
            { id: 19, text: "En cas d'erreur :", options: [{ text: "Je nie; j'ai rarement tort", score: 7 }, { text: "Honte", score: 2 }, { text: "Correction discrète", score: 4 }] },
            { id: 20, text: "L'aide est :", options: [{ text: "Je donne, je ne reçois pas", score: 7 }, { text: "Appréciée", score: 3 }, { text: "Trop coûteuse", score: 4 }] },
            { id: 21, text: "Au fond, vous croyez :", options: [{ text: "Je suis supérieur", score: 7 }, { text: "Je suis défectueux", score: 2 }, { text: "Je suis invisible", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "Péché Dominant : PARESSE (Acedia)", desc: "<strong>[Archétype : L'Âme Dissociée]</strong><br>Apathie spirituelle. Vous vous déconnectez pour éviter la douleur.<br><strong>Antidote :</strong> Action." },
            { min: 36, max: 55, title: "Péché Dominant : ENVIE", desc: "<strong>[Archétype : La Victime Tragique]</strong><br>Sentiment de carence. Vous introjectez la négativité.<br><strong>Antidote :</strong> Équanimité." },
            { min: 56, max: 75, title: "Péché Dominant : GOURMANDISE", desc: "<strong>[Archétype : Le Vide Sans Fond]</strong><br>Peur du vide. Vous remplissez le trou par la consommation.<br><strong>Antidote :</strong> Sobriété." },
            { min: 76, max: 90, title: "Péché Dominant : AVARICE", desc: "<strong>[Archétype : Le Thésauriseur]</strong><br>Peur de l'épuisement. Vous vous isolez pour préserver vos ressources.<br><strong>Antidote :</strong> Générosité." },
            { min: 91, max: 105, title: "Péché Dominant : LUXURE", desc: "<strong>[Archétype : Le Conquérant]</strong><br>Soif d'intensité. Vous niez votre vulnérabilité par la force.<br><strong>Antidote :</strong> Tendresse." },
            { min: 106, max: 120, title: "Péché Dominant : COLÈRE", desc: "<strong>[Archétype : Le Punisseur]</strong><br>Besoin de corriger le réel. Agression justifiée par la justice.<br><strong>Antidote :</strong> Sérénité." },
            { min: 121, max: 150, title: "Péché Dominant : ORGUEIL", desc: "<strong>[Archétype : Le Faux Dieu]</strong><br>Refus de la dépendance. Vous aidez pour vous sentir supérieur.<br><strong>Antidote :</strong> Humilité." }
        ]
    },

    // 6. 西班牙语 (Spanish) - Clinical Standard
    "es": {
        title: "Los Siete Pecados Capitales: Análisis Clínico",
        desc: "Una evaluación rigurosa de 21 preguntas basada en psicodinámica. Identificamos el impulso primario y el arquetipo de sombra que domina tu subconsciente.",
        questions: [
            // Sloth
            { id: 1, text: "Ante el agobio, tu mecanismo es:", options: [{ text: "Dormir, desconectar, procrastinar", score: 1 }, { text: "Distracción leve", score: 3 }, { text: "Forzar solución", score: 5 }] },
            { id: 2, text: "Relación con tu potencial:", options: [{ text: "Siento que desperdicio mi vida pero no me muevo", score: 1 }, { text: "Progreso lento", score: 3 }, { text: "Maximización agresiva", score: 5 }] },
            { id: 3, text: "El dolor emocional causa:", options: [{ text: "Entumecimiento (Apatía)", score: 1 }, { text: "Tristeza/Ansiedad", score: 3 }, { text: "Ira/Energía", score: 5 }] },

            // Envy
            { id: 4, text: "Cuando otros tienen lo que quieres:", options: [{ text: "Dolor interno de injusticia", score: 2 }, { text: "Curiosidad", score: 3 }, { text: "Plan para superarles", score: 5 }] },
            { id: 5, text: "Sientes a menudo que:", options: [{ text: "Todos tienen el secreto de la felicidad menos yo", score: 2 }, { text: "La vida es justa", score: 3 }, { text: "Yo creo mi suerte", score: 5 }] },
            { id: 6, text: "Autoestima basada en:", options: [{ text: "Comparación", score: 2 }, { text: "Crecimiento personal", score: 3 }, { text: "Dominio", score: 5 }] },

            // Gluttony
            { id: 7, text: "Ante el vacío interior:", options: [{ text: "Comida, compras, atracones", score: 3 }, { text: "Hablar con amigos", score: 2 }, { text: "Trabajo/Ejercicio", score: 5 }] },
            { id: 8, text: "Filosofía del placer:", options: [{ text: "Más es mejor; odio la restricción", score: 3 }, { text: "Moderación", score: 2 }, { text: "Distracción", score: 1 }] },
            { id: 9, text: "Tu lucha:", options: [{ text: "Impulsividad y consumo", score: 3 }, { text: "Encontrar motivación", score: 1 }, { text: "Controlar mi genio", score: 5 }] },

            // Greed
            { id: 10, text: "Recursos (Dinero/Tiempo):", options: [{ text: "Protegerlos (Miedo a escasez)", score: 4 }, { text: "Compartir con cautela", score: 3 }, { text: "Para ganar poder", score: 5 }] },
            { id: 11, text: "La intimidad te hace sentir:", options: [{ text: "Agotado; me quitan mucho", score: 4 }, { text: "Conectado", score: 2 }, { text: "Poderoso", score: 5 }] },
            { id: 12, text: "Ansiedad profunda:", options: [{ text: "Quedar sin nada", score: 4 }, { text: "Ser ignorado", score: 2 }, { text: "Ser controlado", score: 5 }] },

            // Lust
            { id: 13, text: "Interacción con el mundo:", options: [{ text: "Sensación intensa y conquista", score: 5 }, { text: "Observación", score: 3 }, { text: "Retirada", score: 1 }] },
            { id: 14, text: "En relaciones necesitas:", options: [{ text: "Intensidad cruda", score: 5 }, { text: "Estabilidad", score: 3 }, { text: "Distancia", score: 1 }] },
            { id: 15, text: "El aburrimiento es:", options: [{ text: "Insoportable", score: 5 }, { text: "Tiempo para pensar", score: 3 }, { text: "Estado natural", score: 1 }] },

            // Wrath
            { id: 16, text: "Ante la injusticia:", options: [{ text: "Explosión de furia", score: 6 }, { text: "Tristeza impotente", score: 2 }, { text: "Plan de venganza", score: 4 }] },
            { id: 17, text: "Te describen como:", options: [{ text: "Intimidante/Intenso", score: 6 }, { text: "Reservado", score: 2 }, { text: "Caótico", score: 4 }] },
            { id: 18, text: "Usas la ira para:", options: [{ text: "Límites y control", score: 6 }, { text: "Protección", score: 3 }, { text: "Rara vez me enfado", score: 1 }] },

            // Pride
            { id: 19, text: "Al cometer un error:", options: [{ text: "Lo niego; rara vez fallo", score: 7 }, { text: "Vergüenza", score: 2 }, { text: "Arreglo discreto", score: 4 }] },
            { id: 20, text: "La ayuda es:", options: [{ text: "Doy, pero no necesito", score: 7 }, { text: "Apreciada", score: 3 }, { text: "Demasiado costosa", score: 4 }] },
            { id: 21, text: "En el fondo crees:", options: [{ text: "Soy superior", score: 7 }, { text: "Soy defectuoso", score: 2 }, { text: "Soy invisible", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "Pecado Dominante: PEREZA (Acedia)", desc: "<strong>[Arquetipo: Alma Disociada]</strong><br>Apatía espiritual. Te desconectas para evitar el dolor.<br><strong>Antídoto:</strong> Acción." },
            { min: 36, max: 55, title: "Pecado Dominante: ENVIDIA", desc: "<strong>[Arquetipo: La Víctima]</strong><br>Sensación de carencia. Introyecciones la negatividad.<br><strong>Antídoto:</strong> Ecuanimidad." },
            { min: 56, max: 75, title: "Pecado Dominante: GULA", desc: "<strong>[Arquetipo: El Vacío]</strong><br>Miedo al vacío. Llenas el hueco con consumo.<br><strong>Antídoto:</strong> Sobriedad." },
            { min: 76, max: 90, title: "Pecado Dominante: AVARICIA", desc: "<strong>[Arquetipo: El Acaparador]</strong><br>Miedo al agotamiento. Te aíslas para proteger recursos.<br><strong>Antídoto:</strong> Generosidad." },
            { min: 91, max: 105, title: "Pecado Dominante: LUJURIA", desc: "<strong>[Arquetipo: El Conquistador]</strong><br>Sed de intensidad. Niegas vulnerabilidad con fuerza.<br><strong>Antídoto:</strong> Ternura." },
            { min: 106, max: 120, title: "Pecado Dominante: IRA", desc: "<strong>[Arquetipo: El Castigador]</strong><br>Necesidad de corregir. Justificas agresión como justicia.<br><strong>Antídoto:</strong> Serenidad." },
            { min: 121, max: 150, title: "Pecado Dominante: SOBERBIA", desc: "<strong>[Arquetipo: El Falso Dios]</strong><br>Rechazo a la dependencia. Ayudas para sentirte superior.<br><strong>Antídoto:</strong> Humildad." }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Clinical Standard
    "pt": {
        title: "Os Sete Pecados Capitais: Análise Clínica",
        desc: "Uma avaliação rigorosa de 21 perguntas baseada na psicodinâmica. Identificamos o impulso primitivo, o mecanismo de defesa e o 'Arquétipo da Sombra' que domina seu subconsciente.",
        questions: [
            // Sloth
            { id: 1, text: "Quando a vida se torna avassaladora:", options: [{ text: "Dormir, desligar, procrastinar", score: 1 }, { text: "Distração leve", score: 3 }, { text: "Forçar uma solução", score: 5 }] },
            { id: 2, text: "Relação com seu potencial:", options: [{ text: "Sinto que desperdiço a vida, mas estou travado", score: 1 }, { text: "Progresso lento", score: 3 }, { text: "Maximizo agressivamente", score: 5 }] },
            { id: 3, text: "A dor emocional causa:", options: [{ text: "Dormência (Apatia)", score: 1 }, { text: "Tristeza/Ansiedade", score: 3 }, { text: "Raiva/Energia", score: 5 }] },

            // Envy
            { id: 4, text: "Quando outros têm o que você quer:", options: [{ text: "Dor interna de injustiça", score: 2 }, { text: "Curiosidade", score: 3 }, { text: "Plano para superar", score: 5 }] },
            { id: 5, text: "Você sente frequentemente que:", options: [{ text: "Todos têm o segredo da felicidade, menos eu", score: 2 }, { text: "A vida é justa", score: 3 }, { text: "Eu crio minha sorte", score: 5 }] },
            { id: 6, text: "Autoestima baseada em:", options: [{ text: "Comparação", score: 2 }, { text: "Crescimento pessoal", score: 3 }, { text: "Domínio", score: 5 }] },

            // Gluttony
            { id: 7, text: "Diante do vazio interior:", options: [{ text: "Comida, compras, compulsão", score: 3 }, { text: "Conversar com amigo", score: 2 }, { text: "Trabalho/Exercício", score: 5 }] },
            { id: 8, text: "Filosofia de prazer:", options: [{ text: "Quanto mais melhor; odeio restrição", score: 3 }, { text: "Moderação", score: 2 }, { text: "Distração", score: 1 }] },
            { id: 9, text: "Sua luta:", options: [{ text: "Impulsividade e consumo", score: 3 }, { text: "Encontrar motivação", score: 1 }, { text: "Controlar a raiva", score: 5 }] },

            // Greed
            { id: 10, text: "Recursos (Dinheiro/Tempo):", options: [{ text: "Proteger (Medo da escassez)", score: 4 }, { text: "Compartilhar com cautela", score: 3 }, { text: "Usar para poder", score: 5 }] },
            { id: 11, text: "Intimidade faz sentir:", options: [{ text: "Drenado; tiram muito de mim", score: 4 }, { text: "Conectado", score: 2 }, { text: "Poderoso", score: 5 }] },
            { id: 12, text: "Ansiedade profunda:", options: [{ text: "Ficar sem nada", score: 4 }, { text: "Ser ignorado", score: 2 }, { text: "Ser controlado", score: 5 }] },

            // Lust
            { id: 13, text: "Interação com o mundo:", options: [{ text: "Sensação intensa e conquista", score: 5 }, { text: "Observação", score: 3 }, { text: "Retraimento", score: 1 }] },
            { id: 14, text: "Em relacionamentos, precisa:", options: [{ text: "Intensidade bruta", score: 5 }, { text: "Estabilidade", score: 3 }, { text: "Distância", score: 1 }] },
            { id: 15, text: "Tédio é:", options: [{ text: "Insuportável", score: 5 }, { text: "Tempo para pensar", score: 3 }, { text: "Estado natural", score: 1 }] },

            // Wrath
            { id: 16, text: "Diante da injustiça:", options: [{ text: "Explosão de fúria", score: 6 }, { text: "Tristeza impotente", score: 2 }, { text: "Plano de vingança", score: 4 }] },
            { id: 17, text: "Descrevem você como:", options: [{ text: "Intimidador/Intenso", score: 6 }, { text: "Reservado", score: 2 }, { text: "Caótico", score: 4 }] },
            { id: 18, text: "Uso da raiva:", options: [{ text: "Limites e controle", score: 6 }, { text: "Proteção", score: 3 }, { text: "Raramente sinto", score: 1 }] },

            // Pride
            { id: 19, text: "Ao errar:", options: [{ text: "Nego; raramente erro", score: 7 }, { text: "Vergonha", score: 2 }, { text: "Correção discreta", score: 4 }] },
            { id: 20, text: "Ajuda é:", options: [{ text: "Dou, nunca preciso", score: 7 }, { text: "Aprecio receber", score: 3 }, { text: "Custa muito caro", score: 4 }] },
            { id: 21, text: "No fundo, acredita:", options: [{ text: "Sou superior", score: 7 }, { text: "Sou defeituoso", score: 2 }, { text: "Sou invisível", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "Pecado Dominante: PREGUIÇA (Acedia)", desc: "<strong>[Arquétipo: A Alma Dissociada]</strong><br>Apatia espiritual. Você se desconecta para evitar a dor.<br><strong>Antídoto:</strong> Ação." },
            { min: 36, max: 55, title: "Pecado Dominante: INVEJA", desc: "<strong>[Arquétipo: A Vítima Trágica]</strong><br>Sentimento de carência. Você introjeta a negatividade.<br><strong>Antídoto:</strong> Equanimidade." },
            { min: 56, max: 75, title: "Pecado Dominante: GULA", desc: "<strong>[Arquétipo: O Vazio Sem Fundo]</strong><br>Medo do vazio. Você preenche o buraco com consumo.<br><strong>Antídoto:</strong> Sobriedade." },
            { min: 76, max: 90, title: "Pecado Dominante: AVAREZA", desc: "<strong>[Arquétipo: O Acumulador]</strong><br>Medo da exaustão. Você se isola para preservar recursos.<br><strong>Antídoto:</strong> Generosidade." },
            { min: 91, max: 105, title: "Pecado Dominante: LUXÚRIA", desc: "<strong>[Arquétipo: O Conquistador]</strong><br>Sede de intensidade. Você nega vulnerabilidade com força.<br><strong>Antídoto:</strong> Ternura." },
            { min: 106, max: 120, title: "Pecado Dominante: IRA", desc: "<strong>[Arquétipo: O Punidor]</strong><br>Necessidade de corrigir o real. Agressão justificada como justiça.<br><strong>Antídoto:</strong> Serenidade." },
            { min: 121, max: 150, title: "Pecado Dominante: ORGULHO", desc: "<strong>[Arquétipo: O Falso Deus]</strong><br>Recusa da dependência. Você ajuda para se sentir superior.<br><strong>Antídoto:</strong> Humildade." }
        ]
    },

    // 8. 俄语 (Russian) - Clinical Standard
    "ru": {
        title: "Семь смертных грехов: Клинический анализ",
        desc: "Строгая оценка из 21 вопроса на основе психодинамики. Мы обходим мораль, чтобы найти первичный драйв и архетип Тени.",
        questions: [
            { id: 1, text: "Когда жизнь давит:", options: [{ text: "Сон, прокрастинация", score: 1 }, { text: "Легкое отвлечение", score: 3 }, { text: "Силовое решение", score: 5 }] },
            { id: 2, text: "Ваш потенциал:", options: [{ text: "Трачу жизнь зря, ступор", score: 1 }, { text: "Медленный прогресс", score: 3 }, { text: "Агрессивный рост", score: 5 }] },
            { id: 3, text: "Боль вызывает:", options: [{ text: "Оцепенение (Апатия)", score: 1 }, { text: "Грусть/Тревогу", score: 3 }, { text: "Гнев/Энергию", score: 5 }] },
            { id: 4, text: "У других есть то, что вы хотите:", options: [{ text: "Боль несправедливости", score: 2 }, { text: "Любопытство", score: 3 }, { text: "План, как превзойти", score: 5 }] },
            { id: 5, text: "Вы чувствуете:", options: [{ text: "Все знают секрет счастья, кроме меня", score: 2 }, { text: "Жизнь справедлива", score: 3 }, { text: "Я сам создаю удачу", score: 5 }] },
            { id: 6, text: "Самооценка:", options: [{ text: "Сравнение с другими", score: 2 }, { text: "Личный рост", score: 3 }, { text: "Доминирование", score: 5 }] },
            { id: 7, text: "Внутренняя пустота:", options: [{ text: "Еда, шопинг, запой", score: 3 }, { text: "Разговор", score: 2 }, { text: "Работа", score: 5 }] },
            { id: 8, text: "Философия удовольствия:", options: [{ text: "Больше - лучше", score: 3 }, { text: "Умеренность", score: 2 }, { text: "Отвлечение", score: 1 }] },
            { id: 9, text: "Ваша борьба:", options: [{ text: "Импульсивность", score: 3 }, { text: "Поиск мотивации", score: 1 }, { text: "Контроль гнева", score: 5 }] },
            { id: 10, text: "Ресурсы (Деньги/Время):", options: [{ text: "Охранять (Страх нехватки)", score: 4 }, { text: "Делиться осторожно", score: 3 }, { text: "Власть", score: 5 }] },
            { id: 11, text: "Близость:", options: [{ text: "Истощает", score: 4 }, { text: "Безопасно", score: 2 }, { text: "Сила", score: 5 }] },
            { id: 12, text: "Главный страх:", options: [{ text: "Лишение/Пустота", score: 4 }, { text: "Игнорирование", score: 2 }, { text: "Контроль", score: 5 }] },
            { id: 13, text: "Взаимодействие с миром:", options: [{ text: "Интенсивность и завоевание", score: 5 }, { text: "Наблюдение", score: 3 }, { text: "Уход", score: 1 }] },
            { id: 14, text: "В отношениях нужно:", options: [{ text: "Страсть", score: 5 }, { text: "Стабильность", score: 3 }, { text: "Дистанция", score: 1 }] },
            { id: 15, text: "Скука:", options: [{ text: "Невыносима", score: 5 }, { text: "Время думать", score: 3 }, { text: "Норма", score: 1 }] },
            { id: 16, text: "Несправедливость:", options: [{ text: "Ярость", score: 6 }, { text: "Грусть", score: 2 }, { text: "Месть", score: 4 }] },
            { id: 17, text: "Вас описывают:", options: [{ text: "Пугающий/Интенсивный", score: 6 }, { text: "Тихий", score: 2 }, { text: "Хаотичный", score: 4 }] },
            { id: 18, text: "Гнев нужен для:", options: [{ text: "Границ и контроля", score: 6 }, { text: "Защиты", score: 3 }, { text: "Редко злюсь", score: 1 }] },
            { id: 19, text: "Ошибка:", options: [{ text: "Отрицаю", score: 7 }, { text: "Стыд", score: 2 }, { text: "Исправляю тихо", score: 4 }] },
            { id: 20, text: "Помощь:", options: [{ text: "Даю, но не беру", score: 7 }, { text: "Ценю", score: 3 }, { text: "Слишком дорого", score: 4 }] },
            { id: 21, text: "В глубине души:", options: [{ text: "Я превосхожу других", score: 7 }, { text: "Я дефектный", score: 2 }, { text: "Я невидимка", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "Грех: УНЫНИЕ (Sloth)", desc: "<strong>[Архетип: Спящая душа]</strong><br>Духовная апатия. Вы отключаетесь от боли.<br><strong>Лекарство:</strong> Действие." },
            { min: 36, max: 55, title: "Грех: ЗАВИСТЬ (Envy)", desc: "<strong>[Архетип: Жертва]</strong><br>Чувство нехватки. Вы романтизируете страдание.<br><strong>Лекарство:</strong> Спокойствие." },
            { min: 56, max: 75, title: "Грех: ЧРЕВОУГОДИЕ (Gluttony)", desc: "<strong>[Архетип: Бездна]</strong><br>Страх пустоты. Вы заполняете её потреблением.<br><strong>Лекарство:</strong> Воздержание." },
            { min: 76, max: 90, title: "Грех: АЛЧНОСТЬ (Greed)", desc: "<strong>[Архетип: Скряга]</strong><br>Страх истощения. Вы изолируетесь.<br><strong>Лекарство:</strong> Щедрость." },
            { min: 91, max: 105, title: "Грех: ПОХОТЬ (Lust)", desc: "<strong>[Архетип: Завоеватель]</strong><br>Жажда интенсивности. Отрицание уязвимости.<br><strong>Лекарство:</strong> Нежность." },
            { min: 106, max: 120, title: "Грех: ГНЕВ (Wrath)", desc: "<strong>[Архетип: Каратель]</strong><br>Желание исправить мир силой.<br><strong>Лекарство:</strong> Принятие." },
            { min: 121, max: 150, title: "Грех: ГОРДЫНЯ (Pride)", desc: "<strong>[Архетип: Ложный бог]</strong><br>Отказ от зависимости. Помощь ради превосходства.<br><strong>Лекарство:</strong> Смирение." }
        ]
    },

    // 9. 韩语 (Korean) - Clinical Standard
    "ko": {
        title: "7대 죄악: 영혼 임상 분석",
        desc: "정신역동학에 기반한 21개 문항의 정밀 진단. 도덕적 판단을 배제하고 당신의 잠재의식을 지배하는 원초적 충동과 '그림자 원형'을 파악합니다.",
        questions: [
            { id: 1, text: "삶이 감당하기 힘들 때:", options: [{ text: "수면, 멍 때리기, 미루기", score: 1 }, { text: "가벼운 오락", score: 3 }, { text: "해결 강행", score: 5 }] },
            { id: 2, text: "자신의 잠재력:", options: [{ text: "낭비하는 것 같지만 꼼짝 못함", score: 1 }, { text: "느린 진전", score: 3 }, { text: "공격적 극대화", score: 5 }] },
            { id: 3, text: "정서적 고통:", options: [{ text: "무감각 (무관심)", score: 1 }, { text: "슬픔/불안", score: 3 }, { text: "분노/에너지", score: 5 }] },
            { id: 4, text: "타인이 원하는 것을 가졌을 때:", options: [{ text: "깊은 불공평함의 고통", score: 2 }, { text: "호기심", score: 3 }, { text: "추월 계획", score: 5 }] },
            { id: 5, text: "자주 하는 생각:", options: [{ text: "나 빼고 다 행복의 비결을 안다", score: 2 }, { text: "인생은 공평하다", score: 3 }, { text: "운은 내가 만든다", score: 5 }] },
            { id: 6, text: "자존감의 원천:", options: [{ text: "타인과의 비교", score: 2 }, { text: "개인적 성장", score: 3 }, { text: "지배와 성취", score: 5 }] },
            { id: 7, text: "내면이 공허할 때:", options: [{ text: "폭식, 쇼핑, 정주행", score: 3 }, { text: "대화", score: 2 }, { text: "일/운동", score: 5 }] },
            { id: 8, text: "쾌락 철학:", options: [{ text: "많을수록 좋다, 제한 싫음", score: 3 }, { text: "절제", score: 2 }, { text: "방해물", score: 1 }] },
            { id: 9, text: "당신의 투쟁:", options: [{ text: "충동 조절 및 과소비", score: 3 }, { text: "동기 부여", score: 1 }, { text: "성질 조절", score: 5 }] },
            { id: 10, text: "자원 (돈/시간):", options: [{ text: "사수해야 함 (결핍 공포)", score: 4 }, { text: "조심스런 공유", score: 3 }, { text: "권력 수단", score: 5 }] },
            { id: 11, text: "친밀감:", options: [{ text: "기 빨림", score: 4 }, { text: "안전함", score: 2 }, { text: "강력함", score: 5 }] },
            { id: 12, text: "깊은 불안:", options: [{ text: "빈털터리/결핍", score: 4 }, { text: "무시당함", score: 2 }, { text: "통제당함", score: 5 }] },
            { id: 13, text: "세상과의 상호작용:", options: [{ text: "강렬한 감각과 정복", score: 5 }, { text: "관찰", score: 3 }, { text: "철수", score: 1 }] },
            { id: 14, text: "관계에서 필요한 것:", options: [{ text: "날것의 강렬함", score: 5 }, { text: "안정", score: 3 }, { text: "거리두기", score: 1 }] },
            { id: 15, text: "지루함:", options: [{ text: "못 참음, 자극 필요", score: 5 }, { text: "생각할 시간", score: 3 }, { text: "자연스러운 상태", score: 1 }] },
            { id: 16, text: "불의를 볼 때:", options: [{ text: "분노 폭발", score: 6 }, { text: "슬프지만 무력함", score: 2 }, { text: "복수 계획", score: 4 }] },
            { id: 17, text: "타인의 평가:", options: [{ text: "위압적/강렬함", score: 6 }, { text: "조용함", score: 2 }, { text: "재밌음/혼란", score: 4 }] },
            { id: 18, text: "분노의 용도:", options: [{ text: "경계 설정 및 통제", score: 6 }, { text: "보호", score: 3 }, { text: "거의 화 안 냄", score: 1 }] },
            { id: 19, text: "실수했을 때:", options: [{ text: "부정함 (난 거의 안 틀림)", score: 7 }, { text: "수치심", score: 2 }, { text: "조용히 수정", score: 4 }] },
            { id: 20, text: "도움이란:", options: [{ text: "주는 것 (받지 않음)", score: 7 }, { text: "감사함", score: 3 }, { text: "너무 비싼 것", score: 4 }] },
            { id: 21, text: "내면 깊은 곳:", options: [{ text: "나는 우월하다", score: 7 }, { text: "나는 결함이 있다", score: 2 }, { text: "나는 투명인간이다", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "지배적 죄악: 나태 (Sloth)", desc: "<strong>[원형: 해리된 영혼]</strong><br>영적 무관심. 고통을 피하려 삶과 단절합니다.<br><strong>해독제:</strong> 행동." },
            { min: 36, max: 55, title: "지배적 죄악: 시기 (Envy)", desc: "<strong>[원형: 비극적 피해자]</strong><br>만성적 결핍감. 고통을 낭만화합니다.<br><strong>해독제:</strong> 평정심." },
            { min: 56, max: 75, title: "지배적 죄악: 탐식 (Gluttony)", desc: "<strong>[원형: 밑 빠진 독]</strong><br>공허의 공포. 소비로 구멍을 메웁니다.<br><strong>해독제:</strong> 절제." },
            { min: 76, max: 90, title: "지배적 죄악: 탐욕 (Greed)", desc: "<strong>[원형: 저장 강박]</strong><br>고갈의 공포. 감정과 자원을 움켜쥡니다.<br><strong>해독제:</strong> 관대함." },
            { min: 91, max: 105, title: "지배적 죄악: 정욕 (Lust)", desc: "<strong>[원형: 정복자]</strong><br>강렬함에 대한 갈망. 힘으로 현실을 굴복시킵니다.<br><strong>해독제:</strong> 부드러움." },
            { min: 106, max: 120, title: "지배적 죄악: 분노 (Wrath)", desc: "<strong>[원형: 처벌자]</strong><br>현실 교정 욕구. 공격성을 정의로 정당화합니다.<br><strong>해독제:</strong> 수용." },
            { min: 121, max: 150, title: "지배적 죄악: 교만 (Pride)", desc: "<strong>[원형: 거짓된 신]</strong><br>의존 거부. 우월감을 위해 남을 돕습니다.<br><strong>해독제:</strong> 겸손." }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Clinical Standard
    "ar": {
        title: "الخطايا السبع المميتة: تحليل سريري",
        desc: "تقييم دقيق من 21 سؤالاً. نتجاوز الحكم الأخلاقي لتحديد الدافع الأساسي ونموذج الظل الذي يسيطر على عقلك الباطن.",
        questions: [
            { id: 1, text: "عندما تصبح الحياة قاسية:", options: [{ text: "نوم، انفصال، مماطلة", score: 1 }, { text: "تشتيت خفيف", score: 3 }, { text: "فرض حل", score: 5 }] },
            { id: 2, text: "علاقتك بإمكانياتك:", options: [{ text: "أضيع حياتي لكنني عالق", score: 1 }, { text: "تقدم بطيء", score: 3 }, { text: "تعظيم عدواني", score: 5 }] },
            { id: 3, text: "الألم العاطفي يسبب:", options: [{ text: "خدر (لامبالاة)", score: 1 }, { text: "حزن/قلق", score: 3 }, { text: "غضب/طاقة", score: 5 }] },
            { id: 4, text: "عندما يملك غيرك ما تريد:", options: [{ text: "ألم عميق بالظلم", score: 2 }, { text: "فضول", score: 3 }, { text: "خطة للتفوق", score: 5 }] },
            { id: 5, text: "تشعر غالباً:", options: [{ text: "الجميع يعرف سر السعادة إلا أنا", score: 2 }, { text: "الحياة عادلة", score: 3 }, { text: "أنا أصنع حظي", score: 5 }] },
            { id: 6, text: "قيمة الذات:", options: [{ text: "مقارنة بالآخرين", score: 2 }, { text: "نمو شخصي", score: 3 }, { text: "هيمنة", score: 5 }] },
            { id: 7, text: "الفراغ الداخلي:", options: [{ text: "طعام، تسوق، مشاهدة", score: 3 }, { text: "محادثة", score: 2 }, { text: "عمل", score: 5 }] },
            { id: 8, text: "فلسفة المتعة:", options: [{ text: "المزيد أفضل", score: 3 }, { text: "الاعتدال", score: 2 }, { text: "تشتيت", score: 1 }] },
            { id: 9, text: "صراعك:", options: [{ text: "الاندفاع والاستهلاك", score: 3 }, { text: "إيجاد دافع", score: 1 }, { text: "التحكم بالغضب", score: 5 }] },
            { id: 10, text: "الموارد (مال/وقت):", options: [{ text: "حراسة (خوف النفاذ)", score: 4 }, { text: "مشاركة حذرة", score: 3 }, { text: "وسيلة للقوة", score: 5 }] },
            { id: 11, text: "الحميمية:", options: [{ text: "استنزاف", score: 4 }, { text: "أمان", score: 2 }, { text: "قوة", score: 5 }] },
            { id: 12, text: "القلق العميق:", options: [{ text: "الحرمان", score: 4 }, { text: "التجاهل", score: 2 }, { text: "التحكم بي", score: 5 }] },
            { id: 13, text: "التفاعل مع العالم:", options: [{ text: "إحساس مكثف وغزو", score: 5 }, { text: "مراقبة", score: 3 }, { text: "انسحاب", score: 1 }] },
            { id: 14, text: "في العلاقات تحتاج:", options: [{ text: "كثافة خام", score: 5 }, { text: "استقرار", score: 3 }, { text: "مسافة", score: 1 }] },
            { id: 15, text: "الملل:", options: [{ text: "لا يطاق", score: 5 }, { text: "وقت للتفكير", score: 3 }, { text: "طبيعي", score: 1 }] },
            { id: 16, text: "عند الظلم:", options: [{ text: "انفجار غضب", score: 6 }, { text: "حزن", score: 2 }, { text: "انتقام", score: 4 }] },
            { id: 17, text: "وصفك:", options: [{ text: "مخيف/مكثف", score: 6 }, { text: "هادئ", score: 2 }, { text: "فوضوي", score: 4 }] },
            { id: 18, text: "الغضب يستخدم لـ:", options: [{ text: "الحدود والسيطرة", score: 6 }, { text: "الحماية", score: 3 }, { text: "نادراً ما أغضب", score: 1 }] },
            { id: 19, text: "عند الخطأ:", options: [{ text: "إنكار", score: 7 }, { text: "خجل", score: 2 }, { text: "تصحيح هادئ", score: 4 }] },
            { id: 20, text: "المساعدة:", options: [{ text: "أعطي ولا أحتاج", score: 7 }, { text: "أقدرها", score: 3 }, { text: "مكلفة جداً", score: 4 }] },
            { id: 21, text: "في العمق:", options: [{ text: "أنا متفوق", score: 7 }, { text: "أنا معيوب", score: 2 }, { text: "أنا غير مرئي", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "خطيئة الكسل (Sloth)", desc: "<strong>[الروح المنفصلة]</strong><br>لامبالاة روحية. تنفصل لتجنب الألم.<br><strong>العلاج:</strong> العمل." },
            { min: 36, max: 55, title: "خطيئة الحسد (Envy)", desc: "<strong>[الضحية]</strong><br>شعور بالنقص. تضفي طابعاً رومانسياً على المعاناة.<br><strong>العلاج:</strong> الرضا." },
            { min: 56, max: 75, title: "خطيئة الشراهة (Gluttony)", desc: "<strong>[الفراغ]</strong><br>خوف من الخواء. تملأه بالاستهلاك.<br><strong>العلاج:</strong> الزهد." },
            { min: 76, max: 90, title: "خطيئة الجشع (Greed)", desc: "<strong>[المكتنز]</strong><br>خوف من النفاذ. تعزل نفسك.<br><strong>العلاج:</strong> الكرم." },
            { min: 91, max: 105, title: "خطيئة الشهوة (Lust)", desc: "<strong>[الفاتح]</strong><br>تعطش للكثافة. تنكر الضعف بالقوة.<br><strong>العلاج:</strong> الرقة." },
            { min: 106, max: 120, title: "خطيئة الغضب (Wrath)", desc: "<strong>[المعاقب]</strong><br>حاجة لتصحيح الواقع. تبرر العدوان بالعدالة.<br><strong>العلاج:</strong> السكينة." },
            { min: 121, max: 150, title: "خطيئة الكبرياء (Pride)", desc: "<strong>[الإله الزائف]</strong><br>رفض التبعية. تساعد لتشعر بالتفوق.<br><strong>العلاج:</strong> التواضع." }
        ]
    },

    // 11. 越南语 (Vietnamese) - Clinical Standard
    "vi": {
        title: "7 Tội Lỗi Chết Người: Phân Tích Lâm Sàng",
        desc: "Đánh giá nghiêm ngặt 21 câu hỏi dựa trên tâm động học. Xác định động lực nguyên thủy và 'Bóng âm' chi phối tiềm thức của bạn.",
        questions: [
            { id: 1, text: "Khi quá tải:", options: [{ text: "Ngủ, lơ đễnh", score: 1 }, { text: "Giải trí nhẹ", score: 3 }, { text: "Ép giải quyết", score: 5 }] },
            { id: 2, text: "Tiềm năng:", options: [{ text: "Lãng phí nhưng kẹt", score: 1 }, { text: "Tiến bộ chậm", score: 3 }, { text: "Tối đa hóa", score: 5 }] },
            { id: 3, text: "Nỗi đau:", options: [{ text: "Tê liệt", score: 1 }, { text: "Buồn/Lo", score: 3 }, { text: "Giận/Năng lượng", score: 5 }] },
            { id: 4, text: "Khi người khác có thứ bạn muốn:", options: [{ text: "Đau đớn bất công", score: 2 }, { text: "Tò mò", score: 3 }, { text: "Lên kế hoạch vượt qua", score: 5 }] },
            { id: 5, text: "Cảm thấy:", options: [{ text: "Mọi người đều biết bí mật hạnh phúc trừ tôi", score: 2 }, { text: "Đời công bằng", score: 3 }, { text: "Tôi tạo vận may", score: 5 }] },
            { id: 6, text: "Giá trị bản thân:", options: [{ text: "So sánh", score: 2 }, { text: "Phát triển", score: 3 }, { text: "Thống trị", score: 5 }] },
            { id: 7, text: "Trống rỗng:", options: [{ text: "Ăn, mua sắm", score: 3 }, { text: "Nói chuyện", score: 2 }, { text: "Làm việc", score: 5 }] },
            { id: 8, text: "Khoái lạc:", options: [{ text: "Càng nhiều càng tốt", score: 3 }, { text: "Điều độ", score: 2 }, { text: "Xao nhãng", score: 1 }] },
            { id: 9, text: "Đấu tranh:", options: [{ text: "Kiểm soát xung động", score: 3 }, { text: "Tìm động lực", score: 1 }, { text: "Kiểm soát giận", score: 5 }] },
            { id: 10, text: "Tài nguyên:", options: [{ text: "Giữ chặt", score: 4 }, { text: "Chia sẻ thận trọng", score: 3 }, { text: "Dùng để lấy quyền lực", score: 5 }] },
            { id: 11, text: "Thân mật:", options: [{ text: "Kiệt sức", score: 4 }, { text: "An toàn", score: 2 }, { text: "Mạnh mẽ", score: 5 }] },
            { id: 12, text: "Lo âu:", options: [{ text: "Mất tất cả", score: 4 }, { text: "Bị phớt lờ", score: 2 }, { text: "Bị kiểm soát", score: 5 }] },
            { id: 13, text: "Tương tác:", options: [{ text: "Cảm giác mạnh", score: 5 }, { text: "Quan sát", score: 3 }, { text: "Rút lui", score: 1 }] },
            { id: 14, text: "Mối quan hệ:", options: [{ text: "Đam mê trần trụi", score: 5 }, { text: "Ổn định", score: 3 }, { text: "Khoảng cách", score: 1 }] },
            { id: 15, text: "Buồn chán:", options: [{ text: "Không chịu nổi", score: 5 }, { text: "Thời gian nghĩ", score: 3 }, { text: "Bình thường", score: 1 }] },
            { id: 16, text: "Bất công:", options: [{ text: "Bùng nổ", score: 6 }, { text: "Buồn", score: 2 }, { text: "Báo thù", score: 4 }] },
            { id: 17, text: "Mô tả:", options: [{ text: "Đáng sợ/Dữ dội", score: 6 }, { text: "Trầm", score: 2 }, { text: "Hỗn loạn", score: 4 }] },
            { id: 18, text: "Giận dữ để:", options: [{ text: "Thiết lập ranh giới", score: 6 }, { text: "Bảo vệ", score: 3 }, { text: "Hiếm khi giận", score: 1 }] },
            { id: 19, text: "Sai lầm:", options: [{ text: "Phủ nhận", score: 7 }, { text: "Xấu hổ", score: 2 }, { text: "Sửa âm thầm", score: 4 }] },
            { id: 20, text: "Giúp đỡ:", options: [{ text: "Cho, không nhận", score: 7 }, { text: "Trân trọng", score: 3 }, { text: "Cái giá quá đắt", score: 4 }] },
            { id: 21, text: "Thâm tâm:", options: [{ text: "Tôi thượng đẳng", score: 7 }, { text: "Tôi khiếm khuyết", score: 2 }, { text: "Tôi vô hình", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "Tội lỗi: LƯỜI BIẾNG (Sloth)", desc: "<strong>[Linh hồn tách rời]</strong><br>Thờ ơ tâm linh. Ngắt kết nối để tránh đau đớn.<br><strong>Thuốc giải:</strong> Hành động." },
            { min: 36, max: 55, title: "Tội lỗi: ĐỐ KỴ (Envy)", desc: "<strong>[Nạn nhân bi kịch]</strong><br>Cảm giác thiếu hụt. Lãng mạn hóa đau khổ.<br><strong>Thuốc giải:</strong> Bình thản." },
            { min: 56, max: 75, title: "Tội lỗi: PHÀM ĂN (Gluttony)", desc: "<strong>[Hố không đáy]</strong><br>Sợ trống rỗng. Lấp đầy bằng tiêu thụ.<br><strong>Thuốc giải:</strong> Tiết chế." },
            { min: 76, max: 90, title: "Tội lỗi: THAM LAM (Greed)", desc: "<strong>[Kẻ tích trữ]</strong><br>Sợ cạn kiệt. Cô lập để an toàn.<br><strong>Thuốc giải:</strong> Hào phóng." },
            { min: 91, max: 105, title: "Tội lỗi: DÂM DỤC (Lust)", desc: "<strong>[Kẻ chinh phục]</strong><br>Khát khao cường độ. Che giấu yếu đuối bằng sức mạnh.<br><strong>Thuốc giải:</strong> Dịu dàng." },
            { min: 106, max: 120, title: "Tội lỗi: PHẪN NỘ (Wrath)", desc: "<strong>[Kẻ trừng phạt]</strong><br>Muốn sửa chữa thực tại. Biện minh hung hăng là công lý.<br><strong>Thuốc giải:</strong> Thanh thản." },
            { min: 121, max: 150, title: "Tội lỗi: KIÊU NGẠO (Pride)", desc: "<strong>[Thần giả]</strong><br>Từ chối phụ thuộc. Giúp người để thấy bề trên.<br><strong>Thuốc giải:</strong> Khiêm tốn." }
        ]
    },

    // 12. 泰语 (Thai) - Clinical Standard
    "th": {
        title: "บาป 7 ประการ: การวิเคราะห์ทางคลินิก",
        desc: "แบบประเมิน 21 ข้อที่เข้มงวดตามหลักจิตพลวัต ระบุแรงขับดิบและ 'เงา' ที่ครอบงำจิตใต้สำนึกของคุณ",
        questions: [
            { id: 1, text: "เมื่อชีวิตหนักหนา:", options: [{ text: "หลับ/เหม่อ/ผลัดวัน", score: 1 }, { text: "หาอะไรทำแก้เบื่อ", score: 3 }, { text: "บังคับแก้ปัญหา", score: 5 }] },
            { id: 2, text: "ศักยภาพ:", options: [{ text: "เสียดายแต่ขยับไม่ได้", score: 1 }, { text: "คืบหน้าช้า", score: 3 }, { text: "เร่งเต็มที่", score: 5 }] },
            { id: 3, text: "ความเจ็บปวด:", options: [{ text: "ชา (เฉยเมย)", score: 1 }, { text: "เศร้า/กังวล", score: 3 }, { text: "โกรธ/มีพลัง", score: 5 }] },
            { id: 4, text: "เมื่อคนอื่นมีสิ่งที่คุณอยากได้:", options: [{ text: "เจ็บปวดลึกๆ", score: 2 }, { text: "สงสัย", score: 3 }, { text: "วางแผนแซงหน้า", score: 5 }] },
            { id: 5, text: "รู้สึกว่า:", options: [{ text: "ทุกคนรู้เคล็ดลับความสุขยกเว้นฉัน", score: 2 }, { text: "ชีวิตยุติธรรม", score: 3 }, { text: "ฉันสร้างโชคเอง", score: 5 }] },
            { id: 6, text: "คุณค่าตนเอง:", options: [{ text: "เปรียบเทียบ", score: 2 }, { text: "การเติบโต", score: 3 }, { text: "อำนาจ", score: 5 }] },
            { id: 7, text: "ความว่างเปล่า:", options: [{ text: "กิน/ช้อป", score: 3 }, { text: "คุยกับเพื่อน", score: 2 }, { text: "ทำงาน", score: 5 }] },
            { id: 8, text: "ความสุข:", options: [{ text: "ยิ่งมากยิ่งดี", score: 3 }, { text: "ทางสายกลาง", score: 2 }, { text: "สิ่งรบกวน", score: 1 }] },
            { id: 9, text: "ปัญหาของคุณ:", options: [{ text: "หุนหัน/บริโภคเกิน", score: 3 }, { text: "หาแรงจูงใจ", score: 1 }, { text: "คุมอารมณ์", score: 5 }] },
            { id: 10, text: "ทรัพยากร:", options: [{ text: "หวงแหน (กลัวหมด)", score: 4 }, { text: "แบ่งปันอย่างระวัง", score: 3 }, { text: "ใช้เพื่ออำนาจ", score: 5 }] },
            { id: 11, text: "ความใกล้ชิด:", options: [{ text: "หมดแรง", score: 4 }, { text: "ปลอดภัย", score: 2 }, { text: "ทรงพลัง", score: 5 }] },
            { id: 12, text: "ความกลัวลึกๆ:", options: [{ text: "ไม่เหลืออะไร", score: 4 }, { text: "ถูกเมิน", score: 2 }, { text: "ถูกคุม", score: 5 }] },
            { id: 13, text: "ปฏิสัมพันธ์โลก:", options: [{ text: "รุนแรง/พิชิต", score: 5 }, { text: "สังเกต", score: 3 }, { text: "ถอยห่าง", score: 1 }] },
            { id: 14, text: "ความสัมพันธ์:", options: [{ text: "ความดิบเถื่อน", score: 5 }, { text: "มั่นคง", score: 3 }, { text: "ระยะห่าง", score: 1 }] },
            { id: 15, text: "ความเบื่อ:", options: [{ text: "ทนไม่ได้", score: 5 }, { text: "เวลาคิด", score: 3 }, { text: "ปกติ", score: 1 }] },
            { id: 16, text: "ความไม่ยุติธรรม:", options: [{ text: "ระเบิดอารมณ์", score: 6 }, { text: "เศร้า", score: 2 }, { text: "แก้แค้น", score: 4 }] },
            { id: 17, text: "คำอธิบายตัวคุณ:", options: [{ text: "น่ากลัว/รุนแรง", score: 6 }, { text: "เงียบ", score: 2 }, { text: "วุ่นวาย", score: 4 }] },
            { id: 18, text: "ความโกรธใช้เพื่อ:", options: [{ text: "กำหนดขอบเขต", score: 6 }, { text: "ปกป้อง", score: 3 }, { text: "ไม่ค่อยโกรธ", score: 1 }] },
            { id: 19, text: "เมื่อผิดพลาด:", options: [{ text: "ปฏิเสธ", score: 7 }, { text: "อาย", score: 2 }, { text: "แก้เงียบๆ", score: 4 }] },
            { id: 20, text: "ความช่วยเหลือ:", options: [{ text: "ให้แต่ไม่รับ", score: 7 }, { text: "ขอบคุณ", score: 3 }, { text: "แพงไป", score: 4 }] },
            { id: 21, text: "ลึกๆ แล้ว:", options: [{ text: "ฉันเหนือกว่า", score: 7 }, { text: "ฉันมีตำหนิ", score: 2 }, { text: "ฉันไร้ตัวตน", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "เกียจคร้าน (Sloth)", desc: "<strong>[วิญญาณที่แยกตัว]</strong><br>ตัดขาดจากชีวิตเพื่อเลี่ยงเจ็บปวด.<br><strong>ทางแก้:</strong> ลงมือทำ." },
            { min: 36, max: 55, title: "ริษยา (Envy)", desc: "<strong>[เหยื่อโศกนาฏกรรม]</strong><br>รู้สึกขาดแคลนตลอดเวลา.<br><strong>ทางแก้:</strong> ความสงบใจ." },
            { min: 56, max: 75, title: "ตะกละ (Gluttony)", desc: "<strong>[หลุมไร้ก้น]</strong><br>กลัวความว่างเปล่า ถมด้วยการเสพ.<br><strong>ทางแก้:</strong> ความพอดี." },
            { min: 76, max: 90, title: "โลภะ (Greed)", desc: "<strong>[ผู้สะสม]</strong><br>กลัวหมดตัว แยกตัวเพื่อความปลอดภัย.<br><strong>ทางแก้:</strong> การให้." },
            { min: 91, max: 105, title: "ราคะ (Lust)", desc: "<strong>[ผู้พิชิต]</strong><br>ต้องการความรุนแรง ปฏิเสธความอ่อนแอ.<br><strong>ทางแก้:</strong> ความอ่อนโยน." },
            { min: 106, max: 120, title: "โทสะ (Wrath)", desc: "<strong>[ผู้ลงทัณฑ์]</strong><br>ต้องการแก้โลก อ้างความยุติธรรม.<br><strong>ทางแก้:</strong> การยอมรับ." },
            { min: 121, max: 150, title: "อัตตา (Pride)", desc: "<strong>[พระเจ้าจอมปลอม]</strong><br>ไม่พึ่งใคร ช่วยคนเพื่อรู้สึกเหนือกว่า.<br><strong>ทางแก้:</strong> ความถ่อมตน." }
        ]
    },

    // 13. 印尼语 (Indonesian) - Clinical Standard
    "id": {
        title: "Tujuh Dosa Mematikan: Analisis Klinis",
        desc: "Penilaian ketat 21 pertanyaan berdasarkan psikodinamika. Mengidentifikasi dorongan utama dan 'Bayangan' yang mendominasi alam bawah sadar Anda.",
        questions: [
            { id: 1, text: "Saat kewalahan:", options: [{ text: "Tidur/Melamun", score: 1 }, { text: "Hiburan ringan", score: 3 }, { text: "Paksa solusi", score: 5 }] },
            { id: 2, text: "Potensi diri:", options: [{ text: "Sia-sia tapi macet", score: 1 }, { text: "Lambat", score: 3 }, { text: "Agresif", score: 5 }] },
            { id: 3, text: "Rasa sakit:", options: [{ text: "Mati rasa", score: 1 }, { text: "Sedih/Cemas", score: 3 }, { text: "Marah/Energi", score: 5 }] },
            { id: 4, text: "Orang lain punya maumu:", options: [{ text: "Sakit hati", score: 2 }, { text: "Kepo", score: 3 }, { text: "Rencana salip", score: 5 }] },
            { id: 5, text: "Perasaan:", options: [{ text: "Semua tahu rahasia bahagia kecuali saya", score: 2 }, { text: "Hidup adil", score: 3 }, { text: "Saya ciptakan hoki", score: 5 }] },
            { id: 6, text: "Harga diri:", options: [{ text: "Bandingkan", score: 2 }, { text: "Tumbuh", score: 3 }, { text: "Dominasi", score: 5 }] },
            { id: 7, text: "Kekosongan:", options: [{ text: "Makan/Belanja", score: 3 }, { text: "Ngobrol", score: 2 }, { text: "Kerja", score: 5 }] },
            { id: 8, text: "Kesenangan:", options: [{ text: "Makin banyak makin baik", score: 3 }, { text: "Sedang", score: 2 }, { text: "Gangguan", score: 1 }] },
            { id: 9, text: "Perjuangan:", options: [{ text: "Impulsif", score: 3 }, { text: "Cari motivasi", score: 1 }, { text: "Kontrol emosi", score: 5 }] },
            { id: 10, text: "Sumber daya:", options: [{ text: "Jaga ketat", score: 4 }, { text: "Bagi hati-hati", score: 3 }, { text: "Untuk kuasa", score: 5 }] },
            { id: 11, text: "Intimasi:", options: [{ text: "Lelah", score: 4 }, { text: "Aman", score: 2 }, { text: "Kuat", score: 5 }] },
            { id: 12, text: "Kecemasan:", options: [{ text: "Habis/Kosong", score: 4 }, { text: "Diabaikan", score: 2 }, { text: "Dikontrol", score: 5 }] },
            { id: 13, text: "Interaksi:", options: [{ text: "Intens/Takluk", score: 5 }, { text: "Amati", score: 3 }, { text: "Mundur", score: 1 }] },
            { id: 14, text: "Hubungan:", options: [{ text: "Gairah mentah", score: 5 }, { text: "Stabil", score: 3 }, { text: "Jarak", score: 1 }] },
            { id: 15, text: "Bosan:", options: [{ text: "Tak tahan", score: 5 }, { text: "Waktu mikir", score: 3 }, { text: "Wajar", score: 1 }] },
            { id: 16, text: "Ketidakadilan:", options: [{ text: "Meledak", score: 6 }, { text: "Sedih", score: 2 }, { text: "Balas dendam", score: 4 }] },
            { id: 17, text: "Deskripsi:", options: [{ text: "Seram/Intens", score: 6 }, { text: "Diam", score: 2 }, { text: "Kacau", score: 4 }] },
            { id: 18, text: "Marah untuk:", options: [{ text: "Kontrol", score: 6 }, { text: "Lindungi", score: 3 }, { text: "Jarang marah", score: 1 }] },
            { id: 19, text: "Salah:", options: [{ text: "Sangkal", score: 7 }, { text: "Malu", score: 2 }, { text: "Perbaiki diam-diam", score: 4 }] },
            { id: 20, text: "Bantuan:", options: [{ text: "Beri, tak butuh", score: 7 }, { text: "Hargai", score: 3 }, { text: "Mahal", score: 4 }] },
            { id: 21, text: "Dalam hati:", options: [{ text: "Saya superior", score: 7 }, { text: "Saya cacat", score: 2 }, { text: "Saya tak terlihat", score: 1 }] }
        ],
        results: [
            { min: 0, max: 35, title: "Sloth (Kemalasan)", desc: "<strong>[Jiwa Terpisah]</strong><br>Apatis spiritual. Putus koneksi demi hindari sakit.<br><strong>Obat:</strong> Aksi." },
            { min: 36, max: 55, title: "Envy (Iri Hati)", desc: "<strong>[Korban Tragis]</strong><br>Rasa kurang. Meromantisasi penderitaan.<br><strong>Obat:</strong> Ketenangan." },
            { min: 56, max: 75, title: "Gluttony (Kerakusan)", desc: "<strong>[Lubang Tanpa Dasar]</strong><br>Takut kosong. Isi dengan konsumsi.<br><strong>Obat:</strong> Kesederhanaan." },
            { min: 76, max: 90, title: "Greed (Keserakahan)", desc: "<strong>[Penimbun]</strong><br>Takut habis. Mengisolasi diri.<br><strong>Obat:</strong> Kemurahan hati." },
            { min: 91, max: 105, title: "Lust (Hawa Nafsu)", desc: "<strong>[Penakluk]</strong><br>Haus intensitas. Menolak lemah.<br><strong>Obat:</strong> Kelembutan." },
            { min: 106, max: 120, title: "Wrath (Amarah)", desc: "<strong>[Penghukum]</strong><br>Ingin koreksi dunia. Agresi sebagai keadilan.<br><strong>Obat:</strong> Penerimaan." },
            { min: 121, max: 150, title: "Pride (Kesombongan)", desc: "<strong>[Dewa Palsu]</strong><br>Tolak butuh orang. Bantu demi superioritas.<br><strong>Obat:</strong> Kerendahan hati." }
        ]
    }
};