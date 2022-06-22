import styled from "styled-components"

import { FaSearch } from "react-icons/fa";


const Button = styled.button`
    padding: .5em;
    font-size: 1em;
    border: none;
    cursor: pointer;
    border-radius: 0 1em 1em 0;
    display: flex;
    align-items: center;
`;

export default function SearchButton() {
    return (
        <Button>
            <FaSearch />
        </Button>
    )
}