import type { Metadata } from 'next';

const siteName = '春の大型アップデートが行われました！ | 御景サーバー';
const description = '御景の新しい季節がやってきました！ロビーが新しくなり、生活を楽しくする新要素が多数追加されました。';

export const metadata: Metadata = {
  title: siteName,
  description: description,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: siteName,
    description: description,
    images: [{
      url: "https://eu.mc-api.net/v3/server/favicon/play.mikage.click",
      width: 512,
      height: 512,
      alt: '御景サーバーのロゴ',
      type: 'image/webp'
    }],
    siteName: siteName
  },
  twitter: {
    site: '@siojinja'
  }
};
