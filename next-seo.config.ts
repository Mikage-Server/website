import { NextSeoProps } from 'next-seo';

export const siteName = '御景サーバー / 超能力の世界のMinecraft生活サーバー';
export const description = '超能力の世界のMinecraft生活サーバー「御景サーバー」のウェブサイトです。';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: `%s - ${siteName}`,
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
    site: '@siojinja',
    cardType: 'summary'
  }
};
