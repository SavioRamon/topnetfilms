import ConfigBox from "./components/ConfigMenu";
import Logo from "./components/Logo";
import { HeaderContainer } from "./style";

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <ConfigBox />
        </HeaderContainer>
    );
};
