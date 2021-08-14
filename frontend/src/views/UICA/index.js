import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import { Button, ButtonContainer } from "./styles";

const UICA = () => {
  const [active, setActive] = useState("FirstCard");

  return (
    <>
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
    </>
  );
};

export default UICA;
