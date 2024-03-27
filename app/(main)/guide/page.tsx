import Banner from '../banner';
import Main from '../main';
import Intro from './intro';

export default function Page() {
  return (
    <Main>
      <Banner
        label="遊び方ガイド"
        bannerImage="/guide/banner.webp"
      />
      <Intro />
    </Main>
  );
}
