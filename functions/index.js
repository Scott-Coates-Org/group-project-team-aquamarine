const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// cloud functions for redirected stripe checkout page
exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  functions.logger.log("data", data, "context", context);
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: data.line_items,
    redirect: "if_required",
    // success_url: "http://localhost:3000/customer/1",
    // cancel_url: "http://localhost:3000/customer/2",
  });
  return {
    id: session.id,
    url: session.url,
  };
});

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  let event;
  try {
    const whSecret = functions.config().stripe.payments_webhook_secret;
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      req.headers["stripe-signature"],
      whSecret
    );
  } catch (error) {
    console.error("Webhook signature verification failed.");
    return res.sendStatus(400);
  }
  const dataObject = event.data.object;
  console.log(dataObject);

  await admin.firestore().collection("orders").doc().set({
    checkoutSessionId: dataObject.id,
    paymentStatus: dataObject.status,
    amountTotal: dataObject.amount_received,
  });

  return res.sendStatus(200);
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
