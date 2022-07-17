import { useEffect } from "react";
import styled from "styled-components";
import { getFavoriteListReq } from "../../../store/ducks/user";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import MainContent from "./components/MainContent";
import TopContent from "./components/TopContent";


const Container = styled.div`
    width: 100%;
`;


const Profile = () => {

    const { accountInfo, loading } = useAppSelector((state)=>state.user);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        accountInfo && dispatch(getFavoriteListReq(accountInfo.uid));
    }, [dispatch, accountInfo]);
    
    return (
        <Container>
            {!loading && accountInfo &&
                <>
                    <TopContent />
                    <MainContent />
                </>
            }
        </Container>
    )
}

export default Profile;