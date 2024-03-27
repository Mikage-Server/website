'use client';

import { AnimatePresence } from 'framer-motion';
import useColorTheme from '../hooks/useColorTheme';

export default function AnimatedView({
  children,
}: { children: React.ReactNode }) {
  // ユーザーのカラーテーマの適応をサポート
  useColorTheme();

  return (
    <AnimatePresence
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      {children}
    </AnimatePresence>
  );
}
