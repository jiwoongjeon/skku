import styled from "styled-components";

import BackgroundImage from "../../assets/images/mainbackground.png";

export const HeroContainer = styled.div`
  background: url(${BackgroundImage}) center/cover no-repeat;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: var(--font-size-8);
  margin: 0;
  user-select: none;

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-6);
  }
`;

export const Subtitle = styled.h2`
  font-size: var(--font-size-4);
  font-weight: 400;
  margin: 0;
  user-select: none;

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-3);
  }
`;

export const SectionsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media only screen and (max-width: 960px) {
    gap: 10px;
  }
`;

export const SectionsItem = styled.p`
  ${(props) => {
    if (props.focused) {
      return `
        color: #000;
        font-weight: 500;
      `;
    } else {
      return `
        color: #aaa;
        font-weight: 400;
      `;
    }
  }};
  font-size: var(--font-size-3);
  font-weight: 600;
  user-select: none;

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-2);
  }
`;
