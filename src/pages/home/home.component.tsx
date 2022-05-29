import React, { FC } from "react";
import WrapperComponent from "../../components/wrapper/wrapper.component";
import Title from "../../components/title/title.component";

import image1 from "../../img/homepage-grid/1.jpg";
import image2 from "../../img/homepage-grid/2.jpg";
import image3 from "../../img/homepage-grid/3.jpg";
import image4 from "../../img/homepage-grid/4.jpg";
import { Gallery, GalleryItem, Image, Overlay } from "./home.styles";

const images = [image1, image2, image3, image4];

const Home: FC = () => {
  return (
    <WrapperComponent>
      <Title>Твой чайный дневник</Title>
      <Gallery>
        <Overlay></Overlay>
        {images.map((image, id) => (
          <GalleryItem id={id + 1} key={id}>
            <Image src={image} />
          </GalleryItem>
        ))}
      </Gallery>
    </WrapperComponent>
  );
};

export default Home;
