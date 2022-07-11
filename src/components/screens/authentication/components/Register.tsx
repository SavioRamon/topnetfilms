import {
    ScreenAuth,
    ContentWrapper,
    FormAuthentication,
    TitleAuth,
    TextForm,
    ToggleScreenAuth,
    ButtonForm
} from "../style";

import Input from "./Input";
import BottomContent from "./BottomContent";

import { RiUserFill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../../../store/hooks";


export default function Register() {

    const navigate = useNavigate();
    const { accountInfo } = useAppSelector((state)=>state.user);

    const navigateToHomeScreen = () => {
        navigate("/", {replace: true})
    }

    useEffect(()=>{
        if(accountInfo) {
            navigateToHomeScreen();
        }
    }, [accountInfo, navigate]);

    return (
        <ScreenAuth>
            <ContentWrapper>
                <TitleAuth>Create Account</TitleAuth>

                <FormAuthentication onSubmit={(e)=>{
                    e.preventDefault();
                }}>
                    <Input 
                        id="name"
                        type="text"
                        placeholder="Username"
                        icon={<RiUserFill />}
                    />
                    <Input 
                        id="email"
                        type="email" 
                        placeholder="Email"
                        icon={<RiMailFill />}
                    />

                    <Input 
                        id="password"
                        type="password"
                        placeholder="Password"
                        icon={<RiLockPasswordFill />}
                    />

                    <TextForm>
                        Has account?
                        <Link to="/login">
                            <ToggleScreenAuth> Login!</ToggleScreenAuth>
                        </Link>
                    </TextForm>

                    <ButtonForm onClick={navigateToHomeScreen}>REGISTER</ButtonForm>

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </ScreenAuth>
    );
}