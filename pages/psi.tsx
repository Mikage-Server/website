import type { NextPage } from 'next';
import Main from '../components/main';

const title = '超能力';
const description = '超能力を使って生活しましょう！';

const Psi: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      ここに超能力についての説明を書きます
    </Main>
  );
};

export default Psi;
