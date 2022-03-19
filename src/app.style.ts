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

    a {
        text-decoration: none;
    }
    
    body, input {
        background-color: ${({theme})=>theme.backgroundColor};
        color: ${({theme})=>theme.textColor};
        
    };
`;



export const Content = styled.div`
    width: 100%;
`;

