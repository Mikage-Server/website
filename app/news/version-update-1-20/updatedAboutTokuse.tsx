import { Headline2, Headline3WithIndex } from '../../../components/headline';

const Updated = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="特性に関する変更"
        id="updatedAboutTokuse"
      />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="「重力変換」の生命力消費量を削減"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>
              これでサクサク相手をアップドラフト！
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Updated;
