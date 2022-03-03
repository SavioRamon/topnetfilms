
import styled from "styled-components";
import Film from "./Film";


type ListResults = {
    title: string;
    release_date: string;
    poster_path: string;
};

type Props = {
    listResults: ListResults[];
}

const ScrollListContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
`;


export default function ScrollList({ listResults }: Props) {

    return (
        <ScrollListContainer>
            {listResults.map((filmInfo, key)=>(
                <Film filmInfo={filmInfo} key={key} />
            ))}
        </ScrollListContainer>
    );
};