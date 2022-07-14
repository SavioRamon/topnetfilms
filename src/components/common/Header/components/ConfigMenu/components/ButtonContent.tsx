import styled from "styled-components";


const Button = styled.button`
    padding: .5em;
    width: 100%;
    border: none;
    background-color: transparent;
    box-shadow: none;
    display: flex;
    align-items: center;
    &:hover {
        background-color: rgba(70, 70, 70, .3);
    }
    font-size: 1em;
    text-indent: .8em;
    cursor: pointer;
`;

const IconStyle = styled.div`
    font-size: 1.3em;
    display: flex;
`;

type ButtonProps = {
    children: string;
    icon: JSX.Element;
    action?: ()=>void;
}

const ButtonContent = (props: ButtonProps) => {


    return (
        <Button onClick={props.action}>
            <IconStyle>
                {props.icon}
            </IconStyle>
            {props.children}
        </Button>
    );
};

export default ButtonContent;