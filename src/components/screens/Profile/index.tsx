import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFavoriteListIDsReq, getFavoriteListReq } from "../../../store/ducks/user";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Loading from "../../common/Loading";
import MainContent from "./components/MainContent";
import TopContent from "./components/TopContent";


const Container = styled.div`
    width: 100%;
`;


const Profile = () => {

    const { accountInfo, loading, favoriteListIDs } = useAppSelector((state)=>state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(()=>{

        if(accountInfo && favoriteListIDs) {
            dispatch(getFavoriteListReq(favoriteListIDs));
        }

        else if(accountInfo && !favoriteListIDs){
            dispatch(getFavoriteListIDsReq(accountInfo.uid));
        }

    }, [dispatch, accountInfo, favoriteListIDs]);

    useEffect(()=>{
        if(!loading && !accountInfo) {
            navigate(`/login`);
        }
    }, [loading, navigate, accountInfo]);
    return (
        <Container>
            {!accountInfo && loading &&
                <Loading />
            }
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