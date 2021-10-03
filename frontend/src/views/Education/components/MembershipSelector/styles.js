import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const OptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  color: #006bd0;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
`;

export const TypeText = styled.h1`
  margin: 0;
  color: #006bd0;
`;

export const PriceText = styled.h2`
  margin: 0;
  color: #006bd0;
`;
