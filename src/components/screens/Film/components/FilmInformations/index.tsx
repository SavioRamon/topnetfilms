import styled from "styled-components";
import { FilmImage } from "./components/FilmImage";
import { Informations } from "./components/Informations";

const Content = styled.section`
    padding: calc(1rem + 2vw) 0;
    width: 100%;
    height: min-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export function FilmInformations() {

    return (
        <Content>
            <FilmImage />
            <Informations />
        </Content>
    );

};