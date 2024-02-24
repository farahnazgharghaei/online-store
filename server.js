const express = require('express');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRourter');
const productRouter = require('./routes/productRouter');
const app = express();
require("dotenv").config();
const cors= require("cors")
const mongoose=require('mongoose');
const errorHandler = require('./middlewares/errorMiddleware');
const logger = require('./middlewares/loggerMiddleware');

mongoose
  .connect("mongodb://127.0.0.1:27017/OnlineStoreDB")
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));


app.use(cors());
app.use(express.json())
// app.get("/", index);
// app.get("/login", login);
// app.get("/signup", signup);
app.use(logger)


app.use("/api",indexRouter);
 
app.use(errorHandler)

const port= 5000
app.listen(port, ()=> {
    console.log("Server is runnig on port: " + port);
});
