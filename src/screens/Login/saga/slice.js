import { REHYDRATE } from "redux-persist";
import { SECURE_KEY } from "../../../constants/app";
import { createSlice } from "@reduxjs/toolkit";
import * as tokenService from "../../../epics-reducers/tokenServices";
import { userLoginRoutine, userLogoutRoutine } from "./routines";

const initialState = {
    token: "",
    _id: "",
    username: "",
    full_name: "",
    email: "",
    phone: "",
    birthday: "",
    sex: "",
    created_at: "",
    updated_at: "",
    vaitro: "",
    is_user: undefined,
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
                    tokenService.setToken(action.payload?.token);
            }
        },
        [userLoginRoutine.SUCCESS]: (state, action) => {
            const {
                token,
                _id,
                username,
                full_name,
                email,
                phone,
                birthday,
                sex,
                created_at,
                updated_at,
                vaitro,
            } = action.payload;

            if (action.payload) {
                state.token = token;
                state._id = _id;
                state.username = username;
                state.full_name = full_name;
                state.email = email;
                state.phone = phone;
                state.birthday = birthday;
                state.sex = sex;
                state.created_at = created_at;
                state.updated_at = updated_at;
                state.vaitro = vaitro;
            }
        },
        [userLogoutRoutine.SUCCESS]: (state, action) => {
            state.token = "";
            state._id = "";
            state.username = "";
            state.full_name = "";
            state.email = "";
            state.phone = "";
            state.birthday = "";
            state.sex = "";
            state.created_at = "";
            state.updated_at = "";
            state.vaitro = "";
            tokenService.clearToken();
        },
    },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
