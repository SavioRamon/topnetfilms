import { Fragment, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../../hooks";
import { Wrapper } from "../style";
import FilmListResults from "./FilmListResults";
import TextTotalResults from "./TextTotalResults";


const SearchByGenre = () => {

    const { searchResults, getGenreResults, loading } = useMovieList();
    const { query } = useParams();

    useLayoutEffect(()=>{
        if(query) {
            const queryConverted = decodeURI(query.replaceAll(" ", ","));
            getGenreResults(queryConverted);
        }
    }, [query]);

    return (
        <Wrapper>
            {!loading && searchResults &&
                <Fragment>
                    <TextTotalResults total={searchResults.total_results} />
                    <FilmListResults />
                </Fragment>
            }
        </Wrapper>
    );
};

export default SearchByGenre;
