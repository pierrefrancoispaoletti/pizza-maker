const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SK_KEY_DEV);

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const calculateOrderAmount = (cart) => {
  let ingredientsPriceArray = cart.map(
    (pizza) =>
      pizza.ingredients.reduce((acc, amt) => acc + amt.price, 9) *
      pizza.quantity
  );

  let total = 0;

  for (let i = 0; i < ingredientsPriceArray.length; i++) {
    total += ingredientsPriceArray[i];
  }

  if (total < 1) {
    return;
  } else {
    return total * 100;
  }
};

app.post("/create-payment-intent", async (req, res) => {
  const { cart } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(cart),
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log(paymentIntent);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.send({
      err,
    });
  }
  // Create a PaymentIntent with the order amount and currency
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
