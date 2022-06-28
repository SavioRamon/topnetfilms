import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CONSTANTS from "../../../../../../utils/CONSTANTS";


const Item = styled.li`
    margin: .3em;
    margin-left: 0;
    background-color: ${({theme})=>theme.backgroundSecondary};
    font-size: calc(1rem + .4vw);
    border-radius: 1em;
`;

const Button = styled.button`
    padding: .4em;
    border: none;
    background-color: inherit;
    font-size: inherit;
    font-weight: bold;
    border-radius: inherit;
    cursor: pointer;
`;

type Props = {
    genre: {
        id: number;
        name: string;
    };
};


export default function InputGenre({genre}: Props) {

    const navigate = useNavigate();

    const goToGenreScreen = () => {
        navigate(`/${CONSTANTS.ROUTES.GENRE}/${genre.id}`);
    };

    return (
        <Item>
            <Button onClick={goToGenreScreen}>
                {genre.name}
            </Button>
        </Item>
    );
}
