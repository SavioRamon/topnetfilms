import { useTheme } from "../../../../hooks/useTheme";

import { ToggleThemeContainer, ToggleThemeIcon } from "./style";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";


export default function ToggleTheme() {

    const { darkThemeActived, toggleTheme } = useTheme();

    function changeTheme() {
        toggleTheme();
    }

    return (
        <ToggleThemeContainer onClick={changeTheme}>
            <ToggleThemeIcon darkThemeActived={darkThemeActived}>
                
                {darkThemeActived ? 
                    <BsFillMoonFill />
                :
                    <BsFillSunFill />
                }

            </ToggleThemeIcon>
        </ToggleThemeContainer>
    );
};
