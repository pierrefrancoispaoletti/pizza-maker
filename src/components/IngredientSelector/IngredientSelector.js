import React from "react";
import {
  ButtonIngredientListContainer,
  ButtonIngredientsSelectorContainer,
  ButtonSelectorStyled,
  IngredientSelectorContainer,
} from "./ingredient-selector.style";

const IngredientSelector = ({ array, func }) => {
  return (
    <IngredientSelectorContainer>
      <ButtonIngredientsSelectorContainer>
        {array?.map((item, index) => (
          <ButtonIngredientListContainer key={item.name}>
            <ButtonSelectorStyled
              type="button"
              selected={array[index]["visible"]}
              onClick={() => func(index)}
            >
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </ButtonSelectorStyled>
          </ButtonIngredientListContainer>
        ))}
      </ButtonIngredientsSelectorContainer>
    </IngredientSelectorContainer>
  );
};

export default IngredientSelector;
