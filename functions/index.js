const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51MebHoGqJxDY57r4YziOg48ztOWpge9ttCz6cuHIU1ZdHdy0xTuH2ZC5AAlye1XkiS1PxMBTYPs5ZyIW9j8QpI3600ofOZw50F",
);

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  }); 
});

// Listen command
exports.api = functions.https.onRequest(app);
