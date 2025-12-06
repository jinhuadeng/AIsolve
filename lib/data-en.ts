import { Scenario } from './data-zh';

// ⚠️ 必须严格对应 data-zh.ts 的 tags: 
// 'Student' | 'Worker' | 'Developer' | 'Entrepreneur' | 'Creator'

export const scenariosEn: Scenario[] = [
  // --- General & Chat ---
  {
    id: 'chat', title: 'AI Chatbot', description: 'Your everyday AI assistant', icon: 'speak',
    tags: ['Student', 'Worker', 'Developer', 'Entrepreneur'],
    tools: [
      { id: 'chatgpt', name: 'ChatGPT (GPT-4o)', rank: 'S', tagline: 'The best all-rounder', 
        verdict: 'The default choice for almost everything. GPT-4o is fast, smart, and versatile.',
        badges: ['Best Overall', 'Multimodal'],
        pros: ['Versatile', 'Voice mode is great'], 
        cons: ['Usage limits'], 
        priceModel: 'Freemium', link: 'https://chatgpt.com', logo: '🟢', lastCheck: '2025-12-01' 
      },
      { id: 'claude', name: 'Claude 3.5 Sonnet', rank: 'A', tagline: 'Best for logic & coding', 
        verdict: 'If you need to write code or analyze long documents, Claude beats GPT-4.',
        badges: ['Best Logic', 'Coding Pro'],
        pros: ['Less hallucination', 'Human-like writing'], 
        cons: ['Message limits'], 
        priceModel: 'Paid', link: 'https://claude.ai', logo: '🟠', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'search', title: 'AI Search', description: 'Get answers with citations, no ads', icon: 'search',
    tags: ['Student', 'Worker', 'Entrepreneur', 'Developer'],
    tools: [
      { id: 'perplexity', name: 'Perplexity', rank: 'S', tagline: 'The Google killer', 
        verdict: 'Stop using Google. Perplexity gives you the answer directly with sources.',
        badges: ['Google Killer', 'Accurate'],
        pros: ['Accurate citations', 'Deep search mode'], 
        cons: ['Pro needed for GPT-4'], 
        priceModel: 'Freemium', link: 'https://www.perplexity.ai', logo: '🌀', lastCheck: '2025-12-01' 
      },
      { id: 'genspark', name: 'Genspark', rank: 'A', tagline: 'Generate Sparkpages', 
        verdict: 'Creates a mini-wiki page for your search query. Great for research.',
        badges: ['Visual Search', 'Free'],
        pros: ['Visual summary', 'Video aggregation'], 
        cons: ['Slower'], 
        priceModel: 'Free', link: 'https://www.genspark.ai', logo: '✨', lastCheck: '2025-12-01' 
      }
    ]
  },

  // --- Office ---
  {
    id: 'ppt', title: 'Presentation Maker', description: 'Create slides from a topic in seconds', icon: 'ppt',
    tags: ['Worker', 'Student', 'Entrepreneur'], 
    tools: [
      { id: 'gamma', name: 'Gamma', rank: 'S', tagline: 'Beautiful decks, zero effort', 
        verdict: 'The absolute best for creating slides in minutes. The design is stunning.',
        badges: ['Best Design', 'Easy to Use'],
        pros: ['Great design', 'Web-based interactive'], 
        cons: ['Animation limits'], 
        priceModel: 'Freemium', link: 'https://gamma.app', logo: '🟣', lastCheck: '2025-12-01' 
      },
      { id: 'beautiful', name: 'Beautiful.ai', rank: 'A', tagline: 'Smart slide designer', 
        verdict: 'Strict layout controls make it impossible to create ugly slides.',
        badges: ['Corporate Standard', 'Strict Layout'],
        pros: ['Corporate standard', 'Smart layout'], 
        cons: ['Paid only'], 
        priceModel: 'Paid', link: 'https://www.beautiful.ai', logo: '🅱️', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'long-doc', title: 'Chat with PDF', description: 'Summarize long documents & papers', icon: 'doc',
    tags: ['Student', 'Entrepreneur', 'Worker'], 
    tools: [
      { id: 'claude', name: 'Claude 3.5', rank: 'S', tagline: 'Huge context window', 
        verdict: 'Throw a 100-page book at it, and it will understand every detail.',
        badges: ['Huge Context', 'Deep Analysis'],
        pros: ['Reads books', 'Deep analysis'], 
        cons: ['Paid tier needed'], 
        priceModel: 'Paid', link: 'https://claude.ai', logo: '🟠', lastCheck: '2025-12-01' 
      },
      { id: 'chatpdf', name: 'ChatPDF', rank: 'A', tagline: 'Simple PDF wrapper', 
        verdict: 'No login required. Just drop a PDF and start asking questions.',
        badges: ['No Login', 'Fast'],
        pros: ['Easy to use', 'No login needed'], 
        cons: ['Basic reasoning'], 
        priceModel: 'Freemium', link: 'https://www.chatpdf.com', logo: '📄', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'meeting', title: 'Meeting Notes', description: 'Transcribe & summarize meetings', icon: 'mic',
    tags: ['Worker', 'Entrepreneur'],
    tools: [
      { id: 'otter', name: 'Otter.ai', rank: 'S', tagline: 'Industry standard', 
        verdict: 'If you use Zoom or Google Meet, this is a must-have.',
        badges: ['Zoom Integration', 'Reliable'],
        pros: ['Zoom integration', 'Speaker ID'], 
        cons: ['English focused'], 
        priceModel: 'Freemium', link: 'https://otter.ai', logo: '🦦', lastCheck: '2025-12-01' 
      },
      { id: 'fireflies', name: 'Fireflies.ai', rank: 'A', tagline: 'Automated note taker', 
        verdict: 'Connects to your calendar and joins calls automatically.',
        badges: ['Automated', 'Integrations'],
        pros: ['Integrates everywhere'], 
        cons: ['Transcription accuracy'], 
        priceModel: 'Freemium', link: 'https://fireflies.ai', logo: '萤', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'excel', title: 'Excel Analysis', description: 'Write formulas & analyze data', icon: 'excel',
    tags: ['Worker', 'Developer', 'Student'],
    tools: [
      { id: 'gpt-data', name: 'ChatGPT Data Analyst', rank: 'S', tagline: 'Your personal data scientist', 
        verdict: 'Upload a CSV, ask "what are the trends?", and get a chart instantly.',
        badges: ['Visual Charts', 'Python Backend'],
        pros: ['Python backend', 'Visual charts'], 
        cons: ['Privacy concerns'], 
        priceModel: 'Paid', link: 'https://chatgpt.com', logo: '🟢', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'translate', title: 'Translation', description: 'Accurate and natural translation', icon: 'trans',
    tags: ['Student', 'Worker', 'Entrepreneur'],
    tools: [
      { id: 'deepl', name: 'DeepL', rank: 'S', tagline: 'Most natural translation', 
        verdict: 'Forget Google Translate. DeepL actually understands nuance.',
        badges: ['Best Quality', 'Natural'],
        pros: ['Nuanced', 'Document mode'], 
        cons: ['Free limit'], 
        priceModel: 'Freemium', link: 'https://www.deepl.com', logo: '🟦', lastCheck: '2025-12-01' 
      }
    ]
  },

  // --- Dev ---
  {
    id: 'code', title: 'Coding Assistant', description: 'Write code & fix bugs', icon: 'code',
    tags: ['Developer', 'Student'],
    tools: [
      { id: 'cursor', name: 'Cursor', rank: 'S', tagline: 'The AI Code Editor', 
        verdict: 'Once you use Cursor\'s tab-complete, you can\'t go back to VS Code.',
        badges: ['Dev Favorite', 'Game Changer'],
        pros: ['Codebase awareness', 'Tab completion'], 
        cons: ['Subscription'], 
        priceModel: 'Freemium', link: 'https://cursor.sh', logo: '🖱️', lastCheck: '2025-12-01' 
      },
      { id: 'copilot', name: 'GitHub Copilot', rank: 'A', tagline: 'The industry standard', 
        verdict: 'The standard for enterprise. Good, but Cursor feels smarter.',
        badges: ['Standard', 'Enterprise'],
        pros: ['IDE integration', 'Enterprise ready'], 
        cons: ['Chat is weaker'], 
        priceModel: 'Paid', link: 'https://github.com/features/copilot', logo: '🐙', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'website', title: 'Website Builder', description: 'Text to UI/Code', icon: 'web',
    tags: ['Developer', 'Entrepreneur'],
    tools: [
      { id: 'v0', name: 'v0.dev', rank: 'S', tagline: 'Generate React/Tailwind code', 
        verdict: 'The best way to prototype UI. Copy-paste the code and it just works.',
        badges: ['Clean Code', 'Interactive'],
        pros: ['High quality code', 'Interactive'], 
        cons: ['Requires dev knowledge'], 
        priceModel: 'Freemium', link: 'https://v0.dev', logo: '🔼', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'sql', title: 'Text to SQL', description: 'Query database with natural language', icon: 'sql',
    tags: ['Developer', 'Worker'],
    tools: [
      { id: 'ai2sql', name: 'AI2SQL', rank: 'S', tagline: 'Write complex SQL instantly', 
        verdict: 'Even if you know SQL, this writes it faster and bug-free.',
        badges: ['Time Saver', 'Multi-DB'],
        pros: ['Multi-DB support'], 
        cons: ['Basic UI'], 
        priceModel: 'Freemium', link: 'https://www.ai2sql.io', logo: '🗄️', lastCheck: '2025-12-01' 
      }
    ]
  },

  // --- Creative ---
  {
    id: 'video', title: 'Text to Video', description: 'Create cinematic videos', icon: 'video',
    tags: ['Creator', 'Entrepreneur', 'Student'], 
    tools: [
      { id: 'runway', name: 'Runway Gen-3', rank: 'S', tagline: 'Hollywood grade generation', 
        verdict: 'The leader in AI video. The controls are pro-level.',
        badges: ['Hollywood Quality', 'Pro Choice'],
        pros: ['Realistic physics', 'Camera control'], 
        cons: ['Expensive', 'Slow'], 
        priceModel: 'Paid', link: 'https://runwayml.com', logo: '🎞️', lastCheck: '2025-12-01' 
      },
      { id: 'luma', name: 'Luma Dream Machine', rank: 'A', tagline: 'Fast & High quality', 
        verdict: 'Faster than Runway, and great for quick clips.',
        badges: ['Fast', 'Free Trial'],
        pros: ['Keyframe control', 'Fast generation'], 
        cons: ['Consistency'], 
        priceModel: 'Freemium', link: 'https://lumalabs.ai', logo: '🌙', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'draw', title: 'Image Generation', description: 'Create realistic images', icon: 'photo',
    tags: ['Creator', 'Student'],
    tools: [
      { id: 'midjourney', name: 'Midjourney', rank: 'S', tagline: 'Best artistic quality', 
        verdict: 'Still the king of image quality. Nothing else comes close in style.',
        badges: ['Best Quality', 'Artistic'],
        pros: ['Stunning lighting', 'Style mimic'], 
        cons: ['Discord only', 'Paid'], 
        priceModel: 'Paid', link: 'https://www.midjourney.com', logo: '⛵', lastCheck: '2025-12-01' 
      },
      { id: 'flux', name: 'Flux.1', rank: 'A', tagline: 'Best open source model', 
        verdict: 'The best free alternative. It actually gets text right.',
        badges: ['Open Source', 'Text Rendering'],
        pros: ['Great with text', 'Realistic hands'], 
        cons: ['Hardware heavy'], 
        priceModel: 'Free', link: 'https://blackforestlabs.ai', logo: '🌲', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'logo', title: 'Logo Design', description: 'Vector logos with text', icon: 'logo',
    tags: ['Entrepreneur', 'Worker'],
    tools: [
      { id: 'ideogram', name: 'Ideogram', rank: 'S', tagline: 'Best text rendering', 
        verdict: 'Finally, an AI that spells correctly. Perfect for logos and posters.',
        badges: ['Spelling Pro', 'Creative'],
        pros: ['Typography is perfect', 'Creative designs'], 
        cons: ['Vector is paid'], 
        priceModel: 'Freemium', link: 'https://ideogram.ai', logo: '🆔', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'remove-bg', title: 'Remove Background', description: 'Clean cutout for products', icon: 'cut',
    tags: ['Worker', 'Creator', 'Student'],
    tools: [
      { id: 'clipdrop', name: 'Clipdrop', rank: 'S', tagline: 'By Stability AI', 
        verdict: 'The most accurate cutout tool. Even handles hair perfectly.',
        badges: ['Pixel Perfect', 'E-commerce'],
        pros: ['Pixel perfect', 'Relighting'], 
        cons: ['Limited free credits'], 
        priceModel: 'Freemium', link: 'https://clipdrop.co', logo: '🔷', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'upscale', title: 'Image Upscaler', description: 'Enhance low-res photos', icon: 'zoom',
    tags: ['Student', 'Worker', 'Creator'],
    tools: [
      { id: 'magnific', name: 'Magnific', rank: 'S', tagline: 'Hallucinate details', 
        verdict: 'It adds details that weren\'t there. Magic for low-res photos.',
        badges: ['Magic Detail', 'Pro Choice'],
        pros: ['Insane detail', 'Skin texture'], 
        cons: ['Very expensive'], 
        priceModel: 'Paid', link: 'https://magnific.ai', logo: '✨', lastCheck: '2025-12-01' 
      }
    ]
  },

  // --- Life ---
  {
    id: 'music', title: 'Music Generation', description: 'Create full songs with lyrics', icon: 'music',
    tags: ['Student', 'Creator'],
    tools: [
      { id: 'suno', name: 'Suno', rank: 'S', tagline: 'Radio-quality songs', 
        verdict: 'You won\'t believe an AI made this. Catchy and fully produced.',
        badges: ['Viral Hit', 'Full Song'],
        pros: ['Catchy melodies', 'Full lyrics'], 
        cons: ['Auto-tune voice'], 
        priceModel: 'Freemium', link: 'https://suno.com', logo: '☀️', lastCheck: '2025-12-01' 
      },
      { id: 'udio', name: 'Udio', rank: 'A', tagline: 'High fidelity audio', 
        verdict: 'Better audio quality than Suno, but shorter clips.',
        badges: ['High Fidelity', 'Complex'],
        pros: ['Complex arrangements'], 
        cons: ['Short clips'], 
        priceModel: 'Freemium', link: 'https://www.udio.com', logo: '🎵', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'speak', title: 'Language Tutor', description: 'Practice speaking', icon: 'speak',
    tags: ['Student', 'Worker'],
    tools: [
      { id: 'gptvoice', name: 'ChatGPT Voice', rank: 'S', tagline: 'Natural conversation', 
        verdict: 'The most natural way to practice a language. It listens and corrects you.',
        badges: ['Free Tutor', 'Natural'],
        pros: ['Human-like', 'Interruptible'], 
        cons: ['No curriculum'], 
        priceModel: 'Free', link: 'https://chatgpt.com', logo: '🟢', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'math', title: 'Math Solver', description: 'Step-by-step solutions', icon: 'math',
    tags: ['Student'],
    tools: [
      { id: 'photomath', name: 'Photomath', rank: 'S', tagline: 'Scan and solve', 
        verdict: 'Just take a photo of your homework. It shows the steps.',
        badges: ['Homework Saver', 'Step-by-step'],
        pros: ['Accurate OCR', 'Detailed steps'], 
        cons: ['Weak on physics'], 
        priceModel: 'Free', link: 'https://photomath.com', logo: '📸', lastCheck: '2025-12-01' 
      }
    ]
  },
  {
    id: 'legal', title: 'Contract Review', description: 'Find risks in contracts', icon: 'legal',
    tags: ['Entrepreneur', 'Worker'],
    tools: [
      { id: 'spellbook', name: 'Spellbook', rank: 'S', tagline: 'Legal AI', 
        verdict: 'Don\'t sign anything without running it through this first.',
        badges: ['Risk Finder', 'Pro Legal'],
        pros: ['Word integration', 'Risk highlighting'], 
        cons: ['Enterprise pricing'], 
        priceModel: 'Paid', link: 'https://www.spellbook.legal', logo: '📜', lastCheck: '2025-12-01' 
      }
    ]
  },
];