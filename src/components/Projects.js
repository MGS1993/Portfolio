import {
  ProjectBriefing,
  ProjectContainer,
  ProjectListing,
  ProjectScreens,
  StackContainer,
} from "./styles/Projects.styled";
import Slider from "./Slider";

import ButtonLink from "./ButtonLink";
import { TallyImages, MovieKnightsImages } from "../util/SliderImageSets";
import TechText from "./TechText";

const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectListing>
        <ProjectBriefing>
          <h1>MovieKnights</h1>
          <h3>Project Brief</h3>
          <p>
            This was my attempt at a React-Native app that let it's users
            quickly determine where to stream popular TV shows and Movies.
            Currently it also has a WIP reminder of new episodes via expo push
            notifications.
          </p>
          <StackContainer>
            <TechText text="React Native" />
            <TechText text="MongoDB" />
            <TechText text="CSS3" />
            <TechText text="NodeJS" />
            <TechText text="Expo" />
            <TechText text="Express" />
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

      <ProjectListing>
        <ProjectBriefing>
          <h1>Tally</h1>
          <h3>Project Brief</h3>
          <p>
            A small app I made to help deobfuscate shared expenses. A fullstack
            app utilizing MongoDB.
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
    </ProjectContainer>
  );
};

export default Projects;