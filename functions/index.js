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
    // redirect: "if_required",
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

  await admin.firestore().collection("orders").doc(dataObject.id).set({
    checkoutSessionId: dataObject.id,
    docID: dataObject.metadata.docID,
    paymentStatus: dataObject.status,
    amountTotal: dataObject.amount_received,
    products: dataObject.metadata.products,
    date: dataObject.metadata.date,
    receipt: dataObject.charges.data[0].receipt_url,
    total: dataObject.metadata.total,
    contacts: dataObject.metadata.contacts,
  });

  return res.sendStatus(200);
});

const calculateOrderAmount = (data) => {
  let subtotal = 0;
  let total = 0;
  const transactionFee = 5;
  const tax = 6.25;
  if (data[0] != undefined) {
    for (const item of data) {
      subtotal += item.price * item.qty;
    }
    total =
      (subtotal + (subtotal * tax) / 100 + transactionFee).toFixed(2) * 100;
    return total;
  }
  return 0;
};

// cloud functions for built-in stripe element component
exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const amount = calculateOrderAmount(data.products);
  // const orderProducts = removeUnnecessaryProductDetails(data.order.products);
  // data.order.products = orderProducts;

  const products = JSON.stringify(data.products);
  const contacts = JSON.stringify(data.contacts);
  // const participants = JSON.stringify(data.participants);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      docID: data.id,
      products: products,
      date: data.date,
      total: (amount / 100).toFixed(2),
      contacts: contacts,
    },
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
});
