import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TagsState {
  value: string[];
}

const initialState: TagsState = {
  value: [],
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;
