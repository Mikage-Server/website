import Link from 'next/link';
import dayjs from '../../dayjs';
import { MdOutlineFiberManualRecord, MdClose } from 'react-icons/md';
import type { Status } from '../../fetchStatus';

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

const Others = ({ status }: { status: Status | null }) => {
  return (
    <nav>
      <div className="p-5 w-72 font-medium bg-white shadow-xl rounded-xl absolute -top-40 left-20">
        <ul className="mb-8 text-yellow-800 text-lg">
          {items.map((item) => (
            <Item
              name={item.name}
              href={item.href}
              key={item.name}
            />
          ))}
        </ul>
        
        {status !== null && <NetworkStatus status={status} /> }
      </div>

      <div className="w-40 h-72 absolute -top-24 z-10" />
    </nav>
  );
};

const NetworkStatus = ({ status }: { status: Status }) => {
  const networks = status.networks;

  const total = 3;
  const okNum = (networks.java.available ? 1 : 0) + (networks.bedrock.available ? 1 : 0) + (networks.vote.available ? 1 : 0);

  return (
    <section className="pt-2 text-gray-500 border-t-2 border-gray-300">
      {status !== null && (
        <h2>
          {okNum === total && '全て正常に稼働しています'}
          {(okNum !== total && okNum > 0) && '一部のサーバーが正常に稼働していません'}
          {okNum === 0 && '全てのサーバーが正常に稼働していません'}
        </h2>
      )}

      {status !== null ? (
        <ul className="mt-1 text-gray-400 flex flex-row justify-around">
          <li>
            <h3>Java版</h3>
            <StatusIcon available={networks.java.available} />
          </li>
          <li>
            <h3>統合版</h3>
            <StatusIcon available={networks.bedrock.available} />
          </li>
          <li>
            <h3>投票</h3>
            <StatusIcon available={networks.vote.available} />
          </li>
        </ul>
      ) : (
        <div></div>
      )}

      {status !== null && (
        <div className="text-sm text-gray-400">
          最終確認: {dayjs(status.fetch_at).tz().format('H時m分')}
        </div>
      )}
    </section>
  );
};

const StatusIcon = ({ available }: { available: boolean }) => {
  return (
    <div className={
      available
        ? 'text-5xl text-emerald-500'
        : 'text-5xl text-red-500'
    }>
      {available ? <MdOutlineFiberManualRecord /> : <MdClose />}
    </div>
  );
};

const Item = ({ name, href }: ItemProps) => {
  return (
    <li className="my-1">
      <Link href={href}>
        <div className="p-2 w-full hover:bg-yellow-200 rounded-xl">
          {name}
        </div>
      </Link>
    </li>
  );
};

export default Others;
