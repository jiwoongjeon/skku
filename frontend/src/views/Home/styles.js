import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 90%;
  margin: 10% auto;
  @media only screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const BoardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  margin: 0 5%;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Title = styled.p`
  color: black;
  font-size: var(--font-size-8);
  margin-top: 0;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-7);
  }
`;

export const Subtitle = styled.p`
  margin-top: 0;
  color: black;
  font-size: var(--font-size-4);
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-3);
  }
`;

export const Content = styled.p`
  width: 60%;
  margin-top: 30px;
  margin-bottom: 30px;
  color: black;
  font-size: var(--font-size-4);
  user-select: none;

  @media only screen and (max-width: 1200px) {
    width: 80%;
    font-size: var(--font-size-3);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 188px;
  height: 60px;
  justify-content: center;
  background: #002d57;
  color: white;
  font-size: var(--font-size-5);
  border: #002d57;
  border-radius: 5px;
  transition-duration: 0.4s;

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-3);
    width: 94px;
    height: 50px;
  }

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const SectionTitle = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: var(--font-size-8);
  user-select: none;
  color: ${(props) => props.color ?? "#000"};
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: var(--font-size-4);
  text-decoration: overline #004383 solid 2px;
  margin-bottom: 50px;
  user-select: none;
  color: ${(props) => props.color ?? "#000"};
`;
