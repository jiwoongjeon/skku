import React, { useState } from "react";

import {
  RowDiv,
  Button,
  Link,
  DownloadLink,
  SingleColumnContainer,
  Image,
  SectionTitle,
  SectionText,
} from "./components";
import {
  Column,
  HeaderColumn,
  HeaderRow,
  Row,
  Table,
} from "../../components/Table";
import MembershipSelector from "./components/MembershipSelector";
import tempImage from "../../assets/images/temp.png";
import profImage from "../../assets/images/professor.png";

const Intro = () => {
  return (
    <>
      <SectionTitle>1. Title</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
        nibh erat, ut convallis leo convallis in. Cras sed est augue. Fusce sed
        arcu semper arcu aliquet aliquam. Donec posuere lacus dui, ac
        pellentesque lectus eleifend et. Cras et sem nec nulla iaculis semper
        vitae sed ante. Nam ex turpis, consequat et auctor nec, pellentesque sit
        amet tortor. Suspendisse justo diam, commodo a pellentesque id,
        pellentesque at nibh. Fusce et nunc odio. Fusce accumsan ipsum nunc, et
        venenatis ligula rutrum quis. Donec varius dapibus aliquam. Vivamus
        efficitur ultricies augue, ut blandit orci sagittis fringilla. Aenean
        tempus fringilla leo, at tristique massa vestibulum eget. Pellentesque
        et imperdiet est, eget ultrices quam. Etiam pharetra lorem sit amet
        vehicula luctus. Ut posuere tellus justo, eu gravida libero ultrices ut.
      </SectionText>
      <SectionTitle>2. Title</SectionTitle>
      <Image src={tempImage} />
      <RowDiv>
        <SectionTitle>3. Title</SectionTitle>
        <DownloadLink href={tempImage} target="_blank" download="download.png">
          2021 설문지 다운로드
        </DownloadLink>
      </RowDiv>
      <Image src={tempImage} />
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
        nibh erat, ut convallis leo convallis in. Cras sed est augue. Fusce sed
        arcu semper arcu aliquet aliquam. Donec posuere lacus dui, ac
        pellentesque lectus eleifend et. Cras et sem nec nulla iaculis semper
        vitae sed ante. Nam ex turpis, consequat et auctor nec, pellentesque sit
        amet tortor. Suspendisse justo diam, commodo a pellentesque id,
        pellentesque at nibh. Fusce et nunc odio. Fusce accumsan ipsum nunc, et
        venenatis ligula rutrum quis. Donec varius dapibus aliquam. Vivamus
        efficitur ultricies augue, ut blandit orci sagittis fringilla. Aenean
        tempus fringilla leo, at tristique massa vestibulum eget. Pellentesque
        et imperdiet est, eget ultrices quam. Etiam pharetra lorem sit amet
        vehicula luctus. Ut posuere tellus justo, eu gravida libero ultrices ut.
      </SectionText>
    </>
  );
};

const Member = () => {
  const [membershipOption, setMembershipOption] = useState("basic");

  const handleClick = (option) => {
    setMembershipOption(option);
  };

  return (
    <>
      <SectionTitle>맴버십제도 소개</SectionTitle>
      <MembershipSelector
        activeOption={membershipOption}
        style={{ alignSelf: "center" }}
        handleClick={handleClick}
      />
      {membershipOption === "basic" ? (
        <Image src={tempImage} />
      ) : (
        <Image src={profImage} />
      )}
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
        nibh erat, ut convallis leo convallis in. Cras sed est augue. Fusce sed
        arcu semper arcu aliquet aliquam. Donec posuere lacus dui, ac
        pellentesque lectus eleifend et. Cras et sem nec nulla iaculis semper
        vitae sed ante. Nam ex turpis, consequat et auctor nec, pellentesque sit
        amet tortor. Suspendisse justo diam, commodo a pellentesque id,
        pellentesque at nibh. Fusce et nunc odio. Fusce accumsan ipsum nunc, et
        venenatis ligula rutrum quis. Donec varius dapibus aliquam. Vivamus
        efficitur ultricies augue, ut blandit orci sagittis fringilla. Aenean
        tempus fringilla leo, at tristique massa vestibulum eget. Pellentesque
        et imperdiet est, eget ultrices quam. Etiam pharetra lorem sit amet
        vehicula luctus. Ut posuere tellus justo, eu gravida libero ultrices ut.
      </SectionText>
      <SectionTitle>부가서비스</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
        nibh erat, ut convallis leo convallis in. Cras sed est augue. Fusce sed
        arcu semper arcu aliquet aliquam. Donec posuere lacus dui, ac
        pellentesque lectus eleifend et. Cras et sem nec nulla iaculis semper
        vitae sed ante. Nam ex turpis, consequat et auctor nec, pellentesque sit
        amet tortor. Suspendisse justo diam, commodo a pellentesque id,
        pellentesque at nibh. Fusce et nunc odio. Fusce accumsan ipsum nunc, et
        venenatis ligula rutrum quis. Donec varius dapibus aliquam. Vivamus
        efficitur ultricies augue, ut blandit orci sagittis fringilla. Aenean
        tempus fringilla leo, at tristique massa vestibulum eget. Pellentesque
        et imperdiet est, eget ultrices quam. Etiam pharetra lorem sit amet
        vehicula luctus. Ut posuere tellus justo, eu gravida libero ultrices ut.
      </SectionText>
      <Table style={{ width: "70%", alignSelf: "center" }}>
        <colgroup>
          <col style={{ width: "50%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <HeaderRow>
            <HeaderColumn grid backgroundColor={"#ddd"}>
              부가서비스 내용
            </HeaderColumn>
            <HeaderColumn grid backgroundColor={"#ddd"}>
              금액
            </HeaderColumn>
            <HeaderColumn></HeaderColumn>
          </HeaderRow>
        </thead>
        <tbody>
          <Row>
            <Column grid>1. 단과대학별 비교</Column>
            <Column grid>55만원</Column>
            <Column>
              <DownloadLink
                href={tempImage}
                target="_blank"
                download="download.png"
              >
                부가서비서1 예시
              </DownloadLink>
            </Column>
          </Row>
          <Row>
            <Column grid>2. Peer Benchmarking</Column>
            <Column grid>55만원</Column>
            <Column>
              <DownloadLink
                href={tempImage}
                target="_blank"
                download="download.png"
              >
                부가서비서2 예시
              </DownloadLink>
            </Column>
          </Row>
          <Row>
            <Column grid>3. 대학별 컨설팅</Column>
            <Column grid>110만원</Column>
            <Column>
              <DownloadLink
                href={tempImage}
                target="_blank"
                download="download.png"
              >
                부가서비서3 예시
              </DownloadLink>
            </Column>
          </Row>
        </tbody>
      </Table>
    </>
  );
};

const UICA = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const handleButton = (section) => {
    setActiveSection(section);
  };

  return (
    <SingleColumnContainer>
      <RowDiv>
        <Button
          onClick={() => handleButton("intro")}
          active={activeSection === "intro"}
        >
          진단소개
        </Button>
        <Button
          onClick={() => handleButton("member")}
          active={activeSection === "member"}
        >
          맴버십 제도
        </Button>
        <Link right href={"https://www.google.com"} target={"_blank"}>
          참여신청
        </Link>
      </RowDiv>
      {activeSection === "intro" ? <Intro /> : <Member />}
    </SingleColumnContainer>
  );
};

export default UICA;
