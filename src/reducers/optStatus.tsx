import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptStatus } from "../types";

const initialState: OptStatus = {
    cnp_cd: -1,
    pan_ss: ""
};

const optStatusSlice = createSlice({
    name: 'optionsStatus',
    initialState,
    reducers: {
        changeCnp(state, action: PayloadAction<number>) {
            state.cnp_cd = action.payload;
        },
        changePan(state, action: PayloadAction<string>) {
            state.pan_ss = action.payload;
        }
    }
});


export const { changeCnp, changePan } = optStatusSlice.actions;
export default optStatusSlice;
