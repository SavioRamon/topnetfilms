import styled, { createGlobalStyle, css } from "styled-components";
import { Theme } from "./context/themeContext";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body, input {
        ${(props: ContentProps) => css`
            background-color: ${props.theme.backgroundColor};
            color: ${props.theme.textColor};
        `}
    };
`;

type ContentProps = {
    theme: Theme;
};

export const Content = styled.div`
    width: 100%;
`;

