import React from "react";
import logo from "../../assets/images/skkufooterimg.jpeg";
import {
  Container,
  Image,
  Content,
  ContentGroup,
  Subtext,
  Text,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <ContentGroup>
          <Text>CONTACT</Text>
          <Subtext>Ut diam dul, auctor vehicula pretium.</Subtext>
          <Subtext>TEL: 02-0000-0000</Subtext>
        </ContentGroup>
        <ContentGroup>
          <Subtext>Copyright &copy; Global Education Group</Subtext>
          <Subtext>Design by Jiwoong Jeon and Brian Ko</Subtext>
        </ContentGroup>
      </Content>

      <Image src={logo} />
    </Container>
  );
};

export default Footer;
