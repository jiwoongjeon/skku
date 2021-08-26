import styled from "styled-components";
import temp from "../../assets/images/temp.png";
import BackgroundImage from "../../assets/images/mainbackground.png";

const Background = styled.div`
  background: url(${BackgroundImage}) center/cover no-repeat;
  height: ${(props) => props.height};
`;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  color: white;
  // color: #7CAD47;
  background-color: #7cad47;
  margin-left: 25px;
  radius: 10px;
  border: none;
  border-radius: 4px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 0px 0px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const ButtonContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 25px;
  margin-left: 25px;
`;

export const BPContainer = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

export const card = styled.div`
  border: 1px solid #111;
  margin: 10px 0;
  padding: 20px;
`;

export const Image = styled.img`
  margin-left: 69px;
  width: 50%;
  height: 600px;
`;

export const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ImageCentered = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
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
