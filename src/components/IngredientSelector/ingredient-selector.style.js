import styled, { css } from "styled-components";

const selected = (props) => {
  if (props.selected) {
    return css`
      background-color: black;
      color: white;
    `;
  }
};

export const IngredientSelectorContainer = styled.div`
  display: flex;
  padding: 8px 0px;
  overflow-x: auto;
  flex-direction: column;
`;

export const ButtonIngredientsSelectorContainer = styled.ul`
  padding: 0px 8px;
  display: flex;
  align-items: flex-start;
  list-style: none;
  margin: 0 0;
`;

export const ButtonIngredientListContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: 12px;
  padding: 6px;
  transition: all 0.5s;
`;

export const ButtonSelectorStyled = styled.button`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  ${selected}
  img {
    width: 60px;
    height: 60px;
  }
`;
