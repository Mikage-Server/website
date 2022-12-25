import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';

interface ItemProps {
  href: string;
  name: string;
  icon: JSX.Element;
  submenu: JSX.Element | null;
  submenuName: string;
  setSubmenuName: (name: string) => void;
}

const Item = ({ href, name, icon, submenu, submenuName, setSubmenuName }: ItemProps) => {
  const pathname = usePathname();

  const handleMouseOver = useCallback(() => {
    setSubmenuName(name);
  }, [name, setSubmenuName]);

  const handleMouseOut = useCallback(() => {
    setSubmenuName('');
  }, [setSubmenuName]);

  useEffect(() => {
    console.log('hey!');
    console.log(icon);
  }, [icon]);

  return (
    <Link
      href={href}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={
        href === pathname
          ? 'text-yellow-900 fill-yellow-900 flex flex-col items-center relative'
          : 'text-gray-500 fill-gray-500 flex flex-col items-center relative'
      }>
        <div className={
          href === pathname
            ? 'w-[7.5rem] h-full bg-yellow-200 rounded-r-xl transition ease-in duration-100 absolute top-0 -left-4'
            : 'w-[7.5rem] h-full bg-none transition ease-linear duration-75 absolute top-0 -left-4'
        } />

        <div className="w-24 flex flex-col items-center z-10">
          {icon}
        </div>

        <div className="text-sm w-24 z-10">
          {name}
        </div>

        {(submenuName === name && submenu) && (
          <>
            {submenu}
          </>
        )}
      </div>
    </Link>
  );
};

export default Item;
