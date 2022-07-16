import styled from "styled-components";
import images from "../../../../../../assets/images";


const Image = styled.img`
    width: calc(3rem + 6vw);
    height: calc(3rem + 6vw);
`;



const UserImage = ({ image }: {image: string | null}) => {
    return (
        <Image src={image? image : images.userDefault} alt="your user image"/>
    )
}

export default UserImage;
