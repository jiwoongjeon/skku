import React from "react";
import { Hero, Main } from "../../components";

import background from "../../assets/images/mainbackground.png";
import About from "./SubPages/About";
import KNSSE from "./SubPages/KNSSE";
import CSSE from "./SubPages/CSSE";
import UICA from "./SubPages/UICA";
import ResearchTeam from "./SubPages/ResearchTeam";

const SubPageSelector = ({ section }) => {
  console.log(section);
  switch (section) {
    case "About":
      return <About />;
    case "K-NSSE":
      return <KNSSE />;
    case "CSSE":
      return <CSSE />;
    case "UICA":
      return <UICA />;
    case "연구진":
      return <ResearchTeam />;
    default:
      return;
  }
};

const Education = ({ section }) => {
  const heroHeight = Math.min(window.innerWidth / 2, 400);

  return (
    <Main>
      <Hero
        title={"Education"}
        sections={["About", "K-NSSE", "CSSE", "UICA", "연구진"]}
        focusedSection={section}
        background={background}
        height={`${heroHeight}px`}
      />
      <SubPageSelector section={section} />
    </Main>
  );
};

export default Education;
