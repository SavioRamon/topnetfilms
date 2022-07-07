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
        loginWithEmailAndPasswordReq: (state)=>{state.loading = true},
        loginWithServiceReq: (state)=>{state.loading = true},
        loginSuccess: (state, action: PayloadAction<AccountInfo>)=>({
            ...state,
            accountInfo: action.payload,
            loading: false
        }),

        loginError: (state)=>{state.loading = false},


        // register
        RegisterWithEmailAndPasswordReq: (state)=>{state.loading = true},
        RegisterWithServiceReq: (state)=>{state.loading = true},
        
        RegisterSuccess: (state, action: PayloadAction<AccountInfo>)=>({
            ...state,
            accountInfo: action.payload,
            loading: false
        }),

        RegisterError: (state)=>{state.loading = false},


        // auto login
        autoLoginReq: (state)=>{state.loading = true},
        autoLoginSuccess: (state, action: PayloadAction<AccountInfo>)=>({
            ...state,
            accountInfo: action.payload,
            loading: false
        }),

        autoLoginError: (state)=>{state.loading = false},


        // disconnect
        disconnectReq: (state)=>{state.loading = true},
        disconnectSuccess: (state, action: PayloadAction<AccountInfo>)=>({
            ...state,
            accountInfo: action.payload,
            loading: false
        }),

        disconnectError: (state)=>{state.loading = false},


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
    loginWithEmailAndPasswordReq,
    loginWithServiceReq,
    loginSuccess,
    loginError,

    RegisterWithEmailAndPasswordReq,
    RegisterWithServiceReq,
    RegisterSuccess,
    RegisterError,

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