import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import { Button, ButtonContainer } from "./styles";
import { Hero, Main } from "../../components";
import background from "../../assets/images/mainbackground.png";

const UICA = () => {
  const [active, setActive] = useState("FirstCard");
  const heroHeight = Math.min(window.innerWidth / 2, 400);

  return (
    <Main>
      <Hero background={background} height={`${heroHeight}px`} />

      <ButtonContainer>
        <Button onClick={() => setActive("FirstCard")}>One</Button>
        <Button onClick={() => setActive("SecondCard")}>Two</Button>
        <Button onClick={() => setActive("ThirdCard")}>Three</Button>
      </ButtonContainer>

      <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
      </div>
    </Main>
  );
};

export default UICA;
