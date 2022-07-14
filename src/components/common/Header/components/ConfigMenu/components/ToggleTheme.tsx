import { useTheme } from "../../../../../../hooks";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import styled from "styled-components";
import ButtonContent from "./ButtonContent";


const Content = styled.div`
    width: 100%;
`;

type Props = {
    children: string;
}

export default function ToggleTheme(props: Props) {

    const { darkThemeActived, setDarkTheme } = useTheme();

    function changeTheme(value: boolean) {
        setDarkTheme(value);
    }

    return (
        <Content>
            <ButtonContent
                icon={darkThemeActived? <BsFillMoonFill /> : <BsFillSunFill />}
                action={()=>changeTheme(!darkThemeActived)}
            >
                {props.children}
            </ButtonContent>
        </Content>
    );
}
