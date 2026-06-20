# Kastau Tim Siber — Project Info

## Overview

**Kastau Tim Siber** is a cyber awareness web application built for Indonesian government employees (ASN) at BPAD NTT (Badan Perpustakaan dan Arsip Daerah Nusa Tenggara Timur). It is part of a 2025 research study at Telkom University, adapting the HAIS-Q (Human Aspects of Information Security Questionnaire) instrument.

The app has three core functions:
1. **Incident Reporting** — quick, anonymous reporting via WhatsApp
2. **Security Tips** — rotating daily tips from 16 categories based on ISO 27001, NIST, CIS Controls
3. **Self-Assessment Quiz** — 10-question interactive cyber awareness quiz with scoring

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.5 (App Router) |
| UI | React 18.3.1, JSX |
| Styling | Global CSS (no CSS framework) |
| Fonts | Google Fonts — DM Sans + DM Serif Display |
| Output | Static export (`output: 'export'`) — produces plain HTML/CSS/JS in `out/` folder |
| Node.js | Not required at runtime — served as static files by Nginx |
| Package Manager | npm |

## Project Structure

```
researchtesis/
├── app/
│   ├── app/
│   │   └── page.jsx          # Dashboard: tips + report link + quiz link
│   ├── quiz/
│   │   └── page.jsx          # Interactive cyber awareness quiz (10 questions)
│   ├── report/
│   │   └── page.jsx          # Incident report form → WhatsApp redirect
│   ├── globals.css           # All styles (single CSS file)
│   ├── layout.jsx            # Root layout with footer
│   └── page.jsx              # Root → meta redirect to landing page
├── components/
│   └── TipCard.jsx           # Reusable tip card with source badge
├── data/
│   ├── tips.js               # 16 tip categories (ISO 27001, NIST, CIS, UU PDP)
│   └── quiz.js               # 10 quiz questions + scoring levels
├── lib/
│   └── tipSession.js         # Session-based tip rotation (sessionStorage)
├── public/
│   ├── gambar.png            # Background image
│   └── kastau-tim-siber-landing.html  # Standalone landing page (static HTML)
├── next.config.mjs           # Static export config
├── jsconfig.json             # Path aliases (@/*)
└── package.json
```

## Routes / Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.jsx` | Meta redirect to `/kastau-tim-siber-landing.html` |
| `/kastau-tim-siber-landing.html` | `public/kastau-tim-siber-landing.html` | Full landing page: research background, KAB model, validity data, CTA |
| `/app` | `app/app/page.jsx` | Main dashboard — rotating tips, report button, quiz button |
| `/report` | `app/report/page.jsx` | Incident report form — generates WhatsApp message |
| `/quiz` | `app/quiz/page.jsx` | 10-question quiz with explanations and result scoring |

## Key Features

### 1. Incident Reporting (`/report`)
- Select incident type (6 categories)
- Minimum 15-character description
- Anonymous or named reporting
- Generates formatted message → opens WhatsApp to Tim Siber number
- WhatsApp number configurable via `NEXT_PUBLIC_WHATSAPP_NUMBER` env var (default: `6281338238485`)

### 2. Security Tips (`/app`)
- 16 tip categories, each with 4 bullets and a source standard badge
- Randomly shows 2-3 tips per session
- Session-based rotation using `sessionStorage` (persisted across page reloads within a tab)
- Source standards: ISO/IEC 27001, NIST CSF, NIST SP 800-63B, NIST SP 800-124, NIST SP 800-144, NIST SP 800-61, CIS Controls, UU PDP No. 27/2022

### 3. Cyber Awareness Quiz (`/quiz`)
- 10 randomized questions from a pool of 10
- Multiple choice (A/B/C/D)
- Confirm answer → see explanation → next question flow
- Score with 4 levels: Perlu Peningkatan (0-3), Cukup Baik (4-6), Baik (7-8), Sangat Baik (9-10)
- Results page shows all answers with correct/incorrect indicators and explanations
- Restart or return to dashboard option

