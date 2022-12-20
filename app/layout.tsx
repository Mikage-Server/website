'use client';

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
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
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
