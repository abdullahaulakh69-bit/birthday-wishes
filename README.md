# Birthday Surprise Website 🎉

A premium, interactive birthday surprise website built with **React (Vite)** and **Node.js + Express**. Features magical animations, a memory gallery, countdown timer, interactive cake, letter envelope, gift box, and much more.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React, Vite, React Router, Framer Motion, Tailwind CSS, Swiper, React Confetti |
| Backend | Node.js, Express, CORS |

## Project Structure

```
automoile/
├── frontend/          # React Vite app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── animations/
│   │   ├── services/
│   │   └── utils/
│   └── vercel.json
├── backend/           # Express API
│   ├── routes/
│   ├── controllers/
│   └── data/
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

API runs at `http://localhost:5000`

### 2. Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

App runs at `http://localhost:5173`

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `CORS_ORIGIN` | Allowed frontend URL(s) | `http://localhost:5173` |
| `FRIEND_NAME` | Friend's name | `Bestie` |

### Frontend (`frontend/.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |
| `VITE_BIRTHDAY_DATE` | Birthday (YYYY-MM-DD) | `2026-06-22` |
| `VITE_FRIEND_NAME` | Friend's name | `Bestie` |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/wish` | Birthday wish message |
| GET | `/api/photos` | Gallery photos array |
| GET | `/api/quotes` | Birthday quotes array |

## Customization

1. **Birthday date** — Set `VITE_BIRTHDAY_DATE` in frontend `.env`
2. **Friend's name** — Set `VITE_FRIEND_NAME` and `FRIEND_NAME` in backend `.env`
3. **Photos** — Replace URLs in `backend/data/wishes.js` or update the API
4. **Letter** — Edit `LETTER_CONTENT` in `frontend/src/utils/constants.js`
5. **Music** — Replace the `MUSIC_SRC` URL in `frontend/src/components/MusicPlayer.jsx` with your own MP3 (place in `frontend/public/music/birthday.mp3` and use `/music/birthday.mp3`)

## Features

- Animated hero with parallax
- Fireworks & confetti on load
- Interactive birthday cake with candles
- Live countdown timer
- Swiper memory gallery with fullscreen preview
- Scroll-animated timeline
- Envelope letter with typing animation
- 3D gift box reveal
- Floating wish wall
- Dark/light theme toggle
- Music player with visualizer
- Cursor sparkles, emoji rain, floating elements
- Easter egg (click title 5 times)
- Share button & downloadable birthday card
- Full-screen celebration mode

## Deployment

### Frontend — Vercel

1. Push repo to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set **Root Directory** to `frontend`
4. Add environment variables:
   - `VITE_API_URL` = your deployed backend URL
   - `VITE_BIRTHDAY_DATE`
   - `VITE_FRIEND_NAME`
5. Deploy

### Backend — Render

1. Create a new **Web Service** on [Render](https://render.com)
2. Connect your repo, set **Root Directory** to `backend`
3. Build: `npm install` | Start: `npm start`
4. Set environment variables:
   - `CORS_ORIGIN` = your Vercel frontend URL
   - `FRIEND_NAME`
5. Deploy and copy the service URL into `VITE_API_URL`

### Backend — Railway

1. Create new project on [Railway](https://railway.app)
2. Deploy from repo, set root to `backend`
3. Add the same env vars as Render
4. Railway auto-assigns `PORT`

## Scripts

| Location | Command | Description |
|----------|---------|-------------|
| frontend | `npm run dev` | Dev server |
| frontend | `npm run build` | Production build |
| frontend | `npm run preview` | Preview build |
| backend | `npm run dev` | Dev with watch |
| backend | `npm start` | Production server |

## License

MIT — Made with ❤️ for your Bestie
