import styled from "styled-components";
import metrics from "../../../../../styles/metrics";


export const Container = styled.div`
    margin-left: ${metrics.extraSmallSpacingSize};
    width: max-content;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
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

export const ConfigContent = styled.div`
    margin-top: clamp(3rem, 3rem + 1vw, 3rem + 1vw);
    width: calc(10rem + 10vw);
    display: flex;
    flex-direction: column;
    border: .1vw solid black;
    position: absolute;
`;


export const BottomConfig = styled.div`
    width: 100%;
`;

export const AuthButton = styled.button`
    padding: .3em 0;
    width: 100%;
    font-size: calc(.7rem + .7vw);
    border: none;
    cursor: pointer;
`;