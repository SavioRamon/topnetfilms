
import SearchBar from "../../common/SearchBar";
import InitialMovieList from "./components/InitialMovieList/InitialMovieList";

import { HomeContainer, SearchWrapper, Wrapper } from "./style";


export default function Home() {

    return (
        <HomeContainer>
            
            <Wrapper>
                <SearchWrapper>
                    <SearchBar />
                </SearchWrapper>
            </Wrapper>

            <InitialMovieList />
        </HomeContainer>
    );
}