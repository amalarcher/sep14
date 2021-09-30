import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommentTextsState {
  value: string[];
}

const initialState: CommentTextsState = {
  value: [],
};

export const commentTextsSlice = createSlice({
  name: "commentTexts",
  initialState,
  reducers: {
    addCommentText: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeCommentText: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addCommentText, removeCommentText } = commentTextsSlice.actions;

export default commentTextsSlice.reducer;
