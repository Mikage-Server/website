import Main from '../components/main';
import CrossPlay from '../lib/home/crossPlay';
import Intro from '../lib/home/intro';
import LetsJoin from '../lib/home/letsJoin';
import Slide from '../lib/home/slide';
import Version from '../lib/home/version';
import Welcome from '../lib/home/welcome';
import WhatsNew from '../lib/home/whatsNew';

const title = 'ホーム';
const description = 'ホームです';

const Home = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      こんにちは！
      {/* <Slide />
      <Welcome />
      <Intro />
      <WhatsNew />
      <div className="mt-20 w-full grid grid-cols-12 gap-6">
        <CrossPlay />
        <Version />
      </div>
      <LetsJoin /> */}
    </Main>
  );
};

export default Home;
