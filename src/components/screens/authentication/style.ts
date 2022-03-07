import styled from "styled-components";
import metrics from "../../../styles/metrics";


export const ScreenAuth = styled.section`
    padding-top: ${metrics.mediumSpacingSize};
    width: 100%;
`;

export const ContentWrapper = styled.div`
    width: calc(20rem + 20vw);
    min-width: 400px;
    margin: 0 auto;
    padding: ${metrics.extraSmallSpacingSize};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 400px) {
        width: 99vw;
        min-width: 99vw;
    }
`;

export const TitleAuth = styled.h1`
    margin-bottom: ${metrics.extraSmallSpacingSize};
    font-size: calc(1rem + 1vw);
`;

export const FormAuthentication = styled.form`
    width: 100%;
`;