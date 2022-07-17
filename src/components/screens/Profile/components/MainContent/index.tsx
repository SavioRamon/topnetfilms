import styled from "styled-components";
import FavoriteList from "./components/FavoriteList";

const Content = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;


const MainContent = () => {
    return (
        <Content>
            <FavoriteList />
        </Content>
    )
}

export default MainContent;