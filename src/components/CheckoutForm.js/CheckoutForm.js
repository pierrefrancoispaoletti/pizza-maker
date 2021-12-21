import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import PaymentButton from "../PaymentButton/PaymentButton";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ setMessage, cart, setCart }) => {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [succeed, setSucceed] = useState(null);
  const [error, setError] = useState(null);

  console.log(cart);

  const getCartTotal = (cart) => {
    return cart
      .reduce((acc, amt) => acc + amt.price * amt.quantity, 0)
      .toFixed(2);
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      console.log(error);
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (e.g., payment
      // details incomplete)
    } else {
      //ici on vide la panier et on redirige vers la page d'acceuil avec un message reussite
      //de la meme façon on crée la commande dans le back office
      setCart([]);
      navigate("/", { replace: true });
      setMessage("success");
      console.log("success");
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payer votre Commande</h2>
      <PaymentElement />
      <PaymentButton>{`Payer ${getCartTotal(cart)} €`}</PaymentButton>
    </form>
  );
};

export default CheckoutForm;
