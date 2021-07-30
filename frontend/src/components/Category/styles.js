import styled from "styled-components/macro";

export const ContainerTest = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Submenu = styled.div`
  width: 100%;
  box-sizing: content-box;
  color: black;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const MenuItem = styled.a`
  font-size: 17px;
  ${(props) => props.focused && `color: blue`}
`;
