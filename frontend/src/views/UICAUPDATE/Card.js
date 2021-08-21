import React from "react";
import { Container, Image, Content, ContentContainer, Title } from "./styles";
import imgsrc from "../../assets/images/temp.png";

const Card = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <>
          <Container>
            <Title> 1. Title</Title>
            <Content> txt</Content>

            <Title>2. Title</Title>
            <Image src={imgsrc} alt=""></Image>

            <Title>3. Title</Title>
            <Image src={imgsrc} alt=""></Image>
          </Container>
        </>
      ))}
    </div>
  );
};

export default Card;
