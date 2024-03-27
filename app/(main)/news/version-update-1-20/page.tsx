import Main from '../../Main';
import Banner from '../Banner';
import Health from './Health';
import Improved from './Improved';
import Summary from './Summary';
import Updated from './Updated';
import UpdatedAboutTokuse from './UpdatedAboutTokuse';

export default function Page() {
  return (
    <Main>
      <Banner
        label="1.20アップデートが行われました！"
        bannerImage="/news/version-update-1-20/pr.webp"
        published="2023-08-22"
        author="takara2314"
      />
      <Summary />
      <Updated />
      <UpdatedAboutTokuse />
      <Health />
      <Improved />
    </Main>
  );
}
