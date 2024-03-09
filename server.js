const express = require('express');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRourter');
const productRouter = require('./routes/productRouter');
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();
require("dotenv").config();
const cors= require("cors")
const mongoose=require('mongoose');
const errorHandler = require('./middlewares/errorMiddleware');
const logger = require('./middlewares/loggerMiddleware');

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));


app.use(cors());
app.use(express.json())
// app.get("/", index);
// app.get("/login", login);
// app.get("/signup", signup);
// app.use(logger)
const logSysterm = fs.createWriteStream(path.join(__dirname, "log.txt"), {
    flags: "a",
  });
app.use( morgan("combined",{stream: logSysterm}));


app.use("/api",indexRouter);
 
app.use(errorHandler)

console.log(process.env.ENV_MODE);
// app.use(path.join(__dirname,"dist"))
app.use(express.static("dist"))

const port= process.env.PORT
app.listen(port, ()=> {
    console.log("Server is runnig on port: " + port);
});
