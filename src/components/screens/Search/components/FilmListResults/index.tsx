import { Fragment } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../../store/hooks";
import ListItem from "./components/ListItem";

const ListWrapper = styled.ul`
    flex: 1;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`;

const FilmListResults = () => {

    const searchResults = useAppSelector(state=>state.filmList.searchResults);

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
