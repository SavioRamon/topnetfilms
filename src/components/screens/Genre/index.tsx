import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useMovieList } from "../../../hooks";
import FilmListResults from "../../common/FilmListResults";

const Container = styled.section`
    width: 100%;
    display: flex;
`;

const Genre = () => {

    const { searchResults, getGenreResults, loading } = useMovieList();
    const { query } = useParams();

    useLayoutEffect(()=>{
        if(query) {
            const queryConverted = decodeURI(query.replaceAll(" ", ","));
            getGenreResults(queryConverted);
        }
    }, []);

    return (
        <Container>
            {!loading && searchResults &&
                <FilmListResults />
            }
        </Container>
    );
};

export default Genre;
