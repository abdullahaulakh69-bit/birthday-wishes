import { wishData, quotes, photos } from '@/lib/data/wishes';

export const api = {
  getWish: async () => wishData,
  getPhotos: async () => photos,
  getQuotes: async () => quotes,
};
