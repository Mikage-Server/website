import { useEffect, useState } from 'react';
import fetchStatus, { Status } from '../fetchStatus';
import Icon from './icon';
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
      icon: <Newbie className="w-1/2" />,
      submenu: null
    },
    {
      href: '/psi',
      name: '超能力',
      icon: <Psi className="w-1/2 my-2" />,
      submenu: null
    },
    {
      href: '/guide',
      name: '遊び方ガイド',
      icon: <Guide className="w-5/12 my-2" />,
      submenu: null
    },
    {
      href: '/#',
      name: 'その他',
      icon: <Others className="w-1/2" />,
      submenu: <SubmenuOthers status={status} />
    },
    {
      href: 'https://wiki.mikage.click/',
      name: 'Wiki (外部)',
      icon: <Wiki className="w-1/2" />,
      submenu: null
    }
  ];

  return (
    <nav className="w-32 h-screen text-gray-600 bg-white shadow-right-md text-center flex flex-col items-center fixed left-0 top-0 z-10 invisible md:visible">
      <div className="mt-5 mb-10 w-24">
        <Icon />
      </div>

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

      <div className="m-auto w-24 absolute inset-x-0 bottom-5">
        <User />
      </div>
    </nav>
  );
};

export default Menu;
