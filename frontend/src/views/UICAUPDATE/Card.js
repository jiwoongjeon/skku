import React from "react";
import { Container, Image, Content, ContentContainer, Title } from "./styles";

const Card = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <>
          <Container>
            <Image src={item.bg} alt="" />
            <ContentContainer>
              <Title>{item.title}</Title>
              <Content>{item.name}</Content>
            </ContentContainer>
          </Container>
        </>
      ))}
    </div>
  );
};

export default Card;
