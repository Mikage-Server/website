import { Headline2 } from '../../components/headline';

export default function CrossPlay() {
  return (
    <section className="col-span-7">
      <Headline2 label="クロスプレイ対応" id="whats-new" />

      <article className="px-6 md:pl-12 md:pr-0">
        <p>
          御景サーバーではJava版はもちろん、統合版（スマホ、Switchなど）のプレイヤーも
          一緒に参加することができる。
        </p>
        <p>家でも外でも御景の世界に参加しよう。</p>
      </article>
    </section>
  );
}
