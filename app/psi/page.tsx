import Main from '../../components/main';
import Banner from '../../lib/psi/banner';
import IntroPsi from '../../lib/psi/intro-psi';
import WhatPsi from '../../lib/psi/what-psi';

const title = '超能力';
const description = '超能力を使って生活しましょう！';

const Page = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <Banner />
      <WhatPsi />
      <IntroPsi />
    </Main>
  );
};

export default Page;
