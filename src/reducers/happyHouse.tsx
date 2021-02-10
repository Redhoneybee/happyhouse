import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { HappyHouse } from "../types";

const initialState: HappyHouse[] = [];

const happyHouseSlice = createSlice({
    name: "happyhouse",
    initialState,
    reducers: {
        setHappyHouse(state, action: PayloadAction<Array<HappyHouse>>) {
            return action.payload;
        }
    }
});

export const { setHappyHouse } = happyHouseSlice.actions;
export default happyHouseSlice;
