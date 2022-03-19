import { AuthProvider } from "./authentication";
import { MovieListProvider } from "./movieList";
import { ThemeContextProvider } from "./themeContext";


type RootContextProps = {
    children: JSX.Element;
}

const RootContext = ({ children }: RootContextProps) => {
    return (
        <ThemeContextProvider>
            <AuthProvider>
                <MovieListProvider>
                    { children }
                </MovieListProvider>
            </AuthProvider>
        </ThemeContextProvider>
    )
};

export default RootContext;