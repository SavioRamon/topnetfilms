import { Fragment, useEffect } from "react";
import styled from "styled-components";
import { homeListReq } from "../../../../../store/ducks/filmList";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import metrics from "../../../../../styles/metrics";
import ScrollList from "./ScrollList";


const InitialMovieListContainer = styled.div`
    width: 100%;
`;

const ListTitle = styled.h2`
    font-size: calc(1rem + 0.7vw);
    margin-top: ${metrics.largeSpacingSize};
    margin-left: ${metrics.extraSmallSpacingSize};
    margin-bottom: ${metrics.extraSmallSpacingSize};
    text-indent: 1em;
`;


export default function InitialMovieList() {
    const homeList = useAppSelector(state=>state.filmList.homeList);
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        dispatch(homeListReq());
    }, [dispatch]);

    return (
        <InitialMovieListContainer>

            {homeList.map((listItem, key) => {
                if(listItem.data) {
                    return (
                        <Fragment key={key}>
                            <ListTitle>{listItem.title}</ListTitle>
                            <ScrollList listResults={listItem.data.results} />
                        </Fragment>
                    );
                }   
            })}

        </InitialMovieListContainer>
    );
}