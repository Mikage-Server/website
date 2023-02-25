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
    <section className="pt-10 px-12 w-[calc(100vw-17rem)]">
      {status === 'loading' && <p>読み込み中...</p>}

      {session && (
        <>
          <h1 className="text-xl font-medium">
            {greeting}！ {session.user.name} さん！
          </h1>
        </>
      )}
    </section>
  );
};

export default Welcome;
