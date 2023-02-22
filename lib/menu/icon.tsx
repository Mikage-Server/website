import Link from 'next/link';

const Icon = () => {
  return (
    <Link href="/">
      <img
        src="https://eu.mc-api.net/v3/server/favicon/play.mikage.click"
        alt="アイコン"
        className="w-full rounded-xl"
      />
    </Link>
  );
};

export default Icon;
