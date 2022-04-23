import styled, { css } from "styled-components";
import metrics from "../../../../../../styles/metrics";


export const ScrollContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow-y: hidden;
`;

export const ScrollListContainer = styled.ul`
    list-style-type: none;
    display: flex;
    width: 100%;
    overflow: auto;
    position: relative;
    scroll-behavior: smooth;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

type ButtonScrollProps = {
    left?: boolean;
    right?: boolean;
}

export const ButtonScroll = styled.button`
    z-index: 1;
    height: 100%;
    position: absolute;
    cursor: pointer;
    border: none;
    font-size: calc(2rem + 2vw);
    color: ${({theme})=>theme.textColor};
    background-color: ${({theme})=>theme.backgroundSecondary};
    opacity: .9;
    display: flex;
    align-items: center;
    transition: all ease .4s;
    ${(props: ButtonScrollProps) => {
        if(props.left) return css`
            left: 0;
            box-shadow: 0 0 .5em .5em ${({theme})=>theme.backgroundSecondary};
            &:hover {
                padding-left: ${metrics.extraSmallSpacingSize};
            }
        `;
        if(props.right) return css`
            right: 0;
            box-shadow: 0 0 .5em .5em  ${({theme})=>theme.backgroundSecondary};
            &:hover {
                padding-right: ${metrics.extraSmallSpacingSize};
            }
        `;
    }};
`;