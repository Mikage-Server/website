import Link from 'next/link';

const LetsJoin = () => {
  return (
    <section className="px-5 md:px-12 mt-32 md:mt-48 w-full h-64 text-yellow-700 text-xl md:text-2xl font-bold text-center tracking-wider bg-stripe-home perfect-center overflow-hidden">
      <p>
        不安があっても、鯖民が優しくあなたを迎えてくれます。
      </p>
      <p className="mt-2 mb-6">
        さあ、参加しましょう！
      </p>

      <Link href="/newbie">
        <div className="px-5 md:px-10 py-2 text-white bg-blue-900 rounded-full shadow-lg">
          <h1 className="font-bold">
            今すぐ参加する！
          </h1>
          <span className="font-medium text-lg md:text-xl">
            1.18.2 - 最新版 | play.mikage.click
          </span>
        </div>
      </Link>
    </section>
  );
};

export default LetsJoin;
