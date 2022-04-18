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
import bg from "../assets/bg.avif";
import ButtonLink from "./ButtonLink";
import resume from "../assets/Manuel_Guzman_Resume.pdf";
import { FlexRow } from "./styles/Flex.styled";

const Landing = () => {
  return (
    <LandingContainer backGroundImage={bg}>
      <SlideIn>
        <BlurbContainer>
          <FaLaptopCode size={180} />
          <TextContainer>
            <LargeFont>Hi! I'm Manuel Guzman</LargeFont>
            <StyledP size="1.8rem">
              A <Marked>full-stack developer</Marked> based in Houston, Texas.
            </StyledP>
            <FadeIn>
              <FlexRow>
                <ButtonLink
                  href="https://github.com/MGS1993"
                  title="My Github"
                />
                <ButtonLink title="Resume" href={resume} download />
              </FlexRow>
            </FadeIn>
          </TextContainer>
        </BlurbContainer>
      </SlideIn>
    </LandingContainer>
  );
};

export default Landing;
