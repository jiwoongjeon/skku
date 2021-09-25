import styled from "styled-components";

export const Container = styled.div`
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

export const Image = styled.img``;

export const SectionTitle = styled.h1`
  font-size: var(--font-size-7);
  margin: 0;
`;

export const SectionText = styled.p`
  font-size: var(--font-size-3);
`;

export const ButtonDiv = styled.div``;
