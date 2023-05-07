import Main from '../../main';
import Banner from '../banner';
import Fixed from './fixed';
import Improved from './improved';
import Summary from './summary';
import Updated from './updated';

const Page = () => {
  return (
    <Main>
      <Banner
        label="春の大型アップデートが行われました！"
        bannerImage="/newbie/lobby.webp"
        published="2023-05-08"
      />
      <Summary />
      <Updated />
      <Improved />
      <Fixed />
    </Main>
  );
};

export default Page;
