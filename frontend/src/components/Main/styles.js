import styled from "styled-components/macro";
import mainbackground from "../../assets/images/mainbackground.png";

export const Container = styled.main`
  margin-top: 148px;
  margin-left: 207px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Background = styled.div`
  background: url(${mainbackground}) center/100% no-repeat;
  height: 696px; ;
`;

export const Title = styled.p`
  color: black;
  font-size: 50px;
  margin-top: 0;
`;

export const Subtitle = styled.p`
  margin-top: 0;
  color: black;
  font-size: 20px;
`;

export const Content = styled.p`
  margin-top: 30px;
  margin-bottom: 51px;
  width: 760px;
  color: black;
  font-size: 20px;
`;
export const ButtonContainer = styled.div`
  flex-direction: column;
  margin-left: 207px;
`;
export const Button = styled.button`
  width: 188px;
  height: 60px;
  margin-right: 10px;
  justify-content: center;
  background: black;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 5px;
`;
