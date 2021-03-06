import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../../../assets/images/logos/logo.png";

const Content = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const LogoElement = styled.img`
    
    width: calc(5rem + 3.5vw);
    height: calc(2rem + 1.5vw);
    image-orientation: from-image;
`;


const Logo = (): JSX.Element => {

    return (
        <Content>
            <Link to="/">
                <LogoElement src={logo} alt="image of a blue mask written top net films under it" />
            </Link>
            </Content>
    );
};

export default Logo;