import { Headline2 } from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

const Fixed = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="修正された不具合"
        id="fixed"
      />

      <article className="px-6 md:px-12">
        <p>
          修正内容
        </p>
      </article>
    </section>
  );
};

export default Fixed;
