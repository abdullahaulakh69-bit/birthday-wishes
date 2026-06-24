import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Happy Birthday Ch Salman Haider Sandhu 🎉',
  description: 'A magical birthday surprise for Ch Salman Haider Sandhu — 25 June 2026',
};

export const viewport = {
  themeColor: '#FF4F8B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} ${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
