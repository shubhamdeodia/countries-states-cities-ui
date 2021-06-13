import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducer';

const store = configureStore({
    reducer: appReducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
