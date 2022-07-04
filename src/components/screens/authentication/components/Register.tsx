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

import { RiUserFill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Register() {

    const navigate = useNavigate();
    const { userData, setName, setEmail, setPassword } = useAuthentication();

    useEffect(()=>{
        if(userData) {
            navigate("/", {replace: true});
        }
    }, [userData, navigate]);

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
                        setValue={setName}
                    />
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
                        Has account?
                        <Link to="/login">
                            <ToggleScreenAuth> Login!</ToggleScreenAuth>
                        </Link>
                    </TextForm>

                    <ButtonForm>REGISTER</ButtonForm>

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </ScreenAuth>
    );
}