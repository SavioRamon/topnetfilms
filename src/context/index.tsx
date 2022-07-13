import { ThemeContextProvider } from "./themeContext";


type RootContextProps = {
    children: JSX.Element;
}

const RootContext = ({ children }: RootContextProps) => {
    return (
        <ThemeContextProvider>
                    { children }
        </ThemeContextProvider>
    );
};

export default RootContext;