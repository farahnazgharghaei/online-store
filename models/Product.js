const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

productSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    (returnObj.id = returnObj._id.toString()),
      delete returnObj._id,
      delete returnObj.__v,
      delete returnObj.createdAt,
      delete returnObj.updatedAt
  },
});

module.exports = mongoose.model("Product", productSchema);
