import Link from 'next/link';
import { Headline2, Headline3WithIndex } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Improved = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="改善/仕様変更"
        id="improved"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="新規の統合版プレイヤーの接続制限を撤廃"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>
              これまで通り、<Underline1>新規の統合版プレイヤー</Underline1>が御景の世界に接続できるようになりました。
            </li>
            <li className="mt-3">
              今後統合版のプレイ環境に問題があった場合、再度制限を行う可能性がありますのでご了承ください。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="チート検知システムの精度向上"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>
              <Underline1>特に統合版のチート検知システムの精度を向上</Underline1>し、確認している誤検知を修正しました。
            </li>
            <li className="mt-3">
              また<Underline1>チートブロック機能の仕組みを改良</Underline1>し、一度の誤検知でプレイを妨害されることがなくなりました。
            </li>
            <li className="mt-3">
              しかも、チーターはすぐに検知してキックしてくれる優れもの。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="サーバーメモリを強化"
            index={3}
          />

          <ul className="pl-5 list-disc">
            <li>
              サバイバルサーバーに、メモリを<Underline1>約2倍</Underline1>割り当てるようになりました。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="ラグを改善"
            index={4}
          />

          <ul className="pl-5 list-disc">
            <li>
              プレイデータの保管方法を改善した結果、<Underline1>ラグを軽減</Underline1>できました。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="生命力バーが時折表示されない不具合を修正"
            index={5}
          />

          <ul className="pl-5 list-disc">
            <li>
              生命力バーは大事だね。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="主要プラグインの日本語化"
            index={6}
          />

          <ul className="pl-5 list-disc">
            <li>
              保護機能やポータルなど、<Underline1>皆さんの目に触れる部分を中心に日本語化</Underline1>しました。
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Improved;
