'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
      <>
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
      </>
    );
  }

  // ステータスページではメニューを非表示
  return (
    <>
      {children}
    </>
  );
};

export default ClientLayout;
