'use client';

import { motion } from 'framer-motion';
import Footer from '../lib/footer';

const Main = ({ children }: { children: React.ReactNode }) => {
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
        className="text-lg w-[100svw] md:w-[calc(100svw-8rem)] h-[100svh] bg-white fixed md:left-32 top-0 overflow-x-hidden overflow-y-auto"
      >
        {children}

        <Footer />
      </motion.main>
    </>
  );
};

export default Main;
