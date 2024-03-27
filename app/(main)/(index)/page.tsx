import Main from '../Main';
import CrossPlay from './CrossPlay';
import Intro from './Intro';
import LetsJoin from './LetsJoin';
import ScrollDownAnimation from './ScrollDownAnimation';
import Slide from './Slide';
import Version from './Version';
import Welcome from './Welcome';
import WhatsNew from './WhatsNew';

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
