import { Headline2, Headline3WithIndex } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Updated = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="大きな変更内容"
        id="updated"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="新ロビー移行（バイバイ、激狭ロビー！）"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>
              今回のアップデート、そしてこれからの御景サーバーの成長のため、ロビーを大幅に拡張しました。
            </li>
            <li className="mt-3">
              今までのロビーがベースとしてありますので、すぐ慣れることと思います！
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="首都をニューセントラルへ移行"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>
              現首都がチェストの過密等によって重くなっているため、首都を新しい地点に移動します。
            </li>
            <li className="mt-3">
              現首都はセントラル、新首都はニューセントラルとします。
            </li>
            <li className="mt-3">
              メニューや中央区ポータルからはニューセントラルにアクセスします。
            </li>
            <li className="mt-3">
              セントラルにアクセスする場合は
              <Underline1>
                /warp central
              </Underline1>
              を実行してください。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="百鬼夜行の全面廃止"
            index={3}
          />

          <ul className="pl-5 list-disc">
            <li>
              初見殺しとも言われる百鬼夜行は、ゲームバランスと新規生活向上のため廃止しました。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="超能力の漸進的な廃止"
            index={4}
          />

          <ul className="pl-5 list-disc">
            <li>
              初心者にとって分かりづらく、有用なWIKI解説やチュートリアルが整備されてこなかった超能力はゆっくりと廃止する運びになりました...
            </li>
            <li className="mt-3">
              超能力を使いこなしてくれていた御景勢の皆様には深くお詫び申し上げます。でも、きっと初心者が使いやすい形(特性やスキル、アイテム)として戻ってきます！
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="Jobsの追加"
            index={5}
          />

          <ul className="pl-5 list-disc">
            <li>
              <Underline1>
                /jobs browse
              </Underline1>
              で様々な職業に3つまで就くことが出来ます。各職業に指定されたアクションを行うと自動でお金が貯まります。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="圧縮丸石の追加"
            index={6}
          />

          <ul className="pl-5 list-disc">
            <li>
              新ロビーの商店街横にあるキッチンカーへ行ってみよう。きっとあなたの丸石を圧縮してくれましょう。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="剣の特性に「本塁打王」「重力変換」を追加"
            index={7}
          />

          <ul className="pl-5 list-disc">
            <li>
              ぜひゲットして使ってみてね★
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="弓に「重力変換」のみ追加"
            index={8}
          />

          <ul className="pl-5 list-disc">
            <li>
              ぜひゲットして使ってみてね★
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="特性「即時錬成」、全ての鉱石系に対応"
            index={9}
          />

          <ul className="pl-5 list-disc">
            <li>
              古代の瓦礫、ネザー金鉱石にも対応しましたよ。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="特性「瞬間燃焼」の追加（ツルハシ、シャベル）"
            index={10}
          />

          <ul className="pl-5 list-disc">
            <li>
              様々なものを採掘した瞬間にカマドします。砂はガラスに。粘土はレンガに。
            </li>
            <li className="mt-3">
              鉱石錬成もできますが、特性「幸せのツル」との互換性はありません。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="ハード資源ワールドの追加（5月中旬実装予定！）"
            index={11}
          />

          <ul className="pl-5 list-disc">
            <li>
              高レベルプレイヤー向け。鉱石の採集量や成長速度が上昇したワールドです。
            </li>
            <li className="mt-3">
              あなたの行く手を阻むモンスターが出現します。
            </li>
            <li className="mt-3">
              このワールドで死んだユーザーは、24時間後までこのワールドに再アクセスできません。要準備！
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Updated;
