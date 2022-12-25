import { NextSeo, NextSeoProps } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Head = () => {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: '公式Discordサーバー',
    description: '公式Discordサーバーの紹介をします'
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
