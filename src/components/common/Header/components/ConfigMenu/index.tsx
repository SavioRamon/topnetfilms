import { Fragment, useState } from "react";
import { Container, HiddenScreen, UserImage } from "./style";

import images from "../../../../../assets/images";
import OpenConfig from "./components/OpenConfig";
import ButtonContent from "./components/ButtonContent";
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
