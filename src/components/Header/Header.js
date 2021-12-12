import { faShoppingBasket, faUser } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  CartElement,
  HeaderContainer,
  IconContainer,
  LinkElement,
} from "./header.style";

const Header = ({ setOpen, open, cart }) => {
  return (
    <HeaderContainer>
      <div>
        <h1>Pizza Creator</h1>
      </div>
      <div>
        <IconContainer>
          <LinkElement to="/user">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </LinkElement>
          <CartElement onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faShoppingBasket} size="2x" />
            <span>{cart.reduce((acc, amt) => acc + amt.quantity, 0)}</span>
          </CartElement>
        </IconContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
