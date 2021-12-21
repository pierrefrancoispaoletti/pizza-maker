import React from "react";
import { PaymentButtonStyled } from "./payment-button.style";

const PaymentButton = ({ children, ...props }) => {
  return <PaymentButtonStyled {...props}>{children}</PaymentButtonStyled>;
};

export default PaymentButton;
