import ConfigBox from "./components/ConfigBox";
import ToggleTheme from "./components/ToggleTheme";
import { HeaderContainer } from "./style";

export default function Header() {
    return (
        <HeaderContainer>
            <ToggleTheme />
            <ConfigBox />
        </HeaderContainer>
    );
};
