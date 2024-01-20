const login = (req, res) => {
  return res.end("login");
};

const signup = (req, res) => {
  return res.end("signup");
};

module.exports = {
  login,
  signup,
};
