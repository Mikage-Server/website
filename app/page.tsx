import Main from './main';
import CrossPlay from './home/crossPlay';
import Intro from './home/intro';
import LetsJoin from './home/letsJoin';
import Slide from './home/slide';
import Version from './home/version';
import Welcome from './home/welcome';
import WhatsNew from './home/whatsNew';

const Home = () => {
  return (
    <Main>
      <Slide />
      <Welcome />
      <Intro />
      <WhatsNew />
      <div className="mt-20 w-full md:grid md:grid-cols-12 md:gap-6">
        <CrossPlay />
        <Version />
      </div>
      <LetsJoin />
    </Main>
  );
};

export default Home;
