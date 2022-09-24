import type { NextPage } from 'next';
import { Headline1 } from '../components/headline';
import Main from '../components/main';
import Slide from '../lib/home/slide';
import Welcome from '../lib/home/welcome';

const title = 'ホーム';
const description = 'ホームです';

const Home: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <Slide />
      <Welcome />

      <section className="mt-[calc(100vh+2rem)]">
        <Headline1
          label="ここは超能力の世界"
        />
        御景サーバーのワールドは超能力が当たり前となっている。
      </section>
    </Main>
  );
};

export default Home;
