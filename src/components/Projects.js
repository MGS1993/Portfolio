import {
  ProjectBriefing,
  ProjectContainer,
  ProjectListing,
  ProjectScreens,
  StackContainer,
} from "./styles/Projects.styled";
import Slider from "./Slider";

import { FaReact, FaCss3, FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import ButtonLink from "./ButtonLink";

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
            <FaReact color="#61DBFB" />
            <DiMongodb color="#6CA25D" />
            <FaCss3 color="#254BDD" />
            <FaNode color="#64995F" />
          </StackContainer>
          <ButtonLink
            href="https://github.com/MGS1993/MovieKnight-React-Native"
            width="200px"
            title="Github Repo"
          />
        </ProjectBriefing>
        <ProjectScreens>
          <Slider />
        </ProjectScreens>
      </ProjectListing>
    </ProjectContainer>
  );
};

export default Projects;
