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
          概要
        </p>
      </article>
    </section>
  );
};

export default Summary;
