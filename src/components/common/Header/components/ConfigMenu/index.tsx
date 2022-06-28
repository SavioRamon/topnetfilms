import { Fragment, useState } from "react";
import { useAuthentication } from "../../../../../hooks";
import { Container, HiddenScreen, UserImage } from "./style";

import images from "../../../../../assets/images";
import OpenConfig from "./components/OpenConfig";
import ButtonContent from "./components/ButtonContent";

const ConfigBox = (): JSX.Element => {
    const { userData, loading } = useAuthentication();
    const [openConfig, setOpenConfig] = useState(false);

    const changeConfigDisplay = () => {
        if(!loading) {
            setOpenConfig(!openConfig);
        }
    };

    const returnImage = () => {
        if(!loading) return userData?.photoURL? userData.photoURL : images.userDefault;
    };
    
    return (
        <Container>
            <ButtonContent action={changeConfigDisplay}>
                <UserImage
                    src={returnImage()}
                    alt="your user image" 
                />
            </ButtonContent>
            

            { openConfig && 
                <Fragment>
                    <HiddenScreen onClick={changeConfigDisplay} />
                    <OpenConfig changeConfigDisplay={changeConfigDisplay} />
                </Fragment>
            }
        </Container>

    );
};

export default ConfigBox;
