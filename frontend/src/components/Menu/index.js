import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Hamburger from "hamburger-react";

import logo from "../../assets/images/logo.svg";
import {
  Container,
  LogoLink,
  Logo,
  MenuDiv,
  MenuItem,
  MenuDrop,
  MenuContent,
  MenuBox,
  Title,
  MenuScreen,
  MenuScreenContainer,
} from "./styles";

const Menu = () => {
  const menuItems = ["About", "Research", "Education", "Board"];
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClick = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuScreen height={isOpen}>
        {isOpen && (
          <MenuScreenContainer>
            {menuItems.map((elem, i) => (
              <MenuItem
                key={i}
                onClick={handleItemClick}
                to={`/${elem.toLowerCase()}`}
              >
                {elem}
              </MenuItem>
            ))}
          </MenuScreenContainer>
        )}
      </MenuScreen>
      <Container>
        <LogoLink to="/" onClick={handleItemClick}>
          <Logo src={logo} />
          <Title>Global Education Group</Title>
        </LogoLink>
        {width >= 960 ? (
          <>
            <MenuDiv>
              {menuItems.map((elem, i) => (
                <MenuItem key={i} to={`/${elem.toLowerCase()}`}>
                  {elem}
                </MenuItem>
              ))}
            </MenuDiv>
            <MenuDrop>
              <MenuBox>
                <MenuContent to="/about/organization">Organization</MenuContent>
                <MenuContent to="/about/leader">Leader</MenuContent>
                <MenuContent to="/about/members">Members</MenuContent>
              </MenuBox>

              <MenuBox>
                <MenuContent to="/research/about">About</MenuContent>
                <MenuContent to="/research/research">research</MenuContent>
              </MenuBox>

              <MenuBox>
                <MenuContent to="/education/about">About</MenuContent>
                <MenuContent to="/education/knsse">K-NSSE</MenuContent>
                <MenuContent to="/education/uica">UICA</MenuContent>
                <MenuContent to="/education/members">연구진</MenuContent>
              </MenuBox>

              <MenuBox>
                <MenuContent to="/board/notice">공지사항</MenuContent>
                <MenuContent to="/board/files">자료실</MenuContent>
              </MenuBox>
            </MenuDrop>
          </>
        ) : (
          <>
            <Hamburger
              size={16}
              color={"#000"}
              toggled={isOpen}
              toggle={handleClick}
              duration={0.4}
            />
          </>
        )}
      </Container>

      <Switch>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};

export default Menu;
