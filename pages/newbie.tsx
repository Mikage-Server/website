import type { NextPage } from 'next';
import Main from '../components/main';

const title = '初めてのプレイヤーへ';
const description = 'サーバーに参加しましょう！';

const Newbie: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      ここに初めてのプレイヤーへの説明を書きます
    </Main>
  );
};

export default Newbie;
