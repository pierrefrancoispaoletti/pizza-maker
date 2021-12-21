import React, { useEffect, useState } from "react";
import Addtocartbutton from "../components/AddToCartButton/AddToCartButton";
import CurrentIngredients from "../components/CurrentIngrédients/CurrentIngredients";
import IngredientSelector from "../components/IngredientSelector/IngredientSelector";
import Pizzaeditor from "../components/PizzaEditor/PizzaEditor";

const Home = ({
  sauces,
  setSauces,
  toppings,
  setToppings,
  cheeses,
  setCheeses,
  cart,
  setCart,
}) => {
  const [currentPizza, setCurrentPizza] = useState([]);
  let price = currentPizza.reduce((acc, amt) => acc + amt.price, 9);
  useEffect(() => {
    setCurrentPizza(
      [...sauces, ...toppings, ...cheeses].flat().filter((item) => item.visible)
    );
  }, [sauces, toppings, cheeses]);

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

  return (
    <div>
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
    </div>
  );
};

export default Home;
