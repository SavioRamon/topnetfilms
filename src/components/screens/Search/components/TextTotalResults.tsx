import styled from "styled-components";

const Text = styled.span`
    margin: .6em;
    font-size: calc(1rem + 1vw);
`;

type Props = {
    total: number;
};

const TextTotalResults = ({total}: Props) => (
    <Text>({total}) results found.</Text>
);

export default TextTotalResults;