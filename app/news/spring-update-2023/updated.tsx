import { Headline2 } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Updated = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="大きな変更内容"
        id="updated"
      />

      <article className="px-6 md:px-12">
        <p>
          変更内容
        </p>
      </article>
    </section>
  );
};

export default Updated;
