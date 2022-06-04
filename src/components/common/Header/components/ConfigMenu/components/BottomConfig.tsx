import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";
import metrics from "../../../../../../styles/metrics";

import { BiLogOut, BiLogIn, BiUser } from "react-icons/bi";


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

    const disconnecting = () => {
        changeConfigDisplay();
        disconnect();
    };

    return (
        <Content>
            {userData?
                <AuthButton onClick={disconnecting}>
                    <BiLogOut /> Log Out
                </AuthButton>

                :

                <Fragment>
                    <Link to="login">
                        <AuthButton onClick={changeConfigDisplay}>
                            <BiLogIn /> Login
                        </AuthButton>
                    </Link>

                    <Link to="register">
                        <AuthButton onClick={changeConfigDisplay}>
                            <BiUser /> Sign Up
                        </AuthButton>
                    </Link>
                </Fragment>
            }
            
        </Content>
    );
};

export default BottomConfig;