import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";
import metrics from "../../../../../../styles/metrics";

import { AiTwotoneTool } from "react-icons/ai";

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .1vw solid rgba(100, 100, 100, 0.3);
`;

const Text = styled.div`
    padding-left: ${metrics.extraSmallSpacingSize};
    font-size: 1em;
`;

const ConfigButton = styled.button`
    padding: .5em;
    cursor: pointer;
    font-size: 1.2em;
    background-color: inherit;
    color: ${({theme})=>theme.textColor};
    border: none;

    &:hover {
        background-color: rgba(140, 140, 140, 0.3);
    }

`;

const UserInfos = ():JSX.Element => {

    const { userData } = useAuthentication();

    return (
        <Content>
            <Text>{userData?.displayName}</Text>
            
            <ConfigButton>
                <AiTwotoneTool />
            </ConfigButton>
        </Content>
    );
};

export default UserInfos;