import { SiLinkedin, SiGithub } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

import {
  FlexBoxIcons,
  FlexBoxIconsButtons,
} from "../styled/FlexBoxIcons.styled";
import { openInNewTab } from "../../locals/utilities";

export const SMIcons = () => {
  return (
    <FlexBoxIconsButtons>
      <SiLinkedin
        onClick={() => {
          openInNewTab(
            "https://www.linkedin.com/in/dustin-goldade-cfa-04238a33/"
          );
        }}
      />
      <TfiEmail
        onClick={() => (window.location = "mailto:dagoldade@gmail.com")}
      />
      <SiGithub
        onClick={() => {
          openInNewTab("https://github.com/dustingoldade");
        }}
      />
    </FlexBoxIconsButtons>
  );
};

export const GithubIcon = () => {
  return (
    <FlexBoxIconsButtons>
      <SiGithub />
    </FlexBoxIconsButtons>
  );
};
