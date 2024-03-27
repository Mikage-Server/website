import Link from 'next/link';
import { Headline2 } from '../../components/headline';
import { Underline1 } from '../../components/underline';

export default function WhatToDo() {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2 label="遊び方ガイド" id="how-to-play" />

      <article className="px-6 md:px-12">
        <div className="p-5 my-8 w-full md:w-2/3 border-2 border-gray-300 rounded-xl">
          <p>Q. 参加したけど何すればいいの？</p>
          <p>
            {'A. '}
            <Underline1>
              あなたがシングルプレイで遊んでいるようなサバイバルをしましょう！
            </Underline1>
          </p>
        </div>

        <p>
          御景サーバーは、
          <Underline1>
            まるでクリエイティブなサバイバルを行える場
          </Underline1>
          を提供しています。
        </p>
        <p>
          特殊要素を活用することによって、普段のサバイバルの「こうなったらいいな」が叶うようなプレイができるでしょう。
        </p>

        <div className="mt-10 w-full flex flex-row justify-center">
          <Link
            href="/guide"
            className="px-5 md:px-10 py-5 text-white text-xl font-medium tracking-wider bg-blue-900 rounded-full shadow-lg"
          >
            遊び方の一例を見てみる！
          </Link>
        </div>
      </article>
    </section>
  );
}
