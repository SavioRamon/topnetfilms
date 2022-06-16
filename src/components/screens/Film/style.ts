import styled from "styled-components";

export const Content = styled.div`
    padding: calc(1rem + 2vw) 0;
    width: 100%;
    height: min-content;
    display: flex;
    justify-content: center;
    background-color: red;
`;

export const LargeImage = styled.img`
    margin-left: calc(1rem + 1vw);
    width: calc(5rem + 27vw);
    height: calc(5rem + 32vw);

    @media (max-width: 450px) {
        margin-left: 0;
        width: 95vw;
        height: 98vw;
    };
`;

export const FilmInformations = styled.section`
    flex: 1;
`;