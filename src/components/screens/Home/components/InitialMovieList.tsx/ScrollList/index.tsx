import { useLayoutEffect, useRef, useState } from "react";
import { 
    ButtonScroll, 
    ScrollContent, 
    ScrollListContainer 
} from "./style";
import Film from "../Film";


type ListResults = {
    title: string;
    release_date: string;
    poster_path: string;
};

type Props = {
    listResults: ListResults[];
}

export default function ScrollList({ listResults }: Props) {

    const [activeButtons, setActiveButtons] = useState({
        leftButton: false,
        rightButton: true
    });

    const scrollSpacingValue = (window.innerWidth / 3);

    const scrollListRef = useRef<HTMLDivElement>(null);


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

                </ButtonScroll>
            }

            <ScrollListContainer ref={scrollListRef}>

                {listResults.map((filmInfo, key)=>(
                    <Film filmInfo={filmInfo} key={key} />
                ))}

            </ScrollListContainer>

            {activeButtons.rightButton &&
                <ButtonScroll right onClick={()=>{
                    scrollingList(scrollSpacingValue);
                }}>
                    
                </ButtonScroll>
            }
        </ScrollContent>
        
    );
};