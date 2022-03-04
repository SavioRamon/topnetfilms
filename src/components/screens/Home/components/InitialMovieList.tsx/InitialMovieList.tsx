import { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useMovieList } from "../../../../../hooks";
import metrics from "../../../../../styles/metrics";
import ScrollList from "./ScrollList";


const InitialMovieListContainer = styled.div`
    width: 100%;
`;

const ListTitle = styled.h2`
    font-size: calc(1rem + 0.7vw);
    margin-top: ${metrics.largeSpacingSize};
    margin-left: ${metrics.extraSmallSpacingSize};
`;


export default function InitialMovieList() {
    const { homeList, getHomeListDataFromApi } = useMovieList();
    
    useEffect(()=>{
        getHomeListDataFromApi();
    }, []);

    return (
        <InitialMovieListContainer>

            {homeList && homeList.map((listItem, key) => (
                <Fragment key={key}>

                    <ListTitle>{listItem.title}</ListTitle>

                    <ScrollList listResults={listItem.data.results} />

                </Fragment>
            ))}

        </InitialMovieListContainer>
    );
};