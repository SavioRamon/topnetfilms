import styled, { css } from "styled-components";
import { useMovieList } from "../../../../../../hooks";
import GenreButton from "./GenreButton";

const Content = styled.div`
    padding: 0 calc(1rem + 1.5vw);
    flex: 1;
`;

const FilmTitle = styled.h2`
    font-size: calc(1.5rem + 1.5vw);
    font-weight: bold;
`;

const GenreList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
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

            {singleFilm && 
                <GenreList>
                    {singleFilm.genres.map((item, key)=>(
                        <GenreButton
                            key={key}
                            genre={item}
                        />
                    ))}
                </GenreList>
            }

            <OverviewTitle>Overview</OverviewTitle>
            <Text overview>
                {singleFilm?.overview}
            </Text>
        </Content>
    );
};
