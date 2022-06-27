import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../hooks";
import { Container } from "./style";



export default function Search() {

    const { getSearchResults, searchResults } = useMovieList();
    const { query } = useParams();
    

    useEffect(()=>{
        if(query) getSearchResults(query);
    }, []);

    return (
        <Container>
            
        </Container>
    );
};