import Link from 'next/link';
import './globals.css';

export default async function NotFound() {
  return (
    <NotFoundLayout>
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-bold">
          あなたは未知のアクセスを試みた
        </h1>
        <div className="mt-5 text-xl font-medium">
          このページは存在しません。
        </div>
      </div>

      <Link href="/">
        <div className="border-4 border-black">
          <button
            type="button"
            className="px-10 py-5 text-2xl font-medium bg-gray-400 border-4 border-t-gray-300 border-l-gray-300 border-r-gray-600 border-b-gray-600"
          >
            トップページに移動する
          </button>
        </div>
      </Link>

      <Footer />
    </NotFoundLayout>
  );
}

function NotFoundLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          href={`https://eu.mc-api.net/v3/server/favicon/${process.env.NEXT_PUBLIC_SERVER_ADDRESS}`}
        />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_SITE_URL}
        />
      </head>

      <body className="w-screen h-screen bg-stripe-not-found">
        <main className="w-full h-full text-white text-not-found bg-[rgba(255,0,0,0.5)] perfect-center">
          {children}
        </main>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="mt-10 text-xl text-center font-medium">
      <div>
        <small className="text-xl">
          © 2022 御景サーバー
        </small>
      </div>

      <div className="mt-1">
        <a
          href={process.env.NEXT_PUBLIC_TWITTER_URL}
          className="px-2"
        >
          Twitter
        </a>
        /
        <a
          href={process.env.NEXT_PUBLIC_JMS_VOTE_URL}
          className="px-2"
        >
          Japan Minecraft Servers
        </a>
        /
        <a
          href={process.env.NEXT_PUBLIC_MONOCRAFT_VOTE_URL}
          className="px-2"
        >
          monocraft
        </a>
      </div>
    </footer>
  );
}
