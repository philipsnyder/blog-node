const { createClient } = require("redis");
const express = require("express");
const contactsRouter = require("./modules/contacts");
require("dotenv").config();

// ** NODE SETUP **
var app = express();

app.use("/contacts", contactsRouter);

app.get("/", function (request, response) {
  response.send("Hello World!");
});
app.listen(3300, function () {
  console.log("Started the application on port %d", 3300);
});

// module.exports = router;

// ** REDIS SETUP **
// const client = createClient({
//   url: process.env.REDIS_URL,
// });

// client.on("error", (err) => console.log("Redis Client Error", err));
// client
//   .connect()
//   .then(() => console.log("Connected to Redis"))
//   .catch((err) => console.log("Failed to connect to Redis", err));
