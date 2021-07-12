import styled from "styled-components/macro";
import background from "../../assets/images/background.jpg";

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
`;

export const Background = styled.div`
  background: lightblue url(${background}) center/100% no-repeat;
  filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const Title = styled.h1`
  color: white;
  font-size: 70px;
  margin-top: -5px;
`;

export const Subtitle = styled.h2`
  color: white;
  font-size: 30px;
`;
