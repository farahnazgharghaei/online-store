const  express = require('express')
const { index, route404 } = require('../controllers/indexController');
const authRouter = require('./authRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const indexRouter = express.Router()



indexRouter.use(productRouter);
indexRouter.use(authRouter);
indexRouter.use(userRouter);
indexRouter.get('/', index)

indexRouter.use('*', route404)

module.exports = indexRouter