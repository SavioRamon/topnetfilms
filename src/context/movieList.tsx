import { createContext, useState } from "react";
import { tmdb } from "../services/tmdb";


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

export type GenreListData = {
    genres: Array<{
        id: string;
        name: string;
    }>
};


type MovieListTypes = {
    homeList: HomeList[];
    singleFilm: FilmTypes | undefined;
    searchResults: ApiResultListTypes | undefined;
    loading: boolean;
    genreList: GenreListData | undefined;
    getHomeListDataFromApi: () => void;
    getSingleFilm: (id: string) => void;
    getSearchResults: (query: string) => void;
    getGenreResults: (query: string) => void;
    getGenreList: () => void;
};

type PropsTypes = {
    children: JSX.Element;
};


export const MovieListContext = createContext({} as MovieListTypes);


export function MovieListProvider({children}: PropsTypes) {

    const [homeList, setHomeList] = useState<HomeList[]>([]);
    const [singleFilm, setSingleFilm] = useState<FilmTypes>();
    const [searchResults, setSearchResults] = useState<ApiResultListTypes>();
    const [genreList, setGenreList] = useState<GenreListData>();

    const [loading, setLoading] = useState(false);

    const getHomeListDataFromApi = async () => {
        setLoading(true);
        const movieData = await tmdb.getHomeListData()
            .finally(() => { setLoading(false) });
        movieData && setHomeList(movieData);
    }

    const getSingleFilm = async (id: string) => {
        setLoading(true);
        const film = await tmdb.getSingleFilm(id)
            .finally(() => { setLoading(false) });
        film && setSingleFilm(film);
    }

    const getSearchResults = async (query: string) => {
        setLoading(true);
        const results = await tmdb.getSearchResults(query)
            .finally(() => { setLoading(false) });
        results && setSearchResults(results);
    }

    const getGenreResults =  async (query:string) => {
        setLoading(true);
        const results = await tmdb.getGenreResults(query)
            .finally(() => { setLoading(false) });
        results && setSearchResults(results);
    }

    const getGenreList = async () => {
        setLoading(true);
        const results = await tmdb.getGenreList()
            .finally(() => { setLoading(false) });
        results && setGenreList(results);
    };
    
    return (
        <MovieListContext.Provider value={{
            homeList,
            singleFilm,
            searchResults,
            loading,
            genreList,
            getHomeListDataFromApi,
            getSingleFilm,
            getSearchResults,
            getGenreResults,
            getGenreList
        }}>
            {children}
        </MovieListContext.Provider>
    );
}
