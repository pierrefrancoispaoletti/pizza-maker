import styled from "styled-components";
import { css } from "styled-components";

const isVisible = (props) => {
  if (props.visible) {
    return css`
      visibility: visible;
    `;
  }
  return css`
    visibility: hidden;
  `;
};

export const PizzaElementStyled = styled.img`
  ${isVisible}
  position: absolute;
  max-width: 280px;
  z-index: ${(props) =>
    props.cheese
      ? props.index + 10
      : props.topping
      ? props.index + 21
      : props.index};
`;
