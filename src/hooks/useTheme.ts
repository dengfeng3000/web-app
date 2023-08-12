import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocalStorage } from 'react-use';
import { updateTheme } from '@/store/theme';
import { SiteState } from '@/store';

const useTheme = () => {
  const theme = useSelector<SiteState, SiteTheme>((state) => state.theme);
  const dispatch = useDispatch();
  const [storedTheme, setStoredTheme] = useLocalStorage('theme');

  useEffect(() => {
    if (storedTheme === 'light' || storedTheme === 'dark') {
      dispatch(updateTheme(storedTheme));
    }
  }, []);

  useEffect(() => {
    setStoredTheme(theme);
  }, [theme]);

  return theme;
};

export default useTheme;
