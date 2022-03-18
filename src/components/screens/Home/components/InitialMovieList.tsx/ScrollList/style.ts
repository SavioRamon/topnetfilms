import styled, { css } from "styled-components";
import metrics from "../../../../../../styles/metrics";


export const ScrollContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ScrollListContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
    scroll-behavior: smooth;
`;

type ButtonScrollProps = {
    left?: boolean;
    right?: boolean;
}

export const ButtonScroll = styled.button`
    z-index: 1;
    position: absolute;
    padding: ${metrics.extraSmallSpacingSize};
    border-radius: 50%;
    cursor: pointer;
    border: none;
    font-size: calc(2rem + 2vw);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    align-items: center;
    transition: height ease 30ms;
    ${(props: ButtonScrollProps)=>{
        if(props.left) return css`left: 2vw`;
        if(props.right) return css`right: 2vw;`;
    }}
`;