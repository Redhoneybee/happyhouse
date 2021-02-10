import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// cnd_cd : 지역 코드
// pan_ss : 공고 코드

export interface OptStatus {
    cnp_cd: number;
    pan_ss: string;
};

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
