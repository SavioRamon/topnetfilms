import { AuthProvider } from "./authentication";
import { ThemeContextProvider } from "./themeContext";


type RootContextProps = {
    children: JSX.Element;
}

const RootContext = ({ children }: RootContextProps) => {
    return (
        <ThemeContextProvider>
            <AuthProvider>
                    { children }
            </AuthProvider>
        </ThemeContextProvider>
    );
};

export default RootContext;