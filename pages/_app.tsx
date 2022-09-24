import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import useModern from '../hooks/useModern';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://mikage.pages.dev${router.route}`;

  // スマホ表示の最適化、ユーザーのカラーテーマの適応をサポート
  useModern();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo
        titleTemplate="%s - 御景サーバー"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url,
          description: '御景サーバーのウェブサイトです。'
        }}
      />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
};

export default MyApp;
