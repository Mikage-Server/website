import Link from 'next/link';
import { AiFillPicture } from 'react-icons/ai';
import { Headline2 } from '../../components/headline';

const WhatsNew = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="最近のニュース"
        id="whats-new"
      />

      <article className="px-5 md:px-12">
        <div className="w-full h-[26rem] overflow-x-auto">
          <ul className="h-[calc(100%-0.5rem)] grid grid-flow-col gap-1">
            <ItemSpringUpdate2023 />
            <ItemVersionUpdate120 />
          </ul>
        </div>
      </article>
    </section>
  );
};

const Item = () => {
  return (
    <li className="mx-5 w-72 h-full rounded-lg overflow-hidden shadow-lg">
      <Link href="/#">
        <div className="w-full aspect-video text-5xl text-orange-700 bg-orange-200 flex flex-col items-center justify-center">
          <AiFillPicture />
        </div>

        <div className="p-5">
          2022-09-25
          <h3 className="text-yellow-700 text-xl font-medium">
            テストニュース
          </h3>

          <div className="mt-5 text-gray-500">
            テストニュースの内容です。
            本当にテストニュースです。
          </div>
        </div>
      </Link>
    </li>
  );
};

const ItemSpringUpdate2023 = () => {
  return (
    <li className="mx-5 w-72 h-full rounded-lg overflow-hidden shadow-lg">
      <Link href="/news/spring-update-2023">
        <div className="w-full aspect-video text-5xl text-orange-700 bg-orange-200 flex flex-col items-center justify-center">
          <img
            src="/newbie/lobby.webp"
            alt="ロビー"
            className="w-full"
          />
        </div>

        <div className="p-5">
          2023-05-07
          <h3 className="text-yellow-700 text-xl font-medium">
            春の大型アップデートが行われました！
          </h3>

          <div className="mt-5 text-gray-500">
            御景の新しい季節がやってきました！
            ロビー刷新、新要素も続々追加！そしていくつかのバランス調整、バグ修正諸々がありますよ。
          </div>
        </div>
      </Link>
    </li>
  );
};

const ItemVersionUpdate120 = () => {
  return (
    <li className="mx-5 w-72 h-full rounded-lg overflow-hidden shadow-lg">
      <Link href="/news/version-update-1-20">
        <div className="w-full aspect-video text-5xl text-orange-700 bg-orange-200 flex flex-col items-center justify-center">
          <img
            src="/news/version-update-1-20/pr.webp"
            alt="アプデPR"
            className="w-full"
          />
        </div>

        <div className="p-5">
          2023-08-22
          <h3 className="text-yellow-700 text-xl font-medium">
            1.20アップデートが行われました！
          </h3>

          <div className="mt-5 text-gray-500">
            夏だ！海だ！1.20アップデートだ！
            1.20の要素が見られるようになったのに加え、皆さんも領域を保護できるようになりましたよ。
          </div>
        </div>
      </Link>
    </li>
  );
};


export default WhatsNew;
