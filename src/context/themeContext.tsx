import { createContext, useLayoutEffect, useState } from "react";
import { darkTheme, lightTheme } from "../styles";

export type Theme = {
    backgroundColor: string,
    textColor: string;
}

type ThemeContextType = {
    theme: Theme
    darkThemeActived: boolean,
    toggleTheme: () => void;
}

type ThemeProviderProps = {
    children: JSX.Element
}


export const ThemeContext = createContext({} as ThemeContextType);
    

export function ThemeProvider({children}: ThemeProviderProps) {
    
    const [theme, setTheme] = useState<Theme>(darkTheme);
    const [darkThemeActived, setDarkThemeActived] = useState(true);

    
    function toggleTheme() {
        // Toggle the value of darkThemeActived and set it value in localStorage
        
        setDarkThemeActived(!darkThemeActived);
        localStorage.setItem("darkThemeActived", JSON.stringify(!darkThemeActived));
    };

    useLayoutEffect(()=>{
        // Load the respective theme after changing darkThemeActived

        if(darkThemeActived) setTheme(darkTheme);
        else setTheme(lightTheme);
    }, [darkThemeActived]);


    useLayoutEffect(()=>{
        // checks for a predefined theme in localStorage

        const isDarkThemeActived = localStorage.getItem("darkThemeActived");
        if(typeof isDarkThemeActived === "string") {
            const parseTheme: boolean = JSON.parse(isDarkThemeActived);
            setDarkThemeActived(parseTheme);
        };
    }, []);
    
    
    return (
        <ThemeContext.Provider value={{
            theme,
            darkThemeActived,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
