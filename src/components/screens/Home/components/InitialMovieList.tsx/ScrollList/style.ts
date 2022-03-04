import styled, { css } from "styled-components";


export const ScrollContent = styled.div`
    position: relative;
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
    top: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999;
    cursor: pointer;
    border: none;
    ${(props: ButtonScrollProps)=>{
        if(props.left) return css` left: 0; `;
        if(props.right) return css` right: 0; `;
    }}
`;