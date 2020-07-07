var express = require("express");
var BodyParser = require("body-parser");
var router = express.Router();
var User = require("../schema/userSchema");
router.use(BodyParser.json());

router.post("/login", (req, res) => {
  User.findOne({ mobile: req.body.mobile }).then((result) => {
    if (result) {
      console.log(result);
      if (result.password == req.body.password) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ err: "Wrong Password" });
      }
    } else {
      return res.status(400).json({ err: "No User Found" });
    }
  });
});
router.post("/signup", (req, res) => {
  // console.log(req.body);
  var data = new User({
    username: req.body.username,
    mobile: req.body.mobile,
    email: req.body.email,
    password: req.body.password,
  });
  data
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.get("/detail/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.put("/update/:id", (req, res) => {
  User.findOneAndUpdate(req.params.id, req.body, function (err, doc) {
    if (err) return res.status(500).send({ err: "Update failed" });
    return res.send("successfully saved");
  });
});
module.exports = router;
