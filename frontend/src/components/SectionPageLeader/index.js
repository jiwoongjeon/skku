import React from "react";
import { Container, Image, Content, ContentContainer, Title } from "./styles";

const SectionPageLeader = () => {
  return (
    <Container>
      <Image />
      <ContentContainer>
        <Title>인사말</Title>
        <Content>
          안녕하세요\n 교육과미래연구소 소장 배상훈입니다. ~ 감사합니다.
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default SectionPageLeader;
