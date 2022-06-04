import { Fragment, useState } from "react";
import { useAuthentication } from "../../../../../hooks";
import { Container, HiddenScreen, UserImage } from "./style";

import images from "../../../../../assets/images";
import OpenConfig from "./components/OpenConfig";

const ConfigBox = (): JSX.Element => {
    const { userData, load } = useAuthentication();
    const [openConfig, setOpenConfig] = useState(false);

    const changeConfigDisplay = () => {
        if(!load) {
            setOpenConfig(!openConfig);
        };
    };

    const returnImage = () => {
        if(!load) return userData?.photoURL? userData.photoURL : images.userDefault;
    };
    
    return (
        <Container>
            <UserImage
                src={returnImage()}
                alt="your user image"
                onClick={changeConfigDisplay} 
            />

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
