import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  min-width: 80%;
`;

export const Title = styled.h1`
  font-size: var(--font-size-7);
`;

export const ContainerBoard = styled.div`
  margin-top: 50px;
  width: 70%;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const Row = styled.tr`
  border-bottom: 1px solid grey;
`;

export const HeaderRow = styled.tr`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
`;

export const HeaderColumn = styled.th`
  padding: 10px 0;
`;

export const Column = styled.td`
  text-align: center;
  padding: 20px 0;
  text-align: ${(props) => props.textAlign ?? "center"};
`;
