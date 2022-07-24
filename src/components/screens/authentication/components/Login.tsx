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

import { RiMailFill, RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../../../store/hooks";


export default function Login() {

    const navigate = useNavigate();
    const { accountInfo, loading } = useAppSelector((state)=>state.user);

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
            {!loading && !accountInfo &&
            <ContentWrapper>
                <TitleAuth>Login</TitleAuth>

                <FormAuthentication onSubmit={(e)=>{
                    e.preventDefault();
                }}>
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
                        Not account?
                        <Link to="/register">
                            <ToggleScreenAuth> Register now!</ToggleScreenAuth>
                        </Link>
                    </TextForm>

                    <ButtonForm onClick={navigateToHomeScreen}>LOGIN</ButtonForm>

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
            }
        </ScreenAuth>
    );
}