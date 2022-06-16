import styled from "styled-components";
import { useMovieList } from "../../../../../../hooks";


const LargeImage = styled.img`
    margin-left: calc(1rem + 1vw);
    width: calc(5rem + 27vw);
    height: calc(5rem + 32vw);

    @media (max-width: 450px) {
        margin-left: 0;
        width: 95vw;
        height: 98vw;
    };
`;

export function FilmImage() {

    let { singleFilm } = useMovieList();

    return (
        <LargeImage
            src={`https://image.tmdb.org/t/p/original/${singleFilm?.poster_path}`}
            alt={singleFilm?.title}
        />
    );
};
