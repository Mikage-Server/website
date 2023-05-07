import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import fetchStatus, { Status } from '../fetchStatus';
import Item from './item';
import User from './user';
import Guide from './icons/guide';
import Newbie from './icons/newbie';
import Others from './icons/others';
import Psi from './icons/psi';
import Wiki from './icons/wiki';
import SubmenuOthers from './submenu/others';

interface Props {
  submenuName: string;
  setSubmenuName: (name: string) => void;
}

const Menu = ({ submenuName, setSubmenuName }: Props) => {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    fetchStatus().then((status) => setStatus(status));
  }, []);

  const normals = [
    {
      href: '/newbie',
      name: '初めてのプレイヤーへ',
      nameSp: 'お初へ',
      icon: <Newbie className="w-10/12" />,
      submenu: null
    },
    {
      href: '/guide',
      name: '遊び方ガイド',
      nameSp: '遊び方',
      icon: <Guide className="w-7/12" />,
      submenu: null
    },
    {
      href: '/specials',
      name: '特殊要素',
      nameSp: '特殊要素',
      icon: <Psi className="w-8/12" />,
      submenu: null
    },
    {
      href: '/#',
      name: 'その他',
      nameSp: 'その他',
      icon: <Others className="w-9/12" />,
      submenu: <SubmenuOthers status={status} />
    },
    {
      href: 'https://wiki.mikage.click/',
      name: 'Wiki (外部)',
      nameSp: 'Wiki',
      icon: <Wiki className="w-8/12" />,
      submenu: null
    }
  ];

  return (
    <>
      <nav className="w-full h-12 text-black bg-yellow-500 text-center flex flex-row justify-center items-center shadow-lg fixed left-0 top-0 md:bottom-auto z-40 md:hidden">
        <User className="absolute left-5" />
        <Icon />
      </nav>

      <nav className="w-full md:w-20 h-20 md:h-screen text-black bg-yellow-500 text-center flex flex-row md:flex-col items-center fixed left-0 top-auto md:top-0 bottom-0 md:bottom-auto z-40">
        <Icon className="hidden md:block" />

        <div className="w-full h-20 md:h-[calc(100%-18rem)] flex flex-row md:flex-col items-center justify-around md:justify-between overflow-hidden">
          {normals.map((item) => (
            <Item
              href={item.href}
              name={item.name}
              nameSp={item.nameSp}
              icon={item.icon}
              submenu={item.submenu}
              submenuName={submenuName}
              setSubmenuName={setSubmenuName}
              key={item.href}
            />
          ))}
        </div>

        <User className="md:m-auto md:absolute md:inset-x-0 md:bottom-8 hidden md:block" />
      </nav>
    </>
  );
};

const Icon = ({ className }: { className?: string }) => {
  return (
    <div className={`md:mb-10 w-12 md:w-20 h-12 md:h-20 ${className}`}>
      <Link href="/">
        <img
          src="https://eu.mc-api.net/v3/server/favicon/play.mikage.click"
          alt="アイコン"
          className="w-full aspect-square bg-yellow-300"
        />
      </Link>
    </div>
  );
};

export default Menu;
