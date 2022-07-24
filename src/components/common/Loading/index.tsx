import styled from "styled-components";


import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Content = styled.div`
    width: 100%;
    height: 100%;
    font-size: calc(2em + 3vw);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconWrapper = styled.div`
    @keyframes twist {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
    animation: twist infinite linear 2s;
    display: flex;
`;

const Loading = () => {
    return (
        <Content>
            <IconWrapper>
                <AiOutlineLoading3Quarters />
            </IconWrapper>
        </Content>
    )
}

export default Loading;