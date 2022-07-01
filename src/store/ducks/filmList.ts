import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type FilmTypes = {
    id: number;
    title: string;
    tagline: string;
    overview: string;
    status: string;
    release_date: string;
    poster_path: string;
    adult: boolean;
    genres: Array<{
        id: number;
        name: string;
    }>;
    vote_average: number;
    video: boolean
};

export type ApiResultListTypes = {
    page: number;
    results: Array<FilmTypes>;
    total_pages: number;
    total_results: number;
};

export type HomeList = Array<{
    title: string;
    data: ApiResultListTypes | null;
}>;

export type GenreListTypes = {
    genres: Array<{
        id: string;
        name: string;
    }>
};


type State = {
    homeList: HomeList;
    singleFilm: FilmTypes | undefined;
    searchResults: ApiResultListTypes | undefined;
    loading: boolean;
    genreList: GenreListTypes | undefined;
};

const initialState: State = {
    homeList: [],
    singleFilm: undefined,
    searchResults: undefined,
    genreList: undefined,
    loading: false
};

const filmList = createSlice({
    name: "filmList",
    initialState,
    reducers: {
        // home actions
        homeListReq: (state) => {state.loading = true},
        homeListSuccess: (state, action: PayloadAction<HomeList>) => {
            return {
                ...state,
                homeList: action.payload,
                loading: false,
            }
        },
        homeListError: (state) => {
            return {
                ...state,
                loading: false,
            }
        },

        // Film actions
        singleFilmReq: (state, action: PayloadAction<string>) => {state.loading = true},
        singleFilmSuccess: (state, action: PayloadAction<FilmTypes>) => {
            return {
                ...state,
                singleFilm: action.payload,
                loading: false,
            }
        },
        singleFilmError: (state) => {
            return {
                ...state,
                loading: false,
            }
        },

        // search by name actions
        searchByFilmNameReq: (state, action: PayloadAction<string>) => {state.loading = true},
        searchByFilmNameSuccess: (state, action: PayloadAction<ApiResultListTypes>) => {
            return {
                ...state,
                searchResults: action.payload,
                loading: false,
            }
        },
        searchByFilmNameError: (state) => {
            return {
                ...state,
                loading: false,
            }
        },

        // search by genre actions
        searchByFilmGenreReq: (state, action: PayloadAction<string>) => {state.loading = true},
        searchByFilmGenreSuccess: (state, action: PayloadAction<ApiResultListTypes>) => {
            return {
                ...state,
                searchResults: action.payload,
                loading: false,
            }
        },
        searchByFilmGenreError: (state) => {
            return {
                ...state,
                loading: false,
            }
        },

        // genre list actions
        genreListReq: (state) => {state.loading = true},
        genreListSuccess: (state, action: PayloadAction<GenreListTypes>) => {
            return {
                ...state,
                genreList: action.payload,
                loading: false,
            }
        },
        genreListError: (state) => {
            return {
                ...state,
                loading: false,
            }
        },
    },
});


export const {
    homeListReq,
    homeListSuccess,
    homeListError,

    singleFilmReq,
    singleFilmSuccess,
    singleFilmError,

    searchByFilmNameReq,
    searchByFilmNameSuccess,
    searchByFilmNameError,

    searchByFilmGenreReq,
    searchByFilmGenreSuccess,
    searchByFilmGenreError,

    genreListReq,
    genreListSuccess,
    genreListError

} = filmList.actions;

export default filmList.reducer;