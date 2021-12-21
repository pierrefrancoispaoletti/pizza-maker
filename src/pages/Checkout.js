import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm.js/CheckoutForm";
import { useNavigate } from "react-router-dom";
const stripePromise = loadStripe("");

const Checkout = ({ cart, setCart, setMessage }) => {
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        setMessage();
        navigate("/", { replace: true });
      });
  }, []);

  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return cart.length ? (
    <div
      style={{
        margin: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm cart={cart} setCart={setCart} setMessage={setMessage} />
        </Elements>
      )}
    </div>
  ) : (
    <p>votre panier est vide</p>
  );
};

export default Checkout;
