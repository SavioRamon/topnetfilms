import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";
import metrics from "../../../../../../styles/metrics";

import { BiLogOut, BiLogIn, BiUser } from "react-icons/bi";
import CONSTANTS from "../../../../../../utils/CONSTANTS";


const Content = styled.div`
    margin-top: ${metrics.extraSmallSpacingSize};
    padding: ${metrics.extraSmallSpacingSize} 0;
    width: 100%;
    border-top: .1vw solid rgba(100, 100, 100, 0.3);
`;

const AuthButton = styled.button`
    padding: .5em 0 .5em 1em;
    width: 100%;
    font-size: 1em;
    text-indent: .6em;
    border: none;
    cursor: pointer;
    color: ${({theme})=>theme.textColor};
    background-color: inherit;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgba(140, 140, 140, 0.2);
    }
`;


type Props = {
    changeConfigDisplay: () => void;
}


const BottomConfig = ({changeConfigDisplay}: Props):JSX.Element => {
    const { userData, disconnect } = useAuthentication();
    const navigate = useNavigate();

    const disconnecting = () => {
        changeConfigDisplay();
        disconnect();
    };

    const redirect = (screen: string) => {
        changeConfigDisplay();
        navigate(screen);
    };

    return (
        <Content>
            {userData?
                <AuthButton onClick={disconnecting}>
                    <BiLogOut /> Log Out
                </AuthButton>

                :

                <Fragment>
                    <AuthButton onClick={()=>redirect(CONSTANTS.ROUTES.LOGIN)}>
                        <BiLogIn /> Login
                    </AuthButton>

                    <AuthButton onClick={()=>redirect(CONSTANTS.ROUTES.REGISTER)}>
                        <BiUser /> Sign Up
                    </AuthButton>
                </Fragment>
            }
            
        </Content>
    );
};

export default BottomConfig;