'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const Welcome = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const [greeting, setGreeting] = useState<string>('こんにちは');

  useEffect(() => {
    if (status !== 'loading' && !session) {
      router.push('/');
    }
  }, [status, session, router]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('おはようございます');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('こんにちは');
    } else {
      setGreeting('こんばんは');
    }
  }, []);

  return (
    <section className="pt-10 px-12 w-screen md:w-[calc(100vw-17rem)] min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-12rem)]">
      {status === 'loading' && <p>読み込み中...</p>}

      {session && (
        <>
          <h1 className="text-xl font-medium">
            {greeting}！ {session.user.name} さん！
          </h1>

          <div className="mt-5">
            <p>
              申し訳ございませんが、現在のエリアは工事中です。
            </p>
            <p>
              今後のアップデートで、御景ワールドと連携した機能を追加していく予定です。
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Welcome;
