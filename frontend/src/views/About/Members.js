import React from "react";

import membersImage from "../../assets/images/membermap.png";
import { Container, Image, SubContainer, Text, Title } from "./components";

const Organization = () => {
  return (
    <Container>
      <SubContainer direction={"row"}>
        <Image src={membersImage} />
      </SubContainer>
      <SubContainer direction={"column"}>
        <Title>조직도</Title>
        <Text>조직도입니다</Text>
      </SubContainer>
    </Container>
  );
};

export default Organization;
