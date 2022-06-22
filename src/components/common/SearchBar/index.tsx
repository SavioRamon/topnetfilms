import { FormEvent } from "react";
import SearchButton from "./components/SearchButton";
import SearchInput from "./components/SearchInput";
import { Container } from "./style";


export default function SearchBar() {

    function search(event: FormEvent) {
        event.preventDefault();
    };

    return (
        <Container onSubmit={search}>
            <SearchInput />
            <SearchButton />
        </Container>
    );
};
