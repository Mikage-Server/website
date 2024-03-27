import {
  Headline2,
  Headline3WithIndex,
} from '../../../components/Headline';

export default function Fixed() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="バグ修正" id="fixed" />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="とくだいハンマーがハード資源での死亡後使用できないバグを修正。"
            index={1}
          />

          <div>ご迷惑おかけしました。</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="範囲指定スプーンを焼くグリッチを修正"
            index={2}
          />

          <div>ご迷惑おかけしました。</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="範囲指定スプーン鯖落ちバグ修正"
            index={3}
          />

          <div>kosakae256さん、報告ありがとう！</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="大昔に登場したアイテムの仕様改善"
            index={4}
          />

          <div>重ねて使用できるのが一番！</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="山本鍛冶屋のポータルを修正、武器実験場を再開放。"
            index={5}
          />

          <div>S_Shotaさん、報告ありがとう！</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="投票ガチャ（今までのもの）中にシュルカーボックスやGUIが開ける現象を修正"
            index={6}
          />

          <div>mekameronさん、報告ありがとう！</div>
        </div>
      </article>
    </section>
  );
}
