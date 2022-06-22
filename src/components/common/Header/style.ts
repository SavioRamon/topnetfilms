import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: calc(2rem + 3vw);
    z-index: 10;
    padding: calc(1rem + .4vw);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme})=>theme.backgroundSecondary};
    border-bottom: .1vw solid #333;
    position: fixed;
    top: 0;
`;