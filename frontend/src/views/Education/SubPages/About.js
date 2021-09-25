import React from "react";

import tempImage from "../../../assets/images/temp.png";
import {
  Column,
  Container,
  Image,
  SectionTitle,
  SectionText,
} from "../components";

const About = () => {
  return (
    <Container>
      <Column position={"center"}>
        <Image src={tempImage} />
      </Column>
      <Column>
        <SectionTitle>Title</SectionTitle>
        <SectionText>BLAH BLAH BLAH</SectionText>
      </Column>
    </Container>
  );
};

export default About;
