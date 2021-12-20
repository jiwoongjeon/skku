import { Container, OptionDiv, TypeText, PriceText, Button } from "./styles";

const MembershipSelector = ({ activeOption, handleClick, ...restProps }) => {
  console.log(activeOption);
  return (
    <Container {...restProps}>
      <OptionDiv
        active={activeOption === "basic"}
        onClick={() => handleClick("basic")}
      >
        <TypeText>BASIC</TypeText>
        <PriceText>(무료)</PriceText>
        <Button>BASIC 보고서 예시</Button>
      </OptionDiv>
      <OptionDiv
        active={activeOption === "premier"}
        onClick={() => handleClick("premier")}
      >
        <TypeText>PREMIER</TypeText>
        <PriceText>(110만원)</PriceText>
        <Button>PREMIER 보고서 예시</Button>
      </OptionDiv>
    </Container>
  );
};

export default MembershipSelector;
