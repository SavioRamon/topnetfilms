import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { FilmTypes } from "./filmList";

type AccountInfo = User;
export type FavoriteListIDs = Array<number>
export type FavoriteList = Array<FilmTypes>

type UserState = {
    accountInfo: AccountInfo | null;
    favoriteListIDs: FavoriteListIDs | null,
    favoriteList: FavoriteList | null;
    loading: boolean;
}

export type AddOrRemoveFavoriteFilm = {
    userID: string;
    filmID: number;
};

const initialState: UserState = {
    accountInfo: null,
    favoriteListIDs: null,
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


        // Get favorite list
        getFavoriteListReq: (state, action: PayloadAction<FavoriteListIDs>)=>{
            state.loading = true
        },
        getFavoriteListSuccess: (state, action: PayloadAction<FavoriteList>)=>({
            ...state,
            favoriteList: action.payload,
            loading: false
        }),
        getFavoriteListError: (state)=>({
            ...state,
            loading: false
        }),


        // Get favorite list ids
        getFavoriteListIDsReq: (state, action: PayloadAction<string>)=>{state.loading = true},
        getFavoriteListIDsSuccess: (state, action: PayloadAction<FavoriteListIDs>)=>({
            ...state,
            favoriteListIDs: action.payload,
            loading: false
        }),
        getFavoriteListIDsError: (state)=>({
            ...state,
            loading: false
        }),

        // Add favorite film id
        addFavoriteFilmReq: (state, action: PayloadAction<AddOrRemoveFavoriteFilm>) => ({
            ...state
        }),
        addFavoriteFilmSuccess: (state, action: PayloadAction<number>) => {
            state.favoriteListIDs?.push(action.payload)
        },


        // Remove favorite film id
        removeFavoriteFilmReq: (state, action: PayloadAction<AddOrRemoveFavoriteFilm>) => ({
            ...state
        }),
        removeFavoriteFilmSuccess: (state, action: PayloadAction<number>) => {
            state.favoriteListIDs?.filter((film) => film != action.payload)
        }
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

    getFavoriteListReq,
    getFavoriteListSuccess,
    getFavoriteListError,

    getFavoriteListIDsReq,
    getFavoriteListIDsSuccess,
    getFavoriteListIDsError,

    addFavoriteFilmReq,
    addFavoriteFilmSuccess,

    removeFavoriteFilmReq,
    removeFavoriteFilmSuccess,

} = userSlice.actions;

export default userSlice.reducer;