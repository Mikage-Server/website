import { Headline2 } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Summary = () => {
  return (
    <section>
      <Headline2
        label="概要"
        id="summary"
      />

      <article className="px-6 md:px-12">
        <p>
          御景の新しい季節がやってきました！
          ロビーが新しくなり、生活を楽しくする新要素が多数追加されました。
        </p>
      </article>
    </section>
  );
};

export default Summary;
