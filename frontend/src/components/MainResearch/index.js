import React from "react";
import { Container, Title, CardviewContainer, Subtitle } from "./styles";
import Cardtype1 from "../Cardtype1/Cardtype1";
import Cardtype2 from "../Cardtype2/Cardtype2";

const MainResearch = () => {
  return (
    <>
      <Container>
        <Title>Research</Title>
        <Subtitle>Achieve that we made in Global Education Group</Subtitle>

        <CardviewContainer>
          <Cardtype2
            imgURL="http://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI2OTQxMTQy&ixlib=rb-1.2.1&q=80&w=1080"
            title="Title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa."
          ></Cardtype2>

          <Cardtype2
            imgUrl=""
            title="Title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa."
          ></Cardtype2>
        </CardviewContainer>
      </Container>
    </>
  );
};

export default MainResearch;
