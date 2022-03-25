import ConfigBox from "./components/ConfigMenu";
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
