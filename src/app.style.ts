import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
    
    body, input, button {
        background-color: ${({theme})=>theme.backgroundColor};
        color: ${({theme})=>theme.textColor};
        font-family: "Roboto", "sans-serif";
        
    };
`;



export const Content = styled.div`
    width: 100%;
`;

export const MainContent = styled.main`
    margin-top: calc(1em + 4vw);
`;