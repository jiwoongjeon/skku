import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { Container, Logo, MenuDiv, MenuItem, Title,Sub } from "./styles";

const Menu = () => {
  const menuItems = ["About", "K-NESSE", "UICA", "Research", "Board"];

  return (
    <>
      <Container>
        <Sub>
          <Link to="/">
            <Logo src={logo} />
            <Title>Global Education Group</Title>
          </Link>
        </Sub>
        
        
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
