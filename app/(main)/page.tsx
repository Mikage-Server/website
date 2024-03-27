import Main from './Main';
import CrossPlay from './home/CrossPlay';
import Intro from './home/Intro';
import LetsJoin from './home/LetsJoin';
import ScrollDownAnimation from './home/ScrollDownAnimation';
import Slide from './home/Slide';
import Version from './home/Version';
import Welcome from './home/Welcome';
import WhatsNew from './home/WhatsNew';

export const runtime = 'edge';

export default function Home() {
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
}
