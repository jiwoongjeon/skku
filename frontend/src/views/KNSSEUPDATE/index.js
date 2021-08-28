import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Card2 from "./Card2";
import { Button, ButtonContainer } from "./styles";
import { Hero, Main } from "../../components";
import background from "../../assets/images/mainbackground.png";

const KNSSE = () => {
  const [active, setActive] = useState("FirstCard");
  const heroHeight = Math.min(window.innerWidth / 2, 400);

  return (
    <Main>
      <Hero
        title={"K-NSSE"}
        sections={["K-NSSE"]}
        focusedSection={"K-NSSE"}
        background={background}
        height={`${heroHeight}px`}
      />
      <ButtonContainer>
        <Button onClick={() => setActive("FirstCard")}>진단도구 소개</Button>
        <Button onClick={() => setActive("SecondCard")}>멤버쉽 제도</Button>
        <Button onClick={() => window.open("https://www.naver.com", "_blank")}>
          참여신청
        </Button>
      </ButtonContainer>
      <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card2 data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
      </div>
    </Main>
  );
};

export default KNSSE;
