import { TechIconsAll } from "./TechIcons";
import { SMIcons } from "./SMIcons";
import headShotPhoto from "../../locals/imgs/DustinCartoon.png";
import { Flex } from "../styled/Flex.styled";
import {
  HeroHeadline,
  HeroContainer,
  HeroSubHeadline,
  Herotext,
  SecondaryColorSpan,
  InnerContainer,
} from "../styled/Hero.styled";
import { PrimaryButton } from "../styled/Buttons.styled";

const Hero = ({ scrollHandler }) => {
  return (
    <Flex>
      <HeroContainer>
        <HeroHeadline>
          Hi, I'm
          <SecondaryColorSpan> Dustin Goldade </SecondaryColorSpan>
        </HeroHeadline>
        <HeroSubHeadline>
          I'm a Front End software engineer located in Krakow, Poland.
        </HeroSubHeadline>

        <PrimaryButton onClick={scrollHandler}>PROJECTS</PrimaryButton>
        <InnerContainer>
          <Herotext>Get in contact:</Herotext>
          <SMIcons />
          <Herotext>Tech I work with:</Herotext>
          <TechIconsAll />
        </InnerContainer>
      </HeroContainer>
      {/* <img src={headShotPhoto} alt="Picture of Dustin" /> */}
    </Flex>
  );
};

export default Hero;
