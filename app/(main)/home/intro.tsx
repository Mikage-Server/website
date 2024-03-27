import { Headline1 } from '../../components/headline';
import { Underline1 } from '../../components/underline';

const Intro = () => {
  return (
    <section className="mt-20 md:mt-40">
      <Headline1
        label="御景サーバーのサバイバル"
      />

      <article className="px-6 md:px-12">
        <p>
          普段のサバイバルで「こうなったらいいな」と思うことがありますよね。
        </p>
        <p>
          例えば、
          <Underline1>
            建築は飛びながら行いたい
          </Underline1>
          とか
          <Underline1>
            ダイナミックなツールを使って採掘したい
          </Underline1>
          、
          <Underline1>
            いつでも好きな場所にテレポートしたい
          </Underline1>
          とか。
        </p>

        <p className="my-10">
          それ、御景の特殊機能を使えば、全て叶います。
        </p>

        <p>
          御景サーバーは、
          <Underline1>
            まるでクリエイティブなサバイバルを行える場
          </Underline1>
          を提供しています。
        </p>
      </article>
    </section>
  );
};

export default Intro;
