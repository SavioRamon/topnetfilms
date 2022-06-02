import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";
import BottomConfig from "./BottomConfig";
import ToggleTheme from "./ToggleTheme";
import UserInfos from "./UserInfos";


const Content = styled.div`
    margin-top: clamp(4rem, 4rem + 1.2vw, 4rem + 1.2vw);
    width: calc(10rem + 10vw);
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size: calc(.8rem + .6vw);
    background-color: ${({theme})=>theme.backgroundSecondary};
`;

const ContentWrapper = styled.div`
    padding: .5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: rgba(70, 70, 70, .3);
    }
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

            <ContentWrapper>
                Theme
                <ToggleTheme />
            </ContentWrapper>

            <BottomConfig changeConfigDisplay={changeConfigDisplay} /> 
        </Content>
    );
};

export default OpenConfig;