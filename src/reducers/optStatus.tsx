import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// cnd_cd : 지역 코드
// pan_ss : 공고 코드

interface OptStatus {
    cnd_cd: number;
    pan_ss: string;
};

const initialState: OptStatus = {
    cnd_cd: 11,
    pan_ss: "공고중"
};

const optStatusSlice = createSlice({
    name: 'optionsStatus',
    initialState,
    reducers: {
        changeCnd(state, action: PayloadAction<number>) {

        },
        changePan(state, action: PayloadAction<string>) {

        }
    }
});


export const { changeCnd, changePan } = optStatusSlice.actions;
export default optStatusSlice;
