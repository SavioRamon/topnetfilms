import styled from "styled-components";
import metrics from "../../../../styles/metrics";
import BottomContent from "./BottomContent";


const RegisterScreen = styled.section`
    width: 100%;
`;

const ContentWrapper = styled.div`
    margin: 0 auto;
    padding: ${metrics.extraSmallSpacingSize};
    width: min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: .1px solid;
`;

const Title = styled.h1`
    margin-bottom: ${metrics.extraSmallSpacingSize};
    font-size: calc(1rem + 1vw);
`;

const FormAuthentication = styled.form`

`;

export default function Register() {
    return (
        <RegisterScreen>
            <ContentWrapper>
                <Title>Create account</Title>
                
                <FormAuthentication>
                    <BottomContent />
                </FormAuthentication>
            </ContentWrapper>
        </RegisterScreen>
    );
};