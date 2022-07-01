import { Outlet } from "react-router-dom";
import SearchBar from "../../common/SearchBar";
import GenreList from "./components/GenreList";
import { AsideContent, Container } from "./style";



const Search = () => {

    return (
        <Container>
            <AsideContent>
                <SearchBar />
                <GenreList />
            </AsideContent>
            
            <Outlet />
        </Container>
    );
};

export default Search;