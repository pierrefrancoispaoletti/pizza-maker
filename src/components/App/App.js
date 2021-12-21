import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cheeses } from "../../assets/images/cheeses/cheeses";
import { Sauces } from "../../assets/images/sauces/sauces";
import { Toppings } from "../../assets/images/toppings/toppings";
import Home from "../../pages/Home";
import Header from "../Header/Header";
import CartDropdown from "../CartDropdown/CartDropdown";
import { AppContainer } from "./app.style";
import Checkout from "../../pages/Checkout";

const App = () => {
  const [sauces, setSauces] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [cheeses, setCheeses] = useState([]);

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    setSauces([...Sauces]);
    setToppings([...Toppings]);
    setCheeses([...Cheeses]);
  }, []);

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
      {message}
      <Header setOpen={setOpen} open={open} cart={cart} />
      <CartDropdown open={open} cart={cart} updateQuantity={updateQuantity} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              sauces={sauces}
              toppings={toppings}
              cheeses={cheeses}
              setToppings={setToppings}
              setCheeses={setCheeses}
              setSauces={setSauces}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/paiement"
          element={
            <Checkout cart={cart} setCart={setCart} setMessage={setMessage} />
          }
        />
      </Routes>
    </AppContainer>
  );
};

export default App;
