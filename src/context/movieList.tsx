import { createContext, useState } from "react";
import { tmdbGetHomeListData } from "../services/tmdb";

type MovieData = {
    
};

type MovieListTypes = {
    homeList: MovieData;
    load: boolean;
    getHomeListDataFromApi: () => void;
};

type PropsTypes = {
    children: JSX.Element;
};


export const movieListContext = createContext({} as MovieListTypes);


export function MovieListProvider({children}: PropsTypes) {

    const [homeList, setHomeList] = useState<MovieData>({});
    const [load, setLoad] = useState(false);

    async function getHomeListDataFromApi() {
        const movieData = await tmdbGetHomeListData();
        
        if(movieData) {
            setHomeList(movieData);
        };

    };
    
    return (
        <movieListContext.Provider value={{
            homeList,
            load,
            getHomeListDataFromApi
        }}>
            {children}
        </movieListContext.Provider>
    );
};
