// data/test1.js
// 多维深度疲劳与职业倦怠评估 (Multidimensional Fatigue & Burnout Assessment)
// 基于 MBI (Maslach Burnout Inventory) 及 CFS (Chronic Fatigue Syndrome) 诊断标准改编
// 旨在评估用户的生理、认知及情绪耗竭程度

const quizDataMulti = {
    // 1. 英语 (English) - Expert Level
    "en": {
        title: "Clinical Fatigue & Burnout Assessment",
        desc: "Designed by psychological experts, this test evaluates your physical exhaustion, emotional detachment, and cognitive function to determine if you are just 'tired' or facing clinical burnout.",
        questions: [
            // 生理维度 (Physical)
            { id: 1, text: "Regardless of how many hours I sleep, I wake up feeling unrefreshed and physically heavy.", options: [{ text: "Always", score: 5 }, { text: "Sometimes", score: 3 }, { text: "Rarely", score: 1 }] },
            { id: 2, text: "I experience unexplained physical symptoms (e.g., headaches, muscle pain, chest tightness) during stress.", options: [{ text: "Frequently", score: 5 }, { text: "Occasionally", score: 3 }, { text: "Never", score: 1 }] },
            { id: 3, text: "My energy levels drop drastically after minor physical or mental effort (Post-Exertional Malaise).", options: [{ text: "Yes, recovery takes forever", score: 5 }, { text: "I get tired but recover", score: 3 }, { text: "No, I have good stamina", score: 1 }] },
            
            // 认知维度 (Cognitive/Brain Fog)
            { id: 4, text: "I struggle with 'Brain Fog' (forgetfulness, inability to focus, confusion) daily.", options: [{ text: "Severe fog", score: 5 }, { text: "Mild fog", score: 3 }, { text: "Mental clarity is high", score: 1 }] },
            { id: 5, text: "Making simple decisions (like what to eat) feels overwhelmingly difficult.", options: [{ text: "Yes, decision fatigue", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, I decide quickly", score: 1 }] },
            
            // 情绪维度 (Emotional Exhaustion)
            { id: 6, text: "I feel emotionally numb or detached from people and activities I used to care about.", options: [{ text: "Yes, total detachment", score: 5 }, { text: "Sometimes", score: 3 }, { text: "No, I feel connected", score: 1 }] },
            { id: 7, text: "I become easily irritable or cynical, especially towards work or family.", options: [{ text: "Often", score: 5 }, { text: "Occasionally", score: 3 }, { text: "Rarely", score: 1 }] },
            { id: 8, text: "The thought of starting a new day fills me with dread or anxiety.", options: [{ text: "Every morning", score: 5 }, { text: "On bad days", score: 3 }, { text: "No, I look forward to it", score: 1 }] },
            
            // 行为与动机 (Behavioral)
            { id: 9, text: "I rely heavily on stimulants (caffeine, sugar, nicotine) just to function.", options: [{ text: "Can't survive without them", score: 5 }, { text: "Moderate use", score: 3 }, { text: "No need", score: 1 }] },
            { id: 10, text: "I procrastinate not because I'm lazy, but because I have zero willpower left.", options: [{ text: "Exactly", score: 5 }, { text: "Sometimes", score: 3 }, { text: "I am disciplined", score: 1 }] },
            { id: 11, text: "My appetite or sleep patterns have changed significantly (too much or too little).", options: [{ text: "Yes, drastic changes", score: 5 }, { text: "Slight changes", score: 3 }, { text: "Stable", score: 1 }] },
            { id: 12, text: "Even when I rest, my mind is racing and cannot shut down.", options: [{ text: "Always wired but tired", score: 5 }, { text: "Sometimes", score: 3 }, { text: "I can relax easily", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Result: Optimal Vitality", 
                desc: "<strong>[State: High Performance Zone]</strong><br><br>" +
                      "<strong>Clinical Analysis:</strong><br>Your cortisol levels and circadian rhythm appear to be well-regulated. You demonstrate strong cognitive clarity and emotional resilience. You are managing stress effectively without somatic symptoms.<br><br>" +
                      "<strong>Recommendation:</strong><br>Maintain your current routine. Consider high-intensity activities or new learning challenges to channel your abundant energy positively." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Result: Mild Transient Fatigue", 
                desc: "<strong>[State: The 'Busy Bee' Syndrome]</strong><br><br>" +
                      "<strong>Clinical Analysis:</strong><br>You are experiencing functional fatigue. While your body is coping, your psychological battery is draining faster than it recharges. This is often a precursor to chronic stress if boundaries are not set.<br><br>" +
                      "<strong>Recommendation:</strong><br>Implement 'Micro-Breaks' (5 minutes every hour). Prioritize sleep hygiene (no screens 1 hour before bed) to prevent this from escalating." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Result: Chronic Exhaustion", 
                desc: "<strong>[State: The 'Marathon' Wall]</strong><br><br>" +
                      "<strong>Clinical Analysis:</strong><br>You are showing signs of adrenal dysregulation and accumulated sleep debt. Your 'Brain Fog' suggests cognitive overload. You are running on stress hormones (adrenaline/cortisol) rather than true energy.<br><br>" +
                      "<strong>Recommendation:</strong><br>You need a 'Dopamine Detox'. Reduce sensory input. Cut caffeine after 12 PM. Weekend rest is no longer optional; it is a medical necessity." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Result: Severe Burnout", 
                desc: "<strong>[State: Systemic Collapse Warning]</strong><br><br>" +
                      "<strong>Clinical Analysis:</strong><br>⚠️ <strong>Critical Alert.</strong> You are exhibiting symptoms of clinical burnout and potential nervous system dysregulation. Emotional detachment and cynicism are defense mechanisms your brain is using because it can no longer process stress.<br><br>" +
                      "<strong>Prescription:</strong><br>1. Radical Rest: Do absolutely nothing for at least 48 hours.<br>2. Seek professional help: Therapy or medical consultation is advised.<br>3. This is not laziness; this is a health crisis." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - Expert Level
    "zh": {
        title: "多维深度疲劳与职业倦怠评估",
        desc: "本测试基于MBI倦怠量表，深度分析你的生理、认知及情绪耗竭程度，判断你是“累了”还是处于“病理性崩溃”边缘。",
        questions: [
            // 生理维度
            { id: 1, text: "无论睡多久，醒来时依然感觉身体沉重，仿佛没有休息过（睡眠无恢复感）。", options: [{ text: "总是如此", score: 5 }, { text: "有时", score: 3 }, { text: "很少", score: 1 }] },
            { id: 2, text: "在压力下，我会出现不明原因的躯体症状（如偏头痛、背痛、胸闷）。", options: [{ text: "经常出现", score: 5 }, { text: "偶尔", score: 3 }, { text: "从未", score: 1 }] },
            { id: 3, text: "哪怕是轻微的脑力或体力活动后，我也会感到极度虚脱，且恢复极慢。", options: [{ text: "是的，如大病一场", score: 5 }, { text: "会累，但能恢复", score: 3 }, { text: "不，我精力充沛", score: 1 }] },
            
            // 认知维度
            { id: 4, text: "我每天都在与“脑雾”抗争（健忘、无法专注、思维迟钝）。", options: [{ text: "重度脑雾", score: 5 }, { text: "轻微", score: 3 }, { text: "思维很清晰", score: 1 }] },
            { id: 5, text: "做简单的决定（如午饭吃什么）对我来说都变成了一种巨大的负担。", options: [{ text: "是的，决策疲劳", score: 5 }, { text: "有时", score: 3 }, { text: "不，决策果断", score: 1 }] },
            
            // 情绪维度
            { id: 6, text: "我对曾经在意的人或事感到情感麻木，仿佛隔着一层玻璃。", options: [{ text: "完全解离/麻木", score: 5 }, { text: "有时", score: 3 }, { text: "不，情感连接正常", score: 1 }] },
            { id: 7, text: "我变得容易被激怒，或者变得愤世嫉俗，尤其是在工作/家庭中。", options: [{ text: "经常", score: 5 }, { text: "偶尔", score: 3 }, { text: "很少", score: 1 }] },
            { id: 8, text: "一想到新的一天开始，我就感到深深的恐惧或焦虑。", options: [{ text: "每天早上", score: 5 }, { text: "状态不好时", score: 3 }, { text: "不，我期待新一天", score: 1 }] },
            
            // 行为与动机
            { id: 9, text: "我严重依赖刺激物（咖啡、糖、尼古丁）来维持基本运转。", options: [{ text: "没它们活不了", score: 5 }, { text: "适度使用", score: 3 }, { text: "不需要", score: 1 }] },
            { id: 10, text: "我拖延不是因为懒，而是因为意志力电池已经彻底耗尽了。", options: [{ text: "完全正确", score: 5 }, { text: "有时", score: 3 }, { text: "我很自律", score: 1 }] },
            { id: 11, text: "我的食欲或睡眠模式发生了剧烈变化（暴食/厌食，嗜睡/失眠）。", options: [{ text: "是的，变化很大", score: 5 }, { text: "轻微变化", score: 3 }, { text: "很稳定", score: 1 }] },
            { id: 12, text: "即使在休息时，我的大脑也像“赛车”一样停不下来（身体累但脑子亢奋）。", options: [{ text: "总是如此", score: 5 }, { text: "有时", score: 3 }, { text: "能轻松放松", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "评估结果：最佳活力状态 (Optimal)", 
                desc: "<strong>【状态定义】：高能效表现区</strong><br><br>" +
                      "<strong>🩺 临床分析：</strong><br>你的皮质醇水平（压力荷尔蒙）和昼夜节律调节得非常好。你展现出了极强的认知清晰度和情绪韧性。你的身心系统处于良性循环中，能够有效代谢日常压力。<br><br>" +
                      "<strong>🛡️ 专家建议：</strong><br>继续保持目前的作息。你可以尝试更高强度的挑战（如学习新技能或高强度运动），你的能量储备足以支持自我实现。" 
            },
            { 
                min: 21, 
                max: 35, 
                title: "评估结果：轻度功能性疲劳 (Mild)", 
                desc: "<strong>【状态定义】：代偿性损耗期</strong><br><br>" +
                      "<strong>🩺 临床分析：</strong><br>你正处于“功能性疲劳”阶段。虽然你的身体还在支撑你完成任务，但心理电池的消耗速度已经超过了充电速度。这往往是慢性压力的前兆。你的疲劳更多是心理层面的预警信号。<br><br>" +
                      "<strong>🛡️ 专家建议：</strong><br>引入“微休息”机制（每小时停机5分钟）。严格执行睡眠卫生（睡前1小时远离蓝光屏幕）。此时干预，恢复成本最低。" 
            },
            { 
                min: 36, 
                max: 48, 
                title: "评估结果：慢性衰竭 (Chronic)", 
                desc: "<strong>【状态定义】：肾上腺疲劳临界点</strong><br><br>" +
                      "<strong>🩺 临床分析：</strong><br>你的系统正在亮红灯。你表现出了睡眠剥夺积累和认知过载（脑雾）的典型症状。你目前可能不是靠“能量”在支撑，而是靠“压力激素”（肾上腺素）在硬撑。这会导致免疫力下降和情绪失控。<br><br>" +
                      "<strong>🛡️ 专家建议：</strong><br>你需要进行“多巴胺断舍离”。减少不必要的信息输入。中午12点后禁止摄入咖啡因。周末的休息不再是选项，而是医疗级别的必要手段。" 
            },
            { 
                min: 49, 
                max: 60, 
                title: "评估结果：重度职业倦怠 (Burnout)", 
                desc: "<strong>【状态定义】：系统性崩溃警报</strong><br><br>" +
                      "<strong>🩺 临床分析：</strong><br>⚠️ <strong>危急警报。</strong> 这不仅仅是累，这是临床意义上的“身心耗竭综合征”。你的情感解离（麻木）和愤世嫉俗是大脑为了防止彻底崩溃而启动的防御机制。你的神经系统处于极度失调状态。<br><br>" +
                      "<strong>🚑 专家处方：</strong><br>1. <strong>强制关机</strong>：你需要至少48小时的彻底休息（无工作、无社交）。<br>2. <strong>寻求帮助</strong>：建议进行心理咨询或医疗评估。<br>3. 请记住：这不是懒惰，这是身体在求救。" 
            }
        ]
    },

// 3. 德语 (German) - Expert Level
    "de": {
        title: "Klinische Erschöpfungs- & Burnout-Analyse",
        desc: "Entwickelt von Experten. Dieser Test bewertet Ihre körperliche, kognitive und emotionale Erschöpfung basierend auf dem MBI-Standard.",
        questions: [
            // 生理 (Körperlich)
            { id: 1, text: "Unabhängig von der Schlafdauer wache ich unerholt und körperlich schwer auf.", options: [{ text: "Immer", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Selten", score: 1 }] },
            { id: 2, text: "Unter Stress leide ich unter unerklärlichen körperlichen Symptomen (Kopfschmerzen, Muskelverspannungen).", options: [{ text: "Häufig", score: 5 }, { text: "Gelegentlich", score: 3 }, { text: "Nie", score: 1 }] },
            { id: 3, text: "Nach geringer Anstrengung erlebe ich einen unverhältnismäßigen Energieabfall (Post-Exertional Malaise).", options: [{ text: "Ja, Erholung dauert ewig", score: 5 }, { text: "Bin müde, aber erhole mich", score: 3 }, { text: "Nein, gute Ausdauer", score: 1 }] },
            
            // 认知 (Kognitiv)
            { id: 4, text: "Ich kämpfe täglich mit 'Brain Fog' (Vergesslichkeit, Konzentrationsstörungen).", options: [{ text: "Starker Nebel", score: 5 }, { text: "Leicht", score: 3 }, { text: "Klarer Verstand", score: 1 }] },
            { id: 5, text: "Einfache Entscheidungen (z.B. Essenswahl) fühlen sich überwältigend schwer an.", options: [{ text: "Ja, Entscheidungsmüdigkeit", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein, entscheide schnell", score: 1 }] },
            
            // 情绪 (Emotional)
            { id: 6, text: "Ich fühle mich emotional taub oder distanziert von Menschen, die mir wichtig waren.", options: [{ text: "Ja, völlige Distanzierung", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Nein, fühle mich verbunden", score: 1 }] },
            { id: 7, text: "Ich reagiere zunehmend zynisch oder gereizt auf Arbeit oder Familie.", options: [{ text: "Oft", score: 5 }, { text: "Gelegentlich", score: 3 }, { text: "Selten", score: 1 }] },
            { id: 8, text: "Der Gedanke an den neuen Tag erfüllt mich mit Angst oder Grauen.", options: [{ text: "Jeden Morgen", score: 5 }, { text: "An schlechten Tagen", score: 3 }, { text: "Nein, ich freue mich", score: 1 }] },
            
            // 行为 (Verhalten)
            { id: 9, text: "Ich bin auf Stimulanzien (Koffein, Zucker) angewiesen, um überhaupt zu funktionieren.", options: [{ text: "Ohne geht es nicht", score: 5 }, { text: "Mäßig", score: 3 }, { text: "Brauche ich nicht", score: 1 }] },
            { id: 10, text: "Ich prokrastiniere, weil meine Willenskraft komplett erschöpft ist.", options: [{ text: "Genau so ist es", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Bin diszipliniert", score: 1 }] },
            { id: 11, text: "Mein Schlaf oder Appetit hat sich drastisch verändert.", options: [{ text: "Ja, extrem", score: 5 }, { text: "Leicht", score: 3 }, { text: "Stabil", score: 1 }] },
            { id: 12, text: "Auch in Ruhephasen rast mein Kopf und schaltet nicht ab ('Wired but tired').", options: [{ text: "Immer", score: 5 }, { text: "Manchmal", score: 3 }, { text: "Kann gut entspannen", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Ergebnis: Optimale Vitalität", 
                desc: "<strong>[Status: Hochleistungszone]</strong><br><br><strong>Klinische Analyse:</strong><br>Ihr Cortisolspiegel und Ihr zirkadianer Rhythmus sind gut reguliert. Sie zeigen hohe kognitive Klarheit und emotionale Resilienz.<br><br><strong>Empfehlung:</strong><br>Behalten Sie Ihre Routine bei. Nutzen Sie Ihre Energie für neue Herausforderungen." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Ergebnis: Leichte transiente Müdigkeit", 
                desc: "<strong>[Status: Funktionelle Erschöpfung]</strong><br><br><strong>Klinische Analyse:</strong><br>Ihr Körper funktioniert noch, aber Ihre psychische Batterie entlädt sich schneller, als sie lädt. Ein Vorbote von chronischem Stress.<br><br><strong>Empfehlung:</strong><br>Führen Sie 'Mikro-Pausen' ein. Priorisieren Sie Schlafhygiene, um eine Eskalation zu verhindern." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Ergebnis: Chronische Erschöpfung", 
                desc: "<strong>[Status: Die 'Marathon'-Wand]</strong><br><br><strong>Klinische Analyse:</strong><br>Sie zeigen Anzeichen einer Nebennieren-Dysregulation. Ihr 'Brain Fog' deutet auf kognitive Überlastung hin. Sie laufen auf Stresshormonen statt auf echter Energie.<br><br><strong>Empfehlung:</strong><br>Dopamin-Detox ist nötig. Kein Koffein nach 12 Uhr. Wochenendruhe ist keine Option mehr, sondern medizinisch notwendig." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Ergebnis: Schweres Burnout", 
                desc: "<strong>[Status: Systemischer Zusammenbruch]</strong><br><br><strong>Klinische Analyse:</strong><br>⚠️ <strong>Kritischer Alarm.</strong> Dies ist das klinische Burnout-Syndrom. Emotionale Distanzierung und Zynismus sind Schutzmechanismen Ihres Gehirns.<br><br><strong>Verordnung:</strong><br>1. Radikale Ruhe (48h nichts tun).<br>2. Professionelle Hilfe suchen.<br>3. Das ist keine Faulheit, das ist eine Gesundheitskrise." 
            }
        ]
    },

    // 4. 日语 (Japanese) - Expert Level
    "ja": {
        title: "疲労・燃え尽き症候群 総合診断",
        desc: "30年の臨床経験に基づく専門的評価。MBI（バーンアウト尺度）をベースに、身体的・認知的・感情的な消耗度を判定します。",
        questions: [
            // 生理 (Physical)
            { id: 1, text: "どれだけ寝ても、朝起きると体が重く、疲れが取れていない。", options: [{ text: "いつもそうだ", score: 5 }, { text: "時々", score: 3 }, { text: "めったにない", score: 1 }] },
            { id: 2, text: "ストレスを感じると、原因不明の身体症状（頭痛、筋肉痛、動悸など）が出る。", options: [{ text: "頻繁にある", score: 5 }, { text: "たまにある", score: 3 }, { text: "ない", score: 1 }] },
            { id: 3, text: "軽い活動の後でも、極度の疲労感に襲われ、回復に時間がかかる。", options: [{ text: "はい、病気のようだ", score: 5 }, { text: "疲れるが回復する", score: 3 }, { text: "いいえ、体力はある", score: 1 }] },
            
            // 认知 (Cognitive)
            { id: 4, text: "毎日「ブレインフォグ（脳の霧）」に悩まされている（物忘れ、集中困難）。", options: [{ text: "重度の霧", score: 5 }, { text: "軽度", score: 3 }, { text: "頭は冴えている", score: 1 }] },
            { id: 5, text: "些細な決断（昼食のメニューなど）をするのが、ひどく億劫に感じる。", options: [{ text: "はい、決断疲れ", score: 5 }, { text: "時々", score: 3 }, { text: "即決できる", score: 1 }] },
            
            // 情绪 (Emotional)
            { id: 6, text: "以前は大切だった人や活動に対して、感情が麻痺したり、無関心になった。", options: [{ text: "はい、完全に乖離している", score: 5 }, { text: "時々", score: 3 }, { text: "いいえ、関心がある", score: 1 }] },
            { id: 7, text: "仕事や家族に対して、イライラしたり、冷笑的（シニカル）な態度をとってしまう。", options: [{ text: "頻繁に", score: 5 }, { text: "時々", score: 3 }, { text: "めったにない", score: 1 }] },
            { id: 8, text: "新しい一日が始まると思うと、恐怖や不安でいっぱいになる。", options: [{ text: "毎朝", score: 5 }, { text: "調子が悪い時", score: 3 }, { text: "楽しみだ", score: 1 }] },
            
            // 行为 (Behavioral)
            { id: 9, text: "カフェイン、糖分、ニコチンなどの刺激物がないと機能しない。", options: [{ text: "依存している", score: 5 }, { text: "適度に摂取", score: 3 }, { text: "必要ない", score: 1 }] },
            { id: 10, text: "怠けているわけではないのに、意志力が枯渇して先延ばしにしてしまう。", options: [{ text: "その通りだ", score: 5 }, { text: "時々", score: 3 }, { text: "自制できている", score: 1 }] },
            { id: 11, text: "食欲や睡眠パターンが劇的に変化した（過食/拒食、過眠/不眠）。", options: [{ text: "はい、激変した", score: 5 }, { text: "少し変化した", score: 3 }, { text: "安定している", score: 1 }] },
            { id: 12, text: "休んでいる時でも、頭が興奮状態で休まらない（体は疲れているのに）。", options: [{ text: "常にそうだ", score: 5 }, { text: "時々", score: 3 }, { text: "リラックスできる", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "診断結果：最適なバイタリティ (Optimal)", 
                desc: "<strong>【状態：ハイパフォーマンスゾーン】</strong><br><br><strong>臨床分析：</strong><br>コルチゾールレベルと概日リズムが非常に良好に調整されています。高い認知的明晰さと感情的レジリエンス（回復力）を示しています。<br><br><strong>専門家のアドバイス：</strong><br>現在のルーチンを維持してください。その豊富なエネルギーを新しい学習やスキル習得に向けると良いでしょう。" 
            },
            { 
                min: 21, 
                max: 35, 
                title: "診断結果：軽度の機能性疲労 (Mild)", 
                desc: "<strong>【状態：代償性消耗期】</strong><br><br><strong>臨床分析：</strong><br>「機能性疲労」の段階です。体は動いていますが、心のバッテリーの消耗が充電を上回っています。これは慢性ストレスの前兆です。<br><br><strong>専門家のアドバイス：</strong><br>1時間に5分の「マイクロブレイク」を取り入れてください。睡眠衛生（寝る1時間前のスマホ禁止）を徹底し、悪化を防ぎましょう。" 
            },
            { 
                min: 36, 
                max: 48, 
                title: "診断結果：慢性疲労状態 (Chronic)", 
                desc: "<strong>【状態：副腎疲労の境界線】</strong><br><br><strong>臨床分析：</strong><br>システムが赤信号を出しています。睡眠負債の蓄積と認知的過負荷（ブレインフォグ）が見られます。あなたは今、エネルギーではなく「ストレスホルモン（アドレナリン）」で無理やり動いています。<br><br><strong>専門家のアドバイス：</strong><br>「ドーパミン・デトックス」が必要です。情報の遮断、正午以降のカフェイン禁止を行ってください。週末の休息は選択肢ではなく、医学的な必須事項です。" 
            },
            { 
                min: 49, 
                max: 60, 
                title: "診断結果：重度の燃え尽き症候群 (Burnout)", 
                desc: "<strong>【状態：システム崩壊の警告】</strong><br><br><strong>臨床分析：</strong><br>⚠️ <strong>緊急アラート。</strong> これは単なる疲れではなく、臨床的な「バーンアウト」です。感情の麻痺やシニシズムは、心が完全に壊れるのを防ぐための脳の防衛反応です。<br><br><strong>処方箋：</strong><br>1. <strong>強制シャットダウン</strong>：最低48時間は何もしないでください。<br>2. <strong>専門家の支援</strong>：カウンセリングや医療機関の受診を推奨します。<br>3. これは怠けではありません、健康上の危機です。" 
            }
        ]
    },

    // 5. 法语 (French) - Expert Level
    "fr": {
        title: "Évaluation Clinique de l'Épuisement & Burn-out",
        desc: "Conçu par des experts cliniques. Ce test évalue votre épuisement physique, émotionnel et cognitif selon les standards MBI.",
        questions: [
            // Physique
            { id: 1, text: "Peu importe combien je dors, je me réveille fatigué et physiquement lourd.", options: [{ text: "Toujours", score: 5 }, { text: "Parfois", score: 3 }, { text: "Rarement", score: 1 }] },
            { id: 2, text: "Sous stress, j'ai des symptômes inexpliqués (maux de tête, douleurs musculaires).", options: [{ text: "Fréquemment", score: 5 }, { text: "Parfois", score: 3 }, { text: "Jamais", score: 1 }] },
            { id: 3, text: "Mon énergie chute drastiquement après un effort mineur (Malaise post-effort).", options: [{ text: "Oui, récupération lente", score: 5 }, { text: "Fatigué mais ça va", score: 3 }, { text: "Non, bonne endurance", score: 1 }] },
            
            // Cognitif
            { id: 4, text: "Je lutte quotidiennement contre le 'Brouillard Mental' (oubli, confusion).", options: [{ text: "Brouillard épais", score: 5 }, { text: "Léger", score: 3 }, { text: "Esprit clair", score: 1 }] },
            { id: 5, text: "Prendre des décisions simples (quoi manger) semble insurmontable.", options: [{ text: "Oui, fatigue décisionnelle", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non, je décide vite", score: 1 }] },
            
            // Émotionnel
            { id: 6, text: "Je me sens émotionnellement détaché ou indifférent aux choses que j'aimais.", options: [{ text: "Oui, détachement total", score: 5 }, { text: "Parfois", score: 3 }, { text: "Non, je suis connecté", score: 1 }] },
            { id: 7, text: "Je deviens facilement irritable ou cynique envers le travail ou la famille.", options: [{ text: "Souvent", score: 5 }, { text: "Parfois", score: 3 }, { text: "Rarement", score: 1 }] },
            { id: 8, text: "L'idée de commencer une nouvelle journée me remplit d'angoisse.", options: [{ text: "Chaque matin", score: 5 }, { text: "Les mauvais jours", score: 3 }, { text: "Non, j'ai hâte", score: 1 }] },
            
            // Comportemental
            { id: 9, text: "Je dépends des stimulants (café, sucre) pour fonctionner.", options: [{ text: "Indispensable", score: 5 }, { text: "Modérément", score: 3 }, { text: "Pas besoin", score: 1 }] },
            { id: 10, text: "Je procrastine car ma volonté est totalement épuisée.", options: [{ text: "Exactement", score: 5 }, { text: "Parfois", score: 3 }, { text: "Je suis discipliné", score: 1 }] },
            { id: 11, text: "Mon sommeil ou mon appétit a radicalement changé.", options: [{ text: "Oui, changement majeur", score: 5 }, { text: "Léger", score: 3 }, { text: "Stable", score: 1 }] },
            { id: 12, text: "Même au repos, mon esprit s'emballe ('Wired but tired').", options: [{ text: "Toujours", score: 5 }, { text: "Parfois", score: 3 }, { text: "Je relaxe facilement", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Résultat : Vitalité Optimale", 
                desc: "<strong>[État : Zone de Haute Performance]</strong><br><br><strong>Analyse Clinique :</strong><br>Vos niveaux de cortisol et votre rythme circadien sont bien régulés. Vous faites preuve d'une grande clarté cognitive et d'une résilience émotionnelle.<br><br><strong>Recommandation :</strong><br>Maintenez votre routine. Cherchez de nouveaux défis pour canaliser votre énergie positive." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Résultat : Fatigue Transitoire", 
                desc: "<strong>[État : Épuisement Fonctionnel]</strong><br><br><strong>Analyse Clinique :</strong><br>Votre corps tient le coup, mais votre batterie psychologique se vide plus vite qu'elle ne se recharge. C'est un précurseur du stress chronique.<br><br><strong>Recommandation :</strong><br>Instaurez des 'micro-pauses'. Priorisez l'hygiène du sommeil pour éviter l'escalade." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Résultat : Épuisement Chronique", 
                desc: "<strong>[État : Le Mur du Marathon]</strong><br><br><strong>Analyse Clinique :</strong><br>Signes de dérégulation surrénalienne. Votre 'brouillard mental' indique une surcharge cognitive. Vous fonctionnez à l'adrénaline, pas à l'énergie réelle.<br><br><strong>Recommandation :</strong><br>Détox de dopamine nécessaire. Pas de caféine après midi. Le repos le week-end est une nécessité médicale." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Résultat : Burn-out Sévère", 
                desc: "<strong>[État : Alerte Effondrement Systémique]</strong><br><br><strong>Analyse Clinique :</strong><br>⚠️ <strong>Alerte Critique.</strong> Symptômes de burn-out clinique. Le détachement émotionnel est un mécanisme de défense de votre cerveau.<br><br><strong>Prescription :</strong><br>1. Repos radical (48h sans rien faire).<br>2. Consultez un professionnel de santé.<br>3. Ce n'est pas de la paresse, c'est une crise sanitaire." 
            }
        ]
    },

    // 6. 西班牙语 (Spanish) - Expert Level
    "es": {
        title: "Evaluación Clínica de Fatiga y Burnout",
        desc: "Diseñado por expertos. Evalúa tu agotamiento físico, emocional y cognitivo basado en estándares clínicos.",
        questions: [
            // Físico
            { id: 1, text: "Sin importar cuánto duerma, despierto cansado y con el cuerpo pesado.", options: [{ text: "Siempre", score: 5 }, { text: "A veces", score: 3 }, { text: "Rara vez", score: 1 }] },
            { id: 2, text: "Bajo estrés, sufro síntomas físicos inexplicables (dolor de cabeza, tensión).", options: [{ text: "Frecuentemente", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "Nunca", score: 1 }] },
            { id: 3, text: "Mi energía cae drásticamente tras un esfuerzo menor (Malestar post-esfuerzo).", options: [{ text: "Sí, recuperación lenta", score: 5 }, { text: "Me canso pero recupero", score: 3 }, { text: "No, tengo resistencia", score: 1 }] },
            
            // Cognitivo
            { id: 4, text: "Lucho diariamente contra la 'Niebla Mental' (olvidos, confusión).", options: [{ text: "Niebla densa", score: 5 }, { text: "Leve", score: 3 }, { text: "Mente clara", score: 1 }] },
            { id: 5, text: "Tomar decisiones simples (qué comer) se siente abrumador.", options: [{ text: "Sí, fatiga de decisión", score: 5 }, { text: "A veces", score: 3 }, { text: "No, decido rápido", score: 1 }] },
            
            // Emocional
            { id: 6, text: "Me siento emocionalmente desconectado de personas o actividades que amaba.", options: [{ text: "Sí, desconexión total", score: 5 }, { text: "A veces", score: 3 }, { text: "No, me siento conectado", score: 1 }] },
            { id: 7, text: "Me vuelvo irritable o cínico fácilmente, especialmente en el trabajo.", options: [{ text: "A menudo", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "Rara vez", score: 1 }] },
            { id: 8, text: "La idea de empezar un nuevo día me llena de ansiedad.", options: [{ text: "Cada mañana", score: 5 }, { text: "En días malos", score: 3 }, { text: "No, tengo ganas", score: 1 }] },
            
            // Comportamiento
            { id: 9, text: "Dependo de estimulantes (café, azúcar) para funcionar.", options: [{ text: "Indispensable", score: 5 }, { text: "Moderado", score: 3 }, { text: "No necesito", score: 1 }] },
            { id: 10, text: "Procrastino porque mi fuerza de voluntad está agotada.", options: [{ text: "Exactamente", score: 5 }, { text: "A veces", score: 3 }, { text: "Soy disciplinado", score: 1 }] },
            { id: 11, text: "Mi sueño o apetito ha cambiado drásticamente.", options: [{ text: "Sí, cambio mayor", score: 5 }, { text: "Leve", score: 3 }, { text: "Estable", score: 1 }] },
            { id: 12, text: "Incluso descansando, mi mente no para ('Wired but tired').", options: [{ text: "Siempre", score: 5 }, { text: "A veces", score: 3 }, { text: "Me relajo fácil", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Resultado: Vitalidad Óptima", 
                desc: "<strong>[Estado: Zona de Alto Rendimiento]</strong><br><br><strong>Análisis Clínico:</strong><br>Sus niveles de cortisol y ritmo circadiano están bien regulados. Muestra gran claridad cognitiva y resiliencia emocional.<br><br><strong>Recomendación:</strong><br>Mantenga su rutina. Busque nuevos desafíos para canalizar su energía positiva." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Resultado: Fatiga Transitoria", 
                desc: "<strong>[Estado: Agotamiento Funcional]</strong><br><br><strong>Análisis Clínico:</strong><br>Su cuerpo aguanta, pero su batería psicológica se agota más rápido de lo que carga. Precursor del estrés crónico.<br><br><strong>Recomendación:</strong><br>Implemente 'micro-descansos'. Priorice la higiene del sueño para evitar que empeore." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Resultado: Agotamiento Crónico", 
                desc: "<strong>[Estado: El Muro del Maratón]</strong><br><br><strong>Análisis Clínico:</strong><br>Signos de desregulación suprarrenal. Su 'niebla mental' indica sobrecarga cognitiva. Funciona con adrenalina, no con energía real.<br><br><strong>Recomendación:</strong><br>Détox de dopamina necesario. Nada de cafeína después del mediodía. El descanso el fin de semana es una necesidad médica." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Resultado: Burnout Severo", 
                desc: "<strong>[Estado: Alerta de Colapso Sistémico]</strong><br><br><strong>Análisis Clínico:</strong><br>⚠️ <strong>Alerta Crítica.</strong> Síntomas de burnout clínico. La desconexión emocional es un mecanismo de defensa de su cerebro.<br><br><strong>Prescripción:</strong><br>1. Descanso radical (48h sin hacer nada).<br>2. Busque ayuda profesional.<br>3. No es pereza, es una crisis de salud." 
            }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Expert Level
    "pt": {
        title: "Avaliação Clínica de Fadiga e Burnout",
        desc: "Desenvolvido por especialistas. Este teste avalia sua exaustão física, emocional e cognitiva com base nos padrões MBI.",
        questions: [
            // Físico
            { id: 1, text: "Não importa o quanto eu durma, acordo cansado e com o corpo pesado.", options: [{ text: "Sempre", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Raramente", score: 1 }] },
            { id: 2, text: "Sob estresse, tenho sintomas físicos inexplicáveis (dor de cabeça, tensão muscular).", options: [{ text: "Frequentemente", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "Nunca", score: 1 }] },
            { id: 3, text: "Minha energia cai drasticamente após um esforço menor (Mal-estar pós-esforço).", options: [{ text: "Sim, recuperação lenta", score: 5 }, { text: "Canso, mas recupero", score: 3 }, { text: "Não, tenho resistência", score: 1 }] },
            
            // Cognitivo
            { id: 4, text: "Luto diariamente contra o 'Nevoeiro Mental' (esquecimento, confusão).", options: [{ text: "Nevoeiro denso", score: 5 }, { text: "Leve", score: 3 }, { text: "Mente clara", score: 1 }] },
            { id: 5, text: "Tomar decisões simples (o que comer) parece exaustivo.", options: [{ text: "Sim, fadiga de decisão", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não, decido rápido", score: 1 }] },
            
            // Emocional
            { id: 6, text: "Sinto-me emocionalmente desconectado de pessoas ou atividades que amava.", options: [{ text: "Sim, desconexão total", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Não, sinto conexão", score: 1 }] },
            { id: 7, text: "Fico irritado ou cínico facilmente, especialmente no trabalho.", options: [{ text: "Frequentemente", score: 5 }, { text: "Ocasionalmente", score: 3 }, { text: "Raramente", score: 1 }] },
            { id: 8, text: "A ideia de começar um novo dia me enche de ansiedade.", options: [{ text: "Toda manhã", score: 5 }, { text: "Em dias ruins", score: 3 }, { text: "Não, fico animado", score: 1 }] },
            
            // Comportamental
            { id: 9, text: "Dependo de estimulantes (café, açúcar) para funcionar.", options: [{ text: "Indispensável", score: 5 }, { text: "Moderado", score: 3 }, { text: "Não preciso", score: 1 }] },
            { id: 10, text: "Procrastino porque minha força de vontade está esgotada.", options: [{ text: "Exatamente", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Sou disciplinado", score: 1 }] },
            { id: 11, text: "Meu sono ou apetite mudou drasticamente.", options: [{ text: "Sim, grande mudança", score: 5 }, { text: "Leve", score: 3 }, { text: "Estável", score: 1 }] },
            { id: 12, text: "Mesmo descansando, minha mente não para ('Wired but tired').", options: [{ text: "Sempre", score: 5 }, { text: "Às vezes", score: 3 }, { text: "Relaxo fácil", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Resultado: Vitalidade Ideal", 
                desc: "<strong>[Estado: Zona de Alta Performance]</strong><br><br><strong>Análise Clínica:</strong><br>Seus níveis de cortisol e ritmo circadiano estão bem regulados. Você demonstra grande clareza cognitiva e resiliência emocional.<br><br><strong>Recomendação:</strong><br>Mantenha sua rotina. Busque novos desafios para canalizar sua energia positiva." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Resultado: Fadiga Transitória", 
                desc: "<strong>[Estado: Esgotamento Funcional]</strong><br><br><strong>Análise Clínica:</strong><br>Seu corpo aguenta, mas sua bateria psicológica descarrega mais rápido do que carrega. Precursor do estresse crônico.<br><br><strong>Recomendação:</strong><br>Implemente 'micro-pausas'. Priorize a higiene do sono para evitar agravamento." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Resultado: Exaustão Crônica", 
                desc: "<strong>[Estado: O Muro da Maratona]</strong><br><br><strong>Análise Clínica:</strong><br>Sinais de desregulação adrenal. Seu 'nevoeiro mental' indica sobrecarga cognitiva. Você funciona à base de adrenalina, não de energia real.<br><br><strong>Recomendação:</strong><br>Detox de dopamina necessário. Sem cafeína após o meio-dia. O descanso no fim de semana é uma necessidade médica." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Resultado: Burnout Severo", 
                desc: "<strong>[Estado: Alerta de Colapso Sistêmico]</strong><br><br><strong>Análise Clínica:</strong><br>⚠️ <strong>Alerta Crítico.</strong> Sintomas de burnout clínico. A desconexão emocional é um mecanismo de defesa do seu cérebro.<br><br><strong>Prescrição:</strong><br>1. Descanso radical (48h sem fazer nada).<br>2. Procure ajuda profissional.<br>3. Não é preguiça, é uma crise de saúde." 
            }
        ]
    },

    // 8. 俄语 (Russian) - Expert Level
    "ru": {
        title: "Клиническая оценка усталости и выгорания",
        desc: "Разработано экспертами. Тест оценивает физическое, когнитивное и эмоциональное истощение по стандартам MBI.",
        questions: [
            // Физическое
            { id: 1, text: "Сколько бы я ни спал, я просыпаюсь разбитым и уставшим.", options: [{ text: "Всегда", score: 5 }, { text: "Иногда", score: 3 }, { text: "Редко", score: 1 }] },
            { id: 2, text: "При стрессе у меня появляются физические симптомы (головная боль, боли в мышцах).", options: [{ text: "Часто", score: 5 }, { text: "Иногда", score: 3 }, { text: "Никогда", score: 1 }] },
            { id: 3, text: "Моя энергия резко падает после малейшего усилия.", options: [{ text: "Да, долго восстанавливаюсь", score: 5 }, { text: "Устаю, но восстанавливаюсь", score: 3 }, { text: "Нет, я вынослив", score: 1 }] },
            
            // Когнитивное
            { id: 4, text: "Я ежедневно борюсь с 'мозговым туманом' (забывчивость, рассеянность).", options: [{ text: "Сильный туман", score: 5 }, { text: "Легкий", score: 3 }, { text: "Разум ясен", score: 1 }] },
            { id: 5, text: "Принятие простых решений (что поесть) кажется невыносимым.", options: [{ text: "Да, усталость от решений", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет, решаю быстро", score: 1 }] },
            
            // Эмоциональное
            { id: 6, text: "Я чувствую эмоциональное онемение или отстраненность от близких.", options: [{ text: "Полная отстраненность", score: 5 }, { text: "Иногда", score: 3 }, { text: "Нет, чувствую связь", score: 1 }] },
            { id: 7, text: "Я становлюсь раздражительным или циничным по отношению к работе/семье.", options: [{ text: "Часто", score: 5 }, { text: "Иногда", score: 3 }, { text: "Редко", score: 1 }] },
            { id: 8, text: "Мысль о начале нового дня вызывает у меня ужас.", options: [{ text: "Каждое утро", score: 5 }, { text: "В плохие дни", score: 3 }, { text: "Нет, я жду его", score: 1 }] },
            
            // Поведенческое
            { id: 9, text: "Я завишу от стимуляторов (кофе, сахар), чтобы функционировать.", options: [{ text: "Не могу без них", score: 5 }, { text: "Умеренно", score: 3 }, { text: "Не нужны", score: 1 }] },
            { id: 10, text: "Я прокрастинирую, потому что моя сила воли исчерпана.", options: [{ text: "Точно так", score: 5 }, { text: "Иногда", score: 3 }, { text: "Я дисциплинирован", score: 1 }] },
            { id: 11, text: "Мой сон или аппетит резко изменились.", options: [{ text: "Да, сильные изменения", score: 5 }, { text: "Слегка", score: 3 }, { text: "Стабильно", score: 1 }] },
            { id: 12, text: "Даже во время отдыха мой мозг не может отключиться.", options: [{ text: "Всегда напряжен", score: 5 }, { text: "Иногда", score: 3 }, { text: "Легко расслабляюсь", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Результат: Оптимальная витальность", 
                desc: "<strong>[Состояние: Зона высокой эффективности]</strong><br><br><strong>Клинический анализ:</strong><br>Ваш уровень кортизола и циркадные ритмы в норме. Вы демонстрируете высокую когнитивную ясность и эмоциональную устойчивость.<br><br><strong>Рекомендация:</strong><br>Сохраняйте текущий режим. Направьте энергию на новые вызовы." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Результат: Легкая усталость", 
                desc: "<strong>[Состояние: Функциональное истощение]</strong><br><br><strong>Клинический анализ:</strong><br>Ваше тело справляется, но психологическая батарейка садится быстрее, чем заряжается. Предвестник хронического стресса.<br><br><strong>Рекомендация:</strong><br>Внедрите 'микро-перерывы'. Соблюдайте гигиену сна во избежание ухудшения." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Результат: Хроническое истощение", 
                desc: "<strong>[Состояние: Стена марафонца]</strong><br><br><strong>Клинический анализ:</strong><br>Признаки дисрегуляции надпочечников. Ваш 'мозговой туман' указывает на когнитивную перегрузку. Вы работаете на адреналине, а не на реальной энергии.<br><br><strong>Рекомендация:</strong><br>Нужен дофаминовый детокс. Никакого кофеина после обеда. Отдых в выходные — медицинская необходимость." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Результат: Тяжелое выгорание", 
                desc: "<strong>[Состояние: Угроза системного сбоя]</strong><br><br><strong>Клинический анализ:</strong><br>⚠️ <strong>Критическая тревога.</strong> Клиническое выгорание. Эмоциональная отстраненность — это защитный механизм вашего мозга.<br><br><strong>Назначение:</strong><br>1. Радикальный отдых (48ч ничегонеделания).<br>2. Обратитесь к специалисту.<br>3. Это не лень, это кризис здоровья." 
            }
        ]
    },

    // 9. 韩语 (Korean) - Expert Level
    "ko": {
        title: "임상 피로도 및 번아웃 진단",
        desc: "30년 임상 전문가 설계. MBI 척도를 기반으로 신체적, 인지적, 정서적 고갈 상태를 정밀 분석합니다.",
        questions: [
            // 신체적 (Physical)
            { id: 1, text: "아무리 많이 자도 개운하지 않고 몸이 천근만근이다.", options: [{ text: "항상 그렇다", score: 5 }, { text: "가끔", score: 3 }, { text: "드물다", score: 1 }] },
            { id: 2, text: "스트레스를 받으면 이유 없는 신체 증상(두통, 근육통)이 나타난다.", options: [{ text: "자주", score: 5 }, { text: "가끔", score: 3 }, { text: "없다", score: 1 }] },
            { id: 3, text: "가벼운 활동 후에도 급격한 에너지 저하를 느낀다.", options: [{ text: "그렇다, 회복이 느리다", score: 5 }, { text: "피곤하지만 회복된다", score: 3 }, { text: "아니다, 체력 좋다", score: 1 }] },
            
            // 인지적 (Cognitive)
            { id: 4, text: "매일 '브레인 포그'(건망증, 집중력 저하, 멍함)에 시달린다.", options: [{ text: "심각한 안개", score: 5 }, { text: "경미함", score: 3 }, { text: "머리가 맑다", score: 1 }] },
            { id: 5, text: "사소한 결정(메뉴 고르기 등)조차 너무 힘들게 느껴진다.", options: [{ text: "그렇다, 결정 피로", score: 5 }, { text: "가끔", score: 3 }, { text: "아니다, 바로 결정", score: 1 }] },
            
            // 정서적 (Emotional)
            { id: 6, text: "소중했던 사람이나 활동에 대해 정서적으로 무감각해졌다.", options: [{ text: "완전한 단절감", score: 5 }, { text: "가끔", score: 3 }, { text: "아니다", score: 1 }] },
            { id: 7, text: "일이나 가족에게 쉽게 짜증을 내거나 냉소적으로 변했다.", options: [{ text: "자주", score: 5 }, { text: "가끔", score: 3 }, { text: "드물다", score: 1 }] },
            { id: 8, text: "새로운 하루가 시작된다는 생각만 해도 공포나 불안이 밀려온다.", options: [{ text: "매일 아침", score: 5 }, { text: "컨디션 나쁠 때", score: 3 }, { text: "아니다, 기대된다", score: 1 }] },
            
            // 행동적 (Behavioral)
            { id: 9, text: "카페인, 당분 등 자극제 없이는 일상 생활이 불가능하다.", options: [{ text: "필수적이다", score: 5 }, { text: "적당히 섭취", score: 3 }, { text: "필요 없다", score: 1 }] },
            { id: 10, text: "게을러서가 아니라, 의지력이 완전히 고갈되어 미루게 된다.", options: [{ text: "정확하다", score: 5 }, { text: "가끔", score: 3 }, { text: "규칙적이다", score: 1 }] },
            { id: 11, text: "식욕이나 수면 패턴에 급격한 변화가 생겼다.", options: [{ text: "그렇다, 큰 변화", score: 5 }, { text: "약간", score: 3 }, { text: "일정하다", score: 1 }] },
            { id: 12, text: "쉬고 있을 때도 뇌가 과열되어 멈추지 않는다 (몸은 피곤한데 정신은 각성).", options: [{ text: "항상 그렇다", score: 5 }, { text: "가끔", score: 3 }, { text: "쉽게 이완된다", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "진단 결과: 최적의 활력 (Optimal)", 
                desc: "<strong>[상태: 고효율 퍼포먼스 구간]</strong><br><br><strong>임상 분석:</strong><br>코르티솔 수치와 생체 리듬이 매우 안정적입니다. 높은 인지적 명료성과 정서적 회복탄력성을 보이고 있습니다.<br><br><strong>전문가 처방:</strong><br>현재 루틴을 유지하세요. 넘치는 에너지를 새로운 도전이나 학습에 투자하여 긍정적으로 활용하십시오." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "진단 결과: 경미한 기능성 피로 (Mild)", 
                desc: "<strong>[상태: 보상적 소모 단계]</strong><br><br><strong>임상 분석:</strong><br>기능성 피로 단계입니다. 몸은 버티고 있지만, 심리적 배터리가 충전 속도보다 빨리 닳고 있습니다. 만성 스트레스의 전조 증상입니다.<br><br><strong>전문가 처방:</strong><br>'마이크로 휴식'(매시간 5분)을 도입하세요. 수면 위생(취침 1시간 전 스크린 금지)을 철저히 지켜 악화를 막으세요." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "진단 결과: 만성 고갈 (Chronic)", 
                desc: "<strong>[상태: 부신 피로 임계점]</strong><br><br><strong>임상 분석:</strong><br>경고등이 켜졌습니다. 수면 부채 누적과 인지 과부하(브레인 포그)가 보입니다. 당신은 지금 '에너지'가 아니라 '스트레스 호르몬(아드레날린)'으로 버티고 있습니다.<br><br><strong>전문가 처방:</strong><br>도파민 디톡스가 필요합니다. 오후 12시 이후 카페인 금지. 주말 휴식은 선택이 아니라 의학적 필수 사항입니다." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "진단 결과: 심각한 번아웃 (Burnout)", 
                desc: "<strong>[상태: 시스템 붕괴 경보]</strong><br><br><strong>임상 분석:</strong><br>⚠️ <strong>위험 경보.</strong> 이것은 단순 피로가 아닌 임상적 '번아웃 증후군'입니다. 정서적 마비와 냉소는 뇌가 붕괴를 막기 위해 켜둔 방어 기제입니다.<br><br><strong>긴급 처방:</strong><br>1. <strong>강제 종료</strong>: 최소 48시간 동안 아무것도 하지 마세요.<br>2. <strong>전문가 도움</strong>: 상담이나 의학적 진단이 필요합니다.<br>3. 이것은 게으름이 아니라 건강 위기입니다." 
            }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Expert Level
    "ar": {
        title: "التقييم السريري للإرهاق والاحتراق النفسي",
        desc: "صممه خبراء. يقيم هذا الاختبار استنزافك الجسدي والمعرفي والعاطفي بناءً على معايير MBI.",
        questions: [
            { id: 1, text: "بغض النظر عن ساعات نومي، أستيقظ متعباً وجسدي ثقيل.", options: [{ text: "دائماً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "نادراً", score: 1 }] },
            { id: 2, text: "تحت الضغط، أعاني من أعراض جسدية (صداع، ألم عضلات).", options: [{ text: "بشكل متكرر", score: 5 }, { text: "أحياناً", score: 3 }, { text: "أبداً", score: 1 }] },
            { id: 3, text: "طاقتي تنخفض بشدة بعد أي مجهود بسيط.", options: [{ text: "نعم، التعافي بطيء", score: 5 }, { text: "أتعب لكن أتعافى", score: 3 }, { text: "لا، طاقتي جيدة", score: 1 }] },
            { id: 4, text: "أعاني يومياً من 'ضبابية الدماغ' (نزيان، تشتت).", options: [{ text: "ضباب كثيف", score: 5 }, { text: "خفيف", score: 3 }, { text: "ذهني صافٍ", score: 1 }] },
            { id: 5, text: "اتخاذ قرارات بسيطة (ماذا آكل) يبدو صعباً جداً.", options: [{ text: "نعم، إرهاق القرار", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا، أقرر بسرعة", score: 1 }] },
            { id: 6, text: "أشعر بالخدر العاطفي أو الانفصال عن أحبائي.", options: [{ text: "نعم، انفصال تام", score: 5 }, { text: "أحياناً", score: 3 }, { text: "لا، أشعر بالتواصل", score: 1 }] },
            { id: 7, text: "أصبح سريع الغضب أو ساخراً تجاه العمل أو العائلة.", options: [{ text: "غالباً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "نادراً", score: 1 }] },
            { id: 8, text: "فكرة بدء يوم جديد تملؤني بالرعب.", options: [{ text: "كل صباح", score: 5 }, { text: "في الأيام السيئة", score: 3 }, { text: "لا، أنا متحمس", score: 1 }] },
            { id: 9, text: "أعتمد بشدة على المنبهات (قهوة، سكر) لأعمل.", options: [{ text: "لا أعيش بدونها", score: 5 }, { text: "باعتدال", score: 3 }, { text: "لا أحتاجها", score: 1 }] },
            { id: 10, text: "أماطل لأن قوة إرادتي مستنفدة تماماً.", options: [{ text: "بالضبط", score: 5 }, { text: "أحياناً", score: 3 }, { text: "أنا منضبط", score: 1 }] },
            { id: 11, text: "تغير نمط نومي أو شهيتي بشكل جذري.", options: [{ text: "تغير كبير", score: 5 }, { text: "طفيف", score: 3 }, { text: "مستقر", score: 1 }] },
            { id: 12, text: "حتى عند الراحة، عقلي يتسابق ولا يهدأ.", options: [{ text: "دائماً", score: 5 }, { text: "أحياناً", score: 3 }, { text: "أسترخي بسهولة", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "النتيجة: حيوية مثالية", 
                desc: "<strong>[الحالة: منطقة الأداء العالي]</strong><br><br><strong>التحليل السريري:</strong><br>مستويات الكورتيزول وإيقاعك البيولوجي منتظمان. تظهر وضوحاً ذهنياً ومرونة عاطفية.<br><br><strong>التوصية:</strong><br>حافظ على روتينك. استثمر طاقتك في تحديات جديدة." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "النتيجة: تعب عابر", 
                desc: "<strong>[الحالة: استنزاف وظيفي]</strong><br><br><strong>التحليل السريري:</strong><br>جسدك يقاوم، لكن بطاريتك النفسية تفرغ أسرع مما تشحن. هذه مقدمة للإجهاد المزمن.<br><br><strong>التوصية:</strong><br>خذ 'استراحات قصيرة'. حسن جودة نومك لمنع التفاقم." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "النتيجة: إرهاق مزمن", 
                desc: "<strong>[الحالة: جدار الماراثون]</strong><br><br><strong>التحليل السريري:</strong><br>علامات خلل في الغدة الكظرية. ضبابية الدماغ تشير لحمل معرفي زائد. أنت تعمل بالأدرينالين وليس بالطاقة الحقيقية.<br><br><strong>التوصية:</strong><br>ديتوكس الدوبامين ضروري. لا كافيين بعد الظهر. راحة نهاية الأسبوع ضرورة طبية." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "النتيجة: احتراق نفسي حاد", 
                desc: "<strong>[الحالة: انهيار النظام]</strong><br><br><strong>التحليل السريري:</strong><br>⚠️ <strong>تنبيه حرج.</strong> هذا احتراق وظيفي سريري. الانفصال العاطفي هو آلية دفاع لدماغك.<br><br><strong>الوصفة:</strong><br>1. راحة تامة (48 ساعة).<br>2. طلب مساعدة مهنية.<br>3. هذا ليس كسلاً، هذه أزمة صحية." 
            }
        ]
    },

    // 11. 越南语 (Vietnamese) - Expert Level
    "vi": {
        title: "Đánh giá lâm sàng về Mệt mỏi & Kiệt sức",
        desc: "Được thiết kế bởi các chuyên gia. Bài kiểm tra này đánh giá mức độ kiệt sức về thể chất, nhận thức và cảm xúc của bạn dựa trên tiêu chuẩn MBI.",
        questions: [
            { id: 1, text: "Dù ngủ bao nhiêu, tôi vẫn thức dậy mệt mỏi và nặng nề.", options: [{ text: "Luôn luôn", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Hiếm khi", score: 1 }] },
            { id: 2, text: "Khi căng thẳng, tôi có triệu chứng vật lý (đau đầu, đau cơ).", options: [{ text: "Thường xuyên", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Không bao giờ", score: 1 }] },
            { id: 3, text: "Năng lượng tụt dốc sau một nỗ lực nhỏ.", options: [{ text: "Đúng, hồi phục lâu", score: 5 }, { text: "Mệt nhưng hồi phục", score: 3 }, { text: "Không, sức bền tốt", score: 1 }] },
            { id: 4, text: "Tôi chiến đấu với 'Sương mù não' (hay quên, mất tập trung) hàng ngày.", options: [{ text: "Rất nặng", score: 5 }, { text: "Nhẹ", score: 3 }, { text: "Đầu óc minh mẫn", score: 1 }] },
            { id: 5, text: "Đưa ra quyết định đơn giản cũng thấy quá sức.", options: [{ text: "Đúng, mệt mỏi khi quyết định", score: 5 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Không, quyết nhanh", score: 1 }] },
            { id: 6, text: "Tôi cảm thấy tê liệt cảm xúc hoặc tách biệt với mọi người.", options: [{ text: "Tách biệt hoàn toàn", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Không, vẫn kết nối", score: 1 }] },
            { id: 7, text: "Tôi dễ cáu kỉnh hoặc hoài nghi với công việc/gia đình.", options: [{ text: "Thường xuyên", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Hiếm khi", score: 1 }] },
            { id: 8, text: "Nghĩ đến ngày mới làm tôi sợ hãi.", options: [{ text: "Mỗi sáng", score: 5 }, { text: "Ngày tồi tệ", score: 3 }, { text: "Không, tôi mong chờ", score: 1 }] },
            { id: 9, text: "Tôi phụ thuộc vào chất kích thích (cà phê, đường) để hoạt động.", options: [{ text: "Không thể thiếu", score: 5 }, { text: "Vừa phải", score: 3 }, { text: "Không cần", score: 1 }] },
            { id: 10, text: "Tôi trì hoãn vì ý chí đã cạn kiệt.", options: [{ text: "Chính xác", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Tôi kỷ luật", score: 1 }] },
            { id: 11, text: "Giấc ngủ hoặc sự thèm ăn thay đổi lớn.", options: [{ text: "Thay đổi lớn", score: 5 }, { text: "Nhẹ", score: 3 }, { text: "Ổn định", score: 1 }] },
            { id: 12, text: "Ngay cả khi nghỉ ngơi, não tôi vẫn chạy đua.", options: [{ text: "Luôn luôn", score: 5 }, { text: "Đôi khi", score: 3 }, { text: "Dễ thư giãn", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Kết quả: Sức sống tối ưu", 
                desc: "<strong>[Trạng thái: Hiệu suất cao]</strong><br><br><strong>Phân tích lâm sàng:</strong><br>Mức cortisol và nhịp sinh học của bạn ổn định. Bạn có sự minh mẫn và khả năng phục hồi cảm xúc tốt.<br><br><strong>Khuyến nghị:</strong><br>Duy trì thói quen hiện tại. Thử thách bản thân với kỹ năng mới." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Kết quả: Mệt mỏi thoáng qua", 
                desc: "<strong>[Trạng thái: Suy giảm chức năng]</strong><br><br><strong>Phân tích lâm sàng:</strong><br>Cơ thể bạn vẫn chịu được, nhưng pin tâm lý đang cạn nhanh hơn sạc. Tiền đề của căng thẳng mãn tính.<br><br><strong>Khuyến nghị:</strong><br>Nghỉ ngắn 5 phút mỗi giờ. Ưu tiên giấc ngủ để ngăn chặn sự leo thang." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Kết quả: Kiệt sức mãn tính", 
                desc: "<strong>[Trạng thái: Bức tường Marathon]</strong><br><br><strong>Phân tích lâm sàng:</strong><br>Dấu hiệu rối loạn tuyến thượng thận. Sương mù não cho thấy quá tải nhận thức. Bạn đang chạy bằng adrenaline chứ không phải năng lượng thật.<br><br><strong>Khuyến nghị:</strong><br>Cần cai nghiện Dopamine. Không caffeine sau 12h trưa. Nghỉ ngơi cuối tuần là bắt buộc y tế." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Kết quả: Cháy sạch (Burnout) nghiêm trọng", 
                desc: "<strong>[Trạng thái: Cảnh báo sụp đổ hệ thống]</strong><br><br><strong>Phân tích lâm sàng:</strong><br>⚠️ <strong>Báo động đỏ.</strong> Đây là hội chứng Burnout lâm sàng. Sự tách biệt cảm xúc là cơ chế phòng vệ của não.<br><br><strong>Kê đơn:</strong><br>1. Nghỉ ngơi triệt để (48h không làm gì).<br>2. Tìm kiếm sự giúp đỡ chuyên nghiệp.<br>3. Đây không phải lười biếng, đây là khủng hoảng sức khỏe." 
            }
        ]
    },

    // 12. 泰语 (Thai) - Expert Level
    "th": {
        title: "แบบประเมินภาวะหมดไฟและความเหนื่อยล้าทางคลินิก",
        desc: "ออกแบบโดยผู้เชี่ยวชาญ ประเมินความเหนื่อยล้าทางร่างกาย ความคิด และอารมณ์ ตามมาตรฐาน MBI",
        questions: [
            { id: 1, text: "ไม่ว่าจะนอนนานแค่ไหน ฉันก็ตื่นมาไม่สดชื่นและตัวหนัก", options: [{ text: "เสมอ", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "น้อยมาก", score: 1 }] },
            { id: 2, text: "เมื่อเครียด ฉันมีอาการทางกาย (ปวดหัว, ปวดกล้ามเนื้อ) โดยไม่ทราบสาเหตุ", options: [{ text: "บ่อยครั้ง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่เคย", score: 1 }] },
            { id: 3, text: "พลังงานลดฮวบหลังใช้แรงเพียงเล็กน้อย", options: [{ text: "ใช่ ฟื้นตัวนานมาก", score: 5 }, { text: "เหนื่อยแต่ฟื้นตัวได้", score: 3 }, { text: "ไม่ ฉันอึด", score: 1 }] },
            { id: 4, text: "ฉันต่อสู้กับ 'ภาวะสมองล้า' (ขี้ลืม, สับสน) ทุกวัน", options: [{ text: "หนักมาก", score: 5 }, { text: "เล็กน้อย", score: 3 }, { text: "สมองใส", score: 1 }] },
            { id: 5, text: "การตัดสินใจง่ายๆ (กินอะไรดี) กลายเป็นเรื่องยากมาก", options: [{ text: "ใช่ ตัดสินใจไม่ถูก", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่ ตัดสินใจเร็ว", score: 1 }] },
            { id: 6, text: "ฉันรู้สึกด้านชาหรือตัดขาดจากผู้คน/กิจกรรมที่เคยชอบ", options: [{ text: "ใช่ ตัดขาดสิ้นเชิง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ไม่ ยังรู้สึกดี", score: 1 }] },
            { id: 7, text: "ฉันหงุดหงิดง่ายหรือมองโลกในแง่ร้ายต่องาน/ครอบครัว", options: [{ text: "บ่อยครั้ง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "น้อยมาก", score: 1 }] },
            { id: 8, text: "แค่คิดว่าจะเริ่มวันใหม่ก็รู้สึกกลัวหรือกังวล", options: [{ text: "ทุกเช้า", score: 5 }, { text: "วันที่แย่", score: 3 }, { text: "ไม่ ฉันรอคอย", score: 1 }] },
            { id: 9, text: "ฉันต้องพึ่งสารกระตุ้น (กาแฟ, น้ำตาล) เพื่อให้ทำงานได้", options: [{ text: "ขาดไม่ได้", score: 5 }, { text: "ปานกลาง", score: 3 }, { text: "ไม่จำเป็น", score: 1 }] },
            { id: 10, text: "ฉันผลัดวันประกันพรุ่งเพราะพลังใจหมดเกลี้ยง", options: [{ text: "ถูกต้อง", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ฉันมีวินัย", score: 1 }] },
            { id: 11, text: "การนอนหรือการกินเปลี่ยนไปอย่างมาก", options: [{ text: "เปลี่ยนมาก", score: 5 }, { text: "เล็กน้อย", score: 3 }, { text: "ปกติ", score: 1 }] },
            { id: 12, text: "แม้ตอนพัก สมองก็ยังแล่นไม่หยุด (ตัวเหนื่อยแต่หัวตื่น)", options: [{ text: "เสมอ", score: 5 }, { text: "บางครั้ง", score: 3 }, { text: "ผ่อนคลายง่าย", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "ผลลัพธ์: พลังชีวิตสมบูรณ์", 
                desc: "<strong>[สถานะ: โซนประสิทธิภาพสูง]</strong><br><br><strong>วิเคราะห์ทางคลินิก:</strong><br>ระดับคอร์ติซอลและนาฬิกาชีวิตของคุณทำงานปกติ คุณมีความชัดเจนทางความคิดและความยืดหยุ่นทางอารมณ์สูง<br><br><strong>คำแนะนำ:</strong><br>รักษากิจวัตรเดิมไว้ ลองหาความท้าทายใหม่ๆ เพื่อใช้พลังงานอย่างสร้างสรรค์" 
            },
            { 
                min: 21, 
                max: 35, 
                title: "ผลลัพธ์: เหนื่อยล้าชั่วคราว", 
                desc: "<strong>[สถานะ: เริ่มเสื่อมถอย]</strong><br><br><strong>วิเคราะห์ทางคลินิก:</strong><br>ร่างกายยังไหว แต่แบตเตอรี่ใจลดเร็วกว่าชาร์จ นี่คือสัญญาณเตือนก่อนเข้าสู่ความเครียดเรื้อรัง<br><br><strong>คำแนะนำ:</strong><br>พักเบรคสั้นๆ ทุกชั่วโมง เน้นสุขอนามัยการนอนเพื่อป้องกันไม่ให้แย่ลง" 
            },
            { 
                min: 36, 
                max: 48, 
                title: "ผลลัพธ์: อ่อนเพลียเรื้อรัง", 
                desc: "<strong>[สถานะ: กำแพงมาราธอน]</strong><br><br><strong>วิเคราะห์ทางคลินิก:</strong><br>ต่อมหมวกไตเริ่มทำงานผิดปกติ สมองล้าแสดงถึงการใช้งานเกินขีดจำกัด คุณขับเคลื่อนด้วยอะดรีนาลีนไม่ใช่พลังงานจริง<br><br><strong>คำแนะนำ:</strong><br>งดโดปามีน งดกาแฟหลังเที่ยง การพักผ่อนวันหยุดคือความจำเป็นทางการแพทย์" 
            },
            { 
                min: 49, 
                max: 60, 
                title: "ผลลัพธ์: ภาวะหมดไฟรุนแรง (Burnout)", 
                desc: "<strong>[สถานะ: ระบบล่มสลาย]</strong><br><br><strong>วิเคราะห์ทางคลินิก:</strong><br>⚠️ <strong>เตือนภัยวิกฤต.</strong> นี่คือภาวะหมดไฟทางคลินิก ความด้านชาคือกลไกป้องกันของสมอง<br><br><strong>ใบสั่งแพทย์:</strong><br>1. พักผ่อนขั้นสุด (48 ชม. ห้ามทำอะไร)<br>2. พบผู้เชี่ยวชาญ<br>3. นี่ไม่ใช่ความขี้เกียจ นี่คือวิกฤตสุขภาพ" 
            }
        ]
    },

    // 13. 印尼语 (Indonesian) - Expert Level
    "id": {
        title: "Penilaian Kelelahan & Burnout Klinis",
        desc: "Dirancang oleh ahli. Tes ini mengevaluasi kelelahan fisik, kognitif, dan emosional Anda berdasarkan standar MBI.",
        questions: [
            { id: 1, text: "Berapa lama pun saya tidur, saya bangun dengan tubuh terasa berat dan tidak segar.", options: [{ text: "Selalu", score: 5 }, { text: "Kadang", score: 3 }, { text: "Jarang", score: 1 }] },
            { id: 2, text: "Saat stres, saya mengalami gejala fisik (sakit kepala, nyeri otot).", options: [{ text: "Sering", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak pernah", score: 1 }] },
            { id: 3, text: "Energi saya turun drastis setelah usaha kecil.", options: [{ text: "Ya, pemulihan lama", score: 5 }, { text: "Lelah tapi pulih", score: 3 }, { text: "Tidak, stamina bagus", score: 1 }] },
            { id: 4, text: "Saya berjuang melawan 'Kabut Otak' (lupa, bingung) setiap hari.", options: [{ text: "Kabut tebal", score: 5 }, { text: "Ringan", score: 3 }, { text: "Pikiran jernih", score: 1 }] },
            { id: 5, text: "Membuat keputusan sederhana (makan apa) terasa sangat berat.", options: [{ text: "Ya, kelelahan keputusan", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak, putuskan cepat", score: 1 }] },
            { id: 6, text: "Saya merasa mati rasa secara emosional atau terpisah dari orang lain.", options: [{ text: "Terpisah total", score: 5 }, { text: "Kadang", score: 3 }, { text: "Tidak, terhubung", score: 1 }] },
            { id: 7, text: "Saya mudah tersinggung atau sinis terhadap pekerjaan/keluarga.", options: [{ text: "Sering", score: 5 }, { text: "Kadang", score: 3 }, { text: "Jarang", score: 1 }] },
            { id: 8, text: "Pikiran memulai hari baru membuat saya takut.", options: [{ text: "Setiap pagi", score: 5 }, { text: "Saat hari buruk", score: 3 }, { text: "Tidak, saya semangat", score: 1 }] },
            { id: 9, text: "Saya bergantung pada stimulan (kopi, gula) untuk berfungsi.", options: [{ text: "Harus ada", score: 5 }, { text: "Sedang", score: 3 }, { text: "Tidak butuh", score: 1 }] },
            { id: 10, text: "Saya menunda karena kemauan saya habis total.", options: [{ text: "Tepat", score: 5 }, { text: "Kadang", score: 3 }, { text: "Saya disiplin", score: 1 }] },
            { id: 11, text: "Pola tidur atau makan berubah drastis.", options: [{ text: "Berubah besar", score: 5 }, { text: "Sedikit", score: 3 }, { text: "Stabil", score: 1 }] },
            { id: 12, text: "Bahkan saat istirahat, pikiran saya tidak bisa berhenti.", options: [{ text: "Selalu", score: 5 }, { text: "Kadang", score: 3 }, { text: "Mudah santai", score: 1 }] }
        ],
        results: [
            { 
                min: 0, 
                max: 20, 
                title: "Hasil: Vitalitas Optimal", 
                desc: "<strong>[Status: Zona Performa Tinggi]</strong><br><br><strong>Analisis Klinis:</strong><br>Kadar kortisol dan ritme sirkadian Anda teratur. Anda menunjukkan kejernihan kognitif dan ketahanan emosional yang kuat.<br><br><strong>Rekomendasi:</strong><br>Pertahankan rutinitas. Cari tantangan baru untuk menyalurkan energi positif." 
            },
            { 
                min: 21, 
                max: 35, 
                title: "Hasil: Kelelahan Sementara", 
                desc: "<strong>[Status: Penurunan Fungsional]</strong><br><br><strong>Analisis Klinis:</strong><br>Tubuh bertahan, tapi baterai psikologis habis lebih cepat daripada diisi. Awal dari stres kronis.<br><br><strong>Rekomendasi:</strong><br>Lakukan 'istirahat mikro'. Prioritaskan kebersihan tidur untuk mencegah pemburukan." 
            },
            { 
                min: 36, 
                max: 48, 
                title: "Hasil: Kelelahan Kronis", 
                desc: "<strong>[Status: Tembok Maraton]</strong><br><br><strong>Analisis Klinis:</strong><br>Tanda disregulasi adrenal. Kabut otak menunjukkan beban kognitif berlebih. Anda berjalan dengan adrenalin, bukan energi asli.<br><br><strong>Rekomendasi:</strong><br>Detoks dopamin diperlukan. Tanpa kafein setelah siang. Istirahat akhir pekan adalah kebutuhan medis." 
            },
            { 
                min: 49, 
                max: 60, 
                title: "Hasil: Burnout Parah", 
                desc: "<strong>[Status: Peringatan Kerusakan Sistem]</strong><br><br><strong>Analisis Klinis:</strong><br>⚠️ <strong>Peringatan Kritis.</strong> Ini adalah sindrom burnout klinis. Mati rasa emosional adalah mekanisme pertahanan otak.<br><br><strong>Resep:</strong><br>1. Istirahat total (48 jam tanpa aktivitas).<br>2. Cari bantuan profesional.<br>3. Ini bukan malas, ini krisis kesehatan." 
            }
        ]
    }
};