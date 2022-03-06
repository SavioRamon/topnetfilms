import styled from "styled-components";
import metrics from "../../../../styles/metrics";
import BottomContent from "./BottomContent";


const LoginScreen = styled.section`
    padding: ${metrics.extraSmallSpacingSize};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #999;
`;

const Title = styled.h1`
    margin-bottom: ${metrics.extraSmallSpacingSize};
    font-size: calc(1rem + 1vw);
`;

const FormAuthentication = styled.form`

`;

export default function Login() {
    return (
        <LoginScreen>
            <Title>Login</Title>

            <FormAuthentication>
                <BottomContent />
            </FormAuthentication>
        </LoginScreen>
    );
};