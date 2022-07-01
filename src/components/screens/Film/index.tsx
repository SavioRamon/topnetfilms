import { Fragment, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { FilmInformations } from "./components/FilmInformations";
import { singleFilmReq } from "../../../store/ducks/filmList";


export default function Film() {
    const filmList = useAppSelector(state=>state.filmList);
    const dispatch = useAppDispatch();

    const { id } = useParams();

    useLayoutEffect(()=>{
        const fetchFilmId = () => {
            id && dispatch(singleFilmReq(id));
        };

        fetchFilmId();
    }, []);

    return (
        <Fragment>
            {filmList.singleFilm && !filmList.loading && 
                <FilmInformations />
            }
        </Fragment>
    );
}
