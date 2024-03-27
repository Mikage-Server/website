import Banner from '../Banner';
import Main from '../Main';
import Psi from './Psi';
import Summary from './Summary';

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
