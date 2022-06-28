import styled, { css } from "styled-components";


const Text = styled.p`
    ${(props: {isTitle: boolean}) => {
        if(props.isTitle) return css`
            font-size: 1.5em;  
            font-weight: bold;
        `; 
        else return css`
            font-size: 1em;
            font-weight: normal;
        `;
    }}
`;

type Props = {
    text: string;
    title: boolean;
}

const TextItem = ({ text, title }: Props) => {
    return (
        <Text isTitle={title}>
            {text}
        </Text>
    );
};

export default TextItem;
