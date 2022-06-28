import { Fragment } from "react";
import styled from "styled-components";
import { useMovieList } from "../../../hooks";
import ListItem from "./components/ListItem";

const ListWrapper = styled.ul`
    margin: 0 calc(2rem + 1.5vw);
    flex: 1;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`;

const FilmListResults = () => {

    const { searchResults } = useMovieList();

    return (
        <ListWrapper>
            {searchResults?.results.map((result, key)=>(
                <Fragment key={key}>
                    <ListItem Film={result} />
                </Fragment>
            ))}
        </ListWrapper>
    );
};

export default FilmListResults;
