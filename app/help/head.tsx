import { NextSeo, NextSeoProps } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Head = () => {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: '困ったときは',
    description: '困ったときにするべきことを解説します'
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
