export type Rank = 'S' | 'A' | 'B';
// 核心：五大金刚身份
export type Persona = 'Student' | 'Worker' | 'Developer' | 'Entrepreneur' | 'Creator';

export interface Tool {
  id: string;
  name: string;
  rank: Rank;
  tagline: string;
  verdict: string; // WenX 锐评
  badges: string[]; // 荣誉标签
  pros: string[];
  cons: string[];
  priceModel: 'Free' | 'Freemium' | 'Paid';
  link: string;
  logo: string;
  lastCheck: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: Persona[];
  tools: Tool[];
}

export const scenarios: Scenario[] = [
  // ==========================================
  // 🔥 热门通用 (General & Chat)
  // ==========================================
  {
    id: 'chat', title: '通用问答 / 写作', description: '什么都能问，最强国产大模型', icon: 'speak',
    tags: ['Student', 'Worker', 'Developer', 'Entrepreneur'],
    tools: [
      { 
        id: 'deepseek', name: 'DeepSeek (深度求索)', rank: 'S', tagline: '国产开源之光', 
        verdict: '目前的国产最强模型，理科和代码能力甚至超过 GPT-4。如果你需要写代码或做数学题，选它。',
        badges: ['最强逻辑', '完全免费'],
        pros: ['逻辑推理媲美GPT-4', '完全免费', '开源可部署'], 
        cons: ['高峰期服务器偶尔繁忙'], 
        priceModel: 'Free', link: 'https://chat.deepseek.com', logo: '🦈', lastCheck: '2025-12-01' 
      },
      { 
        id: 'doubao', name: '豆包 (Doubao)', rank: 'A', tagline: '字节跳动出品', 
        verdict: '语音交互体验极好，适合手机上练口语或闲聊。',
        badges: ['语音最强', '手机必备'],
        pros: ['语音极其拟人', '随时打断', '插件丰富'], 
        cons: ['长逻辑推理稍弱'], 
        priceModel: 'Free', link: 'https://www.doubao.com', logo: '🥟', lastCheck: '2025-12-01' 
      },
      { 
        id: 'chatgpt', name: 'ChatGPT', rank: 'B', tagline: 'AI 鼻祖', 
        verdict: '综合能力最均衡，如果你能稳定访问，它依然是主力工具。',
        badges: ['综合最强', '多模态'],
        pros: ['综合能力均衡', '生态丰富'], 
        cons: ['国内访问困难', 'Plus版贵'], 
        priceModel: 'Freemium', link: 'https://chatgpt.com', logo: '🟢', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'search', title: 'AI 深度搜索', description: '不看广告，直接给答案和来源', icon: 'search',
    tags: ['Student', 'Worker', 'Entrepreneur', 'Developer'],
    tools: [
      { 
        id: 'metaso', name: '秘塔 AI 搜索', rank: 'S', tagline: '没有广告的搜索引擎', 
        verdict: '写论文神器。不仅给答案，还直接帮你整理好脑图和大纲，引用来源非常规范。',
        badges: ['学术首选', '无广告'],
        pros: ['引用来源精准', '自动生成大纲', '学术模式强'], 
        cons: ['偶尔冷门内容偏少'], 
        priceModel: 'Free', link: 'https://metaso.cn', logo: '🔍', lastCheck: '2025-12-01' 
      },
      { 
        id: 'perplexity', name: 'Perplexity', rank: 'A', tagline: '全球最强答案引擎', 
        verdict: '谷歌的最强替代者。如果你需要搜索英文世界的最新信息，用它准没错。',
        badges: ['信源国际化', '深度推理'],
        pros: ['信源国际化', '深度推理模式'], 
        cons: ['Pro版付费'], 
        priceModel: 'Freemium', link: 'https://www.perplexity.ai', logo: '🌀', lastCheck: '2025-12-01' 
      }
    ]
  },

  // ==========================================
  // 🏢 办公 & 效率 (Office)
  // ==========================================
  {
    id: 'ppt', title: '做 PPT / 演示', description: '一键生成精美排版', icon: 'ppt',
    tags: ['Worker', 'Student', 'Entrepreneur'], 
    tools: [
      { 
        id: 'gamma', name: 'Gamma', rank: 'S', tagline: '最优雅的网页版PPT', 
        verdict: '如果你想在 5 分钟内搞定一个能直接演讲的 PPT，Gamma 是唯一选择。它的审美完全在线。',
        badges: ['小白首选', '审美天花板'],
        pros: ['排版审美在线', '中文好', '导出方便'], 
        cons: ['自定义动画弱'], 
        priceModel: 'Freemium', link: 'https://gamma.app', logo: '🟣', lastCheck: '2025-12-01' 
      },
      { 
        id: 'wps-ai', name: 'WPS AI', rank: 'A', tagline: '国民办公软件AI版', 
        verdict: '就在你的 WPS 软件里，不用切出去。适合快速美化现有的 PPT。',
        badges: ['原生集成', '办公必备'],
        pros: ['深度集成Office', '一键美化'], 
        cons: ['部分功能需会员'], 
        priceModel: 'Paid', link: 'https://ai.wps.cn', logo: '📝', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'long-doc', title: '读长文档 / 财报', description: '提炼核心要点，读论文财报', icon: 'doc',
    tags: ['Student', 'Entrepreneur', 'Worker'], 
    tools: [
      { 
        id: 'kimi', name: 'Kimi (月之暗面)', rank: 'S', tagline: '国产长文本之光', 
        verdict: '如果你需要处理超长的中文财报或小说，Kimi 是目前的中文最强，没有之一。',
        badges: ['中文长文本之王', '完全免费'],
        pros: ['支持200万字上下文', '解析财报精准', '完全免费'], 
        cons: ['复杂推理稍逊'], 
        priceModel: 'Free', link: 'https://kimi.moonshot.cn', logo: '🌑', lastCheck: '2025-12-01'
      },
      { 
        id: 'claude', name: 'Claude 3.5', rank: 'A', tagline: '逻辑最强', 
        verdict: '逻辑推理的天花板。如果你需要深度分析英文论文或复杂逻辑，选它。',
        badges: ['逻辑天花板', '极少幻觉'],
        pros: ['极少幻觉', '代码解释强'], 
        cons: ['门槛高'], 
        priceModel: 'Paid', link: 'https://claude.ai', logo: '🟠' , lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'meeting', title: '会议纪要', description: '录音转文字提炼ToDo', icon: 'mic',
    tags: ['Worker', 'Entrepreneur'],
    tools: [
      { 
        id: 'tingwu', name: '通义听悟', rank: 'S', tagline: '阿里出品', 
        verdict: '国内开会神器。区分发言人非常准，还能自动总结 ToDo，打工人必备。',
        badges: ['打工人救星', '语音识别准'],
        pros: ['区分发言人', '自动提取待办'], 
        cons: ['英文混合弱'], 
        priceModel: 'Freemium', link: 'https://tingwu.aliyun.com', logo: '👂' , lastCheck: '2025-12-01'
      },
      { 
        id: 'feishu', name: '飞书妙记', rank: 'A', tagline: '最强协作文档', 
        verdict: '如果你团队用飞书，那妙记就是无敌的。即点即听，生态内协作体验极佳。',
        badges: ['团队协作', '生态闭环'],
        pros: ['生态完善', '即点即听'], 
        cons: ['需使用飞书'], 
        priceModel: 'Free', link: 'https://www.feishu.cn', logo: '🐦' , lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'excel', title: 'Excel 数据分析', description: '自动写公式画图表', icon: 'excel',
    tags: ['Worker', 'Developer', 'Student'],
    tools: [
      { 
        id: 'chatexcel', name: 'ChatExcel', rank: 'S', tagline: '北大团队出品', 
        verdict: '别背公式了，直接告诉它你想怎么改表格，它自动帮你改。',
        badges: ['告别公式', '北大出品'],
        pros: ['完全免费', '无需记公式'], 
        cons: ['大文件处理慢'], 
        priceModel: 'Free', link: 'https://chatexcel.com', logo: '💹', lastCheck: '2025-12-01'
      }
    ]
  },

  // ==========================================
  // 💻 编程 & 技术 (Dev)
  // ==========================================
  {
    id: 'code', title: '写代码 / 改Bug', description: '结对编程助手', icon: 'code',
    tags: ['Developer', 'Student'],
    tools: [
      { 
        id: 'cursor', name: 'Cursor', rank: 'S', tagline: '能改写整个项目的编辑器', 
        verdict: '它不是一个插件，它是重写了 VS Code 的 AI 编辑器。用过就回不去了，Tab 补全太爽了。',
        badges: ['程序员新宠', '代码补全强'],
        pros: ['深度理解代码库', 'Tab补全极佳'], 
        cons: ['Pro版略贵'], 
        priceModel: 'Freemium', link: 'https://cursor.sh', logo: '🖱️', lastCheck: '2025-12-01'
      },
      { 
        id: 'lingma', name: '通义灵码', rank: 'A', tagline: '阿里出品', 
        verdict: '免费且对中文注释支持很好，适合国内开发环境，直接装在 VS Code 里。',
        badges: ['国产免费', 'IDE插件'],
        pros: ['中文支持好', 'IDEA/VSCode插件'], 
        cons: ['上下文较短'], 
        priceModel: 'Free', link: 'https://tongyi.aliyun.com/lingma', logo: '🤖', lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'sql', title: '写 SQL 查询', description: '自然语言查库', icon: 'sql',
    tags: ['Developer', 'Worker'],
    tools: [
      { 
        id: 'ai2sql', name: 'AI2SQL', rank: 'S', tagline: '专业SQL生成', 
        verdict: '不懂 SQL 也能查库。把你的需求写出来，它直接生成查询语句。',
        badges: ['数据分析师', '小白神器'],
        pros: ['多库支持'], 
        cons: ['UI基础'], 
        priceModel: 'Freemium', link: 'https://www.ai2sql.io', logo: '🗄️', lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'website', title: '一键生成网站', description: '前端代码生成', icon: 'web',
    tags: ['Developer', 'Entrepreneur'],
    tools: [
      { 
        id: 'v0', name: 'v0.dev', rank: 'S', tagline: 'Vercel出品', 
        verdict: 'Vercel 亲儿子。描述一下界面，直接生成可用的 React 代码，前端开发提效神器。',
        badges: ['前端神器', '代码质量高'],
        pros: ['React代码质量极高', '支持Tailwind'], 
        cons: ['需懂前端'], 
        priceModel: 'Freemium', link: 'https://v0.dev', logo: '🔼' , lastCheck: '2025-12-01'
      }
    ]
  },

  // ==========================================
  // 🎨 创意 & 视觉 (Creative)
  // ==========================================
  {
    id: 'video', title: '生成视频', description: '文字转短片，最火赛道', icon: 'video',
    tags: ['Creator', 'Entrepreneur', 'Student'], 
    tools: [
      { 
        id: 'kling', name: '可灵 (Kling)', rank: 'S', tagline: '快手出品，效果炸裂', 
        verdict: '快手出的王炸。目前生成视频最像真实世界的 AI，物理规律模拟得很真，还能生成 5s+ 长视频。',
        badges: ['效果炸裂', '物理模拟真'],
        pros: ['生成时长达5秒+', '物理规律模拟极佳', '真实感强'], 
        cons: ['排队时间长'], 
        priceModel: 'Freemium', link: 'https://klingai.kuaishou.com', logo: '🎬', lastCheck: '2025-12-01'
      },
      { 
        id: 'vidu', name: '即梦 (Vidu)', rank: 'A', tagline: '剪映团队出品', 
        verdict: '剪映团队出品。生成速度很快，风格多样，特别适合做短视频素材。',
        badges: ['速度快', '风格多'],
        pros: ['风格多样', '生成速度快'], 
        cons: ['写实感略逊可灵'], 
        priceModel: 'Freemium', link: 'https://jimeng.jianying.com', logo: '🌙', lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'draw', title: 'AI 绘画', description: '文生图，海报设计', icon: 'photo',
    tags: ['Creator', 'Student'],
    tools: [
      { 
        id: 'midjourney', name: 'Midjourney', rank: 'S', tagline: '画质天花板', 
        verdict: '依然是目前审美和光影的巅峰。虽然要付费，但效果绝对值回票价。',
        badges: ['画质天花板', '审美无敌'],
        pros: ['光影构图无敌', '审美最好'], 
        cons: ['需Discord', '付费'], 
        priceModel: 'Paid', link: 'https://www.midjourney.com', logo: '⛵' , lastCheck: '2025-12-01'
      },
      { 
        id: 'liblib', name: 'LiblibAI', rank: 'A', tagline: '国内最大的SD模型站', 
        verdict: '不想折腾本地部署 Stable Diffusion？用它在线跑图，模型极其丰富，完全免费。',
        badges: ['模型丰富', '免费在线跑'],
        pros: ['免费在线生图', '模型极其丰富'], 
        cons: ['新手上手略难'], 
        priceModel: 'Free', link: 'https://www.liblib.art', logo: '🎨' , lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'logo', title: '设计 Logo', description: '生成矢量图标', icon: 'logo',
    tags: ['Entrepreneur', 'Creator'],
    tools: [
      { 
        id: 'ideogram', name: 'Ideogram', rank: 'S', tagline: '文字渲染最强', 
        verdict: '唯一一个能把 Logo 里的文字写对的 AI。设计感非常强，不再是鬼画符。',
        badges: ['文字渲染强', '设计感'],
        pros: ['Logo文字写对', '设计感强'], 
        cons: ['下载矢量需付费'], 
        priceModel: 'Freemium', link: 'https://ideogram.ai', logo: '🆔' , lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'remove-bg', title: '一键抠图', description: '去除背景', icon: 'cut',
    tags: ['Worker', 'Creator', 'Student'],
    tools: [
      { 
        id: 'clipdrop', name: 'Clipdrop', rank: 'S', tagline: '抠图神器', 
        verdict: 'Stability AI 出品。连头发丝都能抠干净，电商主图必备，还能打光。',
        badges: ['发丝级抠图', '电商必备'],
        pros: ['精细到发丝', '打光'], 
        cons: ['额度少'], 
        priceModel: 'Freemium', link: 'https://clipdrop.co', logo: '🔷' , lastCheck: '2025-12-01'
      }
    ]
  },
  
  // ==========================================
  // 🎸 生活 & 学习 (Life)
  // ==========================================
  {
    id: 'music', title: '写歌 / 音乐', description: '生成完整歌曲', icon: 'music',
    tags: ['Student', 'Creator'],
    tools: [
      { 
        id: 'suno', name: 'Suno', rank: 'S', tagline: '广播级歌曲生成', 
        verdict: '没有任何乐理知识也能写出广播级的歌。支持中文歌词，甚至能做鬼畜歌。',
        badges: ['全民写歌', '中文支持'],
        pros: ['旋律抓耳', '支持中文'], 
        cons: ['人声略带电音'], 
        priceModel: 'Freemium', link: 'https://suno.com', logo: '☀️' , lastCheck: '2025-12-01'
      },
      { 
        id: 'udio', name: 'Udio', rank: 'A', tagline: '音质更专业', 
        verdict: '音质比 Suno 更好，编曲更复杂，适合对音乐品质有要求的创作者。',
        badges: ['音质发烧', '编曲专业'],
        pros: ['编曲丰富'], 
        cons: ['生成时长短'], 
        priceModel: 'Freemium', link: 'https://www.udio.com', logo: '🎵' , lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'speak', title: '口语陪练', description: '社恐学英语', icon: 'speak',
    tags: ['Student', 'Worker'],
    tools: [
      { 
        id: 'gptvoice', name: 'ChatGPT Voice', rank: 'S', tagline: '最自然的对话', 
        verdict: '最像真人的陪练。它会停顿、有语气，还能打断它，完全不像机器人。',
        badges: ['拟人度高', '免费陪练'],
        pros: ['语气拟人', '支持打断'], 
        cons: ['无课程体系'], 
        priceModel: 'Free', link: 'https://chatgpt.com', logo: '🟢' , lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'math', title: '解数学题', description: '拍照出步骤', icon: 'math',
    tags: ['Student'], 
    tools: [
      { 
        id: 'photomath', name: 'Photomath', rank: 'S', tagline: '拍题神器', 
        verdict: '老牌神器加持 AI。对着卷子拍一下，步骤全出来，家长辅导作业救星。',
        badges: ['作业救星', '步骤详细'],
        pros: ['识别准', '步骤详尽'], 
        cons: ['理科弱'], 
        priceModel: 'Free', link: 'https://photomath.com', logo: '📸', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'legal', title: '合同审查', description: '避坑风险条款', icon: 'legal',
    tags: ['Entrepreneur', 'Worker'],
    tools: [
      { 
        id: 'spellbook', name: 'Spellbook', rank: 'S', tagline: '专业审查', 
        verdict: '专门用来找合同漏洞的 AI。比你自己看 50 页合同要仔细得多。',
        badges: ['避坑神器', '专业法律'],
        pros: ['集成Word', '风险提示准'], 
        cons: ['贵'], 
        priceModel: 'Paid', link: 'https://www.spellbook.legal', logo: '📜' , lastCheck: '2025-12-01'
      }
    ]
  },
  {
    id: 'translate', title: '精准翻译', description: '信达雅的本地化重写', icon: 'trans',
    tags: ['Student', 'Worker', 'Entrepreneur'],
    tools: [
      { 
        id: 'deepl', name: 'DeepL', rank: 'S', tagline: '最自然翻译', 
        verdict: '它懂语境。Google 翻译是直译，DeepL 是意译，读起来像人写的。',
        badges: ['最自然翻译', '文档翻译'],
        pros: ['语感极佳'], 
        cons: ['限字数'], 
        priceModel: 'Freemium', link: 'https://www.deepl.com', logo: '🟦', lastCheck: '2025-12-01'
      },
      { 
        id: 'immersive', name: '沉浸式翻译', rank: 'A', tagline: '浏览器插件神器', 
        verdict: '浏览外文网站的神器。左右对照显示，看推特、看文档体验极佳。',
        badges: ['浏览器必备', '双语对照'],
        pros: ['双语对照', '支持PDF'], 
        cons: ['需配置API'], 
        priceModel: 'Freemium', link: 'https://immersivetranslate.com', logo: '🦄', lastCheck: '2025-12-01'
      }
    ]
  }
];