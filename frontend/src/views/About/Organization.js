import React from "react";

import tempImage from "../../assets/images/temp.png";
import { Container, Image, SubContainer, Text, Title } from "./components";

const Organization = () => {
  return (
    <Container>
      <SubContainer direction={"row"}>
        <Image src={tempImage} />
      </SubContainer>
      <SubContainer direction={"column"}>
        <Title>인사말</Title>
        <Text>안녕하세요</Text>
        <Text>교육과미래연구소 소장 배상훈입니다. ~ 감사합니다.</Text>
      </SubContainer>
    </Container>
  );
};

export default Organization;
