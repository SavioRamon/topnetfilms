import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../../../../hooks";
import { AuthButton, BottomConfig, ConfigContent, Container, UserImage } from "./style";

import images from "../../../../../assets/images";

const ConfigBox = (): JSX.Element => {

    const { userData, disconnect } = useAuthentication();

    const [openConfig, setOpenConfig] = useState(false);

    const handleOpenConfig = () => {
        setOpenConfig(!openConfig);
    };

    const disconnecting = () => {
        handleOpenConfig();
        disconnect();
    };


    const returnImage = () => {
        return userData?.photoURL? userData.photoURL : images.userDefault;
    }
    
    return (
        <Container>
            
            <UserImage
                src={returnImage()}
                alt="your user image"
                onClick={handleOpenConfig}/>

            {openConfig &&
                <ConfigContent>
                    <BottomConfig>
                        {userData?
                            <AuthButton onClick={disconnecting}>
                                Sign out
                            </AuthButton>

                            :

                            <Fragment>
                                <Link to="login">
                                    <AuthButton onClick={handleOpenConfig}>Login</AuthButton>
                                </Link>

                                <Link to="register">
                                    <AuthButton onClick={handleOpenConfig}>Sign in</AuthButton>
                                </Link>
                            </Fragment>
                        }
                        

                        
                    </BottomConfig>   
                </ConfigContent>
            }
        </Container>

        
    );
};

export default ConfigBox;
