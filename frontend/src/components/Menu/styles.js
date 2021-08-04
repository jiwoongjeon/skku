import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  min-width: 80%;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
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
  font-size: 30px;
  user-select: none;
`;

export const Logo = styled.img`
  width: 54px;
  height: 34px;
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  user-select: none;
  font-size: 24px;

  &:visited {
    color: black;
  }
`;
