import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import GenreButton from "./components/GenreButton";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { genreListReq } from "../../../../../store/ducks/filmList";

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const List = styled.ul`
    padding: .3em 0;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    overflow: auto;
    font-size: calc(1rem + .5vw);
    ${(props: {open: boolean})=>{
        if(props.open) return css`
            height: calc(10rem + 40vh);
        `;
        else return css`
            display: none;

        `
    }}
`;

const OpenItems = styled.button`
    padding: .6em 0 .6em 0;
    width: 100%;
    cursor: pointer;
    font-size: calc(1.1rem + .6vw);
    border: none;
    text-align: start;
    background-color: inherit;
    display: flex;
    align-items: center;
`;

const GenreList = () => {

    const genreList = useAppSelector(state=>state.filmList.genreList);
    const [openItems, setOpenItems] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        !genreList && dispatch(genreListReq());
    }, []);

    return (
        <Content>
            <OpenItems onClick={()=>setOpenItems(!openItems)}>
                {openItems?
                    <IoMdArrowDropdown />
                    :
                    <IoMdArrowDropright />
                }
                Genres
            </OpenItems>

            <List open={openItems}>
                {genreList?.genres &&
                    <GenreButton />
                }
            </List>
        </Content>
        
    );
}

export default GenreList;