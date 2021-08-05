import React from "react";
import { Switch, Route } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import { Container, LogoLink, Logo, MenuDiv, MenuItem, Title } from "./styles";

const Menu = () => {
  const menuItems = ["About", "K-NSSE", "UICA", "Research", "Board"];

  return (
    <>
      <Container>
        <LogoLink to="/">
          <Logo src={logo} />
          <Title>Global Education Group</Title>
        </LogoLink>

        <MenuDiv>
          {menuItems.map((elem, i) => (
            <MenuItem key={i} to={`/${elem.toLowerCase()}`}>
              {elem}
            </MenuItem>
          ))}
        </MenuDiv>
      </Container>

      <Switch>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};

export default Menu;
