const mongoose = require("mongoose");

// Define the roles enum
const userRoles = ["ADMIN", "MODERATOR", "USER"];


const UserSchema = new mongoose.Schema({
  username: {type: String},
  email: {type: String},
  password: {type: String},
  term: { type: Boolean },
  role: { type: String, enum: userRoles, default: "USER" },
});

UserSchema.set("toJSON",{
  transform: (doc, returnObj)=>{
    returnObj.id= returnObj._id.toString(),
    delete returnObj.password,
    delete returnObj.__v,
    delete returnObj._id,
    delete returnObj.term
  }
})


const User = mongoose.model("User", UserSchema);
module.exports = User;
