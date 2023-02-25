'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Provider } from 'jotai';
import { AnimatePresence } from 'framer-motion';
import useColorTheme from '../hooks/useColorTheme';
import Menu from '../lib/menu/menu';
import './globals.css';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [submenuName, setSubmenuName] = useState<string>('');
  const pathname = usePathname();

  // ユーザーのカラーテーマの適応をサポート
  useColorTheme();

  // 通常時はメニューを表示
  if (pathname !== '/status') {
    return (
      <Provider>
        <AnimatePresence
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>

        <Menu
          submenuName={submenuName}
          setSubmenuName={setSubmenuName}
        />
      </Provider>
    );
  }

  // ステータスページではメニューを非表示
  return (
    <Provider>
      {children}
    </Provider>
  );
};

export default ClientLayout;
