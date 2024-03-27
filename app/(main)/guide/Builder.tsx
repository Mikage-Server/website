import {
  Headline2,
  Headline3WithIndex,
} from '../../components/Headline';
import { Underline1 } from '../../components/Underline';

export default function Builder() {
  return (
    <section className="mt-32">
      <Headline2
        label="建築したいクラフター"
        id="builder"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="ハローワークでBuilder職に着こう"
            index={1}
          />

          <p>
            ロビーの
            <Underline1>ハローワーク</Underline1>
            に行くと、職業に就くことができます。
          </p>
          <p>建築が好きな君は、Builderがオススメ！</p>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="資源ワールドに行ってツールを作ろう"
            index={2}
          />

          <p>
            御景サーバーでは、資源ワールドに行って資源を採取するのが基本です。
          </p>
          <p>
            まずは木のツールを作って、建築に必要なツールを揃えましょう。
          </p>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="さあ、資源採取だ！"
            index={3}
          />

          <p>
            木は根本を壊せば、一気に倒すことができます。
          </p>
          <p>
            もちろん公共の植林場は、倒した後に植えなおしましょう。
          </p>
          <p>
            バンバン資源を採取して、建築の材料を揃えましょう！
          </p>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="建築する場所を探そう"
            index={4}
          />

          <p>
            御景サーバーでは、メインワールド（ビルドワールド）で建築を行うのが基本です。
          </p>
          <p>
            どこで建築を行うのか迷った場合は、「西21区」に行って建築するといいでしょう。
          </p>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="建築！の前に飛ぼう"
            index={5}
          />

          <p>
            御景サーバーでは、
            <Underline1>/fly</Underline1>
            でクリエイティブのように空を飛ぶことができます。
          </p>
          <p>飛びながら創造性を広げてください。</p>
          <p>
            （飛行は1秒あたり2㍆必要です。資金が底を尽きた場合は、強制的に降ろされます。）
          </p>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="他の建造物も建てよう"
            index={6}
          />

          <p>
            たくさん建造物を建てることによって、街を作りましょう。
          </p>
          <p>
            マンションを建てて、新しく参加したプレイヤーを招待するのもいいでしょう。
          </p>
        </div>
      </article>
    </section>
  );
}
