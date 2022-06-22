import { useState } from "react";
import styled from "styled-components";


const Input = styled.input`
    width: 100%;
    padding: .5em;
    border-radius: 1em 0 0 1em;
    font-size: 1em;
    text-indent: .5em;
    border: none;
    outline: none;
`;

export default function SearchInput() {

    const [text, setText] = useState("");

    return (
        <Input 
            value={text}
            onChange={e=>setText(e.target.value)}
            placeholder="Search Film"
        />
    );
};
