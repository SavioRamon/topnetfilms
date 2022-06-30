import styled from "styled-components";


export const Container = styled.form`
    width: 100%;
    display: flex;
    font-size: calc(1rem + .4vw);
    border: .1vw solid ${({theme})=>theme.textColor};
    border-radius: 1em;
    overflow: hidden;
`;