import { Headline2 } from '../../components/headline';

const rules = [
  {
    title: '他のプレイヤーが嫌がることをしない',
    details: [
      '建造物を無断で編集する',
      'アイテムを不正に盗み出す',
      'チャットスパムや過度な不適切な発言をする'
    ]
  },
  {
    title: 'ズルをしない',
    details: [
      'ハックの使用',
      'バグを利用する',
      'ワールドを不正にダウンロードする'
    ]
  },
  {
    title: 'わざと負荷をかけない',
    details: [
      '負荷が大きいトラップタワーを作る',
      '負荷が大きい自動装置を作る',
      '不必要にクロック回路を作る'
    ]
  },
  {
    title: '他のMinecraftサーバーの宣伝、勧誘をしない',
    details: [
      '宣伝、勧誘をする',
      'IPアドレスを発言する',
      'Discordで上記のような行為をする'
    ]
  }
];

interface RuleProps {
  title: string;
  details: string[];
  index: number;
}

const Rule = () => {
  return (
    <section className="mt-20">
      <Headline2
        label="サーバールール"
        id="rule"
      />

      楽しく遊ぶために、以下の4つを守りましょう。

      <ol className="my-5 w-full text-center grid grid-cols-4 gap-4">
        {rules.map((rule, index) => (
          <Item
            title={rule.title}
            details={rule.details}
            index={index}
            key={rule.title}
          />
        ))}
      </ol>

      その他、運営が不適切だと判断した行為を禁止します。
    </section>
  );
};

const Item = ({ title, details, index }: RuleProps) => {
  return (
    <li className="p-4 w-full bg-yellow-100 rounded-xl">
      <div className="text-4xl text-yellow-500 font-bold">
        {index + 1}
      </div>

      <h3 className="h-16 text-yellow-800 font-medium tracking-wider">
        {title}
      </h3>

      <div className="w-full h-2 bg-yellow-500 rounded-full" />

      <ul className="mt-5 pl-5 text-left list-disc">
        {details.map((detail) => (
          <li
            className="mb-2"
            key={detail}
          >
            {detail}
          </li>
        ))}
      </ul>
      <span className="text-gray-500">
        など
      </span>
    </li>
  );
};

export default Rule;
