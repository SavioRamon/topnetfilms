import styled from "styled-components";
import { useAuthentication } from "../../../../hooks";
import metrics from "../../../../styles/metrics";

import Input from "./Input";
import BottomContent from "./BottomContent";

import { RiUserFill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";


const RegisterScreen = styled.section`
    padding-top: ${metrics.mediumSpacingSize};
    width: 100%;
`;

const ContentWrapper = styled.div`
    width: calc(20rem + 20vw);
    min-width: 300px;
    margin: 0 auto;
    padding: ${metrics.extraSmallSpacingSize};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 300px) {
        width: 99vw;
        min-width: 99vw;
    }
`;

const Title = styled.h1`
    margin-bottom: ${metrics.extraSmallSpacingSize};
    font-size: calc(1rem + 1vw);
`;

const FormAuthentication = styled.form`

`;

export default function Register() {

    const { setName, setEmail, setPassword } = useAuthentication();

    return (
        <RegisterScreen>
            <ContentWrapper>
                <Title>Create Account</Title>

                <FormAuthentication>
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

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </RegisterScreen>
    );
};