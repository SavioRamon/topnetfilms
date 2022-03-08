import styled from "styled-components";
import colors from "../../../styles/colors";
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

export const ButtonForm = styled.button`
    margin: ${metrics.extraSmallSpacingSize} 0;
    padding: ${metrics.extraSmallSpacingSize};
    width: 100%;
    border: none;
    border-radius: ${metrics.extraSmallSpacingSize};
    background-color: ${colors.blue};
    color: #fff;
    cursor: pointer;
    font-size: calc(.7rem + .7vw);
    font-weight: bold;
`;

export const TextForm = styled.div`
    font-size: calc(.7rem + .7vw);
`;

export const ToggleScreenAuth = styled.span`
    color: ${colors.blue};
    font-weight: bold;
    cursor: pointer;
`;