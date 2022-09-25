import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import useModern from '../hooks/useModern';
import Menu from '../lib/menu/menu';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // スマホ表示の最適化、ユーザーのカラーテーマの適応をサポート
  useModern();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
        <meta name="google-site-verification" content="9MFGKY2INTNuKmR8Lq0XJCIbI2_iowGRlOGMZ-YGR-s" />
      </Head>

      <DefaultSeo
        titleTemplate="%s - 御景サーバー"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.route}`,
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

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>

      <Menu />
    </>
  );
};

export default MyApp;
