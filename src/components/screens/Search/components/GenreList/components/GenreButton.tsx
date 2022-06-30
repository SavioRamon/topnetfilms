import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CONSTANTS from "../../../../../../utils/CONSTANTS";

const Item = styled.li`
    width: 100%;
    &:hover {
        border-left: .5em solid ${({theme})=>theme.blue};
    }
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
`;

type Props = {
    genre: {
        name: string;
        id: string;
    };
};

const GenreButton = ({genre}: Props) => {
    const navigate = useNavigate();

    const navigateToGenreScreen = () => {
        navigate(`/${CONSTANTS.ROUTES.SEARCH_GENRE}/${genre.id}`);
    };

    return (
        <Item>
            <Button onClick={navigateToGenreScreen}>
                {genre.name}
            </Button>
        </Item>   
    );
}

export default GenreButton;