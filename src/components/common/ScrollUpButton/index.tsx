import { useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

type ButtonProps = {
    visible: boolean;
}

const Button = styled.button`
    padding: .3em;
    cursor: pointer;
    display: none;
    font-size: calc(1.6rem + 1.5vw);
    background-color: ${({theme})=>theme.blue};
    color: ${({theme})=>theme.white};
    border-radius: 50%;
    position: fixed;
    bottom: .5em;
    right: .5em;
    border: none;
    ${(props: ButtonProps)=>{
        if(props.visible) return css`
            display: flex;
        `;
    }}
`;

const ScrollUpButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    window.onscroll = () => {
        const scrollHeight = window.scrollY;
        const minHeightToDisplayButton = window.innerHeight;
        
        if(scrollHeight >= minHeightToDisplayButton) {
            if(!isVisible) setIsVisible(true);
        }
        else {
            if(isVisible) setIsVisible(false);
        }
    };

    const scrollUp = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <Button
            visible={isVisible}
            onClick={scrollUp}
        >
            <IoIosArrowUp />
        </Button>
    )
};

export default ScrollUpButton;