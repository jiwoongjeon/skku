import React from "react";
import { Main } from "../../components";

import Organization from "./Organization";
import Leader from "./Leader";
import Members from "./Members";

const SubPageSelector = ({ section }) => {
  switch (section) {
    case "Organization":
      return <Organization />;
    case "Leader":
      return <Leader />;
    case "Members":
      return <Members />;
    default:
      return;
  }
};

const Education = ({ section }) => {
  return (
    <Main>
      <SubPageSelector section={section} />
    </Main>
  );
};

export default Education;
