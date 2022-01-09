import { FaLaptopCode } from "react-icons/fa";
import SlideIn from "../util/Animations/SlideInAnimation";
import FadeIn from "../util/Animations/FadeInAnimation";
import {
  LandingContainer,
  BlurbContainer,
  LargeFont,
  StyledP,
  TextContainer,
  Marked,
} from "./styles/Landingstyled";
import stairs from "../assets/stairs.jpg";
import ButtonLink from "./ButtonLink";

const Landing = () => {
  return (
    <LandingContainer backGroundImage={stairs}>
      <SlideIn>
        <BlurbContainer>
          <FaLaptopCode size={180} />
          <TextContainer>
            <LargeFont>Hi! I'm Manuel Guzman</LargeFont>
            <StyledP size="1.8rem">
              A <Marked>full-stack developer</Marked> based in Houston, Texas.
            </StyledP>
            <FadeIn>
              <ButtonLink href="https://github.com/MGS1993" title="My Github" />
            </FadeIn>
          </TextContainer>
        </BlurbContainer>
      </SlideIn>
    </LandingContainer>
  );
};

export default Landing;
