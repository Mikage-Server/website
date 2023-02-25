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
    <section className="mt-10">
      <button
        onClick={handleClickLogout}
        className="px-5 py-2 text-white font-bold bg-red-600 rounded-xl"
      >
        ログアウトする
      </button>
    </section>
  );
};

export default Logout;
