import styled from "styled-components";

const Button = styled.button`
    margin-bottom: 1em;
    background-color: inherit;
    border: none;
    cursor: pointer;
`

type Props = {
    children: JSX.Element;
    action: () => void;
};

const ChangeButton = (props: Props) => {
    return (
        <Button onClick={props.action}>
            {props.children}
        </Button>
    );
};

export default ChangeButton;