import styled, { css } from "styled-components";


const Text = styled.p`
    text-align: start;
    word-break: break-all;
    
    ${(props: {isTitle: boolean}) => {
        if(props.isTitle) return css`
            font-size: 1.1em;  
            font-weight: bolder;
        `
        else return css`
            font-size: 1em;
            font-weight: normal;
        `;
    }};

    @media(max-width: 600px) {
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    };
    
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
