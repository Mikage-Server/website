import Link from 'next/link';
import {
  Headline2,
  Headline3WithIndex,
} from '../../../components/headline';
import { Underline1 } from '../../../components/underline';

export default function Updated() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="大きな変更内容" id="updated" />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="こんにちは1.20"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>
              バージョン1.20がリリースされてから2か月、ようやく御景サーバーで
              <Underline1>
                1.20の要素を体験できるようになりましたよ！
              </Underline1>
            </li>
            <li className="mt-3">
              今までは1.18の環境だったので、カエルや桜を見ることができませんでした。さあ、思う存分に1.20の世界に飛びこもう！
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="皆さんも領域保護機能を使えるように"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>
              荒らしが来るかもしれないから、御景に家を建てるのが怖い？そんな心配はさよならしましょう。
            </li>
            <li className="mt-3">
              御景に
              <Underline1>簡単に保護できて</Underline1>
              、なおかつ
              <Underline1>
                建造物によって最適な設定ができる
              </Underline1>
              保護システムがやってきました。
            </li>
            <li className="mt-3">
              これで安心して建築を楽しめますね！
            </li>
            <li className="mt-3">
              <Link
                className="text-yellow-700 font-bold"
                href="/wiki/領域を保護する方法"
              >
                保護の方法はコチラ
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="額縁・防具立てもロックできるように"
            index={3}
          />

          <ul className="pl-5 list-disc">
            <li>
              額縁や防具立てに装備を飾りたいけど、他のプレイヤーに取られてしまわないか心配だ！って思いたくないですよね。
            </li>
            <li className="mt-3">
              でも御景なら大丈夫！
              <Underline1>
                設置するだけで自動的にロック
              </Underline1>
              が掛かって、他のプレイヤーに取られることはありません。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="カンフーロッドの仕様変更"
            index={4}
          />

          <ul className="pl-5 list-disc">
            <li>
              我がサーバーのホコリのカンフーロッドは...少しその力を封じられるようです...
            </li>
            <li className="mt-3">
              推進力がほんの少し減少。
            </li>
            <li className="mt-3">
              使用するたびに生命力を消費。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="生命力バーの表示切り替えコマンドを変更"
            index={5}
          />

          <ul className="pl-5 list-disc">
            <li>
              表示は <Underline1>/setup</Underline1>{' '}
              非表示は <Underline1>/hide</Underline1>{' '}
              。簡単だね。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="ランダムネーミング機能を停止"
            index={6}
          />

          <ul className="pl-5 list-disc">
            <li>
              以前までは特性付きのアイテムには自動で命名がされていたけど、それは大人の事情により停止したよ...
            </li>
            <li className="mt-3">
              一時的に、特性の付いたアイテムは「ふしぎなツール」と命名されます。
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
