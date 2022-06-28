
import SearchBar from "../../common/SearchBar";
import InitialMovieList from "./components/InitialMovieList/InitialMovieList";

import { HomeContainer, Wrapper } from "./style";


export default function Home() {

    return (
        <HomeContainer>
            <Wrapper>
                <SearchBar />
            </Wrapper>
            <InitialMovieList />
        </HomeContainer>
    );
}