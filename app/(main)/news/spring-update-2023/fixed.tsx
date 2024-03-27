import Link from 'next/link';
import { Headline2, Headline3WithIndex } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Fixed = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="修正された不具合"
        id="fixed"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="SiyoEditの座標変更グリッチ"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>
              設置開始後に新たな地点を指定することでブロック制限を無視するグリッチを修正。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="SiyoEditの増殖グリッチ"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>
              増殖できるグリッチを修正。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="NPCのクールダウンバグ"
            index={3}
          />

          <ul className="pl-5 list-disc">
            <li>
              「ちょっと話しかけすぎかもしれない...」のヤツ。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="特性「とくだいハンマー」の仕様変更"
            index={4}
          />

          <ul className="pl-5 list-disc">
            <li>
              以下に該当するブロックは破壊できないよう仕様変更しました。
              <ul className="mt-2 pl-10 list-disc">
                <li>
                  WGまたはLWCの保護がかかったブロック
                </li>
                <li>
                  中にアイテムが入っているブロック
                </li>
              </ul>
            </li>
            <li className="mt-3">
              耐久エンチャントが反映されるようになりました！
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Fixed;
