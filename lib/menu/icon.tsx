import Link from 'next/link';

const Icon = () => {
  return (
    <Link href="/">
      <img
        src="/icon.webp"
        alt="アイコン"
        className="w-full rounded-xl"
      />
    </Link>
  );
};

export default Icon;
