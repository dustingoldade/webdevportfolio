import { TechIconsSelect } from "../hero/TechIcons";
import { GithubIcon } from "../hero/SMIcons";
import {
  ProjectTitle,
  ProjectContainer,
  ProjectContainerInner,
} from "../styled/Projects.styled";
import { PrimaryButton } from "../styled/Buttons.styled";
import { PText } from "../styled/Texts.styled";
import { openInNewTab } from "../../locals/utilities";

const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectContainerInner>
        <ProjectTitle>{project.title}</ProjectTitle>
        <PText>{project.text}</PText>
        <ProjectTitle>Tech Used:</ProjectTitle>
        <TechIconsSelect techs={project.tech} />
      </ProjectContainerInner>
      <ProjectContainerInner>
        <ProjectTitle>View Project:</ProjectTitle>

        <PrimaryButton
          onClick={() => {
            openInNewTab(project.siteLink);
          }}
        >
          {project.siteTitle}
        </PrimaryButton>
        <ProjectTitle>View Code:</ProjectTitle>
        <a href={project.gitHubLink} target="_blank">
          <GithubIcon />
        </a>
      </ProjectContainerInner>
    </ProjectContainer>
  );
};

export default Project;
