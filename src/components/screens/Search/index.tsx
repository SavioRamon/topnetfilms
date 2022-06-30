import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMovieList } from "../../../hooks";
import SearchBar from "../../common/SearchBar";
import GenreList from "./components/GenreList";
import { AsideContent, Container } from "./style";



const Search = () => {

    const { genreList, getGenreList } = useMovieList();

    useLayoutEffect(()=>{
        !genreList && getGenreList();
    }, []);

    return (
        <Container>
            <AsideContent>
                <SearchBar />
                {genreList &&
                    <GenreList />
                }
            </AsideContent>
            
            <Outlet />
        </Container>
    );
};

export default Search;