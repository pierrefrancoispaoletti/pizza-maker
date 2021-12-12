import React from "react";
import { PizzaElementStyled } from "./pizza-element.style";

const PizzaElement = ({ visible, image, name, index, cheese, topping }) => {
  return (
    <PizzaElementStyled
      visible={visible}
      src={image}
      alt={name}
      index={index}
      cheese={cheese}
      topping={topping}
    />
  );
};

export default PizzaElement;
