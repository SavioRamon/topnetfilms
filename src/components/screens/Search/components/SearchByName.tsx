import { Fragment, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchByFilmNameReq } from "../../../../store/ducks/filmList";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { Wrapper } from "../style";
import FilmListResults from "./FilmListResults";
import TextTotalResults from "./TextTotalResults";


const SearchByName = () => {

    const [searchParams] = useSearchParams();
    const {searchResults, loading} = useAppSelector(state=>state.filmList);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        const name = searchParams.get("q");
        const page = searchParams.get("page");
        const query = `query=${name}&page=${page}`;

        dispatch(searchByFilmNameReq(query));
    }, [searchParams, dispatch]);

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