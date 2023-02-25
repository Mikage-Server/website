import Link from 'next/link';
import { use } from 'react';
import Wave from './wave';
import fetchStatus from '../fetchStatus';
import Psi from '../menu/icons/psi';

const Welcome = () => {
  const status = use(fetchStatus());

  return (
    <div className="-mt-10 w-full h-20 flex flex-row justify-center absolute z-20">
      <section className="w-2/3 h-full text-xl text-white font-medium bg-emerald-500 shadow-lg flex flex-row justify-between rounded-full">
        <div className="w-20 h-20 perfect-center">
          <div className="w-16 h-16 bg-white perfect-center rounded-full">
            <Psi className="w-1/2 text-blue-900" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p>
            キミも、
            <StrongText>超能力</StrongText>
            でちょっぴり
            <StrongText>サイエンス</StrongText>
            ・
            <StrongText>ファンタジー</StrongText>
            なマイクラライフを送ろう。
          </p>

          {status.players.online > 0 && (
            <p className="text-base">
              今は
              <strong className="mx-2">
                {status.players.online}
              </strong>
              人が御景の世界にいるよ！
            </p>
          )}
        </div>

        <div className="px-2 h-full perfect-center">
          <Link href="/newbie">
            <button className="px-10 w-full h-16 font-bold bg-blue-900 rounded-full shadow-lg">
              今すぐ参加する！
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const StrongText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="mx-1 text-2xl font-bold text-shadow-base">
      {children}
    </span>
  );
};

export default Welcome;
