import { useContext } from "react";

import { AuthContext } from "../context/authentication";
import { ThemeContext } from "../context/themeContext";


export const useTheme = () => useContext(ThemeContext);

export const useAuthentication = () => useContext(AuthContext);
