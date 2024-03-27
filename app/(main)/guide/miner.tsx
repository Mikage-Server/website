import Link from 'next/link';
import { Headline2, Headline3WithIndex } from '../../components/headline';
import { Underline1 } from '../../components/underline';

const Miner = () => {
  return (
    <section className="mt-32">
      <Headline2
        label="採掘好きなクラフター"
        id="miner"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="ハローワークでMiner職に着こう"
            index={1}
          />

          <p>
            ロビーの
            <Underline1>
              ハローワーク
            </Underline1>
            に行くと、職業に就くことができます。
          </p>
          <p>
            採掘が好きな君は、Minerがオススメ！
          </p>
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
            まずは木のツールを作って、採掘に必要なツールを揃えましょう。
          </p>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="さあ、採掘だ！"
            index={3}
          />

          <p>
            掘れば掘るほど、お金も溜まって、御景ランクも上がっていきます。
          </p>
          <p>
            どんどん掘って、御景の採掘王を目指しましょう！
          </p>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="運試しのエンチャント"
            index={4}
          />

          <p>
            御景サーバーでは、エンチャント時に低確率で「特性」が付きます。
          </p>
          <p>
            例えば、「とくだいハンマー」という特性は、一度に9ブロック同時に破壊することができ、
            ダイナミックな採掘が行えます。
          </p>
          <p>
            とくだいハンマーなしの採掘ライフには戻れません。（経験者は語る）
          </p>
        </div>
      </article>
    </section>
  );
};

export default Miner;
