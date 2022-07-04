import { Fragment, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchByFilmGenreReq } from "../../../../store/ducks/filmList";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { Wrapper } from "../style";
import FilmListResults from "./FilmListResults";
import TextTotalResults from "./TextTotalResults";


const SearchByGenre = () => {
    const [searchParams] = useSearchParams();
    const {searchResults, loading} = useAppSelector(state=>state.filmList);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        const genres = searchParams.get("q");
        const page = searchParams.get("page");
        const query = `with_genres=${genres}&page=${page}`;
        
        dispatch(searchByFilmGenreReq(query));
    }, [dispatch, searchParams]);

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
