import { NextSeo, NextSeoProps } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Head = () => {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: '初めてのプレイヤーへ',
    description: 'サーバーに参加しましょう！'
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
