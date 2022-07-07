
import styled from "styled-components";
import { useAppSelector } from "../../../../../../store/hooks";


const LargeImage = styled.img`
    margin-left: calc(1rem + 1vw);
    margin-bottom: calc(1rem + 1vw);
    width: calc(5rem + 20vw);
    min-width: 30rem;
    height: calc(5rem + 27vw);
    min-height: 45rem;
    border-radius: 1em;

    @media (max-width: 600px) {
        display: none;
    };
`;

const SmallImage = styled.img`
    margin-top: calc(1rem + .4vw);
    margin-left: 0;
    width: clamp(15rem, 10rem + 50vw, 70vw);
    height: clamp(15rem, 10rem + 63vw, 70vw);
    border-radius: 1em;

    @media(min-width: 600px) {
        display: none;
    }
`;


type Props = {
    smallScreens?: boolean;
};

export function FilmImage({smallScreens}: Props) {

    const singleFilm = useAppSelector(state=>state.filmList.singleFilm);

    const ImageComponent = smallScreens? SmallImage : LargeImage;

    return (
        <ImageComponent
            src={`https://image.tmdb.org/t/p/original/${singleFilm?.poster_path}`}
            alt={singleFilm?.title}
        />
    );
}
