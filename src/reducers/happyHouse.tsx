import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HappyHouse {
    pan_nm: string;            // 공고명
    pan_nt_st_dt: string;      // 공고일
    cnp_cd_nm: string;         // 지역
    upp_als_tp_nm: string;     // 공고 유형
    ais_tp_cd_nm: string;      // 공고 세부 유형
    pan_ss: string;            // 공고 상태
    dtl_url: string;           // 상세 url
}

const initialState: HappyHouse[] = [];

const happyHouseSlice = createSlice({
    name: "happyhouse",
    initialState,
    reducers: {
        getHappyHouse(state, action: PayloadAction<Array<HappyHouse>>) {

        }
    }
});

export const { getHappyHouse } = happyHouseSlice.actions;
export default happyHouseSlice;
