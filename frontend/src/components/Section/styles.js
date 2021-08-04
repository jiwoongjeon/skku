import styled from "styled-components";
import React from "react";
import Topsection from "../../assets/images/Topsection.png";

export const Container = styled.div`
  height: 250px;
  display: flex;
  width: 100%;
  flex-direction: column;
  background: url(${Topsection}) center/100% no-repeat;
  justify-content: center;
  align-items: center;
`;
