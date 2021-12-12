import React from "react";
import { PriceElementContainer } from "./price-element.style";

const PriceElement = ({ price, open, setOpen, children }) => {
  return (
    <PriceElementContainer
      open={open}
      setOpen={setOpen}
      onClick={() => setOpen(!open)}
    >
      <span>
        {price?.toFixed(2)} <small>€</small>
      </span>
      {children}
    </PriceElementContainer>
  );
};

export default PriceElement;
