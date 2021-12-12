import { faMinus, faPlus, faTrash } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  CartContentContainer,
  CartDropDownContainer,
  CartTitleContainer,
  LinkToCheckout,
  PaymentContainer,
} from "./cart-dropdown-style";

const CartDropdown = ({ open, cart, updateQuantity }) => {
  return open ? (
    <CartDropDownContainer>
      {cart.map((pizza) => {
        const { title, ingredients, price, quantity } = pizza;
        return (
          <CartContentContainer key={title}>
            <CartTitleContainer>
              <h3 className="cart-title">{title}</h3>
              <span className="cart-quantity">
                {" "}
                <FontAwesomeIcon
                  icon={faMinus}
                  color="purple"
                  onClick={() => updateQuantity(pizza, "minus")}
                />{" "}
                {quantity}{" "}
                <FontAwesomeIcon
                  color="green"
                  icon={faPlus}
                  onClick={() => updateQuantity(pizza, "plus")}
                />
              </span>
              <span className="cart-price">
                {price.toFixed(2)}
                <small>€</small>
              </span>
              <FontAwesomeIcon
                color="red"
                icon={faTrash}
                onClick={() => updateQuantity(pizza, "delete")}
              />
            </CartTitleContainer>
            {ingredients.map((ingredient) => (
              <span key={ingredient.name} className="cart-ingredients">
                {ingredient.name}
              </span>
            ))}
          </CartContentContainer>
        );
      })}
      {cart.length > 0 ? (
        <PaymentContainer>
          <span className="cart-total">
            Total :{" "}
            {cart
              .reduce((acc, amt) => acc + amt.price * amt.quantity, 0)
              .toFixed(2)}
            <small>€</small>
          </span>
          <LinkToCheckout to="/paiement">
            <span>Payer !</span>
          </LinkToCheckout>
        </PaymentContainer>
      ) : (
        <span>Votre Panier est vide</span>
      )}
    </CartDropDownContainer>
  ) : (
    <></>
  );
};

export default CartDropdown;
