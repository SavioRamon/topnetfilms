import styled from "styled-components";


const Item = styled.li`
    margin: .3em;
    margin-left: 0;
    background-color: ${({theme})=>theme.backgroundSecondary};
    font-size: calc(1rem + .4vw);
    border-radius: 1em;
`;

const Button = styled.button`
    padding: .4em;
    border: none;
    background-color: inherit;
    font-size: inherit;
    font-weight: bold;
    border-radius: inherit;
    cursor: pointer;
`;

type Props = {
    genre: {
        id: number;
        name: string;
    };
};


export default function InputGenre({genre}: Props) {
    return (
        <Item>
            <Button>
                {genre.name}
            </Button>
        </Item>
    );
};
