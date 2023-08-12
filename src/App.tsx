import React, { useEffect } from 'react';
import Site from './site';

import useTheme from './hooks/useTheme';
import { toggleTheme } from './utils/theme';

function App() {
  const theme = useTheme();

  useEffect(() => {
    toggleTheme(theme);
  }, [theme]);

  return <Site />;
}

export default App;
