import dayjs from '../dayjs';
import fetchServerStatus from '../lib/fetchServerStatus';
import Item from './Item';
import Overall from './Overall';

export const runtime = 'edge';

export default async function Page() {
  const status = await fetchServerStatus();

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
        <Item
          name="Java版"
          available={status.networks.java.available}
        />
        <Item
          name="統合版"
          available={status.networks.bedrock.available}
        />
        <Item
          name="投票"
          available={status.networks.vote.available}
        />
      </ul>

      <div>
        最終確認:{' '}
        {dayjs(status.fetch_at)
          .tz()
          .format('YYYY年M月D日 H時m分s秒')}
      </div>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="mt-10 px-5 py-3 w-full text-center text-gray-500 border-t-2 border-gray-300 flex flex-col md:flex-row">
      <div>
        <small className="text-base">
          © 2022 御景サーバー
        </small>
      </div>

      <div className="mt-1 md:mt-auto md:ml-10">
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
