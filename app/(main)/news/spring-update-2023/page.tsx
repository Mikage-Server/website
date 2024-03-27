import Main from '../../Main';
import Banner from '../Banner';
import Fixed from './Fixed';
import Health from './Health';
import Improved from './Improved';
import Summary from './Summary';
import Updated from './Updated';

export default function Page() {
  return (
    <Main>
      <Banner
        label="春の大型アップデートが行われました！"
        bannerImage="/newbie/lobby.webp"
        published="2023-05-07"
        author="umasiyo"
      />
      <Summary />
      <Updated />
      <Health />
      <Improved />
      <Fixed />
    </Main>
  );
}
