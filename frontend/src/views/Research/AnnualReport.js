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

const AnnualReport = () => {
  const [annualReports, setAnnualReports] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8000/api/v2/pages/?type=research.Publications&fields=*"
    )
      .then((res) => res.json())
      .then((res) => {
        setAnnualReports(res.items);
      });
  }, []);
  return (
    <Container>
      <Title>Annual Report</Title>
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
          {annualReports &&
            annualReports.map((data) => (
              <Row key={data.postId}>
                <Column>{data.postId}</Column>
                <Column>{data.postTitle}</Column>
                <Column>{data.postDate}</Column>
                <Column>{data.postAuthor}</Column>
              </Row>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AnnualReport;
