const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

//  // setup the logger
//  app.use(morgan("combined", { stream: accessLogStream }));

//  app.get("/", function (req, res) {
//    res.send("hello, world!");
//  });

const logger = (req, res, next) => {
  // console.log("url: " + req.url);
  // console.log("method: " + req.method);
  // console.log("params: " + JSON.stringify(req.params));
  // console.log("query: " + JSON.stringify(req.query));
  // console.log("body: " + JSON.stringify(req.body));
  // console.log();

  // console.log(__dirname);
  // next()
  const logSysterm = fs.createWriteStream(path.join(__dirname, "log.txt"), {
    flags: "a",
  });

  // return morgan(
  //   function (tokens, req, res) {
  //     return [
  //       tokens.method(req, res),
  //       tokens.url(req, res),
  //       tokens.status(req, res),
  //       tokens.res(req, res, "content-length"),
  //       "-",
  //       tokens["response-time"](req, res),
  //       "ms",
  //     ].join(" ");
  //   },
  //   {
  //     stream: logSysterm,
  //   }
  // );
};

// const user = {
//   name: "Farahnaz",
//   email: "f.110@gmail.com",
// };
// console.log(user.toString()); /// {object object}
// console.log(JSON.stringify(user));
/// {
//     name:"Farahnaz",
//     email:"f.110@gmail.com"
// }

module.exports = logger;
