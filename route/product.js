var express = require("express");
var BodyParser = require("body-parser");
var router = express.Router();
var Product = require("../schema/productSchema");
router.use(BodyParser.json());

router.post("/additem", (req, res) => {
  //   console.log(req.body);
  var productData = new Product({
    productId: req.body.productId,
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    category: req.body.category,
    weight: req.body.weight,
    price: req.body.price,
  });
  productData
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.get("/allitem", (req, res) => {
  Product.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.post("/finditem", (req, res) => {
  //   console.log(req.body);
  if (req.body.type == "name") {
    Product.find({ name: req.body.value })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  } else if (req.body.type == "category") {
    Product.find({ category: req.body.value })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  } else if (req.body.type == "productId") {
    Product.find({ productId: req.body.value })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  }
});
module.exports = router;
