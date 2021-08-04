import styled from "styled-components/macro";
import React from "react";

export const Container = styled.menu`
  background-color: white;
  color: #888888;
  display: flex;
  margin: 10px;
  justify-content: space-between;
  clear: both;
  white-space: pre-wrap;
  align-items: center;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 80%;
`;
export const ContentItem = styled.a`
  font-size: 14px;
`;

export const Image = styled.img`
  width: 150px;
  height: 63px;
  margin-right: 180px;
`;
