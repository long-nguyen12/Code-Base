import { REHYDRATE } from "redux-persist";
import { SECURE_KEY } from "../../../constants/app";
import { createSlice } from "@reduxjs/toolkit";
import * as tokenService from "../../../epics-reducers/tokenServices";
import { userLoginRoutine, userLogoutRoutine } from "./routines";

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
                if (action.payload)
                    tokenService.setToken(action.payload.me.token);
            }
        },
        [userLoginRoutine.SUCCESS]: (state, action) => {
            state.me = action.payload;
        },
        [userLogoutRoutine.SUCCESS]: (state, action) => {
            state.me = null;
            tokenService.clearToken();
        },
    },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
