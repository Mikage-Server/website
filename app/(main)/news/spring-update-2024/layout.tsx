import type { Metadata } from 'next';

const siteName = '3月大型アップデート V0.1 | 御景サーバー';
const description =
  '長らくβ版として運営していた御景ですが、今回はついに正式にバージョン0.1としてリリースです！！まあ、ずっとβ版って言ってると後々ワケわからんくなるんでね...(^^;)';

export const metadata: Metadata = {
  title: siteName,
  description: description,
  openGraph: {
    type: 'article',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: siteName,
    description: description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/news/spring-update-2024/thumbnail.webp`,
        width: 1280,
        height: 720,
        alt: 'サムネ',
        type: 'image/webp',
      },
    ],
    siteName: siteName,
  },
  twitter: {
    site: '@siojinja',
    card: 'summary_large_image',
  },
};

export default function Layout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
