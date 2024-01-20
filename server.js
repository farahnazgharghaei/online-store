const express = require('express');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRourter');
const productRouter = require('./routes/productRouter');
const app = express();


// app.get("/", index);
// app.get("/login", login);
// app.get("/signup", signup);


app.use(productRouter)
app.use(authRouter);
app.use(indexRouter);
 

const port= 5000
app.listen(port, ()=> {
    console.log("Server is runnig on port: " + port);
});
