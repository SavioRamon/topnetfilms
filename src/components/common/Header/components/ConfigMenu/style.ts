import styled from "styled-components";
import metrics from "../../../../../styles/metrics";


export const Container = styled.div`
    margin-left: ${metrics.extraSmallSpacingSize};
    width: max-content;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    z-index: 1000;
`;

export const UserImage = styled.img`
    width: calc(2rem + 1.5vw);
    height: calc(2rem + 1.5vw);
    background-color: transparent;
    color: transparent;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    border: .1vw solid #999;
`;


