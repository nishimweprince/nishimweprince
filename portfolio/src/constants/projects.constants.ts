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
    title: 'Trading Algos (Signal → Execution Platform)',
    description:
      'A monorepo of ~18 interoperating trading services: strategy signal generators, a broker execution hub, market-data gateways, and a multi-channel notification API, documented end to end as a Nextra site.',
    link: 'https://github.com/nishimweprince/trading-algos',
    stack: [
      'Python',
      'FastAPI',
      'TypeScript',
      'NestJS',
      'MetaTrader 5',
      'cTrader Open API',
      'SQLite',
      'Next.js',
    ],
    docs: 'https://trading-algos.nishimweprince.dev',
    bullets: [
      'Signal services (IPDA, LuxAlgo, VRVP, FU) emit deterministic signals that a single MT5 Trader execution hub validates, deduplicates, and routes to a live MetaTrader 5 terminal.',
      'The VRVP multi-timeframe forex strategy combines Supertrend trend bias, StochRSI momentum, Fair Value Gaps, and Volume Profile, with backtesting, paper trading, and a FastAPI runner across 15 pairs.',
      'Shared infrastructure: a cTrader Open API gateway exposing ticks and OHLC over HTTP and SSE, and a NestJS notification service fanning out to Telegram, email, SMS, and WhatsApp with idempotent delivery.',
      'Documented as a Nextra/MDX site with 120+ pages across 17 project sections, with Pagefind search.',
    ],
  },
  {
    title: 'IPDA Signal Service & MT5 Trader',
    description:
      'A Python RSI-reversal signal service paired with the FastAPI execution hub it posts to, built so a replayed or duplicated signal can never produce a duplicate fill.',
    link: 'https://github.com/nishimweprince/trading-algos/tree/main/ipda',
    stack: [
      'Python',
      'FastAPI',
      'MetaTrader 5',
      'Pine Script',
      'Pydantic',
      'SQLite',
    ],
    docs: 'https://trading-algos.nishimweprince.dev/ipda',
    bullets: [
      'Ports the RSI Buy Chance / Sell Chance reversal trigger from a TradingView Pine indicator: polls 1-minute OHLC, aggregates to the target timeframe, and fires at most once per candle bucket before locking it.',
      'Every signal carries a deterministic UUIDv5 id derived from symbol, candle bucket, and direction, so execution is idempotent: a replay returns the stored result instead of placing a second order.',
      'MT5 Trader serializes all order flow behind a single terminal lock, runs an order_check preflight, never auto-retries an ambiguous send, and reconciles crash-interrupted trades on startup.',
      'Session gating for Tokyo and New York, mandatory distance-based stop and target profiles per instrument class, and advisory break-even alerts through the shared notification service.',
    ],
  },
  {
    title: 'Pump.fun Post-Graduation Scalper',
    description:
      'A TypeScript Solana bot that detects pump.fun token graduations to PumpSwap and scalps them, where the hard problem is rejecting scams, not finding candidates.',
    link: 'https://github.com/nishimweprince/trading-algos/tree/main/pump-fun',
    stack: [
      'TypeScript',
      'Solana',
      'Jito',
      'Helius',
      'Yellowstone gRPC',
      'SQLite',
    ],
    docs: 'https://trading-algos.nishimweprince.dev/pump-fun',
    bullets: [
      'Ten hard guardrails (mint and freeze authority, LP burn, an atomic buy-plus-sell honeypot simulation, holder concentration, liquidity floor and price impact, Token-2022 extensions) veto roughly 98% of graduations.',
      'Detector → guardrails → position manager → executor pipeline over a typed in-process event bus, with durable SQLite state for crash recovery.',
      'Deduplicated detection across PumpPortal, Helius, and Yellowstone gRPC feeds, Jito bundles with RPC fallback, and pre-signed exit ladders for sub-second exits.',
      'Ships paper-first: paper → dry-run → live behind a manual gate, with circuit breakers and a kill switch.',
    ],
  },
  {
    title: 'Lookup Trader (Pattern Research Platform)',
    description:
      'A local research platform for building a pattern-based probability database from historical price data: bar replay, manual labelling, and outcome modelling, with no order path by design.',
    link: 'https://github.com/nishimweprince/trading-algos/tree/main/lookup-trader',
    stack: ['Python', 'FastAPI', 'DuckDB', 'Parquet', 'React', 'Vite'],
    docs: 'https://trading-algos.nishimweprince.dev/lookup-trader',
    bullets: [
      'Ingests HistData CSVs into Hive-partitioned Parquet, queried through DuckDB behind a FastAPI service and replayed bar by bar in a React/Vite UI.',
      'Manually labelled trades get triple-barrier outcomes that feed a feature store, an outcome model, and a meta model scoring whether a given setup is worth taking.',
      'Order execution is asserted off on every artifact load; the tool is deliberately research-only.',
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
