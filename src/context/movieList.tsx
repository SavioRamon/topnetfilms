import { createContext, useState } from "react";
import { tmdbGetHomeListData, tmdbGetSingleFilm } from "../services/tmdb";


type FilmTypes = {
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

type HomeList = {
    title: string;
    data: {
        results: Array<Pick<FilmTypes, "title" | "release_date" | "poster_path" | "id">>;
    }
};

type MovieListTypes = {
    homeList: HomeList[];
    singleFilm: FilmTypes | undefined;
    loading: boolean;
    getHomeListDataFromApi: () => void;
    getSingleFilm: (id: string) => void;
};

type PropsTypes = {
    children: JSX.Element;
};


export const MovieListContext = createContext({} as MovieListTypes);


export function MovieListProvider({children}: PropsTypes) {

    const [homeList, setHomeList] = useState<HomeList[]>([]);
    const [singleFilm, setSingleFilm] = useState<FilmTypes>();

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
    
    return (
        <MovieListContext.Provider value={{
            homeList,
            singleFilm,
            loading,
            getHomeListDataFromApi,
            getSingleFilm
        }}>
            {children}
        </MovieListContext.Provider>
    );
};
