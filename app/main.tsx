'use client';

import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import Footer from './footer';
import LoginModal from './login/modal';
import { isShowLoginModalAtom } from './atoms';

const Main = ({ children }: { children: React.ReactNode }) => {
  const [isShowLoginModal] = useAtom(isShowLoginModalAtom);

  return (
    <>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 },
        }}
        transition={{ type: 'linear' }}
        className="pt-12 md:pt-auto md:pl-20 pb-20 md:pb-auto relative"
      >
        {children}

        <Footer />

        {isShowLoginModal && <LoginModal />}
      </motion.main>
    </>
  );
};

export default Main;
