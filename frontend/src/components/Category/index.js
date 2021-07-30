import React, { useState } from "react";
import { Container, Title, Subtitle, Submenu, MenuItem, ContainerTest } from "./styles";

const Category = () => {
  const menuItems = ["포럼 안내/신청", "K-NSSE/UICA 안내", "기타 연구실 공지"];
  const [clicked, setClicked] = useState("");

  const handleClick = (item) => {
    setClicked(item);
  };
  return (
    <ContainerTest>

      <Submenu>
        {menuItems.map((elem, i) => (
          <MenuItem
            key={i}
            focused={clicked === elem}
            onClick={() => handleClick(elem)}
          >
            {elem}
          </MenuItem>
        ))}
      </Submenu>
    </ContainerTest>
  );
};

export default Category;
