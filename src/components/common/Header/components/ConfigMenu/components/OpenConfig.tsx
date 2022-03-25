import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";
import BottomConfig from "./BottomConfig";
import UserInfos from "./UserInfos";


const Content = styled.div`
    margin-top: clamp(4rem, 4rem + 1.2vw, 4rem + 1.2vw);
    width: calc(10rem + 10vw);
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${({theme})=>theme.backgroundSecondary};
`;

type Props = {
    changeConfigDisplay: () => void;
}

const OpenConfig = ({changeConfigDisplay}: Props): JSX.Element => {

    const { userData } = useAuthentication();

    return (
        <Content>
            {userData &&
                <UserInfos />
            }
            
            <BottomConfig changeConfigDisplay={changeConfigDisplay} /> 
        </Content>
    );
};

export default OpenConfig;