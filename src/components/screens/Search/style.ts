import styled from "styled-components";

export const Container = styled.div`
    padding: calc(1rem + 1vw);
    width: 100%;
    display: flex;
    @media(max-width: 600px) {
        align-items: center;
        flex-direction: column;
        padding: 0;
    }
`;

export const Wrapper = styled.div`
    margin: 0 calc(.6rem + 1vw);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AsideContent = styled.div`
    width: calc(10rem + 15vw);
    height: min-content;
    display: flex;
    flex-direction: column;
    @media(max-width: 600px) {
        margin-top: calc(1rem + 1vw);
        width: 70%;
    }
`;