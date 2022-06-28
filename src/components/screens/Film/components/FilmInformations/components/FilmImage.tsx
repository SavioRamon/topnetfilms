
import styled from "styled-components";
import { useMovieList } from "../../../../../../hooks";


const LargeImage = styled.img`
    margin-left: calc(1rem + 1vw);
    margin-bottom: calc(1rem + 1vw);
    width: calc(5rem + 28vw);
    height: calc(5rem + 35vw);
    border-radius: 1em;

    @media (max-width: 450px) {
        display: none;
    };
`;

const SmallImage = styled.img`
    margin-top: calc(1rem + .4vw);
    margin-left: 0;
    width: 80vw;
    height: 83vw;
    border-radius: 1em;

    @media(min-width: 450px) {
        display: none;
    }
`;


type Props = {
    smallScreens?: boolean;
};

export function FilmImage({smallScreens}: Props) {

    const { singleFilm } = useMovieList();

    const ImageComponent = smallScreens? SmallImage : LargeImage;

    return (
        <ImageComponent
            src={`https://image.tmdb.org/t/p/original/${singleFilm?.poster_path}`}
            alt={singleFilm?.title}
        />
    );
}
