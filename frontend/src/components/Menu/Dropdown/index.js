import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div`
  display: flex;
  visibility: ${(props) => (props.dropdownOpen ? "visible" : "hidden")};
  transition: 0.2s ease-in-out;
  position: absolute;
  top: 70px;
  width: 100%;
  background-color: rgba(0, 68, 131, 0.75);
  padding-right: 10px;
  box-sizing: border-box;
  z-index: 10000;
`;

export const DropdownMenu = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const DropdownMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-3);
  min-width: 130px;
  gap: 10px;
  margin: 10px 0;

  @media only screen and (max-width: 960px) {
    gap: 5px;
  }
`;
export const DropdownMenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  user-select: none;
  z-index: 1;
  display: block;
  text-align: center;
  font-size: var(--font-siz-3);

  &:hover {
    color: #b6b6b6;
  }
`;
