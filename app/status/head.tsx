import { NextSeo, NextSeoProps } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

const Head = () => {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'サーバーステータス',
    description: '障害情報を確認できます'
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
