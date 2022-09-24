import type { NextPage } from 'next';
import Main from '../components/main';

const title = 'ホーム';
const description = 'ホームです';

const Home: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      Hello world!

      <footer>
        <small className="text-lg">
          <a href="https://twitter.com/siojinja">
            © 2021 御景サーバー
          </a>
        </small>
      </footer>
    </Main>
  );
};

export default Home;
