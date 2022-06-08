import { createContext, useState } from "react";
import { tmdbGetHomeListData } from "../services/tmdb";

type HomeList = {
    title: string;
    data: {
        results: [
            {
                title: string;
                release_date: string;
                poster_path: string;
            }
        ]
    }
};

type MovieListTypes = {
    homeList: HomeList[];
    loading: boolean;
    getHomeListDataFromApi: () => void;
};

type PropsTypes = {
    children: JSX.Element;
};


export const MovieListContext = createContext({} as MovieListTypes);


export function MovieListProvider({children}: PropsTypes) {

    const [homeList, setHomeList] = useState<HomeList[]>([]);
    const [loading, setLoading] = useState(false);

    async function getHomeListDataFromApi() {
        const movieData = await tmdbGetHomeListData();
        
        if(movieData) {
            setHomeList(movieData);
        };

    };
    
    return (
        <MovieListContext.Provider value={{
            homeList,
            loading,
            getHomeListDataFromApi
        }}>
            {children}
        </MovieListContext.Provider>
    );
};
