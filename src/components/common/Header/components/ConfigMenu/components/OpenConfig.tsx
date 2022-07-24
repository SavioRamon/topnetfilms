import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../../../../store/hooks";
import CONSTANTS from "../../../../../../utils/CONSTANTS";
import BottomConfig from "./BottomConfig";
import ButtonContent from "./ButtonContent";
import ToggleTheme from "./ToggleTheme";
import UserInfos from "./UserInfos";
import { CgProfile } from "react-icons/cg";


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

type Props = {
    changeConfigDisplay: () => void;
}

const OpenConfig = ({changeConfigDisplay}: Props): JSX.Element => {

    const navigate = useNavigate();
    const accountInfo = useAppSelector(state=>state.user.accountInfo);
    const parentRef = useRef(null);
    window.onkeydown = (e) => {

        // detect if the clicked element is a child of this component
        if(e.key === "Enter") {

            const element = e.target as HTMLElement;
            const parent = parentRef.current as HTMLElement | null;

            element.classList.forEach((iClass)=>{
                if(parent?.querySelector(`.${iClass}`) === null) {
                    
                    changeConfigDisplay();

                }
            });
        }
    };

    const navigateToProfileScreen = () => {
        changeConfigDisplay();
        navigate(CONSTANTS.ROUTES.PROFILE);
    }


    return (
        <Content ref={parentRef}>
            {accountInfo &&
                <> 
                    <UserInfos />
                    
                    <ButtonContent
                        icon={<CgProfile />}
                        action={navigateToProfileScreen}
                    >
                            Profile
                    </ButtonContent>
                </>
            }

            <ToggleTheme>
                Theme
            </ToggleTheme>

            <BottomConfig changeConfigDisplay={changeConfigDisplay} />
        </Content>
    );
};

export default OpenConfig;