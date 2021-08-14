import styled from "styled-components";
import temp from "../../assets/images/temp.png";
import BackgroundImage from "../../assets/images/mainbackground.png";

export const Background = styled.div`
  background: url(${BackgroundImage}) center/cover no-repeat;
  height: ${(props) => props.height};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 25px;
  margin-left: 25px;
`;

export const card = styled.div`
  border: 1px solid #111;
  margin: 10px 0;
  padding: 20px;
`;

export const Image = styled.img`
  width: 50%;
  height: 400px;
  padding: 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 600px;
  background-color: white;
`;

export const Title = styled.h1`
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
