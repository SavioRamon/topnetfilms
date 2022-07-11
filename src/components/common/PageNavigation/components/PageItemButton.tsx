
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

type ButtonProps = {
    isClickable: boolean;
    isActivated: boolean;
};

const ItemWrapper = styled.li`
    font-size: calc(1rem + .5vw);
    margin: .1em;
`;

const Span = styled.span`
    padding: .3em .8em;
    font-size: inherit;
    cursor: default;
    border: .1vw solid transparent;
    display: block;
`;

const Button = styled.button`
    padding: .3em .8em;
    font-size: inherit;
    border: .1vw solid transparent;

    ${(props: ButtonProps)=>{
        if(props.isActivated) return css`
            background-color: ${({theme})=>theme.blue};
            cursor: pointer;
            color: ${({theme})=>theme.white};
        `;
        if(props.isClickable) return css`
            cursor: pointer;
            &:hover {
                border-color: ${({theme})=>theme.textColor};
            }
        `
    }}
`;

type Props = {
    value: string | number;
}

const PageItemButton = ({ value }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [isActivated] = useState(()=>{
        const pageQuery = searchParams.get("page");
        let page = pageQuery? pageQuery : "1";

        if(isNaN(parseInt(page))) page = "1";
        
        return page === value.toString();
    });

    const changePageParameter = () => {
        searchParams.set("page", value.toString())
        setSearchParams(searchParams);
    };


    return (
        <ItemWrapper>
            {typeof value === "number"?
                <Button
                    isClickable={typeof value === "number"}
                    isActivated={isActivated}
                    onClick={changePageParameter}
                >
                    { value }
                </Button>

                :
                <Span>
                    { value }
                </Span>

            }
        </ItemWrapper>
        


    );   
}

export default PageItemButton;