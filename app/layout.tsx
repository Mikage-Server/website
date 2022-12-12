'use client';

import Script from 'next/script';
import { AnimatePresence } from 'framer-motion';
import useModern from '../hooks/useModern';
import Menu from '../lib/menu/menu';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // スマホ表示の最適化、ユーザーのカラーテーマの適応をサポート
  useModern();

  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
        <Script defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "124496809bcf4a82a14d220e48612dea"}'
        />
      </head>

      <body>
        <AnimatePresence
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>

        <Menu />
      </body>
    </html>
  );
};

export default RootLayout;
