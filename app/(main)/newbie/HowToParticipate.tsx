import {
  Headline2,
  Headline3WithIndex,
} from '../../components/Headline';
import { Underline1 } from '../../components/Underline';

export default function HowToConnect() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="参加する方法"
        id="how-to-participate"
      />

      <article className="px-6 md:px-12">
        <div className="mt-5">
          <Headline3WithIndex
            label="サーバーに接続する"
            index={1}
            id="connect-to-server"
          />

          <p>
            Java版はもちろん、
            <Underline1>
              統合版(スマホ、Switchなど)のプレイヤーも
            </Underline1>
            一緒に参加することができます！
          </p>

          <p>
            IPアドレスや接続できるバージョンは以下の通りです。最新版がリリースされてから間もない場合は、接続できない場合があります。
          </p>

          <div className="p-5 my-8 w-full md:w-1/2 border-2 border-gray-300 rounded-xl">
            <div>
              <h2 className="my-1 text-gray-600 font-medium">
                IPアドレス
              </h2>
              <div className="py-1 w-full text-xl text-white text-center bg-blue-900 rounded-lg tracking-wider">
                {process.env.NEXT_PUBLIC_SERVER_ADDRESS}
              </div>
            </div>

            <div className="mt-5">
              <h2 className="my-1 text-gray-600 font-medium">
                バージョン
              </h2>
              <div className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <span className="mr-7 md:mr-3 px-2 py-1 font-bold text-yellow-800 bg-yellow-300 rounded-lg">
                    Java
                  </span>
                  1.20 - 最新版
                </div>
                <div className="mt-2 md:mt-0 w-full md:w-1/2">
                  <span className="mr-3 px-2 py-1 font-bold text-yellow-800 bg-yellow-300 rounded-lg">
                    統合版
                  </span>
                  最新版
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="my-1 text-gray-600 font-medium">
                ポート番号
              </h2>
              <div className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <span className="mr-7 md:mr-3 px-2 py-1 font-bold text-yellow-800 bg-yellow-300 rounded-lg">
                    Java
                  </span>
                  25155
                </div>
                <div className="mt-2 md:mt-0 w-full md:w-1/2">
                  <span className="mr-3 px-2 py-1 font-bold text-yellow-800 bg-yellow-300 rounded-lg">
                    統合版
                  </span>
                  19132（デフォルト）
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="チュートリアルを行う"
            index={2}
            id="tutorial"
          />

          <div className="w-full flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/3">
              <p>
                ①
                サーバーに初めて接続したプレイヤーは、次の場所にスポーンします。
              </p>

              <img
                src="/newbie/newbie-spawn.webp"
                alt="初期スポーン"
                className="mt-2 w-full rounded-xl overflow-hidden"
              />
            </div>

            <div className="w-full md:w-1/3">
              <p>
                ②
                それぞれのウーパールーパーを右クリックして、チュートリアルを開始します。
              </p>

              <img
                src="/newbie/tutorial.webp"
                alt="チュートリアル開始"
                className="w-full rounded-xl overflow-hidden"
              />
            </div>

            <div className="w-full md:w-1/3">
              <p>
                ③
                チュートリアルを最後まで行い、オオカミを右クリックして、チュートリアルを終了します。
              </p>

              <img
                src="/newbie/exit.webp"
                alt="チュートリアル終了"
                className="w-full rounded-xl overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="お初キットを貰う"
            index={3}
            id="newbie-kit"
          />

          <p>
            村人に手持ちの昆布を渡すと、お初キットと交換することができます。
          </p>
          <p>お初キットは3種類の中から選べます。</p>

          <img
            src="/newbie/newbie-kit.webp"
            alt="お初キット"
            className="mt-2 w-full md:w-1/2 rounded-xl overflow-hidden"
          />
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="ロビーに飛びこもう"
            index={4}
            id="jump-to-lobby"
          />

          <p>
            少し進んだ先に穴があり、飛び込むとロビーに飛びます。
          </p>
          <p>
            さあ、御景の世界で新しい生活を始めましょう！
          </p>

          <img
            src="/newbie/lets-newlife.webp"
            alt="ロビーに飛びこむ"
            className="mt-2 w-full md:w-1/2 rounded-xl overflow-hidden"
          />
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="サバイバルを楽しもう"
            index={5}
            id="lets-survival"
          />

          <p>ここは色々なワールドに行けるロビーです。</p>
          <p>
            まずは資源ワールドに行って、資源を集めましょう！
          </p>

          <img
            src="/newbie/lobby.webp"
            alt="ロビー"
            className="mt-2 w-full md:w-1/2 rounded-xl overflow-hidden"
          />
        </div>
      </article>
    </section>
  );
}
