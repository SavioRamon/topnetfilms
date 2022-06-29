import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../hooks";
import FilmListResults from "../../common/FilmListResults";
import { Container } from "./style";



export default function Search() {

    const { getSearchResults, searchResults, loading } = useMovieList();
    const { query } = useParams();
    

    useLayoutEffect(()=>{
        if(query) getSearchResults(query);
    }, []);

    return (
        <Container>
            {!loading && searchResults && 
                <FilmListResults />
            }
        </Container>
    );
}