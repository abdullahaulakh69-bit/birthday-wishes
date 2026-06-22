import { wishData, quotes, photos } from '../data/wishes.js';

export const getWish = (_req, res) => {
  try {
    res.json(wishData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch wish' });
  }
};

export const getPhotos = (_req, res) => {
  try {
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
};

export const getQuotes = (_req, res) => {
  try {
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
};
