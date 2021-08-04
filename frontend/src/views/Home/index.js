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
} from "./styles";

import background from "../../assets/images/mainbackground.png";
import background2 from "../../assets/images/mainbackground2.png";
import background3 from "../../assets/images/mainbackground3.png";

const cardData = [
  {
    imgUrl:
      "https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.",
  },
  {
    imgUrl:
      "https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.",
  },
  {
    imgUrl:
      "https://d1vcqlflm6aitx.cloudfront.net/images/800x100p/1557364192-work_while_you_study_banner.webp",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massadddddsnfjanfkasdnfkandsjknfaksfnjkLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar non vestibulum consectetur nunc ac vel sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare mattis massa.",
  },
];

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
            <Button>K-NSSE</Button>
            <Button>UICA</Button>
          </ButtonContainer>
        </Container>
      </Section>
      <Section background={background2}>
        <Container>
          <SectionTitle>News</SectionTitle>
          <SectionSubtitle>Updates in Global Education Group</SectionSubtitle>
          <CardviewContainer>
            {cardData.map((data) => (
              <Cardtype1
                imgURL={data.imgUrl}
                title={data.title}
                content={data.content}
              />
            ))}
          </CardviewContainer>
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
