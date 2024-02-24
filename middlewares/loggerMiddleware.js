const logger = (req, res, next) => {
  console.log("url: " + req.url);
  console.log("method: " + req.method);
  console.log("params: " + req.params);
  console.log("query: " + req.query);
  console.log("body: " + JSON.stringify(req.body));

  next();
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


module.exports=logger