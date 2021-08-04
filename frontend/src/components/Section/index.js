import styled from "styled-components";

const Section = styled.div`
  ${(props) => {
    if (props.background) {
      return `
        background: url(${props.background}) no-repeat center center fixed;
        background-size: cover;
      `;
    }
  }}
  height: ${(props) => props.height}
`;

export default Section;
