import Main from '../main';
import Banner from '../banner';
import Intro from './intro';

const Page = () => {
  return (
    <Main>
      <Banner
        label="遊び方ガイド"
        bannerImage="/guide/banner.webp"
      />
      <Intro />
    </Main>
  );
};

export default Page;
