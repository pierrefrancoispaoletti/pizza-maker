import React, { useEffect, useState } from "react";
import { Cheeses } from "../../assets/images/cheeses/cheeses";
import { Sauces } from "../../assets/images/sauces/sauces";
import { Toppings } from "../../assets/images/toppings/toppings";
import Addtocartbutton from "../AddToCartButton/AddToCartButton";
import CartDropdown from "../CartDropdown/CartDropdown";
import CurrentIngredients from "../CurrentIngrédients/CurrentIngredients";
import Header from "../Header/Header";
import IngredientSelector from "../IngredientSelector/IngredientSelector";
import Pizzaeditor from "../PizzaEditor/PizzaEditor";
import { AppContainer } from "./app.style";

const App = () => {
  const [sauces, setSauces] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [cheeses, setCheeses] = useState([]);
  const [currentPizza, setCurrentPizza] = useState([]);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setSauces([...Sauces]);
    setToppings([...Toppings]);
    setCheeses([...Cheeses]);
  }, []);

  useEffect(() => {
    setCurrentPizza(
      [...sauces, ...toppings, ...cheeses].flat().filter((item) => item.visible)
    );
  }, [sauces, toppings, cheeses]);

  let price = currentPizza.reduce((acc, amt) => acc + amt.price, 9);

  const changeSauce = (index) => {
    //ici on ne peut selectioner qu'une seule sauce
    let newArr = [...sauces];
    newArr.map((o) => (o.visible = false));
    newArr[index]["visible"] = !sauces[index]["visible"];
    setSauces([...newArr]);
  };

  const changeIngredient = (index) => {
    let newArr = [...toppings];
    newArr[index]["visible"] = !toppings[index]["visible"];
    setToppings([...newArr]);
  };

  const changeCheese = (index) => {
    let newArr = [...cheeses];
    newArr[index]["visible"] = !cheeses[index]["visible"];
    setCheeses([...newArr]);
  };

  const handleRemoveIngredient = (ingredient) => {
    const itemIndex = currentPizza.indexOf(ingredient);
    const toppingIndex = toppings.indexOf(ingredient);
    const sauceIndex = sauces.indexOf(ingredient);
    const cheeseIndex = cheeses.indexOf(ingredient);
    if (toppingIndex !== -1) {
      changeIngredient(toppingIndex);
    }
    if (cheeseIndex !== -1) {
      changeCheese(cheeseIndex);
    }
    if (sauceIndex !== -1) {
      changeSauce(sauceIndex);
    }
    const newArray = [...currentPizza];
    newArray.splice(itemIndex, 1);
    setCurrentPizza(newArray);
  };

  const handleAddToCart = () => {
    const newPizza = {
      title: `Ma pizza #${cart.length + 1}`,
      ingredients: currentPizza.map((ingredients) => ingredients),
      price: price,
      quantity: 1,
    };

    let index = cart.findIndex(
      (item) =>
        JSON.stringify(item.ingredients) ===
        JSON.stringify(newPizza.ingredients)
    );

    if (index !== -1) {
      let newCart = [...cart];
      newCart[index]["quantity"] += 1;
      setCart([...newCart]);
    } else {
      setCart([...cart, newPizza]);
    }
  };

  const updateQuantity = (item, operation) => {
    let newCart = [...cart];
    let index = cart.indexOf(item);
    if (operation === "minus") {
      if (index !== -1) {
        newCart[index]["quantity"] -= 1;
      }
      if (newCart[index]["quantity"] === 0) {
        newCart.splice(index, 1);
      }
    }
    if (operation === "plus") {
      if (index !== -1) {
        newCart[index]["quantity"] += 1;
      }
    }
    if (operation === "delete") {
      newCart.splice(index, 1);
    }
    setCart([...newCart]);
  };
  return (
    <AppContainer>
      <Header setOpen={setOpen} open={open} cart={cart} />
      <CartDropdown open={open} cart={cart} updateQuantity={updateQuantity} />
      <Pizzaeditor sauces={sauces} toppings={toppings} cheeses={cheeses} />
      {currentPizza.length > 0 && (
        <Addtocartbutton handleAddToCart={handleAddToCart} />
      )}
      <CurrentIngredients
        currentPizza={currentPizza}
        handleRemoveIngredient={handleRemoveIngredient}
        price={price}
      />
      <IngredientSelector array={sauces} func={changeSauce} />
      <IngredientSelector array={cheeses} func={changeCheese} />
      <IngredientSelector array={toppings} func={changeIngredient} />
    </AppContainer>
  );
};

export default App;
