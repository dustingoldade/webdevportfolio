import { ProjectHeadline } from "../styled/Projects.styled";
import { Container } from "../styled/Container.styled";
import Project from "./Project";
import webProjectTextJson from "../../locals/webProjectsText.json";
const webProjectTextJsonKeys = Object.keys(webProjectTextJson);

const WebProjects = () => {
  return (
    <Container>
      <ProjectHeadline>Web Sites </ProjectHeadline>
      {webProjectTextJsonKeys.map((project) => (
        <Project project={webProjectTextJson[project]} />
      ))}
    </Container>
  );
};

export default WebProjects;
