import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: calc(2rem + 3vw);
    z-index: 10;
    padding: calc(1rem + .4vw);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme})=>theme.header};
    border-bottom: .1vw solid #333;
    position: fixed;
    top: 0;
    overflow: hidden;
    transition: all ease .4s;
`;


/*
'BackgroudHeaderSupport' is an element for the user to see 
the header background color when the screen is sharply scrolled up
*/
export const BackgroundHeaderSupport = styled.div`
    background-color: ${({theme})=>theme.header};
    width: 100%;
    height: calc(2rem + 3vw);
    position: absolute;
    top: 0;
    
`;