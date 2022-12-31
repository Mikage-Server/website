import { NextSeo, NextSeoProps } from 'next-seo';
import { NEXT_SEO_DEFAULT, siteName } from '../next-seo.config';

const Head = () => {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'ホーム',
    titleTemplate: siteName
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;