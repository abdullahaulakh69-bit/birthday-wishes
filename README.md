# Birthday Surprise Website 🎉

A premium, interactive birthday surprise built with **Next.js 15** — animations, memory gallery, countdown, interactive cake, letter, gift box, and more.

## Tech Stack

- **Next.js 15** (App Router) + React 19
- **Tailwind CSS v4** — glassmorphism, mesh gradients, glow effects
- **Framer Motion** — scroll animations, parallax, micro-interactions
- **Swiper** — memory gallery carousel

## Quick Start

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open **http://localhost:3000**

Or from project root:

```bash
npm run dev
```

## Environment Variables

Create `frontend/.env.local`:

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_FRIEND_NAME` | Friend's name | `Bestie` |
| `NEXT_PUBLIC_BIRTHDAY_DATE` | Birthday (YYYY-MM-DD) | `2026-06-22` |
| `FRIEND_NAME` | Name used in API responses | `Bestie` |

## Project Structure

```
frontend/
├── app/
│   ├── api/          # Built-in API routes
│   ├── layout.js
│   ├── page.js
│   └── globals.css   # Premium design system
├── components/
├── hooks/
├── lib/data/         # Photos, quotes, wishes data
└── utils/
```

## Customize

| What | Where |
|------|--------|
| Friend's name | `.env.local` |
| Birthday date | `NEXT_PUBLIC_BIRTHDAY_DATE` |
| Photos | `lib/data/wishes.js` |
| Letter text | `utils/constants.js` → `LETTER_CONTENT` |
| Music | `components/MusicPlayer.jsx` → `MUSIC_SRC` |

## Deploy on Vercel (recommended)

1. Import repo: `abdullahaulakh69-bit/birthday-wishes`
2. **Root Directory:** `frontend` ← most important!
3. Framework: **Next.js** (auto-detected)
4. Add environment variables:

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_FRIEND_NAME` | Bestie |
| `NEXT_PUBLIC_BIRTHDAY_DATE` | 2026-06-22 |
| `FRIEND_NAME` | Bestie |

5. Deploy

## Deploy on Netlify

`netlify.toml` in the repo root sets `base = frontend`. Add the same env vars in Netlify → Site settings → Environment variables.

## Common deploy errors

| Error | Fix |
|-------|-----|
| `Cannot find package.json` | Set Root Directory to **`frontend`** on Vercel |
| `Permission denied` / wrong repo | Push latest code from project root |
| Build ESLint failure | Pull latest — gallery uses `next/image` now |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (port 3000) |
| `npm run build` | Production build |
| `npm run start` | Production server |

Made with ❤️ for your Bestie
