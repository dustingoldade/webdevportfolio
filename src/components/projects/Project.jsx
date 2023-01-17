import { TechIconsSelect } from "../hero/TechIcons";
import { GithubIcon } from "../hero/SMIcons";
import {
  ProjectTitle,
  ProjectContainer,
  ProjectContainerInner,
  ProjectContainerPadding,
  ProjectDescriptionText,
} from "../styled/Projects.styled";
import { PrimaryButton } from "../styled/Buttons.styled";
import { openInNewTab } from "../../locals/utilities";

const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectContainerInner>
        <ProjectContainerPadding>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescriptionText>{project.text}</ProjectDescriptionText>
        </ProjectContainerPadding>
        <ProjectContainerPadding>
          <ProjectTitle>Tech Used:</ProjectTitle>
          <TechIconsSelect techs={project.tech} />
        </ProjectContainerPadding>
      </ProjectContainerInner>
      <ProjectContainerInner>
        <ProjectContainerPadding>
          <ProjectTitle>View Project:</ProjectTitle>
          <PrimaryButton
            onClick={() => {
              openInNewTab(project.siteLink);
            }}
          >
            {project.siteTitle}
          </PrimaryButton>
        </ProjectContainerPadding>
        <ProjectContainerPadding>
          <ProjectTitle>View Code:</ProjectTitle>
          <a href={project.gitHubLink} target="_blank">
            <GithubIcon />
          </a>
        </ProjectContainerPadding>
      </ProjectContainerInner>
    </ProjectContainer>
  );
};

export default Project;
