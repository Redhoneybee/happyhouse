import { combineReducers } from '@reduxjs/toolkit';
import optStatusSlice from './optStatus';


const reducers = combineReducers({
    optStatus: optStatusSlice.reducer
});

export type reducersType = ReturnType<typeof reducers>
export default reducers;
