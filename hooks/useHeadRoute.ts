import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// 冒頭部分のルートを取得
const useHeadRoute = () => {
  const router = useRouter();

  const [route, setRoute] = useState<string>('/');

  useEffect(() => {
    const head = router.route.split('/')[1];
    setRoute('/' + head);
  }, [router.route]);

  return route;
};

export default useHeadRoute;
