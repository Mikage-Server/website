import { Headline2 } from '../../../components/Headline';

export default function Summary() {
  return (
    <section>
      <Headline2 label="概要" id="summary" />

      <article className="px-6 md:px-12">
        <p>
          御景の新しい季節がやってきました！ロビー刷新、新要素も続々追加！そしていくつかのバランス調整、バグ修正諸々がありますよ。
        </p>
        <p>
          いくつか挑戦的な廃止・追加要素がありますので、遠慮せずフィードバックお願いしますね！
        </p>
      </article>
    </section>
  );
}
