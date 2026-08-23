import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'KDA Wishlist — Submit a definition. Get a solution.',
  description:
    'Submit reproducible GPU kernel definitions and workloads for Kernel Design Agents to optimize, validate, and return.',
  keywords: [
    'Kernel Design Agents',
    'GPU kernel optimization',
    'FlashInfer Trace',
    'KDA Wishlist',
  ],
  openGraph: {
    type: 'website',
    url: 'https://github.com/humanfia/KDA-wishlist',
    title: 'KDA Wishlist — Submit a definition. Get a solution.',
    description:
      'Turn a reproducible kernel definition into an optimized, validated implementation.',
    images: [{
      url: 'https://raw.githubusercontent.com/humanfia/KDA-wishlist/main/public/og.png',
      width: 1200,
      height: 630,
      alt: 'KDA Wishlist workflow',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDA Wishlist — Submit a definition. Get a solution.',
    description:
      'Turn a reproducible kernel definition into an optimized, validated implementation.',
    images: [
      'https://raw.githubusercontent.com/humanfia/KDA-wishlist/main/public/og.png',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
