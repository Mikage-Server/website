import Link from 'next/link';
import { useCallback } from 'react';

interface ItemProps {
  href: string;
  name: string;
  icon: JSX.Element;
  submenu: JSX.Element | null;
  submenuName: string;
  setSubmenuName: (name: string) => void;
}

const Item = ({ href, name, icon, submenu, submenuName, setSubmenuName }: ItemProps) => {
  const handleMouseOver = useCallback(() => {
    setSubmenuName(name);
  }, [name, setSubmenuName]);

  const handleMouseOut = useCallback(() => {
    setSubmenuName('');
  }, [setSubmenuName]);

  return (
    <Link
      href={href}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex flex-col items-center relative">
        <div className="w-[7.5rem] h-full bg-none transition ease-linear duration-75 absolute top-0 -left-4" />

        <div className="text-blue-900 bg-white w-12 h-12 flex flex-col justify-center items-center rounded-xl">
          {icon}
        </div>

        <div className="mt-2 px-2 w-full text-xs font-medium">
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
