import { Headline2 } from '../../components/headline';

const Rule = () => {
  return (
    <section className="mt-20">
      <Headline2
        label="サーバールール"
        id="rule"
      />

      楽しく遊ぶために、以下の4つを守りましょう。

      <ol>
        <li>他のプレイヤーが嫌がることをしない</li>
        <li>ズルをしない</li>
        <li>わざと負荷をかけない</li>
        <li>他のサーバーの宣伝、勧誘をしない</li>
      </ol>
    </section>
  );
};

export default Rule;
