import React from "react";

import tempImage from "../../assets/images/temp.png";
import {
  Column,
  TwoColumnContainer,
  Image,
  SectionTitle,
  SectionText,
} from "./components";

const About = () => {
  return (
    <TwoColumnContainer>
      <Column position={"center"}>
        <Image src={tempImage} />
      </Column>
      <Column>
        <SectionTitle>Title</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
          nibh erat, ut convallis leo convallis in. Cras sed est augue. Fusce
          sed arcu semper arcu aliquet aliquam. Donec posuere lacus dui, ac
          pellentesque lectus eleifend et. Cras et sem nec nulla iaculis semper
          vitae sed ante. Nam ex turpis, consequat et auctor nec, pellentesque
          sit amet tortor. Suspendisse justo diam, commodo a pellentesque id,
          pellentesque at nibh. Fusce et nunc odio. Fusce accumsan ipsum nunc,
          et venenatis ligula rutrum quis. Donec varius dapibus aliquam. Vivamus
          efficitur ultricies augue, ut blandit orci sagittis fringilla. Aenean
          tempus fringilla leo, at tristique massa vestibulum eget. Pellentesque
          et imperdiet est, eget ultrices quam. Etiam pharetra lorem sit amet
          vehicula luctus. Ut posuere tellus justo, eu gravida libero ultrices
          ut.{" "}
        </SectionText>
      </Column>
    </TwoColumnContainer>
  );
};

export default About;
