import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './userSlice';
export const store = configureStore({
  reducer: {
    userData: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
