import { Fragment, memo, useState } from "react";
import styled, { css } from "styled-components";
import { useMovieList } from "../../../../../hooks";
import GenreButton from "./components/GenreButton";

import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

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
    const { genreList } = useMovieList();
    const [openItems, setOpenItems] = useState(false);

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
                {genreList?.genres?.map((genre, key)=>(
                    <Fragment key={key}>
                        <GenreButton genre={genre} />
                    </Fragment>
                ))}
            </List>
        </Content>
        
    );
}

export default memo(GenreList);