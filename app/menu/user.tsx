import Link from 'next/link';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useAtom } from 'jotai';
import { FiUser } from 'react-icons/fi';
import { isShowLoginModalAtom } from '../../app/atoms';

const User = () => {
  const { data: session, status } = useSession();

  const [, setIsShowLoginModal] = useAtom(isShowLoginModalAtom);

  // ログインボタンを押したとき、ログインモーダルを表示する
  const handleClickLogin = useCallback(() => {
    setIsShowLoginModal(true);
  }, [setIsShowLoginModal]);

  return (
    <div className="m-auto w-16 absolute inset-x-0 bottom-8">
      {!session ? (

        <button onClick={handleClickLogin}>
          <div className="w-16 h-16 text-blue-900 text-5xl bg-yellow-200 flex flex-col justify-end items-center rounded-xl">
            <FiUser />
          </div>
        </button>

      ) : (

        <Link href="/dashboard">
          <div className="w-16 h-16 bg-yellow-200 items-center rounded-xl overflow-hidden">
            <img
              src={session.user.image!}
              alt="Discordプロフィール画像"
              className="w-full"
            />
          </div>
        </Link>

      )}
    </div>
  );
};

export default User;
