import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { BiLogOut, BiLogIn, BiUser } from "react-icons/bi";
import CONSTANTS from "../../../../../../utils/CONSTANTS";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { disconnectReq } from "../../../../../../store/ducks/user";
import ButtonContent from "./ButtonContent";


const Content = styled.div`
    font-size: .9em;
    width: 100%;
    border-top: .1vw solid rgba(100, 100, 100, 0.3);
`;


type Props = {
    changeConfigDisplay: () => void;
}


const BottomConfig = ({changeConfigDisplay}: Props):JSX.Element => {
    const accountInfo = useAppSelector(state=>state.user.accountInfo);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const disconnecting = () => {
        changeConfigDisplay();
        dispatch(disconnectReq());
    };

    const redirect = (screen: string) => {
        changeConfigDisplay();
        navigate(screen);
    };

    return (
        <Content>
            {accountInfo?
                <ButtonContent
                    icon={<BiLogOut />}
                    action={disconnecting}
                >
                    Log Out
                </ButtonContent>

                :

                <Fragment>
                    <ButtonContent 
                        icon={<BiLogIn />}
                        action={()=>redirect(CONSTANTS.ROUTES.LOGIN)}
                    >
                        Login
                    </ButtonContent>

                    <ButtonContent
                        icon={<BiUser />}
                        action={()=>redirect(CONSTANTS.ROUTES.REGISTER)}
                    >
                        Sign Up
                    </ButtonContent>
                </Fragment>
            }
            
        </Content>
    );
};

export default BottomConfig;