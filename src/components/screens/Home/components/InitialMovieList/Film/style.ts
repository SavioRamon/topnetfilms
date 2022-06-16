import styled from "styled-components";
import metrics from "../../../../../../styles/metrics";

export const FilmContainer = styled.div`
    margin: 0 ${metrics.extraSmallSpacingSize};
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const FilmImage = styled.img`
    width: calc(7rem + 7vw);
    height: calc(7rem + 12vw);
`;