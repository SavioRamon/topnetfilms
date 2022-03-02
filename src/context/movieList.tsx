import { createContext, useState } from "react";
import { tmdbGetHomeListData } from "../services/tmdb";

type HomeList = {
    title: string;
    data: {
        results: [
            {
                title: string;
                release_date: string;
            }
        ]
    }
};

type MovieListTypes = {
    homeList: HomeList[];
    load: boolean;
    getHomeListDataFromApi: () => void;
};

type PropsTypes = {
    children: JSX.Element;
};


export const movieListContext = createContext({} as MovieListTypes);


export function MovieListProvider({children}: PropsTypes) {

    const [homeList, setHomeList] = useState<HomeList[]>([]);
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
