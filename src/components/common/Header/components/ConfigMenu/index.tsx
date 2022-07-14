import { Fragment, useState } from "react";
import { ButtonConfig, Container, HiddenScreen, UserImage } from "./style";

import images from "../../../../../assets/images";
import OpenConfig from "./components/OpenConfig";
import { useAppSelector } from "../../../../../store/hooks";

const ConfigBox = (): JSX.Element => {
    const { accountInfo, loading } = useAppSelector(state=>state.user);
    const [openConfig, setOpenConfig] = useState(false);

    const changeConfigDisplay = () => {
        if(!loading) {
            setOpenConfig(!openConfig);
        }
    };

    const returnImage = () => {
        if(!loading && accountInfo?.photoURL) {
            return accountInfo.photoURL;
        } else {
            return  images.userDefault;
        }
    };
    
    return (
        <Container>
            <ButtonConfig onClick={changeConfigDisplay}>
                <UserImage
                    src={returnImage()}
                    alt="your user image" 
                />
            </ButtonConfig>
            

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
