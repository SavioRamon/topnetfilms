import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { FilmTypes } from "./filmList";

type AccountInfo = User;
type FavoriteList = Array<FilmTypes>

type UserState = {
    accountInfo: AccountInfo | null;
    favoriteList: FavoriteList | null;
    loading: boolean;
}

const initialState: UserState = {
    accountInfo: null,
    favoriteList: null,
    loading: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // login
        authWithServiceReq: (state, action: PayloadAction<string>)=>{state.loading = true},
        authWithServiceSuccess: (state, action: PayloadAction<AccountInfo>)=>({
            ...state,
            accountInfo: action.payload,
            loading: false
        }),

        authWithServiceError: (state)=>({
            ...state,
            accountInfo: null,
            loading: false
        }),


        // auto login
        autoLoginReq: (state)=>{state.loading = true},
        autoLoginSuccess: (state, action: PayloadAction<AccountInfo>)=>({
            ...state,
            accountInfo: action.payload,
            loading: false
        }),

        autoLoginError: (state)=>({
            ...state,
            accountInfo: null,
            loading: false
        }),


        // disconnect
        disconnectReq: (state)=>{state.loading = true},
        disconnectSuccess: (state)=>({
            ...state,
            accountInfo: null,
            loading: false
        }),

        disconnectError: (state)=>({
            ...state, loading: false
        }),


        // favorite list
        favoriteListReq: (state)=>{state.loading = true},
        favoriteListSuccess: (state, action: PayloadAction<FavoriteList>)=>({
            ...state,
            favoriteList: action.payload,
            loading: false
        }),

        favoriteListError: (state)=>{state.loading = false}
    }
})

export const {
    authWithServiceReq,
    authWithServiceSuccess,
    authWithServiceError,

    autoLoginReq,
    autoLoginSuccess,
    autoLoginError,

    disconnectReq,
    disconnectSuccess,
    disconnectError,

    favoriteListReq,
    favoriteListSuccess,
    favoriteListError,

} = userSlice.actions;

export default userSlice.reducer;