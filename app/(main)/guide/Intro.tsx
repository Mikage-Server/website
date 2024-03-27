import { Headline1 } from '../../components/Headline';
import Builder from './Builder';
import Miner from './Miner';

export default function Intro() {
  return (
    <section>
      <Headline1 label="御景サーバーの遊び方" id="intro" />

      <article className="px-6 md:px-12">
        御景特有の遊び方をご紹介します。
      </article>

      <Miner />
      <Builder />
    </section>
  );
}
