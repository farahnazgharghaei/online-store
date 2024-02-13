const Joi = require("joi");
const productSchema = Joi.object({
  name: Joi.string().valid("[a-zA-Z]").min(3).max(30).required(),

  phone: Joi.string()
    .regex(/^\\d{3}-\\d{3}-\\d{4}$/) //"123-456-7890"
    .required(),
  description: Joi.max(5000).required(),
});
module.exports = productSchema;
