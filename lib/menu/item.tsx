import Link from 'next/link';
import useHeadRoute from '../../hooks/useHeadRoute';

interface ItemProps {
  href: string;
  name: string;
  icon: JSX.Element;
}

const Item = ({ href, name, icon }: ItemProps) => {
  const route = useHeadRoute();

  return (
    <Link href={href}>
      <div className={
        href === route
          ? 'text-yellow-900 fill-yellow-900 flex flex-col items-center relative'
          : 'text-gray-500 fill-gray-500 flex flex-col items-center relative'
      }>
        <div className={
          href === route
            ? 'w-[7.5rem] h-full bg-yellow-200 rounded-r-xl transition ease-in duration-100 absolute top-0 -left-4'
            : 'w-[7.5rem] h-full bg-none transition ease-linear duration-75 absolute top-0 -left-4'
        } />

        <div className="w-24 flex flex-col items-center z-10">
          {icon}
        </div>

        <div className="text-sm w-24 z-10">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default Item;
