import {
  AnyAction,
  Store,
  ThunkDispatch,
  configureStore,
} from '@reduxjs/toolkit';

import { RootReducers, AppState } from './rootReducer';

export type AppThunkDispatch = ThunkDispatch<AppState, any, AnyAction>;

export type AppStore = Omit<Store<AppState, AnyAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch;
};
const store: AppStore = configureStore({
  reducer: RootReducers,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
