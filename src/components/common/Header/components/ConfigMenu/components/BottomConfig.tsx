import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";
import metrics from "../../../../../../styles/metrics";


const Content = styled.div`
    margin-top: ${metrics.mediumSpacingSize};
    padding: ${metrics.extraSmallSpacingSize} 0;
    width: 100%;
    border-top: .1vw solid rgba(100, 100, 100, 0.3);
`;

const AuthButton = styled.button`
    padding: .3em 0;
    width: 100%;
    font-size: 1em;
    border: none;
    cursor: pointer;
    color: ${({theme})=>theme.textColor};
    background-color: inherit;

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
                    Sign out
                </AuthButton>

                :

                <Fragment>
                    <Link to="login">
                        <AuthButton onClick={changeConfigDisplay}>Login</AuthButton>
                    </Link>

                    <Link to="register">
                        <AuthButton onClick={changeConfigDisplay}>Sign in</AuthButton>
                    </Link>
                </Fragment>
            }
            
        </Content>
    );
};

export default BottomConfig;