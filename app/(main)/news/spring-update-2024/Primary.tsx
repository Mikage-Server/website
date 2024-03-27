import {
  Headline2,
  Headline3WithIndex,
} from '../../../components/Headline';

export default function Primary() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="メイン・生活関連" id="primary" />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="新しい投票ガチャが登場！"
            index={1}
          />

          <div>
            Japan Minecraft Servers か monocraft
            で投票すると、新しい投票ガチャのチケットが貰えます！
          </div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="新しい資源ワールドが登場！"
            index={2}
          />

          <div>
            これまでの資源ワールドとは違う、1～3か月でリセットされる資源ワールドが登場しました！
            資源の枯渇を気にする時代はもう終わりました。
          </div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="レベル10に到達すると自動でランクアップするように。"
            index={3}
          />

          <div>
            御景レベルが10に到達すると、MEMBERランクに昇格します！
            MEMBERランクからflyが解放されます！
          </div>
        </div>
      </article>
    </section>
  );
}
