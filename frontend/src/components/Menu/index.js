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
  Title,
  MenuScreen,
  MenuScreenContainer,
  MenuScreenItem,
  HamburgerDiv,
} from "./styles";
import {
  DropdownContainer,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuLink,
} from "./Dropdown";

const menuItems = {
  About: {
    path: "about",
    subPaths: {
      Organization: "organization",
      Leader: "leader",
      Members: "members",
    },
  },
  Research: {
    path: "research",
    subPaths: {
      About: "about",
      Publications: "publications",
      Conference: "conference",
      "Annual Report": "annualreport",
      Project: "project",
    },
  },
  Education: {
    path: "education",
    subPaths: {
      About: "about",
      "K-NSSE": "k-nsse",
      CSSE: "csse",
      UICA: "uica",
      "Research Team": "researchteam",
    },
  },
  Board: {
    path: "board",
    subPaths: {
      Notice: "notice",
      Files: "files",
      보도: "bodo",
    },
  },
};

const Menu = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const toggleDropdownOn = () => {
    setDropdownOpen(true);
  };

  const toggleDropdownOff = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <MenuScreen isopen={isOpen ? 1 : 0}>
        {isOpen && (
          <MenuScreenContainer>
            {Object.keys(menuItems).map((elem, i) => (
              <MenuScreenItem
                key={i}
                onClick={handleItemClick}
                to={`/${elem.toLowerCase()}`}
              >
                {elem}
              </MenuScreenItem>
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
          <MenuDiv
            onMouseEnter={toggleDropdownOn}
            onMouseLeave={toggleDropdownOff}
          >
            {Object.keys(menuItems).map((elem, i) => (
              <MenuItem key={i}>{elem}</MenuItem>
            ))}
          </MenuDiv>
        ) : (
          <HamburgerDiv>
            <Hamburger
              size={16}
              color={"#000"}
              toggled={isOpen}
              toggle={handleClick}
              duration={0.4}
            />
          </HamburgerDiv>
        )}
      </Container>
      <DropdownContainer
        onMouseEnter={toggleDropdownOn}
        onMouseLeave={toggleDropdownOff}
        dropdownOpen={dropdownOpen}
      >
        <DropdownMenu>
          {Object.keys(menuItems).map((elem) => (
            <DropdownMenuGroup key={elem}>
              {Object.keys(menuItems[elem].subPaths).map((pathName) => (
                <DropdownMenuLink
                  key={pathName}
                  to={`/${menuItems[elem].path.toLowerCase()}/${menuItems[
                    elem
                  ].subPaths[pathName].toLowerCase()}`}
                  onClick={toggleDropdownOff}
                >
                  {pathName}
                </DropdownMenuLink>
              ))}
            </DropdownMenuGroup>
          ))}
        </DropdownMenu>
      </DropdownContainer>

      <Switch>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};

export default Menu;
