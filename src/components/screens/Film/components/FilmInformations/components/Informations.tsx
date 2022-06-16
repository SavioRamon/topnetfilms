import styled from "styled-components";
import { useMovieList } from "../../../../../../hooks";

const Content = styled.div`
    flex: 1;
`;

const FilmTitle = styled.h2`
    text-indent: 1em;
    font-size: calc(1.5rem + 1.5vw);
`;


export function Informations() {

    const { singleFilm } = useMovieList();

    return (
        <Content>
            <FilmTitle>{singleFilm?.title}</FilmTitle>
        </Content>
    );
};
