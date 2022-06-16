import { Fragment, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../hooks";
import { FilmInformations } from "./components/FilmInformations";


export default function Film() {

    const { singleFilm, getSingleFilm } = useMovieList();
    const { id } = useParams();

    useLayoutEffect(()=>{
        
        const fetchFilmId = () => {
            if(id) {
                getSingleFilm(id);
            };
        };

        fetchFilmId();
    }, []);

    return (
        <Fragment>
            {singleFilm &&
                <FilmInformations />
            }
        </Fragment>
    );
};
