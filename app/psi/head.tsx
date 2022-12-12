import { NextSeo, NextSeoProps } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Head = () => {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: '超能力',
    description: '超能力を使って生活しましょう！'
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