### 4. Landing Page (`/kastau-tim-siber-landing.html`)
- Standalone static HTML (not a Next.js page — served directly from `public/`)
- Sections: Hero, Statistics, Research Background (KAB model), 9 Focus Areas, Features, Reporting Workflow, Validity & Reliability, Quote, CTA
- Contains research validity data (Cronbach's Alpha: Knowledge 0.920, Attitude 0.903, Behavior 0.853)

## BPAD NTT Government Integration

The app is officially part of the **bpadntt.cloud** ecosystem:
- Landing page nav and footer link to bpadntt.cloud
- All app pages (`/app`, `/report`, `/quiz`) show a green-dot "bpadntt.cloud" badge in the top navigation
- Footer on all pages shows "Bagian dari bpadntt.cloud"

## Design Language

- **Color palette**: Navy `#0f2044`, light backgrounds, dark cards with glass-morphism
- **Typography**: DM Sans (body), DM Serif Display (headings)
- **Card style**: Rounded corners (16px), backdrop blur, subtle shadows
- **Mobile-first**: Max-width 560-680px content area, responsive design
- **No component library**: All custom CSS in `globals.css`

## Deployment

### Static Export
The app uses Next.js static export (`output: 'export'`), which means:
- `npm run build` produces a `out/` folder with plain HTML/CSS/JS
- No Node.js server needed — Nginx serves static files directly
- No API routes, no server-side rendering, no SSR/ISR

### Target VPS
| Detail | Value |
|---|---|
| VPS | Hostinger KVM 4, Ubuntu 22.04, Jakarta |
| IP | 212.85.26.65 |
| SSH | `ssh root@212.85.26.65` |
| Control Panel | aaPanel (https://212.85.26.65:8888) |
| Web Server | Nginx (via aaPanel) |
| Domain | `siber.bpadntt.cloud` (subdomain of bpadntt.cloud) |

### Deployment Path on VPS
```
/www/wwwroot/siber/        ← git clone destination
/www/wwwroot/siber/out/    ← Nginx site root (static files)
```

### Deployment Workflow
1. Push to `https://github.com/ihsanmokhsen/kastautimsiber`
2. SSH to VPS → `cd /www/wwwroot/siber && git pull`
3. `npm install && npm run build`
4. Nginx serves from `/www/wwwroot/siber/out/`

### aaPanel Notes
- Nginx config dir: `/www/server/panel/vhost/nginx/`
- Remove `error_page 404` line from site's nginx config (aaPanel auto-injects it)
- Reload nginx: `/www/server/nginx/sbin/nginx -s reload`
- SSL: Let's Encrypt via aaPanel
- MySQL CLI: `mysql -h 127.0.0.1 -u root -p` (not needed for this app)

### Existing Projects on Same VPS
- **BPAD NTT** — Laravel at `/www/wwwroot/bpad` → https://bpadntt.cloud

## Research Context

- **Institution**: Telkom University, Bandung, Indonesia — 2025
- **Researcher**: Muhammad Ihsanul Hakim Mokhsen S.Kom., M.S.F
- **Instrument**: Adapted HAIS-Q (54 items) for Indonesian government context
- **Framework**: KAB model (Knowledge, Attitude, Behavior)
- **Regulations referenced**: UU No. 27/2022 (PDP), ISO/IEC 27001:2022
- **Pilot study**: n=30, all 54 items valid (Pearson r > 0.361)
- **Cronbach's Alpha**: Knowledge α=0.920, Attitude α=0.903, Behavior α=0.853
- **Key finding**: 68% of data breaches caused by human error (Verizon DBIR 2024)

## Environment Variables

| Variable | Used In | Default |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Report page | `6281338238485` |

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Static export to out/ folder
npm run start     # Start production server (not used — static files served by Nginx)
npm run lint      # Run Next.js linter
```

## Known Constraints

- **Static only**: No server-side logic, no database, no API routes
- **No authentication**: App is open access, no login required
- **WhatsApp dependency**: Incident reports are sent via WhatsApp (external link, no backend storage)
- **Quiz is client-side only**: Results are not stored or tracked server-side
- **Tip rotation**: Based on `sessionStorage` — resets when browser tab is closed
