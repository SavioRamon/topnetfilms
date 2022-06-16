import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";
import BottomConfig from "./BottomConfig";
import ToggleTheme from "./ToggleTheme";
import UserInfos from "./UserInfos";


const Content = styled.div`
    width: calc(10rem + 10vw);
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    font-size: calc(1.1rem + .4vw);
    background-color: ${({theme})=>theme.backgroundSecondary};
    border: .1vw solid #333;

    @media (max-width: 500px) {
        top: 0;
        right: 0;
        bottom: 0;
        width: calc(1em + 80vw);
    }
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