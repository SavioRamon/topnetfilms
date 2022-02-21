import { createContext, useEffect, useState } from "react";
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
        setDarkThemeActived(!darkThemeActived);
    };

    useEffect(()=>{
        if(darkThemeActived) {
            setTheme(darkTheme);
        }
        else {
            setTheme(lightTheme);
        };
    }, [darkThemeActived]);
    
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
