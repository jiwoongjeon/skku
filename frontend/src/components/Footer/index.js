
import React from "react"
import logo from "../../assets/images/skkufooterimg.jpeg"
import {Container, Image, Content, ContentItem} from "./styles"


const Footer = () => {

  return <Container>
    <Content>

    <ContentItem>CONTACT</ContentItem>
      <ContentItem>Copyright (c) G-cubed All Rights Re-served. Design by DSSO.KR</ContentItem>
      <ContentItem>Ut diam dul, auctor vehicula pretium.</ContentItem>
      <ContentItem>TEL: 02-0000-0000</ContentItem>
    </Content>


    <Image src={logo}/>


    </Container>

}

export default Footer

