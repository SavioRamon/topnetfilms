import { createContext, useState } from "react";

type MovieData = {
    
};

type MovieListTypes = {
    movieData: MovieData;
    load: boolean;
    getMovieDataFromAPI: () => void;
};

type PropsTypes = {
    children: JSX.Element;
};


export const movieListContext = createContext({} as MovieListTypes);


export function MovieListProvider({children}: PropsTypes) {

    const [movieData, setMovieData] = useState<MovieData>({});
    const [load, setLoad] = useState(false);

    function getMovieDataFromAPI() {
        setLoad(true);

    };
    
    return (
        <movieListContext.Provider value={{
            movieData,
            load,
            getMovieDataFromAPI
        }}>
            {children}
        </movieListContext.Provider>
    );
};
