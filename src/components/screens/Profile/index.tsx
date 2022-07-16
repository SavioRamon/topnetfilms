import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import TopContent from "./components/TopContent";


const Container = styled.div`
    width: 100%;
`;


const Profile = () => {

    const user = useAppSelector((state)=>state.user);

    return (
        <Container>
            {!user.loading && user.accountInfo &&
                <>
                    <TopContent />
                </>
            }
        </Container>
    )
}

export default Profile;