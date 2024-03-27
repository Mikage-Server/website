import Link from 'next/link';
import { use } from 'react';
import { MdOutlineReport } from 'react-icons/md';
import fetchStatus, { Status } from '../fetchStatus';
import Psi from '../menu/icons/psi';

const Welcome = () => {
  const status = use(fetchStatus());
  const networks = status.networks;

  const okNum = (networks.java.available ? 1 : 0) + (networks.bedrock.available ? 1 : 0) + (networks.vote.available ? 1 : 0);

  return (
    <div className="-mt-10 w-full h-20 hidden md:flex md:flex-row justify-center absolute z-20">
      {okNum !== 0 ? <WelcomeBoard status={status} /> : <ClosedBoard />}
    </div>
  );
};

const WelcomeBoard = ({ status }: { status: Status }) => {
  return (
    <section className="w-2/3 h-full text-xl text-white font-medium bg-emerald-500 shadow-lg flex flex-row justify-between rounded-full">
      <div className="px-2 w-20 h-20 perfect-center">
        <div className="w-16 h-16 bg-white perfect-center rounded-full">
          <Psi className="w-1/2 text-blue-900" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p>
          キミも、
          <StrongText>クリエイティブなサバイバル</StrongText>
          を実現する
          <StrongText>特殊機能</StrongText>
          を使って、新しい生活を送ろう。
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
  );
};

const ClosedBoard = () => {
  return (
    <section className="w-2/3 h-full text-xl text-white font-medium bg-orange-500 shadow-lg flex flex-row justify-between rounded-full">
      <div className="px-2 w-20 h-20 perfect-center">
        <div className="w-16 h-16 bg-white perfect-center rounded-full">
          <div className="text-4xl text-blue-900">
            <MdOutlineReport />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p>
          現在全てのサーバーで障害が発生しています。
        </p>
        <p>
          復旧までお待ちください。
        </p>
      </div>

      <div className="px-2 h-full perfect-center">
        <Link href="/status">
          <button className="px-10 w-full h-16 font-bold bg-blue-900 rounded-full shadow-lg">
            ステータスを見る
          </button>
        </Link>
      </div>
    </section>
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
