import { use } from 'react';
import dayjs from '../../lib/dayjs';
import type Status from './types';
import Overall from './overall';
import Item from './item';

const fetchStatus: () => Promise<Status> = async () => {
  const res = await fetch('https://api.mikage.click/v1/status', { cache: 'no-store' });
  return res.json();
};

const Page = () => {
  const status = use(fetchStatus());

  return (
    <main className="text-gray-900 w-full h-screen bg-gray-50 flex flex-col items-center">
      <div className="p-5 mt-16 md:mt-24 w-full md:w-1/2 text-center">
        <h1 className="mb-10 text-3xl font-bold">
          御景サーバー サーバーステータス
        </h1>

        <Overall
          okJE={status.networks.java.available}
          okBE={status.networks.bedrock.available}
          okVote={status.networks.vote.available}
        />
      </div>

      <ul className="p-5 mt-4 md:mt-8 w-full md:w-1/2">
        <Item name="Java版" available={status.networks.java.available} />
        <Item name="統合版" available={status.networks.bedrock.available} />
        <Item name="投票" available={status.networks.vote.available} />
      </ul>

      <div>
        最終確認: {dayjs(status.fetch_at).tz().format('YYYY年M月D日 H時m分s秒')}
      </div>

      <small className="my-8 md:mt-20 text-xl font-medium">
        <a href="https://twitter.com/siojinja">
          © 2022 御景サーバー
        </a>
      </small>
    </main>
  );
};

export default Page;
