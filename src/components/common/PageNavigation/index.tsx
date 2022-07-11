import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PageItemButton from "./components/PageItemButton";

const List = styled.ul`
    margin: 0 0 calc(.5rem + .5vw) 0;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`;

type Props = {
    totalPages: number;
}

const PageNavigation = ({ totalPages }: Props) => {
    const [searchParams] = useSearchParams();
    const [listValues, setListValues] = useState<Array<number | string>>([]);
    useEffect(()=>{
        const creatingListValues = () => {
            // This function will create a list of numbers that the user can click to navigate through the pages
       
            // the result limit of api is 500 pages

            // Getting the Current page
            const pageQuery = searchParams.get("page");
            const pageExist = pageQuery? parseInt(pageQuery) : 1;
        
            const currentPage = isNaN(pageExist)? 1 : pageExist;


            /*
                the following loop will set values in "temporaryList".
                the list will contain values less than "totalPages" and more than 1.
            */

            const temporaryList: Array<string | number> = [];
            currentPage !== 1 && currentPage !== totalPages && temporaryList.push(currentPage);
            for(let n = 1; n <= 3; n++) {
                if(n === 3) {
                    (currentPage + n < totalPages) && temporaryList.push("...");
                    (currentPage - n > 1) && temporaryList.unshift("...");
                    break;
                }
                (currentPage + n < totalPages) && temporaryList.push(currentPage + n);
                (currentPage - n > 1) && temporaryList.unshift(currentPage - n);
            }
            temporaryList.unshift(1);
            temporaryList.push(totalPages);

            setListValues(temporaryList);
        
        };
        creatingListValues();
    }, [searchParams]);

    return (
        <List>
            {listValues.map((value, key)=>(
                <Fragment key={key}>
                    <PageItemButton value={value} />
                </Fragment>
            ))}
        </List>
    )
};

export default PageNavigation;