import { Underline1 } from '@/app/components/Underline';
import Link from 'next/link';
import { Headline2 } from '../../../components/Headline';

export default function Tokuse() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="特性の追加" id="tokuse" />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <ul className="pl-5 list-disc">
            <li>
              原木を切ると木材になる「薪割り職人」を追加。
            </li>
            <li className="mt-3">
              攻撃対象に衰弱を付与する「死神の鎌」を追加。
            </li>
            <li className="mt-3">
              ランダムで毒、足止め、弱体いずれかの矢を放つ「三種秘技」を追加。
            </li>
            <li className="mt-3">
              コンクリパウダーを破壊するとコンクリートとして回収できる「うるうる」を追加。
            </li>
            <li className="mt-3">
              大体なんでも燃やしちゃう「瞬間燃焼」を追加。
            </li>
            <li className="mt-3">
              ある程度明るければ勝手に満腹に。「光合成」を追加。
            </li>
            <li className="mt-3">
              装着間ずっと暗視がつく「夜行性」を追加。
            </li>
            <li className="mt-3">
              削られた分だけ追加ダメージが発生する「百姓一揆」を追加。
            </li>
            <li className="mt-3">
              相手にダメージを与えた分自分を回復する「生命与奪」を追加。
            </li>
          </ul>
        </div>

        <div className="mt-10">
          特性のさらに詳しい説明や一覧は
          <Underline1>
            <Link href="https://mikage.click/wiki/特性について">
              WIKI
            </Link>
          </Underline1>
          から！
        </div>
      </article>
    </section>
  );
}
