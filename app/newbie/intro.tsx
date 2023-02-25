import { Headline1 } from '../../components/headline';

const Intro = () => {
  return (
    <section>
      <Headline1
        label="御景サーバーへようこそ！"
      />

      <article className="px-6 md:px-12">
        <p>
          超能力の世界、御景サーバーへようこそ！
        </p>
        <p>
          皆さんが楽しんで遊べるように、いくつかのルールがあります。
          よく確認したうえで参加しましょう！
        </p>
      </article>
    </section>
  );
};

export default Intro;