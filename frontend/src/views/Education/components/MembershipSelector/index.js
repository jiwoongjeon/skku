import { Container, OptionDiv, TypeText, PriceText } from "./styles";

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
      </OptionDiv>
      <OptionDiv
        active={activeOption === "premier"}
        onClick={() => handleClick("premier")}
      >
        <TypeText>PREMIER</TypeText>
        <PriceText>(110만원)</PriceText>
      </OptionDiv>
    </Container>
  );
};

export default MembershipSelector;
