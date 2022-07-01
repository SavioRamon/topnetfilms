import { all, takeLatest } from "redux-saga/effects";
import {
    genreListReq,
    homeListReq,
    searchByFilmGenreReq,
    searchByFilmNameReq,
    singleFilmReq
} from "../ducks/filmList";

import {
    getGenreList,
    getHomeList,
    getSearchByFilmGenre,
    getSearchByFilmName,
    getSingleFilm
} from "./filmList";

function* rootSaga() {
    yield all([
        takeLatest(homeListReq, getHomeList),
        takeLatest(singleFilmReq, getSingleFilm),
        takeLatest(searchByFilmNameReq, getSearchByFilmName),
        takeLatest(searchByFilmGenreReq, getSearchByFilmGenre),
        takeLatest(genreListReq, getGenreList)
    ]);
}

export default rootSaga;