import { Scenario } from './data-zh';

export const scenariosEn: Scenario[] = [
  // --- General ---
  {
    id: 'chat', title: 'AI Chatbot', description: 'Your everyday AI assistant', icon: 'speak',
    tags: ['Student', 'Worker', 'Developer', 'Entrepreneur'],
    tools: [
      { id: 'chatgpt', name: 'ChatGPT (GPT-4o)', rank: 'S', tagline: 'The best all-rounder', pros: ['Versatile', 'Voice mode is great'], cons: ['Usage limits'], priceModel: 'Freemium', link: 'https://chatgpt.com', logo: '🟢', lastCheck: '2025-12-01'},
      { id: 'claude', name: 'Claude 3.5 Sonnet', rank: 'A', tagline: 'Best for logic & coding', pros: ['Less hallucination', 'Human-like writing'], cons: ['Message limits'], priceModel: 'Paid', link: 'https://claude.ai', logo: '🟠', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'search', title: 'AI Search', description: 'Get answers with citations, no ads', icon: 'search',
    tags: ['Student', 'Worker', 'Entrepreneur', 'Founder'],
    tools: [
      { id: 'perplexity', name: 'Perplexity', rank: 'S', tagline: 'The Google killer', pros: ['Accurate citations', 'Deep search mode'], cons: ['Pro needed for GPT-4'], priceModel: 'Freemium', link: 'https://www.perplexity.ai', logo: '🌀', lastCheck: '2025-12-01'}
    ]
  },

  // --- Office ---
  {
    id: 'ppt', title: 'Presentation Maker', description: 'Create slides from a topic in seconds', icon: 'ppt',
    tags: ['Worker', 'Student', 'Entrepreneur'], 
    tools: [
      { id: 'gamma', name: 'Gamma', rank: 'S', tagline: 'Beautiful decks, zero effort', pros: ['Great design', 'Web-based interactive'], cons: ['Animation limits'], priceModel: 'Freemium', link: 'https://gamma.app', logo: '🟣', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'long-doc', title: 'Chat with PDF', description: 'Summarize long documents & papers', icon: 'doc',
    tags: ['Student', 'Entrepreneur', 'Worker'], 
    tools: [
      { id: 'claude', name: 'Claude 3.5', rank: 'S', tagline: 'Huge context window', pros: ['Reads books', 'Deep analysis'], cons: ['Paid tier needed'], priceModel: 'Paid', link: 'https://claude.ai', logo: '🟠', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'meeting', title: 'Meeting Notes', description: 'Transcribe & summarize meetings', icon: 'mic',
    tags: ['Worker', 'Entrepreneur'],
    tools: [
      { id: 'otter', name: 'Otter.ai', rank: 'S', tagline: 'Industry standard', pros: ['Zoom integration', 'Speaker ID'], cons: ['English focused'], priceModel: 'Freemium', link: 'https://otter.ai', logo: '🦦', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'excel', title: 'Excel Analysis', description: 'Write formulas & analyze data', icon: 'excel',
    tags: ['Worker', 'Developer', 'Student'],
    tools: [
      { id: 'gpt-data', name: 'ChatGPT Data Analyst', rank: 'S', tagline: 'Your personal data scientist', pros: ['Python backend', 'Visual charts'], cons: ['Privacy concerns'], priceModel: 'Paid', link: 'https://chatgpt.com', logo: '🟢', lastCheck: '2025-12-01'}
    ]
  },

  // --- Dev ---
  {
    id: 'code', title: 'Coding Assistant', description: 'Write code & fix bugs', icon: 'code',
    tags: ['Developer', 'Student'],
    tools: [
      { id: 'cursor', name: 'Cursor', rank: 'S', tagline: 'The AI Code Editor', pros: ['Codebase awareness', 'Tab completion'], cons: ['Subscription'], priceModel: 'Freemium', link: 'https://cursor.sh', logo: '🖱️', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'website', title: 'Website Builder', description: 'Text to UI/Code', icon: 'web',
    tags: ['Developer', 'Entrepreneur'],
    tools: [
      { id: 'v0', name: 'v0.dev', rank: 'S', tagline: 'Generate React/Tailwind code', pros: ['High quality code', 'Interactive'], cons: ['Requires dev knowledge'], priceModel: 'Freemium', link: 'https://v0.dev', logo: '🔼', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'sql', title: 'Text to SQL', description: 'Query database with natural language', icon: 'sql',
    tags: ['Developer', 'Worker'],
    tools: [
      { id: 'ai2sql', name: 'AI2SQL', rank: 'S', tagline: 'Write complex SQL instantly', pros: ['Multi-DB support'], cons: ['Basic UI'], priceModel: 'Freemium', link: 'https://www.ai2sql.io', logo: '🗄️', lastCheck: '2025-12-01'}
    ]
  },

  // --- Creative ---
  {
    id: 'video', title: 'Text to Video', description: 'Create cinematic videos', icon: 'video',
    tags: ['Creator', 'Entrepreneur', 'Student'], 
    tools: [
      { id: 'runway', name: 'Runway Gen-3', rank: 'S', tagline: 'Hollywood grade generation', pros: ['Realistic physics', 'Camera control'], cons: ['Expensive', 'Slow'], priceModel: 'Paid', link: 'https://runwayml.com', logo: '🎞️', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'draw', title: 'Image Generation', description: 'Create realistic images', icon: 'photo',
    tags: ['Creator', 'Student'],
    tools: [
      { id: 'midjourney', name: 'Midjourney', rank: 'S', tagline: 'Best artistic quality', pros: ['Stunning lighting', 'Style mimic'], cons: ['Discord only', 'Paid'], priceModel: 'Paid', link: 'https://www.midjourney.com', logo: '⛵', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'logo', title: 'Logo Design', description: 'Vector logos with text', icon: 'logo',
    tags: ['Entrepreneur', 'Worker'],
    tools: [
      { id: 'ideogram', name: 'Ideogram', rank: 'S', tagline: 'Best text rendering', pros: ['Typography is perfect', 'Creative designs'], cons: ['Vector is paid'], priceModel: 'Freemium', link: 'https://ideogram.ai', logo: '🆔', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'remove-bg', title: 'Remove Background', description: 'Clean cutout for products', icon: 'cut',
    tags: ['Worker', 'Creator', 'Student'],
    tools: [
      { id: 'clipdrop', name: 'Clipdrop', rank: 'S', tagline: 'By Stability AI', pros: ['Pixel perfect', 'Relighting'], cons: ['Limited free credits'], priceModel: 'Freemium', link: 'https://clipdrop.co', logo: '🔷', lastCheck: '2025-12-01'}
    ]
  },
  
  // --- Life ---
  {
    id: 'music', title: 'Music Generation', description: 'Create full songs with lyrics', icon: 'music',
    tags: ['Student', 'Creator'],
    tools: [
      { id: 'suno', name: 'Suno', rank: 'S', tagline: 'Radio-quality songs', pros: ['Catchy melodies', 'Full lyrics'], cons: ['Auto-tune voice'], priceModel: 'Freemium', link: 'https://suno.com', logo: '☀️', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'speak', title: 'Language Tutor', description: 'Practice speaking', icon: 'speak',
    tags: ['Student', 'Worker'],
    tools: [
      { id: 'gptvoice', name: 'ChatGPT Voice', rank: 'S', tagline: 'Natural conversation', pros: ['Human-like', 'Interruptible'], cons: ['No curriculum'], priceModel: 'Free', link: 'https://chatgpt.com', logo: '🟢', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'math', title: 'Math Solver', description: 'Step-by-step solutions', icon: 'math',
    tags: ['Student'],
    tools: [
      { id: 'photomath', name: 'Photomath', rank: 'S', tagline: 'Scan and solve', pros: ['Accurate OCR', 'Detailed steps'], cons: ['Weak on physics'], priceModel: 'Free', link: 'https://photomath.com', logo: '📸', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'legal', title: 'Contract Review', description: 'Find risks in contracts', icon: 'legal',
    tags: ['Entrepreneur', 'Worker'],
    tools: [
      { id: 'spellbook', name: 'Spellbook', rank: 'S', tagline: 'Legal AI', pros: ['Word integration', 'Risk highlighting'], cons: ['Enterprise pricing'], priceModel: 'Paid', link: 'https://www.spellbook.legal', logo: '📜', lastCheck: '2025-12-01'}
    ]
  },
  {
    id: 'translate', title: 'Translation', description: 'Accurate and natural translation', icon: 'trans',
    tags: ['Student', 'Worker', 'Entrepreneur'],
    tools: [
      { id: 'deepl', name: 'DeepL', rank: 'S', tagline: 'Most natural translation', pros: ['Nuanced', 'Document mode'], cons: ['Free limit'], priceModel: 'Freemium', link: 'https://www.deepl.com', logo: '🟦', lastCheck: '2025-12-01'}
    ]
  }
];