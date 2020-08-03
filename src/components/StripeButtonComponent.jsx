import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Ribbon from "../images/BIGBANG.png";

const StripeCheckoutButton = ({ price, clearInputs }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HBh9rC2O9joBNMFbuyqZBrAsESESgWeDD2CVsnKyAj1foRwgh8E9y961pW5rUJGICMMyNnW7kgltwNACiTDiA4300CYiaU0Ps";

  const onToken = (token) => {
    console.log(token);
    clearInputs();
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Etiquette GmbH"
      image={Ribbon}
      description={`Your total is  ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
