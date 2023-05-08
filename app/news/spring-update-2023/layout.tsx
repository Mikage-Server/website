import type { Metadata } from 'next';

const siteName = '春の大型アップデートが行われました！ | 御景サーバー';
const description = '御景の新しい季節がやってきました！ ロビー刷新、新要素も続々追加！そしていくつかのバランス調整、バグ修正諸々がありますよ。';

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
      url: '/newbie/lobby.webp',
      width: 1920,
      height: 1080,
      alt: 'ロビー',
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
