const mongoose = require("mongoose");
const validate = require("mongoose-validator");

const nameValidator = [
  // validate({
  //   validator: "isLength",
  //   arguments: [3, 5],
  //   message: "should be between {ARGS[0]} and {ARGS[1]} characters",
  // })
  // ,
  validate({
    validator: "isAlphanumeric",
    passIfEmpty: true,
    message: "Name should contain alpha-numeric characters only",
  })
];

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    require: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
    validate: nameValidator
    // validator: "isLength",
    // minLength: [8, "Must be at least 8, got {VALUE}"],
  },
  term: { type: Boolean, require: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
