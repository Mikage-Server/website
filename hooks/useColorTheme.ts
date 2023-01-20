import { useEffect } from 'react';

// ユーザーのカラーテーマの適応をサポートをするフック
const useColorTheme = () => {
  // ユーザーのカラーテーマを適応
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
};

export default useColorTheme;
