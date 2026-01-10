// data/test4.js
// 国际标准EQ情商与社会智能评估 (Global EQ & Social Intelligence Assessment)
// 基于 Daniel Goleman 情绪智力模型
// 评估维度：自我意识、自我调节、内驱力、同理心、社交技能

const quizDataMulti = {
    // 1. 英语 (English) - Clinical Standard
    "en": {
        title: "Global EQ & Social Intelligence Assessment",
        desc: "Based on the Goleman Model. This 20-item clinical assessment evaluates your ability to perceive, control, and evaluate emotions in yourself and others.",
        questions: [
            // --- Dimension 1: Self-Awareness (Q1-4) ---
            { id: 1, text: "I can pinpoint exactly why I am feeling a certain way at any given moment.", options: [{ text: "Always", score: 5 }, { text: "Sometimes", score: 3 }, { text: "Rarely, I just feel 'bad'", score: 1 }] },
            { id: 2, text: "I am aware of how my emotions physically manifest in my body (e.g., tight chest, sweating).", options: [{ text: "Yes, immediately", score: 5 }, { text: "Only when intense", score: 3 }, { text: "No, I ignore my body", score: 1 }] },
            { id: 3, text: "I understand how my mood impacts my decisions and behavior.", options: [{ text: "Clearly", score: 5 }, { text: "Vaguely", score: 3 }, { text: "I don't think it does", score: 1 }] },
            { id: 4, text: "I know my emotional triggers and strengths.", options: [{ text: "Very well", score: 5 }, { text: "Somewhat", score: 3 }, { text: "Not really", score: 1 }] },

            // --- Dimension 2: Self-Regulation (Q5-8) ---
            { id: 5, text: "When I am angry, I can calm myself down before I act.", options: [{ text: "Usually", score: 5 }, { text: "It's a struggle", score: 3 }, { text: "No, I explode", score: 1 }] },
            { id: 6, text: "I can handle high-pressure situations without losing my composure.", options: [{ text: "Yes, I stay cool", score: 5 }, { text: "I get stressed but manage", score: 3 }, { text: "I panic or freeze", score: 1 }] },
            { id: 7, text: "When plans change unexpectedly:", options: [{ text: "I adapt quickly", score: 5 }, { text: "I feel annoyed but adjust", score: 3 }, { text: "It ruins my day", score: 1 }] },
            { id: 8, text: "I rarely say things I regret later.", options: [{ text: "True", score: 5 }, { text: "Sometimes", score: 3 }, { text: "False, I regret often", score: 1 }] },

            // --- Dimension 3: Motivation (Q9-12) ---
            { id: 9, text: "Setbacks and failures usually:", options: [{ text: "Motivate me to try harder", score: 5 }, { text: "Discourage me briefly", score: 3 }, { text: "Make me want to quit", score: 1 }] },
            { id: 10, text: "I am driven by long-term goals rather than immediate rewards.", options: [{ text: "Strongly agree", score: 5 }, { text: "Neutral", score: 3 }, { text: "I prefer instant gratification", score: 1 }] },
            { id: 11, text: "I am always looking for ways to improve myself.", options: [{ text: "Yes, constant growth", score: 5 }, { text: "Occasionally", score: 3 }, { text: "I am fine as I am", score: 1 }] },
            { id: 12, text: "I maintain a positive outlook even in difficult situations.", options: [{ text: "Yes, optimism is key", score: 5 }, { text: "Hard to say", score: 3 }, { text: "No, I'm pessimistic", score: 1 }] },

            // --- Dimension 4: Empathy (Q13-16) ---
            { id: 13, text: "I can sense how someone is feeling without them saying a word.", options: [{ text: "Often correct", score: 5 }, { text: "Sometimes", score: 3 }, { text: "I often misread people", score: 1 }] },
            { id: 14, text: "When listening to someone's problem, I focus on:", options: [{ text: "Understanding their feelings", score: 5 }, { text: "Solving the problem", score: 3 }, { text: "Waiting for my turn to speak", score: 1 }] },
            { id: 15, text: "I find it easy to see things from another person's perspective.", options: [{ text: "Very easy", score: 5 }, { text: "Requires effort", score: 3 }, { text: "No, my view is correct", score: 1 }] },
            { id: 16, text: "I feel others' pain as if it were my own.", options: [{ text: "Yes, deeply", score: 5 }, { text: "To an extent", score: 3 }, { text: "Not really", score: 1 }] },

            // --- Dimension 5: Social Skills (Q17-20) ---
            { id: 17, text: "I am good at resolving conflicts between others.", options: [{ text: "Yes, I'm a mediator", score: 5 }, { text: "I try to stay out of it", score: 3 }, { text: "I often make it worse", score: 1 }] },
            { id: 18, text: "I can build rapport with people from different backgrounds easily.", options: [{ text: "Yes, naturally", score: 5 }, { text: "Takes time", score: 3 }, { text: "I find it awkward", score: 1 }] },
            { id: 19, text: "I know how to influence or persuade others effectively.", options: [{ text: "Yes", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No", score: 1 }] },
            { id: 20, text: "People describe me as:", options: [{ text: "Easy to talk to / Charismatic", score: 5 }, { text: "Quiet / Reserved", score: 3 }, { text: "Difficult / Blunt", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "EQ Level: Developing (Low)", 
                desc: "<strong>[Archetype: The Pragmatist]</strong><br><br>" +
                      "<strong>Analysis:</strong><br>You likely rely heavily on logic and facts, often viewing emotions as distractions or weaknesses. You may struggle to read social cues or manage your own stress reactions. This can lead to misunderstandings in relationships and difficulties in team environments.<br><br>" +
                      "<strong>Prescription:</strong><br>Start with <strong>'Emotional Labeling'</strong>. Practice naming your emotions (e.g., 'I am feeling frustrated'). Work on <strong>Active Listening</strong>—listen to understand, not to reply." 
            },
            { 
                min: 41, 
                max: 70, 
                title: "EQ Level: Average (Moderate)", 
                desc: "<strong>[Archetype: The Observer]</strong><br><br>" +
                      "<strong>Analysis:</strong><br>You have a standard level of emotional intelligence. You can handle routine social interactions well and generally understand your feelings. However, high-stress situations or complex emotional conflicts may overwhelm you. You might sometimes suppress emotions rather than processing them.<br><br>" +
                      "<strong>Prescription:</strong><br>Focus on <strong>Empathy Training</strong>. Try to guess what others are feeling before they speak. Improve your <strong>Conflict Resolution</strong> skills by seeking win-win outcomes." 
            },
            { 
                min: 71, 
                max: 85, 
                title: "EQ Level: High (Advanced)", 
                desc: "<strong>[Archetype: The Diplomat]</strong><br><br>" +
                      "<strong>Analysis:</strong><br>You possess strong emotional intelligence. You are self-aware, resilient, and socially adept. People feel comfortable around you because you make them feel heard and understood. You manage stress well and are self-motivated.<br><br>" +
                      "<strong>Prescription:</strong><br>You are ready for leadership roles. Focus on <strong>Inspirational Leadership</strong>—using your EQ to motivate and develop others. Watch out for 'Compassion Fatigue' by setting healthy boundaries." 
            },
            { 
                min: 86, 
                max: 100, 
                title: "EQ Level: Exceptional (Expert)", 
                desc: "<strong>[Archetype: The Empathic Leader]</strong><br><br>" +
                      "<strong>Analysis:</strong><br>Your EQ score puts you in the top 5%. You have a mastery over your emotional landscape and an intuitive understanding of human dynamics. You navigate complex social webs effortlessly and can influence others with integrity. You are a natural healer, leader, and connector.<br><br>" +
                      "<strong>Prescription:</strong><br>Your gift is rare. Use it to mentor others and create systemic change. Your challenge is to ensure you don't absorb too much of the world's emotional weight." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - 专业版
    "zh": {
        title: "国际标准EQ情商评估",
        desc: "基于Goleman模型。本测试通过20道情境模拟题，深度评估你在自我意识、情绪管理、内驱力、同理心及社交技能五大维度的表现。",
        questions: [
            // 自我意识
            { id: 1, text: "我能准确地意识到此刻我为什么会有这种情绪（例如：愤怒背后是因为失望）。", options: [{ text: "总是可以", score: 5 }, { text: "有时", score: 3 }, { text: "很难，只觉得'心情不好'", score: 1 }] },
            { id: 2, text: "我能察觉到情绪在我身体上的生理反应（如胸闷、手心出汗、心跳加速）。", options: [{ text: "是的，非常敏锐", score: 5 }, { text: "强烈时才感觉到", score: 3 }, { text: "经常忽略身体信号", score: 1 }] },
            { id: 3, text: "我清楚我的情绪状态如何影响我的判断和决策。", options: [{ text: "非常清楚", score: 5 }, { text: "模糊", score: 3 }, { text: "我不认为有影响", score: 1 }] },
            { id: 4, text: "我知道自己的情绪“雷点”（触发点）和优势在哪里。", options: [{ text: "了如指掌", score: 5 }, { text: "知道一点", score: 3 }, { text: "完全不知道", score: 1 }] },

            // 自我调节
            { id: 5, text: "当感到愤怒时，我能在采取行动（说话/做事）前让自己冷静下来。", options: [{ text: "通常可以", score: 5 }, { text: "很费劲", score: 3 }, { text: "不行，我会爆发", score: 1 }] },
            { id: 6, text: "在高压环境下，我能保持冷静和思维清晰。", options: [{ text: "是的，我很镇定", score: 5 }, { text: "虽然紧张但能应付", score: 3 }, { text: "我会恐慌或大脑空白", score: 1 }] },
            { id: 7, text: "当计划被突发事件打乱时：", options: [{ text: "迅速调整适应", score: 5 }, { text: "感到烦躁但能接受", score: 3 }, { text: "极其抓狂，甚至崩溃", score: 1 }] },
            { id: 8, text: "我很少说出令自己事后后悔的气话。", options: [{ text: "是的", score: 5 }, { text: "偶尔", score: 3 }, { text: "经常后悔", score: 1 }] },

            // 内驱力
            { id: 9, text: "面对挫折和失败，我通常会：", options: [{ text: "将其视为学习机会，更努力", score: 5 }, { text: "短暂沮丧后恢复", score: 3 }, { text: "想要放弃，怀疑自己", score: 1 }] },
            { id: 10, text: "相比眼前的即时享乐，我更看重长远的目标。", options: [{ text: "非常同意", score: 5 }, { text: "一般", score: 3 }, { text: "我喜欢及时行乐", score: 1 }] },
            { id: 11, text: "我总是主动寻找自我提升的机会。", options: [{ text: "是的，终身成长", score: 5 }, { text: "偶尔", score: 3 }, { text: "我觉得现状挺好", score: 1 }] },
            { id: 12, text: "即使在困难处境中，我也能保持积极乐观的心态。", options: [{ text: "是的，这是我的优势", score: 5 }, { text: "很难说", score: 3 }, { text: "不，我比较悲观", score: 1 }] },

            // 同理心
            { id: 13, text: "即使对方不说话，我也能察觉到他/她的情绪状态。", options: [{ text: "经常准确", score: 5 }, { text: "有时", score: 3 }, { text: "经常误判", score: 1 }] },
            { id: 14, text: "当倾听别人的烦恼时，我的重点是：", options: [{ text: "理解和共情", score: 5 }, { text: "提供解决方案", score: 3 }, { text: "想我该说什么", score: 1 }] },
            { id: 15, text: "我很容易站在别人的立场（换位思考）看问题。", options: [{ text: "非常容易", score: 5 }, { text: "需要刻意努力", score: 3 }, { text: "不，我的观点是对的", score: 1 }] },
            { id: 16, text: "我对他人的痛苦感同身受。", options: [{ text: "是的，非常深刻", score: 5 }, { text: "某种程度上", score: 3 }, { text: "不太能", score: 1 }] },

            // 社交技能
            { id: 17, text: "我善于化解他人之间的矛盾或冲突。", options: [{ text: "是的，我是调解者", score: 5 }, { text: "尽量不卷入", score: 3 }, { text: "我经常让事情变糟", score: 1 }] },
            { id: 18, text: "我能轻松地与不同背景/性格的人建立融洽关系。", options: [{ text: "是的，这很自然", score: 5 }, { text: "需要时间熟络", score: 3 }, { text: "我觉得很尴尬", score: 1 }] },
            { id: 19, text: "我知道如何有效地影响或说服他人。", options: [{ text: "是的", score: 5 }, { text: "有时", score: 3 }, { text: "不擅长", score: 1 }] },
            { id: 20, text: "身边人通常评价我：", options: [{ text: "好相处/有魅力/情商高", score: 5 }, { text: "话少/内向", score: 3 }, { text: "难相处/说话太直", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "EQ水平：发展中 (Developing)", 
                desc: "<strong>【心理原型】：实用主义者 (The Pragmatist)</strong><br><br>" +
                      "<strong>📊 深度分析：</strong><br>你的情商水平一般，你倾向于过度依赖逻辑和事实，往往忽略情绪的价值，甚至视情绪为干扰。你可能很难察觉社交中的潜台词，或者在压力下容易失控。这可能导致人际关系紧张或在团队中被误解。<br><br>" +
                      "<strong>💊 提升建议：</strong><br>1. <strong>情绪命名</strong>：练习每天记录并命名你的情绪（如“我感到焦虑”而不是“我不舒服”）。<br>2. <strong>暂停练习</strong>：在反应前深呼吸三秒。<br>3. <strong>倾听</strong>：与人交谈时，专注于“理解”而非“反驳”。" 
            },
            { 
                min: 41, 
                max: 70, 
                title: "EQ水平：平均 (Average)", 
                desc: "<strong>【心理原型】：观察者 (The Observer)</strong><br><br>" +
                      "<strong>📊 深度分析：</strong><br>你拥有标准的情商水平。在日常和熟悉的社交环境中，你能表现得体。但在高压、冲突或复杂的人际博弈中，你可能会感到力不从心或选择回避。你有时会压抑情绪，而不是消化它们。<br><br>" +
                      "<strong>💊 提升建议：</strong><br>1. <strong>同理心训练</strong>：在他人说话前，先在心里预测他的感受。<br>2. <strong>冲突管理</strong>：不要回避冲突，尝试寻找双赢（Win-Win）的解决方案。<br>3. <strong>自我接纳</strong>：接纳负面情绪的存在，不要评判自己。" 
            },
            { 
                min: 71, 
                max: 85, 
                title: "EQ水平：优秀 (High)", 
                desc: "<strong>【心理原型】：外交官 (The Diplomat)</strong><br><br>" +
                      "<strong>📊 深度分析：</strong><br>你的情商显著高于平均水平。你不仅深刻了解自己，还能敏锐地感知他人。你具有很强的抗压能力和内驱力。人们愿意与你相处，因为你让他们感到被尊重和被理解。你是团队中的润滑剂。<br><br>" +
                      "<strong>💊 提升建议：</strong><br>你已经具备了<strong>领导力潜质</strong>。尝试运用你的影响力去激励他人，而不仅仅是维持和谐。同时，注意设立<strong>情绪边界</strong>，避免过度承担他人的情绪垃圾。" 
            },
            { 
                min: 86, 
                max: 100, 
                title: "EQ水平：卓越 (Exceptional)", 
                desc: "<strong>【心理原型】：共情领袖 (The Empathic Leader)</strong><br><br>" +
                      "<strong>📊 深度分析：</strong><br>你的情商处于人群顶尖的5%。你对人性有着深刻的洞察力，能够驾驭极其复杂的社会关系网。你不仅能管理自己的情绪，还能通过情绪感染力来引导群体。你是天生的疗愈者、领袖和连接者。<br><br>" +
                      "<strong>💊 提升建议：</strong><br>你的天赋是稀缺资源。请将这种能力用于指导（Mentorship）和创造更大的社会价值。你的挑战在于防止“共情疲劳”（Compassion Fatigue），请务必照顾好自己的能量储备。" 
            }
        ]
    },

// 3. 德语 (German) - Professional
    "de": {
        title: "Globale EQ & Soziale Intelligenz Analyse",
        desc: "Basierend auf dem Goleman-Modell. Dieser klinische Test bewertet Ihre emotionale Wahrnehmung, Regulierung und soziale Kompetenz anhand von 20 Szenarien.",
        questions: [
            // Selbstwahrnehmung
            { id: 1, text: "Ich kann genau benennen, warum ich mich in einem bestimmten Moment so fühle.", options: [{ text: "Immer", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Selten", score: 1 }] },
            { id: 2, text: "Ich bemerke körperliche Anzeichen von Emotionen (z.B. Engegefühl, Schwitzen) sofort.", options: [{ text: "Ja, sofort", score: 5 }, { text: "Nur wenn intensiv", score: 3 }, { text: "Nein, ich ignoriere sie", score: 1 }] },
            { id: 3, text: "Ich verstehe, wie meine Laune meine Entscheidungen beeinflusst.", options: [{ text: "Klar", score: 5 }, { text: "Vage", score: 3 }, { text: "Glaube nicht", score: 1 }] },
            { id: 4, text: "Ich kenne meine emotionalen Auslöser ('Trigger') genau.", options: [{ text: "Sehr gut", score: 5 }, { text: "Einigermaßen", score: 3 }, { text: "Nicht wirklich", score: 1 }] },

            // Selbstregulierung
            { id: 5, text: "Wenn ich wütend bin, kann ich mich beruhigen, bevor ich handle.", options: [{ text: "Meistens", score: 5 }, { text: "Schwierig", score: 3 }, { text: "Nein, ich explodiere", score: 1 }] },
            { id: 6, text: "Ich bleibe unter hohem Druck ruhig und klar.", options: [{ text: "Ja, bin cool", score: 5 }, { text: "Gestresst aber okay", score: 3 }, { text: "Panik", score: 1 }] },
            { id: 7, text: "Bei plötzlichen Planänderungen:", options: [{ text: "Passe mich an", score: 5 }, { text: "Genervt", score: 3 }, { text: "Tag ruiniert", score: 1 }] },
            { id: 8, text: "Ich bereue selten Dinge, die ich im Affekt gesagt habe.", options: [{ text: "Stimmt", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Bereue oft", score: 1 }] },

            // Motivation
            { id: 9, text: "Rückschläge motivieren mich, es besser zu machen.", options: [{ text: "Ja, Ansporn", score: 5 }, { text: "Kurz entmutigt", score: 3 }, { text: "Ich gebe auf", score: 1 }] },
            { id: 10, text: "Langfristige Ziele sind mir wichtiger als sofortige Belohnung.", options: [{ text: "Absolut", score: 5 }, { text: "Neutral", score: 3 }, { text: "Will sofort Spaß", score: 1 }] },
            { id: 11, text: "Ich suche ständig nach Wegen, mich zu verbessern.", options: [{ text: "Ja, Wachstum", score: 5 }, { text: "Gelegentlich", score: 3 }, { text: "Bin zufrieden so", score: 1 }] },
            { id: 12, text: "Ich bleibe auch in schwierigen Situationen optimistisch.", options: [{ text: "Ja, Optimismus", score: 5 }, { text: "Schwer zu sagen", score: 3 }, { text: "Bin Pessimist", score: 1 }] },

            // Empathie
            { id: 13, text: "Ich spüre, wie sich jemand fühlt, ohne dass er es sagt.", options: [{ text: "Oft richtig", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Oft falsch", score: 1 }] },
            { id: 14, text: "Beim Zuhören konzentriere ich mich auf:", options: [{ text: "Gefühle verstehen", score: 5 }, { text: "Lösung finden", score: 3 }, { text: "Meine Antwort", score: 1 }] },
            { id: 15, text: "Es fällt mir leicht, die Perspektive anderer einzunehmen.", options: [{ text: "Sehr leicht", score: 5 }, { text: "Braucht Mühe", score: 3 }, { text: "Meine Sicht zählt", score: 1 }] },
            { id: 16, text: "Ich fühle den Schmerz anderer, als wäre es mein eigener.", options: [{ text: "Ja, tief", score: 5 }, { text: "Bis zu einem Grad", score: 3 }, { text: "Nicht wirklich", score: 1 }] },

            // Soziale Kompetenz
            { id: 17, text: "Ich bin gut darin, Konflikte zu lösen.", options: [{ text: "Ja, Mediator", score: 5 }, { text: "Halte mich raus", score: 3 }, { text: "Mache es schlimmer", score: 1 }] },
            { id: 18, text: "Ich kann leicht Beziehungen zu verschiedenen Menschen aufbauen.", options: [{ text: "Ja, natürlich", score: 5 }, { text: "Brauche Zeit", score: 3 }, { text: "Finde es schwer", score: 1 }] },
            { id: 19, text: "Ich weiß, wie man andere effektiv überzeugt.", options: [{ text: "Ja", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein", score: 1 }] },
            { id: 20, text: "Andere beschreiben mich als:", options: [{ text: "Charismatisch", score: 5 }, { text: "Ruhig/Reserviert", score: 3 }, { text: "Schwierig/Direkt", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "EQ-Level: Entwicklungsfähig (Niedrig)", 
                desc: "<strong>[Archetyp: Der Pragmatiker]</strong><br>Sie verlassen sich stark auf Logik und Fakten, übersehen dabei aber oft die emotionale Ebene. Dies kann zu Missverständnissen führen.<br><strong>Tipp:</strong> Üben Sie 'Emotionales Labeling' – benennen Sie Ihre Gefühle bewusst." 
            },
            { 
                min: 41, 
                max: 70, 
                title: "EQ-Level: Durchschnitt (Moderat)", 
                desc: "<strong>[Archetyp: Der Beobachter]</strong><br>Sie kommen im Alltag gut zurecht, aber Stresssituationen oder komplexe Konflikte können Sie überfordern. Sie neigen dazu, Emotionen zu unterdrücken.<br><strong>Tipp:</strong> Fokussieren Sie sich auf Empathie-Training und Konfliktlösung." 
            },
            { 
                min: 71, 
                max: 85, 
                title: "EQ-Level: Hoch (Fortgeschritten)", 
                desc: "<strong>[Archetyp: Der Diplomat]</strong><br>Sie besitzen eine starke emotionale Intelligenz. Sie sind belastbar, selbstbewusst und sozial geschickt. Menschen fühlen sich bei Ihnen verstanden.<br><strong>Tipp:</strong> Nutzen Sie Ihre Fähigkeiten für Führungsaufgaben, aber achten Sie auf Ihre Grenzen." 
            },
            { 
                min: 86, 
                max: 100, 
                title: "EQ-Level: Exzellent (Experte)", 
                desc: "<strong>[Archetyp: Der empathische Führer]</strong><br>Ihr EQ gehört zu den Top 5%. Sie verstehen menschliche Dynamiken intuitiv und können andere integer beeinflussen. Ein geborener Anführer.<br><strong>Tipp:</strong> Nutzen Sie diese seltene Gabe als Mentor, aber schützen Sie sich vor 'Mitleidsmüdigkeit'." 
            }
        ]
    },

    // 4. 日语 (Japanese) - Professional
    "ja": {
        title: "EQ（心の知能指数）完全診断",
        desc: "ダニエル・ゴールマンのモデルに基づく。20の質問で、自己認識、自己制御、共感力、社会的スキルを専門的に評価します。",
        questions: [
            // 自己認識
            { id: 1, text: "なぜ今その感情を抱いているのか、正確に理解できる。", options: [{ text: "いつもできる", score: 5 }, { text: "時々", score: 3 }, { text: "ただ気分が悪いだけ", score: 1 }] },
            { id: 2, text: "感情の身体的反応（動悸、発汗など）にすぐに気づく。", options: [{ text: "はい、即座に", score: 5 }, { text: "強い時だけ", score: 3 }, { text: "無視する", score: 1 }] },
            { id: 3, text: "気分が自分の判断や行動にどう影響するか理解している。", options: [{ text: "明確に理解", score: 5 }, { text: "なんとなく", score: 3 }, { text: "影響ないと思う", score: 1 }] },
            { id: 4, text: "自分の感情のトリガー（引き金）と強みを知っている。", options: [{ text: "よく知っている", score: 5 }, { text: "少し", score: 3 }, { text: "知らない", score: 1 }] },

            // 自己制御
            { id: 5, text: "怒りを感じても、行動する前に自分を落ち着かせることができる。", options: [{ text: "たいていできる", score: 5 }, { text: "苦労する", score: 3 }, { text: "爆発してしまう", score: 1 }] },
            { id: 6, text: "プレッシャーの中でも冷静さを保てる。", options: [{ text: "はい、冷静だ", score: 5 }, { text: "緊張するが対処", score: 3 }, { text: "パニックになる", score: 1 }] },
            { id: 7, text: "予定が突然変更になった時：", options: [{ text: "すぐ順応する", score: 5 }, { text: "不満だが調整", score: 3 }, { text: "一日台無し", score: 1 }] },
            { id: 8, text: "後悔するような言葉を感情的に言うことはめったにない。", options: [{ text: "その通り", score: 5 }, { text: "時々ある", score: 3 }, { text: "よくある", score: 1 }] },

            // 動機付け
            { id: 9, text: "失敗や挫折に直面した時：", options: [{ text: "成長の機会とする", score: 5 }, { text: "一時的に落ち込む", score: 3 }, { text: "辞めたくなる", score: 1 }] },
            { id: 10, text: "目先の快楽より、長期的な目標を重視する。", options: [{ text: "強く同意", score: 5 }, { text: "普通", score: 3 }, { text: "即時快楽が好き", score: 1 }] },
            { id: 11, text: "常に自己改善の方法を探している。", options: [{ text: "はい、常に成長", score: 5 }, { text: "たまに", score: 3 }, { text: "現状でいい", score: 1 }] },
            { id: 12, text: "困難な状況でも楽観的でいられる。", options: [{ text: "はい、強みだ", score: 5 }, { text: "難しい", score: 3 }, { text: "悲観的だ", score: 1 }] },

            // 共感力
            { id: 13, text: "言葉がなくても、相手の感情を察することができる。", options: [{ text: "よく当たる", score: 5 }, { text: "時々", score: 3 }, { text: "よく誤解する", score: 1 }] },
            { id: 14, text: "悩みを聞く時、重視するのは：", options: [{ text: "感情の理解", score: 5 }, { text: "問題解決", score: 3 }, { text: "自分の話す番", score: 1 }] },
            { id: 15, text: "他人の視点に立って物事を見るのが得意だ。", options: [{ text: "とても得意", score: 5 }, { text: "努力が必要", score: 3 }, { text: "自分の視点が正しい", score: 1 }] },
            { id: 16, text: "他人の痛みを自分のことのように感じる。", options: [{ text: "はい、深く", score: 5 }, { text: "ある程度", score: 3 }, { text: "あまりない", score: 1 }] },

            // 社会的スキル
            { id: 17, text: "対立や喧嘩の仲裁が得意だ。", options: [{ text: "はい、仲裁者だ", score: 5 }, { text: "関わりたくない", score: 3 }, { text: "悪化させる", score: 1 }] },
            { id: 18, text: "異なる背景を持つ人ともすぐに打ち解けられる。", options: [{ text: "はい、自然に", score: 5 }, { text: "時間がかかる", score: 3 }, { text: "苦手だ", score: 1 }] },
            { id: 19, text: "人を効果的に説得・影響する方法を知っている。", options: [{ text: "はい", score: 5 }, { text: "時々", score: 3 }, { text: "いいえ", score: 1 }] },
            { id: 20, text: "周囲からの評価は：", options: [{ text: "話しやすい/魅力的", score: 5 }, { text: "無口/控えめ", score: 3 }, { text: "気難しい/直言的", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "EQレベル：発展途上 (Developing)", 
                desc: "<strong>【心理原型】：実用主義者</strong><br>論理や事実を重視するあまり、感情の価値を見過ごしがちです。感情を「邪魔なもの」と捉えているかもしれません。<br><strong>アドバイス：</strong>感情に名前をつける練習（Emotional Labeling）から始めましょう。" 
            },
            { 
                min: 41, 
                max: 70, 
                title: "EQレベル：平均的 (Average)", 
                desc: "<strong>【心理原型】：観察者</strong><br>標準的なEQを持っています。日常的な対人関係は良好ですが、高ストレス下や複雑な対立場面では圧倒されることがあります。<br><strong>アドバイス：</strong>「傾聴」と「共感」を意識的に練習し、対立を避けるのではなく解決するスキルを磨きましょう。" 
            },
            { 
                min: 71, 
                max: 85, 
                title: "EQレベル：高い (High)", 
                desc: "<strong>【心理原型】：外交官</strong><br>優れた感情的知性を持っています。自己認識が高く、回復力（レジリエンス）があり、社交的です。人々はあなたと一緒にいると安心感を覚えます。<br><strong>アドバイス：</strong>リーダーシップを発揮する準備ができています。他者の成長を促すことに力を注いでください。" 
            },
            { 
                min: 86, 
                max: 100, 
                title: "EQレベル：卓越 (Exceptional)", 
                desc: "<strong>【心理原型】：共感的リーダー</strong><br>上位5%に入るEQの持ち主です。自分の感情を完全にコントロールできるだけでなく、直感的に他人の力学を理解します。<br><strong>アドバイス：</strong>その稀有な才能を、メンタリングや社会的な変化のために使ってください。ただし「共感疲労」には注意が必要です。" 
            }
        ]
    },

    // 5. 法语 (French) - Professional
    "fr": {
        title: "Évaluation de l'Intelligence Émotionnelle (EQ)",
        desc: "Basé sur le modèle Goleman. Ce test clinique de 20 questions évalue votre conscience de soi, autorégulation et compétences sociales.",
        questions: [
            // Conscience de soi
            { id: 1, text: "Je peux identifier exactement pourquoi je ressens une émotion.", options: [{ text: "Toujours", score: 5 }, { text: "Parfois", score: 3 }, { text: "Rarement", score: 1 }] },
            { id: 2, text: "Je remarque les signes physiques de mes émotions.", options: [{ text: "Immédiatement", score: 5 }, { text: "Si intenses", score: 3 }, { text: "Je les ignore", score: 1 }] },
            { id: 3, text: "Je comprends comment mon humeur impacte mes décisions.", options: [{ text: "Clairement", score: 5 }, { text: "Vaguement", score: 3 }, { text: "Pas d'impact", score: 1 }] },
            { id: 4, text: "Je connais mes déclencheurs émotionnels.", options: [{ text: "Très bien", score: 5 }, { text: "Un peu", score: 3 }, { text: "Pas vraiment", score: 1 }] },

            // Autorégulation
            { id: 5, text: "En colère, je peux me calmer avant d'agir.", options: [{ text: "Généralement", score: 5 }, { text: "Difficilement", score: 3 }, { text: "Non, j'explose", score: 1 }] },
            { id: 6, text: "Je garde mon sang-froid sous pression.", options: [{ text: "Oui, calme", score: 5 }, { text: "Stressé mais gère", score: 3 }, { text: "Panique", score: 1 }] },
            { id: 7, text: "Face à un imprévu :", options: [{ text: "Je m'adapte", score: 5 }, { text: "Agacé", score: 3 }, { text: "Journée gâchée", score: 1 }] },
            { id: 8, text: "Je regrette rarement mes paroles.", options: [{ text: "Vrai", score: 5 }, { text: "Parfois", score: 3 }, { text: "Souvent", score: 1 }] },

            // Motivation
            { id: 9, text: "L'échec me motive à essayer plus fort.", options: [{ text: "Oui", score: 5 }, { text: "Découragé un peu", score: 3 }, { text: "J'abandonne", score: 1 }] },
            { id: 10, text: "Je privilégie le long terme au plaisir immédiat.", options: [{ text: "Tout à fait", score: 5 }, { text: "Neutre", score: 3 }, { text: "Plaisir immédiat", score: 1 }] },
            { id: 11, text: "Je cherche toujours à m'améliorer.", options: [{ text: "Oui, croissance", score: 5 }, { text: "Parfois", score: 3 }, { text: "Ça va comme ça", score: 1 }] },
            { id: 12, text: "Je reste optimiste dans la difficulté.", options: [{ text: "Oui", score: 5 }, { text: "Difficile à dire", score: 3 }, { text: "Non, pessimiste", score: 1 }] },

            // Empathie
            { id: 13, text: "Je sens ce que les autres ressentent sans mots.", options: [{ text: "Souvent juste", score: 5 }, { text: "Parfois", score: 3 }, { text: "Souvent faux", score: 1 }] },
            { id: 14, text: "En écoutant, je me concentre sur :", options: [{ text: "Comprendre", score: 5 }, { text: "Résoudre", score: 3 }, { text: "Répondre", score: 1 }] },
            { id: 15, text: "Je me mets facilement à la place des autres.", options: [{ text: "Très facile", score: 5 }, { text: "Demande effort", score: 3 }, { text: "Non", score: 1 }] },
            { id: 16, text: "Je ressens la douleur des autres.", options: [{ text: "Profondément", score: 5 }, { text: "Un peu", score: 3 }, { text: "Pas vraiment", score: 1 }] },

            // Social
            { id: 17, text: "Je suis bon pour résoudre les conflits.", options: [{ text: "Oui, médiateur", score: 5 }, { text: "J'évite", score: 3 }, { text: "J'empire tout", score: 1 }] },
            { id: 18, text: "Je crée facilement des liens.", options: [{ text: "Naturellement", score: 5 }, { text: "Prend du temps", score: 3 }, { text: "Malaisant", score: 1 }] },
            { id: 19, text: "Je sais persuader les autres.", options: [{ text: "Oui", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non", score: 1 }] },
            { id: 20, text: "On me décrit comme :", options: [{ text: "Charismatique", score: 5 }, { text: "Réservé", score: 3 }, { text: "Difficile", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "Niveau EQ : En développement", 
                desc: "<strong>[Archétype : Le Pragmatique]</strong><br>Vous privilégiez la logique aux émotions, ce qui peut créer des malentendus.<br><strong>Conseil :</strong> Apprenez à nommer vos émotions." 
            },
            { 
                min: 41, 
                max: 70, 
                title: "Niveau EQ : Moyen", 
                desc: "<strong>[Archétype : L'Observateur]</strong><br>Vous gérez bien le quotidien mais le stress vous dépasse parfois.<br><strong>Conseil :</strong> Développez votre empathie active." 
            },
            { 
                min: 71, 
                max: 85, 
                title: "Niveau EQ : Élevé", 
                desc: "<strong>[Archétype : Le Diplomate]</strong><br>Vous êtes résilient et socialement habile. Les gens se sentent compris avec vous.<br><strong>Conseil :</strong> Utilisez votre EQ pour inspirer les autres." 
            },
            { 
                min: 86, 
                max: 100, 
                title: "Niveau EQ : Exceptionnel", 
                desc: "<strong>[Archétype : Le Leader Empathique]</strong><br>Top 5%. Vous maîtrisez les dynamiques humaines et influencez avec intégrité.<br><strong>Conseil :</strong> Devenez un mentor, mais protégez votre énergie." 
            }
        ]
    },

    // 6. 西班牙语 (Spanish) - Professional
    "es": {
        title: "Evaluación de Inteligencia Emocional (EQ)",
        desc: "Basado en el modelo Goleman. 20 preguntas clínicas para evaluar tu autoconciencia, regulación y habilidades sociales.",
        questions: [
            // Autoconciencia
            { id: 1, text: "Puedo identificar exactamente por qué me siento así.", options: [{ text: "Siempre", score: 5 }, { text: "A veces", score: 3 }, { text: "Rara vez", score: 1 }] },
            { id: 2, text: "Noto las señales físicas de mis emociones.", options: [{ text: "Inmediatamente", score: 5 }, { text: "Solo si intenso", score: 3 }, { text: "Las ignoro", score: 1 }] },
            { id: 3, text: "Entiendo cómo mi humor afecta mis decisiones.", options: [{ text: "Claramente", score: 5 }, { text: "Vagamente", score: 3 }, { text: "No afecta", score: 1 }] },
            { id: 4, text: "Conozco mis detonantes emocionales.", options: [{ text: "Muy bien", score: 5 }, { text: "Algo", score: 3 }, { text: "No realmente", score: 1 }] },

            // Autorregulación
            { id: 5, text: "Enojado, puedo calmarme antes de actuar.", options: [{ text: "Usualmente", score: 5 }, { text: "Cuesta", score: 3 }, { text: "Exploto", score: 1 }] },
            { id: 6, text: "Mantengo la calma bajo presión.", options: [{ text: "Sí, tranquilo", score: 5 }, { text: "Estresado pero bien", score: 3 }, { text: "Pánico", score: 1 }] },
            { id: 7, text: "Ante cambios inesperados:", options: [{ text: "Me adapto", score: 5 }, { text: "Molesto", score: 3 }, { text: "Día arruinado", score: 1 }] },
            { id: 8, text: "Rara vez me arrepiento de lo que digo.", options: [{ text: "Cierto", score: 5 }, { text: "A veces", score: 3 }, { text: "Falso", score: 1 }] },

            // Motivación
            { id: 9, text: "El fracaso me motiva a mejorar.", options: [{ text: "Sí", score: 5 }, { text: "Me desanima poco", score: 3 }, { text: "Renuncio", score: 1 }] },
            { id: 10, text: "Prefiero metas a largo plazo sobre placer inmediato.", options: [{ text: "Totalmente", score: 5 }, { text: "Neutral", score: 3 }, { text: "Placer ya", score: 1 }] },
            { id: 11, text: "Busco mejorarme constantemente.", options: [{ text: "Sí, crecimiento", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "Estoy bien así", score: 1 }] },
            { id: 12, text: "Soy optimista en situaciones difíciles.", options: [{ text: "Sí", score: 5 }, { text: "Difícil decir", score: 3 }, { text: "No, pesimista", score: 1 }] },

            // Empatía
            { id: 13, text: "Siento lo que otros sienten sin palabras.", options: [{ text: "A menudo bien", score: 5 }, { text: "A veces", score: 3 }, { text: "A menudo mal", score: 1 }] },
            { id: 14, text: "Al escuchar, me enfoco en:", options: [{ text: "Entender", score: 5 }, { text: "Resolver", score: 3 }, { text: "Responder", score: 1 }] },
            { id: 15, text: "Me pongo fácil en el lugar del otro.", options: [{ text: "Muy fácil", score: 5 }, { text: "Requiere esfuerzo", score: 3 }, { text: "No", score: 1 }] },
            { id: 16, text: "Siento el dolor ajeno como propio.", options: [{ text: "Sí, profundo", score: 5 }, { text: "Un poco", score: 3 }, { text: "No mucho", score: 1 }] },

            // Social
            { id: 17, text: "Soy bueno resolviendo conflictos.", options: [{ text: "Sí, mediador", score: 5 }, { text: "Evito", score: 3 }, { text: "Empeoro", score: 1 }] },
            { id: 18, text: "Conecto fácil con gente diversa.", options: [{ text: "Naturalmente", score: 5 }, { text: "Toma tiempo", score: 3 }, { text: "Incómodo", score: 1 }] },
            { id: 19, text: "Sé persuadir a otros.", options: [{ text: "Sí", score: 5 }, { text: "A veces", score: 3 }, { text: "No", score: 1 }] },
            { id: 20, text: "Me describen como:", options: [{ text: "Carismático", score: 5 }, { text: "Reservado", score: 3 }, { text: "Difícil", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "Nivel EQ: En Desarrollo", 
                desc: "<strong>[Arquetipo: El Pragmático]</strong><br>Confías mucho en la lógica y puedes ignorar el valor de las emociones.<br><strong>Consejo:</strong> Practica nombrar tus emociones." 
            },
            { 
                min: 41, 
                max: 70, 
                title: "Nivel EQ: Promedio", 
                desc: "<strong>[Arquetipo: El Observador]</strong><br>Manejas bien lo cotidiano pero el estrés te supera.<br><strong>Consejo:</strong> Entrena tu empatía activa." 
            },
            { 
                min: 71, 
                max: 85, 
                title: "Nivel EQ: Alto", 
                desc: "<strong>[Arquetipo: El Diplomático]</strong><br>Eres resiliente y socialmente hábil. La gente se siente segura contigo.<br><strong>Consejo:</strong> Usa tu EQ para liderar." 
            },
            { 
                min: 86, 
                max: 100, 
                title: "Nivel EQ: Excepcional", 
                desc: "<strong>[Arquetipo: Líder Empático]</strong><br>Top 5%. Entiendes la dinámica humana intuitivamente.<br><strong>Consejo:</strong> Sé un mentor, pero cuida tu energía." 
            }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Professional
    "pt": {
        title: "Avaliação de Inteligência Emocional (EQ)",
        desc: "Baseado no modelo Goleman. 20 perguntas clínicas para avaliar autoconsciência, regulação e habilidades sociais.",
        questions: [
            // Autoconsciência
            { id: 1, text: "Consigo identificar exatamente por que me sinto assim.", options: [{ text: "Sempre", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Raramente", score: 1 }] },
            { id: 2, text: "Percebo sinais físicos das minhas emoções.", options: [{ text: "Imediatamente", score: 5 }, { text: "Só se intenso", score: 3 }, { text: "Ignoro", score: 1 }] },
            { id: 3, text: "Entendo como meu humor afeta minhas decisões.", options: [{ text: "Claramente", score: 5 }, { text: "Vagamente", score: 3 }, { text: "Não afeta", score: 1 }] },
            { id: 4, text: "Conheço meus gatilhos emocionais.", options: [{ text: "Muito bem", score: 5 }, { text: "Um pouco", score: 3 }, { text: "Não realmente", score: 1 }] },

            // Autorregulação
            { id: 5, text: "Com raiva, consigo me acalmar antes de agir.", options: [{ text: "Geralmente", score: 5 }, { text: "Difícil", score: 3 }, { text: "Não, explodo", score: 1 }] },
            { id: 6, text: "Mantenho a calma sob pressão.", options: [{ text: "Sim, tranquilo", score: 5 }, { text: "Estressado mas ok", score: 3 }, { text: "Pânico", score: 1 }] },
            { id: 7, text: "Mudanças inesperadas:", options: [{ text: "Adapto-me", score: 5 }, { text: "Irritado", score: 3 }, { text: "Dia arruinado", score: 1 }] },
            { id: 8, text: "Raramente me arrependo do que digo.", options: [{ text: "Verdade", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Falso", score: 1 }] },

            // Motivação
            { id: 9, text: "O fracasso me motiva a melhorar.", options: [{ text: "Sim", score: 5 }, { text: "Desanima pouco", score: 3 }, { text: "Desisto", score: 1 }] },
            { id: 10, text: "Prefiro metas longas a prazer imediato.", options: [{ text: "Totalmente", score: 5 }, { text: "Neutro", score: 3 }, { text: "Prazer já", score: 1 }] },
            { id: 11, text: "Busco melhorar sempre.", options: [{ text: "Sim, crescimento", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "Estou bem assim", score: 1 }] },
            { id: 12, text: "Sou otimista em situações difíceis.", options: [{ text: "Sim", score: 5 }, { text: "Difícil dizer", score: 3 }, { text: "Não, pessimista", score: 1 }] },

            // Empatia
            { id: 13, text: "Sinto o que os outros sentem sem palavras.", options: [{ text: "Muitas vezes", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Frequentemente erro", score: 1 }] },
            { id: 14, text: "Ao ouvir, foco em:", options: [{ text: "Entender", score: 5 }, { text: "Resolver", score: 3 }, { text: "Responder", score: 1 }] },
            { id: 15, text: "Coloco-me fácil no lugar do outro.", options: [{ text: "Muito fácil", score: 5 }, { text: "Requer esforço", score: 3 }, { text: "Não", score: 1 }] },
            { id: 16, text: "Sinto a dor alheia como minha.", options: [{ text: "Sim, profundo", score: 5 }, { text: "Um pouco", score: 3 }, { text: "Não muito", score: 1 }] },

            // Social
            { id: 17, text: "Sou bom resolvendo conflitos.", options: [{ text: "Sim, mediador", score: 5 }, { text: "Evito", score: 3 }, { text: "Pioro", score: 1 }] },
            { id: 18, text: "Crio laços facilmente.", options: [{ text: "Naturalmente", score: 5 }, { text: "Leva tempo", score: 3 }, { text: "Incômodo", score: 1 }] },
            { id: 19, text: "Sei persuadir os outros.", options: [{ text: "Sim", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não", score: 1 }] },
            { id: 20, text: "Descrevem-me como:", options: [{ text: "Carismático", score: 5 }, { text: "Reservado", score: 3 }, { text: "Difícil", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "Nível EQ: Em Desenvolvimento", 
                desc: "<strong>[Arquétipo: O Pragmático]</strong><br>Confia muito na lógica e pode ignorar o valor das emoções.<br><strong>Conselho:</strong> Pratique nomear suas emoções." 
            },
            { 
                min: 41, 
                max: 70, 
                title: "Nível EQ: Médio", 
                desc: "<strong>[Arquétipo: O Observador]</strong><br>Lida bem com o cotidiano, mas o estresse pode superar.<br><strong>Conselho:</strong> Treine sua empatia ativa." 
            },
            { 
                min: 71, 
                max: 85, 
                title: "Nível EQ: Alto", 
                desc: "<strong>[Arquétipo: O Diplomata]</strong><br>Resiliente e socialmente hábil. As pessoas se sentem seguras com você.<br><strong>Conselho:</strong> Use seu EQ para liderar." 
            },
            { 
                min: 86, 
                max: 100, 
                title: "Nível EQ: Excepcional", 
                desc: "<strong>[Arquétipo: Líder Empático]</strong><br>Top 5%. Entende a dinâmica humana intuitivamente.<br><strong>Conselho:</strong> Seja um mentor, mas cuide da energia." 
            }
        ]
    },

    // 8. 俄语 (Russian) - Professional
    "ru": {
        title: "Оценка эмоционального интеллекта (EQ)",
        desc: "На основе модели Гоулмана. 20 вопросов для оценки самосознания, регуляции и социальных навыков.",
        questions: [
            { id: 1, text: "Я точно понимаю причину своих эмоций.", options: [{ text: "Всегда", score: 5 }, { text: "Иногда", score: 3 }, { text: "Редко", score: 1 }] },
            { id: 2, text: "Замечаю физические проявления эмоций.", options: [{ text: "Сразу", score: 5 }, { text: "Если сильно", score: 3 }, { text: "Игнорирую", score: 1 }] },
            { id: 3, text: "Понимаю влияние настроения на решения.", options: [{ text: "Ясно", score: 5 }, { text: "Смутно", score: 3 }, { text: "Не влияет", score: 1 }] },
            { id: 4, text: "Знаю свои эмоциональные триггеры.", options: [{ text: "Отлично", score: 5 }, { text: "Немного", score: 3 }, { text: "Нет", score: 1 }] },
            { id: 5, text: "Могу успокоиться в гневе до действий.", options: [{ text: "Обычно", score: 5 }, { text: "С трудом", score: 3 }, { text: "Нет, взрываюсь", score: 1 }] },
            { id: 6, text: "Сохраняю спокойствие под давлением.", options: [{ text: "Да", score: 5 }, { text: "Стресс, но справляюсь", score: 3 }, { text: "Паника", score: 1 }] },
            { id: 7, text: "При смене планов:", options: [{ text: "Адаптируюсь", score: 5 }, { text: "Раздражаюсь", score: 3 }, { text: "День испорчен", score: 1 }] },
            { id: 8, text: "Редко жалею о сказанном.", options: [{ text: "Правда", score: 5 }, { text: "Иногда", score: 3 }, { text: "Часто жалею", score: 1 }] },
            { id: 9, text: "Неудачи мотивируют меня.", options: [{ text: "Да", score: 5 }, { text: "Расстраивают", score: 3 }, { text: "Сдаюсь", score: 1 }] },
            { id: 10, text: "Долгосрочные цели важнее удовольствий.", options: [{ text: "Да", score: 5 }, { text: "Средне", score: 3 }, { text: "Хочу все сразу", score: 1 }] },
            { id: 11, text: "Ищу пути саморазвития.", options: [{ text: "Постоянно", score: 5 }, { text: "Иногда", score: 3 }, { text: "Мне и так хорошо", score: 1 }] },
            { id: 12, text: "Оптимистичен в трудностях.", options: [{ text: "Да", score: 5 }, { text: "Сложно сказать", score: 3 }, { text: "Нет, пессимист", score: 1 }] },
            { id: 13, text: "Чувствую эмоции других без слов.", options: [{ text: "Часто верно", score: 5 }, { text: "Иногда", score: 3 }, { text: "Ошибаюсь", score: 1 }] },
            { id: 14, text: "Слушая, я фокусируюсь на:", options: [{ text: "Понимании", score: 5 }, { text: "Решении", score: 3 }, { text: "Ответе", score: 1 }] },
            { id: 15, text: "Легко ставлю себя на место других.", options: [{ text: "Очень легко", score: 5 }, { text: "Нужно усилие", score: 3 }, { text: "Нет", score: 1 }] },
            { id: 16, text: "Чувствую чужую боль как свою.", options: [{ text: "Глубоко", score: 5 }, { text: "Немного", score: 3 }, { text: "Нет", score: 1 }] },
            { id: 17, text: "Хорошо разрешаю конфликты.", options: [{ text: "Да, медиатор", score: 5 }, { text: "Избегаю", score: 3 }, { text: "Усугубляю", score: 1 }] },
            { id: 18, text: "Легко строю отношения.", options: [{ text: "Естественно", score: 5 }, { text: "Нужно время", score: 3 }, { text: "Сложно", score: 1 }] },
            { id: 19, text: "Умею убеждать людей.", options: [{ text: "Да", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет", score: 1 }] },
            { id: 20, text: "Меня описывают как:", options: [{ text: "Харизматичного", score: 5 }, { text: "Сдержанного", score: 3 }, { text: "Сложного", score: 1 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Уровень EQ: Низкий", desc: "<strong>[Прагматик]</strong><br>Опора на логику, игнорирование эмоций.<br><strong>Совет:</strong> Учитесь называть эмоции." },
            { min: 41, max: 70, title: "Уровень EQ: Средний", desc: "<strong>[Наблюдатель]</strong><br>Хорошо в быту, сложно в стрессе.<br><strong>Совет:</strong> Развивайте эмпатию." },
            { min: 71, max: 85, title: "Уровень EQ: Высокий", desc: "<strong>[Дипломат]</strong><br>Устойчивость и социальные навыки.<br><strong>Совет:</strong> Используйте для лидерства." },
            { min: 86, max: 100, title: "Уровень EQ: Эксперт", desc: "<strong>[Эмпатичный лидер]</strong><br>Топ 5%. Интуитивное понимание людей.<br><strong>Совет:</strong> Будьте ментором." }
        ]
    },

    // 9. 韩语 (Korean) - Professional
    "ko": {
        title: "감성 지능 (EQ) 평가",
        desc: "골먼 모델 기반. 자기 인식, 조절 및 사회적 기술을 평가하는 20개의 임상 질문.",
        questions: [
            { id: 1, text: "내 감정의 원인을 정확히 안다.", options: [{ text: "항상", score: 5 }, { text: "가끔", score: 3 }, { text: "드물게", score: 1 }] },
            { id: 2, text: "감정의 신체적 징후를 알아차린다.", options: [{ text: "즉시", score: 5 }, { text: "강할 때만", score: 3 }, { text: "무시함", score: 1 }] },
            { id: 3, text: "기분이 결정에 미치는 영향을 안다.", options: [{ text: "명확히", score: 5 }, { text: "막연히", score: 3 }, { text: "영향 없음", score: 1 }] },
            { id: 4, text: "나의 감정 트리거를 안다.", options: [{ text: "매우 잘", score: 5 }, { text: "어느 정도", score: 3 }, { text: "모름", score: 1 }] },
            { id: 5, text: "화가 나도 행동 전에 진정할 수 있다.", options: [{ text: "대개", score: 5 }, { text: "힘듦", score: 3 }, { text: "폭발함", score: 1 }] },
            { id: 6, text: "압박 속에서도 침착함을 유지한다.", options: [{ text: "그렇다", score: 5 }, { text: "스트레스 받지만 관리", score: 3 }, { text: "패닉", score: 1 }] },
            { id: 7, text: "예상치 못한 변화에:", options: [{ text: "적응함", score: 5 }, { text: "짜증남", score: 3 }, { text: "망침", score: 1 }] },
            { id: 8, text: "말실수를 거의 후회하지 않는다.", options: [{ text: "그렇다", score: 5 }, { text: "가끔", score: 3 }, { text: "자주 후회", score: 1 }] },
            { id: 9, text: "실패는 나를 동기부여한다.", options: [{ text: "그렇다", score: 5 }, { text: "잠시 낙담", score: 3 }, { text: "포기함", score: 1 }] },
            { id: 10, text: "즉각적 보상보다 장기 목표 선호.", options: [{ text: "매우 동의", score: 5 }, { text: "중립", score: 3 }, { text: "즉각적 보상", score: 1 }] },
            { id: 11, text: "자기 계발을 추구한다.", options: [{ text: "항상", score: 5 }, { text: "가끔", score: 3 }, { text: "현실 안주", score: 1 }] },
            { id: 12, text: "어려움 속에도 긍정적이다.", options: [{ text: "그렇다", score: 5 }, { text: "글쎄", score: 3 }, { text: "비관적", score: 1 }] },
            { id: 13, text: "말없이도 감정을 감지한다.", options: [{ text: "자주 맞힘", score: 5 }, { text: "가끔", score: 3 }, { text: "자주 틀림", score: 1 }] },
            { id: 14, text: "경청할 때 초점:", options: [{ text: "이해", score: 5 }, { text: "해결", score: 3 }, { text: "내 답변", score: 1 }] },
            { id: 15, text: "타인의 입장이 되어본다.", options: [{ text: "아주 쉽게", score: 5 }, { text: "노력 필요", score: 3 }, { text: "아니오", score: 1 }] },
            { id: 16, text: "타인의 고통을 내 것처럼 느낀다.", options: [{ text: "깊게", score: 5 }, { text: "어느 정도", score: 3 }, { text: "별로", score: 1 }] },
            { id: 17, text: "갈등 해결을 잘한다.", options: [{ text: "중재자", score: 5 }, { text: "회피", score: 3 }, { text: "악화시킴", score: 1 }] },
            { id: 18, text: "유대 관계를 쉽게 형성한다.", options: [{ text: "자연스럽게", score: 5 }, { text: "시간 걸림", score: 3 }, { text: "어색함", score: 1 }] },
            { id: 19, text: "설득력이 있다.", options: [{ text: "그렇다", score: 5 }, { text: "가끔", score: 3 }, { text: "아니다", score: 1 }] },
            { id: 20, text: "나에 대한 평판:", options: [{ text: "매력적/편안함", score: 5 }, { text: "조용함", score: 3 }, { text: "까다로움", score: 1 }] }
        ],
        results: [
            { min: 0, max: 40, title: "EQ 수준: 개발 필요", desc: "<strong>[실용주의자]</strong><br>논리에 의존하며 감정을 무시할 수 있습니다.<br><strong>조언:</strong> 감정에 이름을 붙이는 연습을 하세요." },
            { min: 41, max: 70, title: "EQ 수준: 평균", desc: "<strong>[관찰자]</strong><br>일상은 잘 처리하지만 스트레스에 취약할 수 있습니다.<br><strong>조언:</strong> 적극적 공감을 훈련하세요." },
            { min: 71, max: 85, title: "EQ 수준: 높음", desc: "<strong>[외교관]</strong><br>회복 탄력성과 사교성이 뛰어납니다.<br><strong>조언:</strong> 리더십에 활용하세요." },
            { min: 86, max: 100, title: "EQ 수준: 탁월함", desc: "<strong>[공감적 리더]</strong><br>상위 5%. 인간 역학을 직관적으로 이해합니다.<br><strong>조언:</strong> 멘토가 되되 에너지를 보호하세요." }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Professional
    "ar": {
        title: "تقييم الذكاء العاطفي (EQ)",
        desc: "بناءً على نموذج جولمان. 20 سؤالاً سريرياً لتقييم الوعي الذاتي والتنظيم والمهارات الاجتماعية.",
        questions: [
            { id: 1, text: "أحدد بالضبط سبب شعوري.", options: [{ text: "دائماً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "نادراً", score: 1 }] },
            { id: 2, text: "ألاحظ الإشارات الجسدية لمشاعري.", options: [{ text: "فوراً", score: 5 }, { text: "إذا كانت قوية", score: 3 }, { text: "أتجاهلها", score: 1 }] },
            { id: 3, text: "أفهم تأثير مزاجي على قراراتي.", options: [{ text: "بوضوح", score: 5 }, { text: "بغموض", score: 3 }, { text: "لا يؤثر", score: 1 }] },
            { id: 4, text: "أعرف محفزاتي العاطفية.", options: [{ text: "جيداً جداً", score: 5 }, { text: "نوعاً ما", score: 3 }, { text: "لا حقاً", score: 1 }] },
            { id: 5, text: "أهدأ قبل التصرف عند الغضب.", options: [{ text: "غالباً", score: 5 }, { text: "بصعوبة", score: 3 }, { text: "أنفجر", score: 1 }] },
            { id: 6, text: "أحافظ على هدوئي تحت الضغط.", options: [{ text: "نعم", score: 5 }, { text: "متوتر لكن أدير", score: 3 }, { text: "ذعر", score: 1 }] },
            { id: 7, text: "عند تغيير الخطط:", options: [{ text: "أتكيف", score: 5 }, { text: "أنزعج", score: 3 }, { text: "يومي يفسد", score: 1 }] },
            { id: 8, text: "نادراً ما أندم على كلامي.", options: [{ text: "صحيح", score: 5 }, { text: "أحياناً", score: 3 }, { text: "خطأ", score: 1 }] },
            { id: 9, text: "الفشل يحفزني.", options: [{ text: "نعم", score: 5 }, { text: "يحبطني قليلاً", score: 3 }, { text: "أستسلم", score: 1 }] },
            { id: 10, text: "أفضل الأهداف طويلة المدى.", options: [{ text: "بشدة", score: 5 }, { text: "محايد", score: 3 }, { text: "متعة فورية", score: 1 }] },
            { id: 11, text: "أسعى لتحسين نفسي.", options: [{ text: "باستمرار", score: 5 }, { text: "أحياناً", score: 3 }, { text: "أنا بخير هكذا", score: 1 }] },
            { id: 12, text: "متفائل في الصعوبات.", options: [{ text: "نعم", score: 5 }, { text: "صعب القول", score: 3 }, { text: "متشائم", score: 1 }] },
            { id: 13, text: "أشعر بمشاعر الآخرين دون كلمات.", options: [{ text: "غالباً صحيح", score: 5 }, { text: "أحياناً", score: 3 }, { text: "أخطئ غالباً", score: 1 }] },
            { id: 14, text: "عند الاستماع، أركز على:", options: [{ text: "الفهم", score: 5 }, { text: "الحل", score: 3 }, { text: "الرد", score: 1 }] },
            { id: 15, text: "أضع نفسي مكان الآخرين.", options: [{ text: "بسهولة", score: 5 }, { text: "بجهد", score: 3 }, { text: "لا", score: 1 }] },
            { id: 16, text: "أشعر بألم الآخرين كأنه لي.", options: [{ text: "بعمق", score: 5 }, { text: "إلى حد ما", score: 3 }, { text: "لا", score: 1 }] },
            { id: 17, text: "جيد في حل النزاعات.", options: [{ text: "نعم، وسيط", score: 5 }, { text: "أتجنب", score: 3 }, { text: "أزيدها سوءاً", score: 1 }] },
            { id: 18, text: "أبني علاقات بسهولة.", options: [{ text: "بطبيعتي", score: 5 }, { text: "يستغرق وقتاً", score: 3 }, { text: "صعب", score: 1 }] },
            { id: 19, text: "أعرف كيف أقنع الآخرين.", options: [{ text: "نعم", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا", score: 1 }] },
            { id: 20, text: "يصفونني بـ:", options: [{ text: "جذاب/سهل", score: 5 }, { text: "هادئ", score: 3 }, { text: "صعب", score: 1 }] }
        ],
        results: [
            { min: 0, max: 40, title: "مستوى EQ: نامي", desc: "<strong>[العملي]</strong><br>تعتمد على المنطق وتتجاهل المشاعر.<br><strong>نصيحة:</strong> سمِّ مشاعرك." },
            { min: 41, max: 70, title: "مستوى EQ: متوسط", desc: "<strong>[المراقِب]</strong><br>جيد في الروتين، يربكك الضغط.<br><strong>نصيحة:</strong> تدرب على التعاطف." },
            { min: 71, max: 85, title: "مستوى EQ: مرتفع", desc: "<strong>[الدبلوماسي]</strong><br>مرن وماهر اجتماعياً.<br><strong>نصيحة:</strong> قد بالتأثير." },
            { min: 86, max: 100, title: "مستوى EQ: استثنائي", desc: "<strong>[القائد المتعاطف]</strong><br>أفضل 5%. تفهم البشر حدسياً.<br><strong>نصيحة:</strong> كن مرشداً واحذر الإرهاق." }
        ]
    },

    // 11. 越南语 (Vietnamese) - Professional
    "vi": {
        title: "Đánh giá Trí tuệ Cảm xúc (EQ)",
        desc: "Dựa trên mô hình Goleman. 20 câu hỏi lâm sàng để đánh giá khả năng tự nhận thức, điều chỉnh và kỹ năng xã hội.",
        questions: [
            { id: 1, text: "Tôi xác định chính xác lý do cảm xúc của mình.", options: [{ text: "Luôn luôn", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Hiếm khi", score: 1 }] },
            { id: 2, text: "Tôi nhận thấy dấu hiệu cơ thể của cảm xúc.", options: [{ text: "Ngay lập tức", score: 5 }, { text: "Chỉ khi mạnh", score: 3 }, { text: "Phớt lờ", score: 1 }] },
            { id: 3, text: "Hiểu tâm trạng ảnh hưởng đến quyết định.", options: [{ text: "Rõ ràng", score: 5 }, { text: "Mơ hồ", score: 3 }, { text: "Không ảnh hưởng", score: 1 }] },
            { id: 4, text: "Biết rõ điểm kích hoạt cảm xúc.", options: [{ text: "Rất rõ", score: 5 }, { text: "Một chút", score: 3 }, { text: "Không", score: 1 }] },
            { id: 5, text: "Giữ bình tĩnh trước khi hành động khi giận.", options: [{ text: "Thường xuyên", score: 5 }, { text: "Khó khăn", score: 3 }, { text: "Bùng nổ", score: 1 }] },
            { id: 6, text: "Giữ bình tĩnh dưới áp lực.", options: [{ text: "Có", score: 5 }, { text: "Căng thẳng nhưng ổn", score: 3 }, { text: "Hoảng loạn", score: 1 }] },
            { id: 7, text: "Khi kế hoạch thay đổi:", options: [{ text: "Thích nghi", score: 5 }, { text: "Khó chịu", score: 3 }, { text: "Hỏng cả ngày", score: 1 }] },
            { id: 8, text: "Hiếm khi hối hận về lời nói.", options: [{ text: "Đúng", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Sai", score: 1 }] },
            { id: 9, text: "Thất bại là động lực.", options: [{ text: "Đúng", score: 5 }, { text: "Nản chút", score: 3 }, { text: "Bỏ cuộc", score: 1 }] },
            { id: 10, text: "Ưu tiên mục tiêu dài hạn.", options: [{ text: "Đồng ý", score: 5 }, { text: "Trung lập", score: 3 }, { text: "Vui vẻ ngay", score: 1 }] },
            { id: 11, text: "Tìm cách cải thiện bản thân.", options: [{ text: "Luôn luôn", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Ổn rồi", score: 1 }] },
            { id: 12, text: "Lạc quan trong khó khăn.", options: [{ text: "Có", score: 5 }, { text: "Khó nói", score: 3 }, { text: "Bi quan", score: 1 }] },
            { id: 13, text: "Cảm nhận cảm xúc người khác không cần lời.", options: [{ text: "Thường đúng", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Hay sai", score: 1 }] },
            { id: 14, text: "Khi lắng nghe, tập trung vào:", options: [{ text: "Thấu hiểu", score: 5 }, { text: "Giải quyết", score: 3 }, { text: "Trả lời", score: 1 }] },
            { id: 15, text: "Đặt mình vào vị trí người khác.", options: [{ text: "Rất dễ", score: 5 }, { text: "Cần nỗ lực", score: 3 }, { text: "Không", score: 1 }] },
            { id: 16, text: "Cảm nhận nỗi đau của người khác.", options: [{ text: "Sâu sắc", score: 5 }, { text: "Một chút", score: 3 }, { text: "Không", score: 1 }] },
            { id: 17, text: "Giỏi giải quyết xung đột.", options: [{ text: "Hòa giải viên", score: 5 }, { text: "Tránh né", score: 3 }, { text: "Làm tệ hơn", score: 1 }] },
            { id: 18, text: "Dễ dàng xây dựng mối quan hệ.", options: [{ text: "Tự nhiên", score: 5 }, { text: "Cần thời gian", score: 3 }, { text: "Ngại ngùng", score: 1 }] },
            { id: 19, text: "Biết cách thuyết phục.", options: [{ text: "Có", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Không", score: 1 }] },
            { id: 20, text: "Mọi người mô tả tôi:", options: [{ text: "Dễ gần/Cuốn hút", score: 5 }, { text: "Trầm tính", score: 3 }, { text: "Khó tính", score: 1 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Mức EQ: Đang phát triển", desc: "<strong>[Người thực tế]</strong><br>Dựa vào logic, bỏ qua cảm xúc.<br><strong>Lời khuyên:</strong> Gọi tên cảm xúc." },
            { min: 41, max: 70, title: "Mức EQ: Trung bình", desc: "<strong>[Người quan sát]</strong><br>Ổn định nhưng dễ bị stress.<br><strong>Lời khuyên:</strong> Luyện tập thấu cảm." },
            { min: 71, max: 85, title: "Mức EQ: Cao", desc: "<strong>[Nhà ngoại giao]</strong><br>Kiên cường và khéo léo.<br><strong>Lời khuyên:</strong> Dẫn dắt bằng EQ." },
            { min: 86, max: 100, title: "Mức EQ: Xuất sắc", desc: "<strong>[Lãnh đạo Thấu cảm]</strong><br>Top 5%. Hiểu thấu con người.<br><strong>Lời khuyên:</strong> Cố vấn cho người khác." }
        ]
    },

    // 12. 泰语 (Thai) - Professional
    "th": {
        title: "แบบประเมินความฉลาดทางอารมณ์ (EQ)",
        desc: "อิงตามโมเดล Goleman 20 คำถามเพื่อประเมินการตระหนักรู้ในตนเอง การควบคุมตนเอง และทักษะสังคม",
        questions: [
            { id: 1, text: "ฉันระบุสาเหตุของอารมณ์ได้ชัดเจน", options: [{ text: "เสมอ", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ยาก", score: 1 }] },
            { id: 2, text: "ฉันสังเกตอาการทางกายของอารมณ์", options: [{ text: "ทันที", score: 5 }, { text: "เมื่อรุนแรง", score: 3 }, { text: "เพิกเฉย", score: 1 }] },
            { id: 3, text: "เข้าใจผลกระทบของอารมณ์ต่อการตัดสินใจ", options: [{ text: "ชัดเจน", score: 5 }, { text: "คลุมเครือ", score: 3 }, { text: "ไม่มีผล", score: 1 }] },
            { id: 4, text: "รู้จุดกระตุ้นอารมณ์ของตนเอง", options: [{ text: "ดีมาก", score: 5 }, { text: "พอควร", score: 3 }, { text: "ไม่รู้", score: 1 }] },
            { id: 5, text: "สงบสติอารมณ์ได้ก่อนกระทำเมื่อโกรธ", options: [{ text: "ส่วนใหญ่", score: 5 }, { text: "ยาก", score: 3 }, { text: "ระเบิด", score: 1 }] },
            { id: 6, text: "รักษาความเยือกเย็นภายใต้ความกดดัน", options: [{ text: "ได้", score: 5 }, { text: "เครียดแต่ไหว", score: 3 }, { text: "ตื่นตระหนก", score: 1 }] },
            { id: 7, text: "เมื่อแผนเปลี่ยนกะทันหัน:", options: [{ text: "ปรับตัว", score: 5 }, { text: "หงุดหงิด", score: 3 }, { text: "วันพัง", score: 1 }] },
            { id: 8, text: "ไม่ค่อยเสียใจกับสิ่งที่พูด", options: [{ text: "จริง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "เท็จ", score: 1 }] },
            { id: 9, text: "ความล้มเหลวเป็นแรงผลักดัน", options: [{ text: "ใช่", score: 5 }, { text: "ท้อแท้บ้าง", score: 3 }, { text: "เลิกทำ", score: 1 }] },
            { id: 10, text: "เน้นเป้าหมายระยะยาวมากกว่าความสุขชั่วคราว", options: [{ text: "เห็นด้วย", score: 5 }, { text: "เฉยๆ", score: 3 }, { text: "ชอบทันที", score: 1 }] },
            { id: 11, text: "หาทางพัฒนาตนเองเสมอ", options: [{ text: "ใช่", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "พอใจแล้ว", score: 1 }] },
            { id: 12, text: "มองโลกในแง่ดีในยามยาก", options: [{ text: "ใช่", score: 5 }, { text: "ยาก", score: 3 }, { text: "มองโลกแง่ร้าย", score: 1 }] },
            { id: 13, text: "รับรู้อารมณ์คนอื่นได้โดยไม่ต้องพูด", options: [{ text: "แม่นยำ", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ผิดบ่อย", score: 1 }] },
            { id: 14, text: "เมื่อฟัง เน้นที่:", options: [{ text: "ความเข้าใจ", score: 5 }, { text: "การแก้ปัญหา", score: 3 }, { text: "การตอบกลับ", score: 1 }] },
            { id: 15, text: "เอาใจเขามาใส่ใจเรา", options: [{ text: "ง่ายมาก", score: 5 }, { text: "ต้องพยายาม", score: 3 }, { text: "ไม่", score: 1 }] },
            { id: 16, text: "รู้สึกเจ็บปวดแทนคนอื่น", options: [{ text: "ลึกซึ้ง", score: 5 }, { text: "ระดับหนึ่ง", score: 3 }, { text: "ไม่", score: 1 }] },
            { id: 17, text: "เก่งเรื่องไกล่เกลี่ย", options: [{ text: "นักไกล่เกลี่ย", score: 5 }, { text: "หลีกเลี่ยง", score: 3 }, { text: "ทำให้แย่ลง", score: 1 }] },
            { id: 18, text: "สร้างสัมพันธ์ง่าย", options: [{ text: "ธรรมชาติ", score: 5 }, { text: "ใช้เวลา", score: 3 }, { text: "อึดอัด", score: 1 }] },
            { id: 19, text: "รู้วิธีโน้มน้าวใจ", options: [{ text: "ใช่", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่", score: 1 }] },
            { id: 20, text: "คนอื่นมองฉันว่า:", options: [{ text: "คุยง่าย/มีเสน่ห์", score: 5 }, { text: "เงียบ", score: 3 }, { text: "เข้าถึงยาก", score: 1 }] }
        ],
        results: [
            { min: 0, max: 40, title: "ระดับ EQ: กำลังพัฒนา", desc: "<strong>[นักปฏิบัติ]</strong><br>เน้นตรรกะ อาจมองข้ามอารมณ์<br><strong>แนะนำ:</strong> หัดเรียกชื่ออารมณ์" },
            { min: 41, max: 70, title: "ระดับ EQ: ปานกลาง", desc: "<strong>[ผู้สังเกตการณ์]</strong><br>จัดการเรื่องทั่วไปได้ แต่แพ้ความเครียด<br><strong>แนะนำ:</strong> ฝึกความเห็นอกเห็นใจ" },
            { min: 71, max: 85, title: "ระดับ EQ: สูง", desc: "<strong>[นักการทูต]</strong><br>ยืดหยุ่นและเข้าสังคมเก่ง<br><strong>แนะนำ:</strong> ใช้ EQ นำทีม" },
            { min: 86, max: 100, title: "ระดับ EQ: ยอดเยี่ยม", desc: "<strong>[ผู้นำที่เข้าอกเข้าใจ]</strong><br>Top 5% เข้าใจมนุษย์อย่างลึกซึ้ง<br><strong>แนะนำ:</strong> เป็นที่ปรึกษาให้ผู้อื่น" }
        ]
    },

    // 13. 印尼语 (Indonesian) - Professional
    "id": {
        title: "Penilaian Kecerdasan Emosional (EQ)",
        desc: "Berdasarkan model Goleman. 20 pertanyaan klinis untuk mengevaluasi kesadaran diri, regulasi, dan keterampilan sosial.",
        questions: [
            { id: 1, text: "Saya bisa mengidentifikasi alasan tepat perasaan saya.", options: [{ text: "Selalu", score: 5 }, { text: "Kadang", score: 3 }, { text: "Jarang", score: 1 }] },
            { id: 2, text: "Saya menyadari tanda fisik emosi saya.", options: [{ text: "Segera", score: 5 }, { text: "Jika kuat", score: 3 }, { text: "Abaikan", score: 1 }] },
            { id: 3, text: "Paham dampak suasana hati pada keputusan.", options: [{ text: "Jelas", score: 5 }, { text: "Samar", score: 3 }, { text: "Tidak ada", score: 1 }] },
            { id: 4, text: "Tahu pemicu emosi saya.", options: [{ text: "Sangat baik", score: 5 }, { text: "Agak", score: 3 }, { text: "Tidak", score: 1 }] },
            { id: 5, text: "Bisa tenang sebelum bertindak saat marah.", options: [{ text: "Biasanya", score: 5 }, { text: "Sulit", score: 3 }, { text: "Meledak", score: 1 }] },
            { id: 6, text: "Tetap tenang di bawah tekanan.", options: [{ text: "Ya", score: 5 }, { text: "Stres tapi bisa", score: 3 }, { text: "Panik", score: 1 }] },
            { id: 7, text: "Saat rencana berubah:", options: [{ text: "Beradaptasi", score: 5 }, { text: "Kesal", score: 3 }, { text: "Rusak hari", score: 1 }] },
            { id: 8, text: "Jarang menyesali ucapan.", options: [{ text: "Benar", score: 5 }, { text: "Kadang", score: 3 }, { text: "Salah", score: 1 }] },
            { id: 9, text: "Kegagalan memotivasi saya.", options: [{ text: "Ya", score: 5 }, { text: "Kecewa sebentar", score: 3 }, { text: "Menyerah", score: 1 }] },
            { id: 10, text: "Lebih suka tujuan jangka panjang.", options: [{ text: "Setuju", score: 5 }, { text: "Netral", score: 3 }, { text: "Instan", score: 1 }] },
            { id: 11, text: "Mencari cara memperbaiki diri.", options: [{ text: "Selalu", score: 5 }, { text: "Kadang", score: 3 }, { text: "Cukup", score: 1 }] },
            { id: 12, text: "Optimis dalam kesulitan.", options: [{ text: "Ya", score: 5 }, { text: "Sulit", score: 3 }, { text: "Pesimis", score: 1 }] },
            { id: 13, text: "Merasakan emosi orang tanpa kata.", options: [{ text: "Sering benar", score: 5 }, { text: "Kadang", score: 3 }, { text: "Sering salah", score: 1 }] },
            { id: 14, text: "Saat mendengarkan, fokus pada:", options: [{ text: "Memahami", score: 5 }, { text: "Solusi", score: 3 }, { text: "Jawaban", score: 1 }] },
            { id: 15, text: "Mudah menempatkan diri di posisi orang lain.", options: [{ text: "Sangat mudah", score: 5 }, { text: "Butuh usaha", score: 3 }, { text: "Tidak", score: 1 }] },
            { id: 16, text: "Merasakan sakit orang lain.", options: [{ text: "Dalam", score: 5 }, { text: "Sedikit", score: 3 }, { text: "Tidak", score: 1 }] },
            { id: 17, text: "Bagus menyelesaikan konflik.", options: [{ text: "Mediator", score: 5 }, { text: "Hindari", score: 3 }, { text: "Perburuk", score: 1 }] },
            { id: 18, text: "Mudah membangun hubungan.", options: [{ text: "Alami", score: 5 }, { text: "Butuh waktu", score: 3 }, { text: "Canggung", score: 1 }] },
            { id: 19, text: "Tahu cara membujuk orang.", options: [{ text: "Ya", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak", score: 1 }] },
            { id: 20, text: "Orang menggambarkan saya:", options: [{ text: "Karismatik", score: 5 }, { text: "Pendiam", score: 3 }, { text: "Sulit", score: 1 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Level EQ: Berkembang", desc: "<strong>[Pragmatis]</strong><br>Mengandalkan logika, mengabaikan emosi.<br><strong>Saran:</strong> Namai emosi Anda." },
            { min: 41, max: 70, title: "Level EQ: Rata-rata", desc: "<strong>[Pengamat]</strong><br>Bagus di rutinitas, kewalahan saat stres.<br><strong>Saran:</strong> Latih empati aktif." },
            { min: 71, max: 85, title: "Level EQ: Tinggi", desc: "<strong>[Diplomat]</strong><br>Tangguh dan ahli sosial.<br><strong>Saran:</strong> Gunakan untuk memimpin." },
            { min: 86, max: 100, title: "Level EQ: Luar Biasa", desc: "<strong>[Pemimpin Empatik]</strong><br>Top 5%. Memahami dinamika manusia.<br><strong>Saran:</strong> Jadilah mentor." }
        ]
    }
};