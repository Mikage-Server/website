import type { NextPage } from 'next';
import Main from '../components/main';

const title = 'コマンド一覧';
const description = 'コマンドを活用して便利に生活しましょう！';

const Command: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      コマンド一覧を表示します
    </Main>
  );
};

export default Command;
