import styled from "styled-components";


const Button = styled.button`
    border: none;
    background-color: inherit;
    display: flex;
    box-shadow: none;
`;

type ButtonProps = {
    children: JSX.Element;
    action?: ()=>void;
}

const ButtonContent = (props: ButtonProps) => {


    return (
        <Button onClick={props.action}>
            {props.children}
        </Button>
    );
};

export default ButtonContent;