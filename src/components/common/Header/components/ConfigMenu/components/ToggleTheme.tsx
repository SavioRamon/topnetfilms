import { useTheme } from "../../../../../../hooks";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import styled, { css } from "styled-components";


const Content = styled.div`
    margin-right: .5em;
    display: flex;
    font-size: 1em;
`;


type ThemeButton = {
    actived: boolean;
}

const SunButton = styled.button`
    padding: .1em;
    margin-right: .3em;
    font-size: 1.3em;
    background-color: inherit;
    border: .1em solid transparent;
    display: flex;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    ${(props: ThemeButton)=>{
        if(props.actived) return css`
            border-color: ${({theme})=>theme.blue};
        `;
    }}
`;

const MoonButton = styled.button`
    padding: .1em;
    font-size: 1.3em;
    background-color: inherit;
    border: .1em solid transparent;
    display: flex;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    ${(props: ThemeButton)=>{
        if(props.actived) return css`
            border-color: ${({theme})=>theme.blue};
        `;
    }}
`;

export default function ToggleTheme() {

    const { darkThemeActived, setDarkTheme } = useTheme();

    function changeTheme(value: boolean) {
        setDarkTheme(value);
    }

    return (
        <Content>
            <SunButton onClick={()=>changeTheme(false)} actived={darkThemeActived? false : true}>
                <BsFillSunFill />
            </SunButton>

            <MoonButton onClick={()=>changeTheme(true)} actived={darkThemeActived? true : false}>
                <BsFillMoonFill />
            </MoonButton>
        </Content>
    );
}
