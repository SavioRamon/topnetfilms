import { call, put } from "redux-saga/effects";
import { tmdb } from "../../services/tmdb";
import {
    ApiResultListTypes,
    FilmTypes,
    genreListError,
    genreListSuccess,
    GenreListTypes,
    HomeList,
    homeListSuccess,
    searchByFilmGenreError,
    searchByFilmGenreSuccess,
    searchByFilmNameError,
    searchByFilmNameSuccess,
    singleFilmError,
    singleFilmSuccess
} from "../ducks/filmList";


export function* getHomeList() {
    const results: HomeList = yield call(tmdb.getHomeListData);
    yield put(homeListSuccess(results));
}

export function* getSingleFilm(data: {payload: string}) {
    const result: FilmTypes | undefined = yield call(tmdb.getSingleFilm, data.payload);
    
    if(result) yield put(singleFilmSuccess(result));
    else yield put(singleFilmError());
}

export function* getSearchByFilmName(data: {payload: string}) {
    const results: ApiResultListTypes | undefined = yield call(tmdb.getSearchResults, data.payload);
    
    if(results) yield put(searchByFilmNameSuccess(results));
    else yield put(searchByFilmNameError());
}

export function* getSearchByFilmGenre(data: {payload: string}) {
    const results: ApiResultListTypes | undefined = yield call(tmdb.getGenreResults, data.payload);

    if(results) yield put(searchByFilmGenreSuccess(results));
    else yield put(searchByFilmGenreError());
}

export function* getGenreList() {
    const results: GenreListTypes | undefined = yield call(tmdb.getGenreList);

    if(results) yield put(genreListSuccess(results));
    else yield put(genreListError());
}
