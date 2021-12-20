import styled from "styled-components";

export const TwoColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin: 30px 20px 0px 20px;
  gap: 10px;
`;

export const Column = styled.div`
  width: 100%;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.position ?? "left"};
  gap: 10px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const SectionTitle = styled.h1`
  font-size: var(--font-size-7);
  margin: 0;
`;

export const SectionText = styled.p`
  font-size: var(--font-size-3);
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  font-size: var(--font-size-3);
  border-radius: 5px;
  border: none;
  color: #000;

  ${(props) => {
    if (props.active) {
      return `
        background: #002d57;
        border: #002d57;
        color: white;
      `;
    }
  }}
  ${(props) => {
    if (props.right) {
      return `
        margin-left: auto;
      `;
    }
  }}

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-2);
    width: 95px;
    height: 40px;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: black;
  width: 160px;
  height: 40px;
  background-color: #f0f0f0;
  text-decoration: none;
  font-size: var(--font-size-3);
  border-radius: 5px;
  border: none;

  ${(props) => {
    if (props.right) {
      return `
        margin-left: auto;
      `;
    }
  }}

  &:hover {
    color: black;
  }

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-2);
    width: 95px;
    height: 40px;
  }
`;

export const DownloadLink = styled.a`
  width: 160px;
  height: 40px;
  font-size: var(--font-size-3);
  color: white;
  background: #002d57;
  border-radius: white;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const RowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SingleColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  gap: 50px;
`;
