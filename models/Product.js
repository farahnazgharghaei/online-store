const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = mongoose.Schema(
  {
    // name: { type: String, match: /[a-z]/ },
    // name: Joi.string().valid("[a-zA-Z]").min(3).max(30).required(),
    name: Joi.string().min(3).required(),
    price: { type: Number },
    image: { type: String },
    // phone: Joi.string()
    //   .regex(/^\\d{3}-\\d{3}-\\d{4}$/) //"123-456-7890"
    //   .required(),
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
