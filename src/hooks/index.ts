import { useContext } from "react";

import { AuthContext } from "../context/authentication";
import { MovieListContext } from "../context/movieList";
import { ThemeContext } from "../context/themeContext";


export function useMovieList() {
    const context = useContext(MovieListContext);
    return context;
};


export function useTheme() {
    const context = useContext(ThemeContext);
    return context;
};


export function useAuthentication() {
    const context = useContext(AuthContext);
    return context;
};
