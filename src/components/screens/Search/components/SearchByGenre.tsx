import { Fragment, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../../hooks";
import FilmListResults from "./FilmListResults";


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
        <Fragment>
            {!loading && searchResults &&
                <FilmListResults />
            }
        </Fragment>
    );
};

export default SearchByGenre;
