import type { Metadata } from 'next';

const siteName = '1.20アップデートが行われました！ | 御景サーバー';
const description = '夏だ！海だ！1.20アップデートだ！1.20の要素が見られるようになったのに加え、皆さんも領域を保護できるようになりましたよ。';

export const metadata: Metadata = {
  title: siteName,
  description: description,
  openGraph: {
    type: 'article',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: siteName,
    description: description,
    images: [{
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/news/version-update-1-20/pr.webp`,
      width: 1280,
      height: 720,
      alt: 'アプデPR',
      type: 'image/webp'
    }],
    siteName: siteName
  },
  twitter: {
    site: '@siojinja',
    card: 'summary_large_image'
  }
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default Layout;
