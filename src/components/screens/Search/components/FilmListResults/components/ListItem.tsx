import styled from "styled-components";
import ImageItem from "./Image";
import ChangeButton from "./ChangeButton";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../../../../../utils/CONSTANTS";
import TextItem from "./Text";
import { FilmTypes } from "../../../../../../store/ducks/filmList";

const Content = styled.li`
    margin-bottom: 1.5em;
    height: calc(9rem + 6.5vw);
    width: 100%;
    display: flex;
    align-items: flex-start;
    background-color: ${({theme})=>theme.backgroundSecondary};
    font-size: calc(1rem + .5vw);
    overflow: hidden;
`;

const Wrapper = styled.div`
    flex: 1;
    padding: .5em .5em 0 .5em;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

type Props = {
    Film: FilmTypes;
};

const ListItem = (props: Props) => {
    const navigate = useNavigate();

    const navigateToFilmScreen = () => {
        navigate(`/${CONSTANTS.ROUTES.FILM}/${props.Film.id}`);
    };

    return (
        <Content>
            <ChangeButton action={navigateToFilmScreen}>
                <ImageItem image_url={props.Film.poster_path} />
            </ChangeButton>
            
            <Wrapper>
                <ChangeButton action={navigateToFilmScreen}>
                    <TextItem text={props.Film.title} title={true} />
                </ChangeButton>

                <TextItem text={props.Film.overview} title={false} />
            </Wrapper>
        </Content>
    );
};

export default ListItem;
