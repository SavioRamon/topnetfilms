import styled from "styled-components";


export const Container = styled.div`
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
    border: .1vw solid #666;
`;

export const HiddenScreen = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .7);
`;

