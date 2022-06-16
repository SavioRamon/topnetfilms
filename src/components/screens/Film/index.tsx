import { Fragment, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../hooks";
import { Content, FilmInformations, LargeImage } from "./style";


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
                <Content>
                    <LargeImage src={`https://image.tmdb.org/t/p/original/${singleFilm.poster_path}`} alt={singleFilm.title} />
                    <FilmInformations>
                        
                    </FilmInformations>
                </Content>
            }
        </Fragment>
    );
};
