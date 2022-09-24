import Linking from '../../components/linking';
import Command from './icons/command';
import Newbie from './icons/newbie';
import Others from './icons/others';
import Psi from './icons/psi';
import Wiki from './icons/wiki';

interface ItemProps {
  href: string;
  name: string;
  icon: JSX.Element;
}

const normals = [
  {
    href: '/newbie',
    name: '初めてのプレイヤーへ',
    icon: <Newbie className="w-2/3" />
  },
  {
    href: '/psi',
    name: '超能力',
    icon: <Psi className="w-1/2 my-2" />
  },
  {
    href: '/command',
    name: 'コマンド',
    icon: <Command className="w-full" />
  },
  {
    href: '/#',
    name: 'その他',
    icon: <Others className="w-2/3" />
  },
  {
    href: 'http://wiki.mikage.click/',
    name: 'Wiki',
    icon: <Wiki className="w-2/3" />
  }
];

const Menu = () => {
  return (
    <nav className="w-32 h-screen text-gray-600 bg-white shadow-right-md text-center flex flex-col items-center fixed left-0 top-0">
      <div className="mt-5 mb-10 w-24">
        <Icon />
      </div>

      <div className="h-[calc(100%-21rem)] flex flex-col items-center justify-between">
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

const Icon = () => {
  return (
    <Linking href="/">
      <img
        src="/icon.webp"
        alt="アイコン"
        className="w-full rounded-xl"
      />
    </Linking>
  );
};

const Item = ({ href, name, icon }: ItemProps) => {
  return (
    <Linking href={href}>
      <div className=" text-yellow-900 fill-yellow-900 flex flex-col items-center relative">
        <div className="w-[7.5rem] h-full bg-yellow-200 rounded-r-xl absolute top-0 -left-4" />

        <div className="w-24 flex flex-col items-center z-10">
          {icon}
        </div>

        <div className="w-24 z-10">
          {name}
        </div>
      </div>
    </Linking>
  );
};

const User = () => {
  return (
    <Linking href="/">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full">

        </div>

        <div className="break-all">
          Coming soon
        </div>
      </div>
    </Linking>
  );
};

export default Menu;
