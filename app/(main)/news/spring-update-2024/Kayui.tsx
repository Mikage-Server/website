import {
  Headline2,
  Headline3WithIndex,
} from '../../../components/Headline';

export default function Kayui() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="かゆいところに手が届く変更"
        id="kayui"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="ショップの税金を廃止。"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>え！？税金なんてあったの！？</li>
            <li className="mt-3">
              はい、8280万5591㍆97㌸貯まっていました...
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="シュルカーの使い勝手を向上。"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>インベントリからシュルカーを開けるよ。</li>
            <li className="mt-3">
              シュルカーボックスごとクラフトができるよ。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="通常エンチャ台における特性の出現を /toggles から行えるように。"
            index={3}
          />

          <div>mekameronさん、リクエストサンキュー！</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="SiyoEditにヘルプを表示するように。"
            index={4}
          />

          <div>とっつきやすい！</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="死亡報告書を生成しないよう変更。"
            index={5}
          />

          <div>
            あの厄介な謎本とおさらば。逆に寂しい...？
          </div>
        </div>
      </article>
    </section>
  );
}
