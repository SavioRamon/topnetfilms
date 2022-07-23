import { all, takeLatest } from "redux-saga/effects";
import {
    genreListReq,
    homeListReq,
    searchByFilmGenreReq,
    searchByFilmNameReq,
    singleFilmReq
} from "../ducks/filmList";

import {
    disconnectReq,
    getFavoriteListReq,
    autoLoginReq,
    authWithServiceReq,
    addFavoriteFilmReq,
    removeFavoriteFilmReq,
    getFavoriteListIDsReq
} from "../ducks/user";

import {
    getGenreList,
    getHomeList,
    getSearchByFilmGenre,
    getSearchByFilmName,
    getSingleFilm
} from "./filmList";

import {
    addFavoriteFilm,
    getFavoriteList,
    getFavoriteListIDs,
    removeFavoriteFilm,
    tryAuthWithService,
    tryAutoLogin,
    tryDisconnect,
} from "./user";

function* rootSaga() {
    yield all([
        takeLatest(homeListReq, getHomeList),
        takeLatest(singleFilmReq, getSingleFilm),
        takeLatest(searchByFilmNameReq, getSearchByFilmName),
        takeLatest(searchByFilmGenreReq, getSearchByFilmGenre),
        takeLatest(genreListReq, getGenreList),

        takeLatest(authWithServiceReq, tryAuthWithService),
        takeLatest(autoLoginReq, tryAutoLogin),
        takeLatest(disconnectReq, tryDisconnect),

        takeLatest(getFavoriteListReq, getFavoriteList),
        takeLatest(getFavoriteListIDsReq, getFavoriteListIDs),
        takeLatest(addFavoriteFilmReq, addFavoriteFilm),
        takeLatest(removeFavoriteFilmReq, removeFavoriteFilm)
    ]);
}

export default rootSaga;