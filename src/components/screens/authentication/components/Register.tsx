import styled from "styled-components";
import metrics from "../../../../styles/metrics";
import FormAuthContainer from "./FormAuthContainer";

const RegisterScreen = styled.section`
    padding: ${metrics.mediumSpacingSize} 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Register() {
    return (
        <RegisterScreen>
            <FormAuthContainer />
        </RegisterScreen>
    );
};