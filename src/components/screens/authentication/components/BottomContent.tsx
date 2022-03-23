import styled from "styled-components";
import googleIcon from "../../../../../assets/googleIcon.svg";
import { useAuthentication } from "../../../../hooks";
import metrics from "../../../../styles/metrics";
import CONSTANTS from "../../../../utils/CONSTANTS";


const BottomContentDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextInfo = styled.div`
    font-size: calc(0.7rem + 0.5vw);
`;

const ListOfAcessServices = styled.ul`
    margin: ${metrics.extraSmallSpacingSize};
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
`;

const ListItem = styled.li`
    border-radius: 50%;
    cursor: pointer;
`;

const ListItemImage = styled.img`
    width: calc(1.5rem + 1.5vw);
    width: calc(1.5rem + 1.5vw);
`;

export default function BottomContent() {

    const { authWithService } = useAuthentication();


    const handleService = (service: string) => {
        authWithService(service);
    };


    return (
        <BottomContentDiv>

            <TextInfo>Or continue with</TextInfo>

            <ListOfAcessServices>
                <ListItem onClick={() => handleService(CONSTANTS.PARAMS.GOOGLE)}>
                    <ListItemImage src={googleIcon} alt="google icon" />
                </ListItem>
                
            </ListOfAcessServices>
        </BottomContentDiv>
    );
};