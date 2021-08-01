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
  text-align: center;
`;

export const Logo = styled.img`
  margin-left: 109px;
  width: 54px;
  height: 34px;
  padding-left: 16px;
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  margin-right: 60px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  user-select: none;
  font-size: 24px;
  color: black;
  ${(props) => props.focused && `color: red`}
`;

export const Title = styled.p`

  display: inline-block;
  align-items: center;
  justifiy-content: center;
  font-size: 30px;
  text-align: center;
  color: black;
  text-decoration: none;
`
export const Sub = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;

`
// 로고 옆 학교 이름이 정확한 센터에 오지 않음