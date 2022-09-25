import { Headline1 } from '../../components/headline';

const Intro = () => {
  return (
    <section className="mt-[calc(100vh+2rem)]">
      <Headline1
        label="ここは超能力の世界"
      />

      <p>
        御景サーバーのワールドは超能力が当たり前となっている。
      </p>
      <p>
        瞬間移動、重力操作... など経験したことがないサバイバルができる。
      </p>
      <p>
        それでは、あなたも超能力を手に入れて、この世界を楽しもう！
      </p>
    </section>
  );
};

export default Intro;
