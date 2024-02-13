const mongoose = require("mongoose");


const productSchema = mongoose.Schema(
  {
    name:  String,
    price: { type: Number },
    image: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
