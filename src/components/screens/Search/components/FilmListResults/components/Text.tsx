import styled, { css } from "styled-components";


const Text = styled.p`
    text-align: start;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    
    ${(props: {isTitle: boolean}) => {
        if(props.isTitle) return css`
            font-size: 1.1em;  
            font-weight: bolder;
        `
        else return css`
            margin-top: .3em;
            font-size: 1em;
            font-weight: normal;
        `;
    }};

    @media(max-width: 600px) {
        -webkit-line-clamp: 2;
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
