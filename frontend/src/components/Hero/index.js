import React from "react";

import {
  HeroContainer,
  Title,
  Subtitle,
  SectionsContainer,
  SectionsItem,
} from "./styles";

const Hero = ({ title, sections, focusedSection, ...restProps }) => {
  return (
    <HeroContainer {...restProps}>
      <Subtitle>Global Leading Education Group</Subtitle>
      <Title>{title}</Title>
      <SectionsContainer>
        {sections.map((section) => (
          <SectionsItem focused={section === focusedSection}>
            {section}
          </SectionsItem>
        ))}
      </SectionsContainer>
    </HeroContainer>
  );
};

export default Hero;
