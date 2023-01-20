import Link from 'next/link';
import { use } from 'react';
import Wave from "./wave";
import fetchStatus from '../../lib/fetchStatus';

const Welcome = () => {
  const status = use(fetchStatus());

  return (
    <section className="w-[22rem] h-[28rem] bg-gray-100 text-center rounded-2xl shadow-xl flex flex-col items-center absolute top-[calc(100svh-5rem)] md:top-[calc(100svh-30rem)] overflow-hidden m-auto md:m-0 inset-0 md:left-10 z-10">
      <div className="w-full p-5 pb-2 bg-yellow-500">
        <div className="text-xl text-yellow-800 font-medium">
          あなたの帰る場所がある
        </div>
        <h1 className="mt-2 mb-1 text-3xl text-white text-center font-bold">
          御景サーバー
        </h1>
        <h1 className="-mt-1 text-2xl text-white text-center">
          Mikage Server
        </h1>

        <div className="text-xl font-medium -rotate-12 absolute top-[9.25rem] right-3">
          <div className="flex flex-row">
            <div className="px-3 py-1 text-white bg-sky-500">
              超能力
            </div>

            <div className="ml-3 px-2 py-1 text-white bg-orange-500">
              経済
            </div>
          </div>

          <div className="ml-5 mt-2 flex flex-row">
            <div className="px-3 py-1 text-white bg-red-500">
              戦い
            </div>

            <div className="ml-3 px-2 py-1 text-white bg-lime-500">
              新生活
            </div>
          </div>
        </div>
      </div>
      <Wave className="-mt-1 mb-20 w-full h-20 fill-yellow-500" />

      {status.players.online > 0 && (
        <div className="text-base">
          今は
          <strong className="mx-2">
            {status.players.online}
          </strong>
          人がオンライン！
        </div>
      )}

      <div>
        <Link href="/newbie">
          <div className="px-12 py-2 text-white bg-sky-600 rounded-full shadow-lg">
            <h1 className="text-xl font-bold">
              今すぐ参加する！
            </h1>
            play.mikage.click
          </div>
        </Link>
      </div>

      <div>
        <Link href={process.env.NEXT_PUBLIC_MONOCRAFT_VOTE_URL ?? ''}>
          <div className="px-5 mt-3 text-green-700 bg-green-200 font-medium rounded-lg">
            monocraftで投票する！
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
