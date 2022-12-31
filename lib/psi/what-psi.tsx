import { Headline1 } from '../../components/headline';
import { Underline1 } from '../../components/underline';

const WhatPsi = () => {
  return (
    <section>
      <Headline1
        label="御景の世界の超能力"
        id="what-psi"
      />

      <article className="px-6 md:px-12">
        <blockquote className="mb-8 p-5 text-gray-700 bg-gray-200 rounded-lg">
          超能力は、通常の人間にはできないことを実現できる特殊な能力のこと。
          例えば「手を触れずに物を動かす」、「人の心を読み取る」「壁の向こう側・箱の中の物が何かを隔壁越しに言い当てる」などの能力がある。
          （<a href="https://ja.wikipedia.org/wiki/%E8%B6%85%E8%83%BD%E5%8A%9B">
            Wikipediaより引用
          </a>）
        </blockquote>

        <p>
          御景の世界では、現実空間で言われている超能力と同じように、
          通常のプレイヤーにはできない
          <Underline1>特殊な能力を使うことができます。</Underline1>
        </p>
        <p>
          様々な種類の超能力があり、それぞれの超能力にはそれぞれの特徴があります。
        </p>
        <p className="mt-5">
          また、<Underline1>初めて世界に参加したときから、何かの超能力が割り当てられ</Underline1>、
          プレイヤー<Underline1>それぞれに割り当てられる超能力は異なる</Underline1>ので、他のプレイヤーと協力しながらサバイバルをしましょう！
        </p>
      </article>
    </section>
  );
};

export default WhatPsi;
