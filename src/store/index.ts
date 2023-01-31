import { configureStore } from '@reduxjs/toolkit'
import HomeSlice from './UserSlice'
import RegisterSlice from './RegisterSlice'

export const store = configureStore({
  reducer: {
    registration: RegisterSlice,
    user: HomeSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch