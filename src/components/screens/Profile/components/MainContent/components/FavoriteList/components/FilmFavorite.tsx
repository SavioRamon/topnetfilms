import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FilmTypes } from "../../../../../../../../store/ducks/filmList";
import CONSTANTS from "../../../../../../../../utils/CONSTANTS";

const Item = styled.li`
    width: calc(5em + 5vw);
    margin: .5em;
    display: flex;
    flex-direction: column;
    font-size: calc(1rem + .6vw);
`;

const FilmImage = styled.img`
    width: inherit;
    height: calc(7em + 7vw);
`;

const FilmName = styled.button`
    margin: .3em;
    border: none;
    font-size: 1em;
    cursor: pointer;

`;


type Props = {
    filmInfo: FilmTypes;
}

const FilmFavorite = ({ filmInfo }: Props) => {
    const navigate = useNavigate();

    const navigateToFilmScreen = () => {
        navigate(`/${CONSTANTS.ROUTES.FILM}/${filmInfo.id}`);
    };

    return (
        <Item>
            <FilmImage
                src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`}
                alt="film poster"
            />
            <FilmName onClick={navigateToFilmScreen}>{ filmInfo.title }</FilmName>
        </Item>
    )
}

export default FilmFavorite;