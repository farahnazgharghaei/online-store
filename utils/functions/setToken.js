const jwt= require("jsonwebtoken")
const setToken = (user) => {
  return jwt.sign(
    {
      username: user.username,
      email: user.email,
      role: user.role,
    },
    process.env.SECRET,
    {
      expiresIn: "48h",
    }
  );
};

module.exports={
  setToken
}