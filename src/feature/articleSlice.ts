import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ArticlesState {
  value: string[];
}

const initialState: ArticlesState = {
  value: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeArticle: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addArticle, removeArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
