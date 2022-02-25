import { useContext } from "react";
import { movieListContext } from "../context/movieList";

export function useMovieList() {
    const context = useContext(movieListContext);
    return context;
};
