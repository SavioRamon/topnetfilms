import styled from "styled-components";
import { useAuthentication } from "../../../../../../hooks";

import { UserImage } from "../style";

const Content = styled.div`
    padding: 1em 1em 1em .5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .1vw solid rgba(100, 100, 100, 0.3);
`;

const Text = styled.div`
    font-size: 1em;
`;


const UserInfos = ():JSX.Element => {

    const { userData, loading } = useAuthentication();

    const returnImage = () => {
        if(!loading) return userData?.photoURL? userData.photoURL : "";
    };

    return (
        <Content>
            <Text>{userData?.displayName}</Text>
            {!loading }
            <UserImage src={returnImage()} alt="your user image"/>
        </Content>
    );
};

export default UserInfos;