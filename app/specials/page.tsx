import Main from '../main';
import Banner from '../banner';
import Intro from './intro';
import Summary from './summary';

const Page = () => {
  return (
    <Main>
      <Banner
        label="特殊要素"
        bannerImage="/psi/banner.webp"
      />
      <Summary />
      <Intro />
    </Main>
  );
};

export default Page;
