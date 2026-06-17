# Tempus

**A configurable clock for displays, TV walls, and office screens.**
Set up the look once, share it as a short link. No app to install, no account required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ZIERA-io/clock_web)
&nbsp;
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)

---

## What it does

Tempus is a browser clock you can customize in under a minute and share as a URL. Everything — colors, face style, logo, timezone — is encoded in the link, so anyone who opens it sees exactly what you set up.

When connected to Supabase, uploaded logos are stored server-side and the link shortens to something like `https://tableclock.io/studio`.

---

## Features

**Clock**
- Analog and digital modes
- Five analog face styles — Classic, Minimal, Modern, Retro, Sport
- Adjustable clock size (40–130%)
- Timezone selection, 24h toggle, seconds and date display

**Appearance**
- 12 color theme presets
- Six individually adjustable color slots (background, face, ticks, hands, accent, text)
- Center logo: text/emoji, image URL, or file upload
- 9 font choices for the digital face

**Sharing**
- Every setting encodes into a URL hash — works without a backend
- Short links (`tableclock.io/your-name`) when Supabase is connected
- Uploaded logos stored in Supabase Storage and served by URL, not embedded in the link

**UI / Language**
- Interface available in Korean, English, Japanese, and Chinese
- Controls auto-fade after 3 seconds of inactivity

**Built for displays and TV walls**
- Wake Lock API keeps the screen on without a screensaver
- Full-screen mode (native Fullscreen API)
- Controls fade out when idle — nothing competes with the clock on a lobby screen

---

## Getting started

```bash
git clone https://github.com/ZIERA-io/clock_web.git
cd clock_web
npm install
npm run dev
```

Open http://localhost:5173. Click anywhere on the clock to open the settings panel.

## Build

```bash
npm run build
```

Output goes to `dist/`.

---

## Short links (optional)

Without Supabase, sharing works via URL hash — the link is self-contained but gets long when images are uploaded. To enable short links and server-side logo storage, connect a Supabase project.

**1. Create a Supabase project** at https://supabase.com

**2. Add credentials to `.env`:**

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**3. Run the SQL schema** in the Supabase SQL editor (see `.env.example`)

**4. Create a `logos` storage bucket** (public) with INSERT policy `true`

Once set up:
- Type a name in the **Link Name** field (e.g. `studio`)
- Click **Save** — the link becomes `https://tableclock.io/studio`
- Duplicate names are rejected with an error
- Links created without an account cannot be updated later

---

## Deployment

`vercel.json` handles SPA routing so short links resolve correctly in production.

```bash
npx vercel --prod
```

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the Vercel project environment variables if using short links.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vite · React 18 · TypeScript |
| Clock rendering | SVG + `requestAnimationFrame` (no re-renders at 60 fps) |
| Backend (optional) | Supabase (Postgres + Storage) |
| Hosting | Vercel |
| Analytics | Vercel Analytics |

---

## Contributing

Frontend work goes through the `Hael-o` account; backend and infra through `sera03`. Both are members of the [ZIERA-io](https://github.com/ZIERA-io) org.

Pull requests are welcome. For larger changes, open an issue first.

---

[한국어](README.ko.md) · [日本語](README.ja.md)
