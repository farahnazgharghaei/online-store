const Joi = require("joi");
const productSchema = Joi.object({
  name: Joi.string()
    .pattern(new RegExp("^[a-zA-Z]+$"))
    .min(3)
    .max(30)
    .required(),
  price: Joi.number().required(),
  image: Joi.string(),
  description: Joi.string().max(5000).required(),
});
module.exports = productSchema;
