import { Headline1 } from '../../components/headline';

const IntroGuide = () => {
  return (
    <section>
      <Headline1
        label="御景サーバーの遊び方"
        id="intro-guide"
      />

      <article className="px-6 md:px-12">
        御景特有の遊び方をご紹介します。
      </article>
    </section>
  );
};

export default IntroGuide;
