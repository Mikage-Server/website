import type { Metadata } from 'next';
import ClientLayout from './clientLayout';

const siteName =
  '御景サーバー / まるでクリエイティブなサバイバルができるMinecraft生活サーバー';
const description =
  'まるでクリエイティブなサバイバルができるMinecraft生活サーバー「御景（みかげ）サーバー」のウェブサイトです。';

export const metadata: Metadata = {
  title: siteName,
  description: description,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: siteName,
    description: description,
    images: [
      {
        url: 'https://eu.mc-api.net/v3/server/favicon/play.mikage.click',
        width: 512,
        height: 512,
        alt: '御景サーバーのロゴ',
        type: 'image/webp',
      },
    ],
    siteName: siteName,
  },
  twitter: {
    site: '@siojinja',
  },
};

const RootLayout = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          href="https://eu.mc-api.net/v3/server/favicon/play.mikage.click"
        />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_SITE_URL}
        />
      </head>

      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;