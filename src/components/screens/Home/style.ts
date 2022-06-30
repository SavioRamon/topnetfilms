import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    padding: calc(.5rem + .1vw);
    width: 100%;
    background-color: ${({theme})=>theme.backgroundSecondary};
    display: flex;
    justify-content: center;
`;

export const SearchWrapper = styled.div`
    width: calc(20rem + 10vw);
`;