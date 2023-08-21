import Link from 'next/link';
import { Headline2, Headline3WithIndex } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Health = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="定期的な健康維持活動"
        id="health"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="サーバー全データのバックアップ"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>
              ワールドから設定から何から何までバックアップしておきました。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="ノーマル資源、ハード資源を新スポーンに"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>
              せっかく1.20にアップデートしたけど、スポーン付近は1.18のままだって？そんなことはありません！
            </li>
            <li className="mt-3">
              <Underline1>ノーマル資源、ハード資源の2つが、桜が満開の新スポーンになりました。</Underline1>すぐに1.20の世界にアクセスできます。
            </li>
            <li className="mt-3">
              前のスポーンにも行きたいって？大丈夫。ロビーに設置してあるポータルの横に、前のスポーン行きのポータルを設置しました！
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Health;
