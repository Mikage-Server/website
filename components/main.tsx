import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode
  title: string
  description: string
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
      >
        {children}
      </motion.main>
    </>
  );
};

export default Main;
