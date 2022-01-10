import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  SlideContainer,
  IndividualSlide,
  MainContainer,
} from "./styles/ProjectSlider.styled";

const Slider = ({ imageSet }) => {
  return (
    <MainContainer>
      <Slide>
        {imageSet.map((image, index) => (
          <SlideContainer key={index}>
            <IndividualSlide
              style={{ backgroundImage: `url(${image.url})` }}
            ></IndividualSlide>
          </SlideContainer>
        ))}
      </Slide>
    </MainContainer>
  );
};

export default Slider;
