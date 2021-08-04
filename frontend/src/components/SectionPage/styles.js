import styled from "styled-components";
import temp from "../../assets/images/temp.png";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: grey;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 50%;
  height: 600px;
  background: url(${temp}) center/100% no-repeat;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 600px;
  background-color: white;
`;

export const Title = styled.h1`
  margin-top: 176px;
  margin-bottom: 35px;
  margin-left: 69px;
  margin-right: 60px;
  font-size: 40px;
  font-color: black;
  text-decoration: underline;
  text-decoration-color: green;
  text-decoration-thickness: 1 em;
  text-underline-offset: 10px;
`;

export const Content = styled.p`
  margin-left: 69px;
  margin-right: 60px;
  font-size: 18px;
  font-color: black;
`;
