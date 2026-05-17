'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const INCIDENT_TYPES = [
  'Email mencurigakan',
  'File mencurigakan',
  'Website mencurigakan',
  'Kehilangan dokumen',
  'Akses tidak sah',
  'Lainnya'
];

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281338238485';

function formatTimestamp(date) {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}

export default function ReportPage() {
  const MIN_DESCRIPTION = 15;
  const defaultTime = useMemo(() => formatTimestamp(new Date()), []);
  const [incidentType, setIncidentType] = useState(INCIDENT_TYPES[0]);
  const [description, setDescription] = useState('');
  const [reporterStatus, setReporterStatus] = useState('Anonim');
  const [reporterName, setReporterName] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const descriptionClean = description.trim();
  const canSubmit = descriptionClean.length >= MIN_DESCRIPTION;

  const statusLine = reporterStatus === 'Anonim'
    ? 'Anonim'
    : `Sertakan nama (${reporterName.trim() || 'Tanpa nama'})`;

  const message = [
    '[LAPORAN INSIDEN]',
    '',
    `Jenis: ${incidentType}`,
    `Deskripsi: ${descriptionClean}`,
    `Waktu: ${defaultTime}`,
    `Status Pelapor: ${statusLine}`,
    '',
    'Catatan:',
    'Mohon ditindaklanjuti.'
  ].join('\n');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;
    setIsPreviewOpen(true);
  };

  const goToWhatsApp = () => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <main className="incident-app">
      <header className="sub-header">
        <div className="top-nav-row">
          <Link href="/kastau-tim-siber-landing.html" className="back-link">← Kembali ke Landing</Link>
        </div>
        <Link href="/app" className="back-link">Kembali</Link>
        <h1>Form Laporan Insiden</h1>
      </header>

      <form onSubmit={handleSubmit} className="card report-form">
        <label>
          Jenis Insiden
          <select value={incidentType} onChange={(e) => setIncidentType(e.target.value)}>
            {INCIDENT_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label>
          Deskripsi singkat
          <textarea
            rows={4}
            placeholder="Tuliskan ringkasan kejadian"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <small className="input-note">
            Minimal {MIN_DESCRIPTION} karakter ({descriptionClean.length}/{MIN_DESCRIPTION})
          </small>
        </label>

        <label>
          Waktu kejadian
          <input value={defaultTime} readOnly />
        </label>

        <fieldset>
          <legend>Status pelapor</legend>
          <label className="inline-label">
            <input
              type="radio"
              name="status"
              checked={reporterStatus === 'Anonim'}
              onChange={() => setReporterStatus('Anonim')}
            />
            Anonim
          </label>
          <label className="inline-label">
            <input
              type="radio"
              name="status"
              checked={reporterStatus === 'Sertakan nama'}
              onChange={() => setReporterStatus('Sertakan nama')}
            />
            Sertakan nama
          </label>
        </fieldset>

        {reporterStatus === 'Sertakan nama' ? (
          <label>
            Nama pelapor
            <input
              type="text"
              placeholder="Masukkan nama (opsional)"
              value={reporterName}
              onChange={(e) => setReporterName(e.target.value)}
            />
          </label>
        ) : null}

        <p className="privacy-note">Laporan anonim tidak meminta identitas pribadi.</p>
        <div className="sticky-submit-wrap">
          <button type="submit" disabled={!canSubmit}>Kirim Laporan</button>
        </div>
      </form>

      {isPreviewOpen ? (
        <div className="preview-overlay" role="dialog" aria-modal="true" aria-label="Preview Laporan">
          <div className="preview-card card">
            <h2>Preview Laporan</h2>
            <pre>{message}</pre>
            <div className="preview-actions">
              <button type="button" className="secondary-btn" onClick={() => setIsPreviewOpen(false)}>
                Edit
              </button>
              <button type="button" onClick={goToWhatsApp}>Lanjut WhatsApp</button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
