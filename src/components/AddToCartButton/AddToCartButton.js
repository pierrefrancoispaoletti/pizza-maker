import { faCartPlus } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AddToCartButtonstyled } from "./add-to-cart-button.style";

const Addtocartbutton = ({ handleAddToCart }) => {
  return (
    <AddToCartButtonstyled type="button" onClick={() => handleAddToCart()}>
      <FontAwesomeIcon icon={faCartPlus} size="2x" />
      <span>Ajouter Ma Pizza au panier</span>
    </AddToCartButtonstyled>
  );
};

export default Addtocartbutton;
