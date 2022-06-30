import { Fragment, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../../hooks";
import FilmListResults from "./FilmListResults";


const SearchByName = () => {

    const { getSearchResults, searchResults, loading } = useMovieList();
    const { query } = useParams();
    

    useLayoutEffect(()=>{
        if(query) getSearchResults(query);
    }, [query]);

    return (
        <Fragment>
            {!loading && searchResults &&
                <FilmListResults />
            }
        </Fragment>
    );
}

export default SearchByName;