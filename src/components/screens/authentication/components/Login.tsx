import { useAuthentication } from "../../../../hooks";
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


export default function Login() {

    const navigate = useNavigate();
    const { userData, setEmail, setPassword } = useAuthentication();

    useEffect(()=>{
        if(userData) {
            navigate("/", {replace: true});
        }
    }, [userData, navigate]);
    
    return (
        <ScreenAuth>
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
                        setValue={setEmail}
                    />

                    <Input 
                        id="password"
                        type="password"
                        placeholder="Password"
                        icon={<RiLockPasswordFill />}
                        setValue={setPassword}
                    />

                    <TextForm>
                        Not account?
                        <Link to="/register">
                            <ToggleScreenAuth> Register now!</ToggleScreenAuth>
                        </Link>
                    </TextForm>

                    <ButtonForm>LOGIN</ButtonForm>

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </ScreenAuth>
    );
}