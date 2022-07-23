import { useEffect } from "react";
import styled from "styled-components";
import { getFavoriteListIDsReq, getFavoriteListReq } from "../../../store/ducks/user";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import MainContent from "./components/MainContent";
import TopContent from "./components/TopContent";


const Container = styled.div`
    width: 100%;
`;


const Profile = () => {

    const { accountInfo, loading, favoriteListIDs, favoriteList } = useAppSelector((state)=>state.user);
    const dispatch = useAppDispatch();

    useEffect(()=>{

        if(accountInfo && favoriteListIDs) {
            dispatch(getFavoriteListReq(favoriteListIDs));
        }

        else if(accountInfo && !favoriteListIDs){
            dispatch(getFavoriteListIDsReq(accountInfo.uid));
        }

    }, [dispatch, accountInfo, favoriteListIDs]);
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