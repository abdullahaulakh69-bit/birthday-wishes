import { API_BASE } from '../utils/constants';

async function fetchJson(path) {
  const url = API_BASE ? `${API_BASE}${path}` : path;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const api = {
  getWish: () => fetchJson('/api/wish'),
  getPhotos: () => fetchJson('/api/photos'),
  getQuotes: () => fetchJson('/api/quotes'),
};
