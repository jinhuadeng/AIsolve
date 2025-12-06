export type Locale = 'zh' | 'en';

export const dictionary = {
  zh: {
    nav: {
      tag: 'v2.5 Pro',
      switchBtn: 'EN',
      target: 'en' as Locale
    },
    hero: {
      brand: 'WenX',
      title_prefix: '别再',
      title_highlight: '试错 AI 工具了',
      subtitle_1: '我们',
      subtitle_strong: '测试了1000+款AI产品',
      subtitle_2: '只为你保留了这些常用场景',
      subtitle_3: '推荐经过验证的Top神器',
      search_placeholder: 'WenX 一下 (如: 论文, 视频)...',
      hot_title: '直接用不踩雷',
      persona_title: '找到你所需的需求场景',
      empty_state: '暂无相关工具，请尝试其他关键词。'
    },
    card: {
      top_pick: '直达',
      verified: '已验证',
      unverified: '需复核',
      verdict_title: 'WenX 锐评', // 👈 新增
      pros: '值得入手', // 👈 改得更有煽动性
      cons: '劝退点',   // 👈 改得更直接
    },
    // 👇 新增 Newsletter 文案
    newsletter: {
      title: 'AI 变化太快了？',
      desc: '每周五，花 3 分钟看懂本周最值得用的 1 个新工具。',
      placeholder: '输入你的邮箱...',
      button: '订阅周刊',
      success: '🎉 订阅成功！下周五见。',
      sub: '已有 2,000+ 探索者订阅'
    },
    personas: {
      All: '全部',
      Student: '🎓 学生党',
      Worker: '💼 职场白领',
      Developer: '💻 开发者',
      Entrepreneur: '🚀 创投人',
      Creator: '🎨 创作者'
    },
    hot: [
      { label: '做PPT', id: 'ppt' },
      { label: '写代码', id: 'code' },
      { label: 'AI绘画', id: 'draw' },   // 新增
      { label: '读财报', id: 'long-doc' },
      { label: '做视频', id: 'video' },
      { label: '搞Excel', id: 'excel' }, // 新增
      { label: '练口语', id: 'speak' },
      { label: '写文案', id: 'chat' },   // 新增
      { label: '精准翻译', id: 'translate' }, // 新增
    ]
  },
  en: {
    nav: {
      tag: 'v2.5 Global',
      switchBtn: '中',
      target: 'zh' as Locale
    },
    hero: {
      brand: 'WenX',
      title_prefix: 'WenX · ',
      title_highlight: 'Stop Searching, Start Solving',
      subtitle_1: 'Your',
      subtitle_strong: 'AI Trust Proxy',
      subtitle_2: '. Curated Top tools for your needs.',
      subtitle_3: 'Verified. Essential. Ready to use.',
      search_placeholder: 'My Need  (Ask WenX)...',
      hot_title: 'Quick Start',
      persona_title: 'Browse by role',
      empty_state: 'No tools found. Try a different keyword.'
    },
    card: {
      top_pick: 'Top Pick',
      verified: 'Verified',
      unverified: 'Unverified',
      verdict_title: 'Our Verdict',
      pros: 'The Good',
      cons: 'The Bad',
    },
    // 👇 Core Update: Newsletter
    newsletter: {
      title: 'AI moving too fast?',
      desc: 'Every Friday, discover the #1 tool worth using in 3 mins.',
      placeholder: 'Your email address...',
      button: 'Subscribe',
      success: '🎉 Subscribed! See you Friday.',
      sub: 'Join 2,000+ explorers'
    },
    personas: {
      All: 'All',
      Student: '🎓 Student',
      Worker: '💼 Professional',
      Developer: '💻 Developer',
      Entrepreneur: '🚀 Founder/VC',
      Creator: '🎨 Creator'
    },
    hot: [
      { label: 'Slides', id: 'ppt' },
      { label: 'Coding', id: 'code' },
      { label: 'Drawing', id: 'draw' },
      { label: 'ChatPDF', id: 'long-doc' },
      { label: 'Video', id: 'video' },
      { label: 'Excel', id: 'excel' },
      { label: 'Speaking', id: 'speak' },
      { label: 'Writing', id: 'chat' },
      { label: 'Translate', id: 'translate' },
    ]
  }
};