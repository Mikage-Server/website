import { Headline2 } from '../../components/headline';
import { Underline1 } from '../../components/underline';

export default function WhenTrouble() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="困ったときは" id="when-trouble" />

      <article className="px-6 md:px-12">
        <div className="my-8 w-full flex flex-col md:flex-row gap-10">
          <div className="p-4 mb-10 md:mb-0 w-full border-2 border-gray-300 rounded-xl">
            <h3 className="mb-2 text-xl text-center font-medium tracking-wider">
              生活に苦しんでいる場合
            </h3>

            <div className="w-full h-2 bg-blue-900 rounded-full" />

            <div className="mt-5 px-3">
              <p>
                <Underline1>
                  苦しんでいる内容をチャットで言ってみましょう！
                </Underline1>
              </p>

              <p className="my-3 font-medium text-gray-500">
                「資金が底をつきました」
                「マグマダイブして無一文になってしまった」
                「匠に家を爆破された」
                「何すればいいかわからない」 など
              </p>

              <p>
                サーバーにいる他のプレイヤーが助けてくれるでしょう。
              </p>
              <p>
                また、Discordサーバーからチャット履歴を見れるので、優しいプレイヤーがログインして助けに来るかもしれません。
              </p>
            </div>
          </div>

          <div className="p-4 mb-10 md:mb-0 w-full border-2 border-gray-300 rounded-xl">
            <h3 className="mb-2 text-xl text-center font-medium tracking-wider">
              荒らされた場合
            </h3>

            <div className="w-full h-2 bg-blue-900 rounded-full" />

            <div className="mt-5 px-3">
              <p>
                <Underline1>
                  /report
                  コマンドを実行し、詳しく状況を教えてください。
                </Underline1>
              </p>

              <p>運営が通報内容を確認次第、対応します。</p>
              <p>
                運営が対応するまで、
                <Underline1>
                  自分で復旧しないでください。
                </Underline1>
              </p>
            </div>
          </div>

          <div className="p-4 mb-10 md:mb-0 w-full border-2 border-gray-300 rounded-xl">
            <h3 className="mb-2 text-xl text-center font-medium tracking-wider">
              不具合を発見した場合
            </h3>

            <div className="w-full h-2 bg-blue-900 rounded-full" />

            <div className="mt-5 px-3">
              <p>
                ご不便おかけして申し訳ございません。
                <Underline1>
                  /report
                  コマンドを実行し、詳しく内容を教えてください。
                </Underline1>
              </p>

              <p>運営が通報内容を確認次第、対応します。</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
