import React from "react";
import { Background, Container, Title, Subtitle, Subcontainer, Content, Button, ButtonContainer } from "./styles";


const Main = () => {
  return (
    
    <Container>
      <Subtitle>SUNGKYUNKWAN UNIVERSITY</Subtitle>
      <Title>Global Leading Education Group</Title>
      <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.</Content>
      {/* 서브 컨테이너를 하나 더 만들어 줘야 컨테이너 사이즈를 정할수있는지 */}
      {/* 리스트화로 대체해도 사이즈를 다 다르게 할수있는지. */}
        <ButtonContainer>
          <Button>K-NESSE</Button>
          <Button>UICA</Button>
        </ButtonContainer>

        




    </Container>

    

  );
};

export default Main;
