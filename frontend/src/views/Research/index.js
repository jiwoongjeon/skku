import React from "react";

import background from "../../assets/images/mainbackground.png";
import { Hero, Main } from "../../components";
import About from "./About";
import Publications from "./Publications";
import Conference from "./Conference";
import AnnualReport from "./AnnualReport";
import Project from "./Project";

const SubPageSelector = ({ section }) => {
  console.log(section);
  switch (section) {
    case "About":
      return <About />;
    case "Publications":
      return <Publications />;
    case "Conference":
      return <Conference />;
    case "Annual Report":
      return <AnnualReport />;
    case "Project":
      return <Project />;
    default:
      return;
  }
};

const Research = ({ section }) => {
  const heroHeight = Math.min(window.innerWidth / 2, 400);
  return (
    <Main>
      <Hero
        title={"Research"}
        sections={[
          "About",
          "Publications",
          "Conference",
          "Annual Report",
          "Project",
        ]}
        focusedSection={section}
        background={background}
        height={`${heroHeight}px`}
      />
      <SubPageSelector section={section} />
    </Main>
  );
};

export default Research;
