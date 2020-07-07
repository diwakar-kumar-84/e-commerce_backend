var express = require("express");
var mongoose = require("mongoose");
//routes
var user = require("./route/user");
var product = require("./route/product");
var cart = require("./route/cart");

var app = express();

app.use("/user", user);
app.use("/product", product);
app.use("/cart", cart);

mongoose.connect(
  "mongodb://127.0.0.1:27017/ecom",
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  }
);

app.listen(3000);
