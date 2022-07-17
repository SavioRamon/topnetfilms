import { Fragment, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../../../../store/hooks";
import FilmFavorite from "./components/FilmFavorite";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Title = styled.h2`
    width: min-content;
    margin-top: .5em;
    font-size: calc(1rem + .8vw);
`;

const ButtonShowAll = styled.button`
    padding: .5em;
    font-size: calc(1rem + .5vw);
    border: none;
    font-weight: bold;
    border-top: .1em solid ${({theme})=>theme.blue};
    border-bottom: .1em solid ${({theme})=>theme.blue};
    border-right: .3em solid ${({theme})=>theme.blue};
    border-left: .3em solid ${({theme})=>theme.blue};
    border-radius: 1em;
    cursor: pointer;
`;

const FavoriteList = () => {
    const { favoriteList } = useAppSelector((state)=>state.user);
    const [showAll, setShowAll] = useState(false);
    const maxPreview = 5;

    return (
        <Wrapper>
            <Title>
                Favorites
            </Title>

            {favoriteList &&
                <List>
                    {favoriteList.map((film, key)=>{
                        if(!showAll && ((key + 1) <= maxPreview)) return (
                            <Fragment key={key}>
                                <FilmFavorite filmInfo={film} />
                            </Fragment>
                        )
                        else if(showAll) return (
                            <Fragment key={key}>
                                <FilmFavorite filmInfo={film} />
                            </Fragment>
                        )
                    })}
                </List>
            }

            {!showAll && favoriteList && favoriteList.length > maxPreview &&
                <ButtonShowAll onClick={()=>setShowAll(!showAll)}>
                    Show All
                </ButtonShowAll>
            }
        </Wrapper>
        
    )
}

export default FavoriteList;