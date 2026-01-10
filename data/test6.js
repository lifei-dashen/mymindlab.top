// data/test6.js
// 穿越古代角色与命运评估 (Ancient Archetype & Destiny Assessment)
// 基于荣格十二原型 (Jungian Archetypes) 与 Keirsey 气质类型
// 评估维度：权力意志、战略思维、审美追求、道德准则

const quizDataMulti = {
    // 1. 英语 (English) - Expert Level
    "en": {
        title: "Ancient Archetype Assessment",
        desc: "Based on Jungian Psychology. Through 24 historical dilemmas, we decode your subconscious power dynamics and reveal your true destiny in an ancient era.",
        questions: [
            // --- Context: Crisis Management (Power & Control) ---
            { id: 1, text: "Enemy troops are approaching the city gates. Your immediate instinct:", options: [{ text: "Escape to the mountains to preserve culture", score: 1 }, { text: "Devise a trap or diplomatic trick", score: 3 }, { text: "Lead the army to fight head-on", score: 5 }] },
            { id: 2, text: "A famine strikes the kingdom. You:", options: [{ text: "Write a poem about the suffering", score: 1 }, { text: "Calculate grain reserves and rationing", score: 3 }, { text: "Punish corrupt officials and force distribution", score: 5 }] },
            { id: 3, text: "A subordinate betrays you. You:", options: [{ text: "Forgive them, understanding human nature", score: 1 }, { text: "Exile them to a distant land", score: 3 }, { text: "Execute them to set an example", score: 5 }] },
            { id: 4, text: "The Emperor asks for your opinion on a new law.", options: [{ text: "I speak about its moral/spiritual impact", score: 1 }, { text: "I analyze its long-term economic effects", score: 3 }, { text: "I assess if it strengthens our authority", score: 5 }] },

            // --- Context: Lifestyle & Values (Aesthetics vs. Logic) ---
            { id: 5, text: "Your ideal residence would be:", options: [{ text: "A bamboo hut in a misty forest", score: 1 }, { text: "A library filled with scrolls and maps", score: 3 }, { text: "A grand palace or fortress", score: 5 }] },
            { id: 6, text: "You have free time. You spend it:", options: [{ text: "Playing music or painting", score: 1 }, { text: "Playing Chess/Go or reading history", score: 3 }, { text: "Practicing archery or hunting", score: 5 }] },
            { id: 7, text: "What do you value most?", options: [{ text: "Freedom and Beauty", score: 1 }, { text: "Wisdom and Strategy", score: 3 }, { text: "Order and Power", score: 5 }] },
            { id: 8, text: "Which object appeals to you?", options: [{ text: "An ancient jade flute", score: 1 }, { text: "A compass or astrolabe", score: 3 }, { text: "A heavy bronze sword", score: 5 }] },

            // --- Context: Social Dynamics (Influence) ---
            { id: 9, text: "In a royal banquet, you are:", options: [{ text: "The mysterious guest in the corner", score: 1 }, { text: "The advisor whispering to the King", score: 3 }, { text: "The center of attention, toasting everyone", score: 5 }] },
            { id: 10, text: "How do you win people's hearts?", options: [{ text: "Through art and empathy", score: 1 }, { text: "Through logic and solving their problems", score: 3 }, { text: "Through charisma and strength", score: 5 }] },
            { id: 11, text: "You witness a crime on the street.", options: [{ text: "I reflect on the darkness of society", score: 1 }, { text: "I find a way to report it anonymously", score: 3 }, { text: "I intervene immediately", score: 5 }] },
            { id: 12, text: "Your view on 'Rules':", options: [{ text: "They stifle the soul", score: 1 }, { text: "They are useful tools if logical", score: 3 }, { text: "They are absolute and necessary", score: 5 }] },

            // --- Context: Strategic Thinking ---
            { id: 13, text: "To win a war, the most important thing is:", options: [{ text: "Morale and belief", score: 1 }, { text: "Logistics and terrain", score: 3 }, { text: "Discipline and numbers", score: 5 }] },
            { id: 14, text: "You are offered a bribe.", options: [{ text: "I reject it; material things don't matter", score: 1 }, { text: "I calculate the risk of getting caught", score: 3 }, { text: "I am insulted and arrest the briber", score: 5 }] },
            { id: 15, text: "The ultimate goal of life is:", options: [{ text: "Self-expression and transcendence", score: 1 }, { text: "Understanding the universe", score: 3 }, { text: "Leaving a legacy of dominion", score: 5 }] },
            { id: 16, text: "When facing a rival:", options: [{ text: "I ignore them", score: 1 }, { text: "I outsmart them", score: 3 }, { text: "I crush them", score: 5 }] },

            // --- Context: Legacy & End Game ---
            { id: 17, text: "If you could change one thing about the world:", options: [{ text: "More love and less greed", score: 1 }, { text: "More education and reason", score: 3 }, { text: "More stability and law", score: 5 }] },
            { id: 18, text: "How do you handle defeat?", options: [{ text: "Retreat into nature to heal", score: 1 }, { text: "Analyze what went wrong", score: 3 }, { text: "Plot revenge immediately", score: 5 }] },
            { id: 19, text: "Your preferred weapon:", options: [{ text: "Words or Music", score: 1 }, { text: "Secrets or Poison", score: 3 }, { text: "Army or Spear", score: 5 }] },
            { id: 20, text: "A secret society invites you to join.", options: [{ text: "No, I value my independence", score: 1 }, { text: "Yes, if I can learn their secrets", score: 3 }, { text: "Yes, if I can lead them", score: 5 }] },

            // --- Context: Deep Psychology ---
            { id: 21, text: "Chaos is:", options: [{ text: "Beautiful", score: 1 }, { text: "A puzzle to solve", score: 3 }, { text: "A threat to be eliminated", score: 5 }] },
            { id: 22, text: "Authority is:", options: [{ text: "An illusion", score: 1 }, { text: "A necessary structure", score: 3 }, { text: "My natural right", score: 5 }] },
            { id: 23, text: "History remembers those who:", options: [{ text: "Created beauty", score: 1 }, { text: "Advanced knowledge", score: 3 }, { text: "Conquered lands", score: 5 }] },
            { id: 24, text: "In your final moments, you want to be surrounded by:", options: [{ text: "Nature and peace", score: 1 }, { text: "My books and students", score: 3 }, { text: "My subjects and trophies", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Role: The Carefree Commoner / Wandering Performer", 
                desc: "<strong>[Archetype: The Jester / The Realist]</strong><br><br>" +
                      "<strong>🔮 Psychological Profile:</strong><br>In ancient times, you would be a tavern owner, a traveling street performer, or a happy villager. You possess high 'Sensing' (Se). You have seen through the vanity of power struggles and realized that survival and simple joys are the only truth. You are adaptable, street-smart, and value freedom from responsibility above all.<br><br>" +
                      "<strong>🏹 Modern Equivalent:</strong><br>Freelancer, Entertainer, Gig Worker, Digital Nomad." 
            },
            { 
                min: 46, 
                max: 65, 
                title: "Role: The Wealthy Merchant / Romantic Scholar", 
                desc: "<strong>[Archetype: The Lover / The Explorer]</strong><br><br>" +
                      "<strong>🔮 Psychological Profile:</strong><br>You are a patron of the arts or a savvy business tycoon. You value aesthetics, wealth, and personal expression. You don't want to rule the world, you want to buy it or beautify it. You stay away from politics to protect your lifestyle.<br><br>" +
                      "<strong>🏹 Modern Equivalent:</strong><br>Entrepreneur, Investor, Art Collector, Influencer." 
            },
            { 
                min: 66, 
                max: 85, 
                title: "Role: The Loyal General / Iron Minister", 
                desc: "<strong>[Archetype: The Caregiver / The Warrior]</strong><br><br>" +
                      "<strong>🔮 Psychological Profile:</strong><br>You are the backbone of the empire. You value duty, honor, and structure. You may not seek the throne, but the throne cannot exist without you. You are willing to sacrifice personal feelings for the greater good and stability of the realm.<br><br>" +
                      "<strong>🏹 Modern Equivalent:</strong><br>Senior Manager, Civil Servant, Lawyer, Operations Director." 
            },
            { 
                min: 86, 
                max: 100, 
                title: "Role: The Shadow Master / Kingmaker", 
                desc: "<strong>[Archetype: The Sage / The Magician]</strong><br><br>" +
                      "<strong>🔮 Psychological Profile:</strong><br>You operate in the shadows. Like Machiavelli or an ancient spymaster, you control outcomes through intelligence and manipulation. You see humans as chess pieces. You don't need the crown, because you control the person wearing it.<br><br>" +
                      "<strong>🏹 Modern Equivalent:</strong><br>Strategic Consultant, Intelligence Officer, Campaign Manager." 
            },
            { 
                min: 101, 
                max: 120, 
                title: "Role: The Eternal Emperor / Supreme Conqueror", 
                desc: "<strong>[Archetype: The Ruler / The Hero]</strong><br><br>" +
                      "<strong>🔮 Psychological Profile:</strong><br>You have the soul of Qin Shi Huang or Caesar. Your will to power is absolute. You have a vision for a new world order and the ruthlessness to build it. You thrive on pressure and responsibility, believing that only you can lead the world to glory.<br><br>" +
                      "<strong>🏹 Modern Equivalent:</strong><br>CEO, Founder, Political Leader, Industry Titan." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - Expert Level
    "zh": {
        title: "穿越古代角色与命运评估",
        desc: "基于荣格心理学原型。通过24道深度情境题，解码你的潜意识权力结构，揭示你在古代的真实身份。",
        questions: [
            // 场景：危机管理
            { id: 1, text: "敌军兵临城下，你的第一反应是：", options: [{ text: "带上珍贵的典籍归隐山林", score: 1 }, { text: "设下空城计或离间计", score: 3 }, { text: "披挂上阵，正面迎敌", score: 5 }] },
            { id: 2, text: "国家遭遇大饥荒，你会：", options: [{ text: "写诗记录百姓的疾苦", score: 1 }, { text: "计算粮草储备，实行配给制", score: 3 }, { text: "严惩贪官，强制富户捐粮", score: 5 }] },
            { id: 3, text: "你的亲信背叛了你，你会：", options: [{ text: "感叹人性无常，放他走", score: 1 }, { text: "将其流放边疆，永不录用", score: 3 }, { text: "立刻斩首，杀鸡儆猴", score: 5 }] },
            { id: 4, text: "皇帝问你对新政法的看法：", options: [{ text: "从道德教化的角度评价", score: 1 }, { text: "分析其对经济的长远影响", score: 3 }, { text: "评估其是否巩固了皇权", score: 5 }] },

            // 场景：生活与价值观
            { id: 5, text: "你理想的居所是：", options: [{ text: "云深不知处的竹林茅屋", score: 1 }, { text: "藏书万卷的密室", score: 3 }, { text: "俯瞰天下的宏伟宫殿", score: 5 }] },
            { id: 6, text: "闲暇时光，你会选择：", options: [{ text: "抚琴、作画或吟诗", score: 1 }, { text: "下棋、研读兵法或史书", score: 3 }, { text: "骑射、狩猎或练武", score: 5 }] },
            { id: 7, text: "你最看重的东西是：", options: [{ text: "自由与美", score: 1 }, { text: "智慧与谋略", score: 3 }, { text: "秩序与权力", score: 5 }] },
            { id: 8, text: "如果要选一件随身物品：", options: [{ text: "一支紫玉箫", score: 1 }, { text: "一个精密的星盘", score: 3 }, { text: "一把尚方宝剑", score: 5 }] },

            // 场景：社交与影响力
            { id: 9, text: "在皇家宴席上，你是：", options: [{ text: "角落里那个神秘的旁观者", score: 1 }, { text: "在君王耳边低语的谋士", score: 3 }, { text: "接受众人敬酒的焦点", score: 5 }] },
            { id: 10, text: "你如何赢得人心？", options: [{ text: "通过才情与共情", score: 1 }, { text: "通过帮他们解决难题", score: 3 }, { text: "通过威严与恩赏", score: 5 }] },
            { id: 11, text: "路见不平，你会：", options: [{ text: "感叹世态炎凉", score: 1 }, { text: "暗中搜集证据举报", score: 3 }, { text: "拔刀相助", score: 5 }] },
            { id: 12, text: "你对“规则”的看法：", options: [{ text: "那是对灵魂的束缚", score: 1 }, { text: "那是好用的工具", score: 3 }, { text: "那是必须遵守的铁律", score: 5 }] },

            // 场景：战略思维
            { id: 13, text: "想要赢得战争，最重要的是：", options: [{ text: "信念与天命", score: 1 }, { text: "地形与补给", score: 3 }, { text: "军纪与兵力", score: 5 }] },
            { id: 14, text: "有人试图贿赂你：", options: [{ text: "拒绝，视金钱如粪土", score: 1 }, { text: "计算风险与收益", score: 3 }, { text: "感到被冒犯，将其拿下", score: 5 }] },
            { id: 15, text: "人生的终极目标是：", options: [{ text: "逍遥自在，自我超越", score: 1 }, { text: "洞悉宇宙的真理", score: 3 }, { text: "建立不世之功业", score: 5 }] },
            { id: 16, text: "面对竞争对手：", options: [{ text: "无视他", score: 1 }, { text: "算计他", score: 3 }, { text: "碾碎他", score: 5 }] },

            // 场景：遗产与终局
            { id: 17, text: "如果你能改变世界的一件事：", options: [{ text: "让人心更纯善", score: 1 }, { text: "普及教育和理性", score: 3 }, { text: "建立永恒的秩序", score: 5 }] },
            { id: 18, text: "遭遇惨败后，你会：", options: [{ text: "归隐田园疗伤", score: 1 }, { text: "复盘分析原因", score: 3 }, { text: "卧薪尝胆，图谋东山再起", score: 5 }] },
            { id: 19, text: "你偏好的武器：", options: [{ text: "笔或乐器", score: 1 }, { text: "暗器或毒药", score: 3 }, { text: "长枪或军队", score: 5 }] },
            { id: 20, text: "一个神秘组织邀请你加入：", options: [{ text: "拒绝，我独来独往", score: 1 }, { text: "加入，探听秘密", score: 3 }, { text: "加入，然后掌控它", score: 5 }] },

            // 场景：深层心理
            { id: 21, text: "混乱（Chaos）是：", options: [{ text: "一种美", score: 1 }, { text: "待解的谜题", score: 3 }, { text: "必须消灭的威胁", score: 5 }] },
            { id: 22, text: "权威（Authority）是：", options: [{ text: "虚幻的", score: 1 }, { text: "必要的架构", score: 3 }, { text: "我与生俱来的权利", score: 5 }] },
            { id: 23, text: "历史会记住什么样的人？", options: [{ text: "创造美的人", score: 1 }, { text: "推动认知的人", score: 3 }, { text: "征服版图的人", score: 5 }] },
            { id: 24, text: "在生命的最后时刻，你希望身边是：", options: [{ text: "清风明月", score: 1 }, { text: "我的著作和门徒", score: 3 }, { text: "我的臣民和功勋", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "角色：市井闲人 / 江湖戏子", 
                desc: "<strong>【荣格原型】：弄臣 / 现实主义者 (The Jester)</strong><br><br>" +
                      "<strong>🔮 心理画像：</strong><br>如果在古代，你是酒馆老板、江湖艺人或逍遥散人。你拥有极高的“外倾感觉”(Se)。你看透了朝堂争斗的虚无，认为活着和快乐才是唯一的真理。你拥有极强的生存智慧（Street Smart），圆滑世故，不愿被责任束缚。虽然没有滔天的权势，但你拥有最宝贵的自由。<br><br>" +
                      "<strong>🏹 现代映射：</strong><br>自由职业者、博主、斜杠青年、享乐主义者。" 
            },
            { 
                min: 46, 
                max: 65, 
                title: "角色：京城首富 / 风流名士", 
                desc: "<strong>【荣格原型】：情人 / 探索者 (The Lover)</strong><br><br>" +
                      "<strong>🔮 心理画像：</strong><br>你是腰缠万贯的巨贾，或是才高八斗的风流才子。你追求美学、财富和个人表达。你对统治世界没兴趣，你只想买下世界或者装点世界。你懂得明哲保身，用金钱或才情构建起自己的安乐窝。<br><br>" +
                      "<strong>🏹 现代映射：</strong><br>企业家、投资人、艺术家、时尚名流。" 
            },
            { 
                min: 66, 
                max: 85, 
                title: "角色：镇国将军 / 忠臣良相", 
                desc: "<strong>【荣格原型】：守护者 / 战士 (The Warrior)</strong><br><br>" +
                      "<strong>🔮 心理画像：</strong><br>你是帝国的脊梁。你看重责任、荣誉和秩序。你或许没有篡位的野心，但没有你，王朝就会崩塌。你愿意为了大局和稳定牺牲小我。你是典型的“以此身许国”的实干家，深受爱戴。<br><br>" +
                      "<strong>🏹 现代映射：</strong><br>高管、公务员、律师、运营总监、技术骨干。" 
            },
            { 
                min: 86, 
                max: 100, 
                title: "角色：权臣 / 幕后操盘手", 
                desc: "<strong>【荣格原型】：智者 / 魔术师 (The Magician)</strong><br><br>" +
                      "<strong>🔮 心理画像：</strong><br>你是像张良、司马懿一样的顶级谋士。你不需要站在台前接受欢呼，因为你享受的是在幕后操纵局势的快感。你洞悉人性弱点，把所有人都当作棋子。你离皇位只有一步之遥，但你更喜欢控制坐在皇位上的人。<br><br>" +
                      "<strong>🏹 现代映射：</strong><br>战略顾问、幕僚长、投行高管、科学家。" 
            },
            { 
                min: 101, 
                max: 120, 
                title: "角色：千古一帝 / 乱世霸主", 
                desc: "<strong>【荣格原型】：统治者 (The Ruler)</strong><br><br>" +
                      "<strong>🔮 心理画像：</strong><br>你拥有秦始皇或汉武帝的灵魂。你的权力意志是绝对的。你无法忍受低效和混乱，你的人生使命就是建立秩序和统御万物。你拥有常人难以企及的决断力和抗压能力，为了开创盛世，你愿意背负孤独。<br><br>" +
                      "<strong>🏹 现代映射：</strong><br>创始人、CEO、行业领袖、政治家。" 
            }
        ]
    },

// 3. 德语 (German) - Professional
    "de": {
        title: "Antike Archetypen & Schicksalsanalyse",
        desc: "Basierend auf C.G. Jung. 24 Fragen entschlüsseln Ihre unterbewusste Machtdynamik und enthüllen Ihre Rolle in einer vergangenen Ära.",
        questions: [
            // (此处为占位符，题目逻辑与EN一致，篇幅原因略去题目部分，直接展示5层级结果)
            { id: 1, text: "Feindliche Truppen nähern sich. Ihr Instinkt:", options: [{ text: "Flucht in die Berge", score: 1 }, { text: "Diplomatie/Falle", score: 3 }, { text: "Kampf anführen", score: 5 }] },
            { id: 2, text: "Hungersnot im Königreich:", options: [{ text: "Gedicht über das Leid", score: 1 }, { text: "Vorräte rationieren", score: 3 }, { text: "Korrupte bestrafen", score: 5 }] },
            { id: 3, text: "Verrat durch Untergebenen:", options: [{ text: "Vergeben", score: 1 }, { text: "Verbannen", score: 3 }, { text: "Hinrichten", score: 5 }] },
            { id: 4, text: "Meinung zu neuem Gesetz:", options: [{ text: "Moralische Wirkung", score: 1 }, { text: "Wirtschaftliche Wirkung", score: 3 }, { text: "Stärkung der Macht", score: 5 }] },
            { id: 5, text: "Idealer Wohnsitz:", options: [{ text: "Hütte im Wald", score: 1 }, { text: "Bibliothek", score: 3 }, { text: "Palast", score: 5 }] },
            { id: 6, text: "Freizeit:", options: [{ text: "Musik/Kunst", score: 1 }, { text: "Strategie/Lesen", score: 3 }, { text: "Jagd/Kampf", score: 5 }] },
            { id: 7, text: "Höchster Wert:", options: [{ text: "Freiheit", score: 1 }, { text: "Weisheit", score: 3 }, { text: "Macht", score: 5 }] },
            { id: 8, text: "Objekt der Wahl:", options: [{ text: "Flöte", score: 1 }, { text: "Kompass", score: 3 }, { text: "Schwert", score: 5 }] },
            { id: 9, text: "Bankett:", options: [{ text: "Beobachter", score: 1 }, { text: "Berater", score: 3 }, { text: "Mittelpunkt", score: 5 }] },
            { id: 10, text: "Herzen gewinnen:", options: [{ text: "Empathie", score: 1 }, { text: "Logik", score: 3 }, { text: "Charisma", score: 5 }] },
            { id: 11, text: "Verbrechen gesehen:", options: [{ text: "Reflektieren", score: 1 }, { text: "Melden", score: 3 }, { text: "Eingreifen", score: 5 }] },
            { id: 12, text: "Regeln sind:", options: [{ text: "Einschränkend", score: 1 }, { text: "Nützlich", score: 3 }, { text: "Notwendig", score: 5 }] },
            { id: 13, text: "Krieg gewinnen:", options: [{ text: "Moral", score: 1 }, { text: "Logistik", score: 3 }, { text: "Disziplin", score: 5 }] },
            { id: 14, text: "Bestechung:", options: [{ text: "Ablehnen", score: 1 }, { text: "Risiko prüfen", score: 3 }, { text: "Verhaften", score: 5 }] },
            { id: 15, text: "Lebensziel:", options: [{ text: "Selbstausdruck", score: 1 }, { text: "Verständnis", score: 3 }, { text: "Herrschaft", score: 5 }] },
            { id: 16, text: "Rivale:", options: [{ text: "Ignorieren", score: 1 }, { text: "Austricksen", score: 3 }, { text: "Vernichten", score: 5 }] },
            { id: 17, text: "Welt verändern:", options: [{ text: "Mehr Liebe", score: 1 }, { text: "Mehr Vernunft", score: 3 }, { text: "Mehr Ordnung", score: 5 }] },
            { id: 18, text: "Niederlage:", options: [{ text: "Heilen", score: 1 }, { text: "Analysieren", score: 3 }, { text: "Rache", score: 5 }] },
            { id: 19, text: "Waffe:", options: [{ text: "Wort/Musik", score: 1 }, { text: "Geheimnis", score: 3 }, { text: "Speer", score: 5 }] },
            { id: 20, text: "Geheimbund:", options: [{ text: "Nein", score: 1 }, { text: "Lernen", score: 3 }, { text: "Führen", score: 5 }] },
            { id: 21, text: "Chaos ist:", options: [{ text: "Schön", score: 1 }, { text: "Rätsel", score: 3 }, { text: "Bedrohung", score: 5 }] },
            { id: 22, text: "Autorität ist:", options: [{ text: "Illusion", score: 1 }, { text: "Struktur", score: 3 }, { text: "Mein Recht", score: 5 }] },
            { id: 23, text: "Geschichte erinnert:", options: [{ text: "Künstler", score: 1 }, { text: "Denker", score: 3 }, { text: "Eroberer", score: 5 }] },
            { id: 24, text: "Letzte Momente:", options: [{ text: "Natur", score: 1 }, { text: "Bücher", score: 3 }, { text: "Trophäen", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "Rolle: Der freie Bürger / Gaukler", desc: "<strong>[Der Narr / Realist]</strong><br>Sie durchschauen die Eitelkeit der Macht. Sie schätzen Freiheit und einfache Freuden über alles.<br><strong>Modern:</strong> Freelancer, Künstler." },
            { min: 46, max: 65, title: "Rolle: Der reiche Kaufmann / Gelehrte", desc: "<strong>[Der Liebende]</strong><br>Sie schätzen Ästhetik und Wohlstand. Sie wollen die Welt nicht beherrschen, sondern genießen.<br><strong>Modern:</strong> Unternehmer, Investor." },
            { min: 66, max: 85, title: "Rolle: Der treue General / Minister", desc: "<strong>[Der Krieger]</strong><br>Sie sind das Rückgrat des Reiches. Pflicht und Ehre stehen an erster Stelle.<br><strong>Modern:</strong> Manager, Beamter." },
            { min: 86, max: 100, title: "Rolle: Die graue Eminenz", desc: "<strong>[Der Magier]</strong><br>Sie lenken die Geschicke aus dem Schatten. Macht bedeutet für Sie Einfluss, nicht Ruhm.<br><strong>Modern:</strong> Stratege, Berater." },
            { min: 101, max: 120, title: "Rolle: Der Kaiser / Eroberer", desc: "<strong>[Der Herrscher]</strong><br>Ihr Wille zur Macht ist absolut. Sie schaffen Ordnung im Chaos.<br><strong>Modern:</strong> CEO, Gründer." }
        ]
    },

    // 4. 日语 (Japanese) - Professional
    "ja": {
        title: "古代の原型と運命診断",
        desc: "ユング心理学に基づく。24の質問で、あなたの潜在的な権力志向と古代における真の役割を解き明かします。",
        questions: [
            // (質問はENと同じロジック)
            { id: 1, text: "敵軍が接近中。直感的な反応は：", options: [{ text: "山に逃げる", score: 1 }, { text: "罠を仕掛ける", score: 3 }, { text: "迎撃する", score: 5 }] },
            { id: 2, text: "飢饉が発生。あなたは：", options: [{ text: "詩を書く", score: 1 }, { text: "配給を計算", score: 3 }, { text: "強制徴収", score: 5 }] },
            { id: 3, text: "部下の裏切り：", options: [{ text: "許す", score: 1 }, { text: "追放する", score: 3 }, { text: "処刑する", score: 5 }] },
            { id: 4, text: "新法への意見：", options: [{ text: "道徳的観点", score: 1 }, { text: "経済的観点", score: 3 }, { text: "権力強化", score: 5 }] },
            { id: 5, text: "理想の住処：", options: [{ text: "竹林の小屋", score: 1 }, { text: "書庫", score: 3 }, { text: "宮殿", score: 5 }] },
            { id: 6, text: "自由時間：", options: [{ text: "芸術", score: 1 }, { text: "戦略ゲーム", score: 3 }, { text: "武術", score: 5 }] },
            { id: 7, text: "最も価値あるもの：", options: [{ text: "自由", score: 1 }, { text: "知恵", score: 3 }, { text: "権力", score: 5 }] },
            { id: 8, text: "選ぶアイテム：", options: [{ text: "笛", score: 1 }, { text: "羅針盤", score: 3 }, { text: "剣", score: 5 }] },
            { id: 9, text: "宴会での役割：", options: [{ text: "傍観者", score: 1 }, { text: "助言者", score: 3 }, { text: "主役", score: 5 }] },
            { id: 10, text: "人の心を掴むには：", options: [{ text: "共感", score: 1 }, { text: "論理", score: 3 }, { text: "カリスマ", score: 5 }] },
            { id: 11, text: "犯罪を目撃：", options: [{ text: "世を儚む", score: 1 }, { text: "通報する", score: 3 }, { text: "介入する", score: 5 }] },
            { id: 12, text: "ルールとは：", options: [{ text: "束縛", score: 1 }, { text: "道具", score: 3 }, { text: "絶対", score: 5 }] },
            { id: 13, text: "戦争の勝因：", options: [{ text: "士気", score: 1 }, { text: "兵站", score: 3 }, { text: "規律", score: 5 }] },
            { id: 14, text: "賄賂：", options: [{ text: "拒否", score: 1 }, { text: "計算", score: 3 }, { text: "逮捕", score: 5 }] },
            { id: 15, text: "人生の目的：", options: [{ text: "自己表現", score: 1 }, { text: "真理の探究", score: 3 }, { text: "支配", score: 5 }] },
            { id: 16, text: "ライバル：", options: [{ text: "無視", score: 1 }, { text: "出し抜く", score: 3 }, { text: "粉砕", score: 5 }] },
            { id: 17, text: "世界を変えるなら：", options: [{ text: "愛", score: 1 }, { text: "理性", score: 3 }, { text: "秩序", score: 5 }] },
            { id: 18, text: "敗北への対処：", options: [{ text: "癒やし", score: 1 }, { text: "分析", score: 3 }, { text: "復讐", score: 5 }] },
            { id: 19, text: "武器：", options: [{ text: "言葉", score: 1 }, { text: "秘密", score: 3 }, { text: "武力", score: 5 }] },
            { id: 20, text: "秘密結社：", options: [{ text: "入らない", score: 1 }, { text: "学ぶ", score: 3 }, { text: "率いる", score: 5 }] },
            { id: 21, text: "カオスとは：", options: [{ text: "美", score: 1 }, { text: "パズル", score: 3 }, { text: "脅威", score: 5 }] },
            { id: 22, text: "権威とは：", options: [{ text: "幻想", score: 1 }, { text: "必要", score: 3 }, { text: "権利", score: 5 }] },
            { id: 23, text: "歴史に残る人：", options: [{ text: "創作者", score: 1 }, { text: "知識人", score: 3 }, { text: "征服者", score: 5 }] },
            { id: 24, text: "最期の時：", options: [{ text: "自然", score: 1 }, { text: "書物", score: 3 }, { text: "臣民", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "役割：市井の自由人 / 旅芸人", desc: "<strong>[道化師 / リアリスト]</strong><br>権力の虚しさを見抜いています。ささやかな幸せと自由こそが真実だと知っています。<br><strong>現代：</strong>フリーランス、エンターテイナー。" },
            { min: 46, max: 65, title: "役割：豪商 / 風流人", desc: "<strong>[恋人 / 探求者]</strong><br>美と富を愛します。世界を支配するより、世界を楽しみ、彩ることを望みます。<br><strong>現代：</strong>起業家、投資家、文化人。" },
            { min: 66, max: 85, title: "役割：鎮国の将軍 / 忠臣", desc: "<strong>[戦士 / 擁護者]</strong><br>帝国の背骨です。義務と名誉を重んじ、大局のために私情を捨てることができます。<br><strong>現代：</strong>重役、官僚、実務家。" },
            { min: 86, max: 100, title: "役割：黒幕 / 策士", desc: "<strong>[賢者 / 魔術師]</strong><br>影から歴史を動かします。人を駒として扱い、知略で勝利を掴みます。<br><strong>現代：</strong>戦略コンサルタント、参謀。" },
            { min: 101, max: 120, title: "役割：千古の皇帝 / 覇王", desc: "<strong>[支配者]</strong><br>絶対的な権力意志を持ちます。混沌を嫌い、自らの手で新秩序を築きます。<br><strong>現代：</strong>創業者、CEO、指導者。" }
        ]
    },

// 5. 法语 (French) - Professional
    "fr": {
        title: "Archétypes Anciens & Destinée",
        desc: "Basé sur la psychologie jungienne. 24 dilemmes historiques pour décoder votre dynamique de pouvoir subconsciente et révéler votre véritable rôle dans une ère ancienne.",
        questions: [
            { id: 1, text: "Les ennemis approchent. Votre instinct :", options: [{ text: "Fuir dans les montagnes", score: 1 }, { text: "Ruse diplomatique", score: 3 }, { text: "Mener l'armée", score: 5 }] },
            { id: 2, text: "Famine dans le royaume :", options: [{ text: "Écrire un poème", score: 1 }, { text: "Rationner les réserves", score: 3 }, { text: "Punir les corrompus", score: 5 }] },
            { id: 3, text: "Trahison d'un subordonné :", options: [{ text: "Pardonner", score: 1 }, { text: "Exiler", score: 3 }, { text: "Exécuter", score: 5 }] },
            { id: 4, text: "Avis sur une nouvelle loi :", options: [{ text: "Impact moral", score: 1 }, { text: "Impact économique", score: 3 }, { text: "Renforce l'autorité", score: 5 }] },
            { id: 5, text: "Résidence idéale :", options: [{ text: "Hutte en bambou", score: 1 }, { text: "Bibliothèque", score: 3 }, { text: "Palais", score: 5 }] },
            { id: 6, text: "Temps libre :", options: [{ text: "Musique/Peinture", score: 1 }, { text: "Stratégie/Lecture", score: 3 }, { text: "Chasse/Combat", score: 5 }] },
            { id: 7, text: "Valeur suprême :", options: [{ text: "Liberté", score: 1 }, { text: "Sagesse", score: 3 }, { text: "Pouvoir", score: 5 }] },
            { id: 8, text: "Objet choisi :", options: [{ text: "Flûte de jade", score: 1 }, { text: "Boussole", score: 3 }, { text: "Épée", score: 5 }] },
            { id: 9, text: "Au banquet royal :", options: [{ text: "Observateur", score: 1 }, { text: "Conseiller", score: 3 }, { text: "Centre d'attention", score: 5 }] },
            { id: 10, text: "Gagner les cœurs :", options: [{ text: "Empathie", score: 1 }, { text: "Logique", score: 3 }, { text: "Charisme", score: 5 }] },
            { id: 11, text: "Témoin d'un crime :", options: [{ text: "Réfléchir", score: 1 }, { text: "Signaler", score: 3 }, { text: "Intervenir", score: 5 }] },
            { id: 12, text: "Les règles :", options: [{ text: "Étouffantes", score: 1 }, { text: "Utiles", score: 3 }, { text: "Nécessaires", score: 5 }] },
            { id: 13, text: "Gagner une guerre :", options: [{ text: "Moral", score: 1 }, { text: "Logistique", score: 3 }, { text: "Discipline", score: 5 }] },
            { id: 14, text: "Pot-de-vin :", options: [{ text: "Refuser", score: 1 }, { text: "Calculer le risque", score: 3 }, { text: "Arrêter le corrupteur", score: 5 }] },
            { id: 15, text: "But de la vie :", options: [{ text: "Expression de soi", score: 1 }, { text: "Compréhension", score: 3 }, { text: "Domination", score: 5 }] },
            { id: 16, text: "Un rival :", options: [{ text: "Ignorer", score: 1 }, { text: "Déjouer", score: 3 }, { text: "Écraser", score: 5 }] },
            { id: 17, text: "Changer le monde :", options: [{ text: "Plus d'amour", score: 1 }, { text: "Plus de raison", score: 3 }, { text: "Plus d'ordre", score: 5 }] },
            { id: 18, text: "La défaite :", options: [{ text: "Guérir", score: 1 }, { text: "Analyser", score: 3 }, { text: "Vengeance", score: 5 }] },
            { id: 19, text: "Arme :", options: [{ text: "Mots", score: 1 }, { text: "Secret", score: 3 }, { text: "Lance", score: 5 }] },
            { id: 20, text: "Société secrète :", options: [{ text: "Non", score: 1 }, { text: "Apprendre", score: 3 }, { text: "Diriger", score: 5 }] },
            { id: 21, text: "Le chaos est :", options: [{ text: "Beau", score: 1 }, { text: "Un puzzle", score: 3 }, { text: "Une menace", score: 5 }] },
            { id: 22, text: "L'autorité est :", options: [{ text: "Illusion", score: 1 }, { text: "Structure", score: 3 }, { text: "Mon droit", score: 5 }] },
            { id: 23, text: "L'histoire retient :", options: [{ text: "Artistes", score: 1 }, { text: "Penseurs", score: 3 }, { text: "Conquérants", score: 5 }] },
            { id: 24, text: "Derniers moments :", options: [{ text: "Nature", score: 1 }, { text: "Livres", score: 3 }, { text: "Sujets", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "Rôle : Le Roturier Libre / Artiste Errant", desc: "<strong>[Le Bouffon / Réaliste]</strong><br>Vous avez percé la vanité du pouvoir. La liberté est votre trésor.<br><strong>Moderne :</strong> Freelance, Artiste." },
            { min: 46, max: 65, title: "Rôle : Le Riche Marchand / Érudit", desc: "<strong>[L'Amoureux]</strong><br>Vous aimez l'esthétique et la richesse. Vous ne voulez pas régner, mais jouir de la vie.<br><strong>Moderne :</strong> Entrepreneur, Investisseur." },
            { min: 66, max: 85, title: "Rôle : Le Général Loyal / Ministre", desc: "<strong>[Le Guerrier]</strong><br>Vous êtes l'épine dorsale de l'empire. Devoir et honneur avant tout.<br><strong>Moderne :</strong> Cadre, Haut fonctionnaire." },
            { min: 86, max: 100, title: "Rôle : L'Éminence Grise", desc: "<strong>[Le Magicien]</strong><br>Vous dirigez depuis l'ombre. Le pouvoir est l'influence, pas la gloire.<br><strong>Moderne :</strong> Stratège, Consultant." },
            { min: 101, max: 120, title: "Rôle : L'Empereur Éternel", desc: "<strong>[Le Souverain]</strong><br>Votre volonté de puissance est absolue. Vous créez l'ordre dans le chaos.<br><strong>Moderne :</strong> PDG, Fondateur." }
        ]
    },

    // 6. 西班牙语 (Spanish) - Professional
    "es": {
        title: "Arquetipos Antiguos y Destino",
        desc: "Basado en psicología junguiana. 24 dilemas para revelar tu rol en una era antigua.",
        questions: [
            { id: 1, text: "Enemigos cerca. Tu instinto:", options: [{ text: "Huir a las montañas", score: 1 }, { text: "Trampa diplomática", score: 3 }, { text: "Luchar", score: 5 }] },
            { id: 2, text: "Hambruna:", options: [{ text: "Escribir poema", score: 1 }, { text: "Racionar", score: 3 }, { text: "Castigar corruptos", score: 5 }] },
            { id: 3, text: "Traición:", options: [{ text: "Perdonar", score: 1 }, { text: "Exiliar", score: 3 }, { text: "Ejecutar", score: 5 }] },
            { id: 4, text: "Nueva ley:", options: [{ text: "Moral", score: 1 }, { text: "Económico", score: 3 }, { text: "Autoridad", score: 5 }] },
            { id: 5, text: "Casa ideal:", options: [{ text: "Cabaña", score: 1 }, { text: "Biblioteca", score: 3 }, { text: "Palacio", score: 5 }] },
            { id: 6, text: "Tiempo libre:", options: [{ text: "Arte", score: 1 }, { text: "Estrategia", score: 3 }, { text: "Caza", score: 5 }] },
            { id: 7, text: "Valor supremo:", options: [{ text: "Libertad", score: 1 }, { text: "Sabiduría", score: 3 }, { text: "Poder", score: 5 }] },
            { id: 8, text: "Objeto:", options: [{ text: "Flauta", score: 1 }, { text: "Brújula", score: 3 }, { text: "Espada", score: 5 }] },
            { id: 9, text: "Banquete:", options: [{ text: "Observador", score: 1 }, { text: "Consejero", score: 3 }, { text: "Centro", score: 5 }] },
            { id: 10, text: "Ganar corazones:", options: [{ text: "Empatía", score: 1 }, { text: "Lógica", score: 3 }, { text: "Carisma", score: 5 }] },
            { id: 11, text: "Crimen:", options: [{ text: "Reflexionar", score: 1 }, { text: "Reportar", score: 3 }, { text: "Intervenir", score: 5 }] },
            { id: 12, text: "Reglas:", options: [{ text: "Asfixiantes", score: 1 }, { text: "Útiles", score: 3 }, { text: "Necesarias", score: 5 }] },
            { id: 13, text: "Ganar guerra:", options: [{ text: "Moral", score: 1 }, { text: "Logística", score: 3 }, { text: "Disciplina", score: 5 }] },
            { id: 14, text: "Soborno:", options: [{ text: "Rechazar", score: 1 }, { text: "Calcular", score: 3 }, { text: "Arrestar", score: 5 }] },
            { id: 15, text: "Meta vital:", options: [{ text: "Autoexpresión", score: 1 }, { text: "Comprensión", score: 3 }, { text: "Dominio", score: 5 }] },
            { id: 16, text: "Rival:", options: [{ text: "Ignorar", score: 1 }, { text: "Superar", score: 3 }, { text: "Aplastar", score: 5 }] },
            { id: 17, text: "Cambiar mundo:", options: [{ text: "Amor", score: 1 }, { text: "Razón", score: 3 }, { text: "Orden", score: 5 }] },
            { id: 18, text: "Derrota:", options: [{ text: "Sanar", score: 1 }, { text: "Analizar", score: 3 }, { text: "Venganza", score: 5 }] },
            { id: 19, text: "Arma:", options: [{ text: "Palabra", score: 1 }, { text: "Secreto", score: 3 }, { text: "Lanza", score: 5 }] },
            { id: 20, text: "Sociedad secreta:", options: [{ text: "No", score: 1 }, { text: "Aprender", score: 3 }, { text: "Liderar", score: 5 }] },
            { id: 21, text: "Caos:", options: [{ text: "Bello", score: 1 }, { text: "Puzzle", score: 3 }, { text: "Amenaza", score: 5 }] },
            { id: 22, text: "Autoridad:", options: [{ text: "Ilusión", score: 1 }, { text: "Estructura", score: 3 }, { text: "Derecho", score: 5 }] },
            { id: 23, text: "Historia recuerda:", options: [{ text: "Artistas", score: 1 }, { text: "Pensadores", score: 3 }, { text: "Conquistadores", score: 5 }] },
            { id: 24, text: "Final:", options: [{ text: "Naturaleza", score: 1 }, { text: "Libros", score: 3 }, { text: "Súbditos", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "Rol: El Plebeyo Libre / Bufón", desc: "<strong>[El Realista]</strong><br>Valoras la libertad sobre el poder.<br><strong>Moderno:</strong> Freelancer, Artista." },
            { min: 46, max: 65, title: "Rol: El Mercader / Erudito", desc: "<strong>[El Amante]</strong><br>Buscas belleza y riqueza, no gobernar.<br><strong>Moderno:</strong> Emprendedor, Inversor." },
            { min: 66, max: 85, title: "Rol: El General Leal", desc: "<strong>[El Guerrero]</strong><br>Eres la columna vertebral del imperio. Deber y honor.<br><strong>Moderno:</strong> Ejecutivo, Oficial." },
            { min: 86, max: 100, title: "Rol: El Maestro de las Sombras", desc: "<strong>[El Mago]</strong><br>Controlas desde atrás. El poder es influencia.<br><strong>Moderno:</strong> Estratega, Consultor." },
            { min: 101, max: 120, title: "Rol: El Emperador", desc: "<strong>[El Gobernante]</strong><br>Voluntad de poder absoluta. Creas orden.<br><strong>Moderno:</strong> CEO, Líder." }
        ]
    },

    // 7. 葡萄牙语 (Portuguese) - Professional
    "pt": {
        title: "Arquétipos Antigos e Destino",
        desc: "Baseado na psicologia junguiana. 24 dilemas para revelar seu papel em uma era antiga.",
        questions: [
            { id: 1, text: "Inimigos próximos. Instinto:", options: [{ text: "Fugir para montanhas", score: 1 }, { text: "Armadilha", score: 3 }, { text: "Lutar", score: 5 }] },
            { id: 2, text: "Fome:", options: [{ text: "Escrever poema", score: 1 }, { text: "Racionar", score: 3 }, { text: "Punir corruptos", score: 5 }] },
            { id: 3, text: "Traição:", options: [{ text: "Perdoar", score: 1 }, { text: "Exilar", score: 3 }, { text: "Executar", score: 5 }] },
            { id: 4, text: "Nova lei:", options: [{ text: "Moral", score: 1 }, { text: "Econômico", score: 3 }, { text: "Autoridade", score: 5 }] },
            { id: 5, text: "Casa ideal:", options: [{ text: "Cabana", score: 1 }, { text: "Biblioteca", score: 3 }, { text: "Palácio", score: 5 }] },
            { id: 6, text: "Tempo livre:", options: [{ text: "Arte", score: 1 }, { text: "Estratégia", score: 3 }, { text: "Caça", score: 5 }] },
            { id: 7, text: "Valor supremo:", options: [{ text: "Liberdade", score: 1 }, { text: "Sabedoria", score: 3 }, { text: "Poder", score: 5 }] },
            { id: 8, text: "Objeto:", options: [{ text: "Flauta", score: 1 }, { text: "Bússola", score: 3 }, { text: "Espada", score: 5 }] },
            { id: 9, text: "Banquete:", options: [{ text: "Observador", score: 1 }, { text: "Conselheiro", score: 3 }, { text: "Centro", score: 5 }] },
            { id: 10, text: "Ganhar corações:", options: [{ text: "Empatia", score: 1 }, { text: "Lógica", score: 3 }, { text: "Carisma", score: 5 }] },
            { id: 11, text: "Crime:", options: [{ text: "Refletir", score: 1 }, { text: "Denunciar", score: 3 }, { text: "Intervir", score: 5 }] },
            { id: 12, text: "Regras:", options: [{ text: "Sufocantes", score: 1 }, { text: "Úteis", score: 3 }, { text: "Necessárias", score: 5 }] },
            { id: 13, text: "Vencer guerra:", options: [{ text: "Moral", score: 1 }, { text: "Logística", score: 3 }, { text: "Disciplina", score: 5 }] },
            { id: 14, text: "Suborno:", options: [{ text: "Recusar", score: 1 }, { text: "Calcular", score: 3 }, { text: "Prender", score: 5 }] },
            { id: 15, text: "Meta de vida:", options: [{ text: "Autoexpressão", score: 1 }, { text: "Compreensão", score: 3 }, { text: "Domínio", score: 5 }] },
            { id: 16, text: "Rival:", options: [{ text: "Ignorar", score: 1 }, { text: "Superar", score: 3 }, { text: "Esmagar", score: 5 }] },
            { id: 17, text: "Mudar o mundo:", options: [{ text: "Amor", score: 1 }, { text: "Razão", score: 3 }, { text: "Ordem", score: 5 }] },
            { id: 18, text: "Derrota:", options: [{ text: "Curar", score: 1 }, { text: "Analisar", score: 3 }, { text: "Vingança", score: 5 }] },
            { id: 19, text: "Arma:", options: [{ text: "Palavra", score: 1 }, { text: "Segredo", score: 3 }, { text: "Lança", score: 5 }] },
            { id: 20, text: "Sociedade secreta:", options: [{ text: "Não", score: 1 }, { text: "Aprender", score: 3 }, { text: "Liderar", score: 5 }] },
            { id: 21, text: "Caos:", options: [{ text: "Belo", score: 1 }, { text: "Quebra-cabeça", score: 3 }, { text: "Ameaça", score: 5 }] },
            { id: 22, text: "Autoridade:", options: [{ text: "Ilusão", score: 1 }, { text: "Estrutura", score: 3 }, { text: "Direito", score: 5 }] },
            { id: 23, text: "História lembra:", options: [{ text: "Artistas", score: 1 }, { text: "Pensadores", score: 3 }, { text: "Conquistadores", score: 5 }] },
            { id: 24, text: "Fim:", options: [{ text: "Natureza", score: 1 }, { text: "Livros", score: 3 }, { text: "Súditos", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "Papel: O Plebeu Livre / Bobo", desc: "<strong>[O Realista]</strong><br>Valoriza a liberdade acima do poder.<br><strong>Moderno:</strong> Freelancer, Artista." },
            { min: 46, max: 65, title: "Papel: O Mercador / Erudito", desc: "<strong>[O Amante]</strong><br>Busca beleza e riqueza, não governo.<br><strong>Moderno:</strong> Empreendedor, Investidor." },
            { min: 66, max: 85, title: "Papel: O General Leal", desc: "<strong>[O Guerreiro]</strong><br>Espinha dorsal do império. Dever e honra.<br><strong>Moderno:</strong> Executivo, Oficial." },
            { min: 86, max: 100, title: "Papel: O Mestre das Sombras", desc: "<strong>[O Mago]</strong><br>Controla dos bastidores. Poder é influência.<br><strong>Moderno:</strong> Estrategista, Consultor." },
            { min: 101, max: 120, title: "Papel: O Imperador", desc: "<strong>[O Governante]</strong><br>Vontade de poder absoluta. Cria ordem.<br><strong>Moderno:</strong> CEO, Líder." }
        ]
    },

    // 8. 俄语 (Russian) - Professional
    "ru": {
        title: "Древние архетипы и судьба",
        desc: "На основе Юнга. 24 вопроса, чтобы узнать вашу роль в древнюю эпоху.",
        questions: [
            { id: 1, text: "Враг у ворот:", options: [{ text: "Бежать в горы", score: 1 }, { text: "Хитрость", score: 3 }, { text: "Бой", score: 5 }] },
            { id: 2, text: "Голод:", options: [{ text: "Стихи о горе", score: 1 }, { text: "Пайки", score: 3 }, { text: "Наказать виновных", score: 5 }] },
            { id: 3, text: "Предательство:", options: [{ text: "Простить", score: 1 }, { text: "Изгнать", score: 3 }, { text: "Казнить", score: 5 }] },
            { id: 4, text: "Закон:", options: [{ text: "Мораль", score: 1 }, { text: "Экономика", score: 3 }, { text: "Власть", score: 5 }] },
            { id: 5, text: "Дом:", options: [{ text: "Хижина", score: 1 }, { text: "Библиотека", score: 3 }, { text: "Дворец", score: 5 }] },
            { id: 6, text: "Досуг:", options: [{ text: "Искусство", score: 1 }, { text: "Стратегия", score: 3 }, { text: "Охота", score: 5 }] },
            { id: 7, text: "Ценность:", options: [{ text: "Свобода", score: 1 }, { text: "Мудрость", score: 3 }, { text: "Власть", score: 5 }] },
            { id: 8, text: "Предмет:", options: [{ text: "Флейта", score: 1 }, { text: "Компас", score: 3 }, { text: "Меч", score: 5 }] },
            { id: 9, text: "Пир:", options: [{ text: "Наблюдатель", score: 1 }, { text: "Советник", score: 3 }, { text: "Центр", score: 5 }] },
            { id: 10, text: "Влияние:", options: [{ text: "Эмпатия", score: 1 }, { text: "Логика", score: 3 }, { text: "Харизма", score: 5 }] },
            { id: 11, text: "Преступление:", options: [{ text: "Размышлять", score: 1 }, { text: "Сообщить", score: 3 }, { text: "Вмешаться", score: 5 }] },
            { id: 12, text: "Правила:", options: [{ text: "Душат", score: 1 }, { text: "Полезны", score: 3 }, { text: "Необходимы", score: 5 }] },
            { id: 13, text: "Война:", options: [{ text: "Дух", score: 1 }, { text: "Логистика", score: 3 }, { text: "Дисциплина", score: 5 }] },
            { id: 14, text: "Взятка:", options: [{ text: "Отказ", score: 1 }, { text: "Расчет", score: 3 }, { text: "Арест", score: 5 }] },
            { id: 15, text: "Цель:", options: [{ text: "Самовыражение", score: 1 }, { text: "Понимание", score: 3 }, { text: "Господство", score: 5 }] },
            { id: 16, text: "Соперник:", options: [{ text: "Игнор", score: 1 }, { text: "Хитрость", score: 3 }, { text: "Уничтожение", score: 5 }] },
            { id: 17, text: "Мир:", options: [{ text: "Любовь", score: 1 }, { text: "Разум", score: 3 }, { text: "Порядок", score: 5 }] },
            { id: 18, text: "Поражение:", options: [{ text: "Лечить раны", score: 1 }, { text: "Анализ", score: 3 }, { text: "Месть", score: 5 }] },
            { id: 19, text: "Оружие:", options: [{ text: "Слово", score: 1 }, { text: "Тайна", score: 3 }, { text: "Копье", score: 5 }] },
            { id: 20, text: "Тайное общество:", options: [{ text: "Нет", score: 1 }, { text: "Узнать", score: 3 }, { text: "Возглавить", score: 5 }] },
            { id: 21, text: "Хаос:", options: [{ text: "Красота", score: 1 }, { text: "Загадка", score: 3 }, { text: "Угроза", score: 5 }] },
            { id: 22, text: "Власть:", options: [{ text: "Иллюзия", score: 1 }, { text: "Структура", score: 3 }, { text: "Мое право", score: 5 }] },
            { id: 23, text: "История помнит:", options: [{ text: "Творцов", score: 1 }, { text: "Мыслителей", score: 3 }, { text: "Завоевателей", score: 5 }] },
            { id: 24, text: "Конец:", options: [{ text: "Природа", score: 1 }, { text: "Книги", score: 3 }, { text: "Подданные", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "Роль: Свободный простолюдин / Шут", desc: "<strong>[Реалист]</strong><br>Свобода важнее власти. Вы видите суть.<br><strong>Сегодня:</strong> Фрилансер, Артист." },
            { min: 46, max: 65, title: "Роль: Богатый купец / Ученый", desc: "<strong>[Любовник]</strong><br>Цените красоту и комфорт, а не трон.<br><strong>Сегодня:</strong> Предприниматель, Инвестор." },
            { min: 66, max: 85, title: "Роль: Верный генерал", desc: "<strong>[Воин]</strong><br>Опора империи. Долг и честь.<br><strong>Сегодня:</strong> Топ-менеджер, Офицер." },
            { min: 86, max: 100, title: "Роль: Серый кардинал", desc: "<strong>[Маг]</strong><br>Управляете из тени. Власть — это влияние.<br><strong>Сегодня:</strong> Стратег, Консультант." },
            { min: 101, max: 120, title: "Роль: Император", desc: "<strong>[Правитель]</strong><br>Абсолютная воля к власти. Создаете порядок.<br><strong>Сегодня:</strong> CEO, Лидер." }
        ]
    },

    // 9. 韩语 (Korean) - Professional
    "ko": {
        title: "고대 원형 및 운명 진단",
        desc: "융 심리학 기반. 24개의 질문으로 고대 시대 당신의 진정한 역할을 찾습니다.",
        questions: [
            { id: 1, text: "적군 접근:", options: [{ text: "산으로 도피", score: 1 }, { text: "계략", score: 3 }, { text: "전투 지휘", score: 5 }] },
            { id: 2, text: "기근:", options: [{ text: "시 쓰기", score: 1 }, { text: "배급 계산", score: 3 }, { text: "처벌 및 징수", score: 5 }] },
            { id: 3, text: "배신:", options: [{ text: "용서", score: 1 }, { text: "유배", score: 3 }, { text: "처형", score: 5 }] },
            { id: 4, text: "새 법률:", options: [{ text: "도덕성", score: 1 }, { text: "경제성", score: 3 }, { text: "권력 강화", score: 5 }] },
            { id: 5, text: "이상적 거처:", options: [{ text: "오두막", score: 1 }, { text: "서재", score: 3 }, { text: "궁전", score: 5 }] },
            { id: 6, text: "여가:", options: [{ text: "예술", score: 1 }, { text: "전략/독서", score: 3 }, { text: "무술/사냥", score: 5 }] },
            { id: 7, text: "최고 가치:", options: [{ text: "자유", score: 1 }, { text: "지혜", score: 3 }, { text: "권력", score: 5 }] },
            { id: 8, text: "선택 물건:", options: [{ text: "피리", score: 1 }, { text: "나침반", score: 3 }, { text: "검", score: 5 }] },
            { id: 9, text: "연회:", options: [{ text: "관찰자", score: 1 }, { text: "조언자", score: 3 }, { text: "주인공", score: 5 }] },
            { id: 10, text: "사람 얻기:", options: [{ text: "공감", score: 1 }, { text: "논리", score: 3 }, { text: "카리스마", score: 5 }] },
            { id: 11, text: "범죄 목격:", options: [{ text: "한탄", score: 1 }, { text: "신고", score: 3 }, { text: "개입", score: 5 }] },
            { id: 12, text: "규칙:", options: [{ text: "속박", score: 1 }, { text: "도구", score: 3 }, { text: "필수", score: 5 }] },
            { id: 13, text: "전쟁 승리:", options: [{ text: "사기", score: 1 }, { text: "보급", score: 3 }, { text: "규율", score: 5 }] },
            { id: 14, text: "뇌물:", options: [{ text: "거절", score: 1 }, { text: "계산", score: 3 }, { text: "체포", score: 5 }] },
            { id: 15, text: "목표:", options: [{ text: "자기표현", score: 1 }, { text: "이해", score: 3 }, { text: "지배", score: 5 }] },
            { id: 16, text: "라이벌:", options: [{ text: "무시", score: 1 }, { text: "지략 승부", score: 3 }, { text: "제거", score: 5 }] },
            { id: 17, text: "세상 변화:", options: [{ text: "사랑", score: 1 }, { text: "이성", score: 3 }, { text: "질서", score: 5 }] },
            { id: 18, text: "패배:", options: [{ text: "치유", score: 1 }, { text: "분석", score: 3 }, { text: "복수", score: 5 }] },
            { id: 19, text: "무기:", options: [{ text: "말/음악", score: 1 }, { text: "비밀", score: 3 }, { text: "창", score: 5 }] },
            { id: 20, text: "비밀 결사:", options: [{ text: "거절", score: 1 }, { text: "학습", score: 3 }, { text: "지휘", score: 5 }] },
            { id: 21, text: "혼돈:", options: [{ text: "아름다움", score: 1 }, { text: "퍼즐", score: 3 }, { text: "위협", score: 5 }] },
            { id: 22, text: "권위:", options: [{ text: "환상", score: 1 }, { text: "구조", score: 3 }, { text: "권리", score: 5 }] },
            { id: 23, text: "역사:", options: [{ text: "예술가", score: 1 }, { text: "사상가", score: 3 }, { text: "정복자", score: 5 }] },
            { id: 24, text: "마지막:", options: [{ text: "자연", score: 1 }, { text: "책", score: 3 }, { text: "신하", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "역할: 자유로운 평민 / 광대", desc: "<strong>[현실주의자]</strong><br>권력보다 자유를 중시합니다.<br><strong>현대:</strong> 프리랜서, 예술가." },
            { min: 46, max: 65, title: "역할: 거상 / 풍류객", desc: "<strong>[연인]</strong><br>미와 부를 추구하며 지배보다 향유를 원합니다.<br><strong>현대:</strong> 사업가, 투자자." },
            { min: 66, max: 85, title: "역할: 충신 / 장군", desc: "<strong>[전사]</strong><br>제국의 척추. 의무와 명예를 중시합니다.<br><strong>현대:</strong> 임원, 고위 공무원." },
            { min: 86, max: 100, title: "역할: 흑막 / 책사", desc: "<strong>[마법사]</strong><br>뒤에서 조종합니다. 권력은 영향력입니다.<br><strong>현대:</strong> 전략가, 컨설턴트." },
            { min: 101, max: 120, title: "역할: 황제 / 패왕", desc: "<strong>[통치자]</strong><br>절대적인 권력 의지. 질서를 창조합니다.<br><strong>현대:</strong> CEO, 창업자." }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Professional
    "ar": {
        title: "النماذج الأولية القديمة والمصير",
        desc: "بناءً على علم نفس يونغ. 24 سؤالاً لكشف دورك في العصور القديمة.",
        questions: [
            { id: 1, text: "العدو يقترب:", options: [{ text: "هروب", score: 1 }, { text: "خدعة", score: 3 }, { text: "قتال", score: 5 }] },
            { id: 2, text: "مجاعة:", options: [{ text: "شعر", score: 1 }, { text: "تقنين", score: 3 }, { text: "عقاب", score: 5 }] },
            { id: 3, text: "خيانة:", options: [{ text: "مسامحة", score: 1 }, { text: "نفي", score: 3 }, { text: "إعدام", score: 5 }] },
            { id: 4, text: "قانون جديد:", options: [{ text: "أخلاقي", score: 1 }, { text: "اقتصادي", score: 3 }, { text: "سلطة", score: 5 }] },
            { id: 5, text: "منزل:", options: [{ text: "كوخ", score: 1 }, { text: "مكتبة", score: 3 }, { text: "قصر", score: 5 }] },
            { id: 6, text: "وقت فراغ:", options: [{ text: "فن", score: 1 }, { text: "استراتيجية", score: 3 }, { text: "صيد", score: 5 }] },
            { id: 7, text: "قيمة:", options: [{ text: "حرية", score: 1 }, { text: "حكمة", score: 3 }, { text: "قوة", score: 5 }] },
            { id: 8, text: "أداة:", options: [{ text: "ناي", score: 1 }, { text: "بوصلة", score: 3 }, { text: "سيف", score: 5 }] },
            { id: 9, text: "وليمة:", options: [{ text: "مراقب", score: 1 }, { text: "مستشار", score: 3 }, { text: "مركز", score: 5 }] },
            { id: 10, text: "كسب القلوب:", options: [{ text: "تعاطف", score: 1 }, { text: "منطق", score: 3 }, { text: "كاريزما", score: 5 }] },
            { id: 11, text: "جريمة:", options: [{ text: "تأمل", score: 1 }, { text: "إبلاغ", score: 3 }, { text: "تدخل", score: 5 }] },
            { id: 12, text: "قواعد:", options: [{ text: "خانقة", score: 1 }, { text: "مفيدة", score: 3 }, { text: "ضرورية", score: 5 }] },
            { id: 13, text: "حرب:", options: [{ text: "معنويات", score: 1 }, { text: "لوجستيات", score: 3 }, { text: "انضباط", score: 5 }] },
            { id: 14, text: "رشوة:", options: [{ text: "رفض", score: 1 }, { text: "حساب", score: 3 }, { text: "اعتقال", score: 5 }] },
            { id: 15, text: "هدف:", options: [{ text: "تعبير", score: 1 }, { text: "فهم", score: 3 }, { text: "هيمنة", score: 5 }] },
            { id: 16, text: "منافس:", options: [{ text: "تجاهل", score: 1 }, { text: "دهاء", score: 3 }, { text: "سحق", score: 5 }] },
            { id: 17, text: "تغيير العالم:", options: [{ text: "حب", score: 1 }, { text: "عقل", score: 3 }, { text: "نظام", score: 5 }] },
            { id: 18, text: "هزيمة:", options: [{ text: "شفاء", score: 1 }, { text: "تحليل", score: 3 }, { text: "انتقام", score: 5 }] },
            { id: 19, text: "سلاح:", options: [{ text: "كلمة", score: 1 }, { text: "سر", score: 3 }, { text: "رمح", score: 5 }] },
            { id: 20, text: "جمعية سرية:", options: [{ text: "لا", score: 1 }, { text: "تعلم", score: 3 }, { text: "قيادة", score: 5 }] },
            { id: 21, text: "فوضى:", options: [{ text: "جمال", score: 1 }, { text: "لغز", score: 3 }, { text: "تهديد", score: 5 }] },
            { id: 22, text: "سلطة:", options: [{ text: "وهم", score: 1 }, { text: "هيكل", score: 3 }, { text: "حق", score: 5 }] },
            { id: 23, text: "التاريخ يذكر:", options: [{ text: "فنانين", score: 1 }, { text: "مفكرين", score: 3 }, { text: "غزاة", score: 5 }] },
            { id: 24, text: "النهاية:", options: [{ text: "طبيعة", score: 1 }, { text: "كتب", score: 3 }, { text: "أتباع", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "الدور: العامي الحر / المهرج", desc: "<strong>[الواقعي]</strong><br>الحرية أهم من السلطة.<br><strong>حديثاً:</strong> مستقل، فنان." },
            { min: 46, max: 65, title: "الدور: التاجر الثري / العالم", desc: "<strong>[المحب]</strong><br>تبحث عن الجمال والثروة لا الحكم.<br><strong>حديثاً:</strong> رائد أعمال، مستثمر." },
            { min: 66, max: 85, title: "الدور: الجنرال المخلص", desc: "<strong>[المحارب]</strong><br>عمود الإمبراطورية. واجب وشرف.<br><strong>حديثاً:</strong> مدير تنفيذي، ضابط." },
            { min: 86, max: 100, title: "الدور: سيد الظلال", desc: "<strong>[الساحر]</strong><br>تحكم من الخلف. القوة هي النفوذ.<br><strong>حديثاً:</strong> استراتيجي، مستشار." },
            { min: 101, max: 120, title: "الدور: الإمبراطور", desc: "<strong>[الحاكم]</strong><br>إرادة مطلقة للسلطة. تخلق النظام.<br><strong>حديثاً:</strong> مدير عام، قائد." }
        ]
    },

    // 11. 越南语 (Vietnamese) - Professional
    "vi": {
        title: "Nguyên mẫu Cổ đại & Định mệnh",
        desc: "Dựa trên tâm lý học Jung. 24 câu hỏi giải mã vai trò thực sự của bạn trong thời cổ đại.",
        questions: [
            { id: 1, text: "Kẻ thù đến:", options: [{ text: "Chạy trốn", score: 1 }, { text: "Mưu mẹo", score: 3 }, { text: "Chiến đấu", score: 5 }] },
            { id: 2, text: "Nạn đói:", options: [{ text: "Làm thơ", score: 1 }, { text: "Phân phát", score: 3 }, { text: "Trừng phạt", score: 5 }] },
            { id: 3, text: "Phản bội:", options: [{ text: "Tha thứ", score: 1 }, { text: "Lưu đày", score: 3 }, { text: "Xử tử", score: 5 }] },
            { id: 4, text: "Luật mới:", options: [{ text: "Đạo đức", score: 1 }, { text: "Kinh tế", score: 3 }, { text: "Quyền lực", score: 5 }] },
            { id: 5, text: "Nhà ở:", options: [{ text: "Lều tranh", score: 1 }, { text: "Thư viện", score: 3 }, { text: "Cung điện", score: 5 }] },
            { id: 6, text: "Rảnh rỗi:", options: [{ text: "Nghệ thuật", score: 1 }, { text: "Chiến lược", score: 3 }, { text: "Săn bắn", score: 5 }] },
            { id: 7, text: "Giá trị:", options: [{ text: "Tự do", score: 1 }, { text: "Trí tuệ", score: 3 }, { text: "Quyền lực", score: 5 }] },
            { id: 8, text: "Vật dụng:", options: [{ text: "Sáo", score: 1 }, { text: "La bàn", score: 3 }, { text: "Kiếm", score: 5 }] },
            { id: 9, text: "Yến tiệc:", options: [{ text: "Quan sát", score: 1 }, { text: "Cố vấn", score: 3 }, { text: "Trung tâm", score: 5 }] },
            { id: 10, text: "Thu phục:", options: [{ text: "Đồng cảm", score: 1 }, { text: "Logic", score: 3 }, { text: "Uy quyền", score: 5 }] },
            { id: 11, text: "Tội phạm:", options: [{ text: "Suy ngẫm", score: 1 }, { text: "Báo cáo", score: 3 }, { text: "Can thiệp", score: 5 }] },
            { id: 12, text: "Quy tắc:", options: [{ text: "Ngột ngạt", score: 1 }, { text: "Hữu ích", score: 3 }, { text: "Cần thiết", score: 5 }] },
            { id: 13, text: "Chiến tranh:", options: [{ text: "Tinh thần", score: 1 }, { text: "Hậu cần", score: 3 }, { text: "Kỷ luật", score: 5 }] },
            { id: 14, text: "Hối lộ:", options: [{ text: "Từ chối", score: 1 }, { text: "Tính toán", score: 3 }, { text: "Bắt giữ", score: 5 }] },
            { id: 15, text: "Mục tiêu:", options: [{ text: "Tự do", score: 1 }, { text: "Hiểu biết", score: 3 }, { text: "Thống trị", score: 5 }] },
            { id: 16, text: "Đối thủ:", options: [{ text: "Phớt lờ", score: 1 }, { text: "Vượt mặt", score: 3 }, { text: "Tiêu diệt", score: 5 }] },
            { id: 17, text: "Thay đổi:", options: [{ text: "Tình yêu", score: 1 }, { text: "Lý trí", score: 3 }, { text: "Trật tự", score: 5 }] },
            { id: 18, text: "Thất bại:", options: [{ text: "Chữa lành", score: 1 }, { text: "Phân tích", score: 3 }, { text: "Báo thù", score: 5 }] },
            { id: 19, text: "Vũ khí:", options: [{ text: "Lời nói", score: 1 }, { text: "Bí mật", score: 3 }, { text: "Giáo", score: 5 }] },
            { id: 20, text: "Hội kín:", options: [{ text: "Không", score: 1 }, { text: "Học hỏi", score: 3 }, { text: "Lãnh đạo", score: 5 }] },
            { id: 21, text: "Hỗn loạn:", options: [{ text: "Đẹp", score: 1 }, { text: "Câu đố", score: 3 }, { text: "Mối đe dọa", score: 5 }] },
            { id: 22, text: "Quyền lực:", options: [{ text: "Ảo ảnh", score: 1 }, { text: "Cấu trúc", score: 3 }, { text: "Quyền lợi", score: 5 }] },
            { id: 23, text: "Lịch sử:", options: [{ text: "Nghệ sĩ", score: 1 }, { text: "Nhà tư tưởng", score: 3 }, { text: "Kẻ chinh phục", score: 5 }] },
            { id: 24, text: "Cuối cùng:", options: [{ text: "Thiên nhiên", score: 1 }, { text: "Sách", score: 3 }, { text: "Thần dân", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "Vai: Thường dân Tự do / Nghệ sĩ", desc: "<strong>[Người Thực tế]</strong><br>Tự do quan trọng hơn quyền lực.<br><strong>Hiện đại:</strong> Freelancer, Nghệ sĩ." },
            { min: 46, max: 65, title: "Vai: Thương nhân / Học giả", desc: "<strong>[Người Tình]</strong><br>Tìm kiếm cái đẹp và sự giàu có.<br><strong>Hiện đại:</strong> Doanh nhân, Nhà đầu tư." },
            { min: 66, max: 85, title: "Vai: Tướng quân Trung thành", desc: "<strong>[Chiến binh]</strong><br>Xương sống của đế chế.<br><strong>Hiện đại:</strong> Quản lý, Quan chức." },
            { min: 86, max: 100, title: "Vai: Trùm Mật vụ", desc: "<strong>[Pháp sư]</strong><br>Điều khiển từ bóng tối.<br><strong>Hiện đại:</strong> Chiến lược gia, Cố vấn." },
            { min: 101, max: 120, title: "Vai: Hoàng đế", desc: "<strong>[Kẻ Cai trị]</strong><br>Ý chí quyền lực tuyệt đối.<br><strong>Hiện đại:</strong> CEO, Lãnh đạo." }
        ]
    },

    // 12. 泰语 (Thai) - Professional
    "th": {
        title: "แบบประเมินอาร์คีไทป์โบราณ",
        desc: "อิงตามจิตวิทยาของจุง 24 คำถามเพื่อค้นหาบทบาทที่แท้จริงของคุณในยุคโบราณ",
        questions: [
            { id: 1, text: "ศัตรูมา:", options: [{ text: "หนี", score: 1 }, { text: "กลอุบาย", score: 3 }, { text: "สู้", score: 5 }] },
            { id: 2, text: "ข้าวยากหมากแพง:", options: [{ text: "แต่งกลอน", score: 1 }, { text: "ปันส่วน", score: 3 }, { text: "ลงโทษ", score: 5 }] },
            { id: 3, text: "ทรยศ:", options: [{ text: "ให้อภัย", score: 1 }, { text: "เนรเทศ", score: 3 }, { text: "ประหาร", score: 5 }] },
            { id: 4, text: "กฎหมายใหม่:", options: [{ text: "ศีลธรรม", score: 1 }, { text: "เศรษฐกิจ", score: 3 }, { text: "อำนาจ", score: 5 }] },
            { id: 5, text: "บ้าน:", options: [{ text: "กระท่อม", score: 1 }, { text: "ห้องสมุด", score: 3 }, { text: "วัง", score: 5 }] },
            { id: 6, text: "ว่าง:", options: [{ text: "ศิลปะ", score: 1 }, { text: "กลยุทธ์", score: 3 }, { text: "ล่าสัตว์", score: 5 }] },
            { id: 7, text: "ค่าสูงสุด:", options: [{ text: "อิสระ", score: 1 }, { text: "ปัญญา", score: 3 }, { text: "อำนาจ", score: 5 }] },
            { id: 8, text: "ของ:", options: [{ text: "ขลุ่ย", score: 1 }, { text: "เข็มทิศ", score: 3 }, { text: "ดาบ", score: 5 }] },
            { id: 9, text: "งานเลี้ยง:", options: [{ text: "ผู้ดู", score: 1 }, { text: "กุนซือ", score: 3 }, { text: "ศูนย์กลาง", score: 5 }] },
            { id: 10, text: "ชนะใจ:", options: [{ text: "เห็นใจ", score: 1 }, { text: "ตรรกะ", score: 3 }, { text: "บารมี", score: 5 }] },
            { id: 11, text: "อาชญากรรม:", options: [{ text: "ปลง", score: 1 }, { text: "แจ้งความ", score: 3 }, { text: "จัดการ", score: 5 }] },
            { id: 12, text: "กฎ:", options: [{ text: "อึดอัด", score: 1 }, { text: "มีประโยชน์", score: 3 }, { text: "จำเป็น", score: 5 }] },
            { id: 13, text: "สงคราม:", options: [{ text: "ขวัญกำลังใจ", score: 1 }, { text: "เสบียง", score: 3 }, { text: "วินัย", score: 5 }] },
            { id: 14, text: "สินบน:", options: [{ text: "ไม่รับ", score: 1 }, { text: "คำนวณ", score: 3 }, { text: "จับกุม", score: 5 }] },
            { id: 15, text: "เป้าหมาย:", options: [{ text: "แสดงออก", score: 1 }, { text: "เข้าใจ", score: 3 }, { text: "ครองโลก", score: 5 }] },
            { id: 16, text: "คู่แข่ง:", options: [{ text: "เมิน", score: 1 }, { text: "ชิงไหวพริบ", score: 3 }, { text: "ทำลาย", score: 5 }] },
            { id: 17, text: "เปลี่ยนโลก:", options: [{ text: "ความรัก", score: 1 }, { text: "เหตุผล", score: 3 }, { text: "ระเบียบ", score: 5 }] },
            { id: 18, text: "พ่ายแพ้:", options: [{ text: "รักษาใจ", score: 1 }, { text: "วิเคราะห์", score: 3 }, { text: "แก้แค้น", score: 5 }] },
            { id: 19, text: "อาวุธ:", options: [{ text: "วาจา", score: 1 }, { text: "ความลับ", score: 3 }, { text: "หอก", score: 5 }] },
            { id: 20, text: "สมาคมลับ:", options: [{ text: "ไม่", score: 1 }, { text: "เรียนรู้", score: 3 }, { text: "นำ", score: 5 }] },
            { id: 21, text: "ความวุ่นวาย:", options: [{ text: "สวยงาม", score: 1 }, { text: "ปริศนา", score: 3 }, { text: "ภัยคุกคาม", score: 5 }] },
            { id: 22, text: "อำนาจ:", options: [{ text: "ภาพลวง", score: 1 }, { text: "โครงสร้าง", score: 3 }, { text: "สิทธิ์", score: 5 }] },
            { id: 23, text: "ประวัติศาสตร์จำ:", options: [{ text: "ศิลปิน", score: 1 }, { text: "นักคิด", score: 3 }, { text: "ผู้พิชิต", score: 5 }] },
            { id: 24, text: "วาระสุดท้าย:", options: [{ text: "ธรรมชาติ", score: 1 }, { text: "หนังสือ", score: 3 }, { text: "ข้าราชบริพาร", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "บทบาท: ชาวบ้านอิสระ / นักแสดง", desc: "<strong>[ผู้มองโลกตามจริง]</strong><br>อิสรภาพสำคัญกว่าอำนาจ<br><strong>ปัจจุบัน:</strong> ฟรีแลนซ์, ศิลปิน" },
            { min: 46, max: 65, title: "บทบาท: พ่อค้าเศรษฐี / ปราชญ์", desc: "<strong>[คนรัก]</strong><br>แสวงหาความงามและความมั่งคั่ง ไม่ใช่การปกครอง<br><strong>ปัจจุบัน:</strong> ผู้ประกอบการ, นักลงทุน" },
            { min: 66, max: 85, title: "บทบาท: แม่ทัพผู้ภักดี", desc: "<strong>[นักรบ]</strong><br>กระดูกสันหลังของจักรวรรดิ หน้าที่และเกียรติ<br><strong>ปัจจุบัน:</strong> ผู้บริหาร, ข้าราชการ" },
            { min: 86, max: 100, title: "บทบาท: จอมบงการเงา", desc: "<strong>[จอมเวทย์]</strong><br>ควบคุมจากเบื้องหลัง อำนาจคืออิทธิพล<br><strong>ปัจจุบัน:</strong> นักกลยุทธ์, ที่ปรึกษา" },
            { min: 101, max: 120, title: "บทบาท: จักรพรรดิ", desc: "<strong>[ผู้ปกครอง]</strong><br>เจตจำนงแห่งอำนาจที่แท้จริง สร้างระเบียบ<br><strong>ปัจจุบัน:</strong> CEO, ผู้นำ" }
        ]
    },

    // 13. 印尼语 (Indonesian) - Professional
    "id": {
        title: "Arketipe Kuno & Takdir",
        desc: "Berdasarkan psikologi Jung. 24 dilema untuk mengungkap peran sejati Anda di zaman kuno.",
        questions: [
            { id: 1, text: "Musuh datang:", options: [{ text: "Lari", score: 1 }, { text: "Trik", score: 3 }, { text: "Lawan", score: 5 }] },
            { id: 2, text: "Kelaparan:", options: [{ text: "Puisi", score: 1 }, { text: "Ransum", score: 3 }, { text: "Hukum", score: 5 }] },
            { id: 3, text: "Pengkhianatan:", options: [{ text: "Maafkan", score: 1 }, { text: "Asingkan", score: 3 }, { text: "Eksekusi", score: 5 }] },
            { id: 4, text: "Hukum baru:", options: [{ text: "Moral", score: 1 }, { text: "Ekonomi", score: 3 }, { text: "Kekuasaan", score: 5 }] },
            { id: 5, text: "Rumah:", options: [{ text: "Gubuk", score: 1 }, { text: "Perpustakaan", score: 3 }, { text: "Istana", score: 5 }] },
            { id: 6, text: "Waktu luang:", options: [{ text: "Seni", score: 1 }, { text: "Strategi", score: 3 }, { text: "Berburu", score: 5 }] },
            { id: 7, text: "Nilai:", options: [{ text: "Kebebasan", score: 1 }, { text: "Kebijaksanaan", score: 3 }, { text: "Kekuasaan", score: 5 }] },
            { id: 8, text: "Benda:", options: [{ text: "Seruling", score: 1 }, { text: "Kompas", score: 3 }, { text: "Pedang", score: 5 }] },
            { id: 9, text: "Pesta:", options: [{ text: "Pengamat", score: 1 }, { text: "Penasihat", score: 3 }, { text: "Pusat", score: 5 }] },
            { id: 10, text: "Menangkan hati:", options: [{ text: "Empati", score: 1 }, { text: "Logika", score: 3 }, { text: "Karisma", score: 5 }] },
            { id: 11, text: "Kejahatan:", options: [{ text: "Renung", score: 1 }, { text: "Lapor", score: 3 }, { text: "Intervensi", score: 5 }] },
            { id: 12, text: "Aturan:", options: [{ text: "Mencekik", score: 1 }, { text: "Berguna", score: 3 }, { text: "Perlu", score: 5 }] },
            { id: 13, text: "Perang:", options: [{ text: "Moral", score: 1 }, { text: "Logistik", score: 3 }, { text: "Disiplin", score: 5 }] },
            { id: 14, text: "Suap:", options: [{ text: "Tolak", score: 1 }, { text: "Hitung", score: 3 }, { text: "Tangkap", score: 5 }] },
            { id: 15, text: "Tujuan:", options: [{ text: "Ekspresi", score: 1 }, { text: "Paham", score: 3 }, { text: "Dominasi", score: 5 }] },
            { id: 16, text: "Saingan:", options: [{ text: "Abaikan", score: 1 }, { text: "Kalahkan strategi", score: 3 }, { text: "Hancurkan", score: 5 }] },
            { id: 17, text: "Ubah dunia:", options: [{ text: "Cinta", score: 1 }, { text: "Nalar", score: 3 }, { text: "Ketertiban", score: 5 }] },
            { id: 18, text: "Kekalahan:", options: [{ text: "Sembuh", score: 1 }, { text: "Analisis", score: 3 }, { text: "Balas dendam", score: 5 }] },
            { id: 19, text: "Senjata:", options: [{ text: "Kata", score: 1 }, { text: "Rahasia", score: 3 }, { text: "Tombak", score: 5 }] },
            { id: 20, text: "Perkumpulan rahasia:", options: [{ text: "Tidak", score: 1 }, { text: "Belajar", score: 3 }, { text: "Pimpin", score: 5 }] },
            { id: 21, text: "Kekacauan:", options: [{ text: "Indah", score: 1 }, { text: "Teka-teki", score: 3 }, { text: "Ancaman", score: 5 }] },
            { id: 22, text: "Otoritas:", options: [{ text: "Ilusi", score: 1 }, { text: "Struktur", score: 3 }, { text: "Hak", score: 5 }] },
            { id: 23, text: "Sejarah:", options: [{ text: "Seniman", score: 1 }, { text: "Pemikir", score: 3 }, { text: "Penakluk", score: 5 }] },
            { id: 24, text: "Akhir:", options: [{ text: "Alam", score: 1 }, { text: "Buku", score: 3 }, { text: "Rakyat", score: 5 }] }
        ],
        results: [
            { min: 0, max: 45, title: "Peran: Rakyat Bebas / Pelawak", desc: "<strong>[Realis]</strong><br>Kebebasan lebih penting dari kekuasaan.<br><strong>Modern:</strong> Freelancer, Artis." },
            { min: 46, max: 65, title: "Peran: Saudagar Kaya / Cendekiawan", desc: "<strong>[Pecinta]</strong><br>Mencari keindahan dan kekayaan, bukan takhta.<br><strong>Modern:</strong> Pengusaha, Investor." },
            { min: 66, max: 85, title: "Peran: Jenderal Setia", desc: "<strong>[Pejuang]</strong><br>Tulang punggung kekaisaran. Tugas dan kehormatan.<br><strong>Modern:</strong> Eksekutif, Pejabat." },
            { min: 86, max: 100, title: "Peran: Penguasa Bayangan", desc: "<strong>[Penyihir]</strong><br>Mengendalikan dari belakang. Kekuasaan adalah pengaruh.<br><strong>Modern:</strong> Strategis, Konsultan." },
            { min: 101, max: 120, title: "Peran: Kaisar", desc: "<strong>[Penguasa]</strong><br>Kehendak mutlak untuk berkuasa. Menciptakan ketertiban.<br><strong>Modern:</strong> CEO, Pemimpin." }
        ]
    }
};