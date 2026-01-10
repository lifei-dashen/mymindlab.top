// data/test3.js
// 国际标准心理成熟度评估 (International Mental Age Inventory - IMAI)
// 基于 Piaget 认知发展 & Kohlberg 道德发展阶梯
// 24题完整版 | 包含精确年龄画像与心理处方

const quizDataMulti = {
    // 1. 英语 (English) - Clinical Standard
    "en": {
        title: "Clinical Mental Age Assessment",
        desc: "Using the standardized ego-development scale, this test calculates your precise 'Psychological Age' by evaluating 24 dimensions of emotional granularity, impulse control, and moral reasoning.",
        questions: [
            // --- Group A: Impulse & Emotional Regulation (0-15 pts) ---
            { id: 1, text: "Someone cuts you off in traffic or bumps into you. Your immediate reflex is:", options: [{ text: "Rage/Scream/Honk", score: 1 }, { text: "Complain to others", score: 3 }, { text: "Assume it was a mistake/Let it go", score: 5 }] },
            { id: 2, text: "You want a specific item but can't afford it right now.", options: [{ text: "Buy it anyway (Credit/Debt)", score: 1 }, { text: "Feel resentful about not having it", score: 2 }, { text: "Create a savings plan", score: 5 }] },
            { id: 3, text: "When you are bored, you usually:", options: [{ text: "Doom-scroll social media instantly", score: 1 }, { text: "Find someone to talk to", score: 3 }, { text: "Reflect or learn something new", score: 5 }] },
            { id: 4, text: "A friend cancels plans last minute.", options: [{ text: "Take it personally/Block them", score: 1 }, { text: "Ask why/Feel annoyed", score: 3 }, { text: "Use the free time for myself", score: 5 }] },

            // --- Group B: Locus of Control & Responsibility (16-30 pts) ---
            { id: 5, text: "When you make a mistake at work/school:", options: [{ text: "Hide it or blame technology", score: 1 }, { text: "Admit it but make excuses", score: 3 }, { text: "Own it immediately and fix it", score: 5 }] },
            { id: 6, text: "Your life currently feels:", options: [{ text: "Like things are happening TO me", score: 1 }, { text: "A mix of luck and effort", score: 3 }, { text: "A result of my own choices", score: 5 }] },
            { id: 7, text: "When offered constructive criticism:", options: [{ text: "I feel attacked/Angry", score: 1 }, { text: "I feel insecure/Sad", score: 3 }, { text: "I look for the truth in it", score: 5 }] },
            { id: 8, text: "Regarding your personal happiness:", options: [{ text: "My partner/job must make me happy", score: 1 }, { text: "It's shared responsibility", score: 3 }, { text: "I am solely responsible", score: 5 }] },

            // --- Group C: Social Cognition & Empathy (31-45 pts) ---
            { id: 9, text: "When someone has a different political/social view:", options: [{ text: "They are stupid/evil", score: 1 }, { text: "I try to avoid the topic", score: 3 }, { text: "I try to understand their origin", score: 5 }] },
            { id: 10, text: "A friend is crying. You feel:", options: [{ text: "Awkward, want to leave", score: 1 }, { text: "I must fix their problem now", score: 3 }, { text: "Present, listening without judging", score: 5 }] },
            { id: 11, text: "When you do a favor for someone:", options: [{ text: "I expect an immediate return", score: 1 }, { text: "I hope they remember it", score: 3 }, { text: "I do it because I want to", score: 5 }] },
            { id: 12, text: "Gossip and drama:", options: [{ text: "I live for it, it's exciting", score: 1 }, { text: "I participate to fit in", score: 3 }, { text: "I find it draining/boring", score: 5 }] },

            // --- Group D: Cognitive Complexity (46-60 pts) ---
            { id: 13, text: "Your view on 'Truth':", options: [{ text: "There is only one Truth (mine)", score: 1 }, { text: "Truth is what the majority says", score: 3 }, { text: "Truth is multifaceted and complex", score: 5 }] },
            { id: 14, text: "Planning for the future:", options: [{ text: "I live only for today", score: 1 }, { text: "I have a vague idea", score: 3 }, { text: "I have a vision but stay flexible", score: 5 }] },
            { id: 15, text: "When rules/laws seem unfair:", options: [{ text: "I break them if I don't get caught", score: 1 }, { text: "I follow them anyway", score: 3 }, { text: "I question them or work to change them", score: 5 }] },
            { id: 16, text: "Defining success:", options: [{ text: "Money, Fame, Power", score: 1 }, { text: "Comfort, Family, Job", score: 3 }, { text: "Fulfillment, Growth, Impact", score: 5 }] },

            // --- Group E: Self-Identity (61-80 pts) ---
            { id: 17, text: "Being alone:", options: [{ text: "Terrifying", score: 1 }, { text: "Boring", score: 2 }, { text: "Restorative", score: 5 }] },
            { id: 18, text: "Jealousy in relationships:", options: [{ text: "I am extremely possessive", score: 1 }, { text: "I get jealous but hide it", score: 3 }, { text: "I trust until proven otherwise", score: 5 }] },
            { id: 19, text: "Apologizing:", options: [{ text: "Makes me look weak", score: 1 }, { text: "I say 'sorry but...'", score: 3 }, { text: "I apologize for my impact, no 'buts'", score: 5 }] },
            { id: 20, text: "Material possessions:", options: [{ text: "They define my worth", score: 1 }, { text: "They are nice to have", score: 3 }, { text: "They are utilitarian tools", score: 5 }] },

            // --- Group F: Transcendence (81-120 pts) ---
            { id: 21, text: "Dealing with death/mortality:", options: [{ text: "I ignore it completely", score: 1 }, { text: "It scares me", score: 3 }, { text: "It motivates me to live fully", score: 5 }] },
            { id: 22, text: "When you see injustice:", options: [{ text: "Not my problem", score: 1 }, { text: "I feel bad but do nothing", score: 3 }, { text: "I take action within my power", score: 5 }] },
            { id: 23, text: "Learning new things:", options: [{ text: "Only if forced (school/work)", score: 1 }, { text: "To earn more money", score: 3 }, { text: "For the joy of understanding", score: 5 }] },
            { id: 24, text: "The purpose of life is:", options: [{ text: "To be served", score: 1 }, { text: "To fit in", score: 3 }, { text: "To serve and create", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "Mental Age: 9-14 Years (Childhood Phase)", 
                desc: "<strong>[Psychological Stage: Pre-Conventional / Impulsive]</strong><br><br>" +
                      "<strong>Clinical Assessment:</strong><br>Your psychological age aligns with late childhood or early adolescence. You operate primarily on the <strong>Pleasure Principle</strong> (seeking immediate gratification). Your world is somewhat egocentric, meaning you interpret events primarily through how they affect <em>you</em> directly.<br><br>" +
                      "<strong>Core Traits:</strong><br>• Low impulse control.<br>• External locus of control (blaming others).<br>• Difficulty with delayed gratification.<br><br>" +
                      "<strong>Prescription:</strong><br>Practice taking a 'gap' between feeling an emotion and acting on it. Responsibility is not a burden; it is power." 
            },
            { 
                min: 41, 
                max: 70, 
                title: "Mental Age: 15-22 Years (Adolescent Phase)", 
                desc: "<strong>[Psychological Stage: Conventional / Conformist]</strong><br><br>" +
                      "<strong>Clinical Assessment:</strong><br>You are in the psychological turbulence of adolescence/young adulthood (regardless of your bio age). You are highly sensitive to social validation and peer perception. You understand rules but follow them largely to avoid shame or gain approval. Your identity is still heavily tied to external factors (looks, status, popularity).<br><br>" +
                      "<strong>Core Traits:</strong><br>• High social anxiety or FOMO.<br>• Group-think tendency.<br>• Emotional intensity.<br><br>" +
                      "<strong>Prescription:</strong><br>Start defining who you are when no one is watching. Separate your self-worth from others' opinions." 
            },
            { 
                min: 71, 
                max: 95, 
                title: "Mental Age: 23-35 Years (Emerging Adult)", 
                desc: "<strong>[Psychological Stage: Self-Aware / Conscientious]</strong><br><br>" +
                      "<strong>Clinical Assessment:</strong><br>You display the stability of a functioning adult. You have developed 'Executive Function'—the ability to plan, prioritize, and regulate emotions. You accept responsibility for your life and understand that actions have consequences. You value competence and achievement.<br><br>" +
                      "<strong>Core Traits:</strong><br>• Goal-oriented.<br>• Rational conflict resolution.<br>• Increasing independence.<br><br>" +
                      "<strong>Prescription:</strong><br>You are on a great path. To grow further, try to embrace uncertainty and vulnerability, rather than just control and efficiency." 
            },
            { 
                min: 96, 
                max: 110, 
                title: "Mental Age: 36-55 Years (Mature Adult)", 
                desc: "<strong>[Psychological Stage: Individualistic / Autonomous]</strong><br><br>" +
                      "<strong>Clinical Assessment:</strong><br>You have reached a high level of psychological maturity. You understand that truth is often subjective and complex. You have high emotional intelligence (EQ) and can hold conflicting ideas in your mind without getting angry. You no longer need to prove yourself to the world.<br><br>" +
                      "<strong>Core Traits:</strong><br>• High tolerance for ambiguity.<br>• Internal validation system.<br>• Deep empathy.<br><br>" +
                      "<strong>Prescription:</strong><br>Focus on mentorship. Your stability can anchor those around you." 
            },
            { 
                min: 111, 
                max: 120, 
                title: "Mental Age: 60+ Years (The Sage)", 
                desc: "<strong>[Psychological Stage: Integrated / Transcendent]</strong><br><br>" +
                      "<strong>Clinical Assessment:</strong><br>This score is rare (less than 2% of the population). Your mental age is that of a wise elder. You have moved beyond the 'Ego'—you are not driven by fear, desire, or pride. You see the interconnectedness of all things. You act out of love and principles, not obligation.<br><br>" +
                      "<strong>Core Traits:</strong><br>• Radical acceptance.<br>• Wisdom over knowledge.<br>• Self-transcendence.<br><br>" +
                      "<strong>Prescription:</strong><br>Simply be. Your presence is the teaching." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - 专业版
    "zh": {
        title: "国际标准心理成熟度评估 (IMAI)",
        desc: "本测评基于著名的 Loevinger 自我发展模型及皮亚杰认知理论，通过24个维度的精密测量，计算出你灵魂的精确“心理年龄”。",
        questions: [
            // --- 组A：冲动与情绪调节 (0-15分) ---
            { id: 1, text: "如果在开车/走路时被人恶意加塞或撞到，你的第一反应是？", options: [{ text: "暴怒/尖叫/想报复", score: 1 }, { text: "跟身边人抱怨", score: 3 }, { text: "认为对方可能赶时间，不放在心上", score: 5 }] },
            { id: 2, text: "你非常想要某样东西，但现在买不起。", options: [{ text: "不管后果，借钱/刷卡也要买", score: 1 }, { text: "感到愤恨，为什么我没有", score: 2 }, { text: "制定储蓄计划", score: 5 }] },
            { id: 3, text: "当你感到无聊时，你通常会：", options: [{ text: "立刻刷短视频寻找感官刺激", score: 1 }, { text: "找人聊天打发时间", score: 3 }, { text: "反思、独处或学习新东西", score: 5 }] },
            { id: 4, text: "朋友临时放了你鸽子。", options: [{ text: "觉得被针对了，拉黑/绝交", score: 1 }, { text: "质问原因，感到烦躁", score: 3 }, { text: "正好利用这段空闲时间做自己的事", score: 5 }] },

            // --- 组B：控制点与责任感 (16-30分) ---
            { id: 5, text: "在工作/学校犯了大错时：", options: [{ text: "试图掩盖，或者怪电脑/怪同事", score: 1 }, { text: "承认错误，但强调客观理由", score: 3 }, { text: "立刻承认，并提出补救方案", score: 5 }] },
            { id: 6, text: "你觉得目前的生活状态是：", options: [{ text: "环境逼我的，我没得选", score: 1 }, { text: "运气和努力各占一半", score: 3 }, { text: "我一系列选择的必然结果", score: 5 }] },
            { id: 7, text: "当有人提出建设性批评时：", options: [{ text: "感到被攻击，立刻反击", score: 1 }, { text: "感到自卑/难过", score: 3 }, { text: "寻找其中的真实部分以改进", score: 5 }] },
            { id: 8, text: "关于你的个人幸福感：", options: [{ text: "伴侣/工作必须让我快乐", score: 1 }, { text: "是双方的责任", score: 3 }, { text: "我对自己负全责", score: 5 }] },

            // --- 组C：社会认知与同理心 (31-45分) ---
            { id: 9, text: "当遇到政治/社会观点完全相反的人：", options: [{ text: "他是傻X/坏人", score: 1 }, { text: "回避话题，懒得理", score: 3 }, { text: "试图理解他的成长背景如何形成该观点", score: 5 }] },
            { id: 10, text: "朋友在你面前哭泣。你感到：", options: [{ text: "尴尬，想逃走", score: 1 }, { text: "急于给他讲道理/解决问题", score: 3 }, { text: "临在，倾听，不评判", score: 5 }] },
            { id: 11, text: "当你帮了别人一个忙：", options: [{ text: "期待立刻的回报", score: 1 }, { text: "希望他能记住", score: 3 }, { text: "单纯因为我想帮，不求回报", score: 5 }] },
            { id: 12, text: "对于八卦和人际纠纷：", options: [{ text: "热衷于此，觉得很刺激", score: 1 }, { text: "为了合群而参与", score: 3 }, { text: "觉得无聊且消耗能量", score: 5 }] },

            // --- 组D：认知复杂性 (46-60分) ---
            { id: 13, text: "你对“真理”的看法：", options: [{ text: "真理只有一个（通常是我认为的那个）", score: 1 }, { text: "大家都认可的才是真理", score: 3 }, { text: "真理是多维的、复杂的、灰度的", score: 5 }] },
            { id: 14, text: "关于未来规划：", options: [{ text: "今朝有酒今朝醉", score: 1 }, { text: "有个模糊的想法", score: 3 }, { text: "有愿景，但保持灵活性", score: 5 }] },
            { id: 15, text: "当规则/法律显得不公平时：", options: [{ text: "只要不被抓，我就违反它", score: 1 }, { text: "依然遵守，怕受罚", score: 3 }, { text: "质疑它，或通过正当途径改变它", score: 5 }] },
            { id: 16, text: "定义的成功：", options: [{ text: "钱、名声、权力", score: 1 }, { text: "舒适、家庭、工作", score: 3 }, { text: "自我实现、成长、影响力", score: 5 }] },

            // --- 组E：自我同一性 (61-80分) ---
            { id: 17, text: "关于独处：", options: [{ text: "可怕，必须找人陪", score: 1 }, { text: "无聊", score: 2 }, { text: "恢复能量的时刻", score: 5 }] },
            { id: 18, text: "感情中的嫉妒：", options: [{ text: "我有极强的占有欲", score: 1 }, { text: "会嫉妒，但藏在心里", score: 3 }, { text: "在被证明不可信之前，我选择信任", score: 5 }] },
            { id: 19, text: "关于道歉：", options: [{ text: "那是示弱的表现", score: 1 }, { text: "我会说'对不起，但是...'", score: 3 }, { text: "我为我的影响道歉，没有'但是'", score: 5 }] },
            { id: 20, text: "物质财产（车/房/包）：", options: [{ text: "它们定义了我的身价", score: 1 }, { text: "有了会很开心", score: 3 }, { text: "它们只是工具", score: 5 }] },

            // --- 组F：自我超越 (81-120分) ---
            { id: 21, text: "面对死亡/衰老：", options: [{ text: "完全回避，不想听", score: 1 }, { text: "感到恐惧", score: 3 }, { text: "激励我活在当下", score: 5 }] },
            { id: 22, text: "当你看到不公正的事情：", options: [{ text: "不关我事", score: 1 }, { text: "很难过，但什么也不做", score: 3 }, { text: "在能力范围内采取行动", score: 5 }] },
            { id: 23, text: "学习新事物：", options: [{ text: "被逼无奈（为了工作/考试）", score: 1 }, { text: "为了赚更多钱", score: 3 }, { text: "为了理解世界的乐趣", score: 5 }] },
            { id: 24, text: "人生的目的是：", options: [{ text: "被人伺候/享受", score: 1 }, { text: "合群/平庸", score: 3 }, { text: "服务他人/创造价值", score: 5 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 40, 
                title: "心理年龄：9-14岁 (儿童/前青春期)", 
                desc: "<strong>【心理阶段：前习俗水平 / 冲动期】</strong><br><br>" +
                      "<strong>🩺 临床评估：</strong><br>你的心理年龄对应儿童晚期或青春期早期。你的潜意识主要遵循<strong>“快乐原则”</strong>（追求即时满足，逃避痛苦）。你的世界观具有较强的“自我中心”色彩，倾向于根据事情“对我有什么好处/坏处”来判断对错。你可能很难控制冲动，遇到挫折时习惯向外归因（怪环境、怪别人）。<br><br>" +
                      "<strong>💊 专家处方：</strong><br>这不是贬义，而是成长的起点。试着在情绪产生和行动之间，强行插入一个“暂停键”。记住：责任感不是负担，而是掌控命运的权力。" 
            },
            { 
                min: 41, 
                max: 70, 
                title: "心理年龄：15-22岁 (青春期/青年期)", 
                desc: "<strong>【心理阶段：习俗水平 / 顺从期】</strong><br><br>" +
                      "<strong>🩺 临床评估：</strong><br>无论你的生理年龄多大，你的心理状态处于青春期的动荡与探索中。你对“社会认可”和“他人评价”极度敏感。你遵守规则主要是为了避免羞耻或获得赞赏，而不是出于内心的原则。你的自我价值感依然深深地绑定在外在事物（外貌、财富、人际关系）上。<br><br>" +
                      "<strong>💊 专家处方：</strong><br>你正处于“社会化”的关键期。进化的关键是：开始在没人看得到的地方，定义你是谁。试着将自我评价体系从“外挂”改为“内置”。" 
            },
            { 
                min: 71, 
                max: 95, 
                title: "心理年龄：23-35岁 (成年早期)", 
                desc: "<strong>【心理阶段：自我意识 / 尽责期】</strong><br><br>" +
                      "<strong>🩺 临床评估：</strong><br>你展现出了一个功能良好的成年人的稳定性。你已经发展出了<strong>“执行功能”</strong>——能够计划、设定优先级并调节情绪。你接受生活是自己的责任，明白行为必有后果。你看重能力、成就和效率，是社会的中坚力量。<br><br>" +
                      "<strong>💊 专家处方：</strong><br>你的状态非常健康。若想进一步突破，请尝试拥抱“不确定性”和“脆弱感”，不要让过度理性压抑了你的生命力。" 
            },
            { 
                min: 96, 
                max: 110, 
                title: "心理年龄：36-55岁 (成熟壮年期)", 
                desc: "<strong>【心理阶段：个人主义 / 自主期】</strong><br><br>" +
                      "<strong>🩺 临床评估：</strong><br>你达到了很高的心理成熟度。你明白真理往往是主观且多维的，能够容忍灰度。你有很高的情绪智力（EQ），能在脑海中同时容纳两种对立的观点而不发怒。你不再需要向世界证明什么，你的自信源于内在的笃定。<br><br>" +
                      "<strong>💊 专家处方：</strong><br>你已经成为了“灯塔”。现在的任务是去指导和赋能他人（Mentorship）。你的稳定性是周围人最大的财富。" 
            },
            { 
                min: 111, 
                max: 120, 
                title: "心理年龄：60岁+ (智者/老灵魂)", 
                desc: "<strong>【心理阶段：整合 / 超越期】</strong><br><br>" +
                      "<strong>🩺 临床评估：</strong><br>这个分数非常罕见（人群中少于2%）。你的心理年龄是一位睿智的长者。你已经超越了“小我”（Ego）的驱动——你不再被恐惧、欲望或骄傲所驱使。你看到了万事万物的互联性。你的行为出于爱和原则，而非义务。<br><br>" +
                      "<strong>💊 专家处方：</strong><br>无为而治。你的存在本身就是一种教导。请保持对世界的慈悲，将你的智慧传承下去。" 
            }
        ]
    },

// 3. 德语 (German) - Professional
    "de": {
        title: "Klinische Bewertung des mentalen Alters (IMAI)",
        desc: "Kein Spiel. Dieser Test basiert auf dem Loevinger-Modell und berechnet Ihr präzises psychologisches Alter anhand von 24 Dimensionen.",
        questions: [
            // Impulse
            { id: 1, text: "Jemand schneidet Sie im Verkehr. Ihre Reaktion:", options: [{ text: "Wut/Schreien", score: 1 }, { text: "Beschweren", score: 3 }, { text: "Loslassen/Ignorieren", score: 5 }] },
            { id: 2, text: "Sie wollen etwas kaufen, können es sich aber nicht leisten.", options: [{ text: "Kaufen auf Kredit", score: 1 }, { text: "Groll fühlen", score: 2 }, { text: "Sparplan erstellen", score: 5 }] },
            { id: 3, text: "Bei Langeweile:", options: [{ text: "Sofort Social Media", score: 1 }, { text: "Jemanden anrufen", score: 3 }, { text: "Reflektieren/Lernen", score: 5 }] },
            { id: 4, text: "Freund sagt kurzfristig ab.", options: [{ text: "Persönlich nehmen/Blockieren", score: 1 }, { text: "Genervt fragen warum", score: 3 }, { text: "Zeit für mich nutzen", score: 5 }] },
            
            // Verantwortung
            { id: 5, text: "Fehler bei der Arbeit:", options: [{ text: "Vertuschen", score: 1 }, { text: "Ausreden suchen", score: 3 }, { text: "Sofort zugeben & fixen", score: 5 }] },
            { id: 6, text: "Ihr Leben fühlt sich an wie:", options: [{ text: "Fremdbestimmt", score: 1 }, { text: "Glück & Mühe", score: 3 }, { text: "Resultat meiner Wahl", score: 5 }] },
            { id: 7, text: "Bei konstruktiver Kritik:", options: [{ text: "Wut/Angriff", score: 1 }, { text: "Traurigkeit", score: 3 }, { text: "Wahrheit suchen", score: 5 }] },
            { id: 8, text: "Zuständig für Ihr Glück:", options: [{ text: "Partner/Job", score: 1 }, { text: "Gemeinsam", score: 3 }, { text: "Nur ich selbst", score: 5 }] },

            // Sozial
            { id: 9, text: "Andere politische Meinung:", options: [{ text: "Idiot/Böse", score: 1 }, { text: "Thema meiden", score: 3 }, { text: "Ursprung verstehen", score: 5 }] },
            { id: 10, text: "Ein Freund weint:", options: [{ text: "Unangenehm/Weggehen", score: 1 }, { text: "Sofort lösen wollen", score: 3 }, { text: "Zuhören/Da sein", score: 5 }] },
            { id: 11, text: "Gefallen tun:", options: [{ text: "Erwarte Gegenleistung", score: 1 }, { text: "Hoffe auf Erinnerung", score: 3 }, { text: "Tue es gerne", score: 5 }] },
            { id: 12, text: "Klatsch und Tratsch:", options: [{ text: "Liebe es", score: 1 }, { text: "Mache mit", score: 3 }, { text: "Ermüdend/Langweilig", score: 5 }] },

            // Kognitiv
            { id: 13, text: "Wahrheit ist:", options: [{ text: "Nur meine Sicht", score: 1 }, { text: "Was die Mehrheit sagt", score: 3 }, { text: "Komplex/Vielschichtig", score: 5 }] },
            { id: 14, text: "Zukunftsplanung:", options: [{ text: "Nur heute leben", score: 1 }, { text: "Vage Idee", score: 3 }, { text: "Vision mit Flexibilität", score: 5 }] },
            { id: 15, text: "Unfaire Regeln:", options: [{ text: "Brechen (wenn unbeobachtet)", score: 1 }, { text: "Befolgen (Angst)", score: 3 }, { text: "Hinterfragen/Ändern", score: 5 }] },
            { id: 16, text: "Erfolg bedeutet:", options: [{ text: "Geld/Macht", score: 1 }, { text: "Komfort/Status", score: 3 }, { text: "Erfüllung/Wirkung", score: 5 }] },

            // Identität
            { id: 17, text: "Alleine sein:", options: [{ text: "Angst", score: 1 }, { text: "Langweilig", score: 2 }, { text: "Erholend", score: 5 }] },
            { id: 18, text: "Eifersucht:", options: [{ text: "Besitzergreifend", score: 1 }, { text: "Versteckt", score: 3 }, { text: "Vertrauen", score: 5 }] },
            { id: 19, text: "Entschuldigen:", options: [{ text: "Zeichen von Schwäche", score: 1 }, { text: "Ja, aber...", score: 3 }, { text: "Ohne Ausreden", score: 5 }] },
            { id: 20, text: "Materielle Dinge:", options: [{ text: "Definieren meinen Wert", score: 1 }, { text: "Nett zu haben", score: 3 }, { text: "Werkzeuge", score: 5 }] },

            // Transzendenz
            { id: 21, text: "Tod/Sterblichkeit:", options: [{ text: "Ignorieren", score: 1 }, { text: "Angst", score: 3 }, { text: "Motivation zu leben", score: 5 }] },
            { id: 22, text: "Ungerechtigkeit sehen:", options: [{ text: "Egal", score: 1 }, { text: "Fühle mich schlecht", score: 3 }, { text: "Handle", score: 5 }] },
            { id: 23, text: "Lernen:", options: [{ text: "Nur unter Zwang", score: 1 }, { text: "Für Geld", score: 3 }, { text: "Freude am Verstehen", score: 5 }] },
            { id: 24, text: "Sinn des Lebens:", options: [{ text: "Bedient werden", score: 1 }, { text: "Dazugehören", score: 3 }, { text: "Dienen/Erschaffen", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Mentales Alter: 9-14 (Kindheit)", desc: "<strong>[Prä-konventionell]</strong><br>Sie handeln nach dem Lustprinzip und suchen sofortige Befriedigung.<br><strong>Rat:</strong> Üben Sie Impulskontrolle." },
            { min: 41, max: 70, title: "Mentales Alter: 15-22 (Jugend)", desc: "<strong>[Konventionell]</strong><br>Soziale Anerkennung ist Ihnen sehr wichtig. Identität hängt am Außen.<br><strong>Rat:</strong> Definieren Sie sich von innen heraus." },
            { min: 71, max: 95, title: "Mentales Alter: 23-35 (Erwachsen)", desc: "<strong>[Gewissenhaft]</strong><br>Sie sind stabil, planvoll und übernehmen Verantwortung.<br><strong>Rat:</strong> Akzeptieren Sie auch Unsicherheiten." },
            { min: 96, max: 110, title: "Mentales Alter: 36-55 (Reif)", desc: "<strong>[Autonom]</strong><br>Hohe emotionale Intelligenz. Sie verstehen Komplexität.<br><strong>Rat:</strong> Werden Sie zum Mentor für andere." },
            { min: 111, max: 120, title: "Mentales Alter: 60+ (Weise)", desc: "<strong>[Integriert]</strong><br>Sie haben das Ego überwunden und handeln aus Prinzipien.<br><strong>Rat:</strong> Geben Sie Ihre Weisheit weiter." }
        ]
    },

    // 4. 日语 (Japanese) - Professional
    "ja": {
        title: "精神年齢完全診断 (IMAI)",
        desc: "ピアジェの認知発達理論に基づく24の質問で、あなたの魂の正確な「精神年齢」を測定します。",
        questions: [
            // 衝動
            { id: 1, text: "運転中や歩行中に割り込まれた時：", options: [{ text: "激怒する/叫ぶ", score: 1 }, { text: "文句を言う", score: 3 }, { text: "気にしない", score: 5 }] },
            { id: 2, text: "欲しい物があるがお金が足りない時：", options: [{ text: "借金してでも買う", score: 1 }, { text: "悔しく思う", score: 2 }, { text: "貯金計画を立てる", score: 5 }] },
            { id: 3, text: "退屈な時：", options: [{ text: "すぐスマホを見る", score: 1 }, { text: "誰かと話す", score: 3 }, { text: "内省や学習をする", score: 5 }] },
            { id: 4, text: "友人のドタキャン：", options: [{ text: "絶交する/ブロック", score: 1 }, { text: "理由を問い詰める", score: 3 }, { text: "自分のために時間を使う", score: 5 }] },
            
            // 責任
            { id: 5, text: "仕事でのミス：", options: [{ text: "隠す/人のせいにする", score: 1 }, { text: "認めるが言い訳する", score: 3 }, { text: "即座に認め修正する", score: 5 }] },
            { id: 6, text: "現在の人生は：", options: [{ text: "環境のせい", score: 1 }, { text: "運と努力", score: 3 }, { text: "自分の選択の結果", score: 5 }] },
            { id: 7, text: "建設的な批判をされた時：", options: [{ text: "攻撃されたと感じる", score: 1 }, { text: "落ち込む", score: 3 }, { text: "真実を探す", score: 5 }] },
            { id: 8, text: "自分の幸福について：", options: [{ text: "他人次第", score: 1 }, { text: "共同責任", score: 3 }, { text: "自分次第", score: 5 }] },

            // 社会性
            { id: 9, text: "意見が合わない人に対して：", options: [{ text: "馬鹿だと思う", score: 1 }, { text: "避ける", score: 3 }, { text: "背景を理解しようとする", score: 5 }] },
            { id: 10, text: "友人が泣いている時：", options: [{ text: "気まずい/逃げたい", score: 1 }, { text: "解決策を押し付ける", score: 3 }, { text: "ただ傾聴する", score: 5 }] },
            { id: 11, text: "親切にする時：", options: [{ text: "見返りを求める", score: 1 }, { text: "覚えていてほしい", score: 3 }, { text: "ただそうしたいから", score: 5 }] },
            { id: 12, text: "噂話について：", options: [{ text: "大好き", score: 1 }, { text: "合わせる", score: 3 }, { text: "無意味だと感じる", score: 5 }] },

            // 認知
            { id: 13, text: "真実とは：", options: [{ text: "一つしかない（自分の意見）", score: 1 }, { text: "多数派の意見", score: 3 }, { text: "多面的で複雑", score: 5 }] },
            { id: 14, text: "将来設計：", options: [{ text: "今だけ生きる", score: 1 }, { text: "漠然としている", score: 3 }, { text: "ビジョンがある", score: 5 }] },
            { id: 15, text: "不公平なルール：", options: [{ text: "バレなきゃ破る", score: 1 }, { text: "従う（怖いから）", score: 3 }, { text: "正当に変えようとする", score: 5 }] },
            { id: 16, text: "成功の定義：", options: [{ text: "金・名声", score: 1 }, { text: "安定・家庭", score: 3 }, { text: "成長・貢献", score: 5 }] },

            // 自我
            { id: 17, text: "孤独について：", options: [{ text: "恐怖", score: 1 }, { text: "退屈", score: 2 }, { text: "回復の時間", score: 5 }] },
            { id: 18, text: "嫉妬心：", options: [{ text: "独占欲が強い", score: 1 }, { text: "隠す", score: 3 }, { text: "信頼を選ぶ", score: 5 }] },
            { id: 19, text: "謝罪：", options: [{ text: "弱さの表れ", score: 1 }, { text: "「でも…」と言う", score: 3 }, { text: "言い訳せず謝る", score: 5 }] },
            { id: 20, text: "物質的な所有物：", options: [{ text: "自分の価値を決める", score: 1 }, { text: "あると嬉しい", score: 3 }, { text: "ただの道具", score: 5 }] },

            // 超越
            { id: 21, text: "死について：", options: [{ text: "無視する", score: 1 }, { text: "怖い", score: 3 }, { text: "生きる動機", score: 5 }] },
            { id: 22, text: "不正を見た時：", options: [{ text: "関係ない", score: 1 }, { text: "嫌な気分になるだけ", score: 3 }, { text: "行動する", score: 5 }] },
            { id: 23, text: "学習：", options: [{ text: "強制されたら", score: 1 }, { text: "稼ぐため", score: 3 }, { text: "理解する喜びのため", score: 5 }] },
            { id: 24, text: "人生の目的：", options: [{ text: "奉仕されること", score: 1 }, { text: "同調すること", score: 3 }, { text: "貢献すること", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "精神年齢：9-14歳 (児童期)", desc: "<strong>[前慣習的段階]</strong><br>快楽原則（即時的な満足）に基づいて行動しています。<br><strong>処方箋：</strong>感情と行動の間に「一時停止」を入れる練習をしましょう。" },
            { min: 41, max: 70, title: "精神年齢：15-22歳 (青年期)", desc: "<strong>[慣習的段階]</strong><br>他者からの評価や社会的な承認に敏感です。<br><strong>処方箋：</strong>他人の目ではなく、自分の価値観で自己を定義しましょう。" },
            { min: 71, max: 95, title: "精神年齢：23-35歳 (成人期)", desc: "<strong>[良心的段階]</strong><br>責任感があり、長期的視点を持っています。<br><strong>処方箋：</strong>合理性だけでなく、脆弱性も受け入れてみましょう。" },
            { min: 96, max: 110, title: "精神年齢：36-55歳 (成熟期)", desc: "<strong>[自律的段階]</strong><br>物事の複雑さを理解し、高いEQを持っています。<br><strong>処方箋：</strong>その安定感を周囲のメンタリングに活かしてください。" },
            { min: 111, max: 120, title: "精神年齢：60歳+ (賢者)", desc: "<strong>[統合的段階]</strong><br>自我を超越し、愛と原則に基づいて行動します。<br><strong>処方箋：</strong>ただ在るだけで、あなたは周囲への教えとなります。" }
        ]
    },

    // 5. 法语 (French) - Professional
    "fr": {
        title: "Évaluation de l'Âge Mental Clinique",
        desc: "Ce test rigoureux calcule votre âge psychologique précis à travers 24 dimensions cognitives et émotionnelles.",
        questions: [
            // Impulsion
            { id: 1, text: "Quelqu'un vous coupe la route :", options: [{ text: "Rage/Crier", score: 1 }, { text: "Se plaindre", score: 3 }, { text: "Laisser passer", score: 5 }] },
            { id: 2, text: "Vous voulez un objet cher :", options: [{ text: "Acheter à crédit", score: 1 }, { text: "Ressentiment", score: 2 }, { text: "Épargner", score: 5 }] },
            { id: 3, text: "En cas d'ennui :", options: [{ text: "Réseaux sociaux", score: 1 }, { text: "Appeler quelqu'un", score: 3 }, { text: "Réfléchir/Apprendre", score: 5 }] },
            { id: 4, text: "Un ami annule :", options: [{ text: "Le bloquer", score: 1 }, { text: "Être agacé", score: 3 }, { text: "Temps pour soi", score: 5 }] },
            
            // Responsabilité
            { id: 5, text: "Erreur au travail :", options: [{ text: "Cacher", score: 1 }, { text: "Excuses", score: 3 }, { text: "Réparer", score: 5 }] },
            { id: 6, text: "Votre vie actuelle :", options: [{ text: "Subie", score: 1 }, { text: "Chance et effort", score: 3 }, { text: "Mes choix", score: 5 }] },
            { id: 7, text: "Critique constructive :", options: [{ text: "Attaque", score: 1 }, { text: "Tristesse", score: 3 }, { text: "Vérité", score: 5 }] },
            { id: 8, text: "Votre bonheur :", options: [{ text: "Dépend des autres", score: 1 }, { text: "Partagé", score: 3 }, { text: "Ma responsabilité", score: 5 }] },

            // Social
            { id: 9, text: "Avis opposé :", options: [{ text: "Stupide", score: 1 }, { text: "Éviter", score: 3 }, { text: "Comprendre", score: 5 }] },
            { id: 10, text: "Un ami pleure :", options: [{ text: "Gêné", score: 1 }, { text: "Vouloir réparer", score: 3 }, { text: "Écouter", score: 5 }] },
            { id: 11, text: "Rendre service :", options: [{ text: "Attendre retour", score: 1 }, { text: "Espérer retour", score: 3 }, { text: "Gratuitement", score: 5 }] },
            { id: 12, text: "Potins :", options: [{ text: "J'adore", score: 1 }, { text: "Je participe", score: 3 }, { text: "Ennuyeux", score: 5 }] },

            // Cognitif
            { id: 13, text: "La Vérité :", options: [{ text: "La mienne", score: 1 }, { text: "La majorité", score: 3 }, { text: "Complexe", score: 5 }] },
            { id: 14, text: "Planifier :", options: [{ text: "Vivre au jour le jour", score: 1 }, { text: "Vague idée", score: 3 }, { text: "Vision flexible", score: 5 }] },
            { id: 15, text: "Règles injustes :", options: [{ text: "Enfreindre", score: 1 }, { text: "Suivre", score: 3 }, { text: "Changer", score: 5 }] },
            { id: 16, text: "Succès :", options: [{ text: "Argent/Pouvoir", score: 1 }, { text: "Confort", score: 3 }, { text: "Impact/Sens", score: 5 }] },

            // Identité
            { id: 17, text: "Être seul :", options: [{ text: "Terrifiant", score: 1 }, { text: "Ennuyeux", score: 2 }, { text: "Réparateur", score: 5 }] },
            { id: 18, text: "Jalousie :", options: [{ text: "Possessif", score: 1 }, { text: "Cachée", score: 3 }, { text: "Confiance", score: 5 }] },
            { id: 19, text: "S'excuser :", options: [{ text: "Faiblesse", score: 1 }, { text: "Oui, mais...", score: 3 }, { text: "Sans excuses", score: 5 }] },
            { id: 20, text: "Biens matériels :", options: [{ text: "Ma valeur", score: 1 }, { text: "Plaisir", score: 3 }, { text: "Outils", score: 5 }] },

            // Transcendance
            { id: 21, text: "La mort :", options: [{ text: "Ignorer", score: 1 }, { text: "Peur", score: 3 }, { text: "Motivation", score: 5 }] },
            { id: 22, text: "Injustice :", options: [{ text: "Pas mon problème", score: 1 }, { text: "Triste", score: 3 }, { text: "Agir", score: 5 }] },
            { id: 23, text: "Apprendre :", options: [{ text: "Forcé", score: 1 }, { text: "Pour l'argent", score: 3 }, { text: "Pour comprendre", score: 5 }] },
            { id: 24, text: "But de la vie :", options: [{ text: "Être servi", score: 1 }, { text: "S'intégrer", score: 3 }, { text: "Servir", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Âge Mental : 9-14 ans (Enfance)", desc: "<strong>[Stade Pré-conventionnel]</strong><br>Vous recherchez la gratification immédiate.<br><strong>Conseil :</strong> Pratiquez la patience." },
            { min: 41, max: 70, title: "Âge Mental : 15-22 ans (Adolescence)", desc: "<strong>[Stade Conventionnel]</strong><br>Très sensible au regard des autres.<br><strong>Conseil :</strong> Définissez-vous par vous-même." },
            { min: 71, max: 95, title: "Âge Mental : 23-35 ans (Adulte)", desc: "<strong>[Stade Consciencieux]</strong><br>Stable et responsable.<br><strong>Conseil :</strong> Acceptez la vulnérabilité." },
            { min: 96, max: 110, title: "Âge Mental : 36-55 ans (Mature)", desc: "<strong>[Stade Autonome]</strong><br>Grande intelligence émotionnelle.<br><strong>Conseil :</strong> Guidez les autres." },
            { min: 111, max: 120, title: "Âge Mental : 60+ ans (Sage)", desc: "<strong>[Stade Intégré]</strong><br>Sagesse et détachement de l'ego.<br><strong>Conseil :</strong> Partagez votre sagesse." }
        ]
    },

    // 6. 西班牙语 (Spanish) - Professional
    "es": {
        title: "Evaluación de Edad Mental Clínica",
        desc: "Basado en Piaget y Kohlberg. 24 preguntas para calcular su edad psicológica exacta.",
        questions: [
            // Impulso
            { id: 1, text: "Alguien se le cruza en el tráfico:", options: [{ text: "Gritar/Pitar", score: 1 }, { text: "Quejarse", score: 3 }, { text: "Dejarlo pasar", score: 5 }] },
            { id: 2, text: "Quiere algo caro:", options: [{ text: "Comprar a crédito", score: 1 }, { text: "Resentimiento", score: 2 }, { text: "Ahorrar", score: 5 }] },
            { id: 3, text: "Aburrimiento:", options: [{ text: "Redes sociales", score: 1 }, { text: "Llamar a alguien", score: 3 }, { text: "Aprender/Reflexionar", score: 5 }] },
            { id: 4, text: "Amigo cancela:", options: [{ text: "Bloquearlo", score: 1 }, { text: "Molestarse", score: 3 }, { text: "Tiempo para mí", score: 5 }] },
            
            // Responsabilidad
            { id: 5, text: "Error en el trabajo:", options: [{ text: "Ocultarlo", score: 1 }, { text: "Excusas", score: 3 }, { text: "Arreglarlo", score: 5 }] },
            { id: 6, text: "Su vida actual:", options: [{ text: "Me sucede", score: 1 }, { text: "Suerte y esfuerzo", score: 3 }, { text: "Mis elecciones", score: 5 }] },
            { id: 7, text: "Crítica constructiva:", options: [{ text: "Ataque", score: 1 }, { text: "Tristeza", score: 3 }, { text: "Verdad", score: 5 }] },
            { id: 8, text: "Su felicidad:", options: [{ text: "Depende de otros", score: 1 }, { text: "Compartida", score: 3 }, { text: "Mi responsabilidad", score: 5 }] },

            // Social
            { id: 9, text: "Opinión opuesta:", options: [{ text: "Estúpido", score: 1 }, { text: "Evitar", score: 3 }, { text: "Entender", score: 5 }] },
            { id: 10, text: "Amigo llorando:", options: [{ text: "Incómodo", score: 1 }, { text: "Solucionar", score: 3 }, { text: "Escuchar", score: 5 }] },
            { id: 11, text: "Hacer un favor:", options: [{ text: "Esperar retorno", score: 1 }, { text: "Esperar recuerdo", score: 3 }, { text: "Gratis", score: 5 }] },
            { id: 12, text: "Chismes:", options: [{ text: "Me encantan", score: 1 }, { text: "Participo", score: 3 }, { text: "Aburridos", score: 5 }] },

            // Cognitivo
            { id: 13, text: "La Verdad:", options: [{ text: "La mía", score: 1 }, { text: "La mayoría", score: 3 }, { text: "Compleja", score: 5 }] },
            { id: 14, text: "Futuro:", options: [{ text: "Solo hoy", score: 1 }, { text: "Idea vaga", score: 3 }, { text: "Visión flexible", score: 5 }] },
            { id: 15, text: "Reglas injustas:", options: [{ text: "Romperlas", score: 1 }, { text: "Seguir", score: 3 }, { text: "Cambiar", score: 5 }] },
            { id: 16, text: "Éxito:", options: [{ text: "Dinero/Poder", score: 1 }, { text: "Confort", score: 3 }, { text: "Impacto", score: 5 }] },

            // Identidad
            { id: 17, text: "Estar solo:", options: [{ text: "Terror", score: 1 }, { text: "Aburrido", score: 2 }, { text: "Restaurador", score: 5 }] },
            { id: 18, text: "Celos:", options: [{ text: "Posesivo", score: 1 }, { text: "Ocultos", score: 3 }, { text: "Confianza", score: 5 }] },
            { id: 19, text: "Disculparse:", options: [{ text: "Debilidad", score: 1 }, { text: "Sí, pero...", score: 3 }, { text: "Sin excusas", score: 5 }] },
            { id: 20, text: "Bienes materiales:", options: [{ text: "Mi valor", score: 1 }, { text: "Agradables", score: 3 }, { text: "Herramientas", score: 5 }] },

            // Trascendencia
            { id: 21, text: "La muerte:", options: [{ text: "Ignorar", score: 1 }, { text: "Miedo", score: 3 }, { text: "Motivación", score: 5 }] },
            { id: 22, text: "Injusticia:", options: [{ text: "No es mi problema", score: 1 }, { text: "Tristeza", score: 3 }, { text: "Actuar", score: 5 }] },
            { id: 23, text: "Aprender:", options: [{ text: "Obligado", score: 1 }, { text: "Por dinero", score: 3 }, { text: "Por saber", score: 5 }] },
            { id: 24, text: "Propósito:", options: [{ text: "Ser servido", score: 1 }, { text: "Encajar", score: 3 }, { text: "Servir", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Edad Mental: 9-14 (Niñez)", desc: "<strong>[Pre-convencional]</strong><br>Busca gratificación inmediata.<br><strong>Consejo:</strong> Practique la paciencia." },
            { min: 41, max: 70, title: "Edad Mental: 15-22 (Adolescencia)", desc: "<strong>[Convencional]</strong><br>Muy sensible a la validación social.<br><strong>Consejo:</strong> Defínase internamente." },
            { min: 71, max: 95, title: "Edad Mental: 23-35 (Adulto)", desc: "<strong>[Concienzudo]</strong><br>Estable y responsable.<br><strong>Consejo:</strong> Acepte la vulnerabilidad." },
            { min: 96, max: 110, title: "Edad Mental: 36-55 (Maduro)", desc: "<strong>[Autónomo]</strong><br>Alta inteligencia emocional.<br><strong>Consejo:</strong> Guíe a otros." },
            { min: 111, max: 120, title: "Edad Mental: 60+ (Sabio)", desc: "<strong>[Integrado]</strong><br>Ha trascendido el ego.<br><strong>Consejo:</strong> Comparta su sabiduría." }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Professional
    "pt": {
        title: "Avaliação de Idade Mental Clínica",
        desc: "Baseado em Piaget e Kohlberg. 24 perguntas para calcular sua idade psicológica exata.",
        questions: [
            // Impulso
            { id: 1, text: "Alguém te corta no trânsito:", options: [{ text: "Raiva/Gritar", score: 1 }, { text: "Reclamar", score: 3 }, { text: "Deixar pra lá", score: 5 }] },
            { id: 2, text: "Quer algo caro:", options: [{ text: "Comprar a crédito", score: 1 }, { text: "Ressentimento", score: 2 }, { text: "Poupar", score: 5 }] },
            { id: 3, text: "Tédio:", options: [{ text: "Redes sociais", score: 1 }, { text: "Ligar para alguém", score: 3 }, { text: "Refletir/Aprender", score: 5 }] },
            { id: 4, text: "Amigo cancela:", options: [{ text: "Bloquear", score: 1 }, { text: "Ficar irritado", score: 3 }, { text: "Tempo pra mim", score: 5 }] },
            
            // Responsabilidade
            { id: 5, text: "Erro no trabalho:", options: [{ text: "Esconder", score: 1 }, { text: "Desculpas", score: 3 }, { text: "Arrumar", score: 5 }] },
            { id: 6, text: "Sua vida atual:", options: [{ text: "Acontece comigo", score: 1 }, { text: "Sorte e esforço", score: 3 }, { text: "Minhas escolhas", score: 5 }] },
            { id: 7, text: "Crítica construtiva:", options: [{ text: "Ataque", score: 1 }, { text: "Tristeza", score: 3 }, { text: "Verdade", score: 5 }] },
            { id: 8, text: "Sua felicidade:", options: [{ text: "Depende de outros", score: 1 }, { text: "Compartilhada", score: 3 }, { text: "Minha responsabilidade", score: 5 }] },

            // Social
            { id: 9, text: "Opinião oposta:", options: [{ text: "Estúpido", score: 1 }, { text: "Evitar", score: 3 }, { text: "Entender", score: 5 }] },
            { id: 10, text: "Amigo chorando:", options: [{ text: "Incômodo", score: 1 }, { text: "Querer resolver", score: 3 }, { text: "Ouvir", score: 5 }] },
            { id: 11, text: "Fazer um favor:", options: [{ text: "Esperar retorno", score: 1 }, { text: "Esperar lembrança", score: 3 }, { text: "De graça", score: 5 }] },
            { id: 12, text: "Fofoca:", options: [{ text: "Adoro", score: 1 }, { text: "Participo", score: 3 }, { text: "Chato", score: 5 }] },

            // Cognitivo
            { id: 13, text: "A Verdade:", options: [{ text: "A minha", score: 1 }, { text: "A maioria", score: 3 }, { text: "Complexa", score: 5 }] },
            { id: 14, text: "Futuro:", options: [{ text: "Só hoje", score: 1 }, { text: "Ideia vaga", score: 3 }, { text: "Visão flexível", score: 5 }] },
            { id: 15, text: "Regras injustas:", options: [{ text: "Quebrar", score: 1 }, { text: "Seguir", score: 3 }, { text: "Mudar", score: 5 }] },
            { id: 16, text: "Sucesso:", options: [{ text: "Dinheiro/Poder", score: 1 }, { text: "Conforto", score: 3 }, { text: "Impacto", score: 5 }] },

            // Identidade
            { id: 17, text: "Estar sozinho:", options: [{ text: "Terror", score: 1 }, { text: "Tédio", score: 2 }, { text: "Restaurador", score: 5 }] },
            { id: 18, text: "Ciúmes:", options: [{ text: "Possessivo", score: 1 }, { text: "Oculto", score: 3 }, { text: "Confiança", score: 5 }] },
            { id: 19, text: "Pedir desculpas:", options: [{ text: "Fraqueza", score: 1 }, { text: "Sim, mas...", score: 3 }, { text: "Sem desculpas", score: 5 }] },
            { id: 20, text: "Bens materiais:", options: [{ text: "Meu valor", score: 1 }, { text: "Prazer", score: 3 }, { text: "Ferramentas", score: 5 }] },

            // Transcendência
            { id: 21, text: "Morte:", options: [{ text: "Ignorar", score: 1 }, { text: "Medo", score: 3 }, { text: "Motivação", score: 5 }] },
            { id: 22, text: "Injustiça:", options: [{ text: "Não é comigo", score: 1 }, { text: "Tristeza", score: 3 }, { text: "Agir", score: 5 }] },
            { id: 23, text: "Aprender:", options: [{ text: "Obrigado", score: 1 }, { text: "Por dinheiro", score: 3 }, { text: "Por saber", score: 5 }] },
            { id: 24, text: "Propósito:", options: [{ text: "Ser servido", score: 1 }, { text: "Encaixar", score: 3 }, { text: "Servir", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Idade Mental: 9-14 (Infância)", desc: "<strong>[Pré-convencional]</strong><br>Busca gratificação imediata.<br><strong>Conselho:</strong> Pratique a paciência." },
            { min: 41, max: 70, title: "Idade Mental: 15-22 (Adolescência)", desc: "<strong>[Convencional]</strong><br>Muito sensível à validação social.<br><strong>Conselho:</strong> Defina-se internamente." },
            { min: 71, max: 95, title: "Idade Mental: 23-35 (Adulto)", desc: "<strong>[Consciente]</strong><br>Estável e responsável.<br><strong>Conselho:</strong> Aceite a vulnerabilidade." },
            { min: 96, max: 110, title: "Idade Mental: 36-55 (Maduro)", desc: "<strong>[Autônomo]</strong><br>Alta inteligência emocional.<br><strong>Conselho:</strong> Guie os outros." },
            { min: 111, max: 120, title: "Idade Mental: 60+ (Sábio)", desc: "<strong>[Integrado]</strong><br>Transcendeu o ego.<br><strong>Conselho:</strong> Compartilhe sua sabedoria." }
        ]
    },

    // 8. 俄语 (Russian) - Professional
    "ru": {
        title: "Клиническая оценка ментального возраста",
        desc: "24 вопроса для определения точного психологического возраста.",
        questions: [
            { id: 1, text: "Вас подрезали на дороге:", options: [{ text: "Ярость", score: 1 }, { text: "Жалоба", score: 3 }, { text: "Игнор", score: 5 }] },
            { id: 2, text: "Хотите дорогую вещь:", options: [{ text: "Кредит", score: 1 }, { text: "Обида", score: 2 }, { text: "Копить", score: 5 }] },
            { id: 3, text: "Скука:", options: [{ text: "Соцсети", score: 1 }, { text: "Болтовня", score: 3 }, { text: "Учеба", score: 5 }] },
            { id: 4, text: "Друг отменил встречу:", options: [{ text: "Блок", score: 1 }, { text: "Раздражение", score: 3 }, { text: "Время для себя", score: 5 }] },
            { id: 5, text: "Ошибка на работе:", options: [{ text: "Скрыть", score: 1 }, { text: "Оправдания", score: 3 }, { text: "Исправить", score: 5 }] },
            { id: 6, text: "Ваша жизнь:", options: [{ text: "Судьба", score: 1 }, { text: "Удача и труд", score: 3 }, { text: "Мой выбор", score: 5 }] },
            { id: 7, text: "Критика:", options: [{ text: "Атака", score: 1 }, { text: "Грусть", score: 3 }, { text: "Истина", score: 5 }] },
            { id: 8, text: "Счастье:", options: [{ text: "От других", score: 1 }, { text: "Вместе", score: 3 }, { text: "Моя ответственность", score: 5 }] },
            { id: 9, text: "Иное мнение:", options: [{ text: "Глупость", score: 1 }, { text: "Избегать", score: 3 }, { text: "Понять", score: 5 }] },
            { id: 10, text: "Друг плачет:", options: [{ text: "Неловко", score: 1 }, { text: "Решить", score: 3 }, { text: "Слушать", score: 5 }] },
            { id: 11, text: "Услуга:", options: [{ text: "Жду ответ", score: 1 }, { text: "Надеюсь", score: 3 }, { text: "Бесплатно", score: 5 }] },
            { id: 12, text: "Сплетни:", options: [{ text: "Люблю", score: 1 }, { text: "Участвую", score: 3 }, { text: "Скучно", score: 5 }] },
            { id: 13, text: "Правда:", options: [{ text: "Моя", score: 1 }, { text: "Большинства", score: 3 }, { text: "Сложная", score: 5 }] },
            { id: 14, text: "Планы:", options: [{ text: "Одним днем", score: 1 }, { text: "Смутные", score: 3 }, { text: "Видение", score: 5 }] },
            { id: 15, text: "Правила:", options: [{ text: "Нарушать", score: 1 }, { text: "Соблюдать", score: 3 }, { text: "Менять", score: 5 }] },
            { id: 16, text: "Успех:", options: [{ text: "Деньги", score: 1 }, { text: "Комфорт", score: 3 }, { text: "Влияние", score: 5 }] },
            { id: 17, text: "Одиночество:", options: [{ text: "Страх", score: 1 }, { text: "Скука", score: 2 }, { text: "Отдых", score: 5 }] },
            { id: 18, text: "Ревность:", options: [{ text: "Собственник", score: 1 }, { text: "Скрытая", score: 3 }, { text: "Доверие", score: 5 }] },
            { id: 19, text: "Извинения:", options: [{ text: "Слабость", score: 1 }, { text: "Да, но...", score: 3 }, { text: "Искренне", score: 5 }] },
            { id: 20, text: "Вещи:", options: [{ text: "Статус", score: 1 }, { text: "Приятно", score: 3 }, { text: "Инструменты", score: 5 }] },
            { id: 21, text: "Смерть:", options: [{ text: "Игнор", score: 1 }, { text: "Страх", score: 3 }, { text: "Мотивация", score: 5 }] },
            { id: 22, text: "Несправедливость:", options: [{ text: "Все равно", score: 1 }, { text: "Жаль", score: 3 }, { text: "Действие", score: 5 }] },
            { id: 23, text: "Учеба:", options: [{ text: "Принуждение", score: 1 }, { text: "Ради денег", score: 3 }, { text: "Ради знаний", score: 5 }] },
            { id: 24, text: "Цель жизни:", options: [{ text: "Брать", score: 1 }, { text: "Быть как все", score: 3 }, { text: "Давать", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Возраст: 9-14 (Детство)", desc: "<strong>[Импульсивный]</strong><br>Поиск удовольствий.<br><strong>Совет:</strong> Учитесь терпению." },
            { min: 41, max: 70, title: "Возраст: 15-22 (Юность)", desc: "<strong>[Конформный]</strong><br>Зависимость от мнения других.<br><strong>Совет:</strong> Ищите себя внутри." },
            { min: 71, max: 95, title: "Возраст: 23-35 (Взрослый)", desc: "<strong>[Сознательный]</strong><br>Ответственность и планы.<br><strong>Совет:</strong> Примите уязвимость." },
            { min: 96, max: 110, title: "Возраст: 36-55 (Зрелый)", desc: "<strong>[Автономный]</strong><br>Высокий EQ.<br><strong>Совет:</strong> Будьте наставником." },
            { min: 111, max: 120, title: "Возраст: 60+ (Мудрец)", desc: "<strong>[Интегрированный]</strong><br>Мудрость и покой.<br><strong>Совет:</strong> Делитесь опытом." }
        ]
    },

    // 9. 韩语 (Korean) - Professional
    "ko": {
        title: "정신 연령 정밀 진단 (IMAI)",
        desc: "피아제와 콜버그 이론 기반. 24개 문항으로 당신의 정확한 심리적 연령을 측정합니다.",
        questions: [
            { id: 1, text: "운전 중 끼어들기 당함:", options: [{ text: "분노/욕설", score: 1 }, { text: "불평", score: 3 }, { text: "무시", score: 5 }] },
            { id: 2, text: "비싼 물건을 원함:", options: [{ text: "할부 구매", score: 1 }, { text: "억울함", score: 2 }, { text: "저축", score: 5 }] },
            { id: 3, text: "지루할 때:", options: [{ text: "SNS", score: 1 }, { text: "수다", score: 3 }, { text: "학습/성찰", score: 5 }] },
            { id: 4, text: "친구의 약속 취소:", options: [{ text: "차단", score: 1 }, { text: "짜증", score: 3 }, { text: "자유 시간", score: 5 }] },
            { id: 5, text: "업무 실수:", options: [{ text: "은폐", score: 1 }, { text: "변명", score: 3 }, { text: "수습", score: 5 }] },
            { id: 6, text: "현재의 삶:", options: [{ text: "당하는 것", score: 1 }, { text: "운과 노력", score: 3 }, { text: "나의 선택", score: 5 }] },
            { id: 7, text: "비판:", options: [{ text: "공격", score: 1 }, { text: "슬픔", score: 3 }, { text: "진실 탐구", score: 5 }] },
            { id: 8, text: "행복:", options: [{ text: "남 탓", score: 1 }, { text: "공동 책임", score: 3 }, { text: "내 책임", score: 5 }] },
            { id: 9, text: "반대 의견:", options: [{ text: "멍청함", score: 1 }, { text: "회피", score: 3 }, { text: "이해", score: 5 }] },
            { id: 10, text: "친구가 울 때:", options: [{ text: "도망", score: 1 }, { text: "해결 강요", score: 3 }, { text: "경청", score: 5 }] },
            { id: 11, text: "부탁 들어주기:", options: [{ text: "대가 바람", score: 1 }, { text: "생색", score: 3 }, { text: "그냥", score: 5 }] },
            { id: 12, text: "뒷담화:", options: [{ text: "즐김", score: 1 }, { text: "동조", score: 3 }, { text: "지루함", score: 5 }] },
            { id: 13, text: "진실:", options: [{ text: "내 생각", score: 1 }, { text: "다수결", score: 3 }, { text: "복잡함", score: 5 }] },
            { id: 14, text: "미래:", options: [{ text: "오늘만 산다", score: 1 }, { text: "막연함", score: 3 }, { text: "비전", score: 5 }] },
            { id: 15, text: "규칙:", options: [{ text: "어김", score: 1 }, { text: "따름", score: 3 }, { text: "개선", score: 5 }] },
            { id: 16, text: "성공:", options: [{ text: "돈/권력", score: 1 }, { text: "안정", score: 3 }, { text: "성장/기여", score: 5 }] },
            { id: 17, text: "혼자 있는 것:", options: [{ text: "공포", score: 1 }, { text: "지루함", score: 2 }, { text: "충전", score: 5 }] },
            { id: 18, text: "질투:", options: [{ text: "소유욕", score: 1 }, { text: "숨김", score: 3 }, { text: "신뢰", score: 5 }] },
            { id: 19, text: "사과:", options: [{ text: "약점", score: 1 }, { text: "변명", score: 3 }, { text: "인정", score: 5 }] },
            { id: 20, text: "물건:", options: [{ text: "신분", score: 1 }, { text: "만족", score: 3 }, { text: "도구", score: 5 }] },
            { id: 21, text: "죽음:", options: [{ text: "무시", score: 1 }, { text: "공포", score: 3 }, { text: "동기 부여", score: 5 }] },
            { id: 22, text: "불의:", options: [{ text: "무관심", score: 1 }, { text: "슬픔", score: 3 }, { text: "행동", score: 5 }] },
            { id: 23, text: "학습:", options: [{ text: "강제로", score: 1 }, { text: "돈 위해", score: 3 }, { text: "앎의 기쁨", score: 5 }] },
            { id: 24, text: "삶의 목적:", options: [{ text: "받는 것", score: 1 }, { text: "속하는 것", score: 3 }, { text: "주는 것", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "정신 연령: 9-14세 (아동기)", desc: "<strong>[전인습적 단계]</strong><br>즉각적인 만족을 추구합니다.<br><strong>조언:</strong> 인내심을 기르세요." },
            { min: 41, max: 70, title: "정신 연령: 15-22세 (청소년기)", desc: "<strong>[인습적 단계]</strong><br>타인의 시선을 의식합니다.<br><strong>조언:</strong> 내면의 기준을 세우세요." },
            { min: 71, max: 95, title: "정신 연령: 23-35세 (성인기)", desc: "<strong>[양심적 단계]</strong><br>책임감 있고 계획적입니다.<br><strong>조언:</strong> 불확실성을 수용하세요." },
            { min: 96, max: 110, title: "정신 연령: 36-55세 (중년기)", desc: "<strong>[자율적 단계]</strong><br>높은 정서 지능을 가졌습니다.<br><strong>조언:</strong> 타인을 이끄세요." },
            { min: 111, max: 120, title: "정신 연령: 60세+ (현자)", desc: "<strong>[통합적 단계]</strong><br>자아를 초월했습니다.<br><strong>조언:</strong> 지혜를 나누세요." }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Professional
    "ar": {
        title: "التقييم السريري للعمر العقلي",
        desc: "24 سؤالاً لحساب عمرك النفسي الدقيق.",
        questions: [
            { id: 1, text: "شخص يقطع طريقك:", options: [{ text: "غضب", score: 1 }, { text: "تذمر", score: 3 }, { text: "تجاهل", score: 5 }] },
            { id: 2, text: "تريد شيئاً غالياً:", options: [{ text: "دين", score: 1 }, { text: "استياء", score: 2 }, { text: "توفير", score: 5 }] },
            { id: 3, text: "ملل:", options: [{ text: "تواصل اجتماعي", score: 1 }, { text: "محادثة", score: 3 }, { text: "تعلم", score: 5 }] },
            { id: 4, text: "إلغاء موعد:", options: [{ text: "حظر", score: 1 }, { text: "انزعاج", score: 3 }, { text: "وقت لنفسي", score: 5 }] },
            { id: 5, text: "خطأ في العمل:", options: [{ text: "إخفاء", score: 1 }, { text: "أعذار", score: 3 }, { text: "إصلاح", score: 5 }] },
            { id: 6, text: "حياتك:", options: [{ text: "تحدث لي", score: 1 }, { text: "حظ وجهد", score: 3 }, { text: "خياري", score: 5 }] },
            { id: 7, text: "نقد:", options: [{ text: "هجوم", score: 1 }, { text: "حزن", score: 3 }, { text: "حقيقة", score: 5 }] },
            { id: 8, text: "سعادتك:", options: [{ text: "مسؤولية غيري", score: 1 }, { text: "مشتركة", score: 3 }, { text: "مسؤوليتي", score: 5 }] },
            { id: 9, text: "رأي مختلف:", options: [{ text: "غباء", score: 1 }, { text: "تجنب", score: 3 }, { text: "فهم", score: 5 }] },
            { id: 10, text: "صديق يبكي:", options: [{ text: "هروب", score: 1 }, { text: "حل", score: 3 }, { text: "إنصات", score: 5 }] },
            { id: 11, text: "خدمة:", options: [{ text: "مقابل", score: 1 }, { text: "تذكر", score: 3 }, { text: "مجاناً", score: 5 }] },
            { id: 12, text: "نميمة:", options: [{ text: "أحبها", score: 1 }, { text: "أشارك", score: 3 }, { text: "مملة", score: 5 }] },
            { id: 13, text: "الحقيقة:", options: [{ text: "رأيي", score: 1 }, { text: "الأغلبية", score: 3 }, { text: "معقدة", score: 5 }] },
            { id: 14, text: "المستقبل:", options: [{ text: "اليوم فقط", score: 1 }, { text: "غامض", score: 3 }, { text: "رؤية", score: 5 }] },
            { id: 15, text: "القوانين:", options: [{ text: "كسر", score: 1 }, { text: "اتباع", score: 3 }, { text: "تغيير", score: 5 }] },
            { id: 16, text: "النجاح:", options: [{ text: "مال", score: 1 }, { text: "راحة", score: 3 }, { text: "أثر", score: 5 }] },
            { id: 17, text: "الوحدة:", options: [{ text: "رعب", score: 1 }, { text: "ملل", score: 2 }, { text: "راحة", score: 5 }] },
            { id: 18, text: "الغيرة:", options: [{ text: "تملك", score: 1 }, { text: "كبت", score: 3 }, { text: "ثقة", score: 5 }] },
            { id: 19, text: "الاعتذار:", options: [{ text: "ضعف", score: 1 }, { text: "لكن...", score: 3 }, { text: "اعتراف", score: 5 }] },
            { id: 20, text: "الممتلكات:", options: [{ text: "قيمتي", score: 1 }, { text: "متعة", score: 3 }, { text: "أدوات", score: 5 }] },
            { id: 21, text: "الموت:", options: [{ text: "تجاهل", score: 1 }, { text: "خوف", score: 3 }, { text: "حافز", score: 5 }] },
            { id: 22, text: "الظلم:", options: [{ text: "لا يهمني", score: 1 }, { text: "حزن", score: 3 }, { text: "فعل", score: 5 }] },
            { id: 23, text: "التعلم:", options: [{ text: "إجبار", score: 1 }, { text: "للمال", score: 3 }, { text: "للفهم", score: 5 }] },
            { id: 24, text: "هدف الحياة:", options: [{ text: "أن أُخدم", score: 1 }, { text: "أن أنتمي", score: 3 }, { text: "أن أخدم", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "العمر العقلي: 9-14 (طفولة)", desc: "<strong>[مرحلة ما قبل التقليدية]</strong><br>تبحث عن الإشباع الفوري.<br><strong>نصيحة:</strong> مارس الصبر." },
            { min: 41, max: 70, title: "العمر العقلي: 15-22 (مراهقة)", desc: "<strong>[مرحلة تقليدية]</strong><br>حساس لرأي المجتمع.<br><strong>نصيحة:</strong> حدد قيمك بنفسك." },
            { min: 71, max: 95, title: "العمر العقلي: 23-35 (راشد)", desc: "<strong>[مرحلة الضمير]</strong><br>مسؤول ومخطط.<br><strong>نصيحة:</strong> تقبل عدم اليقين." },
            { min: 96, max: 110, title: "العمر العقلي: 36-55 (ناضج)", desc: "<strong>[مرحلة الاستقلال]</strong><br>ذكاء عاطفي عالٍ.<br><strong>نصيحة:</strong> أرشد الآخرين." },
            { min: 111, max: 120, title: "العمر العقلي: 60+ (حكيم)", desc: "<strong>[مرحلة التكامل]</strong><br>تجاوزت الأنا.<br><strong>نصيحة:</strong> شارك حكمتك." }
        ]
    },

    // 11. 越南语 (Vietnamese) - Professional
    "vi": {
        title: "Đánh giá Tuổi Tâm thần Lâm sàng",
        desc: "24 câu hỏi để tính toán chính xác tuổi tâm lý của bạn.",
        questions: [
            { id: 1, text: "Ai đó tạt đầu xe bạn:", options: [{ text: "Giận dữ", score: 1 }, { text: "Phàn nàn", score: 3 }, { text: "Bỏ qua", score: 5 }] },
            { id: 2, text: "Muốn đồ đắt tiền:", options: [{ text: "Vay nợ", score: 1 }, { text: "Bực bội", score: 2 }, { text: "Tiết kiệm", score: 5 }] },
            { id: 3, text: "Chán:", options: [{ text: "Mạng xã hội", score: 1 }, { text: "Nói chuyện", score: 3 }, { text: "Học hỏi", score: 5 }] },
            { id: 4, text: "Bạn bè hủy kèo:", options: [{ text: "Chặn", score: 1 }, { text: "Khó chịu", score: 3 }, { text: "Thời gian cho mình", score: 5 }] },
            { id: 5, text: "Lỗi tại nơi làm việc:", options: [{ text: "Giấu", score: 1 }, { text: "Viện cớ", score: 3 }, { text: "Sửa chữa", score: 5 }] },
            { id: 6, text: "Cuộc sống của bạn:", options: [{ text: "Bị động", score: 1 }, { text: "May mắn & Nỗ lực", score: 3 }, { text: "Lựa chọn của tôi", score: 5 }] },
            { id: 7, text: "Chỉ trích:", options: [{ text: "Tấn công", score: 1 }, { text: "Buồn", score: 3 }, { text: "Sự thật", score: 5 }] },
            { id: 8, text: "Hạnh phúc:", options: [{ text: "Do người khác", score: 1 }, { text: "Chia sẻ", score: 3 }, { text: "Do tôi", score: 5 }] },
            { id: 9, text: "Ý kiến trái chiều:", options: [{ text: "Ngu ngốc", score: 1 }, { text: "Tránh né", score: 3 }, { text: "Thấu hiểu", score: 5 }] },
            { id: 10, text: "Bạn khóc:", options: [{ text: "Ngại", score: 1 }, { text: "Muốn sửa", score: 3 }, { text: "Lắng nghe", score: 5 }] },
            { id: 11, text: "Giúp đỡ:", options: [{ text: "Đòi hỏi", score: 1 }, { text: "Mong nhớ", score: 3 }, { text: "Miễn phí", score: 5 }] },
            { id: 12, text: "Chuyện phiếm:", options: [{ text: "Thích", score: 1 }, { text: "Tham gia", score: 3 }, { text: "Nhàm chán", score: 5 }] },
            { id: 13, text: "Sự thật:", options: [{ text: "Của tôi", score: 1 }, { text: "Số đông", score: 3 }, { text: "Phức tạp", score: 5 }] },
            { id: 14, text: "Tương lai:", options: [{ text: "Hôm nay thôi", score: 1 }, { text: "Mơ hồ", score: 3 }, { text: "Tầm nhìn", score: 5 }] },
            { id: 15, text: "Luật lệ:", options: [{ text: "Phá vỡ", score: 1 }, { text: "Tuân theo", score: 3 }, { text: "Thay đổi", score: 5 }] },
            { id: 16, text: "Thành công:", options: [{ text: "Tiền", score: 1 }, { text: "Thoải mái", score: 3 }, { text: "Tác động", score: 5 }] },
            { id: 17, text: "Một mình:", options: [{ text: "Sợ hãi", score: 1 }, { text: "Chán", score: 2 }, { text: "Hồi phục", score: 5 }] },
            { id: 18, text: "Ghen tuông:", options: [{ text: "Chiếm hữu", score: 1 }, { text: "Giấu", score: 3 }, { text: "Tin tưởng", score: 5 }] },
            { id: 19, text: "Xin lỗi:", options: [{ text: "Yếu đuối", score: 1 }, { text: "Nhưng mà...", score: 3 }, { text: "Thừa nhận", score: 5 }] },
            { id: 20, text: "Vật chất:", options: [{ text: "Giá trị tôi", score: 1 }, { text: "Thích", score: 3 }, { text: "Công cụ", score: 5 }] },
            { id: 21, text: "Cái chết:", options: [{ text: "Phớt lờ", score: 1 }, { text: "Sợ", score: 3 }, { text: "Động lực", score: 5 }] },
            { id: 22, text: "Bất công:", options: [{ text: "Kệ", score: 1 }, { text: "Buồn", score: 3 }, { text: "Hành động", score: 5 }] },
            { id: 23, text: "Học tập:", options: [{ text: "Ép buộc", score: 1 }, { text: "Vì tiền", score: 3 }, { text: "Vì hiểu biết", score: 5 }] },
            { id: 24, text: "Mục đích sống:", options: [{ text: "Được phục vụ", score: 1 }, { text: "Hòa nhập", score: 3 }, { text: "Cống hiến", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Tuổi tâm thần: 9-14 (Trẻ em)", desc: "<strong>[Giai đoạn Tiền quy ước]</strong><br>Tìm kiếm sự thỏa mãn ngay lập tức.<br><strong>Lời khuyên:</strong> Tập kiên nhẫn." },
            { min: 41, max: 70, title: "Tuổi tâm thần: 15-22 (Vị thành niên)", desc: "<strong>[Giai đoạn Quy ước]</strong><br>Nhạy cảm với sự công nhận xã hội.<br><strong>Lời khuyên:</strong> Tự định nghĩa bản thân." },
            { min: 71, max: 95, title: "Tuổi tâm thần: 23-35 (Người lớn)", desc: "<strong>[Giai đoạn Có lương tâm]</strong><br>Ổn định và có trách nhiệm.<br><strong>Lời khuyên:</strong> Chấp nhận sự tổn thương." },
            { min: 96, max: 110, title: "Tuổi tâm thần: 36-55 (Trưởng thành)", desc: "<strong>[Giai đoạn Tự chủ]</strong><br>Trí tuệ cảm xúc cao.<br><strong>Lời khuyên:</strong> Dẫn dắt người khác." },
            { min: 111, max: 120, title: "Tuổi tâm thần: 60+ (Hiền triết)", desc: "<strong>[Giai đoạn Hợp nhất]</strong><br>Vượt qua cái tôi.<br><strong>Lời khuyên:</strong> Chia sẻ trí tuệ." }
        ]
    },

    // 12. 泰语 (Thai) - Professional
    "th": {
        title: "แบบประเมินอายุจิตทางคลินิก",
        desc: "24 คำถามเพื่อคำนวณอายุทางจิตที่แม่นยำของคุณ",
        questions: [
            { id: 1, text: "คนขับรถปาดหน้า:", options: [{ text: "โกรธ", score: 1 }, { text: "บ่น", score: 3 }, { text: "ปล่อยไป", score: 5 }] },
            { id: 2, text: "อยากได้ของแพง:", options: [{ text: "รูดบัตร", score: 1 }, { text: "น้อยใจ", score: 2 }, { text: "เก็บเงิน", score: 5 }] },
            { id: 3, text: "เบื่อ:", options: [{ text: "เล่นมือถือ", score: 1 }, { text: "คุยกับคน", score: 3 }, { text: "เรียนรู้", score: 5 }] },
            { id: 4, text: "เพื่อนเทนัด:", options: [{ text: "บล็อก", score: 1 }, { text: "หงุดหงิด", score: 3 }, { text: "เวลาส่วนตัว", score: 5 }] },
            { id: 5, text: "ทำผิดที่งาน:", options: [{ text: "ซ่อน", score: 1 }, { text: "แก้ตัว", score: 3 }, { text: "แก้ไข", score: 5 }] },
            { id: 6, text: "ชีวิตคุณ:", options: [{ text: "ตามดวง", score: 1 }, { text: "ดวง+พยายาม", score: 3 }, { text: "เลือกเอง", score: 5 }] },
            { id: 7, text: "คำวิจารณ์:", options: [{ text: "โจมตี", score: 1 }, { text: "เสียใจ", score: 3 }, { text: "ความจริง", score: 5 }] },
            { id: 8, text: "ความสุข:", options: [{ text: "คนอื่น", score: 1 }, { text: "ร่วมกัน", score: 3 }, { text: "ฉันเอง", score: 5 }] },
            { id: 9, text: "ความเห็นต่าง:", options: [{ text: "โง่", score: 1 }, { text: "เลี่ยง", score: 3 }, { text: "เข้าใจ", score: 5 }] },
            { id: 10, text: "เพื่อนร้องไห้:", options: [{ text: "อึดอัด", score: 1 }, { text: "แก้ปัญหา", score: 3 }, { text: "รับฟัง", score: 5 }] },
            { id: 11, text: "ช่วยคน:", options: [{ text: "หวังผล", score: 1 }, { text: "ทวงบุญคุณ", score: 3 }, { text: "ฟรี", score: 5 }] },
            { id: 12, text: "นินทา:", options: [{ text: "ชอบ", score: 1 }, { text: "ร่วมวง", score: 3 }, { text: "น่าเบื่อ", score: 5 }] },
            { id: 13, text: "ความจริง:", options: [{ text: "ของฉัน", score: 1 }, { text: "ส่วนใหญ่", score: 3 }, { text: "ซับซ้อน", score: 5 }] },
            { id: 14, text: "อนาคต:", options: [{ text: "วันต่อวัน", score: 1 }, { text: "ลางๆ", score: 3 }, { text: "วิสัยทัศน์", score: 5 }] },
            { id: 15, text: "กฎเกณฑ์:", options: [{ text: "แหก", score: 1 }, { text: "ทำตาม", score: 3 }, { text: "เปลี่ยนแปลง", score: 5 }] },
            { id: 16, text: "ความสำเร็จ:", options: [{ text: "เงิน", score: 1 }, { text: "สบาย", score: 3 }, { text: "สร้างผลกระทบ", score: 5 }] },
            { id: 17, text: "อยู่คนเดียว:", options: [{ text: "กลัว", score: 1 }, { text: "เบื่อ", score: 2 }, { text: "ฟื้นฟู", score: 5 }] },
            { id: 18, text: "หึงหวง:", options: [{ text: "ครอบครอง", score: 1 }, { text: "เก็บกด", score: 3 }, { text: "เชื่อใจ", score: 5 }] },
            { id: 19, text: "ขอโทษ:", options: [{ text: "อ่อนแอ", score: 1 }, { text: "แต่...", score: 3 }, { text: "ยอมรับ", score: 5 }] },
            { id: 20, text: "วัตถุ:", options: [{ text: "ตัวตน", score: 1 }, { text: "ชอบ", score: 3 }, { text: "เครื่องมือ", score: 5 }] },
            { id: 21, text: "ความตาย:", options: [{ text: "เมิน", score: 1 }, { text: "กลัว", score: 3 }, { text: "แรงบันดาลใจ", score: 5 }] },
            { id: 22, text: "ความอยุติธรรม:", options: [{ text: "ช่างมัน", score: 1 }, { text: "เศร้า", score: 3 }, { text: "ลงมือทำ", score: 5 }] },
            { id: 23, text: "การเรียนรู้:", options: [{ text: "บังคับ", score: 1 }, { text: "เพื่อเงิน", score: 3 }, { text: "เพื่อรู้", score: 5 }] },
            { id: 24, text: "เป้าหมายชีวิต:", options: [{ text: "รับใช้ฉัน", score: 1 }, { text: "กลมกลืน", score: 3 }, { text: "รับใช้ผู้อื่น", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "อายุจิต: 9-14 (เด็ก)", desc: "<strong>[ขั้นก่อนเกณฑ์]</strong><br>ต้องการความพอใจทันที<br><strong>แนะนำ:</strong> ฝึกความอดทน" },
            { min: 41, max: 70, title: "อายุจิต: 15-22 (วัยรุ่น)", desc: "<strong>[ขั้นตามเกณฑ์]</strong><br>แคร์สายตาคนอื่นมาก<br><strong>แนะนำ:</strong> สร้างตัวตนจากภายใน" },
            { min: 71, max: 95, title: "อายุจิต: 23-35 (ผู้ใหญ่)", desc: "<strong>[ขั้นมีมโนธรรม]</strong><br>มั่นคงและรับผิดชอบ<br><strong>แนะนำ:</strong> ยอมรับความเปราะบาง" },
            { min: 96, max: 110, title: "อายุจิต: 36-55 (วัยกลางคน)", desc: "<strong>[ขั้นเป็นอิสระ]</strong><br>ความฉลาดทางอารมณ์สูง<br><strong>แนะนำ:</strong> แนะนำผู้อื่น" },
            { min: 111, max: 120, title: "อายุจิต: 60+ (ปราชญ์)", desc: "<strong>[ขั้นบูรณาการ]</strong><br>ก้าวข้ามอัตตา<br><strong>แนะนำ:</strong> แบ่งปันปัญญา" }
        ]
    },

    // 13. 印尼语 (Indonesian) - Professional
    "id": {
        title: "Penilaian Usia Mental Klinis",
        desc: "24 pertanyaan untuk menghitung usia psikologis Anda yang tepat.",
        questions: [
            { id: 1, text: "Orang memotong jalan:", options: [{ text: "Marah", score: 1 }, { text: "Mengeluh", score: 3 }, { text: "Biarkan", score: 5 }] },
            { id: 2, text: "Ingin barang mahal:", options: [{ text: "Kredit", score: 1 }, { text: "Kesal", score: 2 }, { text: "Menabung", score: 5 }] },
            { id: 3, text: "Bosan:", options: [{ text: "Medsos", score: 1 }, { text: "Ngobrol", score: 3 }, { text: "Belajar", score: 5 }] },
            { id: 4, text: "Teman batal janji:", options: [{ text: "Blokir", score: 1 }, { text: "Kesal", score: 3 }, { text: "Waktu sendiri", score: 5 }] },
            { id: 5, text: "Salah di kerja:", options: [{ text: "Sembunyi", score: 1 }, { text: "Alasan", score: 3 }, { text: "Perbaiki", score: 5 }] },
            { id: 6, text: "Hidup Anda:", options: [{ text: "Pasrah", score: 1 }, { text: "Nasib & Usaha", score: 3 }, { text: "Pilihan saya", score: 5 }] },
            { id: 7, text: "Kritik:", options: [{ text: "Serang", score: 1 }, { text: "Sedih", score: 3 }, { text: "Kebenaran", score: 5 }] },
            { id: 8, text: "Bahagia:", options: [{ text: "Tanggung jawab orang", score: 1 }, { text: "Bersama", score: 3 }, { text: "Tanggung jawab saya", score: 5 }] },
            { id: 9, text: "Beda pendapat:", options: [{ text: "Bodoh", score: 1 }, { text: "Hindari", score: 3 }, { text: "Pahami", score: 5 }] },
            { id: 10, text: "Teman menangis:", options: [{ text: "Canggung", score: 1 }, { text: "Solusi", score: 3 }, { text: "Dengar", score: 5 }] },
            { id: 11, text: "Bantuan:", options: [{ text: "Pamrih", score: 1 }, { text: "Ingat", score: 3 }, { text: "Gratis", score: 5 }] },
            { id: 12, text: "Gosip:", options: [{ text: "Suka", score: 1 }, { text: "Ikut", score: 3 }, { text: "Bosan", score: 5 }] },
            { id: 13, text: "Kebenaran:", options: [{ text: "Milikku", score: 1 }, { text: "Mayoritas", score: 3 }, { text: "Kompleks", score: 5 }] },
            { id: 14, text: "Masa depan:", options: [{ text: "Hari ini", score: 1 }, { text: "Samar", score: 3 }, { text: "Visi", score: 5 }] },
            { id: 15, text: "Aturan:", options: [{ text: "Langgar", score: 1 }, { text: "Ikuti", score: 3 }, { text: "Ubah", score: 5 }] },
            { id: 16, text: "Sukses:", options: [{ text: "Uang", score: 1 }, { text: "Nyaman", score: 3 }, { text: "Dampak", score: 5 }] },
            { id: 17, text: "Sendirian:", options: [{ text: "Takut", score: 1 }, { text: "Bosan", score: 2 }, { text: "Pulih", score: 5 }] },
            { id: 18, text: "Cemburu:", options: [{ text: "Posesif", score: 1 }, { text: "Sembunyi", score: 3 }, { text: "Percaya", score: 5 }] },
            { id: 19, text: "Maaf:", options: [{ text: "Lemah", score: 1 }, { text: "Tapi...", score: 3 }, { text: "Akui", score: 5 }] },
            { id: 20, text: "Materi:", options: [{ text: "Nilai diri", score: 1 }, { text: "Suka", score: 3 }, { text: "Alat", score: 5 }] },
            { id: 21, text: "Kematian:", options: [{ text: "Abaikan", score: 1 }, { text: "Takut", score: 3 }, { text: "Motivasi", score: 5 }] },
            { id: 22, text: "Ketidakadilan:", options: [{ text: "Biarin", score: 1 }, { text: "Sedih", score: 3 }, { text: "Bertindak", score: 5 }] },
            { id: 23, text: "Belajar:", options: [{ text: "Terpaksa", score: 1 }, { text: "Demi uang", score: 3 }, { text: "Paham", score: 5 }] },
            { id: 24, text: "Tujuan hidup:", options: [{ text: "Dilayani", score: 1 }, { text: "Diterima", score: 3 }, { text: "Melayani", score: 5 }] }
        ],
        results: [
            { min: 0, max: 40, title: "Usia Mental: 9-14 (Anak)", desc: "<strong>[Pra-konvensional]</strong><br>Mencari kepuasan instan.<br><strong>Saran:</strong> Latih kesabaran." },
            { min: 41, max: 70, title: "Usia Mental: 15-22 (Remaja)", desc: "<strong>[Konvensional]</strong><br>Sensitif terhadap validasi sosial.<br><strong>Saran:</strong> Tentukan nilai diri sendiri." },
            { min: 71, max: 95, title: "Usia Mental: 23-35 (Dewasa)", desc: "<strong>[Hati Nurani]</strong><br>Stabil dan bertanggung jawab.<br><strong>Saran:</strong> Terima kerentanan." },
            { min: 96, max: 110, title: "Usia Mental: 36-55 (Matang)", desc: "<strong>[Otonom]</strong><br>Kecerdasan emosional tinggi.<br><strong>Saran:</strong> Bimbing orang lain." },
            { min: 111, max: 120, title: "Usia Mental: 60+ (Bijak)", desc: "<strong>[Terintegrasi]</strong><br>Melampaui ego.<br><strong>Saran:</strong> Bagikan kebijaksanaan." }
        ]
    }
};