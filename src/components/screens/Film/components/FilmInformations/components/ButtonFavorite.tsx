import styled, { css } from "styled-components";

import { MdOutlineFavoriteBorder, MdOutlineFavorite} from "react-icons/md";
import { useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { addFavoriteFilmReq, getFavoriteListReq, removeFavoriteFilmReq } from "../../../../../../store/ducks/user";
import { FilmTypes } from "../../../../../../store/ducks/filmList";


const Button = styled.button`
    margin-top: .5em;
    padding: 0 1.5em 1em 1.5em;
    font-size: calc(1rem + .5vw);
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    cursor: pointer;
    position: relative;
`;

type IconProps = {
    favorite: boolean;
};

const IconWrapper = styled.div`
    font-size: 2em;
    display: flex;

    ${(props: IconProps)=>{
        if(props.favorite) return css`
            color: ${({theme})=>theme.red};
        `;
        else return css`
            color: ${({theme})=>theme.gray};
        `
    }}
`;

const Text = styled.p`
    position: absolute;
    bottom: 0;
`

type Props = {
    filmID: number;
}

const ButtonFavorite = ({ filmID }: Props) => {
    const [isFavorite, setIsFavorite] = useState<boolean | undefined>();

    const { favoriteList, accountInfo, loading } = (useAppSelector((state) => state.user));
    const film = useAppSelector((state) => state.filmList.singleFilm) as FilmTypes;
    const dispatch = useAppDispatch();


    const addFavoriteFilmToDb = (uid: string) => {
        const data = {
            userID: uid,
            film
        }
        dispatch(addFavoriteFilmReq(data));
    }

    const removeFavoriteFilmFromDb = (uid: string) => {
        const data = {
            userID: uid,
            film
        }
        dispatch(removeFavoriteFilmReq(data));
    }


    const changeFavorite = () => {
        if(accountInfo) {
            if(!isFavorite === true) {
                addFavoriteFilmToDb(accountInfo.uid);
            } else {
                removeFavoriteFilmFromDb(accountInfo.uid);
            }
        }
        else {
            alert("you must be logged");
        }

        accountInfo && setIsFavorite(!isFavorite);
    };


    useLayoutEffect(()=>{
        if(!favoriteList && accountInfo) {
            dispatch(getFavoriteListReq(accountInfo.uid));
        }
    }, [favoriteList, dispatch, accountInfo]);

    useLayoutEffect(()=>{
        if(accountInfo && favoriteList) {
            for(const filmFavorite of favoriteList) {
                if(filmFavorite.id === filmID) {
                    setIsFavorite(true);
                    break;
                }
            }
        }
    }, [favoriteList]);

    return (
        <>
        {!loading &&
            <Button onClick={changeFavorite}>
                <IconWrapper favorite={isFavorite? true : false}>
                    {isFavorite?
                        <MdOutlineFavorite />
                        :
                        <MdOutlineFavoriteBorder />
                    }
                </IconWrapper>
                <Text>{isFavorite? "Unfavorite" : "Favorite"}</Text>
            </Button>
        }
        </>
        
    );
}

export default ButtonFavorite;