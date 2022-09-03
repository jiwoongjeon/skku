import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  user-select: none;
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

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #006bd0;
  color: white;
  width: 150px;
  height: 20px;
  border-radius: 5px;
  margin-top: 5px;
  font-size: var(--font-size-2);
`;

export const TypeText = styled.h1`
  margin: 0;
  color: #006bd0;
`;

export const PriceText = styled.h2`
  margin: 0;
  color: #006bd0;
`;
