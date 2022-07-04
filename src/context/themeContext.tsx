import { createContext, useLayoutEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme, ThemePropsTypes } from "../styles";
import colors, { ColorTypes } from "../styles/colors";

export type Theme = ThemePropsTypes & ColorTypes;

type ThemeContextType = {
    darkThemeActived: boolean;
    toggleTheme: () => void;
};



export const ThemeContext = createContext({} as ThemeContextType);
    
export const ThemeContextProvider = ({children}: {children: JSX.Element}) => {
    
    const [theme, setTheme] = useState<Theme>({
        ...darkTheme,
        ...colors
    });

    const [darkThemeActived, setDarkThemeActived] = useState<boolean>(true);

    
    function toggleTheme() {
        // Toggle the value of darkThemeActived and set it value in localStorage
        
        setDarkThemeActived(!darkThemeActived);
        localStorage.setItem("darkThemeActived", JSON.stringify(!darkThemeActived));
    }

    useLayoutEffect(()=>{
        // Load the respective theme after changing darkThemeActived

        if(darkThemeActived) setTheme(old => ({...old, ...darkTheme}));
        else setTheme(old => ({...old, ...lightTheme}));
    }, [darkThemeActived]);

    
    useLayoutEffect(()=>{
        // checks for a predefined theme in localStorage

        const isDarkThemeActived = localStorage.getItem("darkThemeActived");
        if(typeof isDarkThemeActived === "string") {
            const parseTheme: boolean = JSON.parse(isDarkThemeActived);
            setDarkThemeActived(parseTheme);
        }
    }, []);
    
    
    return (
        <ThemeContext.Provider value={{
            darkThemeActived,
            toggleTheme
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
