import { use } from 'react';
import dayjs from '../../lib/dayjs';
import fetchStatus from '../../lib/fetchStatus';
import Overall from './overall';
import Item from './item';

const Page = () => {
  const status = use(fetchStatus());

  return (
    <main className="text-gray-900 w-[100svw] h-[100svh] bg-gray-50 flex flex-col items-center fixed top-0 overflow-x-hidden overflow-y-auto">
      <div className="p-5 mt-10 2xl:mt-16 w-full md:w-1/2 text-center">
        <h1 className="mb-6 2xl:mb-10 text-3xl font-bold">
          御景サーバー サーバーステータス
        </h1>

        <Overall
          okJE={status.networks.java.available}
          okBE={status.networks.bedrock.available}
          okVote={status.networks.vote.available}
        />
      </div>

      <ul className="p-5 mt-4 2xl:mt-8 w-full md:w-1/2">
        <Item name="Java版" available={status.networks.java.available} />
        <Item name="統合版" available={status.networks.bedrock.available} />
        <Item name="投票" available={status.networks.vote.available} />
      </ul>

      <div>
        最終確認: {dayjs(status.fetch_at).tz().format('YYYY年M月D日 H時m分s秒')}
      </div>

      <small className="my-8 2xl:mt-20 text-xl font-medium">
        <a href="https://twitter.com/siojinja">
          © 2022 御景サーバー
        </a>
      </small>
    </main>
  );
};

export default Page;
