import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieList } from "../../../hooks";
import { Content } from "./style";



export default function Film() {

    const { getSingleFilm } = useMovieList();
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
        <Content>

        </Content>
    );
};
