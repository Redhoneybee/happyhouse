import { combineReducers } from '@reduxjs/toolkit';
import optStatusSlice from './optStatus';
import happyHouseSlice from './happyHouse';

const reducers = combineReducers({
    optStatus: optStatusSlice.reducer,
    happyHouse: happyHouseSlice.reducer
});

export type reducersType = ReturnType<typeof reducers>
export default reducers;
