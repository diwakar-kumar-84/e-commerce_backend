var mongoose = require("mongoose");
var productSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  weight: { type: Number, required: true },
  price: { type: Number, required: true },
});
var Product = mongoose.model("product", productSchema);
module.exports = Product;
