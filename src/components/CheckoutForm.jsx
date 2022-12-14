import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { chakra, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentStatus } from "redux/cartSlice";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const customer = useSelector((state) => state.customer.customer);
  const payment = useSelector((status) => status.cart.paymentStatus);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Please fill out the form to pay.");
          break;
        case "processing":
          setMessage("Loading...");
          break;
        case "requires_payment_method":
          setMessage(
            "Your payment form was not loaded successfully, please try again."
          );
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    try {
      await stripe
        .confirmPayment({
          elements,
          redirect: "if_required",
          confirmParams: {
            payment_method_data: {
              billing_details: {
                name: customer.name,
                email: customer.email,
                address: customer.email,
                phone: customer.phone,
              },
            },
            // Make sure to change this to your payment completion page
            // return_url: "http://localhost:3000/customer/success",
            // return_url: `${redirectURI}?booking=${bookingToken}`
          },
        })
        .then(function (result) {
          if (result.paymentIntent) {
            console.log("success!!!");
            dispatch(setPaymentStatus({ status: true }));
          }
        });
    } catch (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      {!payment && (
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          {message && (
            <Text mt={3} id="payment-message">
              {message}
            </Text>
          )}
          <chakra.button
            disabled={isLoading || !stripe || !elements}
            mt={10}
            mb="-20px"
            w="100%"
            px="3"
            py="2"
            bg={`green.200`}
            rounded="5"
            _hover={{ bg: `green.300` }}
            onSubmit={handleSubmit}
          >
            "Pay Now"
          </chakra.button>
          {/* <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button> */}
          {/* Show any error or success messages */}
        </form>
      )}
    </>
  );
}

export default CheckoutForm;
