import { Headline2 } from '../../components/headline';
import Link from 'next/link';

const WhatsNew = () => {
  return (
    <section className="mt-48">
      <Headline2
        label="最近のニュース"
        id="whats-new"
      />

      <article className="px-5 md:px-12">
        <div className="w-full h-96 overflow-x-auto">
          <ul className="w-[100rem] h-full flex flex-row">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ul>
        </div>
      </article>
    </section>
  );
};

const Item = () => {
  return (
    <li className="mx-5 w-64 h-full bg-gray-100 rounded-xl overflow-hidden">
      <Link href="/#">
        <div className="w-full h-48 bg-orange-200" />

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

export default WhatsNew;
