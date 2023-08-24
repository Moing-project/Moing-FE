import { configureStore } from "@reduxjs/toolkit";

import { Loginapi } from "../modules/LoginAPI";
import SignInRTK from "../modules/SignInRTK";
// import { Imageapi } from "../modules/ImageAPI";

const store = configureStore({
  reducer: {
    [Loginapi.reducerPath]: Loginapi.reducer,
    [SignInRTK.name]: SignInRTK.reducer,
    // [Imageapi.reducerPath]: Imageapi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    Loginapi.middleware,
  ],
  //   .concat(Imageapi.middleware),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
