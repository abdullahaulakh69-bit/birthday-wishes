export const wishData = {
  name: process.env.FRIEND_NAME || 'Ch Salman Haider Sandhu',
  message:
    'Happy Birthday! Wishing you happiness, success, love, and laughter.',
};

export const quotes = [
  'You deserve endless happiness.',
  'Keep shining.',
  'Never stop smiling.',
  'May your dreams come true.',
  'Your smile lights up every room.',
  'Another year of being absolutely amazing.',
  'The world is better with you in it.',
  'Cheers to more adventures together!',
  'You make ordinary days extraordinary.',
  'Here is to laughter, love, and cake!',
];

export const photos = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Memory ${i + 1}`,
  caption: `A beautiful moment we shared together #${i + 1}`,
  url: `https://picsum.photos/seed/birthday${i + 1}/800/600`,
  thumbnail: `https://picsum.photos/seed/birthday${i + 1}/400/300`,
}));
