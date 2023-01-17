import { ProjectHeadline } from "../styled/Projects.styled";
import { Container } from "../styled/Container.styled";
import Project from "./Project";
import reactProjectsTextJson from "../../locals/reactProjectsText.json";
const reactProjectTextJsonKeys = Object.keys(reactProjectsTextJson);

const ReactProjects = ({ projectsRef }) => {
  return (
    <Container>
      <ProjectHeadline ref={projectsRef}>React Projects </ProjectHeadline>
      {reactProjectTextJsonKeys.map((project) => (
        <Project project={reactProjectsTextJson[project]} />
      ))}
    </Container>
  );
};

export default ReactProjects;
