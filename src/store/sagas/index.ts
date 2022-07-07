import { all, takeLatest } from "redux-saga/effects";
import {
    genreListReq,
    homeListReq,
    searchByFilmGenreReq,
    searchByFilmNameReq,
    singleFilmReq
} from "../ducks/filmList";

import {
    loginWithEmailAndPasswordReq,
    loginWithServiceReq,
    RegisterWithEmailAndPasswordReq,
    RegisterWithServiceReq,
    autoLoginReq,
    disconnectReq,
    favoriteListReq
} from "../ducks/user";

import {
    getGenreList,
    getHomeList,
    getSearchByFilmGenre,
    getSearchByFilmName,
    getSingleFilm
} from "./filmList";

import {
    getFavoriteList,
    tryAutoLogin,
    tryDisconnect,
    tryLoginWithEmailAndPassword,
    tryLoginWithService,
    tryRegisterWithEmailAndPassword,
    tryRegisterWithService
} from "./user";

function* rootSaga() {
    yield all([
        takeLatest(homeListReq, getHomeList),
        takeLatest(singleFilmReq, getSingleFilm),
        takeLatest(searchByFilmNameReq, getSearchByFilmName),
        takeLatest(searchByFilmGenreReq, getSearchByFilmGenre),
        takeLatest(genreListReq, getGenreList),

        takeLatest(loginWithEmailAndPasswordReq, tryLoginWithEmailAndPassword),
        takeLatest(loginWithServiceReq, tryLoginWithService),
        takeLatest(RegisterWithEmailAndPasswordReq, tryRegisterWithEmailAndPassword),
        takeLatest(RegisterWithServiceReq, tryRegisterWithService),
        takeLatest(autoLoginReq, tryAutoLogin),
        takeLatest(disconnectReq, tryDisconnect),
        takeLatest(favoriteListReq, getFavoriteList)
    ]);
}

export default rootSaga;