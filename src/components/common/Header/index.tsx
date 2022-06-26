
import { Fragment } from "react";
import ConfigBox from "./components/ConfigMenu";
import Logo from "./components/Logo";
import { BackgroundHeaderSupport, HeaderContainer } from "./style";

export default function Header() {

    window.onscroll = () => {
        const scrollValue = window.scrollY;
        const header = document.querySelector(".header") as HTMLElement;

        if((scrollValue) > header.clientHeight * 2) {
            header.style.top = `-${header.clientHeight}px`;
        } else {
            header.style.top = "0";
        }
    };

    return (
        <Fragment>
            <BackgroundHeaderSupport />

            <HeaderContainer className="header">
                <Logo />
                <ConfigBox />
            </HeaderContainer>
        </Fragment>
    );
};
