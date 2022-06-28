import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../../utils/CONSTANTS";
import SearchButton from "./components/SearchButton";
import SearchInput from "./components/SearchInput";
import { Container } from "./style";


export default function SearchBar() {

    const navigate = useNavigate();
    function search(event: FormEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const inputValue = form.querySelector("input")?.value;

        if(inputValue) {
            navigate(`${CONSTANTS.ROUTES.SEARCH}/${inputValue}`);
        }
    }

    return (
        <Container onSubmit={search}>
            <SearchInput />
            <SearchButton />
        </Container>
    );
}
