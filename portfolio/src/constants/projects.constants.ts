export const projectsList = [
  {
    title: 'ArkLib (Formal Verification, Lean 4)',
    description:
      'Open-source contributions to ArkLib, the Verified-zkEVM project formalizing SNARK theory, interactive oracle reductions, and coding theory in Lean 4.',
    link: 'https://github.com/Verified-zkEVM/ArkLib/pull/758',
    stack: [
      'Lean 4',
      'Mathlib',
      'Coding Theory',
      'Formal Verification',
    ],
    docs: 'https://github.com/Verified-zkEVM/ArkLib',
    bullets: [
      'Generalized the Elias volume lower bound on list size and its entropy form (ABF26 Lemma 3.7 and Corollary 3.8) from linear codes over a field to arbitrary codes over a finite alphabet.',
      'Restructured the existing field-linear theorems as one-line specializations of the new generic cores, preserving every downstream call site.',
      'Introduced no new `sorry` and left the kernel-axiom baseline unchanged; all repository CI gates pass.',
    ],
  },
  {
    title: 'VRVP Strategy (Trading Algos)',
    description:
      'A multi-timeframe forex strategy combining Volume Profile, Stochastic RSI, Fair Value Gap (FVG), and Supertrend indicators, with backtesting, paper trading, and a FastAPI server to run multiple currency pairs.',
    link: 'https://github.com/nishimweprince/trading-algos/tree/main/vrvp-strategy',
    stack: [
      'Python',
      'pandas-ta',
      'smartmoneyconcepts',
      'FastAPI',
      'Capital.com API',
    ],
    docs: null,
    bullets: [
      'A multi-timeframe forex strategy combining Volume Profile, Stochastic RSI, Fair Value Gap (FVG), and Supertrend indicators.',
      'Includes backtesting, paper trading, and a FastAPI server to run multiple currency pairs.',
    ],
  },
  {
    title: "Poker Modelling (Texas Hold'em)",
    description:
      "A full-stack Texas Hold'em web app with a Next.js 15 + Redux Toolkit frontend, a FastAPI backend powered by pokerkit, and PostgreSQL for hand history and action tracking.",
    link: 'https://github.com/nishimweprince/poker-modelling',
    stack: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Redux Toolkit',
      'shadcn/ui',
      'Tailwind CSS',
      'Docker',
    ],
    docs: null,
    bullets: [
      "A full-stack Texas Hold'em web app with Next.js 15 + Redux Toolkit frontend.",
      'FastAPI backend powered by pokerkit, with PostgreSQL for hand history and action tracking.',
    ],
  },
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
      'An AI agent that helps users find scholarly articles and papers.',
      'Available on X, Telegram and Discord.',
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
      'A web application allowing creators to distribute their music on 150+ music platforms.',
      'Implements DDEX (Digital Data Exchange) standard for seamless music metadata distribution.',
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
      'A collection of TradingView strategies (original and community-modified) written in Pine Script.',
      'Includes backtesting capabilities using Python Backtrader framework.',
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
      'A utility application that allows users to transfer SOL and other tokens on the Solana blockchain between wallets.',
      'Leverages Solana high-performance blockchain for fast and cost-effective token transfers.',
    ],
  },
];
