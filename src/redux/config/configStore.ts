import { configureStore } from "@reduxjs/toolkit";

import { LoginAPI } from "../modules/LoginAPI";
import { ProjectAPI } from "../modules/ProjectAPI";
import SignInRTK from "../modules/SignInRTK";
// import { Imageapi } from "../modules/ImageAPI";

const store = configureStore({
  reducer: {
    [LoginAPI.reducerPath]: LoginAPI.reducer,
    [ProjectAPI.reducerPath]: ProjectAPI.reducer,
    [SignInRTK.name]: SignInRTK.reducer,
    // [Imageapi.reducerPath]: Imageapi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    LoginAPI.middleware,
    ProjectAPI.middleware,
  ],
  //   .concat(Imageapi.middleware),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
