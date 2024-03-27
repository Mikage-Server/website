import Link from 'next/link';
import { useCallback } from 'react';

interface ItemProps {
  href: string;
  name: string;
  nameSp: string;
  icon: JSX.Element;
  submenu: JSX.Element | null;
  submenuName: string;
  setSubmenuName: (name: string) => void;
}

const Item = ({ href, name, nameSp, icon, submenu, submenuName, setSubmenuName }: ItemProps) => {
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
        <div className="text-blue-900 bg-white w-10 md:w-12 h-10 md:h-12 perfect-center rounded-xl">
          {icon}
        </div>

        <div className="mt-2 px-2 w-full text-xs font-medium">
          <span className="hidden md:block">
            {name}
          </span>
          <span className="block md:hidden">
            {nameSp}
          </span>
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
