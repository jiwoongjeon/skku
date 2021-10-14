import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Text = styled.p``;

export const Title = styled.h1`
  margin-top: 0;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  ${(props) => {
    if (props.direction === "row") {
      return `
        flex-direction: row;
        justify-content: center;
      `;
    } else {
      return `
        flex-direction: column;
        justify-content: center;
      `;
    }
  }}
`;
