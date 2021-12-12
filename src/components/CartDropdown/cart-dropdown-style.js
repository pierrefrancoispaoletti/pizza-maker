import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  border: 1px solid black;
  background: white;
  padding: 1.5em;
  z-index: 600;
  width: 100%;
  top: 61px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartContentContainer = styled.div`
  align-self: center;
  width: 100%;
  .cart-ingredients {
    text-align: right !important;
    display: inline-block;
    ::after {
      content: ", ";
    }
  }
`;

export const CartTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  .cart-title {
    margin: 0;
  }
`;

export const PaymentContainer = styled.div`
  margin: 12px 8px 8px 8px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .cart-total {
    border-bottom: 1px solid black;
    display: inline-block;
  }
`;

export const LinkToCheckout = styled(Link)`
  border-bottom: 1px solid black;
  background-color: black;
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 12px;
  :active {
    background-color: white;
    color: black;
    border-bottom: 1px solid white;
  }
`;
