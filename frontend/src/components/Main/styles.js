import styled from "styled-components/macro";
import background from "../../assets/images/background.jpg";

export const Container = styled.main`
  height: 576dp;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  flex: 1 1 auto;
  background-color: lightgrey;
  padding: 7%;
  
`;

export const Title = styled.p`
  color: black;
  font-size: 50px;
  margin-top: 0;
`;

export const Subtitle = styled.p`
  margin-top : 0;
  color: black;
  font-size: 20px;
`;


export const Content = styled.p`
  margin: 0px;
  width: 760px;
  color:black;
  font-size: 15px;
`
export const ButtonContainer = styled.div`
  margin-top: 50px;
  flex-direction: column;
  margin-bottom: 30px;
`
export const Button = styled.button`
  width: 188px;
  height: 60px;
  margin-right: 10px;
  justify-content:center;
  background: black;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 5px;
`
