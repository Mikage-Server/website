import {
  Headline2,
  Headline3WithIndex,
} from '../../../components/Headline';

export default function SmallChanges() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="小さな変更・調整"
        id="small-changes"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="ハード資源でSiyoEditを使用できないように変更。"
            index={1}
          />

          <div>建築してる場合じゃないよ！</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="ハード資源と資源でファントムが湧くよう変更。"
            index={2}
          />

          <div>ただウザいだけの存在ではないのだ。</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="ハンター職の報酬を調整。"
            index={3}
          />

          <div>公平なプレイにご協力ください。</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="村人のキルでMikageEXPが増えないよう変更。"
            index={4}
          />

          <div>村人を殺さないで…</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="/flyalwaysの利便性を向上。"
            index={5}
          />

          <div>
            あなたにはずっとずっと飛んでいてほしい。
          </div>
        </div>
      </article>
    </section>
  );
}
