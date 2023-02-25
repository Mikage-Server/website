'use client';

import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import Footer from './footer';
import LoginModal from './login/modal';
import { isShowLoginModalAtom } from './atoms';

const Main = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isShowLoginModal] = useAtom(isShowLoginModalAtom);

  return (
    <>
      {/* <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 },
        }}
        transition={{ type: 'linear' }}
        className="text-lg w-[100svw] md:w-[calc(100svw-8rem)] min-h-[100svh] bg-white fixed md:left-32 top-0 overflow-x-hidden"
      >
        {children}

        <Footer />
      </motion.main> */}

      <main className="pl-20 relative">
        {children}

        <Footer />

        {isShowLoginModal && <LoginModal />}
      </main>
    </>
  );
};

export default Main;
