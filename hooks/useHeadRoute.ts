import { useEffect, useState } from 'react';

// 冒頭部分のルートを取得
const useHeadRoute = () => {
  const [route, setRoute] = useState<string>('/');

  useEffect(() => {
    const head = window.location.pathname.split('/')[1];
    setRoute('/' + head);
  }, []);

  return route;
};

export default useHeadRoute;
