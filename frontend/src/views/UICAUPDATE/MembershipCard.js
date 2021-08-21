import React from "react";
import { item } from "./Data4Member";
import { Image } from "./styles";

const MembershipCard = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <img src={item.bg} alt=""></img>
      ))}
    </div>
  );
};

export default MembershipCard;
