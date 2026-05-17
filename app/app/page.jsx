'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import TipCard from '@/components/TipCard';
import { TIP_CATEGORIES } from '@/data/tips';
import { getTipsForSession } from '@/lib/tipSession';

export default function HomePage() {
  const [tips, setTips] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const count = Math.random() < 0.5 ? 2 : 3;
    setTips(getTipsForSession(TIP_CATEGORIES, count));
  }, []);

  return (
    <main className="incident-app">
      {showIntro ? (
        <div className="preview-overlay" role="dialog" aria-modal="true" aria-label="Research Note">
          <div className="preview-card card">
            <h2>Research Note</h2>
            <p className="intro-text">
              This web MVP is based on a 2025 research study, where incident reporting was identified as one of the key focus
              areas that requires stronger attention.
            </p>
            <div className="preview-actions">
              <button type="button" onClick={() => setShowIntro(false)}>
                Enter Application
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <header className="hero">
        <div className="top-nav-row">
          <Link href="/kastau-tim-siber-landing.html" className="back-link">← Kembali ke Landing</Link>
        </div>
        <p className="hero-kicker">Kastau Tim Siber</p>
        <h1>Keamanan Informasi Anda</h1>
      </header>

      <section className="primary-action card">
        <Link href="/report" className="landing-btn-primary report-button" aria-label="Laporkan Insiden">Laporkan Insiden</Link>
        <p>Lapor cepat, aman, dan bisa anonim dalam kurang dari 30 detik.</p>
      </section>

      <section className="tips">
        <h2 className="section-title">Tips Keamanan Hari Ini</h2>
        <div className="tips-grid">
          {tips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </section>
    </main>
  );
}
