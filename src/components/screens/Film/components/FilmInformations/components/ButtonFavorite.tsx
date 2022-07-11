import styled, { css } from "styled-components";

import { MdOutlineFavoriteBorder, MdOutlineFavorite} from "react-icons/md";
import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "../../../../../../store/hooks";


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
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const favoriteList = (useAppSelector((state) => state.user.favoriteList));

    useLayoutEffect(()=>{
        if(favoriteList) {
            for(const filmFavorite of favoriteList) {
                if(filmFavorite.id === filmID) {
                    setIsFavorite(true);
                    break;
                }
            }
        }
    }, [favoriteList]);

    return (
        <Button onClick={()=>setIsFavorite(!isFavorite)}>
            <IconWrapper favorite={isFavorite}>
                {isFavorite?
                    <MdOutlineFavorite />
                    :
                    <MdOutlineFavoriteBorder />
                }
            </IconWrapper>
            <Text>{isFavorite? "Unfavorite" : "Favorite"}</Text>
        </Button>
    );
}

export default ButtonFavorite;