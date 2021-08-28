import React from "react";
import { Hero, Main } from "../../components";

import background from "../../assets/images/mainbackground.png";
import {
  Column,
  ContainerB,
  HeaderColumn,
  HeaderRow,
  Row,
  Table,
  Title,
} from "../../components/Table";

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

const Board = ({ section }) => {
  const heroHeight = Math.min(window.innerWidth / 2, 400);

  return (
    <Main>
      <Hero
        title={"Board"}
        sections={["Notice", "Files"]}
        focusedSection={section}
        background={background}
        height={`${heroHeight}px`}
      />
      <ContainerB>
        <Title>Announcement</Title>
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
            {boardData.map((data) => (
              <Row key={data.postId}>
                <Column>{data.postId}</Column>
                <Column>{data.postTitle}</Column>
                <Column>{data.postDate}</Column>
                <Column>{data.postAuthor}</Column>
              </Row>
            ))}
          </tbody>
        </Table>
      </ContainerB>
    </Main>
  );
};

export default Board;
