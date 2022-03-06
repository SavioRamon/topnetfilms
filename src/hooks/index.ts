import { useContext } from "react";

import { AuthContext } from "../context/authentication";
import { movieListContext } from "../context/movieList";
import { ThemeContext } from "../context/themeContext";


export function useMovieList() {
    const context = useContext(movieListContext);
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
