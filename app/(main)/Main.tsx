'use client';

import { motion } from 'framer-motion';
import Footer from './Footer';

export default function Main({
  children,
}: { children: React.ReactNode }) {
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
        className="pt-12 md:pt-0 md:pl-20 pb-20 md:pb-0 relative"
      >
        {children}

        <Footer />
      </motion.main>
    </>
  );
}
