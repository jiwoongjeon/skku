import React from "react";
import { Hero, Main } from "../../components";

import background from "../../assets/images/mainbackground.png";
import Bodo from "./Bodo";
import Files from "./Files";
import Notice from "./Notice";

const SubPageSelector = ({ section }) => {
  console.log(section);
  switch (section) {
    case "Notice":
      return <Notice />;
    case "Files":
      return <Files />;
    case "Bodo":
      return <Bodo />;
    default:
      return;
  }
};

const Board = ({ section }) => {
  const heroHeight = Math.min(window.innerWidth / 2, 400);
  return (
    <Main>
      <Hero
        title={"Board"}
        sections={["Notice", "Files", "Bodo"]}
        focusedSection={section}
        background={background}
        height={`${heroHeight}px`}
      />
      <SubPageSelector section={section} />
    </Main>
  );
};

export default Board;
