import Link from 'next/link';
import '../app/globals.css';

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-stripe-not-found">
      <main className="text-white text-not-found w-screen h-screen bg-[rgba(255,0,0,0.5)] perfect-center">
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
            <button className="px-10 py-5 text-2xl font-medium bg-gray-400 border-4 border-t-gray-300 border-l-gray-300 border-r-gray-600 border-b-gray-600">
              トップページに移動する
            </button>
          </div>
        </Link>

        <small className="mt-10 text-xl font-medium">
          <a href="https://twitter.com/siojinja">
            © 2022 御景サーバー
          </a>
        </small>
      </main>
    </div>
  );
};

export default NotFound;
