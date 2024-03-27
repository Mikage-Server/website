import Banner from '../banner';
import Main from '../main';
import Psi from './psi';
import Summary from './summary';

export default function Page() {
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
}
