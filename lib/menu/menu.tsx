import Icon from './icon';
import Item from './item';
import User from './user';
import Command from './icons/command';
import Newbie from './icons/newbie';
import Others from './icons/others';
import Psi from './icons/psi';
import Wiki from './icons/wiki';

const normals = [
  {
    href: '/newbie',
    name: '初めてのプレイヤーへ',
    icon: <Newbie className="w-1/2" />
  },
  {
    href: '/psi',
    name: '超能力',
    icon: <Psi className="w-1/2 my-2" />
  },
  {
    href: '/command',
    name: 'コマンド',
    icon: <Command className="w-11/12" />
  },
  {
    href: '/#',
    name: 'その他',
    icon: <Others className="w-1/2" />
  },
  {
    href: 'https://wiki.mikage.click/',
    name: 'Wiki (外部)',
    icon: <Wiki className="w-1/2" />
  }
];

const Menu = () => {
  return (
    <nav className="w-32 h-screen text-gray-600 bg-white shadow-right-md text-center flex flex-col items-center fixed left-0 top-0 z-10">
      <div className="mt-5 mb-10 w-24">
        <Icon />
      </div>

      <div className="h-[calc(100%-19rem)] flex flex-col items-center justify-between">
        {normals.map((item) => (
          <Item
            href={item.href}
            name={item.name}
            icon={item.icon}
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
