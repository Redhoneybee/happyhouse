import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/root';

const store = configureStore({ reducer: reducers })


export type AppDispatch = typeof store.dispatch;
export default store;