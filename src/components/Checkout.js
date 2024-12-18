import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Call backend to create a checkout session
    const response = await fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <button onClick={handleCheckout}>Subscribe</button>
  );
};

export default Checkout;
