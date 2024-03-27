import { Headline1 } from '../../components/Headline';
import { Underline1 } from '../../components/Underline';

export default function Summary() {
  return (
    <section>
      <Headline1
        label="御景の世界の特殊機能"
        id="what-specials"
      />

      <article className="px-6 md:px-12">
        <Underline1>
          まるでクリエイティブなサバイバル生活
        </Underline1>
        を実現するために、多数の特殊機能があります。
      </article>
    </section>
  );
}
