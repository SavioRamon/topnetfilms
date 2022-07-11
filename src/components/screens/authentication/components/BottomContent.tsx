import styled from "styled-components";
import googleIcon from "../../../../assets/images/icons/googleIcon.svg";
import { authWithServiceReq } from "../../../../store/ducks/user";
import { useAppDispatch } from "../../../../store/hooks";
import metrics from "../../../../styles/metrics";
import CONSTANTS from "../../../../utils/CONSTANTS";


const BottomContentDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextInfo = styled.div`
    font-size: calc(.9rem + 0.3vw);
`;

const ListOfAcessServices = styled.ul`
    margin: ${metrics.extraSmallSpacingSize};
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
`;

const ListItem = styled.li`
    border-radius: 50%;
`;

const ListItemImage = styled.img`
    width: calc(1.5rem + 1.5vw);
    width: calc(1.5rem + 1.5vw);
`;

export default function BottomContent() {

    const dispatch = useAppDispatch();


    const handleService = (service: string) => {
        dispatch(authWithServiceReq(service));
    };


    return (
        <BottomContentDiv>

            <TextInfo>Or continue with</TextInfo>

            <ListOfAcessServices>
                    <ListItem>
                        <Button onClick={() => handleService(CONSTANTS.PARAMS.GOOGLE)}>
                            <ListItemImage src={googleIcon} alt="google icon" />
                        </Button>
                    </ListItem>
            </ListOfAcessServices>
        </BottomContentDiv>
    );
}