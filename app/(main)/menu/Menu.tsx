import Link from 'next/link';
import Item from './Item';
import Guide from './icons/Guide';
import Newbie from './icons/Newbie';
import Others from './icons/Others';
import Psi from './icons/Psi';
import Wiki from './icons/Wiki';

export default function Menu() {
  const normals = [
    {
      href: '/newbie',
      name: '初めてのプレイヤーへ',
      nameSp: 'お初へ',
      icon: <Newbie className="w-10/12" />,
      submenu: null,
    },
    {
      href: '/guide',
      name: '遊び方ガイド',
      nameSp: '遊び方',
      icon: <Guide className="w-7/12" />,
      submenu: null,
    },
    {
      href: '/specials',
      name: '特殊要素',
      nameSp: '特殊要素',
      icon: <Psi className="w-8/12" />,
      submenu: null,
    },
    {
      href: '/#',
      name: 'その他',
      nameSp: 'その他',
      icon: <Others className="w-9/12" />,
      submenu: null,
    },
    {
      href: 'https://wiki.mikage.click/',
      name: 'Wiki (外部)',
      nameSp: 'Wiki',
      icon: <Wiki className="w-8/12" />,
      submenu: null,
    },
  ];

  return (
    <>
      <nav className="w-full h-12 text-black bg-yellow-500 text-center flex flex-row justify-center items-center shadow-lg fixed left-0 top-0 md:bottom-auto z-40 md:hidden">
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
              key={item.href}
            />
          ))}
        </div>
      </nav>
    </>
  );
}

function Icon({ className }: { className?: string }) {
  return (
    <div
      className={`md:mb-10 w-12 md:w-20 h-12 md:h-20 ${className}`}
    >
      <Link href="/">
        <img
          src={`https://eu.mc-api.net/v3/server/favicon/${process.env.NEXT_PUBLIC_SERVER_ADDRESS}`}
          alt="アイコン"
          className="w-full aspect-square bg-yellow-300"
        />
      </Link>
    </div>
  );
}
