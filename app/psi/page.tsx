import Main from '../main';
import Banner from '../banner';
import IntroPsi from './intro-psi';
import WhatPsi from './what-psi';

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
