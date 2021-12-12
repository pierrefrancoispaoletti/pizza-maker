import React from "react";
import { Bases } from "../../assets/images/bases/base";

import PizzaElement from "../PizzaElement/PizzaElement";
import { PizzaEditorContainer } from "./pizza-editor.style";

const Pizzaeditor = ({ sauces, toppings, cheeses }) => {
  return (
    <PizzaEditorContainer>
      {Bases?.map((base, index) => (
        <PizzaElement key={base.name} {...base} index={index} />
      ))}

      {cheeses?.map((cheese, index) => (
        <PizzaElement key={cheese.name} {...cheese} index={index} cheese />
      ))}

      {sauces?.map((sauce, index) => (
        <PizzaElement key={sauce.name} {...sauce} index={index} />
      ))}

      {toppings?.map((topping, index) => (
        <PizzaElement key={topping.name} {...topping} index={index} topping />
      ))}
    </PizzaEditorContainer>
  );
};

export default Pizzaeditor;
