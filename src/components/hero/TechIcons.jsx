import { FlexBoxIcons, FlexBoxIconsHover } from "../styled/FlexBoxIcons.styled";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiMaterialui,
  SiWebpack,
  SiStyledcomponents,
  SiPython,
  SiCss3,
  SiNetlify,
} from "react-icons/si";

export const TechIconsAll = () => {
  return (
    <FlexBoxIconsHover>
      <SiReact />
      <SiTypescript />
      <SiJavascript />
      <SiHtml5 />
      <SiCss3 />
      <SiBootstrap />
      <SiWebpack />
      <SiStyledcomponents />
      <SiMaterialui />
      <SiPython />
      <SiNetlify />
    </FlexBoxIconsHover>
  );
};

export const TechIconsSelect = ({ techs }) => {
  return (
    <FlexBoxIcons>
      {techs.react && <SiReact />}
      {techs.ts && <SiTypescript />}
      {techs.js && <SiJavascript />}
      {techs.html && <SiHtml5 />}
      {techs.css && <SiCss3 />}
      {techs.bs && <SiBootstrap />}
      {techs.wp && <SiWebpack />}
      {techs.sc && <SiStyledcomponents />}
      {techs.mui && <SiMaterialui />}
      {techs.py && <SiPython />}
      {techs.nf && <SiNetlify />}
    </FlexBoxIcons>
  );
};
