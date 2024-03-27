import Main from '../../main';
import Banner from '../banner';
import Health from './health';
import Improved from './improved';
import Summary from './summary';
import Updated from './updated';
import UpdatedAboutTokuse from './updatedAboutTokuse';

const Page = () => {
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
};

export default Page;
