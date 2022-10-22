import { useSelector } from "react-redux";
import { getFunctions, httpsCallable } from "firebase/functions";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/CheckoutForm";
import { Flex } from "@chakra-ui/react";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

function PaymentStep() {
  const cart = useSelector((state) => state.cart);
  // const customer = useSelector((state) => state.cart.contacts);
  const orderId = useSelector((state) => state.customer.customer.id);
  const [clientSecret, setClientSecret] = useState("");

  // const orderDetails = {
  //   docID: orderId,
  //   customer: customerDetails,
  //   order: {
  //     bookingDate: bookingDate,
  //     products: products,
  //   },
  //   stripe: {
  //     transactionID: "",
  //     confirmDate: "",
  //     amount: "",
  //     receiptURL: "",
  //   },
  //   participants: participants,
  // };

  const order = {
    id: orderId,
    products: [],
    date: cart.date,
    contacts: cart.contacts,
  };
  cart.products.map((p) => {
    return order.products.push({
      id: p.id,
      name: p.name,
      time: p?.time || "10:00",
      price: p.price,
      qty: +p.quantity,
    });
  });
  cart.addons.map((a) => {
    return order.products.push({
      id: a.id,
      name: a.name,
      price: a.price,
      qty: +a.quantity,
    });
  });

  console.log("order", order);

  useEffect(() => {
    const functions = getFunctions();
    const createPaymentIntent = httpsCallable(functions, "createPaymentIntent");

    createPaymentIntent(order).then((result) =>
      setClientSecret(result.data.clientSecret)
    );
    // eslint-disable-next-line
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#ff0080",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  // REDIRECTED STRIPE PAGE CHECKOOUT
  // const items = [];
  // products.map((p) => {
  //   return items.push({ price: p.stripe, quantity: +p.quantity });
  // });
  // addons.map((a) => {
  //   return items.push({ price: a.stripe, quantity: +a.quantity });
  // });

  // const handleCheckout = async (e) => {
  //   e.preventDefault();
  //   const functions = getFunctions();
  //   const createStripeCheckout = httpsCallable(
  //     functions,
  //     "createStripeCheckout"
  //   );
  //   const stripe = await loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
  //   console.log("handleCheckout");
  //   console.log("email", customer.email, "items", items);
  //   createStripeCheckout({
  //     customer_email: customer.email,
  //     line_items: items,
  //   })
  //     .then((response) => {
  //       const sessionId = response.data.id;
  //       console.log("check1", response.data);
  //       // window.location = response.data.url;
  //       stripe.redirectToCheckout({ sessionId: sessionId });
  //     })
  //     .catch((error) => {
  //       console.log(`error: ${JSON.stringify(error)}`);
  //     });
  // };

  return (
    <Flex
      w="100%"
      flexDirection="column"
      className="payment_step__stripe_element"
    >
      {/* <button onClick={handleCheckout}>pay</button> */}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} key={clientSecret}>
          <CheckoutForm />
        </Elements>
      )}
    </Flex>
  );
}

export default PaymentStep;
