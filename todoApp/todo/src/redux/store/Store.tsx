import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/Todo";
import todosReducer from "../slices/Todos";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todos: todosReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
