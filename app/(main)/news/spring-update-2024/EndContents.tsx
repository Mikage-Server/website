import { Underline1 } from '@/app/components/Underline';
import {
  Headline2,
  Headline3WithIndex,
} from '../../../components/Headline';

export default function EndContents() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="独自エンドコンテンツ関連"
        id="end-contents"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="常設予定イベント「魔石開放」をオープン！"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>ハード資源で開催中！</li>
            <li className="mt-3">
              ハード資源の新スポーンから
              <Underline1>半径1000M</Underline1>
              の間に
              <Underline1>「魔石開放盤」</Underline1>
              がランダムに出現。
            </li>
            <li className="mt-3">
              魔石を投入するほど
              <Underline1>
                高確率で特性を獲得できる！
              </Underline1>
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="特性付与時のランダムネームが復活！"
            index={2}
          />

          <div>バリエーションも増えたよ。</div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="「称号機能」が新登場！"
            index={3}
          />

          <ul className="pl-5 list-disc">
            <li>
              特性付与で獲得したランダムネームを称号としてゲットできます。
            </li>
            <li className="mt-3">
              <Underline1>/mytitle</Underline1>
              または
              <Underline1>メニュー（/menu）</Underline1>
              からアクセス可能。クリックして自分の称号を選ぼう！
            </li>
            <li className="mt-3">
              称号は現在
              <Underline1>/status</Underline1>
              とタブで確認可能。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="通常エンチャ台での特性出現率がガクリと低下。"
            index={4}
          />

          <div>ハード資源へ行こう！</div>
        </div>
      </article>
    </section>
  );
}
