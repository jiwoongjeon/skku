import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { Container, Logo, MenuDiv, MenuItem } from "./styles";

const Menu = () => {
  const menuItems = ["News", "Members", "Research", "Publication", "Contact"];

  return (
    <>
      <Container>
        <Link to="/">
          <Logo src={logo} />
        </Link>
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
