import Main from '../../Main';
import Banner from '../Banner';
import ComingSoon from './ComingSoon';
import EndContents from './EndContents';
import Fixed from './Fixed';
import Kayui from './Kayui';
import Primary from './Primary';
import SmallChanges from './SmallChanges';
import Summary from './Summary';
import Tokuse from './Tokuse';

export default function Page() {
  return (
    <Main>
      <Banner
        label="3月大型アップデート V0.1"
        bannerImage="/news/spring-update-2024/thumbnail.webp"
        published="2024-03-28"
        author="umasiyo"
      />
      <Summary />
      <Primary />
      <EndContents />
      <Tokuse />
      <Kayui />
      <SmallChanges />
      <Fixed />
      <ComingSoon />
    </Main>
  );
}
