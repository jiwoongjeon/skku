import React, { useState } from "react";
import { Container, Title, Subtitle, Submenu, MenuItem } from "./styles";

const Category = () => {
  const menuItems = ["포럼 안내/신청", "K-NSSE/UICA 안내", "기타 연구실 공지"];
  const [clicked, setClicked] = useState("");

  const handleClick = (item) => {
    setClicked(item);
  };
  return (
    <Container>
      <Subtitle>Sungkyunkwan University </Subtitle>
      <Title>Announcement</Title>
      <Submenu>
        {menuItems.map((elem) => (
          <MenuItem
            focused={clicked === elem}
            onClick={() => handleClick(elem)}
          >
            {elem}
          </MenuItem>
        ))}
      </Submenu>
    </Container>
  );
};

export default Category;
