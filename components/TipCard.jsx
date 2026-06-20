import Link from 'next/link';

export default function TipCard({ tip }) {
  return (
    <article className="card tip-card">
      <h3>{tip.title}</h3>
      {tip.source ? (
        <span className="tip-source-badge">{tip.source}</span>
      ) : null}
      <ul>
        {tip.bullets.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {tip.cta ? (
        <Link href="/report" className="tip-cta">
          {tip.cta}
        </Link>
      ) : null}
    </article>
  );
}
