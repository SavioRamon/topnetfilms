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
    ${(props: TextTypes)=>{
        if(props.slogan) return css`
            font-size: calc(1.1rem + .6vw);
            opacity: .8;
        `
        if(props.overview) return css`
            font-size: calc(1.1rem + .5vw);
        `
    }}
`;

const OverviewTitle = styled.h3`
    margin-top: 1em;
    font-size: calc(1.1rem + 1vw);
`;


export function Informations() {

    const { singleFilm } = useMovieList();

    return (
        <Content>
            <FilmTitle>{singleFilm?.title}</FilmTitle>
            <Text slogan>{singleFilm?.tagline}</Text>

            <OverviewTitle>Overview</OverviewTitle>
            <Text overview>
                {singleFilm?.overview}
            </Text>
        </Content>
    );
};
