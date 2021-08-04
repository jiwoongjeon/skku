import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 80%;
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
