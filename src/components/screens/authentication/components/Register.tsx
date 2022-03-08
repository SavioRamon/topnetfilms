import { useAuthentication } from "../../../../hooks";
import { ScreenAuth, ContentWrapper, FormAuthentication, TitleAuth, TextForm, ToggleScreenAuth, ButtonForm } from "../style";

import Input from "./Input";
import BottomContent from "./BottomContent";

import { RiUserFill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";


export default function Register() {

    const { setName, setEmail, setPassword } = useAuthentication();

    return (
        <ScreenAuth>
            <ContentWrapper>
                <TitleAuth>Create Account</TitleAuth>

                <FormAuthentication onSubmit={(e)=>{
                    e.preventDefault()
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
                        <ToggleScreenAuth> Login!</ToggleScreenAuth>
                    </TextForm>

                    <ButtonForm>REGISTER</ButtonForm>

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </ScreenAuth>
    );
};