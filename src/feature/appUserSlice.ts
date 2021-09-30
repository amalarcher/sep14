import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppUsersState {
  value: string[];
}

const initialState: AppUsersState = {
  value: [],
};

export const appUsersSlice = createSlice({
  name: "appUsers",
  initialState,
  reducers: {
    addAppUser: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeAppUser: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addAppUser, removeAppUser } = appUsersSlice.actions;

export default appUsersSlice.reducer;
