import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchByFilmNameReq } from "../../../../store/ducks/filmList";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { Wrapper } from "../style";
import FilmListResults from "./FilmListResults";
import TextTotalResults from "./TextTotalResults";


const SearchByName = () => {

    const {searchResults, loading} = useAppSelector(state=>state.filmList);
    const dispatch = useAppDispatch();
    const { query } = useParams();

    useEffect(()=>{
        if(query) dispatch(searchByFilmNameReq(query));
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
}

export default SearchByName;