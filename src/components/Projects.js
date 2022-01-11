import {
  ProjectBriefing,
  ProjectContainer,
  ProjectListing,
  ProjectScreens,
  StackContainer,
  ImageContainer,
} from "./styles/Projects.styled";
import Slider from "./Slider";

import ButtonLink from "./ButtonLink";
import {
  TallyImages,
  MovieKnightsImages,
  PortfolioImages,
} from "../util/SliderImageSets";
import TechText from "./TechText";

const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectListing bgColor="#6969d429">
        <ProjectBriefing>
          <h1>MovieKnight</h1>
          <h3>Project Brief</h3>
          <p>
            This was my attempt at a React-Native app that lets its users
            quickly determine where to stream popular TV shows and movies.
            Currently, it also has a WIP reminder of new episodes via expo push
            notifications.
          </p>
          <StackContainer>
            <TechText text="React Native" />
            <TechText text="MongoDB" />
            <TechText text="CSS3" />
            <TechText text="NodeJS" />
            <TechText text="Expo" />
            <TechText text="Express" />
            <TechText text="Authentication" />
          </StackContainer>
          <ButtonLink
            href="https://github.com/MGS1993/MovieKnight-React-Native"
            width="200px"
            title="Github Repo"
          />
        </ProjectBriefing>
        <ProjectScreens>
          <Slider imageSet={MovieKnightsImages} />
        </ProjectScreens>
      </ProjectListing>

      <ProjectListing bgColor="#d4ebef">
        <ProjectBriefing>
          <h1>Tally</h1>
          <h3>Project Brief</h3>
          <p>
            A mobile-centric app I created to help deobfuscate shared expenses.
            This is a full-stack app utilizing MongoDB.
          </p>
          <StackContainer>
            <TechText text="React" />
            <TechText text="MongoDB" />
            <TechText text="CSS3" />
            <TechText text="Styled Components" />
            <TechText text="NodeJS" />
            <TechText text="Express" />
          </StackContainer>
          <ButtonLink
            href="https://github.com/MGS1993/Tally"
            width="200px"
            title="Github Repo"
          />
        </ProjectBriefing>
        <ProjectScreens>
          <Slider imageSet={TallyImages} />
        </ProjectScreens>
      </ProjectListing>

      <ProjectListing bgColor="#ebd4ab">
        <ProjectBriefing>
          <h1>Portfolio</h1>
          <h3>Project Brief</h3>
          <p>
            A portfolio website created to showcase my current and future
            projects.
          </p>
          <StackContainer>
            <TechText text="React" />
            <TechText text="CSS3" />
            <TechText text="Styled Components" />
            <TechText text="Framer Motion" />
          </StackContainer>
          <ButtonLink
            href="https://github.com/MGS1993/Portfolio"
            width="200px"
            title="Github Repo"
          />
        </ProjectBriefing>
        <ProjectScreens>
          <ImageContainer>
            <img
              src={PortfolioImages[0]}
              alt="Homepage screenshot of my portfolio site"
            />
          </ImageContainer>
        </ProjectScreens>
      </ProjectListing>
    </ProjectContainer>
  );
};

export default Projects;
