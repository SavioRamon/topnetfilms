import styled from "styled-components";

type FilmProps = {
    filmInfo: {
        title: string;
        release_date: string;
        poster_path: string;
    };
}

const FilmContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FilmImage = styled.img`
    width: calc(5rem + 7vw);
    height: calc(5rem + 12vw);
    display: block;
`;

const FilmBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Film({ filmInfo }: FilmProps) {
    return (
        <FilmContainer>
            <FilmImage src={`https://image.tmdb.org/t/p/w200${filmInfo.poster_path}`} alt="" />
        </FilmContainer>
    );
};
