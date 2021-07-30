import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 70px;
`;

export const Logo = styled.img`
  width: 63px;
  height: 63px;
  padding-left: 16px;
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding-right: 16px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  user-select: none;
  font-size: 24px;
  color: black;
  ${(props) => props.focused && `color: red`}
`;

export const Title = styled.h1`
  display:flex;
  margin: 0;
  font-size: 30px;
  color: black;
  justify-content: flex-end;


`
// 로고 옆 학교 이름이 정확한 센터에 오지 않음