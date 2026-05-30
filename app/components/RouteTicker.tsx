const ROUTES: [string, string][] = [
  ["Navi Mumbai", "Pune"],
  ["Thane", "Palghar"],
  ["Vashi", "Hinjewadi"],
  ["Bhiwandi", "Panvel"],
  ["Kalyan", "Boisar"],
  ["Panvel", "Chakan"],
  ["Vasai", "Thane"],
  ["Nerul", "Pimpri-Chinchwad"],
  ["Airoli", "Tarapur"],
];

function Items({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {ROUTES.map(([a, b], i) => (
        <span key={`${keyPrefix}-${i}`} className="item">
          <span className="route">{a}</span>
          <span className="arrow">→</span>
          <span className="route">{b}</span>
          <span className="sep">•</span>
        </span>
      ))}
    </>
  );
}

export default function RouteTicker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        <Items keyPrefix="a" />
        <Items keyPrefix="b" />
      </div>
    </div>
  );
}
