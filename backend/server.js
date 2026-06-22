import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(',') || [
    'http://localhost:5173',
    'http://localhost:4173',
  ],
  methods: ['GET'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', apiRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Birthday API running on port ${PORT}`);
});
