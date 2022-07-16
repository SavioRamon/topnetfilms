import styled from "styled-components";
import { useAppSelector } from "../../../../../store/hooks";
import UserImage from "./components/UserImage";

const Content = styled.div`
    padding: 1em 1em .3em 1em;
    font-size: calc(1rem + .6vw);
    display: flex;
    align-items: flex-end;
    border-bottom: .1em solid ${({theme})=>theme.gray};
    background-color: ${({theme})=>theme.backgroundSecondary};
`;

const Text = styled.span`
    margin-left: 1em;
    font-weight: bold;
`;


const TopContent = () => {

    const accountInfo = useAppSelector((state)=>state.user.accountInfo);

    return (
        <Content>
            {accountInfo &&
                <>
                    <UserImage image={ accountInfo.photoURL } />
                    <Text>{ accountInfo.displayName }</Text>
                </>
            }
        </Content>
    )
}

export default TopContent;