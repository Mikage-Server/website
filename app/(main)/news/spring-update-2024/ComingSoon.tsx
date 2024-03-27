import {
  Headline2,
} from '../../../components/Headline';

export default function ComingSoon() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="Coming Soon..." id="coming-soon" />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <ul className="pl-5 list-disc">
            <li>圧縮魔石</li>
            <li className="mt-3">御景実績/ミッション</li>
            <li className="mt-3">新しいメニュー画面</li>
            <li className="mt-3">強化ファントム</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
