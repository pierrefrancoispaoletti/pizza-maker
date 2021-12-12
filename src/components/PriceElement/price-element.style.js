import styled, { css } from "styled-components";

const isOpen = (props) => {
  if (!props.open) {
    return css`
      position: fixed;
      top: 61px;
      left: 4px;
      z-index: 500;
    `;
  }
  return css`
    position: fixed;
    top: 61px;
    left: 4px;
    z-index: 500;
  `;
};

export const PriceElementContainer = styled.div`
  ${isOpen}
  background-color: yellow;
  text-align: center;
  border: 3px solid orange;
  border-radius: 50px;
  padding: 10px;
  font-size: 1.5em;
  & .ingredients-count {
    font-size: 0.6em;
    display: block;
  }
`;
