
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { call, put } from "redux-saga/effects";
import { authenticationAPI, database } from "../../services/firebase";
import { tmdb } from "../../services/tmdb";
import { FilmTypes } from "../ducks/filmList";
import {
    addFavoriteFilmSuccess,
    AddOrRemoveFavoriteFilm,
    authWithServiceError,
    authWithServiceSuccess,
    autoLoginError,
    autoLoginSuccess,
    disconnectError,
    disconnectSuccess,
    FavoriteList,
    FavoriteListIDs,
    getFavoriteListError,
    getFavoriteListIDsError,
    getFavoriteListIDsSuccess,
    getFavoriteListSuccess,
    removeFavoriteFilmSuccess
} from "../ducks/user";


export function* tryAuthWithService(action: {type: string; payload: string}) {
    const authenticationServices = {
        GOOGLE: () => {
            return authenticationAPI.googleAuth();
        },
    };

    const service = authenticationServices[action.payload as keyof typeof authenticationServices];
    const result: User | null = yield call(service);
    if(result) yield put(authWithServiceSuccess(result));
    else yield put(authWithServiceError);
}




export function* tryAutoLogin() {
    
    const currentUser: User | null = yield call(authenticationAPI.autoLogin);
    if(currentUser) yield put(autoLoginSuccess(currentUser))
    else yield put(autoLoginError());
}



export function* tryDisconnect() {
    const disconnected: boolean = yield call(authenticationAPI.disconnectUser);
    if(disconnected) yield put(disconnectSuccess());
    else yield put(disconnectError());
}


export function* getFavoriteList(action: PayloadAction<FavoriteListIDs>) {
    const favoriteList: FavoriteList = yield call(
        tmdb.multipleSearch, action.payload
    );

    if(favoriteList) yield put(getFavoriteListSuccess(favoriteList));
    else yield put(getFavoriteListError());
}

type FilmActionAddOrRemove = {
    type: string;
    payload: AddOrRemoveFavoriteFilm
}


export function* getFavoriteListIDs(action: PayloadAction<string>) {
    const favoriteListIDs: FavoriteListIDs | undefined = yield call(
        database.getFavoriteListIDs, action.payload
    );
    
    if(favoriteListIDs) yield put(getFavoriteListIDsSuccess(favoriteListIDs));
    else yield put(getFavoriteListIDsError());
}


export function* addFavoriteFilm(action: FilmActionAddOrRemove) {
    yield call(database.addFavoriteFilm, action.payload);

    yield put(addFavoriteFilmSuccess(action.payload.filmID));
}


export function* removeFavoriteFilm(action: FilmActionAddOrRemove) {
    yield call(database.removeFavoriteFilm, action.payload);

    yield put(removeFavoriteFilmSuccess(action.payload.filmID));
}