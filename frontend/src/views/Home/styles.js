import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 10% auto;
  @media only screen and (max-width: 960px) {
    max-width: 90%;
  }
`;

export const SubContainerBoard = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
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

export const Button = styled.button`
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
`;

export const SectionTitle2 = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: var(--font-size-8);
  user-select: none;
  color: white;
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: var(--font-size-4);
  text-decoration: overline #004383 solid 2px;
  margin-bottom: 50px;
  user-select: none;
`;

export const SectionSubtitle2 = styled.p`
  text-align: center;
  font-size: var(--font-size-4);
  text-decoration: overline #004383 solid 2px;
  margin-bottom: 50px;
  user-select: none;
  color: white;
`;

export const CardviewContainer = styled.div`
  height: 510px;
  width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;
