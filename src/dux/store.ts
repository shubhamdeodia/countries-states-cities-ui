import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducer';

const store = configureStore({
    reducer: appReducer,
    devTools: true
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
