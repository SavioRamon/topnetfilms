import { AuthProvider } from "./authentication";
import { MovieListProvider } from "./movieList";
import { ThemeProvider } from "./themeContext";


type RootContextProps = {
    children: JSX.Element;
}

const RootContext = ({ children }: RootContextProps) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <MovieListProvider>
                    { children }
                </MovieListProvider>
            </AuthProvider>
        </ThemeProvider>
    )
};

export default RootContext;