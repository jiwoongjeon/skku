import { Main, Section, Cardtype1, Cardtype2 } from "../../components";
import {
  Title,
  Subtitle,
  CardviewContainer,
  Content,
  Container,
  Button,
  ButtonContainer,
  SectionTitle,
  SectionSubtitle,
  SubContainerBoard,
} from "./styles";

import {
  ContainerBoard,
  Table,
  Row,
  HeaderRow,
  HeaderColumn,
  Column,
} from "../Board/components/Table";

import background from "../../assets/images/mainbackground.png";
import background2 from "../../assets/images/mainbackground2.png";
import background3 from "../../assets/images/mainbackground3.png";

// const cardData = [
//   {
//     imgUrl:
//       "https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp",
//     title: "Title",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.",
//   },
//   {
//     imgUrl:
//       "https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp",
//     title: "Title",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.",
//   },
//   {
//     imgUrl:
//       "https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp",
//     title: "Title",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.",
//   },
// ];

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

const greeting = function greet() {
  console.log("Hey there clicker!");
};

const Home = () => {
  return (
    <Main>
      <Section background={background}>
        <Container>
          <Subtitle>SUNGKYUNKWAN UNIVERSITY</Subtitle>
          <Title>Global Leading Education Group</Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar non vestibulum consectetur nunc ac vel sollicitudin
            maecenas. Euismod aliquet urna metus, eget nam ornare mattis
            massa.Nunc pulvinar non vestibulum consectetur nunc ac vel
            sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare
            mattis massa.
          </Content>
          <Content>Learn more about</Content>
          <ButtonContainer>
            <Button onClick={() => greeting()}>K-NSSE</Button>
            <Button>UICA</Button>
          </ButtonContainer>
        </Container>
      </Section>
      <Section background={background2}>
        <Container>
          <SectionTitle>News</SectionTitle>
          <SectionSubtitle>Updates in Global Education Group</SectionSubtitle>
          {/* <CardviewContainer>
            {cardData.map((data) => (
              <Cardtype1
                key={i}
                imgURL={data.imgUrl}
                title={data.title}
                content={data.content}
              />
            ))}
          </CardviewContainer> */}
          <SubContainerBoard>
            <ContainerBoard>
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
            </ContainerBoard>

            <ContainerBoard>
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
            </ContainerBoard>
          </SubContainerBoard>
        </Container>
      </Section>
      <Section background={background3}>
        <Container>
          <SectionTitle>Research</SectionTitle>
          <SectionSubtitle>
            Achieve what we made in Global Education Group
          </SectionSubtitle>
          <CardviewContainer>
            <Cardtype2
              imgURL="http://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI2OTQxMTQy&ixlib=rb-1.2.1&q=80&w=1080"
              title="Title"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa."
            ></Cardtype2>

            <Cardtype2
              imgUrl=""
              title="Title"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa."
            ></Cardtype2>
          </CardviewContainer>
        </Container>
      </Section>
    </Main>
  );
};

export default Home;
