import Link from 'next/link';
import { MdOutlineFiberManualRecord } from 'react-icons/md';

interface ItemProps {
  name: string;
  href: string;
}

const items = [
  {
    name: 'コマンド',
    href: '/commands'
  },
  {
    name: 'ワールド',
    href: '/worlds'
  },
  {
    name: '運営',
    href: '/staff'
  },
  {
    name: '公式Discordサーバー',
    href: '/discord'
  },
  {
    name: '困ったときは',
    href: '/help'
  }
];

const Others = () => {
  return (
    <nav>

      <div className="p-5 w-72 font-medium bg-white shadow-xl rounded-xl absolute -top-32 left-32">
        <ul className="mb-8 text-yellow-800 text-xl">
          {items.map((item) => (
            <Item
              name={item.name}
              href={item.href}
              key={item.name}
            />
          ))}
        </ul>

        <section className="pt-2 text-gray-500 border-t-2 border-gray-300">
          <h2>ネットワーク障害発生状況</h2>

          <ul className="mt-1 text-gray-400 flex flex-row justify-around">
            <li>
              <h3>Java版</h3>
              <div className="text-5xl text-emerald-500">
                <MdOutlineFiberManualRecord />
              </div>
            </li>
            <li>
              <h3>統合版</h3>
              <div className="text-5xl text-emerald-500">
                <MdOutlineFiberManualRecord />
              </div>
            </li>
            <li>
              <h3>投票</h3>
              <div className="text-5xl text-emerald-500">
                <MdOutlineFiberManualRecord />
              </div>
            </li>
          </ul>
        </section>
      </div>

      <div className="w-32 h-72 absolute -top-16 z-10" />
    </nav>
  );
};

const Item = ({ name, href }: ItemProps) => {
  return (
    <li className="my-2">
      <Link href={href}>
        <div className="p-2 w-full hover:bg-yellow-200 rounded-xl">
          {name}
        </div>
      </Link>
    </li>
  );
};

export default Others;
