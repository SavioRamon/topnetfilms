import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";;

export function useTheme() {
    const context = useContext(ThemeContext);
    return context;
};