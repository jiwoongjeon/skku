import styled from "styled-components/macro";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.a`
  font-family: "Raleway", "Noto Sans KR", "Malgun Gothic", dotum, sans-serif;
  color: black;
  font-size: 50px;
`;

export const Subtitle = styled.a`
  margin: 70px, 0px, 0px, 0px;
  font-family: "Raleway", "Noto Sans KR", "Malgun Gothic", dotum, sans-serif;
  font-weight: lighter;
  top: 10px;
  color: black;
`;

export const Submenu = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  box-sizing: content-box;
  color: black;
  position: relative;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MenuItem = styled.a`
  font-size: 17px;
  ${(props) => props.focused && `color: red`}
`;
