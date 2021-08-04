import React from "react";
import {
  Background,
  Container,
  Title,
  Subtitle,
  Content,
  Button,
  ButtonContainer,
} from "./styles";

const Main = () => {
  return (
    <Background>
      <Container>
        <Subtitle>SUNGKYUNKWAN UNIVERSITY</Subtitle>
        <Title>Global Leading Education Group</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar
          non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod
          aliquet urna metus, eget nam ornare mattis massa.Nunc pulvinar non
          vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod
          aliquet urna metus, eget nam ornare mattis massa.
        </Content>
        <Content>Learn more about</Content>
      </Container>
      <ButtonContainer>
        <Button>K-NESSE</Button>
        <Button>UICA</Button>
      </ButtonContainer>
    </Background>
  );
};

export default Main;
