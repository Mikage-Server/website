import { Headline2 } from '../../../components/Headline';

export default function Summary() {
  return (
    <section>
      <Headline2 label="概要" id="summary" />

      <article className="px-6 md:px-12">
        <p>
          長らくβ版として運営していた御景ですが、今回はついに正式にバージョン0.1としてリリースです！！
        </p>
        <p>
          まあ、ずっとβ版って言ってると後々ワケわからんくなるんでね...(^^;)
        </p>
      </article>
    </section>
  );
}
