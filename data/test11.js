// data/test11.js
// 性取向测试评估(Psychosexual Orientation Spectrum Assessment)
// 基于 Kinsey Scale (金赛量表) & Klein Grid (克莱因方格)
// 评估维度：性吸引力、情感依恋、性幻想、审美偏好

const quizDataMulti = {
    // 1. 英语 (English) - Clinical Standard
    "en": {
        title: "Psychosexual Orientation Spectrum Assessment",
        desc: "Based on the Kinsey Scale and Klein Grid. This is a non-judgmental, clinical assessment of your sexual and romantic attraction patterns to determine your location on the sexuality spectrum.",
        questions: [
            // --- Context: Sexual Attraction (Primary Drive) ---
            { id: 1, text: "When you walk down the street, who instinctively catches your eye?", options: [{ text: "Exclusively people of the opposite gender", score: 1 }, { text: "People of both genders, depending on the vibe", score: 3 }, { text: "Exclusively people of the same gender", score: 5 }] },
            { id: 2, text: "Regarding sexual fantasies (thoughts during arousal):", options: [{ text: "They almost always involve the opposite gender", score: 1 }, { text: "They involve both genders interchangeably", score: 3 }, { text: "They almost always involve the same gender", score: 5 }] },
            { id: 3, text: "If social norms and judgment did not exist, you would likely:", options: [{ text: "Still date only the opposite gender", score: 1 }, { text: "Explore relationships with both genders", score: 3 }, { text: "Date only the same gender", score: 5 }] },

            // --- Context: Emotional & Romantic Attachment ---
            { id: 4, text: "Who do you find yourself falling in love with deeply?", options: [{ text: "Opposite gender only", score: 1 }, { text: "Gender doesn't determine who I love", score: 3 }, { text: "Same gender only", score: 5 }] },
            { id: 5, text: "Think about your ideal life partner. The image in your mind is:", options: [{ text: "A person of the opposite gender", score: 1 }, { text: "Could be either, personality matters more", score: 3 }, { text: "A person of the same gender", score: 5 }] },
            { id: 6, text: "When watching romantic movies, you identify with:", options: [{ text: "The heterosexual couple dynamic", score: 1 }, { text: "The chemistry, regardless of gender", score: 3 }, { text: "The same-sex dynamic (or wishing it was)", score: 5 }] },

            // --- Context: Nuance & Experience ---
            { id: 7, text: "Have you ever felt a 'spark' with someone of the same gender?", options: [{ text: "Never, or just admiration for their style", score: 1 }, { text: "Yes, occasionally / It was confusing", score: 3 }, { text: "Yes, frequently and intensely", score: 5 }] },
            { id: 8, text: "Your history of 'crushes' (since childhood):", options: [{ text: "Always opposite gender", score: 1 }, { text: "A mix of both", score: 3 }, { text: "Mostly same gender", score: 5 }] },
            { id: 9, text: "Physical intimacy with the same gender sounds:", options: [{ text: "Unappealing or awkward", score: 1 }, { text: "Curious or potentially erotic", score: 3 }, { text: "Natural and desirable", score: 5 }] },

            // --- Context: Deep Psychology ---
            { id: 10, text: "If you were the last person on earth with one other person, who would you prefer for companionship?", options: [{ text: "Opposite gender", score: 1 }, { text: "No strong preference", score: 3 }, { text: "Same gender", score: 5 }] },
            { id: 11, text: "When you see an attractive person of the same gender, you feel:", options: [{ text: "Competitive or aesthetic appreciation", score: 1 }, { text: "A mix of admiration and attraction", score: 3 }, { text: "Physical desire", score: 5 }] },
            { id: 12, text: "Your concept of sexuality is:", options: [{ text: "Fixed and clear", score: 1 }, { text: "Fluid and evolving", score: 3 }, { text: "Fixed but different from the norm", score: 5 }] },
            { id: 13, text: "In your dreams (subconscious state):", options: [{ text: "Interactions are heterosexual", score: 1 }, { text: "Gender roles are blurred", score: 3 }, { text: "Interactions are homosexual", score: 5 }] },
            { id: 14, text: "Looking at art or photography, the human form that excites you is:", options: [{ text: "Opposite gender figures", score: 1 }, { text: "Both have their appeal", score: 3 }, { text: "Same gender figures", score: 5 }] },
            { id: 15, text: "Emotional intimacy without sex:", options: [{ text: "Easier with same gender (friendship)", score: 1 }, { text: "Intimacy often leads to attraction regardless of gender", score: 3 }, { text: "Easier with opposite gender (friendship)", score: 5 }] },
            
            // --- Context: Reaction ---
            { id: 16, text: "If a same-gender friend confessed love to you:", options: [{ text: "I would feel awkward and reject it", score: 1 }, { text: "I would consider it if the connection is deep", score: 3 }, { text: "I would be thrilled", score: 5 }] },
            { id: 17, text: "Pornography or erotica preferences:", options: [{ text: "Straight content", score: 1 }, { text: "Varied / Don't care about gender", score: 3 }, { text: "Gay/Lesbian content", score: 5 }] },
            { id: 18, text: "The idea of a same-sex relationship makes you feel:", options: [{ text: "Indifferent or Repelled", score: 1 }, { text: "Intrigued", score: 3 }, { text: "At home", score: 5 }] },
            { id: 19, text: "Your 'Gaze':", options: [{ text: "I check out the opposite gender automatically", score: 1 }, { text: "I check out whoever is hot", score: 3 }, { text: "I check out the same gender automatically", score: 5 }] },
            { id: 20, text: "Ultimately, you identify as:", options: [{ text: "Straight", score: 1 }, { text: "Open / Questioning", score: 3 }, { text: "Gay / Lesbian", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 40, 
                title: "Spectrum: Predominantly Heterosexual", 
                desc: "<strong>[Kinsey Scale: 0-1]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>Your psychosexual orientation is strongly anchored in the heterosexual spectrum. Your primary emotional, romantic, and sexual drives are directed toward the opposite gender. While you may have aesthetic appreciation for the same gender, it rarely translates into erotic desire.<br><br>" +
                      "<strong>🔍 Note:</strong> Occasional curiosity is normal, but your core drive remains 'straight'." 
            },
            { 
                min: 41, 
                max: 79, 
                title: "Spectrum: Bisexual / Fluid / Ambisexual", 
                desc: "<strong>[Kinsey Scale: 2-4]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>You occupy the middle of the spectrum. Your sexuality is fluid, flexible, and capable of spanning gender boundaries. You likely fall in love with the 'person' rather than the 'gender.' Your potential for attraction exists with both sexes, though it may fluctuate over time or lean slightly one way.<br><br>" +
                      "<strong>🔍 Note:</strong> This indicates a high level of 'Erotic Plasticity'." 
            },
            { 
                min: 80, 
                max: 100, 
                title: "Spectrum: Predominantly Homosexual", 
                desc: "<strong>[Kinsey Scale: 5-6]</strong><br><br>" +
                      "<strong>🧠 Clinical Analysis:</strong><br>Your psychosexual orientation is strongly anchored in the homosexual spectrum. Your primary emotional, romantic, and sexual drives are directed toward the same gender. Relationships with the opposite gender may feel platonic or forced, while true spark and deep connection are found with the same gender.<br><br>" +
                      "<strong>🔍 Note:</strong> This reflects a core, innate orientation." 
            }
        ]
    },

    // 2. 简体中文 (Chinese) - Clinical Standard
    "zh": {
        title: "性取向测试",
        desc: "基于金赛量表(Kinsey Scale)与克莱因方格理论。这是一项非评判性的测试，通过分析你的吸引力模式、情感依恋和潜意识幻想，定位你在性取向谱系上的真实坐标。",
        questions: [
            // 场景：性吸引力 (核心驱动)
            { id: 1, text: "当你走在街上，谁会本能地吸引你的目光？", options: [{ text: "只看异性", score: 1 }, { text: "两性都有，看气质", score: 3 }, { text: "只看同性", score: 5 }] },
            { id: 2, text: "关于性幻想（生理唤起时的念头）：", options: [{ text: "对象几乎总是异性", score: 1 }, { text: "两性交替出现", score: 3 }, { text: "对象几乎总是同性", score: 5 }] },
            { id: 3, text: "如果社会规范和舆论压力完全不存在，你会：", options: [{ text: "依然只和异性约会", score: 1 }, { text: "尝试和两性都发展关系", score: 3 }, { text: "只和同性约会", score: 5 }] },

            // 场景：情感与浪漫依恋
            { id: 4, text: "你发现自己更容易深深爱上谁？", options: [{ text: "只有异性", score: 1 }, { text: "性别不决定我爱谁", score: 3 }, { text: "只有同性", score: 5 }] },
            { id: 5, text: "想象你理想的人生伴侣，脑海中的形象是：", options: [{ text: "一个异性", score: 1 }, { text: "可能是任何人，灵魂契合更重要", score: 3 }, { text: "一个同性", score: 5 }] },
            { id: 6, text: "看爱情电影时，你更有代入感的是：", options: [{ text: "异性恋的情侣模式", score: 1 }, { text: "任何有化学反应的关系", score: 3 }, { text: "同性之间的张力（或者希望是同性）", score: 5 }] },

            // 场景：细节与经验
            { id: 7, text: "你是否曾对同性产生过“火花”或悸动？", options: [{ text: "从未，或者只是欣赏其衣品/外貌", score: 1 }, { text: "有过，偶尔/感觉很困惑", score: 3 }, { text: "经常有，且感觉强烈", score: 5 }] },
            { id: 8, text: "回顾从小到大的“暗恋”对象：", options: [{ text: "全是异性", score: 1 }, { text: "两者都有", score: 3 }, { text: "主要是同性", score: 5 }] },
            { id: 9, text: "想象与同性发生亲密肢体接触：", options: [{ text: "感到尴尬或排斥", score: 1 }, { text: "感到好奇或可能兴奋", score: 3 }, { text: "感到自然和渴望", score: 5 }] },

            // 场景：深层心理
            { id: 10, text: "如果地球上只剩你和另一个人共度余生，你希望对方是：", options: [{ text: "异性", score: 1 }, { text: "没所谓", score: 3 }, { text: "同性", score: 5 }] },
            { id: 11, text: "看到很有魅力的同性时，你的感觉是：", options: [{ text: "竞争感，或纯粹的审美欣赏", score: 1 }, { text: "一种混合了崇拜和吸引的感觉", score: 3 }, { text: "身体上的欲望", score: 5 }] },
            { id: 12, text: "你对性取向的认知是：", options: [{ text: "固定的、清晰的", score: 1 }, { text: "流动的、可能变化的", score: 3 }, { text: "固定的，但与主流不同", score: 5 }] },
            { id: 13, text: "在你的梦境（潜意识状态）中：", options: [{ text: "互动主要是异性恋模式", score: 1 }, { text: "性别界限模糊", score: 3 }, { text: "互动主要是同性恋模式", score: 5 }] },
            { id: 14, text: "欣赏艺术或摄影时，更能激发你感官的人体是：", options: [{ text: "异性身体", score: 1 }, { text: "两者都有吸引力", score: 3 }, { text: "同性身体", score: 5 }] },
            { id: 15, text: "关于“纯友谊”的界限：", options: [{ text: "同性之间更容易纯友谊", score: 1 }, { text: "只要亲密了，不管性别都可能有感觉", score: 3 }, { text: "异性之间更容易纯友谊", score: 5 }] },

            // 场景：反应测试
            { id: 16, text: "如果一个同性好友向你表白：", options: [{ text: "我会感到尴尬并拒绝", score: 1 }, { text: "如果感情深，我会考虑", score: 3 }, { text: "我会感到兴奋/惊喜", score: 5 }] },
            { id: 17, text: "色情内容偏好：", options: [{ text: "异性向", score: 1 }, { text: "多样的/不太在意性别组合", score: 3 }, { text: "同性向", score: 5 }] },
            { id: 18, text: "“拥有一段同性关系”这个想法让你觉得：", options: [{ text: "无感或抗拒", score: 1 }, { text: "有点意思/想探索", score: 3 }, { text: "像回到了家", score: 5 }] },
            { id: 19, text: "你的“凝视”本能：", options: [{ text: "自动扫描异性", score: 1 }, { text: "扫描所有好看的人", score: 3 }, { text: "自动扫描同性", score: 5 }] },
            { id: 20, text: "最终，你目前的自我认同倾向是：", options: [{ text: "直的 (Straight)", score: 1 }, { text: "开放的 / 探索中", score: 3 }, { text: "弯的 (Gay/Lesbian)", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 40, 
                title: "谱系定位：异性恋主导 (Heterosexual Dominant)", 
                desc: "<strong>【金赛量表：0-1级】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你的心理性取向稳固地锚定在异性恋谱系中。你的情感、浪漫幻想及生理冲动主要指向异性。虽然你可能对同性有审美上的欣赏或深厚的友谊，但这很少转化为性吸引力。<br><br>" +
                      "<strong>🔍 专家注：</strong>对同性的偶尔欣赏是正常的，但这并不改变你的核心取向。" 
            },
            { 
                min: 41, 
                max: 79, 
                title: "谱系定位：双性恋 / 流动 / 泛性恋 (Bisexual Spectrum)", 
                desc: "<strong>【金赛量表：2-4级】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你处于谱系的中间地带。你的性取向具有流动性和灵活性，能够跨越性别的界限。你更倾向于爱上“具体的人”而非“特定的性别”。你对两性都保留着发生吸引力的潜能，尽管这种偏好可能随时间波动。<br><br>" +
                      "<strong>🔍 专家注：</strong>这显示了极高的“情欲可塑性 (Erotic Plasticity)”。" 
            },
            { 
                min: 80, 
                max: 100, 
                title: "谱系定位：同性恋主导 (Homosexual Dominant)", 
                desc: "<strong>【金赛量表：5-6级】</strong><br><br>" +
                      "<strong>🧠 临床解析：</strong><br>你的心理性取向稳固地锚定在同性恋谱系中。你的情感共鸣、浪漫幻想及生理冲动主要指向同性。与异性的关系可能止步于友谊，而真正的火花、深层的连接感与归属感，只在同性关系中出现。<br><br>" +
                      "<strong>🔍 专家注：</strong>这反映了你内在核心的、天生的取向。" 
            }
        ]
    },

// 3. 德语 (German) - Clinical Standard
    "de": {
        title: "Psychosexuelles Orientierungsspektrum",
        desc: "Basierend auf der Kinsey-Skala und dem Klein-Raster. Eine wertfreie, klinische Bewertung Ihrer sexuellen und romantischen Anziehungsmuster zur Bestimmung Ihrer Position im Sexualitätsspektrum.",
        questions: [
            // Anziehung
            { id: 1, text: "Wer fällt Ihnen auf der Straße instinktiv auf?", options: [{ text: "Ausschließlich das andere Geschlecht", score: 1 }, { text: "Beide Geschlechter, je nach Ausstrahlung", score: 3 }, { text: "Ausschließlich das gleiche Geschlecht", score: 5 }] },
            { id: 2, text: "Sexuelle Fantasien (Gedanken bei Erregung):", options: [{ text: "Fast immer das andere Geschlecht", score: 1 }, { text: "Wechselnd beide Geschlechter", score: 3 }, { text: "Fast immer das gleiche Geschlecht", score: 5 }] },
            { id: 3, text: "Ohne gesellschaftliche Normen würden Sie:", options: [{ text: "Nur das andere Geschlecht daten", score: 1 }, { text: "Beziehungen mit beiden erkunden", score: 3 }, { text: "Nur das gleiche Geschlecht daten", score: 5 }] },

            // Emotionale Bindung
            { id: 4, text: "In wen verlieben Sie sich tief?", options: [{ text: "Nur in das andere Geschlecht", score: 1 }, { text: "Geschlecht ist zweitrangig", score: 3 }, { text: "Nur in das gleiche Geschlecht", score: 5 }] },
            { id: 5, text: "Ihr idealer Lebenspartner (mentales Bild):", options: [{ text: "Person des anderen Geschlechts", score: 1 }, { text: "Egal, Persönlichkeit zählt", score: 3 }, { text: "Person des gleichen Geschlechts", score: 5 }] },
            { id: 6, text: "Identifikation in Liebesfilmen:", options: [{ text: "Das heterosexuelle Paar", score: 1 }, { text: "Die Chemie, egal welches Geschlecht", score: 3 }, { text: "Die gleichgeschlechtliche Dynamik", score: 5 }] },

            // Erfahrung
            { id: 7, text: "Haben Sie je einen 'Funken' beim gleichen Geschlecht gespürt?", options: [{ text: "Nie, oder nur Bewunderung für Stil", score: 1 }, { text: "Ja, gelegentlich / verwirrend", score: 3 }, { text: "Ja, häufig und intensiv", score: 5 }] },
            { id: 8, text: "Verlauf Ihrer Schwärmereien (Crushes):", options: [{ text: "Immer das andere Geschlecht", score: 1 }, { text: "Eine Mischung aus beidem", score: 3 }, { text: "Meist das gleiche Geschlecht", score: 5 }] },
            { id: 9, text: "Körperliche Intimität mit dem gleichen Geschlecht:", options: [{ text: "Unangenehm oder seltsam", score: 1 }, { text: "Neugierig oder potenziell erotisch", score: 3 }, { text: "Natürlich und wünschenswert", score: 5 }] },

            // Tiefenpsychologie
            { id: 10, text: "Als letzte Person auf Erden, wen wollen Sie bei sich?", options: [{ text: "Anderes Geschlecht", score: 1 }, { text: "Keine starke Präferenz", score: 3 }, { text: "Gleiches Geschlecht", score: 5 }] },
            { id: 11, text: "Attraktive Person des gleichen Geschlechts sehen:", options: [{ text: "Konkurrenzdenken oder Ästhetik", score: 1 }, { text: "Mischung aus Bewunderung & Reiz", score: 3 }, { text: "Körperliches Verlangen", score: 5 }] },
            { id: 12, text: "Ihr Konzept von Sexualität:", options: [{ text: "Fest und klar", score: 1 }, { text: "Fließend und sich entwickelnd", score: 3 }, { text: "Fest, aber anders als die Norm", score: 5 }] },
            { id: 13, text: "In Ihren Träumen (Unterbewusstsein):", options: [{ text: "Interaktionen sind heterosexuell", score: 1 }, { text: "Geschlechterrollen verschwimmen", score: 3 }, { text: "Interaktionen sind homosexuell", score: 5 }] },
            { id: 14, text: "Kunst/Fotografie, die Sie erregt:", options: [{ text: "Figuren des anderen Geschlechts", score: 1 }, { text: "Beide haben ihren Reiz", score: 3 }, { text: "Figuren des gleichen Geschlechts", score: 5 }] },
            { id: 15, text: "Emotionale Intimität ohne Sex:", options: [{ text: "Einfacher mit gleichem Geschlecht", score: 1 }, { text: "Führt oft zu Anziehung (egal wer)", score: 3 }, { text: "Einfacher mit anderem Geschlecht", score: 5 }] },

            // Reaktion
            { id: 16, text: "Ein Freund des gleichen Geschlechts gesteht Liebe:", options: [{ text: "Unangenehm, ich lehne ab", score: 1 }, { text: "Ich würde es in Erwägung ziehen", score: 3 }, { text: "Ich wäre begeistert", score: 5 }] },
            { id: 17, text: "Präferenz bei Erotik/Pornografie:", options: [{ text: "Heterosexueller Inhalt", score: 1 }, { text: "Vielfältig / Egal", score: 3 }, { text: "Homosexueller Inhalt", score: 5 }] },
            { id: 18, text: "Die Idee einer gleichgeschlechtlichen Beziehung:", options: [{ text: "Gleichgültig oder abstoßend", score: 1 }, { text: "Faszinierend", score: 3 }, { text: "Fühlt sich wie Zuhause an", score: 5 }] },
            { id: 19, text: "Ihr 'Blick' (Check-out):", options: [{ text: "Scanne automatisch das andere Geschlecht", score: 1 }, { text: "Scanne jeden, der heiß ist", score: 3 }, { text: "Scanne automatisch das gleiche Geschlecht", score: 5 }] },
            { id: 20, text: "Letztendlich identifizieren Sie sich als:", options: [{ text: "Hetero (Straight)", score: 1 }, { text: "Offen / Fragend", score: 3 }, { text: "Homosexuell (Gay/Lesbian)", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 40, 
                title: "Spektrum: Überwiegend Heterosexuell", 
                desc: "<strong>[Kinsey-Skala: 0-1]</strong><br>Ihre psychosexuelle Orientierung ist fest im heterosexuellen Spektrum verankert. Romantische und sexuelle Antriebe richten sich primär auf das andere Geschlecht." 
            },
            { 
                min: 41, 
                max: 79, 
                title: "Spektrum: Bisexuell / Fluid / Ambisexuell", 
                desc: "<strong>[Kinsey-Skala: 2-4]</strong><br>Sie befinden sich in der Mitte des Spektrums. Ihre Sexualität ist fließend. Sie verlieben sich eher in die 'Person' als in das 'Geschlecht'." 
            },
            { 
                min: 80, 
                max: 100, 
                title: "Spektrum: Überwiegend Homosexuell", 
                desc: "<strong>[Kinsey-Skala: 5-6]</strong><br>Ihre Orientierung ist fest im homosexuellen Spektrum verankert. Tiefe emotionale und körperliche Resonanz finden Sie primär beim gleichen Geschlecht." 
            }
        ]
    },

    // 4. 日语 (Japanese) - Clinical Standard
    "ja": {
        title: "心理的性的指向スペクトラム診断",
        desc: "キンゼイ指標とクライン格子に基づく。これは、あなたの性的魅力、感情的愛着、潜在意識を分析し、セクシュアリティのスペクトラム上の位置を特定する臨床的な評価です。",
        questions: [
            // 性的魅力
            { id: 1, text: "街を歩いている時、本能的に目がいくのは？", options: [{ text: "異性のみ", score: 1 }, { text: "雰囲気次第で両方", score: 3 }, { text: "同性のみ", score: 5 }] },
            { id: 2, text: "性的ファンタジー（興奮時の思考）について：", options: [{ text: "ほぼ常に異性が対象", score: 1 }, { text: "両性が交互に現れる", score: 3 }, { text: "ほぼ常に同性が対象", score: 5 }] },
            { id: 3, text: "もし社会規範や偏見が一切なかったら：", options: [{ text: "それでも異性と付き合う", score: 1 }, { text: "両方との関係を探る", score: 3 }, { text: "同性とだけ付き合う", score: 5 }] },

            // 感情とロマンス
            { id: 4, text: "深く恋に落ちるのは誰に対して？", options: [{ text: "異性のみ", score: 1 }, { text: "性別は関係ない", score: 3 }, { text: "同性のみ", score: 5 }] },
            { id: 5, text: "理想の人生のパートナーを思い浮かべると：", options: [{ text: "異性の姿", score: 1 }, { text: "どちらでもあり得る", score: 3 }, { text: "同性の姿", score: 5 }] },
            { id: 6, text: "恋愛映画で感情移入するのは：", options: [{ text: "異性愛カップルの力学", score: 1 }, { text: "性別関係なく二人の相性", score: 3 }, { text: "同性愛的な力学（またはそう願う）", score: 5 }] },

            // 経験とニュアンス
            { id: 7, text: "同性に「ときめき」を感じたことは？", options: [{ text: "ない（服装への憧れ程度）", score: 1 }, { text: "ある（たまに/混乱した）", score: 3 }, { text: "ある（頻繁に、強く）", score: 5 }] },
            { id: 8, text: "子供の頃からの「好きな人」の履歴：", options: [{ text: "常に異性", score: 1 }, { text: "両方が混在", score: 3 }, { text: "主に同性", score: 5 }] },
            { id: 9, text: "同性との身体的接触を想像すると：", options: [{ text: "気まずい、魅力を感じない", score: 1 }, { text: "好奇心がある、官能的かも", score: 3 }, { text: "自然的で望ましい", score: 5 }] },

            // 深層心理
            { id: 10, text: "地球上に二人きりになるとしたら相手は：", options: [{ text: "異性", score: 1 }, { text: "こだわりはない", score: 3 }, { text: "同性", score: 5 }] },
            { id: 11, text: "魅力的な同性を見た時の感情：", options: [{ text: "対抗心、または美的鑑賞", score: 1 }, { text: "憧れと魅力が混ざった感じ", score: 3 }, { text: "身体的な欲望", score: 5 }] },
            { id: 12, text: "自身のセクシュアリティの概念：", options: [{ text: "固定的で明確", score: 1 }, { text: "流動的で変化しうる", score: 3 }, { text: "固定的だが主流とは違う", score: 5 }] },
            { id: 13, text: "夢の中（無意識）での交流は：", options: [{ text: "異性愛的な交流", score: 1 }, { text: "性別の境界が曖昧", score: 3 }, { text: "同性愛的な交流", score: 5 }] },
            { id: 14, text: "アートや写真で興奮する人体は：", options: [{ text: "異性の体", score: 1 }, { text: "両方に魅力を感じる", score: 3 }, { text: "同性の体", score: 5 }] },
            { id: 15, text: "セックス抜きの感情的な親密さ：", options: [{ text: "同性の方が楽（友情）", score: 1 }, { text: "親密さが性愛に発展しがち", score: 3 }, { text: "異性の方が楽（友情）", score: 5 }] },

            // 反応
            { id: 16, text: "同性の友人に告白されたら：", options: [{ text: "気まずく感じて断る", score: 1 }, { text: "絆が深ければ検討する", score: 3 }, { text: "とても嬉しい/興奮する", score: 5 }] },
            { id: 17, text: "アダルトコンテンツの好み：", options: [{ text: "異性愛もの", score: 1 }, { text: "多様/性別は気にしない", score: 3 }, { text: "同性愛もの", score: 5 }] },
            { id: 18, text: "「同性と付き合う」という考え：", options: [{ text: "無関心または拒否感", score: 1 }, { text: "興味をそそられる", score: 3 }, { text: "安心感を覚える", score: 5 }] },
            { id: 19, text: "あなたの「視線」の習性：", options: [{ text: "自動的に異性を目で追う", score: 1 }, { text: "素敵な人は誰でも目で追う", score: 3 }, { text: "自動的に同性を目で追う", score: 5 }] },
            { id: 20, text: "最終的に、現在の自己認識は：", options: [{ text: "ストレート（異性愛）", score: 1 }, { text: "オープン / 模索中", score: 3 }, { text: "ゲイ / レズビアン", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 40, 
                title: "スペクトラム：主に異性愛 (Heterosexual Dominant)", 
                desc: "<strong>【キンゼイ指標：0-1】</strong><br>あなたの心理的性的指向は異性愛スペクトラムに強く固定されています。感情的、ロマンティック、性的衝動は主に異性に向けられます。" 
            },
            { 
                min: 41, 
                max: 79, 
                title: "スペクトラム：バイセクシュアル / 流動的 (Fluid)", 
                desc: "<strong>【キンゼイ指標：2-4】</strong><br>あなたはスペクトラムの中間に位置します。セクシュアリティは流動的で柔軟です。「性別」ではなく「その人自身」に恋をする傾向があります。" 
            },
            { 
                min: 80, 
                max: 100, 
                title: "スペクトラム：主に同性愛 (Homosexual Dominant)", 
                desc: "<strong>【キンゼイ指標：5-6】</strong><br>あなたの指向は同性愛スペクトラムに強く固定されています。異性との関係はプラトニックに留まることが多く、真の火花や深い繋がりは同性との間に生まれます。" 
            }
        ]
    },

    // 5. 法语 (French) - Clinical Standard
    "fr": {
        title: "Évaluation du Spectre Psychosexuel",
        desc: "Basé sur l'échelle de Kinsey. Une évaluation clinique neutre de vos modèles d'attraction pour déterminer votre position sur le spectre de la sexualité.",
        questions: [
            // Attraction
            { id: 1, text: "Dans la rue, qui attire instinctivement votre regard ?", options: [{ text: "Le sexe opposé uniquement", score: 1 }, { text: "Les deux, selon l'ambiance", score: 3 }, { text: "Le même sexe uniquement", score: 5 }] },
            { id: 2, text: "Vos fantasmes sexuels impliquent :", options: [{ text: "Le sexe opposé", score: 1 }, { text: "Les deux sexes", score: 3 }, { text: "Le même sexe", score: 5 }] },
            { id: 3, text: "Sans normes sociales, vous seriez :", options: [{ text: "Toujours avec le sexe opposé", score: 1 }, { text: "Ouvert aux deux", score: 3 }, { text: "Avec le même sexe", score: 5 }] },

            // Attachement
            { id: 4, text: "De qui tombez-vous profondément amoureux ?", options: [{ text: "Sexe opposé", score: 1 }, { text: "La personne, pas le genre", score: 3 }, { text: "Même sexe", score: 5 }] },
            { id: 5, text: "Votre partenaire de vie idéal (image mentale) :", options: [{ text: "Une personne du sexe opposé", score: 1 }, { text: "Peu importe", score: 3 }, { text: "Une personne du même sexe", score: 5 }] },
            { id: 6, text: "Identification dans les films romantiques :", options: [{ text: "Le couple hétéro", score: 1 }, { text: "L'alchimie", score: 3 }, { text: "La dynamique gay/lesbienne", score: 5 }] },

            // Expérience
            { id: 7, text: "Avez-vous ressenti une 'étincelle' pour le même sexe ?", options: [{ text: "Jamais", score: 1 }, { text: "Parfois / Confus", score: 3 }, { text: "Souvent et intensément", score: 5 }] },
            { id: 8, text: "Historique de vos coups de cœur :", options: [{ text: "Toujours sexe opposé", score: 1 }, { text: "Mixte", score: 3 }, { text: "Surtout même sexe", score: 5 }] },
            { id: 9, text: "L'intimité physique avec le même sexe :", options: [{ text: "Bizarre / Pas attirant", score: 1 }, { text: "Curieux / Potentiellement érotique", score: 3 }, { text: "Naturel et désirable", score: 5 }] },

            // Psychologie
            { id: 10, text: "Dernière personne sur terre avec vous :", options: [{ text: "Sexe opposé", score: 1 }, { text: "Pas de préférence", score: 3 }, { text: "Même sexe", score: 5 }] },
            { id: 11, text: "Face à une personne séduisante du même sexe :", options: [{ text: "Compétition ou esthétique", score: 1 }, { text: "Mélange admiration/attirance", score: 3 }, { text: "Désir physique", score: 5 }] },
            { id: 12, text: "Votre concept de sexualité :", options: [{ text: "Fixe et clair", score: 1 }, { text: "Fluide", score: 3 }, { text: "Fixe mais différent", score: 5 }] },
            { id: 13, text: "Dans vos rêves :", options: [{ text: "Interactions hétéro", score: 1 }, { text: "Genre flou", score: 3 }, { text: "Interactions homo", score: 5 }] },
            { id: 14, text: "L'art/nu qui vous excite :", options: [{ text: "Corps du sexe opposé", score: 1 }, { text: "Les deux", score: 3 }, { text: "Corps du même sexe", score: 5 }] },
            { id: 15, text: "Intimité émotionnelle sans sexe :", options: [{ text: "Plus facile avec même sexe (amitié)", score: 1 }, { text: "Mène souvent à l'attirance", score: 3 }, { text: "Plus facile avec sexe opposé", score: 5 }] },

            // Réaction
            { id: 16, text: "Déclaration d'amour d'un ami du même sexe :", options: [{ text: "Malaise, refus", score: 1 }, { text: "Je considérerais", score: 3 }, { text: "Je serais ravi", score: 5 }] },
            { id: 17, text: "Préférences porno/érotiques :", options: [{ text: "Hétéro", score: 1 }, { text: "Varié", score: 3 }, { text: "Gay/Lesbien", score: 5 }] },
            { id: 18, text: "L'idée d'une relation homosexuelle :", options: [{ text: "Indifférent ou repoussant", score: 1 }, { text: "Intriguant", score: 3 }, { text: "Comme à la maison", score: 5 }] },
            { id: 19, text: "Votre regard :", options: [{ text: "Je scanne le sexe opposé", score: 1 }, { text: "Je scanne les beaux gens", score: 3 }, { text: "Je scanne le même sexe", score: 5 }] },
            { id: 20, text: "Identité actuelle :", options: [{ text: "Hétéro (Straight)", score: 1 }, { text: "Ouvert / En questionnement", score: 3 }, { text: "Homosexuel (Gay/Lesbien)", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 40, 
                title: "Spectre : Principalement Hétérosexuel", 
                desc: "<strong>[Échelle Kinsey : 0-1]</strong><br>Votre orientation est ancrée dans le spectre hétérosexuel. Vos pulsions sont dirigées vers le sexe opposé." 
            },
            { 
                min: 41, 
                max: 79, 
                title: "Spectre : Bisexuel / Fluide", 
                desc: "<strong>[Échelle Kinsey : 2-4]</strong><br>Vous êtes au milieu du spectre. Votre sexualité est flexible. Vous aimez la personne plus que le genre." 
            },
            { 
                min: 80, 
                max: 100, 
                title: "Spectre : Principalement Homosexuel", 
                desc: "<strong>[Échelle Kinsey : 5-6]</strong><br>Votre orientation est ancrée dans le spectre homosexuel. La vraie connexion se trouve avec le même sexe." 
            }
        ]
    },

    // 6. 西班牙语 (Spanish) - Clinical Standard
    "es": {
        title: "Evaluación del Espectro Psicosexual",
        desc: "Basado en la Escala Kinsey. Una evaluación clínica sin prejuicios de tus patrones de atracción para ubicarte en el espectro de la sexualidad.",
        questions: [
            // Atracción
            { id: 1, text: "En la calle, ¿quién capta tu mirada instintivamente?", options: [{ text: "Solo el sexo opuesto", score: 1 }, { text: "Ambos, depende del aura", score: 3 }, { text: "Solo el mismo sexo", score: 5 }] },
            { id: 2, text: "Tus fantasías sexuales:", options: [{ text: "Casi siempre sexo opuesto", score: 1 }, { text: "Intercambiables", score: 3 }, { text: "Casi siempre mismo sexo", score: 5 }] },
            { id: 3, text: "Sin normas sociales, tú:", options: [{ text: "Saldrías solo con sexo opuesto", score: 1 }, { text: "Explorarías ambos", score: 3 }, { text: "Saldrías solo con mismo sexo", score: 5 }] },

            // Apego
            { id: 4, text: "¿De quién te enamoras profundamente?", options: [{ text: "Solo sexo opuesto", score: 1 }, { text: "El género no importa", score: 3 }, { text: "Solo mismo sexo", score: 5 }] },
            { id: 5, text: "Tu pareja ideal (imagen mental):", options: [{ text: "Persona del sexo opuesto", score: 1 }, { text: "Cualquiera", score: 3 }, { text: "Persona del mismo sexo", score: 5 }] },
            { id: 6, text: "Te identificas en películas con:", options: [{ text: "La pareja hetero", score: 1 }, { text: "La química", score: 3 }, { text: "La dinámica gay/lésbica", score: 5 }] },

            // Experiencia
            { id: 7, text: "¿Has sentido 'chispas' con el mismo sexo?", options: [{ text: "Nunca", score: 1 }, { text: "A veces / Confuso", score: 3 }, { text: "Frecuentemente", score: 5 }] },
            { id: 8, text: "Historial de amores platónicos:", options: [{ text: "Siempre sexo opuesto", score: 1 }, { text: "Mezcla", score: 3 }, { text: "Mayoría mismo sexo", score: 5 }] },
            { id: 9, text: "Intimidad física con el mismo sexo:", options: [{ text: "Incómodo", score: 1 }, { text: "Curioso", score: 3 }, { text: "Natural y deseable", score: 5 }] },

            // Psicología
            { id: 10, text: "Última persona en la tierra contigo:", options: [{ text: "Sexo opuesto", score: 1 }, { text: "Indiferente", score: 3 }, { text: "Mismo sexo", score: 5 }] },
            { id: 11, text: "Al ver a alguien atractivo del mismo sexo:", options: [{ text: "Competencia o estética", score: 1 }, { text: "Admiración y atracción", score: 3 }, { text: "Deseo físico", score: 5 }] },
            { id: 12, text: "Tu concepto de sexualidad:", options: [{ text: "Fijo y claro", score: 1 }, { text: "Fluido", score: 3 }, { text: "Fijo pero diferente", score: 5 }] },
            { id: 13, text: "En tus sueños:", options: [{ text: "Interacción hetero", score: 1 }, { text: "Género borroso", score: 3 }, { text: "Interacción homo", score: 5 }] },
            { id: 14, text: "Arte/Desnudos que te excitan:", options: [{ text: "Cuerpos opuestos", score: 1 }, { text: "Ambos", score: 3 }, { text: "Cuerpos del mismo sexo", score: 5 }] },
            { id: 15, text: "Intimidad emocional sin sexo:", options: [{ text: "Fácil con mismo sexo (amistad)", score: 1 }, { text: "Lleva a atracción", score: 3 }, { text: "Fácil con sexo opuesto", score: 5 }] },

            // Reacción
            { id: 16, text: "Declaración de amor de amigo del mismo sexo:", options: [{ text: "Rechazo incómodo", score: 1 }, { text: "Lo consideraría", score: 3 }, { text: "Me encantaría", score: 5 }] },
            { id: 17, text: "Preferencia porno/erótica:", options: [{ text: "Hetero", score: 1 }, { text: "Variado", score: 3 }, { text: "Gay/Lésbico", score: 5 }] },
            { id: 18, text: "Idea de una relación homosexual:", options: [{ text: "Indiferente o rechazo", score: 1 }, { text: "Intrigante", score: 3 }, { text: "Como en casa", score: 5 }] },
            { id: 19, text: "Tu mirada:", options: [{ text: "Escaneo sexo opuesto", score: 1 }, { text: "Escaneo gente guapa", score: 3 }, { text: "Escaneo mismo sexo", score: 5 }] },
            { id: 20, text: "Identidad actual:", options: [{ text: "Hetero (Straight)", score: 1 }, { text: "Abierto / Cuestionando", score: 3 }, { text: "Homosexual (Gay/Lesbian)", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 40, 
                title: "Espectro: Predominantemente Heterosexual", 
                desc: "<strong>[Escala Kinsey: 0-1]</strong><br>Tu orientación está anclada en el espectro heterosexual. Tus impulsos primarios van hacia el sexo opuesto." 
            },
            { 
                min: 41, 
                max: 79, 
                title: "Espectro: Bisexual / Fluido", 
                desc: "<strong>[Escala Kinsey: 2-4]</strong><br>Estás en el medio del espectro. Tu sexualidad es flexible. Te enamoras de la persona, no del género." 
            },
            { 
                min: 80, 
                max: 100, 
                title: "Espectro: Predominantemente Homosexual", 
                desc: "<strong>[Escala Kinsey: 5-6]</strong><br>Tu orientación está anclada en el espectro homosexual. La conexión real y profunda la encuentras con el mismo sexo." 
            }
        ]
    },

// 7. 葡萄牙语 (Portuguese) - Clinical Standard
    "pt": {
        title: "Avaliação do Espectro Psicossexual",
        desc: "Baseado na Escala Kinsey e Grade de Klein. Uma avaliação clínica e sem julgamentos dos seus padrões de atração para determinar sua localização no espectro da sexualidade.",
        questions: [
            // Atração
            { id: 1, text: "Na rua, quem instintivamente chama sua atenção?", options: [{ text: "Apenas o sexo oposto", score: 1 }, { text: "Ambos, depende da vibe", score: 3 }, { text: "Apenas o mesmo sexo", score: 5 }] },
            { id: 2, text: "Suas fantasias sexuais envolvem:", options: [{ text: "Quase sempre o sexo oposto", score: 1 }, { text: "Ambos os gêneros", score: 3 }, { text: "Quase sempre o mesmo sexo", score: 5 }] },
            { id: 3, text: "Sem normas sociais, você:", options: [{ text: "Namoraria apenas o sexo oposto", score: 1 }, { text: "Exploraria com ambos", score: 3 }, { text: "Namoraria apenas o mesmo sexo", score: 5 }] },

            // Apego
            { id: 4, text: "Por quem você se apaixona profundamente?", options: [{ text: "Apenas sexo oposto", score: 1 }, { text: "A pessoa, não o gênero", score: 3 }, { text: "Apenas o mesmo sexo", score: 5 }] },
            { id: 5, text: "Seu parceiro ideal (imagem mental):", options: [{ text: "Pessoa do sexo oposto", score: 1 }, { text: "Indiferente", score: 3 }, { text: "Pessoa do mesmo sexo", score: 5 }] },
            { id: 6, text: "Identificação em filmes românticos:", options: [{ text: "O casal hétero", score: 1 }, { text: "A química entre eles", score: 3 }, { text: "A dinâmica gay/lésbica", score: 5 }] },

            // Experiência
            { id: 7, text: "Já sentiu uma 'faísca' pelo mesmo sexo?", options: [{ text: "Nunca", score: 1 }, { text: "Às vezes / Confuso", score: 3 }, { text: "Frequentemente", score: 5 }] },
            { id: 8, text: "Histórico de paixonites (crushes):", options: [{ text: "Sempre sexo oposto", score: 1 }, { text: "Misto", score: 3 }, { text: "Maioria mesmo sexo", score: 5 }] },
            { id: 9, text: "Intimidade física com o mesmo sexo:", options: [{ text: "Estranho / Sem apelo", score: 1 }, { text: "Curioso / Potencialmente erótico", score: 3 }, { text: "Natural e desejável", score: 5 }] },

            // Psicologia
            { id: 10, text: "Última pessoa na terra com você:", options: [{ text: "Sexo oposto", score: 1 }, { text: "Tanto faz", score: 3 }, { text: "Mesmo sexo", score: 5 }] },
            { id: 11, text: "Ao ver alguém atraente do mesmo sexo:", options: [{ text: "Competição ou estética", score: 1 }, { text: "Admiração e atração misturadas", score: 3 }, { text: "Desejo físico", score: 5 }] },
            { id: 12, text: "Seu conceito de sexualidade:", options: [{ text: "Fixo e claro", score: 1 }, { text: "Fluido", score: 3 }, { text: "Fixo, mas diferente", score: 5 }] },
            { id: 13, text: "Em seus sonhos:", options: [{ text: "Interações hétero", score: 1 }, { text: "Gênero borrado", score: 3 }, { text: "Interações homo", score: 5 }] },
            { id: 14, text: "Arte/Nudez que te excita:", options: [{ text: "Corpos opostos", score: 1 }, { text: "Ambos", score: 3 }, { text: "Corpos do mesmo sexo", score: 5 }] },
            { id: 15, text: "Intimidade emocional sem sexo:", options: [{ text: "Mais fácil com mesmo sexo (amizade)", score: 1 }, { text: "Leva à atração", score: 3 }, { text: "Mais fácil com sexo oposto", score: 5 }] },

            // Reação
            { id: 16, text: "Declaração de amor de amigo do mesmo sexo:", options: [{ text: "Rejeição desconfortável", score: 1 }, { text: "Consideraria", score: 3 }, { text: "Adoraria", score: 5 }] },
            { id: 17, text: "Preferência pornô/erótica:", options: [{ text: "Hétero", score: 1 }, { text: "Variado", score: 3 }, { text: "Gay/Lésbico", score: 5 }] },
            { id: 18, text: "Ideia de um relacionamento homossexual:", options: [{ text: "Indiferente ou repulsa", score: 1 }, { text: "Intrigante", score: 3 }, { text: "Como estar em casa", score: 5 }] },
            { id: 19, text: "Seu olhar (check-out):", options: [{ text: "Escaneio sexo oposto", score: 1 }, { text: "Escaneio gente bonita", score: 3 }, { text: "Escaneio mesmo sexo", score: 5 }] },
            { id: 20, text: "Identidade atual:", options: [{ text: "Hétero (Straight)", score: 1 }, { text: "Aberto / Questionando", score: 3 }, { text: "Homossexual (Gay/Lésbica)", score: 5 }] }
        ],
        results: [
            { 
                min: 20, 
                max: 40, 
                title: "Espectro: Predominantemente Heterossexual", 
                desc: "<strong>[Escala Kinsey: 0-1]</strong><br>Sua orientação está ancorada no espectro heterossexual. Seus impulsos primários são dirigidos ao sexo oposto." 
            },
            { 
                min: 41, 
                max: 79, 
                title: "Espectro: Bissexual / Fluido", 
                desc: "<strong>[Escala Kinsey: 2-4]</strong><br>Você está no meio do espectro. Sua sexualidade é flexível. Você ama a pessoa, não o gênero." 
            },
            { 
                min: 80, 
                max: 100, 
                title: "Espectro: Predominantemente Homossexual", 
                desc: "<strong>[Escala Kinsey: 5-6]</strong><br>Sua orientação está ancorada no espectro homossexual. A conexão real e profunda é encontrada com o mesmo sexo." 
            }
        ]
    },

    // 8. 俄语 (Russian) - Clinical Standard
    "ru": {
        title: "Спектр психосексуальной ориентации",
        desc: "На основе шкалы Кинси. Клиническая оценка ваших моделей влечения для определения места в спектре сексуальности.",
        questions: [
            { id: 1, text: "На улице ваш взгляд ловит:", options: [{ text: "Только противоположный пол", score: 1 }, { text: "Оба пола", score: 3 }, { text: "Только свой пол", score: 5 }] },
            { id: 2, text: "Сексуальные фантазии:", options: [{ text: "О противоположном поле", score: 1 }, { text: "Оба пола", score: 3 }, { text: "О своем поле", score: 5 }] },
            { id: 3, text: "Без социальных норм вы бы:", options: [{ text: "Встречались с противоположным", score: 1 }, { text: "Пробовали с обоими", score: 3 }, { text: "Встречались со своим", score: 5 }] },
            { id: 4, text: "В кого вы влюбляетесь?", options: [{ text: "Противоположный пол", score: 1 }, { text: "Пол не важен", score: 3 }, { text: "Свой пол", score: 5 }] },
            { id: 5, text: "Идеальный партнер (образ):", options: [{ text: "Противоположного пола", score: 1 }, { text: "Личность важнее", score: 3 }, { text: "Своего пола", score: 5 }] },
            { id: 6, text: "В фильмах вы ассоциируете себя с:", options: [{ text: "Гетеро-парой", score: 1 }, { text: "Химией между людьми", score: 3 }, { text: "Однополой динамикой", score: 5 }] },
            { id: 7, text: "Искра к своему полу:", options: [{ text: "Никогда", score: 1 }, { text: "Иногда / Запутанно", score: 3 }, { text: "Часто и сильно", score: 5 }] },
            { id: 8, text: "История влюбленностей:", options: [{ text: "Только противоположный", score: 1 }, { text: "Смешанная", score: 3 }, { text: "В основном свой", score: 5 }] },
            { id: 9, text: "Близость со своим полом:", options: [{ text: "Неприятно", score: 1 }, { text: "Любопытно", score: 3 }, { text: "Желанно", score: 5 }] },
            { id: 10, text: "Последний человек на земле с вами:", options: [{ text: "Противоположный пол", score: 1 }, { text: "Без разницы", score: 3 }, { text: "Свой пол", score: 5 }] },
            { id: 11, text: "Красивый человек вашего пола:", options: [{ text: "Эстетика/Конкуренция", score: 1 }, { text: "Смесь восхищения и тяги", score: 3 }, { text: "Желание", score: 5 }] },
            { id: 12, text: "Ваша сексуальность:", options: [{ text: "Фиксированная", score: 1 }, { text: "Флюидная", score: 3 }, { text: "Фиксированная (иная)", score: 5 }] },
            { id: 13, text: "В снах:", options: [{ text: "Гетеро-сцены", score: 1 }, { text: "Размыто", score: 3 }, { text: "Гомо-сцены", score: 5 }] },
            { id: 14, text: "Возбуждающее искусство:", options: [{ text: "Тела противоположного пола", score: 1 }, { text: "Оба", score: 3 }, { text: "Тела своего пола", score: 5 }] },
            { id: 15, text: "Эмоциональная близость:", options: [{ text: "Проще со своим (дружба)", score: 1 }, { text: "Ведет к влечению", score: 3 }, { text: "Проще с противоположным", score: 5 }] },
            { id: 16, text: "Признание друга своего пола:", options: [{ text: "Отказ/Неловкость", score: 1 }, { text: "Рассмотрю", score: 3 }, { text: "Буду рад", score: 5 }] },
            { id: 17, text: "Порнография:", options: [{ text: "Гетеро", score: 1 }, { text: "Разное", score: 3 }, { text: "Гей/Лесби", score: 5 }] },
            { id: 18, text: "Однополые отношения для вас:", options: [{ text: "Отталкивает", score: 1 }, { text: "Интригует", score: 3 }, { text: "Комфортно", score: 5 }] },
            { id: 19, text: "Ваш взгляд:", options: [{ text: "Сканирую противоположный", score: 1 }, { text: "Сканирую красивых", score: 3 }, { text: "Сканирую свой пол", score: 5 }] },
            { id: 20, text: "Идентификация:", options: [{ text: "Гетеро (Straight)", score: 1 }, { text: "В поиске / Би", score: 3 }, { text: "Гомо (Gay/Lesbian)", score: 5 }] }
        ],
        results: [
            { min: 20, max: 40, title: "Спектр: Преимущественно Гетеро", desc: "<strong>[Шкала Кинси: 0-1]</strong><br>Ваши влечения направлены на противоположный пол." },
            { min: 41, max: 79, title: "Спектр: Бисексуальность / Флюидность", desc: "<strong>[Шкала Кинси: 2-4]</strong><br>Вы посередине. Вы влюбляетесь в личность, а не в пол." },
            { min: 80, max: 100, title: "Спектр: Преимущественно Гомо", desc: "<strong>[Шкала Кинси: 5-6]</strong><br>Ваши влечения направлены на свой пол." }
        ]
    },

    // 9. 韩语 (Korean) - Clinical Standard
    "ko": {
        title: "심리성적 지향 스펙트럼 평가",
        desc: "킨제이 척도 기반. 당신의 성적, 정서적 끌림 패턴을 임상적으로 분석하여 성 지향성 좌표를 찾습니다.",
        questions: [
            { id: 1, text: "길에서 본능적으로 눈이 가는 사람:", options: [{ text: "이성만", score: 1 }, { text: "분위기에 따라 둘 다", score: 3 }, { text: "동성만", score: 5 }] },
            { id: 2, text: "성적 판타지:", options: [{ text: "거의 이성", score: 1 }, { text: "둘 다", score: 3 }, { text: "거의 동성", score: 5 }] },
            { id: 3, text: "사회적 시선이 없다면:", options: [{ text: "여전히 이성과 교제", score: 1 }, { text: "둘 다 탐색", score: 3 }, { text: "동성과 교제", score: 5 }] },
            { id: 4, text: "깊게 사랑에 빠지는 대상:", options: [{ text: "이성만", score: 1 }, { text: "성별 무관", score: 3 }, { text: "동성만", score: 5 }] },
            { id: 5, text: "이상적인 배우자 상:", options: [{ text: "이성", score: 1 }, { text: "상관없음", score: 3 }, { text: "동성", score: 5 }] },
            { id: 6, text: "로맨스 영화 몰입:", options: [{ text: "이성 커플", score: 1 }, { text: "케미스트리", score: 3 }, { text: "동성 커플", score: 5 }] },
            { id: 7, text: "동성에게 설렘을 느낀 적:", options: [{ text: "없음 (단순 동경)", score: 1 }, { text: "가끔/혼란", score: 3 }, { text: "자주/강렬함", score: 5 }] },
            { id: 8, text: "짝사랑의 역사:", options: [{ text: "항상 이성", score: 1 }, { text: "섞여 있음", score: 3 }, { text: "대부분 동성", score: 5 }] },
            { id: 9, text: "동성과의 스킨십:", options: [{ text: "어색함/거부감", score: 1 }, { text: "호기심", score: 3 }, { text: "자연스럽고 원함", score: 5 }] },
            { id: 10, text: "지구에 단둘이 남는다면:", options: [{ text: "이성", score: 1 }, { text: "상관없음", score: 3 }, { text: "동성", score: 5 }] },
            { id: 11, text: "매력적인 동성을 볼 때:", options: [{ text: "질투/미적 감상", score: 1 }, { text: "동경과 끌림", score: 3 }, { text: "성적 욕망", score: 5 }] },
            { id: 12, text: "나의 성 정체성:", options: [{ text: "고정됨", score: 1 }, { text: "유동적", score: 3 }, { text: "고정됨 (다름)", score: 5 }] },
            { id: 13, text: "꿈속에서:", options: [{ text: "이성애적", score: 1 }, { text: "모호함", score: 3 }, { text: "동성애적", score: 5 }] },
            { id: 14, text: "자극적인 예술/신체:", options: [{ text: "이성의 몸", score: 1 }, { text: "둘 다", score: 3 }, { text: "동성의 몸", score: 5 }] },
            { id: 15, text: "성관계 없는 정서적 친밀감:", options: [{ text: "동성이 편함(우정)", score: 1 }, { text: "끌림으로 이어짐", score: 3 }, { text: "이성이 편함", score: 5 }] },
            { id: 16, text: "동성 친구의 고백:", options: [{ text: "거절/어색", score: 1 }, { text: "고려해봄", score: 3 }, { text: "기쁨/설렘", score: 5 }] },
            { id: 17, text: "성인물 취향:", options: [{ text: "이성물", score: 1 }, { text: "다양함", score: 3 }, { text: "동성물", score: 5 }] },
            { id: 18, text: "동성 연애에 대한 생각:", options: [{ text: "무관심/거부", score: 1 }, { text: "흥미로움", score: 3 }, { text: "편안함", score: 5 }] },
            { id: 19, text: "시선 처리:", options: [{ text: "이성을 스캔", score: 1 }, { text: "매력적인 사람 스캔", score: 3 }, { text: "동성을 스캔", score: 5 }] },
            { id: 20, text: "현재 정체성:", options: [{ text: "이성애자 (Straight)", score: 1 }, { text: "탐색 중/오픈", score: 3 }, { text: "동성애자 (Gay/Lesbian)", score: 5 }] }
        ],
        results: [
            { min: 20, max: 40, title: "스펙트럼: 주로 이성애 (Heterosexual Dominant)", desc: "<strong>[킨제이 척도: 0-1]</strong><br>당신의 심리적 지향은 이성애 스펙트럼에 확고합니다." },
            { min: 41, max: 79, title: "스펙트럼: 양성애 / 유동적 (Fluid)", desc: "<strong>[킨제이 척도: 2-4]</strong><br>스펙트럼의 중간입니다. 성별보다 '사람' 그 자체를 사랑합니다." },
            { min: 80, max: 100, title: "스펙트럼: 주로 동성애 (Homosexual Dominant)", desc: "<strong>[킨제이 척도: 5-6]</strong><br>당신의 심리적 지향은 동성애 스펙트럼에 확고합니다. 깊은 연결은 동성에게서 느낍니다." }
        ]
    },

    // 10. 阿拉伯语 (Arabic) - Clinical Standard
    "ar": {
        title: "تقييم طيف التوجه النفسي الجنسي",
        desc: "بناءً على مقياس كينزي. تقييم سريري لأنماط الانجذاب لتحديد موقعك على طيف الحياة الجنسية.",
        questions: [
            { id: 1, text: "في الشارع، من يلفت انتباهك غريزياً؟", options: [{ text: "الجنس الآخر فقط", score: 1 }, { text: "كلاهما", score: 3 }, { text: "نفس الجنس فقط", score: 5 }] },
            { id: 2, text: "التخيلات الجنسية:", options: [{ text: "الجنس الآخر", score: 1 }, { text: "كلاهما", score: 3 }, { text: "نفس الجنس", score: 5 }] },
            { id: 3, text: "بدون قيود اجتماعية:", options: [{ text: "أواعد الجنس الآخر", score: 1 }, { text: "أستكشف الاثنين", score: 3 }, { text: "أواعد نفس الجنس", score: 5 }] },
            { id: 4, text: "تقع في الحب بعمق مع:", options: [{ text: "الجنس الآخر", score: 1 }, { text: "الشخص لا الجنس", score: 3 }, { text: "نفس الجنس", score: 5 }] },
            { id: 5, text: "شريك الحياة المثالي:", options: [{ text: "شخص من الجنس الآخر", score: 1 }, { text: "لا يهم", score: 3 }, { text: "شخص من نفس الجنس", score: 5 }] },
            { id: 6, text: "في الأفلام الرومانسية:", options: [{ text: "الثنائي التقليدي", score: 1 }, { text: "الكيمياء", score: 3 }, { text: "الديناميكية المثلية", score: 5 }] },
            { id: 7, text: "هل شعرت بـ'شرارة' تجاه نفس الجنس؟", options: [{ text: "أبداً", score: 1 }, { text: "أحياناً/مرتبك", score: 3 }, { text: "غالباً وبقوة", score: 5 }] },
            { id: 8, text: "تاريخ الإعجاب:", options: [{ text: "الجنس الآخر دائماً", score: 1 }, { text: "مختلط", score: 3 }, { text: "نفس الجنس غالباً", score: 5 }] },
            { id: 9, text: "الحميمية الجسدية مع نفس الجنس:", options: [{ text: "غير جذابة", score: 1 }, { text: "فضول", score: 3 }, { text: "طبيعية ومرغوبة", score: 5 }] },
            { id: 10, text: "آخر شخص على الأرض معك:", options: [{ text: "الجنس الآخر", score: 1 }, { text: "لا يهم", score: 3 }, { text: "نفس الجنس", score: 5 }] },
            { id: 11, text: "رؤية شخص جذاب من نفس الجنس:", options: [{ text: "منافسة/جماليات", score: 1 }, { text: "إعجاب وانجذاب", score: 3 }, { text: "رغبة جسدية", score: 5 }] },
            { id: 12, text: "مفهومك للجنسانية:", options: [{ text: "ثابت", score: 1 }, { text: "سائل", score: 3 }, { text: "ثابت (مختلف)", score: 5 }] },
            { id: 13, text: "في الأحلام:", options: [{ text: "تفاعلات غيرية", score: 1 }, { text: "غامضة", score: 3 }, { text: "تفاعلات مثلية", score: 5 }] },
            { id: 14, text: "الفن/الجسد المثير:", options: [{ text: "جسد الجنس الآخر", score: 1 }, { text: "كلاهما", score: 3 }, { text: "جسد نفس الجنس", score: 5 }] },
            { id: 15, text: "الحميمية العاطفية:", options: [{ text: "أسهل مع نفس الجنس (صداقة)", score: 1 }, { text: "تؤدي للانجذاب", score: 3 }, { text: "أسهل مع الجنس الآخر", score: 5 }] },
            { id: 16, text: "اعتراف حب من صديق (نفس الجنس):", options: [{ text: "رفض/حرج", score: 1 }, { text: "سأفكر", score: 3 }, { text: "سأسعد", score: 5 }] },
            { id: 17, text: "تفضيلات المحتوى الإباحي:", options: [{ text: "غيري", score: 1 }, { text: "متنوع", score: 3 }, { text: "مثلي", score: 5 }] },
            { id: 18, text: "فكرة العلاقة المثلية:", options: [{ text: "لا مبالاة/نفرة", score: 1 }, { text: "مثيرة للاهتمام", score: 3 }, { text: "مريحة", score: 5 }] },
            { id: 19, text: "نظراتك:", options: [{ text: "أفحص الجنس الآخر", score: 1 }, { text: "أفحص الجذابين", score: 3 }, { text: "أفحص نفس الجنس", score: 5 }] },
            { id: 20, text: "هويتك الحالية:", options: [{ text: "مغاير (Straight)", score: 1 }, { text: "منفتح / متسائل", score: 3 }, { text: "مثلي (Gay/Lesbian)", score: 5 }] }
        ],
        results: [
            { min: 20, max: 40, title: "الطيف: مغاير في الغالب", desc: "<strong>[مقياس كينزي: 0-1]</strong><br>توجهك راسخ في الطيف المغاير (الهيترو)." },
            { min: 41, max: 79, title: "الطيف: ثنائي / سائل", desc: "<strong>[مقياس كينزي: 2-4]</strong><br>أنت في المنتصف. تنجذب للشخص بغض النظر عن جنسه." },
            { min: 80, max: 100, title: "الطيف: مثلي في الغالب", desc: "<strong>[مقياس كينزي: 5-6]</strong><br>توجهك راسخ في الطيف المثلي. الانجذاب الحقيقي مع نفس الجنس." }
        ]
    },

    // 11. 越南语 (Vietnamese) - Clinical Standard
    "vi": {
        title: "Đánh giá Phổ Khuynh hướng Tâm lý Tình dục",
        desc: "Dựa trên Thang đo Kinsey. Đánh giá lâm sàng về các mô hình hấp dẫn của bạn để xác định vị trí trên phổ tính dục.",
        questions: [
            { id: 1, text: "Trên đường, ai thu hút mắt bạn?", options: [{ text: "Chỉ người khác giới", score: 1 }, { text: "Cả hai", score: 3 }, { text: "Chỉ người cùng giới", score: 5 }] },
            { id: 2, text: "Tưởng tượng tình dục:", options: [{ text: "Người khác giới", score: 1 }, { text: "Cả hai", score: 3 }, { text: "Người cùng giới", score: 5 }] },
            { id: 3, text: "Nếu không có định kiến xã hội:", options: [{ text: "Hẹn hò khác giới", score: 1 }, { text: "Khám phá cả hai", score: 3 }, { text: "Hẹn hò cùng giới", score: 5 }] },
            { id: 4, text: "Yêu sâu đậm:", options: [{ text: "Người khác giới", score: 1 }, { text: "Con người, không phải giới tính", score: 3 }, { text: "Người cùng giới", score: 5 }] },
            { id: 5, text: "Bạn đời lý tưởng:", options: [{ text: "Người khác giới", score: 1 }, { text: "Sao cũng được", score: 3 }, { text: "Người cùng giới", score: 5 }] },
            { id: 6, text: "Phim lãng mạn:", options: [{ text: "Cặp đôi dị tính", score: 1 }, { text: "Sự ăn ý", score: 3 }, { text: "Cặp đôi đồng tính", score: 5 }] },
            { id: 7, text: "Cảm thấy 'rung động' với người cùng giới?", options: [{ text: "Không bao giờ", score: 1 }, { text: "Thỉnh thoảng", score: 3 }, { text: "Thường xuyên", score: 5 }] },
            { id: 8, text: "Lịch sử 'crush':", options: [{ text: "Luôn là khác giới", score: 1 }, { text: "Hỗn hợp", score: 3 }, { text: "Hầu hết là cùng giới", score: 5 }] },
            { id: 9, text: "Thân mật thể xác cùng giới:", options: [{ text: "Kỳ quặc", score: 1 }, { text: "Tò mò", score: 3 }, { text: "Tự nhiên/khao khát", score: 5 }] },
            { id: 10, text: "Người cuối cùng trên trái đất cùng bạn:", options: [{ text: "Khác giới", score: 1 }, { text: "Không quan trọng", score: 3 }, { text: "Cùng giới", score: 5 }] },
            { id: 11, text: "Thấy người cùng giới hấp dẫn:", options: [{ text: "Ganh tị/Thẩm mỹ", score: 1 }, { text: "Ngưỡng mộ pha lẫn thu hút", score: 3 }, { text: "Ham muốn", score: 5 }] },
            { id: 12, text: "Quan niệm tính dục:", options: [{ text: "Cố định", score: 1 }, { text: "Linh hoạt", score: 3 }, { text: "Cố định (khác biệt)", score: 5 }] },
            { id: 13, text: "Trong mơ:", options: [{ text: "Dị tính", score: 1 }, { text: "Mơ hồ", score: 3 }, { text: "Đồng tính", score: 5 }] },
            { id: 14, text: "Nghệ thuật/Cơ thể:", options: [{ text: "Cơ thể khác giới", score: 1 }, { text: "Cả hai", score: 3 }, { text: "Cơ thể cùng giới", score: 5 }] },
            { id: 15, text: "Thân mật cảm xúc:", options: [{ text: "Dễ hơn với cùng giới (bạn bè)", score: 1 }, { text: "Dẫn đến thu hút", score: 3 }, { text: "Dễ hơn với khác giới", score: 5 }] },
            { id: 16, text: "Bạn cùng giới tỏ tình:", options: [{ text: "Từ chối/Ngại", score: 1 }, { text: "Sẽ cân nhắc", score: 3 }, { text: "Vui sướng", score: 5 }] },
            { id: 17, text: "Nội dung người lớn:", options: [{ text: "Dị tính", score: 1 }, { text: "Đa dạng", score: 3 }, { text: "Đồng tính", score: 5 }] },
            { id: 18, text: "Ý tưởng quan hệ đồng tính:", options: [{ text: "Không quan tâm", score: 1 }, { text: "Thú vị", score: 3 }, { text: "Thoải mái", score: 5 }] },
            { id: 19, text: "Ánh nhìn:", options: [{ text: "Nhìn người khác giới", score: 1 }, { text: "Nhìn người đẹp", score: 3 }, { text: "Nhìn người cùng giới", score: 5 }] },
            { id: 20, text: "Định danh:", options: [{ text: "Thẳng (Straight)", score: 1 }, { text: "Cởi mở / Đang tìm hiểu", score: 3 }, { text: "Gay/Lesbian", score: 5 }] }
        ],
        results: [
            { min: 20, max: 40, title: "Phổ: Chủ yếu Dị tính", desc: "<strong>[Thang Kinsey: 0-1]</strong><br>Khuynh hướng của bạn neo chặt ở phổ dị tính." },
            { min: 41, max: 79, title: "Phổ: Song tính / Linh hoạt", desc: "<strong>[Thang Kinsey: 2-4]</strong><br>Bạn ở giữa phổ. Bạn yêu con người hơn là giới tính." },
            { min: 80, max: 100, title: "Phổ: Chủ yếu Đồng tính", desc: "<strong>[Thang Kinsey: 5-6]</strong><br>Khuynh hướng của bạn neo chặt ở phổ đồng tính." }
        ]
    },

    // 12. 泰语 (Thai) - Clinical Standard
    "th": {
        title: "แบบประเมินสเปกตรัมทางเพศเชิงจิตวิทยา",
        desc: "อิงตาม Kinsey Scale ประเมินรูปแบบความดึงดูดทางคลินิกเพื่อหาตำแหน่งของคุณบนสเปกตรัมทางเพศ",
        questions: [
            { id: 1, text: "บนถนน ใครดึงดูดสายตาคุณ?", options: [{ text: "เพศตรงข้ามเท่านั้น", score: 1 }, { text: "ทั้งสอง แล้วแต่คน", score: 3 }, { text: "เพศเดียวกันเท่านั้น", score: 5 }] },
            { id: 2, text: "จินตนาการทางเพศ:", options: [{ text: "เพศตรงข้าม", score: 1 }, { text: "ทั้งสองเพศ", score: 3 }, { text: "เพศเดียวกัน", score: 5 }] },
            { id: 3, text: "ถ้าไม่มีกฎสังคม:", options: [{ text: "คบเพศตรงข้าม", score: 1 }, { text: "ลองทั้งสอง", score: 3 }, { text: "คบเพศเดียวกัน", score: 5 }] },
            { id: 4, text: "ตกหลุมรักลึกซึ้ง:", options: [{ text: "เพศตรงข้าม", score: 1 }, { text: "ที่ตัวบุคคล", score: 3 }, { text: "เพศเดียวกัน", score: 5 }] },
            { id: 5, text: "คู่ชีวิตในอุดมคติ:", options: [{ text: "คนเพศตรงข้าม", score: 1 }, { text: "ใครก็ได้", score: 3 }, { text: "คนเพศเดียวกัน", score: 5 }] },
            { id: 6, text: "หนังรัก:", options: [{ text: "คู่ชายหญิง", score: 1 }, { text: "เคมี", score: 3 }, { text: "คู่เพศเดียวกัน", score: 5 }] },
            { id: 7, text: "สปาร์คกับเพศเดียวกัน?", options: [{ text: "ไม่เคย", score: 1 }, { text: "บางครั้ง/สับสน", score: 3 }, { text: "บ่อยและแรง", score: 5 }] },
            { id: 8, text: "ประวัติการแอบชอบ:", options: [{ text: "เพศตรงข้ามเสมอ", score: 1 }, { text: "ปนกัน", score: 3 }, { text: "ส่วนใหญ่เพศเดียวกัน", score: 5 }] },
            { id: 9, text: "ความใกล้ชิดทางกายกับเพศเดียวกัน:", options: [{ text: "อึดอัด", score: 1 }, { text: "อยากรู้อยากเห็น", score: 3 }, { text: "ธรรมชาติ/ต้องการ", score: 5 }] },
            { id: 10, text: "คนสุดท้ายบนโลกกับคุณ:", options: [{ text: "เพศตรงข้าม", score: 1 }, { text: "ไม่เกี่ยง", score: 3 }, { text: "เพศเดียวกัน", score: 5 }] },
            { id: 11, text: "เห็นคนเพศเดียวกันที่ดูดี:", options: [{ text: "ชื่นชม/อิจฉา", score: 1 }, { text: "ผสมความหลงใหล", score: 3 }, { text: "ความต้องการทางกาย", score: 5 }] },
            { id: 12, text: "แนวคิดเรื่องเพศ:", options: [{ text: "ตายตัว", score: 1 }, { text: "ลื่นไหล", score: 3 }, { text: "ตายตัว (แตกต่าง)", score: 5 }] },
            { id: 13, text: "ในฝัน:", options: [{ text: "รักต่างเพศ", score: 1 }, { text: "เบลอๆ", score: 3 }, { text: "รักร่วมเพศ", score: 5 }] },
            { id: 14, text: "ศิลปะ/ร่างกาย:", options: [{ text: "ร่างเพศตรงข้าม", score: 1 }, { text: "ทั้งคู่", score: 3 }, { text: "ร่างเพศเดียวกัน", score: 5 }] },
            { id: 15, text: "ความใกล้ชิดทางใจ:", options: [{ text: "ง่ายกับเพศเดียวกัน (เพื่อน)", score: 1 }, { text: "นำไปสู่ความดึงดูด", score: 3 }, { text: "ง่ายกับเพศตรงข้าม", score: 5 }] },
            { id: 16, text: "เพื่อนเพศเดียวกันสารภาพรัก:", options: [{ text: "ปฏิเสธ/อึดอัด", score: 1 }, { text: "จะพิจารณา", score: 3 }, { text: "ดีใจ", score: 5 }] },
            { id: 17, text: "สื่อผู้ใหญ่:", options: [{ text: "ชายหญิง", score: 1 }, { text: "หลากหลาย", score: 3 }, { text: "เกย์/เลสเบี้ยน", score: 5 }] },
            { id: 18, text: "ความคิดเรื่องคบเพศเดียวกัน:", options: [{ text: "เฉย/ต่อต้าน", score: 1 }, { text: "น่าสนใจ", score: 3 }, { text: "รู้สึกใช่", score: 5 }] },
            { id: 19, text: "สายตา:", options: [{ text: "มองเพศตรงข้าม", score: 1 }, { text: "มองคนดูดี", score: 3 }, { text: "มองเพศเดียวกัน", score: 5 }] },
            { id: 20, text: "ตัวตนปัจจุบัน:", options: [{ text: "ชายจริงหญิงแท้", score: 1 }, { text: "เปิดกว้าง/กำลังค้นหา", score: 3 }, { text: "เกย์/เลสเบี้ยน", score: 5 }] }
        ],
        results: [
            { min: 20, max: 40, title: "สเปกตรัม: รักต่างเพศเป็นหลัก", desc: "<strong>[Kinsey Scale: 0-1]</strong><br>รสนิยมของคุณยึดติดกับเพศตรงข้ามเป็นหลัก" },
            { min: 41, max: 79, title: "สเปกตรัม: ไบเซ็กชวล / ลื่นไหล", desc: "<strong>[Kinsey Scale: 2-4]</strong><br>คุณอยู่ตรงกลาง คุณรักที่ตัวบุคคลมากกว่าเพศ" },
            { min: 80, max: 100, title: "สเปกตรัม: รักร่วมเพศเป็นหลัก", desc: "<strong>[Kinsey Scale: 5-6]</strong><br>รสนิยมของคุณยึดติดกับเพศเดียวกันเป็นหลัก" }
        ]
    },

    // 13. 印尼语 (Indonesian) - Clinical Standard
    "id": {
        title: "Penilaian Spektrum Orientasi Psikoseksual",
        desc: "Berdasarkan Skala Kinsey. Penilaian klinis tanpa penghakiman tentang pola ketertarikan Anda untuk menentukan posisi di spektrum seksualitas.",
        questions: [
            { id: 1, text: "Di jalan, siapa yang menarik mata Anda?", options: [{ text: "Hanya lawan jenis", score: 1 }, { text: "Keduanya", score: 3 }, { text: "Hanya sesama jenis", score: 5 }] },
            { id: 2, text: "Fantasi seksual:", options: [{ text: "Lawan jenis", score: 1 }, { text: "Keduanya", score: 3 }, { text: "Sesama jenis", score: 5 }] },
            { id: 3, text: "Tanpa norma sosial:", options: [{ text: "Kencan lawan jenis", score: 1 }, { text: "Eksplorasi keduanya", score: 3 }, { text: "Kencan sesama jenis", score: 5 }] },
            { id: 4, text: "Jatuh cinta mendalam pada:", options: [{ text: "Lawan jenis", score: 1 }, { text: "Pribadinya, bukan gender", score: 3 }, { text: "Sesama jenis", score: 5 }] },
            { id: 5, text: "Pasangan ideal:", options: [{ text: "Lawan jenis", score: 1 }, { text: "Bebas", score: 3 }, { text: "Sesama jenis", score: 5 }] },
            { id: 6, text: "Film romantis:", options: [{ text: "Pasangan hetero", score: 1 }, { text: "Kimiawi", score: 3 }, { text: "Dinamika sesama jenis", score: 5 }] },
            { id: 7, text: "Merasakan 'percikan' dengan sesama jenis?", options: [{ text: "Tidak pernah", score: 1 }, { text: "Kadang/Bingung", score: 3 }, { text: "Sering dan kuat", score: 5 }] },
            { id: 8, text: "Riwayat naksir:", options: [{ text: "Selalu lawan jenis", score: 1 }, { text: "Campuran", score: 3 }, { text: "Kebanyakan sesama jenis", score: 5 }] },
            { id: 9, text: "Intimasi fisik sesama jenis:", options: [{ text: "Aneh", score: 1 }, { text: "Penasaran", score: 3 }, { text: "Alami/Diinginkan", score: 5 }] },
            { id: 10, text: "Orang terakhir di bumi bersamamu:", options: [{ text: "Lawan jenis", score: 1 }, { text: "Tidak masalah", score: 3 }, { text: "Sesama jenis", score: 5 }] },
            { id: 11, text: "Melihat sesama jenis yang menarik:", options: [{ text: "Estetika/Kompetisi", score: 1 }, { text: "Kagum dan tertarik", score: 3 }, { text: "Hasrat fisik", score: 5 }] },
            { id: 12, text: "Konsep seksualitas:", options: [{ text: "Tetap", score: 1 }, { text: "Cair", score: 3 }, { text: "Tetap (berbeda)", score: 5 }] },
            { id: 13, text: "Dalam mimpi:", options: [{ text: "Interaksi hetero", score: 1 }, { text: "Abstrak", score: 3 }, { text: "Interaksi homo", score: 5 }] },
            { id: 14, text: "Seni/Tubuh:", options: [{ text: "Tubuh lawan jenis", score: 1 }, { text: "Keduanya", score: 3 }, { text: "Tubuh sesama jenis", score: 5 }] },
            { id: 15, text: "Intimasi emosional:", options: [{ text: "Mudah dengan sesama jenis (teman)", score: 1 }, { text: "Memicu ketertarikan", score: 3 }, { text: "Mudah dengan lawan jenis", score: 5 }] },
            { id: 16, text: "Teman sesama jenis menyatakan cinta:", options: [{ text: "Tolak/Canggung", score: 1 }, { text: "Pertimbangkan", score: 3 }, { text: "Senang", score: 5 }] },
            { id: 17, text: "Konten dewasa:", options: [{ text: "Hetero", score: 1 }, { text: "Beragam", score: 3 }, { text: "Gay/Lesbian", score: 5 }] },
            { id: 18, text: "Ide hubungan sesama jenis:", options: [{ text: "Tidak peduli/Menolak", score: 1 }, { text: "Menarik", score: 3 }, { text: "Nyaman", score: 5 }] },
            { id: 19, text: "Tatapan:", options: [{ text: "Scan lawan jenis", score: 1 }, { text: "Scan orang cakep", score: 3 }, { text: "Scan sesama jenis", score: 5 }] },
            { id: 20, text: "Identitas saat ini:", options: [{ text: "Lurus (Straight)", score: 1 }, { text: "Terbuka / Mempertanyakan", score: 3 }, { text: "Gay/Lesbian", score: 5 }] }
        ],
        results: [
            { min: 20, max: 40, title: "Spektrum: Dominan Heteroseksual", desc: "<strong>[Skala Kinsey: 0-1]</strong><br>Orientasi Anda tertanam kuat di spektrum heteroseksual." },
            { min: 41, max: 79, title: "Spektrum: Biseksual / Cair", desc: "<strong>[Skala Kinsey: 2-4]</strong><br>Anda berada di tengah. Anda mencintai orangnya, bukan gendernya." },
            { min: 80, max: 100, title: "Spektrum: Dominan Homoseksual", desc: "<strong>[Skala Kinsey: 5-6]</strong><br>Orientasi Anda tertanam kuat di spektrum homoseksual." }
        ]
    }
};