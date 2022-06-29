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
