import { Headline2 } from '../../../components/headline';

const Summary = () => {
  return (
    <section>
      <Headline2
        label="概要"
        id="summary"
      />

      <article className="px-6 md:px-12">
        <p>
          夏だ！海だ！1.20アップデートだ！
        </p>
        <p>
          1.19と1.20の要素が見られるようになったのに加え、皆さんも領域を保護できるようになりましたよ。
        </p>
        <p>
          チート検出システムの精度も向上しちゃったり、ラグも軽減できちゃいました。
        </p>
      </article>
    </section>
  );
};

export default Summary;
