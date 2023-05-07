import { Headline2 } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Improved = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="改善/仕様変更"
        id="improved"
      />

      <article className="px-6 md:px-12">
        <p>
          変更内容
        </p>
      </article>
    </section>
  );
};

export default Improved;
