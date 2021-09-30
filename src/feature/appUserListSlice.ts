import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppUserList {
  id: string;
  name: string;
  ulist: string[];
}

interface AddToAppUserListPayload {
  ulist: string;
  id: string;
}

export interface AppUserListState {
  value: AppUserList[];
}

const initialState: AppUserListState = {
  value: [],
};

export const appUserListSlice = createSlice({
  name: "appUserList",
  initialState,
  reducers: {
    addAppUserList: (state, action: PayloadAction<AppUserList>) => {
      state.value.push(action.payload);
    },
    addToAppUserList: (
      state,
      action: PayloadAction<AddToAppUserListPayload>
    ) => {
      state.value.forEach((appUserList) => {
        if (appUserList.id === action.payload.id) {
            appUserList.ulist.push(action.payload.ulist);
        }
      });
    },
  },
});

export const { addAppUserList, addToAppUserList } = appUserListSlice.actions;

export default appUserListSlice.reducer;
