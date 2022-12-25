import { NextSeo, NextSeoProps } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Head = () => {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'コマンド',
    description: 'コマンドを活用して便利に生活しましょう！'
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
