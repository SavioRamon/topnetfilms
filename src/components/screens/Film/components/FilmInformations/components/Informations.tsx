import { Fragment } from "react";
import styled, { css } from "styled-components";
import { useAppSelector } from "../../../../../../store/hooks";
import ButtonFavorite from "./ButtonFavorite";
import { FilmImage } from "./FilmImage";
import GenreButton from "./GenreButton";

const Content = styled.div`
    padding: 0 calc(1rem + 1.5vw);
    flex: 1;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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

const SpanText = styled.span`
    margin: .5em 0;
    font-size: calc(1.1rem + .5vw);
    font-weight: bold;
    display: block;
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
        `;
        if(props.overview) return css`
            font-size: calc(1.1rem + .5vw);
        `;
    }}
`;

const OverviewTitle = styled.h3`
    margin-top: 1em;
    font-size: calc(1.5rem + 1vw);
`;


export function Informations() {

    const singleFilm = useAppSelector((state)=>state.filmList.singleFilm);

    return (
        <Content>
            {singleFilm &&
            <Fragment>
                <FilmTitle>{singleFilm.title}</FilmTitle>
                <Text slogan>{singleFilm.tagline}</Text>

                <SpanText>{singleFilm.release_date.replaceAll("-", "/")}</SpanText>

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

                <FilmImage  smallScreens />

                <OverviewTitle>Overview</OverviewTitle>
                <Text overview>
                    {singleFilm.overview}
                </Text>

                <ButtonFavorite filmID={singleFilm.id} />
            </Fragment>
            }
            
        </Content>
    );
}
