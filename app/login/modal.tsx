import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { signIn } from 'next-auth/react';
import { isShowLoginModalAtom } from '../../app/atoms';

const Modal = () => {
  const [, setIsShowLoginModal] = useAtom(isShowLoginModalAtom);

  // モーダルを閉じる関数
  const closeModal = useCallback(() => {
    setIsShowLoginModal(false);
  }, [setIsShowLoginModal]);

  // ログインボタンが押されたときに、Discordサインインを行う
  const handleClickLogin = useCallback(async () => {
    await signIn('discord');
    setIsShowLoginModal(false);
  }, [setIsShowLoginModal]);

  return (
    <div className="w-full h-screen perfect-center fixed top-0 left-20 z-40">
      <div
        onClick={closeModal}
        className="w-full h-full bg-black bg-opacity-50 absolute top-0 left-0"
      />

      <section className="p-10 w-1/2 text-black text-center bg-white rounded-2xl z-50">
        <h1 className="mb-2 text-2xl text-purple-900 font-bold">
          ログイン

          <span className="ml-5 px-3 py-1 text-gray-700 text-xl font-medium bg-gray-200 rounded-xl">
            Beta
          </span>
        </h1>

        ログインすることで、御景サーバーでのプレイがもっと便利に！

        <div className="mt-16">
          <button
            onClick={handleClickLogin}
            className="px-10 py-2 text-white text-xl font-bold bg-purple-900 shadow-lg rounded-xl"
          >
            Discordでログインする
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
