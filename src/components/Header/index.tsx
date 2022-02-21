import ToggleTheme from "./components/ToggleTheme";
import { HeaderContainer } from "./style";

export default function Header() {
    return (
        <HeaderContainer>
            <h1></h1>
            <ToggleTheme />
        </HeaderContainer>
    );
};
