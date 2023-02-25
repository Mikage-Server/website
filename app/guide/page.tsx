import Main from '../main';
import Banner from '../banner';
import IntroGuide from './intro-guide';

const Page = () => {
  return (
    <Main>
      <Banner
        label="遊び方ガイド"
        bannerImage="/guide/banner.webp"
      />
      <IntroGuide />
    </Main>
  );
};

export default Page;
