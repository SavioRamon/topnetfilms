import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { FilmTypes } from "./filmList";

type AccountInfo = User;
export type FavoriteList = Array<FilmTypes>

type UserState = {
    accountInfo: AccountInfo | null;
    favoriteList: FavoriteList | null;
    loading: boolean;
}

export type AddOrRemoveFavoriteFilm = {
    userID: string;
    film: FilmTypes;
};

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


        // Get favorite list
        getFavoriteListReq: (state, action: PayloadAction<string>)=>{state.loading = true},
        getFavoriteListSuccess: (state, action: PayloadAction<FavoriteList>)=>({
            ...state,
            favoriteList: action.payload,
            loading: false
        }),
        getFavoriteListError: (state)=>({
            ...state,
            loading: false
        }),


        // Add favorite
        addFavoriteFilmReq: (state, action: PayloadAction<AddOrRemoveFavoriteFilm>) => ({
            ...state
        }),
        addFavoriteFilmSuccess: (state, action: PayloadAction<FilmTypes>) => {
            state.favoriteList?.push(action.payload)
        },


        // Remove favorite
        removeFavoriteFilmReq: (state, action: PayloadAction<AddOrRemoveFavoriteFilm>) => ({
            ...state
        }),
        removeFavoriteFilmSuccess: (state, action: PayloadAction<FilmTypes>) => {
            state.favoriteList?.filter((film) => film != action.payload)
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

    addFavoriteFilmReq,
    addFavoriteFilmSuccess,

    removeFavoriteFilmReq,
    removeFavoriteFilmSuccess,

} = userSlice.actions;

export default userSlice.reducer;