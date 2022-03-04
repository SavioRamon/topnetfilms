import styled from "styled-components";

export const FilmContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FilmImage = styled.img`
    width: calc(5rem + 7vw);
    height: calc(5rem + 12vw);
    display: inline;
`;

export const FilmBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;