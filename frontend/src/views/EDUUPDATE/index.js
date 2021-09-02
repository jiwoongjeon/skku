import React, { useState } from "react";
import {
  Title,
  Content,
  Image,
  Container,
  ContentContainer,
} from "../EDUUPDATE/styles";
import { Hero, Main } from "../../components";
import background from "../../assets/images/mainbackground.png";
import Background from "../../assets/images/profile.jpg";

const EDUComponent = () => {
  const heroHeight = Math.min(window.innerWidth / 2, 400);

  return (
    <Main>
      <Hero
        title={"ABOUT"}
        sections={["ABOUT"]}
        focusedSection={"ABOUT"}
        background={background}
        height={`${heroHeight}px`}
      />
      <Container>
        <Image src={Background} alt=""></Image>
        <ContentContainer>
          <Title>hi</Title>
          <Content>hi</Content>
        </ContentContainer>
      </Container>
    </Main>
  );
};

export default EDUComponent;
