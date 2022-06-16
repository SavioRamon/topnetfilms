import styled, { css } from "styled-components";
import { useMovieList } from "../../../../../../hooks";

const Content = styled.div`
    padding-left: calc(1rem + 1.5vw);
    flex: 1;
`;

const FilmTitle = styled.h2`
    font-size: calc(1.5rem + 1.5vw);
    font-weight: bold;
`;

type TextTypes = {
    overview?: boolean;
    slogan?: boolean;
}

const Text = styled.p`
    font-size: calc(1.1em + .7vw);
    ${(props: TextTypes)=>{
        if(props.slogan) return css`
            font-size: calc(1.1em + .6vw);
            opacity: .8;
        `
        if(props.overview) return css`
            margin-top: 1em;
            font-size: calc(1.1em + .5vw);
        `
    }}

`;


export function Informations() {

    const { singleFilm } = useMovieList();

    return (
        <Content>
            <FilmTitle>{singleFilm?.title}</FilmTitle>
            <Text slogan>{singleFilm?.tagline}</Text>

            <Text overview>
                <Text>Overview</Text>
                {singleFilm?.overview}
            </Text>
        </Content>
    );
};
