import React from "react";

import background from "../../assets/images/mainbackground.png";
import { Section } from "../../components";
import {
  Container,
  Table,
  Row,
  HeaderRow,
  HeaderColumn,
  Column,
} from "./components/Table";

const boardData = [
  {
    postId: 1,
    postTitle: "Title",
    postDate: "2021-08-1",
    postAuthor: "관리자",
  },
  {
    postId: 2,
    postTitle: "Title",
    postDate: "2021-08-2",
    postAuthor: "관리자",
  },
  {
    postId: 3,
    postTitle: "Title",
    postDate: "2021-08-3",
    postAuthor: "관리자",
  },
  {
    postId: 4,
    postTitle: "Title",
    postDate: "2021-08-4",
    postAuthor: "관리자",
  },
];

const Board = () => {
  return (
    <>
      <Section background={background} height={"300px"} />
      <Container>
        <Table>
          <col style={{ width: "10%" }} />
          <col style={{ width: "60%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
          <HeaderRow>
            <HeaderColumn>번호</HeaderColumn>
            <HeaderColumn>제목</HeaderColumn>
            <HeaderColumn>날짜</HeaderColumn>
            <HeaderColumn>작성자</HeaderColumn>
          </HeaderRow>
          {boardData.map((data) => (
            <Row>
              <Column>{data.postId}</Column>
              <Column textAlign={"left"}>{data.postTitle}</Column>
              <Column>{data.postDate}</Column>
              <Column>{data.postAuthor}</Column>
            </Row>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default Board;
