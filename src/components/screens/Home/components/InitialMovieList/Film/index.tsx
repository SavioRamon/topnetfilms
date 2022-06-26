import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../../../../../utils/CONSTANTS";
import { FilmButton, FilmImage, FilmTitle } from "./style";

type FilmProps = {
    filmInfo: {
        title: string;
        release_date: string;
        poster_path: string;
        id: number;
    };
}

export default function Film({ filmInfo }: FilmProps) {

    const navigate = useNavigate();

    const viewFilmDetails = () => {
        navigate(`${CONSTANTS.ROUTES.FILM}/${filmInfo.id}`);
    };

    return (
        <FilmButton  onClick={viewFilmDetails}>
            <FilmImage src={`https://image.tmdb.org/t/p/w200${filmInfo.poster_path}`} alt={filmInfo.title} />
            <FilmTitle>
                {filmInfo.title}
            </FilmTitle>
        </FilmButton>
        
    );
};
