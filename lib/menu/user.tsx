import Link from 'next/link';

const User = () => {
  return (
    <Link href="/">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full" />

        <div className="text-sm break-all">
          Coming soon
        </div>
      </div>
    </Link>
  );
};

export default User;
