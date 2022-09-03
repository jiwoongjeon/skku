import React from "react";

import {
  HeroContainer,
  Title,
  Subtitle,
  SectionsContainer,
  SectionsItem,
} from "./styles";

const Hero = ({ title, sections, focusedSection, ...restProps }) => (
  <HeroContainer {...restProps}>
    <Subtitle>Global Leading Education Group</Subtitle>
    <Title>{title}</Title>
    <SectionsContainer>
      {sections.map((section) => (
        <SectionsItem key={section} focused={section === focusedSection}>
          {section}
        </SectionsItem>
      ))}
    </SectionsContainer>
  </HeroContainer>
);

export default Hero;
