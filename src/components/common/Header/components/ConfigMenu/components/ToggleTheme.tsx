import { useTheme } from "../../../../../../hooks";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import styled, { css } from "styled-components";
import ButtonContent from "./ButtonContent";


const ToggleThemeContainer = styled.div`
    padding: calc(.2rem + .1vw);
    width: calc(3.2rem + 2vw);
    background-color: rgba(100, 100, 100, 0.6);
    border-radius: calc(1rem + 1vw);
    font-size: 1em;
    cursor: pointer;
`;


type ToggleThemeIconProps = {
    darkThemeActived: boolean
}

const ToggleThemeIcon = styled.div`
    width: calc(1.6rem + 1vw);
    height: calc(1.6rem + 1vw);
    border-radius: 50%;
    font-size: calc(1.6rem + 1vw);

    ${(props: ToggleThemeIconProps) => {
        if(props.darkThemeActived) return css`
            float: right;
            color: #fff;
        `
        else return css`
            float: left;
            color: yellow;
        `
    }};
`;

export default function ToggleTheme() {

    const { darkThemeActived, toggleTheme } = useTheme();

    function changeTheme() {
        toggleTheme();
    }

    return (
        <ButtonContent action={changeTheme}>
            <ToggleThemeContainer>
                <ToggleThemeIcon darkThemeActived={darkThemeActived}>
                    
                    {darkThemeActived ? 
                        <BsFillMoonFill />
                    :
                        <BsFillSunFill />
                    }

                </ToggleThemeIcon>
                
            </ToggleThemeContainer>
        </ButtonContent>
        
    );
};
