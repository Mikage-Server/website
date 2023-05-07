import { Headline2 } from '../../components/headline';

const WhatToDo = () => {
  return (
    <section className="mt-32 md:mt-48">
      <Headline2
        label="遊び方ガイド"
        id="how-to-play"
      />

      <article className="px-6 md:px-12">
        遊び方ガイドを書く
      </article>
    </section>
  );
};

export default WhatToDo;
