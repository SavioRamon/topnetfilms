import styled from "styled-components";
import metrics from "../../../styles/metrics";

export const HeaderContainer = styled.header`
    z-index: 10;
    padding: ${metrics.extraSmallSpacingSize} ${metrics.mediumSpacingSize};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme})=>theme.backgroundSecondary};
    border-bottom: .1vw solid #333;
    position: fixed;
`;