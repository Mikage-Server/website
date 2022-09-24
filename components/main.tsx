import type { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Footer from '../lib/footer';

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

const Main = ({ children, title, description }: Props) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />

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
        className="p-12 text-lg w-[calc(100vw-8rem)] h-screen bg-white fixed left-32 top-0 overflow-x-hidden overflow-y-auto"
      >
        {children}

        <Footer />
      </motion.main>
    </>
  );
};

export default Main;
