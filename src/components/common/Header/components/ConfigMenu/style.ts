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
    width: clamp(3rem, 3rem + 1vw, 3rem + 1vw);
    height: clamp(3rem, 3rem + 1vw, 3rem + 1vw);
    background-color: transparent;
    color: transparent;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    border: .1vw solid #999;
`;


