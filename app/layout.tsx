'use client';

import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import useModern from '../hooks/useModern';
import Menu from '../lib/menu/menu';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // スマホ表示の最適化、ユーザーのカラーテーマの適応をサポート
  useModern();

  return (
    <html lang="ja">
      <head />

      <body>
        <DefaultSeo
          titleTemplate="%s - 御景サーバー"
          openGraph={{
            type: 'website',
            locale: 'ja_JP',
            description: '御景サーバーのウェブサイトです。',
            site_name: '御景サーバー ウェブサイト',
            images: [{
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.webp`,
              width: 512,
              height: 512,
              alt: '御景サーバーのロゴ',
              type: 'image/webp'
            }]
          }}
          twitter={{
            site: '@siojinja',
            cardType: 'summary'
          }}
        />

        {children}
        <AnimatePresence
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
        </AnimatePresence>

        <Menu />
      </body>
    </html>
  );
};

export default RootLayout;
