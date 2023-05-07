import Main from '../main';
import Banner from '../banner';
import Summary from './summary';
import Psi from './psi';

const Page = () => {
  return (
    <Main>
      <Banner
        label="特殊要素"
        bannerImage="/psi/banner.webp"
      />
      <Summary />
      <Psi />
    </Main>
  );
};

export default Page;
