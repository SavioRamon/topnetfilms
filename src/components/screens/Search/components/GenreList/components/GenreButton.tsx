import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../../../../store/hooks";
import CONSTANTS from "../../../../../../utils/CONSTANTS";

const Item = styled.li`
    width: 100%;
    font-size: 1em;
`;

const Button = styled.button`
    padding: .4em;
    text-indent: 1em;
    width: 100%;
    background-color: inherit;
    border: none;
    cursor: pointer;
    font-size: 1em;
    text-align: start;
    transition: background-color ease 0.5s;

    &:active {
        background-color: ${({theme})=>theme.blue};
        color: ${({theme})=>theme.white};
        transition: none;
    }

    &:hover {
        border-left: .5em solid ${({theme})=>theme.blue};
    }
`;

const GenreButton = () => {
    const navigate = useNavigate();

    const genreList = useAppSelector(state=>state.filmList.genreList)!;

    const navigateToGenreScreen = (id: number) => {
        navigate(`/${CONSTANTS.ROUTES.SEARCH_GENRE}?q=${id}`);
    };


    return (
        <Fragment>
            {genreList.genres.map((genre, key)=>(
                <Item key={key}>
                    <Button
                        onClick={()=>navigateToGenreScreen(genre.id)}
                    >
                        {genre.name}
                    </Button>
                </Item>
            ))}
        </Fragment>
        
    );
}

export default GenreButton;