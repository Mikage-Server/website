import Link from 'next/link';
import { use } from 'react';
import Wave from "./wave";
import fetchStatus from '../fetchStatus';

const Welcome = () => {
  const status = use(fetchStatus());

  return (
    <section className="w-[22rem] h-[28rem] bg-gray-100 text-center rounded-2xl shadow-xl flex flex-col items-center absolute top-[calc(100svh-5rem)] md:top-[calc(100svh-30rem)] overflow-hidden m-auto md:m-0 inset-0 md:left-28 z-10">
      <div className="w-full p-5 pb-2 bg-yellow-800">
        <div className="text-lg text-white font-medium">
          あなたの帰る場所がある
        </div>
        <h1 className="mt-2 mb-1 text-4xl text-white text-center font-bold">
          御景サーバー
        </h1>
        <h1 className="-mt-1 text-2xl text-white text-center">
          Mikage Server
        </h1>

        {/* <Genre /> */}
      </div>
      <Wave className="-mt-1 mb-20 w-full h-20 fill-yellow-800" />

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
          <div className="px-12 py-2 text-white bg-blue-900 rounded-full shadow-lg">
            <h1 className="text-xl font-bold">
              今すぐ参加する！
            </h1>
            play.mikage.click
          </div>
        </Link>
      </div>

      <div className="mt-4 pt-2 w-full border-t-2 border-gray-300">
        <div className="px-5">
          <h3 className="font-bold">
            投票すると報酬がもらえるよ！
          </h3>
          <p className="text-sm">
            両方のサイトですると報酬2倍！
          </p>
        </div>

        <div className="px-10 my-2 flex flex-row justify-evenly gap-4">
          <Link
            href={process.env.NEXT_PUBLIC_JMS_VOTE_URL ?? '/'}
            className="w-1/2 py-1 text-yellow-900 bg-yellow-200 font-medium rounded-lg"
          >
            JMS
          </Link>

          <Link
            href={process.env.NEXT_PUBLIC_MONOCRAFT_VOTE_URL ?? '/'}
            className="w-1/2 py-1 text-yellow-900 bg-yellow-200 font-medium rounded-lg"
          >
            monocraft
          </Link>
        </div>
      </div>
    </section>
  );
};

const Genre = () => {
  return (
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
  );
};

export default Welcome;
