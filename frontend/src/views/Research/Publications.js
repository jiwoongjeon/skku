import React, { useEffect, useState } from "react";

import {
  Column,
  Container,
  HeaderColumn,
  HeaderRow,
  Row,
  Table,
  Title,
} from "../../components/Table";

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8000/api/v2/pages/?type=research.ResearchPage&fields=*"
    )
      .then((res) => res.json())
      .then((res) => {
        setPublications(res.items);
      });
  }, []);

  return (
    <Container>
      <Title>Publications</Title>
      <Table>
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "60%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
        <thead>
          <HeaderRow>
            <HeaderColumn>번호</HeaderColumn>
            <HeaderColumn>제목</HeaderColumn>
            <HeaderColumn>날짜</HeaderColumn>
            <HeaderColumn>작성자</HeaderColumn>
          </HeaderRow>
        </thead>
        <tbody>
          {publications.map((data) => (
            <Row key={data.id}>
              <Column>{data.id}</Column>
              <Column>{data.title}</Column>
              <Column>{data.date}</Column>
              <Column>{"Admin"}</Column>
            </Row>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Publications;
