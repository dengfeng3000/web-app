import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    updateTheme: (state, action) => {
      const nextState = action.payload;
      return nextState;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
