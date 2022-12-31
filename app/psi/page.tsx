import Main from '../../components/main';
import Banner from '../../lib/banner';
import IntroPsi from '../../lib/psi/intro-psi';
import WhatPsi from '../../lib/psi/what-psi';

const Page = () => {
  return (
    <Main>
      <Banner
        label="超能力"
        bannerImage="/psi/banner.webp"
      />
      <WhatPsi />
      <IntroPsi />
    </Main>
  );
};

export default Page;
