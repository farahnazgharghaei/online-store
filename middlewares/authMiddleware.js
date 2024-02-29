
const jwt= require("jsonwebtoken")
const isLogined = (req, res, next) => {
  const token = req.headers.token;
if (token) {
  // const onlyToken = token.slice(7, token.length); Bearer ejes34sd54kfllfd
  jwt.verify(token, process.env.SECRET, (err, decode) => {
    if (err) {
      // return res.status(401).send({ msg: "Invalid Token" });
      return res.status(401).send({ err});
    }
    req.user = decode;
    next();
    return;
  });

} else {
  return res.status(401).send({ message: "missing Token" });
}
};

const isAdmin = (req, res, next) => {
  if ((req.user.role = "ADMIN")) {
    return next();
  }
  return res.status(403).send({ message: "forbidden" });
};


module.exports = { isLogined, isAdmin };
