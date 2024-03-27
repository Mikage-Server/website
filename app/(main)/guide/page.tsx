import Banner from '../Banner';
import Main from '../Main';
import Intro from './Intro';

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
