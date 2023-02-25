import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import fetchStatus, { Status } from '../fetchStatus';
import Item from './item';
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
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    fetchStatus().then((status) => setStatus(status));
  }, []);

  const normals = [
    {
      href: '/newbie',
      name: '初めてのプレイヤーへ',
      icon: <Newbie className="w-10/12" />,
      submenu: null
    },
    {
      href: '/psi',
      name: '超能力',
      icon: <Psi className="w-8/12" />,
      submenu: null
    },
    {
      href: '/guide',
      name: '遊び方ガイド',
      icon: <Guide className="w-7/12" />,
      submenu: null
    },
    {
      href: '/#',
      name: 'その他',
      icon: <Others className="w-9/12" />,
      submenu: <SubmenuOthers status={status} />
    },
    {
      href: 'https://wiki.mikage.click/',
      name: 'Wiki (外部)',
      icon: <Wiki className="w-8/12" />,
      submenu: null
    }
  ];

  const handleHamBtnClick = useCallback(() => {
    setIsMenuOpenMobile(!isMenuOpenMobile);
  }, [isMenuOpenMobile]);

  return (
    <>
      <nav className={
        `w-20 h-screen text-black bg-yellow-500 text-center ${isMenuOpenMobile ? 'flex' : 'hidden md:flex'} flex-col items-center fixed left-0 top-0 z-10`
      }>
        <Icon />

        <div className="h-[calc(100%-18rem)] flex flex-col items-center justify-between">
          {normals.map((item) => (
            <Item
              href={item.href}
              name={item.name}
              icon={item.icon}
              submenu={item.submenu}
              submenuName={submenuName}
              setSubmenuName={setSubmenuName}
              key={item.href}
            />
          ))}
        </div>

        <User />
      </nav>

      <HamburgerButton
        isOpened={isMenuOpenMobile}
        onClick={handleHamBtnClick}
      />

      {isMenuOpenMobile && (
        <div
          className="w-[100vw] h-[100vh] bg-black bg-opacity-50 fixed top-0 left-0 z-0"
          onClick={handleHamBtnClick}
        />
      )}
    </>
  );
};

const Icon = () => {
  return (
    <div className="mb-10 w-full invisible md:visible">
      <Link href="/">
        <img
          src="https://eu.mc-api.net/v3/server/favicon/play.mikage.click"
          alt="アイコン"
          className="w-full"
        />
      </Link>
    </div>
  );
};

const User = () => {
  return (
    <div className="m-auto w-16 absolute inset-x-0 bottom-8">
      <Link href="/">
        <div className="w-16 h-16 text-blue-900 text-5xl bg-yellow-200 flex flex-col justify-end items-center rounded-xl">
          <FiUser />
        </div>
      </Link>
    </div>
  );
};

const HamburgerButton = ({ isOpened, onClick }: { isOpened: boolean, onClick: () => void }) => {
  return (
    <button
      className={
        isOpened
          ? 'md:hidden p-5 bg-white fixed top-0 left-0 z-10'
          : 'md:hidden p-5 bg-white shadow-xl fixed top-0 left-0 z-10'
      }
      onClick={onClick}
    >
      <div className="mb-2 w-10 h-2 bg-yellow-700" />
      <div className="mb-2 w-10 h-2 bg-yellow-800" />
      <div className="w-10 h-2 bg-yellow-900" />
    </button>
  );
};

export default Menu;
