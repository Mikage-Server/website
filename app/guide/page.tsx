import Main from '../../components/main';
import Banner from '../../lib/banner';
import IntroGuide from '../../lib/guide/intro-guide';

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
