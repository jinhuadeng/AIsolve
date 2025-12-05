// src/lib/data.ts

export type Rank = 'S' | 'A' | 'B';

export interface Tool {
  id: string;
  name: string;
  rank: Rank;
  tagline: string;
  pros: string[];
  cons: string[];
  priceModel: 'Free' | 'Freemium' | 'Paid';
  link: string;
  logo: string; // 这个是 fallback emoji，保留着万一 logo 加载失败用
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string; // 👈 这里现在存的是图标 ID (string)
  tools: Tool[];
}

export const scenarios: Scenario[] = [
  // ==========================================
  // 核心生产力
  // ==========================================
  {
    id: 'ppt',
    title: '做 PPT / 演示文稿',
    description: '只有大纲或想法，想快速生成精美排版的 Slide',
    icon: 'ppt', // 对应 Presentation 图标
    tools: [
      {
        id: 'gamma',
        name: 'Gamma',
        rank: 'S',
        tagline: '目前最优雅的网页版 PPT 生成器',
        pros: ['排版审美在线，不再是“工程师审美”', '支持一键生成网页/PDF', '中文支持极好'],
        cons: ['自定义动画功能较弱', '导出 PPTX 格式偶尔错位'],
        priceModel: 'Freemium',
        link: 'https://gamma.app',
        logo: '🟣'
      },
      {
        id: 'copilot',
        name: 'Microsoft Copilot',
        rank: 'A',
        tagline: 'Office 全家桶深度集成',
        pros: ['直接把 Word 文档转成 PPT', '企业数据安全合规'],
        cons: ['美感不如 Gamma，偏传统模版', '需要订阅 Office 365'],
        priceModel: 'Paid',
        link: 'https://www.microsoft.com/en-us/microsoft-365/copilot',
        logo: '🟦'
      }
    ]
  },
  {
    id: 'long-doc',
    title: '读百页文档 / 财报',
    description: '快速提炼 PDF、论文、合同的核心要点',
    icon: 'doc',
    tools: [
      {
        id: 'claude-3',
        name: 'Claude 3.5 Sonnet',
        rank: 'S',
        tagline: '长文本理解能力的无冕之王',
        pros: ['逻辑推理能力强于 GPT-4', '极少产生幻觉'],
        cons: ['国内访问门槛较高'],
        priceModel: 'Paid',
        link: 'https://claude.ai',
        logo: '🟠'
      },
      {
        id: 'kimi',
        name: 'Kimi',
        rank: 'A',
        tagline: '国产长文本之光，免费好用',
        pros: ['支持 200万字上下文', '中文理解满分'],
        cons: ['复杂逻辑推理稍逊 Claude'],
        priceModel: 'Free',
        link: 'https://kimi.moonshot.cn',
        logo: '🌑'
      }
    ]
  },
  {
    id: 'excel-analysis',
    title: 'Excel 数据分析',
    description: '记不住公式，或者想直接通过对话生成图表',
    icon: 'excel',
    tools: [
      {
        id: 'chat-excel',
        name: 'ChatExcel',
        rank: 'S',
        tagline: '北大团队出品，对话式表格修改',
        pros: ['无需记公式，直接说人话', '完全免费'],
        cons: ['处理超大数据集速度较慢'],
        priceModel: 'Free',
        link: 'https://chatexcel.com',
        logo: '💹'
      },
      {
        id: 'gpt-4-data',
        name: 'GPT-4 (Data Analysis)',
        rank: 'A',
        tagline: '极其强大的 Python 数据分析后台',
        pros: ['能画出极其专业的统计图', '支持清洗脏数据'],
        cons: ['由于是云端运行，可能有隐私顾虑'],
        priceModel: 'Paid',
        link: 'https://chatgpt.com',
        logo: '🟢'
      }
    ]
  },
  {
    id: 'mind-map',
    title: '生成思维导图',
    description: '头脑风暴，将杂乱的想法结构化',
    icon: 'mind',
    tools: [
      {
        id: 'xmind-ai',
        name: 'Xmind AI',
        rank: 'S',
        tagline: '老牌导图软件的 AI 进化版',
        pros: ['专业导图功能最全', 'UI 交互流畅'],
        cons: ['部分高级 AI 功能收费'],
        priceModel: 'Freemium',
        link: 'https://xmind.ai',
        logo: '❌'
      },
      {
        id: 'markmap',
        name: 'Markmap',
        rank: 'A',
        tagline: 'Markdown 一键转导图',
        pros: ['轻量级，极速', '适合程序员'],
        cons: ['样式比较单一'],
        priceModel: 'Free',
        link: 'https://markmap.js.org',
        logo: 'Ⓜ️'
      }
    ]
  },
  {
    id: 'meeting-notes',
    title: '会议转录 / 纪要',
    description: '把乱糟糟的录音变成条理清晰的纪要',
    icon: 'mic',
    tools: [
      {
        id: 'tongyi-tingwu',
        name: '通义听悟',
        rank: 'S',
        tagline: '阿里出品，中文识别率惊人',
        pros: ['区分发言人非常准确', '自动提取待办事项'],
        cons: ['英文混合识别稍弱'],
        priceModel: 'Freemium',
        link: 'https://tingwu.aliyun.com',
        logo: '👂'
      },
      {
        id: 'otter',
        name: 'Otter.ai',
        rank: 'A',
        tagline: '英语会议首选',
        pros: ['实时接入 Zoom/Google Meet', '英文识别极佳'],
        cons: ['中文完全不支持'],
        priceModel: 'Freemium',
        link: 'https://otter.ai',
        logo: '🦦'
      }
    ]
  },

  // ==========================================
  // 写作与翻译
  // ==========================================
  {
    id: 'translate',
    title: '精准翻译 / 润色',
    description: '不仅是翻译，更是“信达雅”的本地化重写',
    icon: 'trans',
    tools: [
      {
        id: 'deepl',
        name: 'DeepL',
        rank: 'S',
        tagline: '公认的最自然机器翻译',
        pros: ['语感比 Google 翻译好太多', '支持文档整篇翻译'],
        cons: ['免费版有字数限制'],
        priceModel: 'Freemium',
        link: 'https://www.deepl.com',
        logo: '🟦'
      },
      {
        id: 'immersivetranslate',
        name: '沉浸式翻译',
        rank: 'A',
        tagline: '浏览器插件神器',
        pros: ['双语对照阅读', '支持调用 GPT/Claude'],
        cons: ['需要自己配置 API Key 才能发挥威力'],
        priceModel: 'Freemium',
        link: 'https://immersivetranslate.com',
        logo: '🦄'
      }
    ]
  },
  {
    id: 'copywriting',
    title: '写小红书 / 营销文案',
    description: '需要吸引眼球的标题和 emoji 满满的正文',
    icon: 'write',
    tools: [
      {
        id: 'kimi-copy',
        name: 'Kimi',
        rank: 'S',
        tagline: '最懂中文互联网梗的 AI',
        pros: ['联网搜索热梗', '语气模仿非常到位'],
        cons: ['有时会过于啰嗦'],
        priceModel: 'Free',
        link: 'https://kimi.moonshot.cn',
        logo: '🌑'
      },
      {
        id: 'jasper',
        name: 'Jasper',
        rank: 'A',
        tagline: '专业营销团队的首选',
        pros: ['内置大量营销学框架 (AIDA等)', '适合跨境电商'],
        cons: ['价格昂贵', '中文语感一般'],
        priceModel: 'Paid',
        link: 'https://www.jasper.ai',
        logo: '💎'
      }
    ]
  },
  {
    id: 'academic',
    title: '学术论文润色',
    description: '降低查重率，提升学术英语表达',
    icon: 'edu',
    tools: [
      {
        id: 'wordvice',
        name: 'Wordvice AI',
        rank: 'S',
        tagline: '专注学术英语的润色工具',
        pros: ['针对不同期刊风格优化', '提供查重功能'],
        cons: ['深度润色需要付费'],
        priceModel: 'Freemium',
        link: 'https://wordvice.ai',
        logo: '✒️'
      }
    ]
  },

  // ==========================================
  // 视觉与设计
  // ==========================================
  {
    id: 'logo-design',
    title: '设计 Logo / 图标',
    description: '为个人品牌或项目生成矢量级 Logo',
    icon: 'logo',
    tools: [
      {
        id: 'ideogram',
        name: 'Ideogram',
        rank: 'S',
        tagline: '目前文字渲染能力最强的 AI 绘图',
        pros: ['Logo 里的文字绝对写对', '设计感极强'],
        cons: ['下载矢量图可能需要付费'],
        priceModel: 'Freemium',
        link: 'https://ideogram.ai',
        logo: '🆔'
      },
      {
        id: 'recraft',
        name: 'Recraft',
        rank: 'A',
        tagline: '生成真正的矢量图 (SVG)',
        pros: ['无限放大不失真', '专门针对图标设计优化'],
        cons: ['风格偏扁平化'],
        priceModel: 'Freemium',
        link: 'https://www.recraft.ai',
        logo: '🟥'
      }
    ]
  },
  {
    id: 'remove-bg',
    title: '一键抠图 / 去背景',
    description: '电商主图处理，证件照换底',
    icon: 'cut',
    tools: [
      {
        id: 'clipdrop',
        name: 'Clipdrop',
        rank: 'S',
        tagline: 'Stability AI 出品，发丝级抠图',
        pros: ['边缘处理极佳', '提供打光等后续功能'],
        cons: ['免费额度较少'],
        priceModel: 'Freemium',
        link: 'https://clipdrop.co',
        logo: '🔷'
      }
    ]
  },
  {
    id: 'image-upscale',
    title: '图片变高清 / 放大',
    description: '拯救模糊的老照片或低分辨率表情包',
    icon: 'zoom',
    tools: [
      {
        id: 'magnific',
        name: 'Magnific AI',
        rank: 'S',
        tagline: '不仅是放大，更是“重绘”细节',
        pros: ['增加惊人的皮肤纹理和细节', '目前市面最强画质'],
        cons: ['非常昂贵'],
        priceModel: 'Paid',
        link: 'https://magnific.ai',
        logo: '✨'
      },
      {
        id: 'bigjpg',
        name: 'BigJPG',
        rank: 'B',
        tagline: '二次元/动漫图片放大神器',
        pros: ['对线条处理很好', '价格便宜'],
        cons: ['真实照片效果一般'],
        priceModel: 'Freemium',
        link: 'https://bigjpg.com',
        logo: '🖼️'
      }
    ]
  },
  {
    id: 'photorealistic',
    title: '生成逼真照片 / 摄影',
    description: '像单反相机拍出来的超写实图片',
    icon: 'photo',
    tools: [
      {
        id: 'midjourney',
        name: 'Midjourney V6',
        rank: 'S',
        tagline: '依然是 AI 绘画的画质天花板',
        pros: ['光影、构图无敌', '风格化能力极强'],
        cons: ['需要用 Discord', '完全付费'],
        priceModel: 'Paid',
        link: 'https://www.midjourney.com',
        logo: '⛵'
      },
      {
        id: 'flux',
        name: 'Flux.1',
        rank: 'A',
        tagline: '开源界的画质新皇',
        pros: ['手部细节崩坏少', '文字渲染能力强'],
        cons: ['对显卡要求高'],
        priceModel: 'Free',
        link: 'https://blackforestlabs.ai',
        logo: '🌲'
      }
    ]
  },
  {
    id: 'video-gen',
    title: '生成视频 / 动画',
    description: '输入文字，生成 5-10 秒的视频片段',
    icon: 'video',
    tools: [
      {
        id: 'runway',
        name: 'Runway Gen-3',
        rank: 'S',
        tagline: '视频生成领域的领头羊',
        pros: ['物理规律模拟较好', '可精细控制镜头运动'],
        cons: ['生成速度慢', '价格不菲'],
        priceModel: 'Paid',
        link: 'https://runwayml.com',
        logo: '🎞️'
      },
      {
        id: 'luma',
        name: 'Luma Dream Machine',
        rank: 'A',
        tagline: '免费试用门槛低，速度快',
        pros: ['生成速度极快', '首尾帧控制能力强'],
        cons: ['画质略逊于 Runway'],
        priceModel: 'Freemium',
        link: 'https://lumalabs.ai',
        logo: '🌙'
      }
    ]
  },

  // ==========================================
  // 编程与技术
  // ==========================================
  {
    id: 'coding-assist',
    title: '写代码 / 找 Bug',
    description: '程序员的结对编程助手',
    icon: 'code',
    tools: [
      {
        id: 'cursor',
        name: 'Cursor',
        rank: 'S',
        tagline: '能改写整个项目的 AI 编辑器',
        pros: ['深度理解整个代码库', 'Tab 键补全体验极佳'],
        cons: ['Pro 版略贵'],
        priceModel: 'Freemium',
        link: 'https://cursor.sh',
        logo: '🖱️'
      },
      {
        id: 'copilot-github',
        name: 'GitHub Copilot',
        rank: 'A',
        tagline: '生态最完善的代码助手',
        pros: ['集成在各大编辑器中', '企业级采用率高'],
        cons: ['Chat 模式不如 Cursor 智能'],
        priceModel: 'Paid',
        link: 'https://github.com/features/copilot',
        logo: '🐙'
      }
    ]
  },
  {
    id: 'web-builder',
    title: '一键生成网站 / UI',
    description: '没有设计基础，想做一个 Landing Page',
    icon: 'web',
    tools: [
      {
        id: 'v0',
        name: 'v0.dev',
        rank: 'S',
        tagline: 'Vercel 出品，直接生成 React 代码',
        pros: ['生成的代码质量极高', '支持 Tailwind CSS'],
        cons: ['需要懂一点前端知识才能上线'],
        priceModel: 'Freemium',
        link: 'https://v0.dev',
        logo: '🔼'
      }
    ]
  },

  // ==========================================
  // 搜索与资讯
  // ==========================================
  {
    id: 'ai-search',
    title: '深度搜索 / 调研',
    description: '不想看广告，只想直接要答案和来源',
    icon: 'search',
    tools: [
      {
        id: 'perplexity',
        name: 'Perplexity',
        rank: 'S',
        tagline: '替代 Google 的最佳选择',
        pros: ['引用来源极其精准', '支持 Pro Search 深度推理'],
        cons: ['部分高级模型需要付费'],
        priceModel: 'Freemium',
        link: 'https://www.perplexity.ai',
        logo: '🌀'
      },
      {
        id: 'genspark',
        name: 'Genspark',
        rank: 'A',
        tagline: '生成“Sparkpage”专题页',
        pros: ['不仅仅给答案，还生成一个维基页面'],
        cons: ['加载速度稍慢'],
        priceModel: 'Free',
        link: 'https://www.genspark.ai',
        logo: '✨'
      }
    ]
  },

  // ==========================================
  // 生活与娱乐
  // ==========================================
  {
    id: 'music-gen',
    title: '创作歌曲 / 背景音乐',
    description: '写歌词生成完整的爆款歌曲',
    icon: 'music',
    tools: [
      {
        id: 'suno',
        name: 'Suno V3',
        rank: 'S',
        tagline: '让不懂乐理的人也能做广播级歌曲',
        pros: ['旋律抓耳', '支持中文歌词'],
        cons: ['人声有时会有电音感'],
        priceModel: 'Freemium',
        link: 'https://suno.com',
        logo: '☀️'
      }
    ]
  },
  {
    id: 'language-learning',
    title: '口语陪练 / 学外语',
    description: '社恐福音，随时随地练口语',
    icon: 'speak',
    tools: [
      {
        id: 'gpt-voice',
        name: 'ChatGPT Voice',
        rank: 'S',
        tagline: '最自然的对话体验',
        pros: ['GPT-4o 语气极其拟人', '支持打断'],
        cons: ['没有系统的课程体系'],
        priceModel: 'Free',
        link: 'https://chatgpt.com',
        logo: '🟢'
      }
    ]
  },
  {
    id: 'resume',
    title: '简历优化 / 模拟面试',
    description: '针对 JD 修改简历，提高通过率',
    icon: 'resume',
    tools: [
      {
        id: 'rezi',
        name: 'Rezi',
        rank: 'S',
        tagline: '专为通过 ATS 系统设计的简历',
        pros: ['关键词优化', '打分系统'],
        cons: ['导出多次需要付费'],
        priceModel: 'Freemium',
        link: 'https://www.rezi.ai',
        logo: '📄'
      }
    ]
  },
  {
    id: 'headshot',
    title: '生成职业照 / 形象照',
    description: '不用去照相馆，用自拍生成 LinkedIn 头像',
    icon: 'face',
    tools: [
      {
        id: 'headshotpro',
        name: 'HeadshotPro',
        rank: 'S',
        tagline: '最像本人的职业照生成',
        pros: ['真实度极高', '背景选择多'],
        cons: ['价格较贵'],
        priceModel: 'Paid',
        link: 'https://www.headshotpro.com',
        logo: '🤵'
      }
    ]
  },
  {
    id: 'travel',
    title: '旅行攻略 / 行程规划',
    description: '生成带地图和时间的懒人路书',
    icon: 'travel',
    tools: [
      {
        id: 'gemini',
        name: 'Google Gemini',
        rank: 'S',
        tagline: '结合 Google Maps 的最强向导',
        pros: ['直接调用地图数据', '实时航班酒店信息'],
        cons: ['规划路线偶尔绕路'],
        priceModel: 'Free',
        link: 'https://gemini.google.com',
        logo: '💎'
      }
    ]
  },
  {
    id: 'math-solver',
    title: '解数学题 / 辅导作业',
    description: '拍题即得步骤解析',
    icon: 'math',
    tools: [
      {
        id: 'photomath',
        name: 'Photomath',
        rank: 'S',
        tagline: '老牌拍题神器，现已接入 AI',
        pros: ['识别手写公式准确', '步骤极其详细'],
        cons: ['只能解数学，理科弱'],
        priceModel: 'Free',
        link: 'https://photomath.com',
        logo: '📸'
      }
    ]
  },

  // ==========================================
  // 1. 程序员与数据 (Dev & Data)
  // ==========================================
  { id: 'sql-gen',
    title: '写 SQL / 数据库查询',
    description: '不懂 Join 和子查询，用自然语言查库',
    icon: 'sql',
    tools: [
      {
        id: 'ai2sql',
        name: 'AI2SQL',
        rank: 'S',
        tagline: '专业的 SQL 生成器，支持多种数据库',
        pros: ['支持 MySQL, PostgreSQL, Oracle', '包含语法高亮和格式化'],
        cons: ['UI 比较基础'],
        priceModel: 'Freemium',
        link: 'https://www.ai2sql.io',
        logo: '🗄️'
      },
      {
        id: 'text2sql',
        name: 'Text2SQL.ai',
        rank: 'A',
        tagline: '极简的文本转 SQL 工具',
        pros: ['速度快', '免费额度够用'],
        cons: ['复杂查询准确率一般'],
        priceModel: 'Freemium',
        link: 'https://www.text2sql.ai',
        logo: '🔡'
      },
      {
        id: 'chatgpt-sql',
        name: 'ChatGPT',
        rank: 'B',
        tagline: '通用大模型写 SQL',
        pros: ['能解释查询逻辑'],
        cons: ['不知道你的表结构，需要详细描述'],
        priceModel: 'Free',
        link: 'https://chatgpt.com',
        logo: '🟢'
      }
    ]
  },
  {
    id: 'regex',
    title: '生成正则表达式',
    description: '解决这一串看不懂的符号',
    icon: 'regex',
    tools: [
      {
        id: 'regex-go',
        name: 'AutoRegex',
        rank: 'S',
        tagline: '英语转正则，正则转英语',
        pros: ['双向翻译', '极高准确率'],
        cons: ['功能单一'],
        priceModel: 'Free',
        link: 'https://www.autoregex.xyz',
        logo: '🔣'
      },
      {
        id: 'regex101',
        name: 'Regex101 (AI)',
        rank: 'A',
        tagline: '最强的正则调试工具+AI解释',
        pros: ['调试功能无敌', 'AI 解释每一段含义'],
        cons: ['生成能力稍弱于调试能力'],
        priceModel: 'Free',
        link: 'https://regex101.com',
        logo: '🛠️'
      },
      {
        id: 'gpt-regex',
        name: 'ChatGPT',
        rank: 'B',
        tagline: '通用生成',
        pros: ['能处理复杂的业务逻辑描述'],
        cons: ['偶尔生成的正则性能不佳'],
        priceModel: 'Free',
        link: 'https://chatgpt.com',
        logo: '🟢'
      }
    ]
  },
  {
    id: 'shell-cmd',
    title: 'Linux 命令查询',
    description: '忘记怎么解压 tar.gz 或者配置防火墙',
    icon: 'code',
    tools: [
      {
        id: 'warp',
        name: 'Warp Terminal',
        rank: 'S',
        tagline: '自带 AI 的次时代终端',
        pros: ['在命令行里直接问 AI', '智能补全参数'],
        cons: ['目前仅 Mac/Linux 体验最好'],
        priceModel: 'Freemium',
        link: 'https://www.warp.dev',
        logo: '⌨️'
      },
      {
        id: 'cmd-j',
        name: 'Command J',
        rank: 'A',
        tagline: '浏览器端的命令助手',
        pros: ['快速查询', '无需安装 App'],
        cons: ['功能较简单'],
        priceModel: 'Free',
        link: 'https://commandj.io',
        logo: '🪟'
      },
      {
        id: 'copilot-cli',
        name: 'GitHub Copilot CLI',
        rank: 'B',
        tagline: 'GitHub 官方命令行工具',
        pros: ['解释命令含义'],
        cons: ['配置稍微麻烦'],
        priceModel: 'Paid',
        link: 'https://githubnext.com/projects/copilot-cli',
        logo: '🐙'
      }
    ]
  },
  {
    id: 'unit-test',
    title: '生成单元测试',
    description: '不想写测试用例，让 AI 帮你写覆盖率',
    icon: 'bug',
    tools: [
      {
        id: 'codium',
        name: 'CodiumAI',
        rank: 'S',
        tagline: '专注于代码完整性与测试生成',
        pros: ['分析边缘情况 (Edge Cases)', '直接集成 IDE', '免费版很强'],
        cons: ['需要安装 IDE 插件'],
        priceModel: 'Freemium',
        link: 'https://www.codium.ai',
        logo: '🧪'
      },
      {
        id: 'ponscode',
        name: 'Poncde',
        rank: 'A',
        tagline: '企业级测试生成',
        pros: ['支持遗留代码重构'],
        cons: ['面向企业收费'],
        priceModel: 'Paid',
        link: 'https://www.poncode.ai',
        logo: '⚙️'
      },
      {
        id: 'chatgpt-test',
        name: 'ChatGPT',
        rank: 'B',
        tagline: '粘贴代码让它写 Test',
        pros: ['简单快手'],
        cons: ['需要手动复制粘贴，容易出错'],
        priceModel: 'Free',
        link: 'https://chatgpt.com',
        logo: '🟢'
      }
    ]
  },

 // ==========================================
  // 2. 市场与运营 (Marketing)
  // ==========================================
  {
    id: 'seo-blog',
    title: '写 SEO 博客文章',
    description: '符合搜索引擎收录规范的长文章',
    icon: 'seo',
    tools: [
      {
        id: 'surfer',
        name: 'Surfer SEO',
        rank: 'S',
        tagline: '写出 Google 第一名的文章',
        pros: ['内置 SEO 评分系统', '关键词密度分析', '竞品分析'],
        cons: ['价格昂贵'],
        priceModel: 'Paid',
        link: 'https://surferseo.com',
        logo: '🏄'
      },
      {
        id: 'writesonic',
        name: 'Writesonic',
        rank: 'A',
        tagline: '高性价比的 SEO 写作工具',
        pros: ['基于实时数据写作', '支持 3.5/4.0 切换'],
        cons: ['生成的文章深度一般'],
        priceModel: 'Freemium',
        link: 'https://writesonic.com',
        logo: '⚡'
      },
      {
        id: 'chatgpt-seo',
        name: 'ChatGPT',
        rank: 'B',
        tagline: '通用写作',
        pros: ['完全免费'],
        cons: ['不懂实时关键词热度'],
        priceModel: 'Free',
        link: 'https://chatgpt.com',
        logo: '🟢'
      }
    ]
  },
  {
    id: 'email-cold',
    title: '写开发信 / 冷邮件',
    description: '给潜在客户发邮件，提高打开率',
    icon: 'email',
    tools: [
      {
        id: 'lavender',
        name: 'Lavender',
        rank: 'S',
        tagline: '邮件写作教练',
        pros: ['实时给邮件打分', '分析手机端阅读体验', '个性化数据抓取'],
        cons: ['需要配合 Gmail/Outlook 使用'],
        priceModel: 'Paid',
        link: 'https://www.lavender.ai',
        logo: '📧'
      },
      {
        id: 'copyai-mail',
        name: 'Copy.ai',
        rank: 'A',
        tagline: '不仅是文案，更是销售信专家',
        pros: ['大量冷邮件模版', '语气调整丰富'],
        cons: ['批量生成功能稍弱'],
        priceModel: 'Freemium',
        link: 'https://www.copy.ai',
        logo: '📝'
      },
      {
        id: 'rytr',
        name: 'Rytr',
        rank: 'B',
        tagline: '轻量级文案助手',
        pros: ['便宜，简单'],
        cons: ['功能较基础'],
        priceModel: 'Freemium',
        link: 'https://rytr.me',
        logo: '🖊️'
      }
    ]
  },
  {
    id: 'social-post',
    title: 'LinkedIn / Twitter 推文',
    description: '打造个人 IP，生成高互动内容',
    icon: 'social',
    tools: [
      {
        id: 'taplio',
        name: 'Taplio',
        rank: 'S',
        tagline: 'LinkedIn 个人品牌一站式工具',
        pros: ['自动生成轮播图 (Carousel)', '病毒式帖子灵感库', '定时发送'],
        cons: ['专攻 LinkedIn，不支持其他平台'],
        priceModel: 'Paid',
        link: 'https://taplio.com',
        logo: '👔'
      },
      {
        id: 'tweethunter',
        name: 'TweetHunter',
        rank: 'A',
        tagline: 'Twitter (X) 涨粉神器',
        pros: ['寻找高赞推文灵感', '自动回复'],
        cons: ['价格较高'],
        priceModel: 'Paid',
        link: 'https://tweethunter.io',
        logo: '🐦'
      },
      {
        id: 'buffer-ai',
        name: 'Buffer AI',
        rank: 'B',
        tagline: '老牌社媒管理工具',
        pros: ['支持全平台', '免费计划良心'],
        cons: ['AI 生成能力较基础'],
        priceModel: 'Freemium',
        link: 'https://buffer.com',
        logo: '🧊'
      }
    ]
  },

  // ==========================================
  // 3. 设计与创意 (Creative)
  // ==========================================
  {
    id: 'interior-design',
    title: '室内设计 / 软装',
    description: '拍一张毛坯房或旧房间，一键生成装修效果图',
    icon: 'home',
    tools: [
      {
        id: 'interiorai',
        name: 'Interior AI',
        rank: 'S',
        tagline: '最火的室内设计 AI',
        pros: ['支持多种风格 (现代、北欧等)', '保留原房间结构', '渲染速度快'],
        cons: ['免费版生成的图有水印'],
        priceModel: 'Freemium',
        link: 'https://interiorai.com',
        logo: '🛋️'
      },
      {
        id: 'roomgpt',
        name: 'RoomGPT',
        rank: 'A',
        tagline: '免费开源的换装修工具',
        pros: ['简单易用', '无需复杂参数'],
        cons: ['服务器经常繁忙'],
        priceModel: 'Free',
        link: 'https://www.roomgpt.io',
        logo: '🏠'
      },
      {
        id: 'midjourney-room',
        name: 'Midjourney',
        rank: 'B',
        tagline: '生成灵感图',
        pros: ['审美最好'],
        cons: ['无法保留你家原本的户型结构'],
        priceModel: 'Paid',
        link: 'https://www.midjourney.com',
        logo: '⛵'
      }
    ]
  },
  {
    id: 'voice-clone',
    title: '声音克隆 / TTS',
    description: '只需 30 秒录音，复刻任何人的声音',
    icon: 'mic',
    tools: [
      {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        rank: 'S',
        tagline: '目前地表最强 AI 语音',
        pros: ['情感表达极其丰富', '支持中文', '克隆相似度 99%'],
        cons: ['字符数消耗快'],
        priceModel: 'Freemium',
        link: 'https://elevenlabs.io',
        logo: '🔊'
      },
      {
        id: 'gpt-sovits',
        name: 'GPT-SoVITS',
        rank: 'A',
        tagline: '开源免费的克隆神器',
        pros: ['完全免费', '本地部署保护隐私', '少样本训练效果好'],
        cons: ['需要懂一点技术部署'],
        priceModel: 'Free',
        link: 'https://github.com/RVC-Boss/GPT-SoVITS',
        logo: '🦜'
      },
      {
        id: 'playht',
        name: 'Play.ht',
        rank: 'B',
        tagline: '极速语音生成',
        pros: ['生成速度极快', 'API 稳定'],
        cons: ['中文情感略逊于 ElevenLabs'],
        priceModel: 'Paid',
        link: 'https://play.ht',
        logo: '▶️'
      }
    ]
  },
  {
    id: 'video-edit',
    title: '视频剪辑 / 切片',
    description: '自动去静音、自动加字幕、长视频切短视频',
    icon: 'video',
    tools: [
      {
        id: 'descript',
        name: 'Descript',
        rank: 'S',
        tagline: '像编辑 Word 文档一样剪视频',
        pros: ['删文字=删画面', '自动去除“嗯、啊”语气词', '自动矫正眼神'],
        cons: ['导出速度一般'],
        priceModel: 'Freemium',
        link: 'https://www.descript.com',
        logo: '🎞️'
      },
      {
        id: 'capcut',
        name: 'CapCut (剪映)',
        rank: 'A',
        tagline: '最好用的消费级剪辑软件',
        pros: ['AI 特效丰富', '自动字幕准确', '完全免费（大部分功能）'],
        cons: ['专业功能不如 Premiere'],
        priceModel: 'Freemium',
        link: 'https://www.capcut.com',
        logo: '✂️'
      },
      {
        id: 'opus-clip',
        name: 'Opus Clip',
        rank: 'B',
        tagline: '长视频自动切成 Shorts/TikTok',
        pros: ['自动识别高光时刻', '自动添加动态字幕'],
        cons: ['处理长视频等待时间久'],
        priceModel: 'Paid',
        link: 'https://www.opus.pro',
        logo: '📹'
      }
    ]
  },

  // ==========================================
  // 4. 生活与日常 (Lifestyle)
  // ==========================================
  {
    id: 'cooking',
    title: '冰箱剩菜食谱',
    description: '拍照冰箱里的食材，生成美味食谱',
    icon: 'cook',
    tools: [
      {
        id: 'chef-gpt',
        name: 'ChefGPT',
        rank: 'S',
        tagline: '你的 AI 私人主厨',
        pros: ['支持“Pantry Mode”食材匹配', '提供详细步骤', '推荐配酒'],
        cons: ['部分高级食谱收费'],
        priceModel: 'Freemium',
        link: 'https://www.chefgpt.xyz',
        logo: '👨‍🍳'
      },
      {
        id: 'gpt-4-vision-cook',
        name: 'GPT-4 Vision',
        rank: 'A',
        tagline: '直接拍照识别',
        pros: ['识别食材极准', '可以要求任何国家的口味'],
        cons: ['需要自己写 Prompt'],
        priceModel: 'Paid',
        link: 'https://chatgpt.com',
        logo: '🟢'
      },
      {
        id: 'supercook',
        name: 'SuperCook',
        rank: 'B',
        tagline: '老牌食谱搜索引擎',
        pros: ['数据库庞大', '完全免费'],
        cons: ['非生成式 AI，灵活性差'],
        priceModel: 'Free',
        link: 'https://www.supercook.com',
        logo: '🍲'
      }
    ]
  },
  {
    id: 'fitness-plan',
    title: '健身计划 / 饮食规划',
    description: '根据体重、目标生成 30 天训练表',
    icon: 'fit',
    tools: [
      {
        id: 'fitbod',
        name: 'Fitbod',
        rank: 'S',
        tagline: '算法生成的举铁计划',
        pros: ['根据你的器械生成计划', '自动计算负荷'],
        cons: ['需要付费订阅'],
        priceModel: 'Paid',
        link: 'https://fitbod.me',
        logo: '🏋️'
      },
      {
        id: 'chatgpt-fit',
        name: 'ChatGPT',
        rank: 'A',
        tagline: '免费的私教顾问',
        pros: ['生成饮食表非常详细', '可以随时调整难度'],
        cons: ['无法演示动作标准度'],
        priceModel: 'Free',
        link: 'https://chatgpt.com',
        logo: '🟢'
      },
      {
        id: 'musclewiki',
        name: 'MuscleWiki',
        rank: 'B',
        tagline: '可视化肌肉锻炼指南',
        pros: ['点哪里练哪里', '直观'],
        cons: ['计划生成能力较弱'],
        priceModel: 'Free',
        link: 'https://musclewiki.com',
        logo: '💪'
      }
    ]
  },
  {
    id: 'legal-contract',
    title: '法律合同审查',
    description: '快速找出合同里的坑和风险条款',
    icon: 'legal',
    tools: [
      {
        id: 'spellbook',
        name: 'Spellbook',
        rank: 'S',
        tagline: '像魔法一样审查合同',
        pros: ['专业律师微调的模型', '集成在 Word 里', '风险提示精准'],
        cons: ['价格昂贵，面向专业人士'],
        priceModel: 'Paid',
        link: 'https://www.spellbook.legal',
        logo: '📜'
      },
      {
        id: 'legalrobot',
        name: 'Legal Robot',
        rank: 'A',
        tagline: '自动化合同分析',
        pros: ['把法律术语翻译成人话', '易用性好'],
        cons: ['中文合同支持一般'],
        priceModel: 'Paid',
        link: 'https://legalrobot.com',
        logo: '🤖'
      },
      {
        id: 'claude-legal',
        name: 'Claude 3',
        rank: 'B',
        tagline: '通用的长文档分析',
        pros: ['上下文长，能读完整个合同'],
        cons: ['仅供参考，不负法律责任'],
        priceModel: 'Paid',
        link: 'https://claude.ai',
        logo: '🟠'
      }
    ]
  },
    {
    id: 'gift-idea',
    title: '送礼灵感',
    description: '给女朋友/男朋友/父母送什么礼物？',
    icon: 'gift',
    tools: [
      {
        id: 'dreamgift',
        name: 'DreamGift',
        rank: 'S',
        tagline: 'AI 礼物推荐助手',
        pros: ['根据性格、爱好推荐', '直接给购买链接'],
        cons: ['主要针对欧美市场商品'],
        priceModel: 'Free',
        link: 'https://dreamgift.ai',
        logo: '🎁'
      },
      {
        id: 'cool-gift',
        name: 'Cool Gift AI',
        rank: 'A',
        tagline: '发现新奇特礼物',
        pros: ['创意性强'],
        cons: ['推荐不够精准'],
        priceModel: 'Free',
        link: 'https://coolgift.ai',
        logo: '🎀'
      },
      {
        id: 'gpt-gift',
        name: 'ChatGPT',
        rank: 'B',
        tagline: '通用咨询',
        pros: ['可以不断追问细节'],
        cons: ['无法提供最新商品链接'],
        priceModel: 'Free',
        link: 'https://chatgpt.com',
        logo: '🟢'
      }
    ]
  }
  ];