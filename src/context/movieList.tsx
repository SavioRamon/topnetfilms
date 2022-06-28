import { createContext, useState } from "react";
import {
    tmdbGetGenreResults,
    tmdbGetHomeListData,
    tmdbGetSearchResults,
    tmdbGetSingleFilm
} from "../services/tmdb";


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

export type HomeList = {
    title: string;
    data: ApiResultListTypes | null;
};


type MovieListTypes = {
    homeList: HomeList[];
    singleFilm: FilmTypes | undefined;
    searchResults: ApiResultListTypes | undefined;
    loading: boolean;
    getHomeListDataFromApi: () => void;
    getSingleFilm: (id: string) => void;
    getSearchResults: (query: string) => void;
    getGenreResults: (query: string) => void;
};

type PropsTypes = {
    children: JSX.Element;
};


export const MovieListContext = createContext({} as MovieListTypes);


export function MovieListProvider({children}: PropsTypes) {

    const [homeList, setHomeList] = useState<HomeList[]>([]);
    const [singleFilm, setSingleFilm] = useState<FilmTypes>();
    const [searchResults, setSearchResults] = useState<ApiResultListTypes>();

    const [loading, setLoading] = useState(false);

    async function getHomeListDataFromApi() {
        setLoading(true);
        const movieData = await tmdbGetHomeListData();
        movieData && setHomeList(movieData);
        setLoading(false);

    }

    async function getSingleFilm(id: string) {
        setLoading(true);
        const film = await tmdbGetSingleFilm(id);
        film && setSingleFilm(film);
        setLoading(false);
    }

    async function getSearchResults(query: string) {
        const results = await tmdbGetSearchResults(query);
        results && setSearchResults(results);
    }

    async function getGenreResults(query:string) {
        setLoading(true);
        const results = await tmdbGetGenreResults(query);
        results && setSearchResults(results);
        setLoading(false);
    }
    
    return (
        <MovieListContext.Provider value={{
            homeList,
            singleFilm,
            searchResults,
            loading,
            getHomeListDataFromApi,
            getSingleFilm,
            getSearchResults,
            getGenreResults
        }}>
            {children}
        </MovieListContext.Provider>
    );
}
