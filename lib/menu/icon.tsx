import Image from 'next/image';
import Link from 'next/link';

const Icon = () => {
  return (
    <Link href="/">
      <div className="w-24 h-24 relative">
        <Image
          src="/icon.webp"
          alt="アイコン"
          fill={true}
          className="w-full rounded-xl object-cover"
        />
      </div>
    </Link>
  );
};

export default Icon;
