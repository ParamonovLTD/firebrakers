/* eslint-disable @typescript-eslint/indent */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
