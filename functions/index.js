const functions = require("firebase-functions");

// cloud functions for redirected stripe checkout page
exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  functions.logger.log("data", data, "context", context);
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: data.line_items,
    success_url: "http://localhost:3000/customer/1",
    cancel_url: "http://localhost:3000/customer/2",
  });
  return {
    id: session.id,
    url: session.url,
  };
});

const calculateOrderAmount = (data) => {
  let subtotal = 0;
  let total = 0;
  const transactionFee = 500;
  const tax = 6.25;
  if (data[0] != undefined) {
    for (const item of data) {
      subtotal += item.price * item.quantity;
    }
    total = subtotal * 100 + Math.round(subtotal * tax) + transactionFee;
    return total;
  }
  return 0;
};

// cloud functions for built-in stripe element component
exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const products = data.products;
  // const orderProducts = removeUnnecessaryProductDetails(data.order.products);
  // data.order.products = orderProducts;

  // const customer = JSON.stringify(data.customer);
  // const order = JSON.stringify(data.order);
  // const participants = JSON.stringify(data.participants);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(products),
    // amount: 1400,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      docID: data.id,
      // customer: customer,
      // order: order,
      // participants: participants,
    },
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
});
