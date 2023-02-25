'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { signOut } from 'next-auth/react';

const Logout = () => {
  const router = useRouter();

  // ログアウトボタンを押したとき、ログアウトする
  const handleClickLogout = useCallback(async () => {
    await signOut();
    router.push('/');
  }, [router]);

  return (
    <section className="m-auto w-48 absolute inset-x-0 bottom-8">
      <button
        onClick={handleClickLogout}
        className="px-5 py-2 text-gray-800 font-bold bg-gray-300 rounded-xl"
      >
        ログアウトする
      </button>
    </section>
  );
};

export default Logout;
