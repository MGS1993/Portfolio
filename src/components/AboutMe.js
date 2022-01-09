import { AboutMeContainer, Intro, StyledH1 } from "./styles/AboutMe.styled";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Intro>
        <StyledH1>Programming: My lifelong journey.</StyledH1>
        <p>
          A self-starter with drive and ambition in a continuous mission to
          learn new things. My goal is to build functionally elegant websites
          with the newest and best tech stacks. I have a serious passion for
          self improvement and learning something new with each project.
        </p>
      </Intro>
    </AboutMeContainer>
  );
};

export default AboutMe;
