import { createContext, useState } from "react";
import { tmdbGetHomeListData, tmdbGetSearchResults, tmdbGetSingleFilm } from "../services/tmdb";


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

type ApiResultListTypes = {
    page: number;
    results: Array<FilmTypes>;
    total_pages: number;
    total_results: number;
} | null;

type HomeList = {
    title: string;
    data: ApiResultListTypes;
};


type MovieListTypes = {
    homeList: HomeList[];
    singleFilm: FilmTypes | undefined;
    searchResults: ApiResultListTypes | undefined;
    loading: boolean;
    getHomeListDataFromApi: () => void;
    getSingleFilm: (id: string) => void;
    getSearchResults: (query: string) => void;
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
        if(movieData) {
            setHomeList(movieData);
            setLoading(false);
        };

    };

    async function getSingleFilm(id: string) {
        setLoading(true);
        const film = await tmdbGetSingleFilm(id);
        setSingleFilm(film);
        setLoading(false);
    };

    async function getSearchResults(query: string) {
        const results: ApiResultListTypes = await tmdbGetSearchResults(query);
        setSearchResults(results);
    };
    
    return (
        <MovieListContext.Provider value={{
            homeList,
            singleFilm,
            searchResults,
            loading,
            getHomeListDataFromApi,
            getSingleFilm,
            getSearchResults
        }}>
            {children}
        </MovieListContext.Provider>
    );
};
