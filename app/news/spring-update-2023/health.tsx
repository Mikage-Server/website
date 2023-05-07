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
            label="全資源ワールドのリセット"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>
              オーバー、ネザー、エンド全ての資源ワールドをリセットしました。芳醇な新天地！
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Health;
