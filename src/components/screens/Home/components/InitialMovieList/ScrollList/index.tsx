import { useLayoutEffect, useRef, useState } from "react";
import { 
    ButtonScroll, 
    ScrollContent,
    ScrollListContainer 
} from "./style";
import Film from "../Film";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


type ListResults = {
    title: string;
    release_date: string;
    poster_path: string;
    id: number;
};

type Props = {
    listResults: ListResults[];
}

export default function ScrollList({ listResults }: Props) {

    const [activeButtons, setActiveButtons] = useState({
        leftButton: false,
        rightButton: true
    });

    const scrollSpacingValue = (window.innerWidth / 2);

    const scrollListRef = useRef<HTMLUListElement>(null);

    function scrollingList(value: number) {
        // this function will change the value of the scroll margin in the movie list
        
        const divScroll = scrollListRef.current;

        if(divScroll !== null) {
            const newScrollValue = divScroll.scrollLeft + value;

            const maxScrollValueLeft = (divScroll.scrollWidth - divScroll.clientWidth);

            if(newScrollValue <= 0) {
                setActiveButtons({...activeButtons, leftButton: false})
            
            } else if(newScrollValue >= maxScrollValueLeft) {
                setActiveButtons({...activeButtons, rightButton: false})
            
            } else {
                setActiveButtons({leftButton: true, rightButton: true})
            };

            divScroll.scrollLeft = newScrollValue;
        };
    }

    useLayoutEffect(()=>{
        if(scrollListRef.current !== null) {
            scrollListRef.current.scrollLeft = 0;
        }
    }, []);

    return (
        <ScrollContent>

            {activeButtons.leftButton &&
                <ButtonScroll left onClick={()=>{
                    scrollingList(-scrollSpacingValue);
                }}>
                    <IoIosArrowBack />
                </ButtonScroll>
            }

            <ScrollListContainer ref={scrollListRef}>

                {listResults.map((filmInfo, key)=>(
                     <li key={key} >
                        <Film filmInfo={filmInfo} key={key} />
                    </li>    
                    
                ))}

            </ScrollListContainer>

            {activeButtons.rightButton &&
                <ButtonScroll right onClick={()=>{
                    scrollingList(scrollSpacingValue);
                }}>
                    <IoIosArrowForward />
                </ButtonScroll>
            }
        </ScrollContent>
        
    );
};