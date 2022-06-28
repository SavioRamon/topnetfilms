import styled from "styled-components";

const Image = styled.img`
    width: calc(7.5rem + 5vw);
    height: calc(10rem + 7.5vw);
`;

type Props = {
    image_url: string;
};

const ImageItem = ({ image_url }: Props) => {
    return (
        <Image 
            src={`https://image.tmdb.org/t/p/original/${image_url}`}
            alt="Image logo"
        />
    );
};

export default ImageItem;