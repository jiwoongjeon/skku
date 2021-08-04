import styled from "styled-components/macro";
import mainbackground3 from "../../assets/images/mainbackground3.png";

export const Container = styled.div`
  height: 720px;
  padding: 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url(${mainbackground3}) center/100% no-repeat;
  align-items: center;
`;

export const Title = styled.p`
  margin-top: 90px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  font-size: 50px;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: white;
  font-size: 18px;
  text-decoration: overline;
  text-decoration-thickness: 3px;
  text-decoration-color: #004383;
  margin-bottom: 54px;
`;

export const CardviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 1170px;
  radius: 20px;
`;
