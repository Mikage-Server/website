import CrossPlay from './home/crossPlay';
import Intro from './home/intro';
import LetsJoin from './home/letsJoin';
import ScrollDownAnimation from './home/scrollDownAnimation';
import Slide from './home/slide';
import Version from './home/version';
import Welcome from './home/welcome';
import WhatsNew from './home/whatsNew';
import Main from './main';

const Home = () => {
  return (
    <Main>
      <div className="relative">
        <Slide />
        <ScrollDownAnimation />
      </div>

      <Welcome />
      <Intro />
      <WhatsNew />

      <div className="mt-32 md:mt-48 w-full md:grid md:grid-cols-12 md:gap-6">
        <CrossPlay />
        <Version />
      </div>

      <LetsJoin />
    </Main>
  );
};

export default Home;
