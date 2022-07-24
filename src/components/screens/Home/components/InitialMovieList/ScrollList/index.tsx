import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { 
    ButtonScroll, 
    ScrollContent,
    ScrollListContainer 
} from "./style";
import Film from "../Film";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FilmTypes } from "../../../../../../store/ducks/filmList";


type Props = {
    listResults: FilmTypes[];
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
            divScroll.scrollLeft = newScrollValue;
        }
    }

    useEffect(()=>{
        const scrollableElement = scrollListRef.current;
        if(scrollableElement) {
            const maxScrollValueLeft = scrollableElement.scrollWidth - scrollableElement.clientWidth;

            scrollableElement.onscroll = () => {
                // make buttons visible or not
                if(scrollableElement.scrollLeft <= 0) {
                    setActiveButtons({leftButton: false, rightButton: true});

                } else if(scrollableElement.scrollLeft >= maxScrollValueLeft) {
                    setActiveButtons({leftButton: true, rightButton: false});
                
                } else {
                    setActiveButtons({leftButton: true, rightButton: true});
                }
            }
        }
    }, [scrollListRef]);

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
}