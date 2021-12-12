import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PriceElement from "../PriceElement/PriceElement";
import {
  CurrentIngredientsContainer,
  DeleteIngredientButton,
  IngredientContainer,
} from "./current-ingredient.style";

const CurrentIngredients = ({
  currentPizza,
  handleRemoveIngredient,
  price,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CurrentIngredientsContainer open={open}>
        {currentPizza.map((ingredient, index) => (
          <IngredientContainer key={ingredient.name}>
            <span>{ingredient.name}</span>
            <DeleteIngredientButton
              onClick={() => handleRemoveIngredient(ingredient, index)}
            >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </DeleteIngredientButton>
          </IngredientContainer>
        ))}
      </CurrentIngredientsContainer>
      {currentPizza.length > 0 && (
        <PriceElement price={price} open={open} setOpen={setOpen}>
          <span className="ingredients-count">
            {currentPizza.length} Ingrédient
          </span>
        </PriceElement>
      )}
    </>
  );
};

export default CurrentIngredients;
