import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const systemLayers = [
  {
    label: 'Observe',
    title: 'Market data',
    detail: 'cTrader ticks, OHLC, Helius, Yellowstone',
  },
  {
    label: 'Decide',
    title: 'Strategy services',
    detail: 'IPDA, LuxAlgo, VRVP, FU, Lookup Trader',
  },
  {
    label: 'Protect',
    title: 'Risk & validation',
    detail: 'Guardrails, idempotency, session gates',
  },
  {
    label: 'Act',
    title: 'Execution & operations',
    detail: 'MT5, Jito, alerts, durable state',
  },
];

const systemFacts = [
  { value: '~18', label: 'Interoperating services' },
  { value: '120+', label: 'Documentation pages' },
  { value: '17', label: 'Documented project areas' },
];

export default function TradingAlgosSpotlight() {
  return (
    <section id="trading-algos" className="page-section trading-spotlight">
      <header className="trading-spotlight__intro">
        <div>
          <p className="eyebrow">Flagship system · Trading Algos</p>
          <h2>From market event to executed trade.</h2>
        </div>
        <div className="trading-spotlight__summary">
          <p>
            A working platform of strategy engines, market-data gateways, broker execution,
            and operator tooling—designed as one observable, failure-aware system.
          </p>
          <div className="trading-spotlight__actions">
            <a
              className="button button--inverted"
              href="https://trading-algos.nishimweprince.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the documentation
              <FaArrowUpRightFromSquare className="inline-icon" aria-hidden="true" />
            </a>
            <a
              className="text-link text-link--inverse"
              href="https://github.com/nishimweprince/trading-algos"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source <FaArrowUpRightFromSquare className="inline-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <div className="trading-system" aria-label="Trading Algos system flow">
        {systemLayers.map((layer, index) => (
          <div className="trading-system__layer" key={layer.title}>
            <div className="trading-system__meta">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{layer.label}</span>
            </div>
            <h3>{layer.title}</h3>
            <p>{layer.detail}</p>
            {index < systemLayers.length - 1 && (
              <FaArrowRight className="trading-system__arrow" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="trading-spotlight__footer">
        <p>
          Paper-first run modes, deterministic signal IDs, serialized order flow, and durable
          recovery make safety part of the architecture—not an operator afterthought.
        </p>
        <dl className="trading-facts">
          {systemFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
