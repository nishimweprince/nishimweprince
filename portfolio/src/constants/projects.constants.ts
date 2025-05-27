export const projectsList = [
  {
    title: 'Akagera National Park Booking System',
    description:
      'The official booking system for the Akagera National Park. Includes seats, activities, and payment management.',
    link: 'https://booking.akageraform.rw',
    stack: [
      'TypeScript',
      'Node.js',
      'React',
      'Tailwind CSS',
      'PostgreSQL',
      'Docker',
    ],
    docs: null,
    bullets: [
      "Akagera National Park is Central Africa's largest protected wetland and the last remaining refuge for savannah-adapted species in Rwanda.",
      'Visit the official website: https://www.africanparks.org/the-parks/akagera',
    ],
  },
  {
    title: 'Muse of research',
    description:
      'An AI agent that helps users find scholarly articles and papers. Available on X, Telegram and Discord.',
    link: 'https://x.com/MuseofResearch',
    stack: ['Eliza', 'Python', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    docs: 'nishimweprince/docs/muse-of-research/sourcerer.md',
    bullets: [
      'The AI agent uses advanced natural language processing to understand research queries and find relevant academic papers across multiple databases.',
      'Integrated with major academic platforms including arXiv, Google Scholar, and ResearchGate for comprehensive paper discovery.',
    ],
  },
  {
    title: 'Lens Music',
    description:
      'A web application allowing creators to distribute their music on 150+ music platforms.',
    link: 'https://music.lens.rw',
    stack: ['DDEX', 'Node.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    docs: 'https://github.com/lens-ltd/lens-music-bn/blob/main/README.md',
    bullets: [
      'Implements DDEX (Digital Data Exchange) standard for seamless music metadata distribution across major streaming platforms.',
      'Features automated royalty tracking and distribution, ensuring artists receive fair compensation across all platforms.',
    ],
  },
  {
    title: 'TradingView Strategies',
    description:
      'A collection of TradingView strategies (original and community-modified) written in Pine Script.',
    link: null,
    stack: ['Pine Script', 'Python', 'Backtrader'],
    docs: 'nishimweprince/docs/tradingview-strategies/README.md',
    bullets: [
      "Includes backtesting capabilities using Python's Backtrader framework to validate strategy performance across historical data.",
      'Features a collection of both trend-following and mean-reversion strategies optimized for different market conditions.',
    ],
  },
  {
    title: 'TradingView Alerts Trading Bot',
    description:
      'A trading bot that uses TradingView alerts to trade stocks, crypto, and forex.',
    link: null,
    stack: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Capital.com API',
    ],
    docs: 'nishimweprince/docs/capital-trading/README.md',
    bullets: [
      "Implements real-time alert processing with automated trade execution through Capital.com's trading API.",
      'Features risk management controls including position sizing, stop-loss, and take-profit automation.',
    ],
  },
  {
    title: 'Solana Web3',
    description:
      'A utility application that allows users to transfer SOL and other tokens on the Solana blockchain between wallets.',
    link: 'https://github.com/nishimweprince/solana-web3',
    stack: ['TypeScript', 'Node.js'],
    docs: null,
    bullets: [
      "Leverages Solana's high-performance blockchain for fast and cost-effective token transfers with minimal transaction fees.",
      'Supports both SOL and SPL tokens, with built-in transaction history tracking and wallet balance monitoring.',
    ],
  },
];
