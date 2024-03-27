import Link from 'next/link';

interface ItemProps {
  href: string;
  name: string;
  nameSp: string;
  icon: JSX.Element;
}

export default function Item({
  href,
  name,
  nameSp,
  icon,
}: ItemProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center relative">
        <div className="text-blue-900 bg-white w-10 md:w-12 h-10 md:h-12 perfect-center rounded-xl">
          {icon}
        </div>

        <div className="mt-2 px-2 w-full text-xs font-medium">
          <span className="hidden md:block">{name}</span>
          <span className="block md:hidden">{nameSp}</span>
        </div>
      </div>
    </Link>
  );
}
