# Nishimwe Prince

I build reliable software systems across algorithmic trading, full-stack platforms, AI agents, and formal verification. My current flagship project is **Trading Algos**: a documented signal-to-execution platform that connects strategy research, live market data, safety controls, broker execution, and operations.

## ⚙️ Flagship Project: Trading Algos

### Signal → Execution Platform

[Trading Algos](https://github.com/nishimweprince/trading-algos) is a monorepo of roughly 18 interoperating services, built to carry a market event from observation to decision and execution without losing control of risk or system state.

- **Strategies:** IPDA, LuxAlgo, VRVP, FU, Bitcoin 9to5, Pump.fun, and pattern-research workflows.
- **Execution:** A FastAPI MT5 hub validates, deduplicates, serializes, and reconciles orders before they reach a live terminal.
- **Market data:** cTrader Open API gateways expose ticks and OHLC over HTTP and server-sent events.
- **Safety:** Deterministic signal IDs, paper-first run modes, hard risk gates, circuit breakers, and durable crash recovery.
- **Operations:** Multi-channel notifications, stateful monitoring, configuration profiles, and operator runbooks.
- **Documentation:** More than 120 pages across 17 project areas, with architecture, setup, configuration, APIs, testing, safety, and deployment guidance.

**[Explore the documentation →](https://trading-algos.nishimweprince.dev)**

**[View the source →](https://github.com/nishimweprince/trading-algos)**

Core stack: Python, FastAPI, TypeScript, NestJS, MetaTrader 5, cTrader Open API, Solana, SQLite, DuckDB, React, and Next.js.

## 🔬 Open Source Contributions

#### ArkLib — Formal Verification in Lean 4

[ArkLib](https://github.com/Verified-zkEVM/ArkLib) is the Verified-zkEVM project's Lean 4 formalization of SNARK theory, interactive oracle reductions, and the coding theory underlying modern proof systems.

- Generalized the Elias volume lower bound on list size and its entropy form ([ABF26] Lemma 3.7 and Corollary 3.8) from linear codes over a field to arbitrary codes over a finite alphabet.
- Restructured the existing field-linear theorems as one-line specializations of the new generic cores, preserving every downstream call site.
- Introduced no new `sorry` and left the kernel-axiom baseline unchanged; all repository CI gates pass.
- PR: https://github.com/Verified-zkEVM/ArkLib/pull/758
- Stack: Lean 4, Mathlib, coding theory, formal verification

## ⚙️ Selected Trading Systems

#### IPDA Signal Service & MT5 Trader

A Python RSI-reversal signal service paired with the FastAPI execution hub it posts to, built so a replayed or duplicated signal can never produce a duplicate fill.

- Every signal carries a deterministic UUIDv5 id derived from symbol, candle bucket, and direction, so execution is idempotent — a replay returns the stored result instead of placing a second order.
- MT5 Trader serializes all order flow behind a single terminal lock, runs an `order_check` preflight, never auto-retries an ambiguous send, and reconciles crash-interrupted trades on startup.
- Link: https://github.com/nishimweprince/trading-algos/tree/main/ipda
- Stack: Python, FastAPI, MetaTrader 5, Pine Script, Pydantic, SQLite
- Docs: [trading-algos.nishimweprince.dev/ipda](https://trading-algos.nishimweprince.dev/ipda)

#### Pump.fun Post-Graduation Scalper

A TypeScript Solana bot that detects pump.fun token graduations to PumpSwap and scalps them — where the hard problem is rejecting scams, not finding candidates.

- Ten hard guardrails — mint and freeze authority, LP burn, an atomic buy-plus-sell honeypot simulation, holder concentration, liquidity floor and price impact, Token-2022 extensions — veto roughly 98% of graduations.
- Deduplicated detection across PumpPortal, Helius, and Yellowstone gRPC feeds, Jito bundles with RPC fallback, and pre-signed exit ladders for sub-second exits.
- Link: https://github.com/nishimweprince/trading-algos/tree/main/pump-fun
- Stack: TypeScript, Solana, Jito, Helius, Yellowstone gRPC, SQLite
- Docs: [trading-algos.nishimweprince.dev/pump-fun](https://trading-algos.nishimweprince.dev/pump-fun)

#### Lookup Trader — Pattern Research Platform

A local research platform for building a pattern-based probability database from historical price data — bar replay, manual labelling, and outcome modelling, with no order path by design.

- Ingests HistData CSVs into Hive-partitioned Parquet, queried through DuckDB behind a FastAPI service and replayed bar by bar in a React/Vite UI.
- Manually labelled trades get triple-barrier outcomes that feed a feature store, an outcome model, and a meta model scoring whether a given setup is worth taking.
- Link: https://github.com/nishimweprince/trading-algos/tree/main/lookup-trader
- Stack: Python, FastAPI, DuckDB, Parquet, React, Vite
- Docs: [trading-algos.nishimweprince.dev/lookup-trader](https://trading-algos.nishimweprince.dev/lookup-trader)

## 🚀 Previous Projects

#### Akagera National Park Booking System

Akagera National Park is Central Africa’s largest protected wetland and the last remaining refuge for savannah-adapted species in Rwanda. Visit the [official website](https://www.africanparks.org/the-parks/akagera) for more information.

- The official booking system for the Akagera National Park. Includes seats, activites, and payment management.
- Link: https://booking.akageraform.rw
- Stack: TypeScript, Node.js, React, Tailwind CSS, PostgreSQL, Docker

#### Muse of research

- An AI agent that helps users find scholarly articles and papers. Available on X, Telegram and Discord.
- Link: https://x.com/MuseofResearch
- Stack: [Eliza](https://github.com/elizaOS/eliza), Python, FastAPI, PostgreSQL, TypeScript
- Docs: [nishimweprince/docs/muse-of-research/sourcerer.md](docs/muse-of-research/sourcerer.md)

#### Lens Music

- A web application allowing creators to distribute their music on 150+ music platforms.
- Link: https://music.lens.rw
- Stack: [DDEX](https://ddex.net/standards/), Node.js, React, Tailwind CSS, PostgreSQL, Docker
- Docs: [nishimweprince/docs/lens-music/README.md](https://github.com/lens-ltd/lens-music-bn/blob/main/README.md)

#### TradingView Strategies

- A collection of TradingView strategies (original and community-modified) written in Pine Script.
- Docs: [nishimweprince/docs/tradingview-strategies/README.md](docs/tradingview-strategies/README.md)
- Stack: Pine Script, Python, Backtrader

#### TradingView Alerts Trading Bot

- A trading bot that uses TradingView alerts to trade stocks, crypto, and forex.
- Stack: TypeScript, Node.js, Express.js, PostgreSQL, Capital.com API
- Docs: [nishimweprince/docs/capital-trading/README.md](docs/capital-trading/README.md)

#### Poker Modelling (Texas Hold'em)

- A full-stack Texas Hold'em web app with a Next.js 15 + Redux Toolkit frontend, a FastAPI backend powered by pokerkit, and PostgreSQL for hand history and action tracking.
- Link: https://github.com/nishimweprince/poker-modelling
- Stack: Next.js, TypeScript, FastAPI, Python, PostgreSQL, Redux Toolkit, shadcn/ui, Tailwind CSS, Docker

#### Solana Web3

- A utility application that allows users to transfer SOL and other tokens on the Solana blockchain between wallets.
- Link: https://github.com/nishimweprince/solana-web3
- Stack: TypeScript, Node.js

## 🛠️ Technical Skills

**Frontend Development**: 
- React.js, Next.js, Angular, Vue.js

**Backend Development**
- Node.js, Express.js, Java Spring Boot, Python Django/FastAPI

**Formal Verification**
- Lean 4, Mathlib

**Trading Systems**
- MetaTrader 5, cTrader Open API, Solana/Jito, Pine Script, DuckDB

**Database, Cloud & DevOps**
- MongoDB, PostgreSQL, MySQL, Redis
- AWS, Azure, GCP
- Docker, CI/CD pipelines, Github Actions

## ⚯ Let's Connect

I'm always interested in collaborating on innovative projects and connecting with fellow developers!

- LinkedIn: [Nishimwe Prince](https://www.linkedin.com/in/nishimweprince)
- X: [@nishimweprince](https://x.com/nishimweprince)
- Email: [princeelysee@gmail.com](mailto:princeelysee@gmail.com)

<!-- gitarmy-wallet:v1 {"chain":"solana","address":"2q1AF2QVG1kFLrogeVmJ8nYwFG7uFy5u29pdpTxoR1ey"} -->
