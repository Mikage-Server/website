'use client';

import { use, useEffect, useState } from 'react';
import { MdDone, MdOutlineReport } from 'react-icons/md';
import dayjs from 'dayjs';
import Status, { OverallProps, ItemProps } from './types';

const fetchStatus: () => Promise<Status> = async () => {
  const res = await fetch('https://api.mikage.click/v1/status');
  return res.json();
};

const Page = () => {
  const status = use(fetchStatus());

  return (
    <main className="text-gray-900 w-screen h-screen bg-gray-50 flex flex-col items-center">
      <div className="p-5 mt-16 md:mt-32 w-full md:w-1/2 text-center">
        <h1 className="mb-10 text-3xl font-bold">
          御景サーバー サーバーステータス
        </h1>

        <Overall
          okJE={status.networks.java.available}
          okBE={status.networks.bedrock.available}
          okVote={status.networks.vote.available}
        />
      </div>

      <ul className="p-5 mt-4 md:mt-20 w-full md:w-1/2">
        <Item name="Java版" available={status.networks.java.available} />
        <Item name="統合版" available={status.networks.bedrock.available} />
        <Item name="投票" available={status.networks.vote.available} />
      </ul>

      <div>
        最終確認: {dayjs(status.fetch_at).format('YYYY年M月D分 H時m分s秒')}
      </div>


      <small className="mt-8 md:mt-20 text-xl font-medium">
        <a href="https://twitter.com/siojinja">
          © 2022 御景サーバー
        </a>
      </small>
    </main>
  );
};

const Overall = ({ okJE, okBE, okVote }: OverallProps) => {
  const [allOk, setAllOk] = useState<boolean>(true);

  useEffect(() => {
    setAllOk(okJE && okBE && okVote);
  }, [okJE, okBE, okVote]);

  return (
    <section className={
      allOk
        ? 'px-5 md:px-10 py-5 text-white text-xl font-medium bg-emerald-500 rounded-xl flex flex-row'
        : 'px-5 md:px-10 py-5 text-white text-xl font-medium bg-orange-500 rounded-xl flex flex-row'
    }>
      <div className="text-5xl mr-5">
        {allOk ? <MdDone /> : <MdOutlineReport />}
      </div>
      <div className="flex flex-col justify-center">
        {allOk ? '全て正常に稼働しています' : '一部のサーバーが正常に稼働していません'}
      </div>
    </section>
  );
};

const Item = ({ name, available }: ItemProps) => {
  return (
    <li className="p-6 mb-5 w-full border-2 border-gray-300 rounded-xl">
      <h2 className="mb-1 text-xl font-medium">
        {name}
      </h2>

      {available ? (
        <span className="text-emerald-500">
          接続できました
        </span>
      ) : (
        <span className="text-red-500">
          接続できませんでした
        </span>
      )}
    </li>
  );
};

export default Page;
