import Main from '../../components/main';
import Banner from '../../lib/psi/banner';
import IntroPsi from '../../lib/psi/intro-psi';
import WhatPsi from '../../lib/psi/what-psi';

const Page = () => {
  return (
    <Main>
      <Banner />
      <WhatPsi />
      <IntroPsi />
    </Main>
  );
};

export default Page;
