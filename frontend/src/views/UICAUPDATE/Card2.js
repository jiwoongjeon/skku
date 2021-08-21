import React from "react";
import {
  Container,
  Image,
  Button,
  ImageCentered,
  Title,
  BPContainer,
} from "./styles";
import imgsrc from "../../assets/images/temp.png";
import MembershipCard from "./MembershipCard";
import { useState } from "react";
import Data4Members from "./Data4Member";

const Card = ({ data, cardIndex }) => {
  const [active, setPremium] = useState("Basic");

  return (
    <div>
      {data[cardIndex].map((item) => (
        <>
          <Container>
            <Title>멤버쉽제도 소개</Title>

            <BPContainer>
              <Button onClick={() => setPremium("Basic")}>Basic</Button>
              <Button onClick={() => setPremium("Premium")}>Premier</Button>
            </BPContainer>

            <ImageCentered>
              {active === "Basic" && (
                <MembershipCard data={Data4Members} cardIndex={0} />
              )}
              {active === "Premium" && (
                <MembershipCard data={Data4Members} cardIndex={1} />
              )}
            </ImageCentered>

            <Title>부가서비스</Title>
            <Image src={imgsrc} alt=""></Image>
          </Container>
        </>
      ))}
    </div>
  );
};

export default Card;
