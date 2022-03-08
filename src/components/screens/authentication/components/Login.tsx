import { useAuthentication } from "../../../../hooks";
import { ScreenAuth, ContentWrapper, FormAuthentication, TitleAuth, TextForm, ToggleScreenAuth, ButtonForm } from "../style";

import Input from "./Input";
import BottomContent from "./BottomContent";

import { RiMailFill, RiLockPasswordFill } from "react-icons/ri";


export default function Login() {

    const { setEmail, setPassword } = useAuthentication();

    return (
        <ScreenAuth>
            <ContentWrapper>
                <TitleAuth>Login</TitleAuth>

                <FormAuthentication>
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
                        <ToggleScreenAuth> Register now!</ToggleScreenAuth>
                    </TextForm>

                    <ButtonForm>LOGIN</ButtonForm>

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </ScreenAuth>
    );
};