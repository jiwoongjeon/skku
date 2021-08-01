import styled from "styled-components/macro";
import mainbackground2 from "../../assets/images/mainbackground2.png"


export const Container = styled.div`
  height: 870px;
  padding: 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url(${mainbackground2}) center/100% no-repeat;
`;

export const Title = styled.p`
  margin-top:90px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
  font-size: 50px;

`;

export const Subtitle = styled.p`
  text-align: center;
  color: black;
  font-size: 18px;
  text-decoration: overline;
  text-decoration-thickness: 3px;
  text-decoration-color: #004383;
  margin-bottom: 54px;
`

export const CardviewContainer = styled.div` 
  width: 80%;
  height: 510px;
  display: flex;
  flex-direction: row;
  margin-left: 126px;
  margin-right: 126px;
  justify-content: center;
  align-content: center;

`