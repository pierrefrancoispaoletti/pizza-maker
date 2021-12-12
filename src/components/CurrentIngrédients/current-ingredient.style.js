import styled, { css } from "styled-components";
const isOpen = (props) => {
  if (props.open) {
    return css`
      display: unset;
    `;
  }
  return css`
    display: none;
  `;
};
export const CurrentIngredientsContainer = styled.div`
  background-color: transparent;
  flex-direction: column;
  position: fixed;
  display: flex;
  top: 61px;
  right: 0;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: auto 0;
  z-index: 500;
  ${isOpen}
`;

export const IngredientContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 6px;
  border-radius: 50px;
  margin-bottom: 3px;
  background-color: white;
  :not(last-child) {
    margin-right: 6px;
  }
`;

export const DeleteIngredientButton = styled.button`
  align-items: center;
  text-align: center;
  background: white;
  outline: none;
  border: 1px solid black;
  border-radius: 50px;
  font-size: 0.5em;
  color: red;
  text-align: center;
  margin-left: 5px;
`;
