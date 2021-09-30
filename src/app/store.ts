import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../feature/reservationSlice";
import customerReducer from "../feature/customerSlice";
import appUsersReducer from "../feature/appUserSlice";
import articlesReducer from "../feature/articleSlice";
import articleTagsReducer from "../feature/articleTagSlice";
import commentTextsReducer from "../feature/commentTextSlice";
import tagsReducer from "../feature/tagSlice";
import appUserListReducer from "../feature/appUserListSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
    appUsers: appUsersReducer,
    articles: articlesReducer,
    articleTags: articleTagsReducer,
    commentTexts: commentTextsReducer,
    tags: tagsReducer,
    appUserLists: appUserListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
