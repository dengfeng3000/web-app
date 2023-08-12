import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme';

export interface SiteState{
  theme: SiteTheme
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
