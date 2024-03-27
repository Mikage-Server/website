import Link from 'next/link';
import {
  Headline2,
  Headline3WithIndex,
} from '../../../components/Headline';
import { Underline1 } from '../../../components/Underline';

export default function Improved() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="改善/仕様変更" id="improved" />

      <article className="px-6 md:px-12">
        <div className="mt-10 md:mt-5">
          <Headline3WithIndex
            label="AFK（放置状態）の仕様変更"
            index={1}
          />

          <ul className="pl-5 list-disc">
            <li>
              コマンドやチャット実行のみ行っている場合でもAFK判定にならないよう変更。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="Liftの追加"
            index={2}
          />

          <ul className="pl-5 list-disc">
            <li>
              リアリティ重視なエレベータープラグインを追加しました。
            </li>
            <li className="mt-3">
              もちろん、今までのエメラルドブロックエレベーターも利用可能です。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="建築ワールドでもMOBが物を拾う"
            index={3}
          />

          <ul className="pl-5 list-disc">
            <li>
              よって、建築ワールドでも村人の繁殖が可能になりました。
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="サーバールールの改訂"
            index={4}
          />

          <ul className="pl-5 list-disc">
            <li>
              皆様の生活を公正にお守りするため、より正確なサーバールールに改訂しました。
            </li>
            <li className="mt-3">
              <Underline1>
                <Link href="https://mikage.click/wiki/サーバールール">
                  https://mikage.click/wiki/サーバールール
                </Link>
              </Underline1>
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="Flyの仕様変更"
            index={5}
          />

          <ul className="pl-5 list-disc">
            <li>
              ゲームバランス調整のため、プレイヤーレベルが10に達するまではFlyが使用できなくなりました。1秒2マルクに変更されました。(´・ω・｀)
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <Headline3WithIndex
            label="継続プレイボーナスの仕様変更"
            index={6}
          />

          <ul className="pl-5 list-disc">
            <li>
              プレイヤーバランスの保持のため、継続プレイボーナスに30000㍆の上限をかけました
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
