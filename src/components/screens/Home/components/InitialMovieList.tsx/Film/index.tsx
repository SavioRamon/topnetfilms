import { FilmContainer, FilmImage } from "./style";

type FilmProps = {
    filmInfo: {
        title: string;
        release_date: string;
        poster_path: string;
    };
}

export default function Film({ filmInfo }: FilmProps) {
    return (
        <FilmContainer>
            <FilmImage src={`https://image.tmdb.org/t/p/w200${filmInfo.poster_path}`} alt="" />
        </FilmContainer>
    );
};
