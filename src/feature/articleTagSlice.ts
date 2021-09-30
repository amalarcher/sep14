import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ArticleTagsState {
  value: string[];
}

const initialState: ArticleTagsState = {
  value: [],
};

export const articleTagsSlice = createSlice({
  name: "articleTags",
  initialState,
  reducers: {
    addArticleTag: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeArticleTag: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addArticleTag, removeArticleTag } = articleTagsSlice.actions;

export default articleTagsSlice.reducer;
