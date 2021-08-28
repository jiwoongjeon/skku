import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  height: 70px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  z-index: 1000;
  box-sizing: content-box;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;

  &:visited {
    color: black;
  }
`;

export const Title = styled.p`
  font-size: var(--font-size-6);
  user-select: none;
  color: black;
  font-weight: 600;

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-5);
  }

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-3);
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: 960px) {
    max-width: 32px;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  height: 100%;
  align-items: center;
`;

export const MenuItem = styled.p`
  user-select: none;
  font-size: var(--font-size-4);
  position: relative;
  display: inline-block;
  text-align: center;
  color: black;
  min-width: 130px;

  &:visited {
    color: black;
  }

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-3);
  }
`;

export const MenuScreen = styled.div`
  width: 100%;
  transition: height 0.4s ease-in-out;
  height: ${(props) => (props.isopen ? "100%" : "0px")};
  position: absolute;
  top: 0px;
  padding-top: 70px;
  background-color: white;
  z-index: 1000;
`;

export const MenuScreenContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
`;

export const MenuScreenItem = styled(MenuItem)`
  margin: 5px 0;
  font-size: var(--font-size-5);
`;

export const HamburgerDiv = styled.div`
  margin-left: auto;
`;
