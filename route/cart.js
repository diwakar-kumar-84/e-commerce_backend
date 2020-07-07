var express = require("express");
var BodyParser = require("body-parser");
var router = express.Router();
var User = require("../schema/userSchema");
router.use(BodyParser.json());

router.post("/addincart/:id", (req, res) => {
  //   console.log(req.body);
  User.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        cart: {
          productId: req.body.productId,
          qty: req.body.qty,
        },
      },
    },
    function (err, data) {
      if (err) return res.status(500).send({ err: "Adding to cart failed" });
      return res.send("successfully added to cart");
    }
  );
});

router.post("/removeincart/:id", (req, res) => {
  //   console.log(req.body);
  User.findByIdAndUpdate(
    req.params.id,
    {
      $pull: {
        cart: {
          productId: req.body.productId,
        },
      },
    },
    { safe: true, multi: true },
    function (err, data) {
      if (err) return res.status(500).send({ err: "remove failed" });
      return res.send("successfully removed");
    }
  );
});
router.post("/updateincart/:id", (req, res) => {
  //   console.log(req.body);
  User.updateOne(
    { _id: req.params.id, "cart.productId": req.body.productId },
    {
      $set: {
        "cart.$.qty": req.body.qty,
      },
    },
    function (err, data) {
      if (err) return res.status(500).send({ err: "update failed" });
      return res.send("successfully updated");
    }
  );
});

module.exports = router;
