// data/test2.js
// 恋爱人格测试 (Love Attachment Style) - 24题专业完整版
// 基于成人依恋量表 (ECR) 改编
// 包含详细的心理画像、优缺点分析及建议

const quizDataMulti = {
    // 1. 英语 (English) - Professional Version
    "en": {
        title: "Advanced Love Attachment Style Test",
        desc: "Based on Attachment Theory, this professional assessment reveals your deep subconscious patterns in relationships. Are you Anxious, Avoidant, or Secure?",
        questions: [
            // 焦虑维度 (Anxiety)
            { id: 1, text: "I often worry that my partner doesn't love me as much as I love them.", options: [{ text: "Strongly Agree", score: 5 }, { text: "Sometimes", score: 3 }, { text: "Strongly Disagree", score: 1 }] },
            { id: 2, text: "When my partner is away, I feel anxious that they might find someone else.", options: [{ text: "Yes, often", score: 5 }, { text: "Occasionally", score: 3 }, { text: "No, I trust them", score: 1 }] },
            { id: 3, text: "I need a lot of reassurance and validation from my partner.", options: [{ text: "Yes, constantly", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, I'm self-assured", score: 1 }] },
            { id: 4, text: "If my partner doesn't reply to my text immediately, I start to panic.", options: [{ text: "Yes, I assume the worst", score: 5 }, { text: "I wonder why, but stay calm", score: 3 }, { text: "No, they are just busy", score: 1 }] },
            { id: 5, text: "I often feel that I want to be closer to my partner than they want to be to me.", options: [{ text: "Exactly", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, it's balanced", score: 1 }] },
            { id: 6, text: "My mood depends heavily on how my relationship is going.", options: [{ text: "Yes, it controls my life", score: 5 }, { text: "Somewhat", score: 3 }, { text: "No, I have my own life", score: 1 }] },
            { id: 7, text: "I tend to get overly emotional or clingy when I feel insecure.", options: [{ text: "Yes, I can't help it", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, I withdraw instead", score: 1 }] },
            { id: 8, text: "I worry about being abandoned.", options: [{ text: "It's my biggest fear", score: 5 }, { text: "Occasionally", score: 3 }, { text: "Rarely", score: 1 }] },
            
            // 回避维度 (Avoidance)
            { id: 9, text: "I prefer not to show my partner how I feel deep down.", options: [{ text: "Strongly Agree", score: 5 }, { text: "Depends on the mood", score: 3 }, { text: "No, I'm an open book", score: 1 }] },
            { id: 10, text: "I feel uncomfortable when a partner wants to be 'too close'.", options: [{ text: "Yes, it feels suffocating", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, I love closeness", score: 1 }] },
            { id: 11, text: "I value my independence more than my relationship.", options: [{ text: "Independence is everything", score: 5 }, { text: "Both are important", score: 3 }, { text: "Relationship comes first", score: 1 }] },
            { id: 12, text: "When things get serious, I feel the urge to run away.", options: [{ text: "Yes, often", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, I commit fully", score: 1 }] },
            { id: 13, text: "I don't like relying on others, and I don't like them relying on me.", options: [{ text: "Strongly Agree", score: 5 }, { text: "Neutral", score: 3 }, { text: "Disagree, reliance is good", score: 1 }] },
            { id: 14, text: "I often keep secrets from my partner to maintain my privacy.", options: [{ text: "Yes, privacy is vital", score: 5 }, { text: "Only small things", score: 3 }, { text: "No, I share everything", score: 1 }] },
            { id: 15, text: "I recover from breakups relatively quickly.", options: [{ text: "Yes, I move on fast", score: 5 }, { text: "It takes some time", score: 3 }, { text: "No, it destroys me", score: 1 }] },
            { id: 16, text: "I find it difficult to support my partner emotionally when they are crying.", options: [{ text: "Yes, I don't know what to do", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, I'm very supportive", score: 1 }] },

            // 安全/综合维度 (Secure/Mixed)
            { id: 17, text: "I find it easy to get close to others.", options: [{ text: "No, it's hard", score: 5 }, { text: "Depends", score: 3 }, { text: "Yes, very easy", score: 1 }] },
            { id: 18, text: "I am comfortable depending on romantic partners.", options: [{ text: "No, I hate it", score: 5 }, { text: "Sometimes", score: 3 }, { text: "Yes, completely", score: 1 }] },
            { id: 19, text: "I don't worry about being alone.", options: [{ text: "I love being alone (Avoidant)", score: 5 }, { text: "I hate being alone (Anxious)", score: 5 }, { text: "I'm fine either way (Secure)", score: 1 }] }, 
            { id: 20, text: "When we argue, I try to understand their perspective.", options: [{ text: "No, I get defensive", score: 5 }, { text: "Sometimes", score: 3 }, { text: "Yes, always", score: 1 }] },
            { id: 21, text: "I believe I am worthy of love.", options: [{ text: "I doubt it often", score: 5 }, { text: "Usually", score: 3 }, { text: "Yes, definitely", score: 1 }] },
            { id: 22, text: "I trust that my partner will be there when I need them.", options: [{ text: "I doubt it", score: 5 }, { text: "Hope so", score: 3 }, { text: "Yes, I trust them", score: 1 }] },
            { id: 23, text: "I express my needs clearly.", options: [{ text: "No, they should guess", score: 5 }, { text: "Sometimes", score: 3 }, { text: "Yes, direct communication", score: 1 }] },
            { id: 24, text: "Overall, relationships are...", options: [{ text: "Stressful / Suffocating", score: 5 }, { text: "Complicated", score: 3 }, { text: "A source of comfort", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Result: Secure Attachment", 
                desc: "<strong>[Archetype: The Anchor]</strong><br><br>" +
                      "<strong>Detailed Analysis:</strong><br>Congratulations! You possess a 'Secure' attachment style. You are comfortable with intimacy and do not fear losing your independence. You view yourself as worthy of love and trust that others are generally reliable. In relationships, you are warm, loving, and supportive without being suffocating.<br><br>" +
                      "<strong>Core Strengths:</strong><br>✅ High emotional intelligence and empathy.<br>✅ Ability to handle conflict constructively.<br>✅ Comfortable with both closeness and being alone.<br><br>" +
                      "<strong>Advice:</strong><br>You are the 'gold standard' for partners. However, be careful not to become the caretaker for insecure partners who refuse to grow. Your stability is a gift—share it with someone who appreciates it." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Result: Anxious Attachment", 
                desc: "<strong>[Archetype: The Love Seeker]</strong><br><br>" +
                      "<strong>Detailed Analysis:</strong><br>You have an 'Anxious-Preoccupied' attachment style. You have a huge capacity for love, but you are often plagued by the fear that your partner does not love you as much as you love them. You are highly sensitive to shifts in your partner's mood and behavior, often interpreting neutral actions as rejection.<br><br>" +
                      "<strong>Key Behaviors:</strong><br>⚠️ Needing constant reassurance and validation.<br>⚠️ Overthinking texts and silence.<br>⚠️ Becoming 'clingy' or demanding when feeling insecure.<br><br>" +
                      "<strong>Growth Advice:</strong><br>Your challenge is to learn <strong>self-soothing</strong>. Realize that your worth is intrinsic, not dependent on someone else's attention. Practice communicating your needs directly instead of 'protest behavior' (acting out to get attention)." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Result: Avoidant Attachment", 
                desc: "<strong>[Archetype: The Lone Wolf]</strong><br><br>" +
                      "<strong>Detailed Analysis:</strong><br>You have a 'Dismissive-Avoidant' attachment style. You equate intimacy with a loss of independence and constantly try to keep relationships at arm's length. You pride yourself on self-reliance and often view emotions as a sign of weakness. When a partner gets too close, your instinct is to pull away or find faults in them.<br><br>" +
                      "<strong>Key Behaviors:</strong><br>⚠️ Emotional distancing when things get serious.<br>⚠️ Valuing freedom over connection.<br>⚠️ Labeling partners as 'too needy' or 'clingy'.<br><br>" +
                      "<strong>Growth Advice:</strong><br>Independence is great, but humans are wired for connection. Try to understand that <strong>relying on others is not a weakness</strong>. Challenge your instinct to run away when you feel vulnerable. Small steps toward intimacy can lead to a much richer life." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - 专业版
    "zh": {
        title: "恋爱人格测试 (专业完整版)",
        desc: "本测试基于经典的成人依恋理论 (Attachment Theory)，通过24道心理学量表题目，深度解析你在亲密关系中的潜意识模式。",
        questions: [
            // 焦虑维度
            { id: 1, text: "我经常担心伴侣不像我爱他/她那样爱我。", options: [{ text: "非常符合", score: 5 }, { text: "有时符合", score: 3 }, { text: "完全不符合", score: 1 }] },
            { id: 2, text: "当伴侣不在身边时，我会焦虑他/她是不是喜欢上别人了。", options: [{ text: "经常这样想", score: 5 }, { text: "偶尔", score: 3 }, { text: "完全信任", score: 1 }] },
            { id: 3, text: "我需要伴侣不断地向我保证他是爱我的。", options: [{ text: "是的，这很关键", score: 5 }, { text: "有时需要", score: 3 }, { text: "不需要，我很自信", score: 1 }] },
            { id: 4, text: "如果伴侣没秒回信息，我会开始胡思乱想甚至恐慌。", options: [{ text: "是的，会很焦虑", score: 5 }, { text: "会纳闷，但还好", score: 3 }, { text: "完全不会", score: 1 }] },
            { id: 5, text: "我总感觉我想要更亲密，而伴侣却在后退。", options: [{ text: "这种感觉很强烈", score: 5 }, { text: "偶尔有", score: 3 }, { text: "没有，很平衡", score: 1 }] },
            { id: 6, text: "我的情绪完全取决于我们关系的各种细节。", options: [{ text: "是的，恋爱是我的全部", score: 5 }, { text: "有一定影响", score: 3 }, { text: "不是，我有自己的生活", score: 1 }] },
            { id: 7, text: "当感到不安时，我会变得情绪化、粘人或发脾气。", options: [{ text: "经常失控", score: 5 }, { text: "有时会", score: 3 }, { text: "不会，我会冷静", score: 1 }] },
            { id: 8, text: "对于“被抛弃”这件事，我怀有深深的恐惧。", options: [{ text: "这是我最大的噩梦", score: 5 }, { text: "偶尔担心", score: 3 }, { text: "不担心", score: 1 }] },

            // 回避维度
            { id: 9, text: "我倾向于不向伴侣展示我内心深处的真实感受。", options: [{ text: "是的，自我保护", score: 5 }, { text: "看情况", score: 3 }, { text: "不，我是一本打开的书", score: 1 }] },
            { id: 10, text: "当伴侣想要和我太亲密时，我会感到不舒服或窒息。", options: [{ text: "非常有同感", score: 5 }, { text: "有时会", score: 3 }, { text: "完全不会，我喜欢亲密", score: 1 }] },
            { id: 11, text: "对我来说，独立自由比恋爱关系更重要。", options: [{ text: "自由至上", score: 5 }, { text: "都很重要", score: 3 }, { text: "关系更重要", score: 1 }] },
            { id: 12, text: "当关系变得很严肃时，我会有想逃跑的冲动。", options: [{ text: "经常有", score: 5 }, { text: "偶尔", score: 3 }, { text: "不会，我期待承诺", score: 1 }] },
            { id: 13, text: "我不喜欢依赖别人，也不喜欢别人依赖我。", options: [{ text: "非常符合", score: 5 }, { text: "中立", score: 3 }, { text: "不符合，依赖是好的", score: 1 }] },
            { id: 14, text: "我经常对伴侣有所保留，以维持自己的私人空间。", options: [{ text: "是的，隐私很重要", score: 5 }, { text: "保留一点点", score: 3 }, { text: "我分享一切", score: 1 }] },
            { id: 15, text: "分手后，我通常能比较快地恢复过来。", options: [{ text: "是的，我不想太多", score: 5 }, { text: "需要一段时间", score: 3 }, { text: "非常痛苦，很难走出来", score: 1 }] },
            { id: 16, text: "当伴侣哭泣或情绪激动时，我会感到不知所措甚至想回避。", options: [{ text: "是的，我很怕这种场面", score: 5 }, { text: "有时", score: 3 }, { text: "我会立刻安慰", score: 1 }] },

            // 综合维度
            { id: 17, text: "我觉得与人建立亲密关系是一件容易的事。", options: [{ text: "很难，我不信任人", score: 5 }, { text: "看人", score: 3 }, { text: "很容易", score: 1 }] },
            { id: 18, text: "我乐意在情感上依赖我的伴侣。", options: [{ text: "不乐意，那是软弱", score: 5 }, { text: "还可以", score: 3 }, { text: "完全乐意", score: 1 }] },
            { id: 19, text: "我对“独处”的看法？", options: [{ text: "我更喜欢独处 (回避)", score: 5 }, { text: "我讨厌独处 (焦虑)", score: 5 }, { text: "我都行 (安全)", score: 1 }] },
            { id: 20, text: "争吵时，我能尝试理解对方的立场吗？", options: [{ text: "很难，我会防御", score: 5 }, { text: "有时", score: 3 }, { text: "总是尝试", score: 1 }] },
            { id: 21, text: "我相信我是值得被爱的。", options: [{ text: "经常怀疑", score: 5 }, { text: "大概吧", score: 3 }, { text: "深信不疑", score: 1 }] },
            { id: 22, text: "我相信当我需要时，伴侣会在我身边。", options: [{ text: "我很怀疑", score: 5 }, { text: "希望如此", score: 3 }, { text: "完全信任", score: 1 }] },
            { id: 23, text: "我会直接表达我的需求，而不是让对方猜。", options: [{ text: "不，我不直说", score: 5 }, { text: "有时", score: 3 }, { text: "是的，直接沟通", score: 1 }] },
            { id: 24, text: "总的来说，我认为亲密关系是...", options: [{ text: "充满压力/束缚的", score: 5 }, { text: "复杂的", score: 3 }, { text: "舒适/支持的港湾", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "测试结果：安全型依恋 (Secure)", 
                desc: "<strong>【心理原型】：定海神针 (The Anchor)</strong><br><br>" +
                      "<strong>📖 深度解析：</strong><br>恭喜！你拥有心理学上最健康的“安全型”依恋模式。你对自己持肯定的态度，认为自己是值得被爱的；同时对他人也持信任态度。在关系中，你既能享受亲密无间，又能保持独立的自我。你不玩心理游戏，发生冲突时能建设性地沟通。<br><br>" +
                      "<strong>🌟 核心优势：</strong><br>✅ 高情商与共情能力，能敏锐感知伴侣情绪。<br>✅ 情绪稳定，不会患得患失。<br>✅ 在依赖与独立之间能找到完美的平衡。<br><br>" +
                      "<strong>💡 给你的建议：</strong><br>你是婚恋市场上的“硬通货”。你的稳定性可以治愈很多人。但请注意，不要因为你的包容性太强，而吸引到那些拒绝成长的伴侣，导致自己成为单方面的付出者。保护好你的能量。" 
            },
            { 
                min: 46, 
                max: 80, 
                title: "测试结果：焦虑型依恋 (Anxious)", 
                desc: "<strong>【心理原型】：寻爱者 (The Love Seeker)</strong><br><br>" +
                      "<strong>📖 深度解析：</strong><br>你属于“焦虑-矛盾型”依恋。你拥有极强的爱的能力，内心柔软细腻。但你的内心深处住着一个缺乏安全感的小孩。你总是担心伴侣不够爱你，或者担心会被抛弃。你对他人的情绪变化极度敏感，伴侣的一个眼神或一次回复慢了，都可能引发你内心的海啸。<br><br>" +
                      "<strong>⚠️ 典型表现：</strong><br>🔴 极度渴望亲密，总觉得对方不够投入。<br>🔴 容易通过“作”、发脾气或冷战来博取关注。<br>🔴 在关系中容易失去自我，过度讨好。<br><br>" +
                      "<strong>💡 给你的建议：</strong><br>亲爱的，你的价值不取决于别人的关注。你的课题是<strong>“学会自我安抚”</strong>。当焦虑来袭时，试着停下来问自己：“这是事实，还是我的恐惧？” 把重心放回自己身上，你本身就值得被爱。" 
            },
            { 
                min: 81, 
                max: 120, 
                title: "测试结果：回避型依恋 (Avoidant)", 
                desc: "<strong>【心理原型】：孤岛守护者 (The Lone Wolf)</strong><br><br>" +
                      "<strong>📖 深度解析：</strong><br>你属于“疏离-回避型”依恋。你像一座独立的孤岛，看起来强大、冷酷、不需要任何人。其实，你是在用“独立”来防御“受伤”。你下意识地把“亲密”等同于“失去自由”。当关系更进一步时，你的第一反应往往是后退。你习惯压抑自己的情感，也害怕处理别人的情绪。<br><br>" +
                      "<strong>⚠️ 典型表现：</strong><br>🔴 极度看重个人空间，厌恶由于依赖产生的束缚感。<br>🔴 遇到冲突倾向于逃避、冷处理。<br>🔴 容易美化前任或理想化并不存在的人，而挑剔现任。<br><br>" +
                      "<strong>💡 给你的建议：</strong><br>你需要明白，<strong>依赖他人并不代表软弱</strong>。人类天生需要连接。试着去识别自己的“逃跑机制”，当你想推开伴侣时，试着停在原地，多坚持一分钟。尝试表达脆弱，你会发现世界比你想象的要安全。" 
            }
        ]
    },

// 3. 德语 (German) - Professional
    "de": {
        title: "Beziehungs-Persönlichkeitstest (Profi-Version)",
        desc: "Basierend auf der Bindungstheorie. 24 Fragen zur tiefgehenden Analyse Ihres unterbewussten Bindungsstils.",
        questions: [
            // 焦虑
            { id: 1, text: "Ich sorge mich oft, dass mein Partner mich nicht so sehr liebt wie ich ihn.", options: [{ text: "Stimme voll zu", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Stimme nicht zu", score: 1 }] },
            { id: 2, text: "Wenn mein Partner weg ist, habe ich Angst, dass er jemand anderen findet.", options: [{ text: "Oft", score: 5 }, { text: "Gelegentlich", score: 3 }, { text: "Nie, ich vertraue", score: 1 }] },
            { id: 3, text: "Ich brauche viel Bestätigung von meinem Partner.", options: [{ text: "Ja, ständig", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein", score: 1 }] },
            { id: 4, text: "Keine sofortige Antwort auf Nachrichten macht mich panisch.", options: [{ text: "Ja, ich denke das Schlimmste", score: 5 }, { text: "Etwas unruhig", score: 3 }, { text: "Nein, egal", score: 1 }] },
            { id: 5, text: "Ich will oft mehr Nähe als mein Partner.", options: [{ text: "Genau so ist es", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein, ausgeglichen", score: 1 }] },
            { id: 6, text: "Meine Stimmung hängt stark von meiner Beziehung ab.", options: [{ text: "Ja, absolut", score: 5 }, { text: "Teilweise", score: 3 }, { text: "Nein", score: 1 }] },
            { id: 7, text: "Bei Unsicherheit werde ich emotional oder anhänglich.", options: [{ text: "Ja, oft", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein, ich ziehe mich zurück", score: 1 }] },
            { id: 8, text: "Ich habe Angst, verlassen zu werden.", options: [{ text: "Meine größte Angst", score: 5 }, { text: "Gelegentlich", score: 3 }, { text: "Selten", score: 1 }] },
            
            // 回避
            { id: 9, text: "Ich zeige ungern meine tiefsten Gefühle.", options: [{ text: "Ja, Selbstschutz", score: 5 }, { text: "Kommt drauf an", score: 3 }, { text: "Nein, ich bin offen", score: 1 }] },
            { id: 10, text: "Zu viel Nähe engt mich ein.", options: [{ text: "Ja, sehr", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein, ich mag Nähe", score: 1 }] },
            { id: 11, text: "Unabhängigkeit ist mir wichtiger als Beziehung.", options: [{ text: "Unabhängigkeit zuerst", score: 5 }, { text: "Beides wichtig", score: 3 }, { text: "Beziehung zuerst", score: 1 }] },
            { id: 12, text: "Wenn es ernst wird, will ich weglaufen.", options: [{ text: "Oft", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nie", score: 1 }] },
            { id: 13, text: "Ich verlasse mich ungern auf andere.", options: [{ text: "Stimme zu", score: 5 }, { text: "Neutral", score: 3 }, { text: "Stimme nicht zu", score: 1 }] },
            { id: 14, text: "Ich bewahre mir Geheimnisse für meine Privatsphäre.", options: [{ text: "Ja, wichtig", score: 5 }, { text: "Kleinigkeiten", score: 3 }, { text: "Nein, teile alles", score: 1 }] },
            { id: 15, text: "Ich erhole mich schnell von Trennungen.", options: [{ text: "Ja, sehr schnell", score: 5 }, { text: "Brauche Zeit", score: 3 }, { text: "Nein, sehr schwer", score: 1 }] },
            { id: 16, text: "Es fällt mir schwer, meinen Partner zu trösten.", options: [{ text: "Ja, weiß nicht wie", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein, kein Problem", score: 1 }] },

            // 综合
            { id: 17, text: "Es fällt mir leicht, anderen nahe zu kommen.", options: [{ text: "Schwer", score: 5 }, { text: "Geht so", score: 3 }, { text: "Leicht", score: 1 }] },
            { id: 18, text: "Ich verlasse mich gerne auf meinen Partner.", options: [{ text: "Ungern", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Gerne", score: 1 }] },
            { id: 19, text: "Gedanken über das Alleinsein?", options: [{ text: "Lieber allein (Vermeidend)", score: 5 }, { text: "Hasse es (Ängstlich)", score: 5 }, { text: "Beides okay (Sicher)", score: 1 }] },
            { id: 20, text: "Bei Streit versuche ich, den anderen zu verstehen.", options: [{ text: "Nein, Abwehr", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Ja, immer", score: 1 }] },
            { id: 21, text: "Ich bin liebenswert.", options: [{ text: "Zweifel oft", score: 5 }, { text: "Meistens", score: 3 }, { text: "Ja, absolut", score: 1 }] },
            { id: 22, text: "Ich vertraue darauf, dass mein Partner da ist.", options: [{ text: "Zweifel", score: 5 }, { text: "Hoffentlich", score: 3 }, { text: "Ja, vertraue", score: 1 }] },
            { id: 23, text: "Ich äußere meine Bedürfnisse direkt.", options: [{ text: "Nein, sollen raten", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Ja, direkt", score: 1 }] },
            { id: 24, text: "Beziehungen sind generell...", options: [{ text: "Stressig", score: 5 }, { text: "Kompliziert", score: 3 }, { text: "Komfortabel", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Ergebnis: Sicherer Bindungstyp", 
                desc: "<strong>[Archetyp: Der Anker]</strong><br><br>Glückwunsch! Sie haben einen gesunden Bindungsstil. Sie fühlen sich wohl mit Nähe und haben keine Angst vor Unabhängigkeit. Sie vertrauen darauf, liebenswert zu sein.<br><br><strong>Tipp:</strong> Ihre Stabilität ist ein Geschenk. Achten Sie darauf, nicht nur zu geben." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Ergebnis: Ängstlicher Bindungstyp", 
                desc: "<strong>[Archetyp: Der Liebessuchende]</strong><br><br>Sie sehnen sich nach Liebe, haben aber oft Angst, zurückgewiesen zu werden. Sie reagieren sehr sensibel auf Stimmungsänderungen Ihres Partners und brauchen viel Bestätigung.<br><br><strong>Tipp:</strong> Ihr Selbstwert hängt nicht von anderen ab. Lernen Sie, sich selbst zu beruhigen." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Ergebnis: Vermeidender Bindungstyp", 
                desc: "<strong>[Archetyp: Der einsame Wolf]</strong><br><br>Sie wirken unabhängig, nutzen dies aber als Schutzmechanismus. Nähe empfinden Sie oft als Bedrohung Ihrer Freiheit. Wenn es ernst wird, ziehen Sie sich zurück.<br><br><strong>Tipp:</strong> Unabhängigkeit ist gut, aber Verbindung ist menschlich. Versuchen Sie, sich langsam zu öffnen." 
            }
        ]
    },

    // 4. 日语 (Japanese) - Professional
    "ja": {
        title: "恋愛スタイル診断 (完全精密版)",
        desc: "愛着理論（Attachment Theory）に基づき、あなたの深層心理における恋愛パターンを分析します。",
        questions: [
            // 焦虑
            { id: 1, text: "パートナーの愛情が自分と同じくらいか心配になる。", options: [{ text: "強くそう思う", score: 5 }, { text: "時々思う", score: 3 }, { text: "思わない", score: 1 }] },
            { id: 2, text: "会えない時、相手が心変わりしないか不安だ。", options: [{ text: "よくある", score: 5 }, { text: "たまにある", score: 3 }, { text: "信頼している", score: 1 }] },
            { id: 3, text: "パートナーからの愛情確認が頻繁に必要だ。", options: [{ text: "はい、常に", score: 5 }, { text: "時々", score: 3 }, { text: "いいえ", score: 1 }] },
            { id: 4, text: "返信が遅いとパニックになる。", options: [{ text: "悪い想像をする", score: 5 }, { text: "少し気になる", score: 3 }, { text: "気にしない", score: 1 }] },
            { id: 5, text: "相手より自分の方が「近づきたい」と思っている気がする。", options: [{ text: "その通りだ", score: 5 }, { text: "時々", score: 3 }, { text: "バランスが取れている", score: 1 }] },
            { id: 6, text: "気分の浮き沈みは恋愛の調子に左右される。", options: [{ text: "完全にそうだ", score: 5 }, { text: "多少はある", score: 3 }, { text: "関係ない", score: 1 }] },
            { id: 7, text: "不安な時、感情的になったり相手に執着してしまう。", options: [{ text: "はい、止められない", score: 5 }, { text: "時々", score: 3 }, { text: "いいえ、冷静だ", score: 1 }] },
            { id: 8, text: "見捨てられることへの恐怖がある。", options: [{ text: "最大の恐怖", score: 5 }, { text: "たまにある", score: 3 }, { text: "ほとんどない", score: 1 }] },
            
            // 回避
            { id: 9, text: "本心を見せることに抵抗がある。", options: [{ text: "強くそう思う", score: 5 }, { text: "場合による", score: 3 }, { text: "オープンだ", score: 1 }] },
            { id: 10, text: "相手が親密になりすぎると息苦しい。", options: [{ text: "はい、圧迫感がある", score: 5 }, { text: "時々", score: 3 }, { text: "親密さは好きだ", score: 1 }] },
            { id: 11, text: "恋愛よりも自立・自由が重要だ。", options: [{ text: "自由が全て", score: 5 }, { text: "両方大事", score: 3 }, { text: "恋愛が優先", score: 1 }] },
            { id: 12, text: "関係が深刻になると逃げ出したくなる。", options: [{ text: "よくある", score: 5 }, { text: "たまにある", score: 3 }, { text: "ない", score: 1 }] },
            { id: 13, text: "人に頼るのも、頼られるのも好きではない。", options: [{ text: "強くそう思う", score: 5 }, { text: "普通", score: 3 }, { text: "頼り合いは良いことだ", score: 1 }] },
            { id: 14, text: "プライバシーを守るため秘密を持つ。", options: [{ text: "はい、重要だ", score: 5 }, { text: "些細なことだけ", score: 3 }, { text: "隠し事はない", score: 1 }] },
            { id: 15, text: "別れた後の立ち直りは早い方だ。", options: [{ text: "はい、切り替え早い", score: 5 }, { text: "時間がかかる", score: 3 }, { text: "引きずる", score: 1 }] },
            { id: 16, text: "相手が泣いている時、どうしていいかわからない。", options: [{ text: "はい、困惑する", score: 5 }, { text: "時々", score: 3 }, { text: "支えることができる", score: 1 }] },

            // 综合
            { id: 17, text: "人と親しくなるのは簡単だ。", options: [{ text: "難しい", score: 5 }, { text: "人による", score: 3 }, { text: "簡単だ", score: 1 }] },
            { id: 18, text: "恋人に頼ることに抵抗がない。", options: [{ text: "抵抗がある", score: 5 }, { text: "時々", score: 3 }, { text: "全くない", score: 1 }] },
            { id: 19, text: "一人でいることについて...", options: [{ text: "一人が好き (回避)", score: 5 }, { text: "一人は怖い (不安)", score: 5 }, { text: "どちらでも平気 (安定)", score: 1 }] },
            { id: 20, text: "喧嘩の際、相手の立場を理解しようとする。", options: [{ text: "いいえ、自己防衛する", score: 5 }, { text: "時々", score: 3 }, { text: "はい、いつも", score: 1 }] },
            { id: 21, text: "自分は愛される価値があると思う。", options: [{ text: "疑わしい", score: 5 }, { text: "多分", score: 3 }, { text: "確信している", score: 1 }] },
            { id: 22, text: "必要な時、パートナーはそばにいてくれると信じている。", options: [{ text: "信じていない", score: 5 }, { text: "そう願う", score: 3 }, { text: "信じている", score: 1 }] },
            { id: 23, text: "自分の要望をはっきり伝える。", options: [{ text: "察してほしい", score: 5 }, { text: "時々", score: 3 }, { text: "はい、伝える", score: 1 }] },
            { id: 24, text: "恋愛とは...", options: [{ text: "ストレス・束縛", score: 5 }, { text: "複雑なもの", score: 3 }, { text: "安らぎの場", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "診断結果：安定型愛着スタイル (Secure)", 
                desc: "<strong>【心理原型】：安定の碇 (The Anchor)</strong><br><br>おめでとうございます！最も理想的な「安定型」です。あなたは自分自身に価値を感じ、他者を信頼することができます。親密さを楽しみつつ、自立心も失いません。心理的な駆け引きをせず、トラブルにも建設的に対応できます。<br><br><strong>アドバイス：</strong>その安定感はパートナーにとって最高のギフトです。ただし、相手の成長を妨げるような過度な世話焼きには注意してください。" 
            },
            { 
                min: 46, 
                max: 80, 
                title: "診断結果：不安型愛着スタイル (Anxious)", 
                desc: "<strong>【心理原型】：愛を求める旅人 (The Love Seeker)</strong><br><br>あなたは「不安型」です。愛する能力は高いですが、常に「嫌われるのではないか」「捨てられるのではないか」という不安を抱えています。相手の些細な言動に敏感になりすぎて、感情の波が激しくなりがちです。<br><br><strong>アドバイス：</strong>あなたの価値は他人の評価で決まりません。不安を感じた時、相手にぶつける前に、まずは自分で自分を落ち着かせる練習をしましょう。" 
            },
            { 
                min: 81, 
                max: 120, 
                title: "診断結果：回避型愛着スタイル (Avoidant)", 
                desc: "<strong>【心理原型】：孤独な守護者 (The Lone Wolf)</strong><br><br>あなたは「回避型」です。一見クールで自立しているように見えますが、実は「傷つくこと」を恐れて、親密になるのを避けています。「自由がなくなる」ことを極端に恐れ、相手が近づくと無意識に壁を作ってしまいます。<br><br><strong>アドバイス：</strong>「人に頼ること」は弱さではありません。逃げたくなった時こそ、踏みとどまって心を開くチャンスです。世界はあなたが思うより安全な場所です。" 
            }
        ]
    },

    // 5. 法语 (French) - Professional
    "fr": {
        title: "Test de Style d'Attachement (Professionnel)",
        desc: "Basé sur la théorie de l'attachement. 24 questions pour analyser vos schémas relationnels inconscients.",
        questions: [
            // 焦虑
            { id: 1, text: "Je crains souvent que mon partenaire ne m'aime pas autant que je l'aime.", options: [{ text: "Tout à fait", score: 5 }, { text: "Parfois", score: 3 }, { text: "Pas du tout", score: 1 }] },
            { id: 2, text: "Quand mon partenaire est absent, j'ai peur qu'il trouve quelqu'un d'autre.", options: [{ text: "Souvent", score: 5 }, { text: "Rarement", score: 3 }, { text: "Non, je fais confiance", score: 1 }] },
            { id: 3, text: "J'ai besoin de beaucoup d'être rassuré.", options: [{ text: "Constamment", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non", score: 1 }] },
            { id: 4, text: "Si pas de réponse immédiate, je panique.", options: [{ text: "Oui, le pire", score: 5 }, { text: "Un peu", score: 3 }, { text: "Non", score: 1 }] },
            { id: 5, text: "Je veux souvent être plus proche que mon partenaire ne le souhaite.", options: [{ text: "Exactement", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non, équilibré", score: 1 }] },
            { id: 6, text: "Mon humeur dépend de ma relation.", options: [{ text: "Oui, totalement", score: 5 }, { text: "Un peu", score: 3 }, { text: "Non", score: 1 }] },
            { id: 7, text: "Je deviens émotif ou collant quand je suis insécure.", options: [{ text: "Oui", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non, je me retire", score: 1 }] },
            { id: 8, text: "J'ai peur d'être abandonné.", options: [{ text: "Ma plus grande peur", score: 5 }, { text: "Parfois", score: 3 }, { text: "Rarement", score: 1 }] },
            
            // 回避
            { id: 9, text: "Je préfère ne pas montrer mes sentiments profonds.", options: [{ text: "Oui, protection", score: 5 }, { text: "Ça dépend", score: 3 }, { text: "Non, je suis ouvert", score: 1 }] },
            { id: 10, text: "Trop d'intimité me met mal à l'aise.", options: [{ text: "Oui, étouffant", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non, j'aime ça", score: 1 }] },
            { id: 11, text: "L'indépendance est plus importante que la relation.", options: [{ text: "Indépendance d'abord", score: 5 }, { text: "Les deux", score: 3 }, { text: "Relation d'abord", score: 1 }] },
            { id: 12, text: "Quand ça devient sérieux, je veux fuir.", options: [{ text: "Souvent", score: 5 }, { text: "Parfois", score: 3 }, { text: "Jamais", score: 1 }] },
            { id: 13, text: "Je n'aime pas dépendre des autres.", options: [{ text: "D'accord", score: 5 }, { text: "Neutre", score: 3 }, { text: "Pas d'accord", score: 1 }] },
            { id: 14, text: "Je garde des secrets pour ma vie privée.", options: [{ text: "Oui, vital", score: 5 }, { text: "Petites choses", score: 3 }, { text: "Non, je partage tout", score: 1 }] },
            { id: 15, text: "Je me remets vite des ruptures.", options: [{ text: "Oui, très vite", score: 5 }, { text: "Ça prend du temps", score: 3 }, { text: "Non, c'est dur", score: 1 }] },
            { id: 16, text: "Difficile de soutenir un partenaire qui pleure.", options: [{ text: "Oui, je bloque", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non, je soutiens", score: 1 }] },

            // 综合
            { id: 17, text: "Il est facile de se rapprocher des autres.", options: [{ text: "Difficile", score: 5 }, { text: "Ça dépend", score: 3 }, { text: "Facile", score: 1 }] },
            { id: 18, text: "J'accepte de dépendre de mon partenaire.", options: [{ text: "Non", score: 5 }, { text: "Parfois", score: 3 }, { text: "Oui", score: 1 }] },
            { id: 19, text: "Être seul...", options: [{ text: "J'adore (Évitant)", score: 5 }, { text: "Je déteste (Anxieux)", score: 5 }, { text: "Ça va (Sécure)", score: 1 }] },
            { id: 20, text: "En conflit, j'essaie de comprendre l'autre.", options: [{ text: "Non, défensif", score: 5 }, { text: "Parfois", score: 3 }, { text: "Oui, toujours", score: 1 }] },
            { id: 21, text: "Je mérite d'être aimé.", options: [{ text: "Je doute", score: 5 }, { text: "Probablement", score: 3 }, { text: "Absolument", score: 1 }] },
            { id: 22, text: "Je fais confiance à mon partenaire.", options: [{ text: "Je doute", score: 5 }, { text: "J'espère", score: 3 }, { text: "Totalement", score: 1 }] },
            { id: 23, text: "J'exprime mes besoins clairement.", options: [{ text: "Non, ils doivent deviner", score: 5 }, { text: "Parfois", score: 3 }, { text: "Oui", score: 1 }] },
            { id: 24, text: "Les relations sont...", options: [{ text: "Stressantes", score: 5 }, { text: "Compliquées", score: 3 }, { text: "Réconfortantes", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Résultat : Attachement Sécure", 
                desc: "<strong>[Archétype : L'Ancre]</strong><br><br>Félicitations ! Vous avez un style d'attachement sain. Vous êtes à l'aise avec l'intimité et l'indépendance. Vous ne jouez pas de jeux psychologiques et gérez les conflits de manière constructive.<br><br><strong>Conseil :</strong> Votre stabilité est un cadeau. Partagez-la avec quelqu'un qui l'apprécie." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Résultat : Attachement Anxieux", 
                desc: "<strong>[Archétype : Le Chercheur d'Amour]</strong><br><br>Vous avez une grande capacité d'aimer, mais vous craignez souvent le rejet. Vous êtes hypersensible aux humeurs de votre partenaire et avez besoin de beaucoup de réassurance.<br><br><strong>Conseil :</strong> Votre valeur ne dépend pas de l'attention des autres. Apprenez à vous apaiser vous-même." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Résultat : Attachement Évitant", 
                desc: "<strong>[Archétype : Le Loup Solitaire]</strong><br><br>Vous ressemblez à une île solitaire. Vous valorisez l'indépendance par-dessus tout et voyez l'intimité comme une menace pour votre liberté. Vous avez tendance à réprimer vos émotions.<br><br><strong>Conseil :</strong> L'indépendance est bien, mais la connexion est humaine. Essayez de baisser votre garde petit à petit." 
            }
        ]
    },

    // 6. 西班牙语 (Spanish) - Professional
    "es": {
        title: "Test de Estilo de Apego (Profesional)",
        desc: "Basado en la Teoría del Apego. 24 preguntas para analizar tus patrones subconscientes.",
        questions: [
            // 焦虑
            { id: 1, text: "Me preocupa que mi pareja no me ame tanto como yo a ella.", options: [{ text: "Muy de acuerdo", score: 5 }, { text: "A veces", score: 3 }, { text: "En desacuerdo", score: 1 }] },
            { id: 2, text: "Cuando mi pareja no está, temo que encuentre a otro.", options: [{ text: "A menudo", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "No, confío", score: 1 }] },
            { id: 3, text: "Necesito mucha validación de mi pareja.", options: [{ text: "Sí, constantemente", score: 5 }, { text: "A veces", score: 3 }, { text: "No", score: 1 }] },
            { id: 4, text: "Si no responde rápido, entro en pánico.", options: [{ text: "Sí, pienso lo peor", score: 5 }, { text: "Un poco", score: 3 }, { text: "No", score: 1 }] },
            { id: 5, text: "Quiero más cercanía que mi pareja.", options: [{ text: "Exacto", score: 5 }, { text: "A veces", score: 3 }, { text: "No, equilibrado", score: 1 }] },
            { id: 6, text: "Mi humor depende de mi relación.", options: [{ text: "Totalmente", score: 5 }, { text: "Un poco", score: 3 }, { text: "No", score: 1 }] },
            { id: 7, text: "Me pongo emotivo o pegajoso si me siento inseguro.", options: [{ text: "Sí", score: 5 }, { text: "A veces", score: 3 }, { text: "No, me alejo", score: 1 }] },
            { id: 8, text: "Temo ser abandonado.", options: [{ text: "Mi mayor miedo", score: 5 }, { text: "A veces", score: 3 }, { text: "Rara vez", score: 1 }] },
            
            // 回避
            { id: 9, text: "Prefiero no mostrar mis sentimientos profundos.", options: [{ text: "Sí, protección", score: 5 }, { text: "Depende", score: 3 }, { text: "No, soy abierto", score: 1 }] },
            { id: 10, text: "Demasiada intimidad me agobia.", options: [{ text: "Sí, asfixia", score: 5 }, { text: "A veces", score: 3 }, { text: "No, me gusta", score: 1 }] },
            { id: 11, text: "La independencia es más importante que la relación.", options: [{ text: "Independencia primero", score: 5 }, { text: "Ambas", score: 3 }, { text: "Relación primero", score: 1 }] },
            { id: 12, text: "Cuando se pone serio, quiero huir.", options: [{ text: "A menudo", score: 5 }, { text: "A veces", score: 3 }, { text: "Nunca", score: 1 }] },
            { id: 13, text: "No me gusta depender de otros.", options: [{ text: "De acuerdo", score: 5 }, { text: "Neutral", score: 3 }, { text: "En desacuerdo", score: 1 }] },
            { id: 14, text: "Guardo secretos para mi privacidad.", options: [{ text: "Sí, vital", score: 5 }, { text: "Pequeñas cosas", score: 3 }, { text: "No, comparto todo", score: 1 }] },
            { id: 15, text: "Me recupero rápido de rupturas.", options: [{ text: "Sí, muy rápido", score: 5 }, { text: "Toma tiempo", score: 3 }, { text: "No, es difícil", score: 1 }] },
            { id: 16, text: "Me cuesta consolar a una pareja que llora.", options: [{ text: "Sí, me bloqueo", score: 5 }, { text: "A veces", score: 3 }, { text: "No, apoyo", score: 1 }] },

            // 综合
            { id: 17, text: "Es fácil acercarme a otros.", options: [{ text: "Difícil", score: 5 }, { text: "Depende", score: 3 }, { text: "Fácil", score: 1 }] },
            { id: 18, text: "Me siento cómodo dependiendo de mi pareja.", options: [{ text: "No", score: 5 }, { text: "A veces", score: 3 }, { text: "Sí", score: 1 }] },
            { id: 19, text: "Estar solo...", options: [{ text: "Me encanta (Evitativo)", score: 5 }, { text: "Lo odio (Ansioso)", score: 5 }, { text: "Está bien (Seguro)", score: 1 }] },
            { id: 20, text: "En conflictos, trato de entender al otro.", options: [{ text: "No, defensivo", score: 5 }, { text: "A veces", score: 3 }, { text: "Sí, siempre", score: 1 }] },
            { id: 21, text: "Merezco ser amado.", options: [{ text: "Dudo", score: 5 }, { text: "Probablemente", score: 3 }, { text: "Absolutamente", score: 1 }] },
            { id: 22, text: "Confío en que mi pareja estará ahí.", options: [{ text: "Dudo", score: 5 }, { text: "Espero", score: 3 }, { text: "Totalmente", score: 1 }] },
            { id: 23, text: "Expreso mis necesidades claramente.", options: [{ text: "No, deben adivinar", score: 5 }, { text: "A veces", score: 3 }, { text: "Sí", score: 1 }] },
            { id: 24, text: "Las relaciones son...", options: [{ text: "Estresantes", score: 5 }, { text: "Complicadas", score: 3 }, { text: "Reconfortantes", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Resultado: Apego Seguro", 
                desc: "<strong>[Arquetipo: El Ancla]</strong><br><br>¡Felicidades! Tienes un estilo de apego saludable. Te sientes cómodo con la intimidad y la independencia. No juegas juegos mentales y manejas los conflictos de manera constructiva.<br><br><strong>Consejo:</strong> Tu estabilidad es un regalo. Compártela con quien la valore." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Resultado: Apego Ansioso", 
                desc: "<strong>[Arquetipo: El Buscador de Amor]</strong><br><br>Tienes una gran capacidad de amar, pero temes el rechazo. Eres hipersensible al humor de tu pareja y necesitas mucha validación.<br><br><strong>Consejo:</strong> Tu valor no depende de la atención de otros. Aprende a calmarte a ti mismo." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Resultado: Apego Evitativo", 
                desc: "<strong>[Arquetipo: El Lobo Solitario]</strong><br><br>Pareces una isla solitaria. Valoras la independencia sobre todo y ves la intimidad como una amenaza a tu libertad. Tiendes a reprimir tus emociones.<br><br><strong>Consejo:</strong> La independencia es buena, pero la conexión es humana. Intenta bajar la guardia poco a poco." 
            }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Professional
    "pt": {
        title: "Teste de Estilo de Apego (Profissional)",
        desc: "Baseado na Teoria do Apego. 24 perguntas para analisar seus padrões subconscientes de relacionamento.",
        questions: [
            { id: 1, text: "Preocupo-me que meu parceiro não me ame tanto quanto eu o amo.", options: [{ text: "Concordo plenamente", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Discordo", score: 1 }] },
            { id: 2, text: "Quando meu parceiro está longe, tenho medo que encontre outro.", options: [{ text: "Frequentemente", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "Não, confio", score: 1 }] },
            { id: 3, text: "Preciso de muita validação do meu parceiro.", options: [{ text: "Sim, constantemente", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não", score: 1 }] },
            { id: 4, text: "Se não responde rápido, entro em pânico.", options: [{ text: "Sim, penso o pior", score: 5 }, { text: "Um pouco", score: 3 }, { text: "Não", score: 1 }] },
            { id: 5, text: "Quero mais proximidade do que meu parceiro.", options: [{ text: "Exatamente", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não, equilibrado", score: 1 }] },
            { id: 6, text: "Meu humor depende do meu relacionamento.", options: [{ text: "Totalmente", score: 5 }, { text: "Um pouco", score: 3 }, { text: "Não", score: 1 }] },
            { id: 7, text: "Fico emotivo ou pegajoso se me sinto inseguro.", options: [{ text: "Sim", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não, me afasto", score: 1 }] },
            { id: 8, text: "Tenho medo de ser abandonado.", options: [{ text: "Meu maior medo", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Raramente", score: 1 }] },
            
            { id: 9, text: "Prefiro não mostrar meus sentimentos profundos.", options: [{ text: "Sim, proteção", score: 5 }, { text: "Depende", score: 3 }, { text: "Não, sou aberto", score: 1 }] },
            { id: 10, text: "Muita intimidade me sufoca.", options: [{ text: "Sim, muito", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não, eu gosto", score: 1 }] },
            { id: 11, text: "A independência é mais importante que a relação.", options: [{ text: "Independência primeiro", score: 5 }, { text: "Ambas", score: 3 }, { text: "Relação primeiro", score: 1 }] },
            { id: 12, text: "Quando fica sério, quero fugir.", options: [{ text: "Frequentemente", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Nunca", score: 1 }] },
            { id: 13, text: "Não gosto de depender dos outros.", options: [{ text: "Concordo", score: 5 }, { text: "Neutro", score: 3 }, { text: "Discordo", score: 1 }] },
            { id: 14, text: "Guardo segredos para minha privacidade.", options: [{ text: "Sim, vital", score: 5 }, { text: "Pequenas coisas", score: 3 }, { text: "Não, compartilho tudo", score: 1 }] },
            { id: 15, text: "Recupero-me rápido de términos.", options: [{ text: "Sim, muito rápido", score: 5 }, { text: "Leva tempo", score: 3 }, { text: "Não, é difícil", score: 1 }] },
            { id: 16, text: "Difícil consolar um parceiro que chora.", options: [{ text: "Sim, bloqueio", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não, apoio", score: 1 }] },

            { id: 17, text: "É fácil me aproximar dos outros.", options: [{ text: "Difícil", score: 5 }, { text: "Depende", score: 3 }, { text: "Fácil", score: 1 }] },
            { id: 18, text: "Sinto-me confortável dependendo do parceiro.", options: [{ text: "Não", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Sim", score: 1 }] },
            { id: 19, text: "Estar sozinho...", options: [{ text: "Adoro (Evitante)", score: 5 }, { text: "Odeio (Ansioso)", score: 5 }, { text: "Tudo bem (Seguro)", score: 1 }] },
            { id: 20, text: "Em conflitos, tento entender o outro.", options: [{ text: "Não, defensivo", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Sim, sempre", score: 1 }] },
            { id: 21, text: "Mereço ser amado.", options: [{ text: "Duvido", score: 5 }, { text: "Provavelmente", score: 3 }, { text: "Absolutamente", score: 1 }] },
            { id: 22, text: "Confio que meu parceiro estará lá.", options: [{ text: "Duvido", score: 5 }, { text: "Espero", score: 3 }, { text: "Totalmente", score: 1 }] },
            { id: 23, text: "Expresso minhas necessidades claramente.", options: [{ text: "Não, devem adivinhar", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Sim", score: 1 }] },
            { id: 24, text: "Relacionamentos são...", options: [{ text: "Estressantes", score: 5 }, { text: "Complicados", score: 3 }, { text: "Confortáveis", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Resultado: Apego Seguro", 
                desc: "<strong>[Arquétipo: A Âncora]</strong><br><br>Parabéns! Você tem um estilo de apego saudável. Sente-se confortável com a intimidade e a independência. Não faz jogos mentais e lida com conflitos de forma construtiva.<br><br><strong>Conselho:</strong> Sua estabilidade é um presente. Compartilhe-a com quem a valorize." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Resultado: Apego Ansioso", 
                desc: "<strong>[Arquétipo: O Buscador de Amor]</strong><br><br>Você tem uma grande capacidade de amar, mas teme a rejeição. É hipersensível ao humor do parceiro e precisa de muita validação.<br><br><strong>Conselho:</strong> Seu valor não depende da atenção dos outros. Aprenda a acalmar-se a si mesmo." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Resultado: Apego Evitante", 
                desc: "<strong>[Arquétipo: O Lobo Solitário]</strong><br><br>Você parece uma ilha solitária. Valoriza a independência acima de tudo e vê a intimidade como uma ameaça à sua liberdade. Tende a reprimir suas emoções.<br><br><strong>Conselho:</strong> A independência é boa, mas a conexão é humana. Tente baixar a guarda aos poucos." 
            }
        ]
    },

    // 8. 俄语 (Russian) - Professional
    "ru": {
        title: "Тип привязанности (Профессиональный)",
        desc: "Основано на теории привязанности. 24 вопроса для анализа ваших подсознательных паттернов.",
        questions: [
            { id: 1, text: "Я боюсь, что партнер любит меня меньше, чем я его.", options: [{ text: "Согласен", score: 5 }, { text: "Иногда", score: 3 }, { text: "Не согласен", score: 1 }] },
            { id: 2, text: "Когда партнера нет рядом, я боюсь измены.", options: [{ text: "Часто", score: 5 }, { text: "Редко", score: 3 }, { text: "Нет, доверяю", score: 1 }] },
            { id: 3, text: "Мне нужно постоянное подтверждение любви.", options: [{ text: "Да, постоянно", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет", score: 1 }] },
            { id: 4, text: "Если нет ответа на сообщение, я паникую.", options: [{ text: "Да, думаю о худшем", score: 5 }, { text: "Немного", score: 3 }, { text: "Нет", score: 1 }] },
            { id: 5, text: "Я хочу больше близости, чем партнер.", options: [{ text: "Точно", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет, баланс", score: 1 }] },
            { id: 6, text: "Мое настроение зависит от отношений.", options: [{ text: "Полностью", score: 5 }, { text: "Частично", score: 3 }, { text: "Нет", score: 1 }] },
            { id: 7, text: "Я становлюсь эмоциональным или навязчивым при неуверенности.", options: [{ text: "Да", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет, замыкаюсь", score: 1 }] },
            { id: 8, text: "Боюсь, что меня бросят.", options: [{ text: "Главный страх", score: 5 }, { text: "Иногда", score: 3 }, { text: "Редко", score: 1 }] },
            
            { id: 9, text: "Предпочитаю скрывать глубокие чувства.", options: [{ text: "Да, защита", score: 5 }, { text: "Зависит", score: 3 }, { text: "Нет, открыт", score: 1 }] },
            { id: 10, text: "Слишком много близости меня душит.", options: [{ text: "Да, очень", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет, люблю", score: 1 }] },
            { id: 11, text: "Независимость важнее отношений.", options: [{ text: "Сначала независимость", score: 5 }, { text: "Оба важны", score: 3 }, { text: "Отношения важнее", score: 1 }] },
            { id: 12, text: "Когда все серьезно, хочу сбежать.", options: [{ text: "Часто", score: 5 }, { text: "Иногда", score: 3 }, { text: "Никогда", score: 1 }] },
            { id: 13, text: "Не люблю зависеть от других.", options: [{ text: "Согласен", score: 5 }, { text: "Нейтрально", score: 3 }, { text: "Не согласен", score: 1 }] },
            { id: 14, text: "У меня есть секреты ради приватности.", options: [{ text: "Да, важно", score: 5 }, { text: "Мелочи", score: 3 }, { text: "Нет, делюсь всем", score: 1 }] },
            { id: 15, text: "Быстро восстанавливаюсь после разрыва.", options: [{ text: "Да, очень быстро", score: 5 }, { text: "Нужно время", score: 3 }, { text: "Нет, тяжело", score: 1 }] },
            { id: 16, text: "Трудно утешать плачущего партнера.", options: [{ text: "Да, теряюсь", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет, поддерживаю", score: 1 }] },

            { id: 17, text: "Легко сближаюсь с людьми.", options: [{ text: "Трудно", score: 5 }, { text: "Зависит", score: 3 }, { text: "Легко", score: 1 }] },
            { id: 18, text: "Мне комфортно зависеть от партнера.", options: [{ text: "Нет", score: 5 }, { text: "Иногда", score: 3 }, { text: "Да", score: 1 }] },
            { id: 19, text: "Быть одному...", options: [{ text: "Люблю (Избегающий)", score: 5 }, { text: "Ненавижу (Тревожный)", score: 5 }, { text: "Нормально (Надежный)", score: 1 }] },
            { id: 20, text: "В ссоре пытаюсь понять другого.", options: [{ text: "Нет, защита", score: 5 }, { text: "Иногда", score: 3 }, { text: "Да, всегда", score: 1 }] },
            { id: 21, text: "Я достоин любви.", options: [{ text: "Сомневаюсь", score: 5 }, { text: "Наверное", score: 3 }, { text: "Абсолютно", score: 1 }] },
            { id: 22, text: "Верю, что партнер будет рядом.", options: [{ text: "Сомневаюсь", score: 5 }, { text: "Надеюсь", score: 3 }, { text: "Верю", score: 1 }] },
            { id: 23, text: "Я прямо говорю о потребностях.", options: [{ text: "Нет, должны угадать", score: 5 }, { text: "Иногда", score: 3 }, { text: "Да", score: 1 }] },
            { id: 24, text: "Отношения - это...", options: [{ text: "Стресс", score: 5 }, { text: "Сложно", score: 3 }, { text: "Комфорт", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Результат: Надежный тип", 
                desc: "<strong>[Архетип: Якорь]</strong><br><br>Поздравляем! У вас здоровый стиль привязанности. Вы комфортно чувствуете себя в близости и независимости. Вы не играете в игры и конструктивно решаете конфликты.<br><br><strong>Совет:</strong> Ваша стабильность — это дар. Делитесь ею с тем, кто это ценит." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Результат: Тревожный тип", 
                desc: "<strong>[Архетип: Искатель любви]</strong><br><br>У вас огромная способность любить, но вы боитесь отвержения. Вы гиперчувствительны к настроению партнера и нуждаетесь в постоянном подтверждении.<br><br><strong>Совет:</strong> Ваша ценность не зависит от внимания других. Учитесь успокаивать себя сами." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Результат: Избегающий тип", 
                desc: "<strong>[Архетип: Одинокий волк]</strong><br><br>Вы кажетесь одиноким островом. Вы цените независимость превыше всего и видите в близости угрозу свободе. Вы склонны подавлять эмоции.<br><br><strong>Совет:</strong> Независимость — это хорошо, но связь — это по-человечески. Попробуйте постепенно опускать защиту." 
            }
        ]
    },

    // 9. 韩语 (Korean) - Professional
    "ko": {
        title: "연애 애착 유형 테스트 (전문가용)",
        desc: "애착 이론 기반. 24개의 질문으로 당신의 무의식적 관계 패턴을 심층 분석합니다.",
        questions: [
            { id: 1, text: "나는 연인이 나를 사랑하는 것보다 내가 더 사랑할까 봐 걱정한다.", options: [{ text: "매우 그렇다", score: 5 }, { text: "가끔", score: 3 }, { text: "아니다", score: 1 }] },
            { id: 2, text: "연인이 없을 때 다른 사람을 만날까 봐 불안하다.", options: [{ text: "자주", score: 5 }, { text: "가끔", score: 3 }, { text: "신뢰한다", score: 1 }] },
            { id: 3, text: "연인의 확인과 인정이 끊임없이 필요하다.", options: [{ text: "항상", score: 5 }, { text: "가끔", score: 3 }, { text: "필요 없다", score: 1 }] },
            { id: 4, text: "답장이 늦으면 패닉에 빠진다.", options: [{ text: "최악을 상상한다", score: 5 }, { text: "신경 쓰인다", score: 3 }, { text: "아니다", score: 1 }] },
            { id: 5, text: "연인이 원하는 것보다 내가 더 가까워지고 싶어 한다.", options: [{ text: "정확하다", score: 5 }, { text: "가끔", score: 3 }, { text: "균형 잡힘", score: 1 }] },
            { id: 6, text: "내 기분은 연애 상태에 좌우된다.", options: [{ text: "완전히", score: 5 }, { text: "어느 정도", score: 3 }, { text: "아니다", score: 1 }] },
            { id: 7, text: "불안할 때 감정적이 되거나 매달린다.", options: [{ text: "그렇다", score: 5 }, { text: "가끔", score: 3 }, { text: "아니다", score: 1 }] },
            { id: 8, text: "버림받는 것에 대한 두려움이 있다.", options: [{ text: "가장 큰 두려움", score: 5 }, { text: "가끔", score: 3 }, { text: "드물다", score: 1 }] },
            
            { id: 9, text: "깊은 감정은 숨기는 편이다.", options: [{ text: "방어 기제다", score: 5 }, { text: "상황에 따라", score: 3 }, { text: "솔직하다", score: 1 }] },
            { id: 10, text: "너무 가까운 친밀감은 숨 막힌다.", options: [{ text: "매우", score: 5 }, { text: "가끔", score: 3 }, { text: "좋다", score: 1 }] },
            { id: 11, text: "관계보다 독립성이 중요하다.", options: [{ text: "독립성 우선", score: 5 }, { text: "둘 다", score: 3 }, { text: "관계 우선", score: 1 }] },
            { id: 12, text: "관계가 진지해지면 도망치고 싶다.", options: [{ text: "자주", score: 5 }, { text: "가끔", score: 3 }, { text: "전혀", score: 1 }] },
            { id: 13, text: "남에게 의지하는 것을 싫어한다.", options: [{ text: "동의", score: 5 }, { text: "중립", score: 3 }, { text: "비동의", score: 1 }] },
            { id: 14, text: "사생활을 위해 비밀을 유지한다.", options: [{ text: "필수적이다", score: 5 }, { text: "사소한 것만", score: 3 }, { text: "다 공유한다", score: 1 }] },
            { id: 15, text: "이별 후 빠르게 회복한다.", options: [{ text: "매우 빠르다", score: 5 }, { text: "시간이 걸린다", score: 3 }, { text: "힘들다", score: 1 }] },
            { id: 16, text: "우는 연인을 위로하기 어렵다.", options: [{ text: "당황스럽다", score: 5 }, { text: "가끔", score: 3 }, { text: "잘 위로한다", score: 1 }] },

            { id: 17, text: "타인과 친해지는 것이 쉽다.", options: [{ text: "어렵다", score: 5 }, { text: "상황에 따라", score: 3 }, { text: "쉽다", score: 1 }] },
            { id: 18, text: "연인에게 의지하는 것이 편하다.", options: [{ text: "불편하다", score: 5 }, { text: "가끔", score: 3 }, { text: "편하다", score: 1 }] },
            { id: 19, text: "혼자 있는 것...", options: [{ text: "좋아함 (회피)", score: 5 }, { text: "싫어함 (불안)", score: 5 }, { text: "괜찮음 (안정)", score: 1 }] },
            { id: 20, text: "싸울 때 상대방을 이해하려 한다.", options: [{ text: "방어적이다", score: 5 }, { text: "가끔", score: 3 }, { text: "항상", score: 1 }] },
            { id: 21, text: "나는 사랑받을 자격이 있다.", options: [{ text: "의심한다", score: 5 }, { text: "아마도", score: 3 }, { text: "확신한다", score: 1 }] },
            { id: 22, text: "연인이 내 곁에 있을 거라 믿는다.", options: [{ text: "의심한다", score: 5 }, { text: "희망한다", score: 3 }, { text: "믿는다", score: 1 }] },
            { id: 23, text: "내 욕구를 명확히 표현한다.", options: [{ text: "알아서 알기를", score: 5 }, { text: "가끔", score: 3 }, { text: "표현한다", score: 1 }] },
            { id: 24, text: "연애는 전반적으로...", options: [{ text: "스트레스", score: 5 }, { text: "복잡함", score: 3 }, { text: "안식처", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "결과: 안정형 애착 (Secure)", 
                desc: "<strong>[원형: 닻 (The Anchor)]</strong><br><br>축하합니다! 건강한 애착 유형을 가지고 있습니다. 친밀감과 독립성 사이에서 편안함을 느낍니다. 심리 게임을 하지 않으며 갈등을 건설적으로 해결합니다.<br><br><strong>조언:</strong> 당신의 안정감은 선물입니다. 그것을 가치 있게 여기는 사람과 나누세요." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "결과: 불안형 애착 (Anxious)", 
                desc: "<strong>[원형: 사랑을 찾는 자 (The Love Seeker)]</strong><br><br>사랑하는 능력은 크지만 거절에 대한 두려움이 큽니다. 연인의 기분에 매우 민감하며 끊임없는 확인이 필요합니다.<br><br><strong>조언:</strong> 당신의 가치는 타인의 관심에 달려 있지 않습니다. 스스로를 진정시키는 법을 배우세요." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "결과: 회피형 애착 (Avoidant)", 
                desc: "<strong>[원형: 고독한 늑대 (The Lone Wolf)]</strong><br><br>당신은 외딴섬 같습니다. 무엇보다 독립을 중시하며 친밀감을 자유에 대한 위협으로 봅니다. 감정을 억누르는 경향이 있습니다.<br><br><strong>조언:</strong> 독립은 좋지만 연결은 인간의 본능입니다. 조금씩 마음의 벽을 낮춰보세요." 
            }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Professional
    "ar": {
        title: "اختبار نمط الحب (احترافي)",
        desc: "بناءً على نظرية التعلق. 24 سؤالاً لتحليل أنماط علاقاتك اللاواعية.",
        questions: [
            // 焦虑
            { id: 1, text: "أقلق أن شريكي لا يحبني بقدر ما أحبه.", options: [{ text: "أوافق بشدة", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا أوافق", score: 1 }] },
            { id: 2, text: "عند غياب شريكي، أخاف أن يجد غيري.", options: [{ text: "غالباً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا، أثق به", score: 1 }] },
            { id: 3, text: "أحتاج إلى الكثير من الطمأنينة.", options: [{ text: "دائماً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا", score: 1 }] },
            { id: 4, text: "إذا تأخر الرد، أصاب بالذعر.", options: [{ text: "نعم، أفكر بالأسوأ", score: 5 }, { text: "قليلاً", score: 3 }, { text: "لا", score: 1 }] },
            { id: 5, text: "أريد قرباً أكثر مما يريده شريكي.", options: [{ text: "بالضبط", score: 5 }, { text: "أحياناً", score: 3 }, { text: "متوازن", score: 1 }] },
            { id: 6, text: "مزاجي يعتمد على علاقتي.", options: [{ text: "كلياً", score: 5 }, { text: "نوعاً ما", score: 3 }, { text: "لا", score: 1 }] },
            { id: 7, text: "أصبح عاطفياً أو متشبثاً عند القلق.", options: [{ text: "نعم", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا، أنسحب", score: 1 }] },
            { id: 8, text: "أخاف من الهجر.", options: [{ text: "أكبر مخاوفي", score: 5 }, { text: "أحياناً", score: 3 }, { text: "نادراً", score: 1 }] },
            
            // 回避
            { id: 9, text: "أفضل عدم إظهار مشاعري العميقة.", options: [{ text: "نعم، حماية", score: 5 }, { text: "حسب الظرف", score: 3 }, { text: "لا، منفتح", score: 1 }] },
            { id: 10, text: "الحميمية الزائدة تخنقني.", options: [{ text: "نعم جداً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا، أحبها", score: 1 }] },
            { id: 11, text: "الاستقلال أهم من العلاقة.", options: [{ text: "الاستقلال أولاً", score: 5 }, { text: "كلاهما", score: 3 }, { text: "العلاقة أولاً", score: 1 }] },
            { id: 12, text: "عند الجدية، أريد الهرب.", options: [{ text: "غالباً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "أبداً", score: 1 }] },
            { id: 13, text: "لا أحب الاعتماد على الآخرين.", options: [{ text: "أوافق", score: 5 }, { text: "محايد", score: 3 }, { text: "لا أوافق", score: 1 }] },
            { id: 14, text: "أحتفظ بأسرار لخصوصيتي.", options: [{ text: "نعم، ضروري", score: 5 }, { text: "أشياء صغيرة", score: 3 }, { text: "أشارك كل شيء", score: 1 }] },
            { id: 15, text: "أتعافى بسرعة من الانفصال.", options: [{ text: "بسرعة جداً", score: 5 }, { text: "يستغرق وقتاً", score: 3 }, { text: "صعب جداً", score: 1 }] },
            { id: 16, text: "يصعب علي مواساة شريك يبكي.", options: [{ text: "نعم، أرتبك", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا، أدعمه", score: 1 }] },

            // 综合
            { id: 17, text: "من السهل علي التقرب من الناس.", options: [{ text: "صعب", score: 5 }, { text: "حسب الشخص", score: 3 }, { text: "سهل", score: 1 }] },
            { id: 18, text: "أرتاح للاعتماد على شريكي.", options: [{ text: "لا", score: 5 }, { text: "أحياناً", score: 3 }, { text: "نعم", score: 1 }] },
            { id: 19, text: "الوحدة...", options: [{ text: "أحبها (متجنب)", score: 5 }, { text: "أكرهها (قلق)", score: 5 }, { text: "عادية (آمن)", score: 1 }] },
            { id: 20, text: "في الخلاف، أحاول فهم الآخر.", options: [{ text: "لا، أدافع", score: 5 }, { text: "أحياناً", score: 3 }, { text: "نعم دائماً", score: 1 }] },
            { id: 21, text: "أستحق الحب.", options: [{ text: "أشك", score: 5 }, { text: "ربما", score: 3 }, { text: "بالتأكيد", score: 1 }] },
            { id: 22, text: "أثق بوجود شريكي.", options: [{ text: "أشك", score: 5 }, { text: "آمل", score: 3 }, { text: "أثق", score: 1 }] },
            { id: 23, text: "أعبر عن احتياجاتي بوضوح.", options: [{ text: "لا، يجب أن يخمنوا", score: 5 }, { text: "أحياناً", score: 3 }, { text: "نعم", score: 1 }] },
            { id: 24, text: "العلاقات...", options: [{ text: "مجهدة", score: 5 }, { text: "معقدة", score: 3 }, { text: "مريحة", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "النتيجة: تعلق آمن", 
                desc: "<strong>[النموذج: المرساة]</strong><br><br>تهانينا! لديك نمط تعلق صحي. ترتاح للحميمية والاستقلال. لا تلعب ألعاباً نفسية وتحل الخلافات بشكل بناء.<br><br><strong>نصيحة:</strong> استقرارك هدية. شاركه مع من يقدره." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "النتيجة: تعلق قلق", 
                desc: "<strong>[النموذج: الباحث عن الحب]</strong><br><br>لديك قدرة كبيرة على الحب، لكنك تخاف الرفض. أنت حساس جداً لمزاج شريكك وتحتاج لطمأنينة دائمة.<br><br><strong>نصيحة:</strong> قيمتك لا تعتمد على اهتمام الآخرين. تعلم تهدئة نفسك بنفسك." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "النتيجة: تعلق متجنب", 
                desc: "<strong>[النموذج: الذئب الوحيد]</strong><br><br>تبدو كجزيرة منعزلة. تقدر الاستقلال فوق كل شيء وترى الحميمية تهديداً لحريتك. تميل لكبت مشاعرك.<br><br><strong>نصيحة:</strong> الاستقلال جيد، لكن التواصل بشري. حاول خفض دفاعاتك تدريجياً." 
            }
        ]
    },

    // 11. 越南语 (Vietnamese) - Professional
    "vi": {
        title: "Kiểm tra phong cách yêu (Chuyên nghiệp)",
        desc: "Dựa trên Thuyết Gắn bó. 24 câu hỏi phân tích sâu sắc mô hình tiềm thức của bạn.",
        questions: [
            { id: 1, text: "Tôi lo rằng đối phương không yêu tôi nhiều như tôi yêu họ.", options: [{ text: "Rất đúng", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Không đúng", score: 1 }] },
            { id: 2, text: "Khi xa nhau, tôi sợ họ có người khác.", options: [{ text: "Thường xuyên", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Không, tôi tin tưởng", score: 1 }] },
            { id: 3, text: "Tôi cần sự trấn an liên tục.", options: [{ text: "Luôn luôn", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Không", score: 1 }] },
            { id: 4, text: "Nếu không trả lời ngay, tôi hoảng loạn.", options: [{ text: "Nghĩ điều tồi tệ nhất", score: 5 }, { text: "Hơi lo", score: 3 }, { text: "Không", score: 1 }] },
            { id: 5, text: "Tôi muốn gần gũi hơn mức đối phương muốn.", options: [{ text: "Chính xác", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Cân bằng", score: 1 }] },
            { id: 6, text: "Tâm trạng tôi phụ thuộc vào mối quan hệ.", options: [{ text: "Hoàn toàn", score: 5 }, { text: "Một phần", score: 3 }, { text: "Không", score: 1 }] },
            { id: 7, text: "Tôi trở nên cảm xúc hoặc đeo bám khi bất an.", options: [{ text: "Có", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Không, tôi rút lui", score: 1 }] },
            { id: 8, text: "Sợ bị bỏ rơi.", options: [{ text: "Nỗi sợ lớn nhất", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Hiếm khi", score: 1 }] },
            
            { id: 9, text: "Tôi giấu cảm xúc sâu kín.", options: [{ text: "Để tự vệ", score: 5 }, { text: "Tùy lúc", score: 3 }, { text: "Không, tôi cởi mở", score: 1 }] },
            { id: 10, text: "Quá thân mật làm tôi ngột ngạt.", options: [{ text: "Rất đúng", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Không, tôi thích", score: 1 }] },
            { id: 11, text: "Độc lập quan trọng hơn quan hệ.", options: [{ text: "Độc lập trước", score: 5 }, { text: "Cả hai", score: 3 }, { text: "Quan hệ trước", score: 1 }] },
            { id: 12, text: "Khi nghiêm túc, tôi muốn bỏ chạy.", options: [{ text: "Thường xuyên", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Không bao giờ", score: 1 }] },
            { id: 13, text: "Tôi không thích dựa dẫm vào người khác.", options: [{ text: "Đồng ý", score: 5 }, { text: "Trung lập", score: 3 }, { text: "Không đồng ý", score: 1 }] },
            { id: 14, text: "Tôi giữ bí mật để có riêng tư.", options: [{ text: "Cần thiết", score: 5 }, { text: "Chuyện nhỏ", score: 3 }, { text: "Chia sẻ hết", score: 1 }] },
            { id: 15, text: "Hồi phục nhanh sau chia tay.", options: [{ text: "Rất nhanh", score: 5 }, { text: "Cần thời gian", score: 3 }, { text: "Rất khó", score: 1 }] },
            { id: 16, text: "Khó an ủi người đang khóc.", options: [{ text: "Bối rối", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Không, tôi hỗ trợ", score: 1 }] },

            { id: 17, text: "Dễ dàng thân thiết với người khác.", options: [{ text: "Khó", score: 5 }, { text: "Tùy người", score: 3 }, { text: "Dễ", score: 1 }] },
            { id: 18, text: "Thoải mái dựa vào đối phương.", options: [{ text: "Không", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Có", score: 1 }] },
            { id: 19, text: "Ở một mình...", options: [{ text: "Thích (Tránh né)", score: 5 }, { text: "Ghét (Lo âu)", score: 5 }, { text: "Ổn (An toàn)", score: 1 }] },
            { id: 20, text: "Cố gắng hiểu đối phương khi cãi nhau.", options: [{ text: "Không, phòng thủ", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Luôn luôn", score: 1 }] },
            { id: 21, text: "Tôi xứng đáng được yêu.", options: [{ text: "Nghi ngờ", score: 5 }, { text: "Có lẽ", score: 3 }, { text: "Chắc chắn", score: 1 }] },
            { id: 22, text: "Tin tưởng đối phương sẽ ở bên.", options: [{ text: "Nghi ngờ", score: 5 }, { text: "Hy vọng", score: 3 }, { text: "Tin tưởng", score: 1 }] },
            { id: 23, text: "Bày tỏ nhu cầu rõ ràng.", options: [{ text: "Họ phải tự đoán", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Có", score: 1 }] },
            { id: 24, text: "Mối quan hệ là...", options: [{ text: "Căng thẳng", score: 5 }, { text: "Phức tạp", score: 3 }, { text: "Thoải mái", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Kết quả: Gắn bó An toàn", 
                desc: "<strong>[Nguyên mẫu: Mỏ neo]</strong><br><br>Chúc mừng! Bạn có phong cách lành mạnh. Bạn thoải mái với sự thân mật và độc lập. Bạn không chơi trò tâm lý và giải quyết xung đột tích cực.<br><br><strong>Lời khuyên:</strong> Sự ổn định của bạn là món quà. Hãy chia sẻ với người biết trân trọng." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Kết quả: Gắn bó Lo âu", 
                desc: "<strong>[Nguyên mẫu: Kẻ tìm kiếm tình yêu]</strong><br><br>Bạn yêu rất nhiều nhưng sợ bị từ chối. Bạn nhạy cảm với tâm trạng đối phương và cần sự trấn an liên tục.<br><br><strong>Lời khuyên:</strong> Giá trị của bạn không phụ thuộc vào người khác. Hãy học cách tự xoa dịu bản thân." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Kết quả: Gắn bó Tránh né", 
                desc: "<strong>[Nguyên mẫu: Sói đơn độc]</strong><br><br>Bạn như hòn đảo cô độc. Bạn coi trọng độc lập và xem thân mật là mối đe dọa tự do. Bạn có xu hướng kìm nén cảm xúc.<br><br><strong>Lời khuyên:</strong> Độc lập tốt, nhưng kết nối là bản năng. Hãy thử hạ thấp sự phòng vệ từ từ." 
            }
        ]
    },

    // 12. 泰语 (Thai) - Professional
    "th": {
        title: "แบบทดสอบความรัก (ฉบับมืออาชีพ)",
        desc: "อ้างอิงจากทฤษฎีความผูกพัน 24 คำถามเพื่อวิเคราะห์รูปแบบจิตใต้สำนึกของคุณ",
        questions: [
            { id: 1, text: "ฉันกังวลว่าเขาจะไม่รักฉันเท่าที่ฉันรักเขา", options: [{ text: "เห็นด้วยอย่างยิ่ง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่เห็นด้วย", score: 1 }] },
            { id: 2, text: "เมื่อห่างกัน ฉันกลัวเขาจะมีคนอื่น", options: [{ text: "บ่อยครั้ง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่, ฉันไว้ใจ", score: 1 }] },
            { id: 3, text: "ฉันต้องการคำยืนยันความรักเสมอ", options: [{ text: "ตลอดเวลา", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่", score: 1 }] },
            { id: 4, text: "ถ้าตอบช้า ฉันจะตื่นตระหนก", options: [{ text: "ใช่, คิดแง่ลบ", score: 5 }, { text: "กังวลนิดหน่อย", score: 3 }, { text: "ไม่", score: 1 }] },
            { id: 5, text: "ฉันต้องการความใกล้ชิดมากกว่าที่เขาต้องการ", options: [{ text: "ถูกต้อง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "สมดุล", score: 1 }] },
            { id: 6, text: "อารมณ์ของฉันขึ้นอยู่กับความสัมพันธ์", options: [{ text: "ทั้งหมด", score: 5 }, { text: "บางส่วน", score: 3 }, { text: "ไม่", score: 1 }] },
            { id: 7, text: "เมื่อไม่มั่นคง ฉันจะใช้อารมณ์หรือเกาะติด", options: [{ text: "ใช่", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่, ฉันถอยห่าง", score: 1 }] },
            { id: 8, text: "กลัวการถูกทิ้ง", options: [{ text: "กลัวที่สุด", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "น้อยมาก", score: 1 }] },
            
            { id: 9, text: "ฉันมักซ่อนความรู้สึกที่แท้จริง", options: [{ text: "เพื่อป้องกันตัว", score: 5 }, { text: "แล้วแต่สถานการณ์", score: 3 }, { text: "ไม่, ฉันเปิดเผย", score: 1 }] },
            { id: 10, text: "ความใกล้ชิดมากไปทำให้ฉันอึดอัด", options: [{ text: "ใช่, มาก", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่, ฉันชอบ", score: 1 }] },
            { id: 11, text: "อิสระสำคัญกว่าความสัมพันธ์", options: [{ text: "อิสระมาก่อน", score: 5 }, { text: "ทั้งคู่", score: 3 }, { text: "ความสัมพันธ์มาก่อน", score: 1 }] },
            { id: 12, text: "เมื่อเริ่มจริงจัง ฉันอยากหนี", options: [{ text: "บ่อยครั้ง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่เคย", score: 1 }] },
            { id: 13, text: "ฉันไม่ชอบพึ่งพาคนอื่น", options: [{ text: "เห็นด้วย", score: 5 }, { text: "เฉยๆ", score: 3 }, { text: "ไม่เห็นด้วย", score: 1 }] },
            { id: 14, text: "ฉันเก็บความลับเพื่อความเป็นส่วนตัว", options: [{ text: "จำเป็นมาก", score: 5 }, { text: "เรื่องเล็กน้อย", score: 3 }, { text: "แชร์ทุกเรื่อง", score: 1 }] },
            { id: 15, text: "ฟื้นตัวเร็วหลังเลิกรา", options: [{ text: "เร็วมาก", score: 5 }, { text: "ใช้เวลา", score: 3 }, { text: "ยากมาก", score: 1 }] },
            { id: 16, text: "ปลอบใจคนร้องไห้ไม่เก่ง", options: [{ text: "ทำตัวไม่ถูก", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ฉันช่วยได้", score: 1 }] },

            { id: 17, text: "สนิทกับคนอื่นได้ง่าย", options: [{ text: "ยาก", score: 5 }, { text: "แล้วแต่คน", score: 3 }, { text: "ง่าย", score: 1 }] },
            { id: 18, text: "สบายใจที่จะพึ่งพาแฟน", options: [{ text: "ไม่", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ใช่", score: 1 }] },
            { id: 19, text: "การอยู่คนเดียว...", options: [{ text: "ชอบ (หลีกเลี่ยง)", score: 5 }, { text: "เกลียด (กังวล)", score: 5 }, { text: "โอเค (มั่นคง)", score: 1 }] },
            { id: 20, text: "เมื่อทะเลาะ พยายามเข้าใจอีกฝ่าย", options: [{ text: "ไม่, ป้องกันตัว", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "เสมอ", score: 1 }] },
            { id: 21, text: "ฉันคู่ควรกับความรัก", options: [{ text: "สงสัย", score: 5 }, { text: "น่าจะ", score: 3 }, { text: "แน่นอน", score: 1 }] },
            { id: 22, text: "เชื่อใจว่าเขาจะอยู่เคียงข้าง", options: [{ text: "สงสัย", score: 5 }, { text: "หวังว่า", score: 3 }, { text: "เชื่อใจ", score: 1 }] },
            { id: 23, text: "บอกความต้องการชัดเจน", options: [{ text: "เขาต้องเดาเอง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ใช่", score: 1 }] },
            { id: 24, text: "ความสัมพันธ์คือ...", options: [{ text: "ความเครียด", score: 5 }, { text: "ความซับซ้อน", score: 3 }, { text: "ความสบายใจ", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "ผลลัพธ์: แบบมั่นคง (Secure)", 
                desc: "<strong>[ต้นแบบ: สมอเรือ]</strong><br><br>ยินดีด้วย! คุณมีรูปแบบความผูกพันที่ดีต่อสุขภาพ คุณสบายใจกับความใกล้ชิดและความเป็นอิสระ ไม่เล่นเกมความรู้สึกและแก้ปัญหาอย่างสร้างสรรค์<br><br><strong>คำแนะนำ:</strong> ความมั่นคงของคุณคือของขวัญ จงแบ่งปันกับคนที่เห็นคุณค่า" 
            },
            { 
                min: 46, 
                max: 80, 
                title: "ผลลัพธ์: แบบกังวล (Anxious)", 
                desc: "<strong>[ต้นแบบ: ผู้โหยหาความรัก]</strong><br><br>คุณมีความรักเปี่ยมล้น แต่กลัวการถูกปฏิเสธ คุณไวต่อความรู้สึกของคู่รักมากและต้องการคำยืนยันเสมอ<br><br><strong>คำแนะนำ:</strong> คุณค่าของคุณไม่ได้อยู่ที่ความสนใจของคนอื่น ฝึกปลอบโยนตัวเอง" 
            },
            { 
                min: 81, 
                max: 120, 
                title: "ผลลัพธ์: แบบหลีกเลี่ยง (Avoidant)", 
                desc: "<strong>[ต้นแบบ: หมาป่าเดียวดาย]</strong><br><br>คุณเหมือนเกาะโดดเดี่ยว คุณให้ค่าอิสระสูงสุดและมองความใกล้ชิดเป็นภัยคุกคาม มักเก็บกดอารมณ์<br><br><strong>คำแนะนำ:</strong> อิสระเป็นสิ่งดี แต่การเชื่อมโยงคือธรรมชาติของมนุษย์ ลองเปิดใจทีละนิด" 
            }
        ]
    },

    // 13. 印尼语 (Indonesian) - Professional
    "id": {
        title: "Tes Gaya Cinta (Profesional)",
        desc: "Berdasarkan Teori Kelekatan. 24 pertanyaan untuk analisis mendalam pola bawah sadar Anda.",
        questions: [
            { id: 1, text: "Saya khawatir pasangan tidak mencintai saya sebanyak saya mencintainya.", options: [{ text: "Sangat setuju", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak setuju", score: 1 }] },
            { id: 2, text: "Saat berpisah, saya takut dia menemukan orang lain.", options: [{ text: "Sering", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak, saya percaya", score: 1 }] },
            { id: 3, text: "Saya butuh banyak kepastian.", options: [{ text: "Selalu", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak", score: 1 }] },
            { id: 4, text: "Jika tidak segera dibalas, saya panik.", options: [{ text: "Ya, pikir buruk", score: 5 }, { text: "Sedikit", score: 3 }, { text: "Tidak", score: 1 }] },
            { id: 5, text: "Saya ingin lebih dekat daripada pasangan.", options: [{ text: "Tepat", score: 5 }, { text: "Kadang", score: 3 }, { text: "Seimbang", score: 1 }] },
            { id: 6, text: "Suasana hati saya tergantung pada hubungan.", options: [{ text: "Total", score: 5 }, { text: "Sedikit", score: 3 }, { text: "Tidak", score: 1 }] },
            { id: 7, text: "Saya menjadi emosional/lengket saat tidak aman.", options: [{ text: "Ya", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak, menjauh", score: 1 }] },
            { id: 8, text: "Takut ditinggalkan.", options: [{ text: "Ketakutan terbesar", score: 5 }, { text: "Kadang", score: 3 }, { text: "Jarang", score: 1 }] },
            
            { id: 9, text: "Saya menyembunyikan perasaan terdalam.", options: [{ text: "Untuk perlindungan", score: 5 }, { text: "Tergantung", score: 3 }, { text: "Tidak, terbuka", score: 1 }] },
            { id: 10, text: "Terlalu intim membuat sesak.", options: [{ text: "Ya, sangat", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak, saya suka", score: 1 }] },
            { id: 11, text: "Kemandirian lebih penting dari hubungan.", options: [{ text: "Mandiri dulu", score: 5 }, { text: "Keduanya", score: 3 }, { text: "Hubungan dulu", score: 1 }] },
            { id: 12, text: "Saat serius, saya ingin lari.", options: [{ text: "Sering", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak pernah", score: 1 }] },
            { id: 13, text: "Tidak suka bergantung pada orang lain.", options: [{ text: "Setuju", score: 5 }, { text: "Netral", score: 3 }, { text: "Tidak setuju", score: 1 }] },
            { id: 14, text: "Menjaga rahasia untuk privasi.", options: [{ text: "Penting", score: 5 }, { text: "Hal kecil", score: 3 }, { text: "Berbagi semua", score: 1 }] },
            { id: 15, text: "Cepat pulih setelah putus.", options: [{ text: "Sangat cepat", score: 5 }, { text: "Butuh waktu", score: 3 }, { text: "Sulit", score: 1 }] },
            { id: 16, text: "Sulit menghibur pasangan yang menangis.", options: [{ text: "Bingung", score: 5 }, { text: "Kadang", score: 3 }, { text: "Bisa menghibur", score: 1 }] },

            { id: 17, text: "Mudah akrab dengan orang lain.", options: [{ text: "Sulit", score: 5 }, { text: "Tergantung", score: 3 }, { text: "Mudah", score: 1 }] },
            { id: 18, text: "Nyaman bergantung pada pasangan.", options: [{ text: "Tidak", score: 5 }, { text: "Kadang", score: 3 }, { text: "Ya", score: 1 }] },
            { id: 19, text: "Sendirian...", options: [{ text: "Suka (Menghindar)", score: 5 }, { text: "Benci (Cemas)", score: 5 }, { text: "Oke (Aman)", score: 1 }] },
            { id: 20, text: "Saat konflik, mencoba mengerti lawan.", options: [{ text: "Tidak, defensif", score: 5 }, { text: "Kadang", score: 3 }, { text: "Selalu", score: 1 }] },
            { id: 21, text: "Saya pantas dicintai.", options: [{ text: "Ragu", score: 5 }, { text: "Mungkin", score: 3 }, { text: "Pasti", score: 1 }] },
            { id: 22, text: "Percaya dia akan ada untuk saya.", options: [{ text: "Ragu", score: 5 }, { text: "Berharap", score: 3 }, { text: "Percaya", score: 1 }] },
            { id: 23, text: "Menyatakan kebutuhan dengan jelas.", options: [{ text: "Harus tebak", score: 5 }, { text: "Kadang", score: 3 }, { text: "Ya", score: 1 }] },
            { id: 24, text: "Hubungan itu...", options: [{ text: "Stres", score: 5 }, { text: "Rumit", score: 3 }, { text: "Nyaman", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 45, 
                title: "Hasil: Kelekatan Aman", 
                desc: "<strong>[Arketipe: Jangkar]</strong><br><br>Selamat! Anda memiliki gaya yang sehat. Nyaman dengan keintiman dan kemandirian. Tidak main-main dan mengatasi konflik dengan baik.<br><br><strong>Saran:</strong> Kestabilan Anda adalah hadiah. Bagikan dengan yang menghargainya." 
            },
            { 
                min: 46, 
                max: 80, 
                title: "Hasil: Kelekatan Cemas", 
                desc: "<strong>[Arketipe: Pencari Cinta]</strong><br><br>Anda punya kapasitas cinta besar, tapi takut penolakan. Sangat sensitif terhadap suasana hati pasangan dan butuh kepastian.<br><br><strong>Saran:</strong> Nilai diri Anda tidak tergantung perhatian orang lain. Belajarlah menenangkan diri." 
            },
            { 
                min: 81, 
                max: 120, 
                title: "Hasil: Kelekatan Menghindar", 
                desc: "<strong>[Arketipe: Serigala Penyendiri]</strong><br><br>Anda menghargai kemandirian di atas segalanya dan melihat keintiman sebagai ancaman. Cenderung menekan emosi.<br><br><strong>Saran:</strong> Mandiri itu baik, tapi koneksi itu manusiawi. Coba turunkan pertahanan perlahan." 
            }
        ]
    }
};
