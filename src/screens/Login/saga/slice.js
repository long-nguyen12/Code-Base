import { REHYDRATE } from "redux-persist";
import { SECURE_KEY } from "../../../constants/app";
import { createSlice } from "@reduxjs/toolkit";
import * as tokenService from "../../../epics-reducers/tokenServices";
import { userLoginRoutine } from "./routines";

const initialState = {
    me: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clear: (state) => {
            state.me = null;
            tokenService.clearToken();
        },
    },
    extraReducers: {
        [REHYDRATE]: (state, action) => {
            if (action.key === SECURE_KEY) {
                tokenService.setToken(action.payload.me.token);
            }
        },
        [userLoginRoutine.SUCCESS]: (state, action) => {
            console.log(action.payload, "userLoginRoutine");
            state.me = action.payload;
        },
    },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
