import styled from "styled-components";
import { useAuthentication } from "../../../../hooks";
import metrics from "../../../../styles/metrics";

import Input from "./Input";
import BottomContent from "./BottomContent";

import { RiMailFill, RiLockPasswordFill } from "react-icons/ri";


const LoginScreen = styled.section`
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
    width: 100%;
`;

export default function Login() {

    const { setEmail, setPassword } = useAuthentication();

    return (
        <LoginScreen>
            <ContentWrapper>
                <Title>Login</Title>

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

                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </LoginScreen>
    );
};