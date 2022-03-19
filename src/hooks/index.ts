import { useContext } from "react";

import { AuthContext } from "../context/authentication";
import { MovieListContext } from "../context/movieList";
import { ThemeContext } from "../context/themeContext";


export const useMovieList = () => useContext(MovieListContext);

export const useTheme = () => useContext(ThemeContext);

export const useAuthentication = () => useContext(AuthContext);
