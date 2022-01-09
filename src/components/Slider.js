import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  SlideContainer,
  IndividualSlide,
  MainContainer,
} from "./styles/ProjectSlider.styled";
import {
  homeSS,
  loginSS,
  searchSS,
  vendorSS,
} from "../assets/screenshots/MKScreenshots/index";
const slideImages = [
  {
    url: homeSS,
  },
  {
    url: loginSS,
  },
  {
    url: vendorSS,
  },
  {
    url: searchSS,
  },
];

const Slider = () => {
  return (
    <MainContainer>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <SlideContainer key={index}>
            <IndividualSlide
              style={{ backgroundImage: `url(${slideImage.url})` }}
            ></IndividualSlide>
          </SlideContainer>
        ))}
      </Slide>
    </MainContainer>
  );
};

export default Slider;
